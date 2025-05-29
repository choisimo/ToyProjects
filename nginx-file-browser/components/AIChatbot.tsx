import React, { useState, useRef, useEffect, useImperativeHandle, forwardRef } from "react";
import PromptTemplates, { PromptTemplate } from "./PromptTemplates";
import ChatHistoryExport from "./ChatHistoryExport";

// AI 모델 목록 타입 명시 및 선언
const AI_MODELS: { label: string; value: string }[] = [
  { label: "GPT-4", value: "gpt-4" },
  { label: "Gemini", value: "gemini" },
  { label: "Perplexity", value: "perplexity" },
];

// providerMap에 인덱스 시그니처 추가로 타입 에러 방지
const providerMap: { [key: string]: string } = {
  provider: "provider",
  gemini: "gemini",
  openai: "openai",
  perplexity: "perplexity"
};

const PROVIDERS = [
  { label: "Gemini (Google)", value: "gemini" },
  { label: "OpenAI GPT-4", value: "openai" },
  { label: "Perplexity", value: "perplexity" },
];

const LOCALSTORAGE_KEY = {
  provider: "ai-provider",
  gemini: "ai-api-key-gemini",
  openai: "ai-api-key-openai",
  perplexity: "ai-api-key-perplexity",
};

function getApiKey(provider: string) {
  if (typeof window === "undefined") return "";
  return localStorage.getItem(`ai-api-key-${provider}`) || "";
}

function setApiKey(provider: string, key: string) {
  if (typeof window === "undefined") return;
  localStorage.setItem(`ai-api-key-${provider}`, key);
}

function getProvider() {
  if (typeof window === "undefined") return "gemini";
  return localStorage.getItem("ai-provider") || "gemini";
}

function setProvider(provider: string) {
  if (typeof window === "undefined") return;
  localStorage.setItem("ai-provider", provider);
}

async function callGeminiAPI(prompt: string, apiKey: string) {
  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;
  const payload = { contents: [{ role: "user", parts: [{ text: prompt }] }] };
  try {
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    if (!res.ok) throw new Error(await res.text());
    const data = await res.json();
    return (
      data.candidates?.[0]?.content?.parts?.[0]?.text ||
      "죄송합니다. Gemini AI로부터 응답을 받지 못했습니다."
    );
  } catch (e: any) {
    return `Gemini 오류: ${e.message || e}`;
  }
}

async function callOpenAIAPI(prompt: string, apiKey: string) {
  const url = "https://api.openai.com/v1/chat/completions";
  const payload = {
    model: "gpt-3.5-turbo",
    messages: [{ role: "user", content: prompt }],
    max_tokens: 512,
    temperature: 0.7,
  };
  try {
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify(payload),
    });
    if (!res.ok) throw new Error(await res.text());
    const data = await res.json();
    return (
      data.choices?.[0]?.message?.content?.trim() ||
      "죄송합니다. OpenAI로부터 응답을 받지 못했습니다."
    );
  } catch (e: any) {
    return `OpenAI 오류: ${e.message || e}`;
  }
}

async function callPerplexityAPI(prompt: string, apiKey: string) {
  const url = "https://api.perplexity.ai/chat/completions";
  const payload = {
    model: "pplx-70b-online",
    messages: [{ role: "user", content: prompt }],
    max_tokens: 512,
    temperature: 0.7,
  };
  try {
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify(payload),
    });
    if (!res.ok) throw new Error(await res.text());
    const data = await res.json();
    return (
      data.choices?.[0]?.message?.content?.trim() ||
      "죄송합니다. Perplexity로부터 응답을 받지 못했습니다."
    );
  } catch (e: any) {
    return `Perplexity 오류: ${e.message || e}`;
  }
}

async function callAIProvider(prompt: string, provider: string, apiKey: string) {
  if (provider === "gemini") return callGeminiAPI(prompt, apiKey);
  if (provider === "openai") return callOpenAIAPI(prompt, apiKey);
  if (provider === "perplexity") return callPerplexityAPI(prompt, apiKey);
  return "지원하지 않는 AI Provider입니다.";
}

const RECOMMEND_QUESTIONS = [
  "최신 문서/이미지 파일 찾아줘",
  "공개 파일 디렉토리 설명해줘",
  "문서 공유 서비스 어디 있어?",
  "FAQ 알려줘",
];

export interface AIChatbotHandle {
  setInput: (text: string) => void;
}

const AIChatbot = forwardRef<AIChatbotHandle, { faqList?: string[]; serviceLinks?: { name: string; url: string; desc?: string }[] }>(
  ({ faqList, serviceLinks }, ref) => {

    const [open, setOpen] = useState(false);
    const [messages, setMessages] = useState<{ role: "user" | "ai"; text: string }[]>([]);
    const [selectedModel, setSelectedModel] = useState(AI_MODELS[0].value);
    const [input, setInput] = useState("");

    useImperativeHandle(ref, () => ({
      setInput: (text: string) => setInput(text),
    }));
    const [provider, setProviderState] = useState(getProvider());
    const [apiKey, setApiKeyState] = useState(getApiKey(provider));
    const [loading, setLoading] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
      setApiKeyState(getApiKey(provider));
      setProvider(provider);
    }, [provider]);

    function handleProviderChange(e: React.ChangeEvent<HTMLSelectElement>) {
      setProviderState(e.target.value);
      setApiKeyState(getApiKey(e.target.value));
    }
    function handleApiKeyChange(e: React.ChangeEvent<HTMLInputElement>) {
      setApiKeyState(e.target.value);
      setApiKey(provider, e.target.value);
    }
    function handleSend(msg?: string) {
      const text = (msg || input).trim();
      if (!text) return;
      setMessages((m) => [...m, { role: "user", text }]);
      setInput("");
      setLoading(true);
      // Compose context for prompt
      let context = "";
      if (serviceLinks?.length) {
        context +=
          "\n서비스 목록:\n" +
          serviceLinks.map((l) => `- ${l.name}: ${l.desc || ""} (${l.url})`).join("\n");
      }
      if (faqList?.length) {
        context += "\nFAQ:\n" + faqList.map((q) => `- ${q}`).join("\n");
      }
      const prompt = `${text}\n\n[참고 정보]\n${context}`;
      callAIProvider(prompt, provider, apiKey).then((res) => {
        setMessages((m) => [...m, { role: "ai", text: res }]);
        setLoading(false);
      });
    }

    const handlePromptSelect = (tpl: PromptTemplate) => {
      setInput(tpl.content);
    };

    return (
      <>
        {/* FAB */}
        <button
          className="fixed bottom-6 right-6 z-50 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg w-14 h-14 flex items-center justify-center text-3xl"
          onClick={() => setOpen((o) => !o)}
          aria-label="AI 에이전트 열기"
        >
          🤖
        </button>
        {/* Chat UI */}
        {open && (
          <div className="fixed bottom-24 right-6 z-50 w-80 max-w-full bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-xl shadow-2xl flex flex-col" style={{ minHeight: 420 }}>
            <div className="flex items-center justify-between px-4 py-2 border-b dark:border-gray-700">
              <span className="font-bold text-lg">AI 에이전트</span>
              <button className="text-gray-400 hover:text-gray-700" onClick={() => setOpen(false)} aria-label="닫기">✕</button>
            </div>
            <div className="px-4 py-2 border-b dark:border-gray-700 flex gap-2 items-center">
              <select value={provider} onChange={handleProviderChange} className="border rounded px-2 py-1 text-xs">
                {PROVIDERS.map((p) => (
                  <option value={p.value} key={p.value}>{p.label}</option>
                ))}
              </select>
              <input
                type="password"
                placeholder={provider + " API Key"}
                value={apiKey}
                onChange={handleApiKeyChange}
                className="border rounded px-2 py-1 text-xs flex-1"
              />
            </div>
            <div className="flex-1 overflow-y-auto px-4 py-2 bg-gray-50 dark:bg-gray-800">
              <div className="text-xs text-gray-500 mb-2">아래에 질문을 입력하거나 추천 질문을 클릭해보세요.</div>
              <div className="flex flex-wrap gap-2 mb-2">
                {RECOMMEND_QUESTIONS.map((q) => (
                  <button
                    key={q}
                    className="bg-blue-50 dark:bg-gray-700 text-blue-700 dark:text-blue-200 px-2 py-1 rounded text-xs border border-blue-200 dark:border-gray-600 hover:bg-blue-100"
                    onClick={() => handleSend(q)}
                    disabled={loading}
                  >{q}</button>
                ))}
              </div>
              <div style={{ display: "flex", gap: 16, marginBottom: 12 }}>
                <PromptTemplates onSelect={handlePromptSelect} />
                <div>
                  <label htmlFor="ai-model-select"><b>AI 모델</b></label><br />
                  <select id="ai-model-select" value={selectedModel} onChange={e => setSelectedModel(e.target.value)}>
                    {AI_MODELS.map((m: { label: string; value: string }) => (
                      <option key={m.value} value={m.value}>{m.label}</option>
                    ))}
                  </select>
                </div>
              </div>
              <ChatHistoryExport messages={messages} />
              <div>
                {messages.map((m: { role: "user" | "ai"; text: string }, i: number) => (
                  <div key={i} className={"mb-2 flex " + (m.role === "user" ? "justify-end" : "justify-start")}>
                    <div className={"rounded-lg px-3 py-2 max-w-[80%] " + (m.role === "user" ? "bg-blue-600 text-white" : "bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100")}>
                      {m.text}
                    </div>
                  </div>
                ))}
                {loading && <div className="text-xs text-gray-400">AI 응답 생성 중...</div>}
              </div>
            </div>
            <div className="p-2 border-t dark:border-gray-700">
              <form
                className="flex gap-2"
                onSubmit={e => {
                  e.preventDefault();
                  handleSend();
                }}
              >
                <input
                  ref={inputRef}
                  className="flex-1 border rounded px-2 py-1 text-sm"
                  placeholder="질문을 입력하세요..."
                  value={input}
                  onChange={e => setInput(e.target.value)}
                  disabled={loading}
                  autoFocus
                />
                <button type="submit" className="bg-blue-600 text-white rounded px-3 py-1 text-sm" disabled={loading || !input.trim()}>전송</button>
              </form>
            </div>
          </div>
        )}
      </>
    );
  }
)
export default AIChatbot; 
