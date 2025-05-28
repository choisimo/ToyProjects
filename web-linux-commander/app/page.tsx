"use client"

import { useState, useEffect } from "react"
import { Search, Filter, ChevronDown, ChevronRight, Copy, Info, X, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { commandsData } from "@/lib/commands-data"
import { useMobile } from "@/hooks/use-mobile"

export default function CommandGuide() {
  const [searchTerm, setSearchTerm] = useState("")
  const [activeCategory, setActiveCategory] = useState("전체")
  const [activeSubCategory, setActiveSubCategory] = useState(null)
  const [activeSpecificCategory, setActiveSpecificCategory] = useState(null)
  const [filteredCommands, setFilteredCommands] = useState([])
  const [expandedCommands, setExpandedCommands] = useState({})
  const [showAdvancedSearch, setShowAdvancedSearch] = useState(false)
  const [commandBuilder, setCommandBuilder] = useState([])
  const [suggestedCommands, setSuggestedCommands] = useState([])
  const isMobile = useMobile()

  // Get unique categories
  const getCategories = () => {
    const categories = new Set()
    commandsData.forEach((cmd) => {
      const parts = cmd.category.split(" > ")
      if (parts.length > 0) {
        categories.add(parts[0])
      }
    })
    return ["전체", ...Array.from(categories).sort()]
  }

  // Get subcategories for a given category
  const getSubCategories = (category) => {
    if (category === "전체") return []

    const subCategories = new Set()
    commandsData.forEach((cmd) => {
      const parts = cmd.category.split(" > ")
      if (parts.length > 1 && parts[0] === category) {
        subCategories.add(parts[1])
      }
    })
    return Array.from(subCategories).sort()
  }

  // Get specific categories for a given category and subcategory
  const getSpecificCategories = (category, subCategory) => {
    if (category === "전체" || !subCategory) return []

    const specificCategories = new Set()
    commandsData.forEach((cmd) => {
      const parts = cmd.category.split(" > ")
      if (parts.length > 2 && parts[0] === category && parts[1] === subCategory) {
        specificCategories.add(parts[2])
      }
    })
    return Array.from(specificCategories).sort()
  }

  // Filter commands based on search term and active categories
  useEffect(() => {
    let filtered = commandsData

    // Filter by categories
    if (activeCategory !== "전체") {
      filtered = filtered.filter((cmd) => {
        const parts = cmd.category.split(" > ")
        if (parts[0] !== activeCategory) return false
        if (activeSubCategory && parts.length > 1 && parts[1] !== activeSubCategory) return false
        if (activeSpecificCategory && parts.length > 2 && parts[2] !== activeSpecificCategory) return false
        return true
      })
    }

    // Filter by search term
    if (searchTerm) {
      const lowerSearchTerm = searchTerm.toLowerCase()
      filtered = filtered.filter(
        (cmd) =>
          cmd.commandDisplay.toLowerCase().includes(lowerSearchTerm) ||
          cmd.shortDesc.toLowerCase().includes(lowerSearchTerm) ||
          cmd.longDesc.toLowerCase().includes(lowerSearchTerm) ||
          cmd.category.toLowerCase().includes(lowerSearchTerm) ||
          (cmd.tool && cmd.tool.toLowerCase().includes(lowerSearchTerm)),
      )
    }

    setFilteredCommands(filtered)

    // Generate suggested commands based on search term
    if (searchTerm.length > 1) {
      const suggestions = commandsData
        .filter(
          (cmd) =>
            cmd.commandDisplay.toLowerCase().includes(searchTerm.toLowerCase()) ||
            cmd.shortDesc.toLowerCase().includes(searchTerm.toLowerCase()),
        )
        .slice(0, 5)
      setSuggestedCommands(suggestions)
    } else {
      setSuggestedCommands([])
    }
  }, [searchTerm, activeCategory, activeSubCategory, activeSpecificCategory])

  // Toggle command details
  const toggleCommandDetails = (id) => {
    setExpandedCommands((prev) => ({
      ...prev,
      [id]: !prev[id],
    }))
  }

  // Copy command to clipboard
  const copyToClipboard = (text) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        // Could add a toast notification here
      })
      .catch((err) => {
        console.error("Failed to copy: ", err)
      })
  }

  // Add command to builder
  const addToCommandBuilder = (command) => {
    setCommandBuilder((prev) => [...prev, command])
  }

  // Remove command from builder
  const removeFromCommandBuilder = (index) => {
    setCommandBuilder((prev) => prev.filter((_, i) => i !== index))
  }

  // Get combined command
  const getCombinedCommand = () => {
    return commandBuilder.map((cmd) => cmd.commandDisplay.split(" ")[0]).join(" && ")
  }

  // Reset category filters
  const resetFilters = () => {
    setActiveCategory("전체")
    setActiveSubCategory(null)
    setActiveSpecificCategory(null)
  }

  // Handle category change
  const handleCategoryChange = (category) => {
    setActiveCategory(category)
    setActiveSubCategory(null)
    setActiveSpecificCategory(null)
  }

  // Handle subcategory change
  const handleSubCategoryChange = (subCategory) => {
    setActiveSubCategory(subCategory)
    setActiveSpecificCategory(null)
  }

  return (
    <div className="min-h-screen bg-[#FDFBF7]">
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <h1 className="text-2xl sm:text-3xl font-bold text-center text-[#795548]">종합 명령어 인터랙티브 가이드</h1>
          <p className="text-center text-sm text-gray-600 mt-1">Tmux, Linux, 개발 툴, 프로그램 설치 명령어 모음</p>
        </div>
      </header>

      <main className="container mx-auto p-4 sm:p-6">
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-xl text-[#795548]">가이드 소개</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 text-sm leading-relaxed">
              이 가이드는 터미널 환경에서의 생산성을 높여주는 다양한 도구의 명령어들을 다룹니다. Tmux, Linux 기본
              명령어, Git, Docker와 같은 개발 도구, 그리고 자주 사용되는 프로그램 설치 방법까지 포함합니다. 원하는
              명령어를 카테고리별로 탐색하거나 검색 기능을 이용하여 빠르게 찾아보세요.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardContent className="pt-6">
            {/* Search and filters */}
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="relative flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    type="text"
                    placeholder="명령어 또는 설명 검색..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 pr-10 border-gray-300 focus:ring-2 focus:ring-[#A1887F] focus:border-transparent"
                  />
                  {searchTerm && (
                    <button
                      className="absolute right-3 top-1/2 transform -translate-y-1/2"
                      onClick={() => setSearchTerm("")}
                    >
                      <X className="h-4 w-4 text-gray-400" />
                    </button>
                  )}
                </div>

                {/* Command suggestions */}
                {suggestedCommands.length > 0 && (
                  <div className="absolute z-10 w-full mt-1 bg-white rounded-md shadow-lg border border-gray-200">
                    <ul className="py-1">
                      {suggestedCommands.map((cmd) => (
                        <li
                          key={cmd.id}
                          className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex justify-between items-center"
                          onClick={() => {
                            setSearchTerm(cmd.commandDisplay)
                            setSuggestedCommands([])
                          }}
                        >
                          <div>
                            <div className="font-medium text-sm">{cmd.commandDisplay}</div>
                            <div className="text-xs text-gray-500">{cmd.shortDesc}</div>
                          </div>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={(e) => {
                              e.stopPropagation()
                              addToCommandBuilder(cmd)
                            }}
                          >
                            <Plus className="h-4 w-4" />
                          </Button>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="outline"
                      onClick={() => setShowAdvancedSearch(!showAdvancedSearch)}
                      className="border-gray-300"
                    >
                      <Filter className="h-4 w-4 mr-2" />
                      상세 검색
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>카테고리별 필터링 및 고급 검색 옵션</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>

            {/* Command builder */}
            {commandBuilder.length > 0 && (
              <div className="mb-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-sm font-medium text-gray-700">명령어 조합</h3>
                  <Button variant="ghost" size="sm" onClick={() => copyToClipboard(getCombinedCommand())}>
                    <Copy className="h-4 w-4 mr-2" />
                    복사
                  </Button>
                </div>
                <div className="bg-gray-800 text-white p-3 rounded-md font-mono text-sm overflow-x-auto">
                  {getCombinedCommand()}
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {commandBuilder.map((cmd, index) => (
                    <Badge key={index} variant="secondary" className="flex items-center gap-1">
                      {cmd.commandDisplay.split(" ")[0]}
                      <button onClick={() => removeFromCommandBuilder(index)} className="ml-1 hover:text-red-500">
                        <X className="h-3 w-3" />
                      </button>
                    </Badge>
                  ))}
                </div>
              </div>
            )}

            {/* Category filters */}
            {showAdvancedSearch && (
              <div className="mb-6">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-sm font-medium text-gray-700">카테고리 필터</h3>
                  <Button variant="ghost" size="sm" onClick={resetFilters}>
                    필터 초기화
                  </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {/* Main categories */}
                  <div>
                    <h4 className="text-xs font-medium text-gray-500 mb-2">주요 카테고리</h4>
                    <ScrollArea className="h-40 rounded-md border p-2">
                      <div className="space-y-1">
                        {getCategories().map((category) => (
                          <Button
                            key={category}
                            variant={activeCategory === category ? "default" : "ghost"}
                            size="sm"
                            className="w-full justify-start"
                            onClick={() => handleCategoryChange(category)}
                          >
                            {category}
                          </Button>
                        ))}
                      </div>
                    </ScrollArea>
                  </div>

                  {/* Subcategories */}
                  {activeCategory !== "전체" && (
                    <div>
                      <h4 className="text-xs font-medium text-gray-500 mb-2">하위 카테고리</h4>
                      <ScrollArea className="h-40 rounded-md border p-2">
                        <div className="space-y-1">
                          <Button
                            variant={activeSubCategory === null ? "default" : "ghost"}
                            size="sm"
                            className="w-full justify-start"
                            onClick={() => {
                              setActiveSubCategory(null)
                              setActiveSpecificCategory(null)
                            }}
                          >
                            전체 보기
                          </Button>
                          {getSubCategories(activeCategory).map((subCategory) => (
                            <Button
                              key={subCategory}
                              variant={activeSubCategory === subCategory ? "default" : "ghost"}
                              size="sm"
                              className="w-full justify-start"
                              onClick={() => handleSubCategoryChange(subCategory)}
                            >
                              {subCategory}
                            </Button>
                          ))}
                        </div>
                      </ScrollArea>
                    </div>
                  )}

                  {/* Specific categories */}
                  {activeCategory !== "전체" && activeSubCategory && (
                    <div>
                      <h4 className="text-xs font-medium text-gray-500 mb-2">세부 카테고리</h4>
                      <ScrollArea className="h-40 rounded-md border p-2">
                        <div className="space-y-1">
                          <Button
                            variant={activeSpecificCategory === null ? "default" : "ghost"}
                            size="sm"
                            className="w-full justify-start"
                            onClick={() => setActiveSpecificCategory(null)}
                          >
                            전체 보기
                          </Button>
                          {getSpecificCategories(activeCategory, activeSubCategory).map((specificCategory) => (
                            <Button
                              key={specificCategory}
                              variant={activeSpecificCategory === specificCategory ? "default" : "ghost"}
                              size="sm"
                              className="w-full justify-start"
                              onClick={() => setActiveSpecificCategory(specificCategory)}
                            >
                              {specificCategory}
                            </Button>
                          ))}
                        </div>
                      </ScrollArea>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Active filters display */}
            {(activeCategory !== "전체" || activeSubCategory || activeSpecificCategory) && (
              <div className="flex flex-wrap gap-2 mb-4">
                {activeCategory !== "전체" && (
                  <Badge variant="outline" className="bg-gray-50">
                    {activeCategory}
                    <button className="ml-1 hover:text-red-500" onClick={() => handleCategoryChange("전체")}>
                      <X className="h-3 w-3" />
                    </button>
                  </Badge>
                )}
                {activeSubCategory && (
                  <Badge variant="outline" className="bg-gray-50">
                    {activeSubCategory}
                    <button
                      className="ml-1 hover:text-red-500"
                      onClick={() => {
                        setActiveSubCategory(null)
                        setActiveSpecificCategory(null)
                      }}
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </Badge>
                )}
                {activeSpecificCategory && (
                  <Badge variant="outline" className="bg-gray-50">
                    {activeSpecificCategory}
                    <button className="ml-1 hover:text-red-500" onClick={() => setActiveSpecificCategory(null)}>
                      <X className="h-3 w-3" />
                    </button>
                  </Badge>
                )}
              </div>
            )}
          </CardContent>
        </Card>

        {/* Results count */}
        <div className="mb-4 flex justify-between items-center">
          <h2 className="text-lg font-medium text-gray-700">
            검색 결과 <span className="text-[#795548] font-bold">{filteredCommands.length}</span>개
          </h2>
        </div>

        {/* Command cards */}
        {filteredCommands.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCommands.map((cmd) => (
              <CommandCard
                key={cmd.id}
                command={cmd}
                isExpanded={expandedCommands[cmd.id]}
                onToggle={() => toggleCommandDetails(cmd.id)}
                onCopy={() => copyToClipboard(cmd.commandDisplay)}
                onAddToBuilder={() => addToCommandBuilder(cmd)}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-white rounded-lg shadow">
            <p className="text-gray-500">검색 결과가 없습니다.</p>
            <Button variant="link" onClick={resetFilters} className="mt-2">
              필터 초기화
            </Button>
          </div>
        )}
      </main>

      <footer className="text-center py-8 mt-12 border-t border-gray-200">
        <p className="text-sm text-gray-500">&copy; 2024 종합 명령어 가이드. 학습 목적으로 제작되었습니다.</p>
      </footer>
    </div>
  )
}

// Command Card Component
function CommandCard({ command, isExpanded, onToggle, onCopy, onAddToBuilder }) {
  return (
    <Card className="h-full flex flex-col hover:shadow-md transition-shadow">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <CardTitle className="text-lg font-semibold text-[#795548]">{command.commandDisplay}</CardTitle>
          <div className="flex space-x-1">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={(e) => {
                      e.stopPropagation()
                      onCopy()
                    }}
                  >
                    <Copy className="h-4 w-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>클립보드에 복사</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={(e) => {
                      e.stopPropagation()
                      onAddToBuilder()
                    }}
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>명령어 조합에 추가</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>
        <CardDescription className="text-xs">{command.category}</CardDescription>
      </CardHeader>
      <CardContent className="pb-2 flex-grow">
        <p className="text-sm text-gray-700">{command.shortDesc}</p>
      </CardContent>
      <CardFooter className="pt-0 flex flex-col items-stretch">
        <Button
          variant="ghost"
          className="w-full justify-center text-[#795548] hover:text-[#5D4037] hover:bg-[#F9F5F1]"
          onClick={onToggle}
        >
          {isExpanded ? (
            <>
              간단히 보기
              <ChevronDown className="ml-2 h-4 w-4" />
            </>
          ) : (
            <>
              상세 보기
              <ChevronRight className="ml-2 h-4 w-4" />
            </>
          )}
        </Button>

        {isExpanded && (
          <div className="mt-4 pt-4 border-t border-dashed border-gray-200 bg-[#FAF7F2] p-4 rounded-md">
            <h4 className="text-sm font-medium text-gray-700 mb-2">상세 설명</h4>
            <p className="text-sm text-gray-600 mb-4 whitespace-pre-line">{command.longDesc}</p>

            {command.example && (
              <>
                <h4 className="text-sm font-medium text-gray-700 mb-2">사용 예시</h4>
                {command.exampleType === "bash" ? (
                  <pre className="bg-gray-800 text-gray-200 p-3 rounded-md font-mono text-sm overflow-x-auto whitespace-pre-wrap">
                    {command.example}
                  </pre>
                ) : command.exampleType === "steps" && command.exampleSteps ? (
                  <ol className="list-decimal list-inside text-sm space-y-1 bg-gray-800 text-gray-200 p-3 rounded-md">
                    {command.exampleSteps.map((step, index) => (
                      <li key={index} className="py-1">
                        {step}
                      </li>
                    ))}
                  </ol>
                ) : null}
              </>
            )}

            {command.id === "linux-chmod" && (
              <div className="mt-4 bg-white p-3 rounded-md border border-gray-200">
                <h4 className="text-sm font-medium text-gray-700 mb-2 flex items-center">
                  <Info className="h-4 w-4 mr-1 text-[#795548]" />
                  권한 설정 상세 정보
                </h4>
                <p className="text-sm text-gray-600 mb-2">
                  chmod 명령어는 파일이나 디렉토리의 권한을 변경합니다. 권한은 숫자(8진수) 또는 기호로 표현할 수
                  있습니다.
                </p>
                <h5 className="text-xs font-medium text-gray-700 mt-3 mb-1">숫자 표기법 (8진수)</h5>
                <ul className="text-xs text-gray-600 space-y-1 mb-2">
                  <li>
                    <strong>4</strong> - 읽기 권한 (r)
                  </li>
                  <li>
                    <strong>2</strong> - 쓰기 권한 (w)
                  </li>
                  <li>
                    <strong>1</strong> - 실행 권한 (x)
                  </li>
                </ul>
                <p className="text-xs text-gray-600 mb-2">
                  각 자릿수는 소유자(owner), 그룹(group), 기타 사용자(others)의 권한을 나타냅니다.
                </p>
                <p className="text-xs text-gray-600 mb-2">
                  <strong>예시:</strong> <code className="bg-gray-100 px-1 rounded">chmod 755 script.sh</code>
                </p>
                <ul className="text-xs text-gray-600 space-y-1 mb-3">
                  <li>
                    <strong>7 (4+2+1)</strong> - 소유자: 읽기+쓰기+실행
                  </li>
                  <li>
                    <strong>5 (4+0+1)</strong> - 그룹: 읽기+실행
                  </li>
                  <li>
                    <strong>5 (4+0+1)</strong> - 기타: 읽기+실행
                  </li>
                </ul>

                <h5 className="text-xs font-medium text-gray-700 mt-3 mb-1">기호 표기법</h5>
                <ul className="text-xs text-gray-600 space-y-1">
                  <li>
                    <strong>u</strong> - 소유자(user)
                  </li>
                  <li>
                    <strong>g</strong> - 그룹(group)
                  </li>
                  <li>
                    <strong>o</strong> - 기타 사용자(others)
                  </li>
                  <li>
                    <strong>a</strong> - 모든 사용자(all)
                  </li>
                  <li>
                    <strong>+</strong> - 권한 추가
                  </li>
                  <li>
                    <strong>-</strong> - 권한 제거
                  </li>
                  <li>
                    <strong>=</strong> - 권한 설정
                  </li>
                </ul>
                <p className="text-xs text-gray-600 mt-2">
                  <strong>예시:</strong> <code className="bg-gray-100 px-1 rounded">chmod u+x script.sh</code>{" "}
                  (소유자에게 실행 권한 추가)
                </p>
              </div>
            )}
          </div>
        )}
      </CardFooter>
    </Card>
  )
}
