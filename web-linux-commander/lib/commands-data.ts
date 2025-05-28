export const commandsData = [
  // Tmux Commands (Category: Tmux > SubCategory)
  {
    id: "tmux-new-session",
    tool: "Tmux",
    category: "Tmux > 세션 관리",
    commandDisplay: "tmux new -s [세션이름]",
    shortDesc: "새 이름으로 Tmux 세션 시작",
    longDesc:
      "새로운 이름으로 Tmux 세션을 시작합니다.\n\n세션 이름을 지정하면 나중에 해당 이름으로 세션에 다시 접속할 수 있습니다. 세션 이름을 지정하지 않으면 숫자로 된 기본 이름이 할당됩니다.",
    example: "tmux new -s my_project",
    exampleType: "bash",
  },
  {
    id: "tmux-attach-session",
    tool: "Tmux",
    category: "Tmux > 세션 관리",
    commandDisplay: "tmux attach -t [세션이름]",
    shortDesc: "기존 Tmux 세션에 접속",
    longDesc:
      "이미 실행 중인 특정 Tmux 세션에 다시 접속합니다.\n\n세션에서 detach한 후 다시 접속하거나, 다른 터미널에서 실행 중인 세션에 접속할 때 사용합니다. `-t` 옵션은 target의 약자로, 접속할 세션을 지정합니다.",
    example: "tmux attach -t my_project",
    exampleType: "bash",
  },
  {
    id: "tmux-list-sessions",
    tool: "Tmux",
    category: "Tmux > 세션 관리",
    commandDisplay: "tmux ls",
    shortDesc: "Tmux 세션 목록 보기",
    longDesc:
      "현재 실행 중인 모든 Tmux 세션의 목록을 보여줍니다.\n\n각 세션의 이름, 생성 시간, 창 개수 등의 정보를 확인할 수 있습니다. `tmux list-sessions` 명령어와 동일한 기능입니다.",
    example: "tmux ls",
    exampleType: "bash",
  },
  {
    id: "tmux-detach-session",
    tool: "Tmux",
    category: "Tmux > 세션 관리",
    commandDisplay: "Ctrl + b,  d",
    shortDesc: "현재 세션에서 분리",
    longDesc:
      "현재 접속해 있는 Tmux 세션에서 분리(detach)합니다.\n\n세션은 백그라운드에서 계속 실행되며, 나중에 `tmux attach` 명령어로 다시 접속할 수 있습니다. 터미널을 닫아도 세션은 계속 실행됩니다.",
    exampleSteps: ["`Ctrl + b`를 누릅니다.", "`d` 키를 누릅니다."],
    exampleType: "steps",
  },
  {
    id: "tmux-kill-session",
    tool: "Tmux",
    category: "Tmux > 세션 관리",
    commandDisplay: "tmux kill-session -t [세션이름]",
    shortDesc: "특정 세션 종료",
    longDesc:
      "지정된 이름의 Tmux 세션을 종료합니다.\n\n세션에서 실행 중인 모든 프로그램도 함께 종료됩니다. 세션 이름 대신 세션 번호를 사용할 수도 있습니다.",
    example: "tmux kill-session -t my_project",
    exampleType: "bash",
  },
  {
    id: "tmux-new-window",
    tool: "Tmux",
    category: "Tmux > 창 관리",
    commandDisplay: "Ctrl + b,  c",
    shortDesc: "새 창 생성",
    longDesc:
      "현재 세션 내에 새로운 창(window)을 생성합니다.\n\n하나의 세션 안에 여러 개의 창을 만들 수 있으며, 각 창은 독립적인 터미널 환경을 제공합니다. 창 간에는 `Ctrl+b n`(다음 창) 또는 `Ctrl+b p`(이전 창)로 이동할 수 있습니다.",
    exampleSteps: ["`Ctrl + b`를 누릅니다.", "`c` 키를 누릅니다."],
    exampleType: "steps",
  },
  {
    id: "tmux-list-windows",
    tool: "Tmux",
    category: "Tmux > 창 관리",
    commandDisplay: "Ctrl + b,  w",
    shortDesc: "창 목록 보기",
    longDesc:
      "현재 세션의 모든 창 목록을 보여줍니다.\n\n목록에서 방향키로 원하는 창을 선택하고 Enter 키를 눌러 해당 창으로 이동할 수 있습니다. 각 창의 번호와 이름을 확인할 수 있습니다.",
    exampleSteps: ["`Ctrl + b`를 누릅니다.", "`w` 키를 누릅니다."],
    exampleType: "steps",
  },
  {
    id: "tmux-split-horizontal",
    tool: "Tmux",
    category: "Tmux > 창 분할 관리",
    commandDisplay: 'Ctrl + b,  "',
    shortDesc: "가로로 창 분할",
    longDesc:
      "현재 창을 수평으로 두 개의 창 분할(pane)로 나눕니다.\n\n분할된 창 사이를 이동하려면 `Ctrl+b 방향키`를 사용합니다. 분할 창의 크기는 `Ctrl+b Ctrl+방향키`로 조절할 수 있습니다.",
    exampleSteps: ["`Ctrl + b`를 누릅니다.", '`"` 키를 누릅니다.'],
    exampleType: "steps",
  },
  {
    id: "tmux-split-vertical",
    tool: "Tmux",
    category: "Tmux > 창 분할 관리",
    commandDisplay: "Ctrl + b,  %",
    shortDesc: "세로로 창 분할",
    longDesc:
      "현재 창을 수직으로 두 개의 창 분할(pane)로 나눕니다.\n\n분할된 창 사이를 이동하려면 `Ctrl+b 방향키`를 사용합니다. 분할 창의 크기는 `Ctrl+b Ctrl+방향키`로 조절할 수 있습니다.",
    exampleSteps: ["`Ctrl + b`를 누릅니다.", "`%` 키를 누릅니다."],
    exampleType: "steps",
  },
  {
    id: "tmux-copy-mode",
    tool: "Tmux",
    category: "Tmux > 복사 및 붙여넣기",
    commandDisplay: "Ctrl + b,  [",
    shortDesc: "복사 모드 시작",
    longDesc:
      "복사 모드(Copy Mode)를 시작합니다.\n\n복사 모드에서는 방향키로 이동하고 텍스트를 선택할 수 있습니다. 선택을 시작하려면 `Space` 키를, 선택을 완료하고 복사하려면 `Enter` 키를 누릅니다. vi 또는 emacs 키 바인딩을 사용할 수 있습니다.",
    exampleSteps: [
      "`Ctrl + b`를 누릅니다.",
      "`[` 키를 누릅니다.",
      "방향키로 이동하여 복사할 텍스트의 시작 위치로 이동합니다.",
      "`Space` 키를 눌러 선택을 시작합니다.",
      "방향키로 이동하여 텍스트를 선택합니다.",
      "`Enter` 키를 눌러 선택한 텍스트를 복사합니다.",
    ],
    exampleType: "steps",
  },
  {
    id: "tmux-paste-buffer",
    tool: "Tmux",
    category: "Tmux > 복사 및 붙여넣기",
    commandDisplay: "Ctrl + b,  ]",
    shortDesc: "복사한 텍스트 붙여넣기",
    longDesc:
      "복사한 텍스트를 붙여넣습니다.\n\n복사 모드에서 복사한 텍스트를 현재 커서 위치에 붙여넣습니다. Tmux는 여러 개의 복사 버퍼를 유지할 수 있으며, `Ctrl+b =`를 사용하여 버퍼 목록을 확인하고 선택할 수 있습니다.",
    exampleSteps: ["`Ctrl + b`를 누릅니다.", "`]` 키를 누릅니다."],
    exampleType: "steps",
  },
  {
    id: "tmux-list-key-bindings",
    tool: "Tmux",
    category: "Tmux > 기타",
    commandDisplay: "Ctrl + b,  ?",
    shortDesc: "키 바인딩 목록 보기",
    longDesc:
      "모든 키 바인딩 목록을 보여줍니다.\n\n현재 설정된 모든 단축키와 그 기능을 확인할 수 있습니다. 방향키로 스크롤하여 전체 목록을 볼 수 있으며, `q` 키를 눌러 목록을 닫을 수 있습니다.",
    exampleSteps: ["`Ctrl + b`를 누릅니다.", "`?` 키를 누릅니다."],
    exampleType: "steps",
  },

  // Linux Commands (Category: Linux > SubCategory > SpecificCategory)
  {
    id: "linux-ls",
    tool: "Linux",
    category: "Linux > 파일 시스템 > 기본",
    commandDisplay: "ls [옵션] [경로]",
    shortDesc: "파일/디렉토리 목록",
    longDesc:
      "파일 및 디렉토리 목록을 표시합니다.\n\n주요 옵션:\n-l: 상세 정보 표시 (권한, 소유자, 크기, 날짜 등)\n-a: 숨김 파일 포함\n-h: 사람이 읽기 쉬운 형식으로 파일 크기 표시\n-R: 하위 디렉토리 내용까지 재귀적으로 표시\n\n여러 옵션을 조합하여 사용할 수 있습니다. 예: ls -lah",
    example: "ls -al /home/user",
    exampleType: "bash",
  },
  {
    id: "linux-cd",
    tool: "Linux",
    category: "Linux > 파일 시스템 > 이동",
    commandDisplay: "cd [경로]",
    shortDesc: "디렉토리 변경",
    longDesc:
      "작업 디렉토리를 변경합니다.\n\n특수 경로:\n. : 현재 디렉토리\n.. : 상위 디렉토리\n~ : 홈 디렉토리\n/ : 루트 디렉토리\n- : 이전 디렉토리\n\n경로를 지정하지 않으면 홈 디렉토리로 이동합니다.",
    example: "cd /var/log\ncd ~\ncd ..\ncd -",
    exampleType: "bash",
  },
  {
    id: "linux-pwd",
    tool: "Linux",
    category: "Linux > 파일 시스템 > 확인",
    commandDisplay: "pwd",
    shortDesc: "현재 경로 표시",
    longDesc:
      "현재 작업 디렉토리의 전체 경로를 출력합니다.\n\n절대 경로로 표시되며, 스크립트에서 현재 위치를 확인하거나 복잡한 디렉토리 구조에서 자신의 위치를 파악할 때 유용합니다.",
    example: "pwd",
    exampleType: "bash",
  },
  {
    id: "linux-mkdir",
    tool: "Linux",
    category: "Linux > 파일 시스템 > 생성/삭제",
    commandDisplay: "mkdir [옵션] 디렉토리명",
    shortDesc: "디렉토리 생성",
    longDesc:
      "새로운 디렉토리를 생성합니다.\n\n주요 옵션:\n-p: 필요한 경우 상위 디렉토리도 함께 생성\n-m: 디렉토리 생성 시 권한 설정\n-v: 생성 과정 상세 출력\n\n여러 디렉토리를 한 번에 생성할 수도 있습니다.",
    example: "mkdir new_project\nmkdir -p parent/child/grandchild\nmkdir -m 755 secure_dir",
    exampleType: "bash",
  },
  {
    id: "linux-rm",
    tool: "Linux",
    category: "Linux > 파일 시스템 > 생성/삭제",
    commandDisplay: "rm [옵션] 파일/디렉토리",
    shortDesc: "파일/디렉토리 삭제",
    longDesc:
      "파일 또는 디렉토리를 삭제합니다.\n\n주요 옵션:\n-f: 강제 삭제 (확인 없음)\n-r, -R: 디렉토리와 그 내용을 재귀적으로 삭제\n-i: 각 파일 삭제 전 확인\n-v: 삭제 과정 상세 출력\n\n주의: `-rf` 옵션은 매우 위험할 수 있으며, 특히 루트 디렉토리나 시스템 파일에 사용할 경우 시스템을 복구 불가능한 상태로 만들 수 있습니다.",
    example: "rm file.txt\nrm -rf old_backup\nrm -i *.tmp",
    exampleType: "bash",
  },
  {
    id: "linux-cp",
    tool: "Linux",
    category: "Linux > 파일 시스템 > 복사/이동",
    commandDisplay: "cp [옵션] 원본 대상",
    shortDesc: "파일/디렉토리 복사",
    longDesc:
      "파일이나 디렉토리를 복사합니다.\n\n주요 옵션:\n-r, -R: 디렉토리와 그 내용을 재귀적으로 복사\n-i: 덮어쓰기 전 확인\n-p: 파일 속성(권한, 타임스탬프 등) 유지\n-v: 복사 과정 상세 출력\n-u: 대상 파일이 없거나 원본보다 오래된 경우에만 복사\n\n여러 파일을 한 번에 복사할 경우, 마지막 인자는 대상 디렉토리여야 합니다.",
    example: "cp source.txt dest.txt\ncp -r source_dir/ dest_dir/\ncp -p file1.txt file2.txt backup/",
    exampleType: "bash",
  },
  {
    id: "linux-mv",
    tool: "Linux",
    category: "Linux > 파일 시스템 > 복사/이동",
    commandDisplay: "mv [옵션] 원본 대상",
    shortDesc: "파일/디렉토리 이동 또는 이름 변경",
    longDesc:
      "파일이나 디렉토리를 이동시키거나 이름을 변경합니다.\n\n주요 옵션:\n-i: 덮어쓰기 전 확인\n-f: 강제 이동 (확인 없음)\n-v: 이동 과정 상세 출력\n-u: 대상 파일이 없거나 원본보다 오래된 경우에만 이동\n\n같은 디렉토리 내에서 사용하면 이름 변경, 다른 디렉토리로 지정하면 이동 기능을 수행합니다.",
    example: "mv old.txt new.txt\nmv file.txt /home/user/documents/\nmv -i *.jpg /media/photos/",
    exampleType: "bash",
  },
  {
    id: "linux-cat",
    tool: "Linux",
    category: "Linux > 파일 내용 보기",
    commandDisplay: "cat [옵션] 파일명",
    shortDesc: "파일 내용 출력",
    longDesc:
      "파일 내용을 화면에 출력합니다.\n\n주요 옵션:\n-n: 줄 번호 표시\n-b: 비어있지 않은 줄에만 번호 표시\n-s: 연속된 빈 줄을 하나로 압축\n-A: 모든 제어 문자 표시\n\n여러 파일을 지정하면 모든 파일의 내용을 연결하여 출력합니다. 파일 생성이나 내용 추가에도 사용할 수 있습니다.",
    example: "cat server.log\ncat -n config.txt\ncat file1.txt file2.txt > combined.txt",
    exampleType: "bash",
  },
  {
    id: "linux-less",
    tool: "Linux",
    category: "Linux > 파일 내용 보기",
    commandDisplay: "less [옵션] 파일명",
    shortDesc: "파일 내용 페이지별 보기",
    longDesc:
      "파일 내용을 페이지 단위로 나누어 보여줍니다.\n\n주요 기능:\n- 방향키: 상하좌우 이동\n- Space/Page Down: 다음 페이지\n- b/Page Up: 이전 페이지\n- g: 파일의 처음으로 이동\n- G: 파일의 끝으로 이동\n- /패턴: 패턴 검색\n- n: 다음 검색 결과로 이동\n- N: 이전 검색 결과로 이동\n- q: 종료\n\n대용량 파일을 볼 때 cat보다 효율적이며, 검색 기능도 제공합니다.",
    example: "less long_log.txt\nless -N source_code.c",
    exampleType: "bash",
  },
  {
    id: "linux-grep",
    tool: "Linux",
    category: "Linux > 텍스트 검색",
    commandDisplay: "grep [옵션] 패턴 파일명",
    shortDesc: "패턴 검색",
    longDesc:
      "파일 내에서 특정 패턴(문자열)을 검색합니다.\n\n주요 옵션:\n-i: 대소문자 구분 없이 검색\n-v: 패턴과 일치하지 않는 줄 출력\n-n: 줄 번호 표시\n-r, -R: 디렉토리 내 모든 파일을 재귀적으로 검색\n-l: 패턴이 포함된 파일 이름만 출력\n-c: 패턴이 포함된 줄의 개수만 출력\n-A n: 일치하는 줄 이후 n개 줄 함께 출력\n-B n: 일치하는 줄 이전 n개 줄 함께 출력\n-C n: 일치하는 줄 전후 n개 줄 함께 출력\n\n정규 표현식을 사용하여 복잡한 패턴 검색도 가능합니다.",
    example: 'grep "ERROR" system.log\ngrep -i "warning" *.log\ngrep -r "TODO" --include="*.py" /project',
    exampleType: "bash",
  },
  {
    id: "linux-find",
    tool: "Linux",
    category: "Linux > 파일 검색",
    commandDisplay: "find [경로] [조건]",
    shortDesc: "파일 검색",
    longDesc:
      '특정 조건에 맞는 파일을 검색합니다.\n\n주요 조건:\n-name "패턴": 파일명으로 검색\n-type f/d/l: 파일(f)/디렉토리(d)/심볼릭 링크(l) 타입 지정\n-size +/-n[cwbkMG]: 파일 크기로 검색\n-mtime +/-n: 수정 시간으로 검색 (n일)\n-user 사용자명: 소유자로 검색\n-perm 권한: 권한으로 검색\n-exec 명령어 {} \\;: 찾은 각 파일에 명령어 실행\n\n여러 조건을 조합하여 복잡한 검색이 가능합니다.',
    example:
      'find /home -name "*.log"\nfind . -type f -size +10M\nfind /var -mtime -7 -name "*.gz"\nfind . -name "*.tmp" -exec rm {} \\;',
    exampleType: "bash",
  },
  {
    id: "linux-chmod",
    tool: "Linux",
    category: "Linux > 권한 관리",
    commandDisplay: "chmod [옵션] 권한 파일/디렉토리",
    shortDesc: "권한 변경",
    longDesc:
      "파일 또는 디렉토리의 접근 권한을 변경합니다.\n\n권한은 숫자(8진수) 또는 기호로 표현할 수 있습니다.\n\n숫자 표기법:\n4: 읽기 권한 (r)\n2: 쓰기 권한 (w)\n1: 실행 권한 (x)\n\n각 자릿수는 소유자(owner), 그룹(group), 기타 사용자(others)의 권한을 나타냅니다.\n\n기호 표기법:\nu: 소유자(user)\ng: 그룹(group)\no: 기타 사용자(others)\na: 모든 사용자(all)\n+: 권한 추가\n-: 권한 제거\n=: 권한 설정\n\n주요 옵션:\n-R: 디렉토리와 그 내용에 재귀적으로 적용",
    example: "chmod 755 script.sh\nchmod u+x file.sh\nchmod -R go-w directory/",
    exampleType: "bash",
  },
  {
    id: "linux-chown",
    tool: "Linux",
    category: "Linux > 권한 관리",
    commandDisplay: "chown [옵션] 소유자:그룹 파일/디렉토리",
    shortDesc: "소유자/그룹 변경",
    longDesc:
      "파일 또는 디렉토리의 소유자 및 그룹을 변경합니다.\n\n소유자만 변경: chown 소유자 파일\n그룹만 변경: chown :그룹 파일\n소유자와 그룹 모두 변경: chown 소유자:그룹 파일\n\n주요 옵션:\n-R: 디렉토리와 그 내용에 재귀적으로 적용\n-v: 변경 과정 상세 출력\n-c: 변경된 파일만 출력\n\n일반적으로 root 권한이 필요합니다.",
    example:
      "sudo chown user:group data.txt\nsudo chown -R www-data:www-data /var/www/\nsudo chown :developers project_dir/",
    exampleType: "bash",
  },
  {
    id: "linux-ps",
    tool: "Linux",
    category: "Linux > 프로세스 관리",
    commandDisplay: "ps [옵션]",
    shortDesc: "프로세스 목록",
    longDesc:
      "현재 실행 중인 프로세스 목록을 표시합니다.\n\n주요 옵션:\naux: 모든 사용자의 모든 프로세스 상세 정보 표시\n-e: 모든 프로세스 표시\n-f: 전체 형식으로 표시 (더 많은 정보)\n--forest: 프로세스 트리 구조로 표시\n-o 필드: 출력할 필드 지정\n\n출력 정보:\nPID: 프로세스 ID\nUSER: 프로세스 소유자\n%CPU: CPU 사용률\n%MEM: 메모리 사용률\nVSZ: 가상 메모리 크기\nRSS: 실제 메모리 사용량\nTTY: 터미널\nSTAT: 프로세스 상태\nSTART: 시작 시간\nTIME: CPU 사용 시간\nCOMMAND: 실행 명령어",
    example: "ps aux\nps -ef\nps aux | grep nginx\nps -o pid,user,%cpu,%mem,cmd",
    exampleType: "bash",
  },
  {
    id: "linux-kill",
    tool: "Linux",
    category: "Linux > 프로세스 관리",
    commandDisplay: "kill [옵션] PID",
    shortDesc: "프로세스 종료",
    longDesc:
      "프로세스를 종료시킵니다.\n\n주요 시그널:\n1 (HUP): 재시작\n2 (INT): 인터럽트 (Ctrl+C와 동일)\n9 (KILL): 강제 종료 (프로세스가 정리 작업을 수행할 수 없음)\n15 (TERM): 정상 종료 (기본값)\n\n주요 옵션:\n-l: 사용 가능한 시그널 목록 표시\n-s 시그널: 보낼 시그널 지정\n\n여러 PID를 지정하여 한 번에 여러 프로세스를 종료할 수 있습니다.",
    example: "kill 12345\nkill -9 12345\nkill -s TERM 12345\nkillall nginx",
    exampleType: "bash",
  },
  {
    id: "linux-top",
    tool: "Linux",
    category: "Linux > 시스템 모니터링",
    commandDisplay: "top",
    shortDesc: "실시간 시스템 모니터링",
    longDesc:
      "시스템 프로세스 상태를 실시간으로 보여줍니다.\n\n주요 기능:\n- q: 종료\n- h: 도움말\n- k: 프로세스 종료 (PID 입력 필요)\n- r: 프로세스 우선순위 변경 (renice)\n- f: 표시할 필드 선택\n- o: 정렬 기준 변경\n- u: 특정 사용자의 프로세스만 표시\n- M: 메모리 사용량 기준 정렬\n- P: CPU 사용량 기준 정렬\n- 1: 각 CPU 코어 사용량 개별 표시\n\n상단에는 시스템 요약 정보(업타임, 부하, 프로세스 수, CPU/메모리 사용량 등)가 표시됩니다.",
    example: "top\ntop -u username\ntop -p 1234,5678",
    exampleType: "bash",
  },
  {
    id: "linux-df",
    tool: "Linux",
    category: "Linux > 시스템 정보",
    commandDisplay: "df [옵션]",
    shortDesc: "디스크 공간 사용량",
    longDesc:
      "파일 시스템의 디스크 공간 사용량을 표시합니다.\n\n주요 옵션:\n-h: 사람이 읽기 쉬운 형식으로 표시 (KB, MB, GB 등)\n-T: 파일 시스템 유형 표시\n-i: inode 정보 표시\n-a: 모든 파일 시스템 표시 (0 크기 포함)\n-x 유형: 특정 유형의 파일 시스템 제외\n\n출력 정보:\nFilesystem: 파일 시스템\nSize: 전체 크기\nUsed: 사용 중인 공간\nAvail: 사용 가능한 공간\nUse%: 사용률\nMounted on: 마운트 지점",
    example: "df -h\ndf -hT\ndf -h /home",
    exampleType: "bash",
  },
  {
    id: "linux-du",
    tool: "Linux",
    category: "Linux > 시스템 정보",
    commandDisplay: "du [옵션] 경로",
    shortDesc: "파일/디렉토리 크기",
    longDesc:
      "파일 또는 디렉토리의 디스크 사용량을 표시합니다.\n\n주요 옵션:\n-h: 사람이 읽기 쉬운 형식으로 표시 (KB, MB, GB 등)\n-s: 요약 정보만 표시 (지정된 디렉토리의 총 크기)\n-a: 모든 파일과 디렉토리 표시\n-c: 총 합계 표시\n--max-depth=N: 지정된 깊이까지만 표시\n-x: 현재 파일 시스템에만 제한\n\n기본적으로 각 디렉토리와 하위 디렉토리의 크기를 표시합니다.",
    example: "du -sh /var/log\ndu -h --max-depth=1 /home\ndu -sch *.log",
    exampleType: "bash",
  },
  {
    id: "linux-ip",
    tool: "Linux",
    category: "Linux > 네트워크 > 인터페이스/라우팅",
    commandDisplay: "ip [옵션] 대상 명령어",
    shortDesc: "네트워크 설정 (신형)",
    longDesc:
      "네트워크 인터페이스, IP 주소, 라우팅 테이블 등을 관리합니다.\n\n주요 대상:\naddr: 주소 관리\nlink: 네트워크 디바이스 관리\nroute: 라우팅 테이블 관리\nneigh: 이웃 테이블 관리 (ARP)\nrule: 라우팅 정책 관리\ntunnel: 터널 관리\nmaddr: 멀티캐스트 주소 관리\n\n주요 명령어:\nshow/list: 정보 표시\nadd: 항목 추가\ndel: 항목 삭제\nset: 항목 설정 변경\n\n`ip` 명령어는 이전의 `ifconfig`, `route` 등의 명령어를 대체하는 현대적인 네트워크 관리 도구입니다.",
    example: "ip addr show\nip link set dev eth0 up\nip route add default via 192.168.1.1\nip neigh show",
    exampleType: "bash",
  },
  {
    id: "linux-ping",
    tool: "Linux",
    category: "Linux > 네트워크 > 연결 확인",
    commandDisplay: "ping [옵션] 호스트",
    shortDesc: "네트워크 연결 확인",
    longDesc:
      "지정한 호스트와 네트워크 연결 상태를 확인합니다.\n\n주요 옵션:\n-c 횟수: 지정한 횟수만큼만 ping 전송\n-i 초: ping 간격 설정 (초 단위)\n-s 크기: 패킷 크기 설정 (바이트 단위)\n-t TTL: TTL(Time To Live) 값 설정\n-W 초: 응답 대기 시간 설정\n-4/-6: IPv4/IPv6 사용\n\nping은 ICMP 프로토콜을 사용하여 호스트 도달 가능성, 응답 시간, 패킷 손실률 등을 측정합니다.",
    example: "ping google.com\nping -c 5 192.168.1.1\nping -i 0.5 -s 1000 server.example.com",
    exampleType: "bash",
  },
  {
    id: "linux-netstat",
    tool: "Linux",
    category: "Linux > 네트워크 > 연결 상태",
    commandDisplay: "netstat [옵션]",
    shortDesc: "네트워크 연결/포트 상태",
    longDesc:
      "네트워크 연결, 라우팅 테이블, 인터페이스 통계 등을 표시합니다.\n\n주요 옵션:\n-t: TCP 연결 표시\n-u: UDP 연결 표시\n-l: 리스닝 소켓만 표시\n-n: 호스트명, 포트명을 숫자로 표시\n-p: 프로세스 ID와 프로그램명 표시\n-r: 라우팅 테이블 표시\n-i: 네트워크 인터페이스 통계 표시\n-s: 프로토콜별 통계 표시\n-a: 모든 연결 표시\n\n`ss` 명령어가 `netstat`의 현대적 대체제로 권장됩니다.",
    example: "netstat -tulnp\nnetstat -r\nnetstat -i\nss -tunlp",
    exampleType: "bash",
  },
  {
    id: "linux-ssh",
    tool: "Linux",
    category: "Linux > 원격 접속",
    commandDisplay: "ssh [옵션] 사용자@호스트",
    shortDesc: "원격 서버 접속 (SSH)",
    longDesc:
      "원격 서버에 안전하게 접속합니다.\n\n주요 옵션:\n-p 포트: 기본 포트(22) 대신 지정한 포트 사용\n-i 키파일: 지정한 개인 키 파일 사용\n-X: X11 포워딩 활성화 (GUI 애플리케이션 실행 가능)\n-L 로컬포트:원격호스트:원격포트: 로컬 포트 포워딩\n-R 원격포트:로컬호스트:로컬포트: 원격 포트 포워딩\n-D 포트: 동적 포트 포워딩 (SOCKS 프록시)\n-v: 상세 정보 출력 (디버깅용)\n\n원격 명령어 실행: ssh 사용자@호스트 명령어",
    example:
      'ssh myuser@example.com\nssh -p 2222 user@server\nssh -i ~/.ssh/id_rsa user@server\nssh user@server "ls -la"',
    exampleType: "bash",
  },
  {
    id: "linux-scp",
    tool: "Linux",
    category: "Linux > 원격 접속",
    commandDisplay: "scp [옵션] 원본 대상",
    shortDesc: "원격 파일 복사 (SCP)",
    longDesc:
      "원격 서버와 안전하게 파일을 복사합니다.\n\n주요 옵션:\n-P 포트: 기본 포트(22) 대신 지정한 포트 사용\n-i 키파일: 지정한 개인 키 파일 사용\n-r: 디렉토리와 그 내용을 재귀적으로 복사\n-p: 원본 파일의 권한과 타임스탬프 유지\n-q: 진행 상황 표시 없음 (조용한 모드)\n-C: 압축 활성화\n-v: 상세 정보 출력 (디버깅용)\n\n원격 경로 형식: 사용자@호스트:경로",
    example:
      "scp file.txt user@host:/remote/dir/\nscp -r local_dir/ user@host:/remote/dir/\nscp user@host:/remote/file.txt local_dir/\nscp -P 2222 -i ~/.ssh/id_rsa file.txt user@host:~/",
    exampleType: "bash",
  },
  {
    id: "linux-tar",
    tool: "Linux",
    category: "Linux > 압축 및 아카이브",
    commandDisplay: "tar [옵션] 파일명 [대상]",
    shortDesc: "아카이브 생성/해제 (tar)",
    longDesc:
      "파일 및 디렉토리를 아카이브로 묶거나 해제합니다.\n\n주요 옵션:\nc: 아카이브 생성\nx: 아카이브 해제\nt: 아카이브 내용 확인\nv: 상세 정보 출력 (verbose)\nf: 파일명 지정 (필수)\nz: gzip 압축/해제 (.tar.gz, .tgz)\nj: bzip2 압축/해제 (.tar.bz2)\nJ: xz 압축/해제 (.tar.xz)\np: 권한 유지\n--exclude=패턴: 특정 파일/디렉토리 제외\n\n옵션은 하이픈 없이 사용할 수 있습니다 (예: tar cvf).",
    example:
      'tar czvf archive.tar.gz my_folder/\ntar xzvf archive.tar.gz\ntar tvf archive.tar\ntar czvf backup.tar.gz --exclude="*.tmp" /home/user',
    exampleType: "bash",
  },
  {
    id: "linux-apt-update",
    tool: "Linux",
    category: "Linux > 패키지 관리 > APT (Debian/Ubuntu)",
    commandDisplay: "sudo apt update",
    shortDesc: "패키지 목록 업데이트",
    longDesc:
      "사용 가능한 패키지 목록을 최신 상태로 업데이트합니다.\n\n이 명령어는 실제로 패키지를 업그레이드하지 않고, 저장소에서 사용 가능한 패키지 정보만 가져옵니다. 패키지 설치나 업그레이드 전에 항상 실행하는 것이 좋습니다.\n\n`apt`는 `apt-get`의 사용자 친화적인 버전으로, 진행 표시줄과 색상 등 더 나은 인터페이스를 제공합니다.",
    example: "sudo apt update",
    exampleType: "bash",
  },
  {
    id: "linux-apt-upgrade",
    tool: "Linux",
    category: "Linux > 패키지 관리 > APT (Debian/Ubuntu)",
    commandDisplay: "sudo apt upgrade",
    shortDesc: "설치된 패키지 업그레이드",
    longDesc:
      '설치된 모든 패키지를 최신 버전으로 업그레이드합니다.\n\n주요 옵션:\n-y: 모든 확인 질문에 자동으로 "예" 응답\n--no-install-recommends: 권장 패키지 설치 안 함\n--only-upgrade: 이미 설치된 패키지만 업그레이드\n\n`apt full-upgrade` 또는 `apt-get dist-upgrade`는 필요한 경우 다른 패키지를 제거하면서 업그레이드를 수행합니다.',
    example: "sudo apt upgrade -y\nsudo apt full-upgrade",
    exampleType: "bash",
  },
  {
    id: "linux-apt-install",
    tool: "Linux",
    category: "Linux > 패키지 관리 > APT (Debian/Ubuntu)",
    commandDisplay: "sudo apt install [패키지명]",
    shortDesc: "패키지 설치",
    longDesc:
      '새로운 패키지를 설치합니다.\n\n주요 옵션:\n-y: 모든 확인 질문에 자동으로 "예" 응답\n--no-install-recommends: 권장 패키지 설치 안 함\n--reinstall: 이미 설치된 패키지 재설치\n--only-upgrade: 이미 설치된 경우에만 업그레이드\n-f, --fix-broken: 깨진 의존성 수정\n\n여러 패키지를 한 번에 설치할 수 있습니다.',
    example: "sudo apt install nginx\nsudo apt install -y git vim curl\nsudo apt install --reinstall python3",
    exampleType: "bash",
  },
  {
    id: "linux-apt-remove",
    tool: "Linux",
    category: "Linux > 패키지 관리 > APT (Debian/Ubuntu)",
    commandDisplay: "sudo apt remove [패키지명]",
    shortDesc: "패키지 삭제",
    longDesc:
      '설치된 패키지를 삭제합니다 (설정 파일은 남김).\n\n주요 옵션:\n-y: 모든 확인 질문에 자동으로 "예" 응답\n--purge: 설정 파일까지 완전히 제거 (또는 `apt purge` 사용)\n--autoremove: 더 이상 필요하지 않은 의존성 패키지도 함께 제거\n\n여러 패키지를 한 번에 삭제할 수 있습니다.',
    example: "sudo apt remove nginx\nsudo apt purge nginx\nsudo apt remove --autoremove nodejs",
    exampleType: "bash",
  },
  {
    id: "linux-apt-autoremove",
    tool: "Linux",
    category: "Linux > 패키지 관리 > APT (Debian/Ubuntu)",
    commandDisplay: "sudo apt autoremove",
    shortDesc: "불필요한 패키지 자동 삭제",
    longDesc:
      '더 이상 필요하지 않은 의존성 패키지들을 자동으로 삭제합니다.\n\n주요 옵션:\n-y: 모든 확인 질문에 자동으로 "예" 응답\n--purge: 설정 파일까지 완전히 제거\n\n다른 패키지의 의존성으로 설치되었지만, 해당 패키지가 제거된 후 더 이상 필요하지 않은 패키지들을 정리합니다.',
    example: "sudo apt autoremove -y\nsudo apt autoremove --purge",
    exampleType: "bash",
  },
  {
    id: "linux-yum-update",
    tool: "Linux",
    category: "Linux > 패키지 관리 > YUM/DNF (RHEL/CentOS)",
    commandDisplay: "sudo yum update",
    shortDesc: "패키지 업데이트 (YUM)",
    longDesc:
      '(DNF도 유사) 시스템의 모든 패키지를 업데이트합니다.\n\n주요 옵션:\n-y: 모든 확인 질문에 자동으로 "예" 응답\n--security: 보안 업데이트만 적용\n--exclude=패키지명: 지정한 패키지 제외\n\nRHEL/CentOS 8 이상에서는 `dnf`가 `yum`을 대체합니다. 명령어와 옵션은 거의 동일합니다.',
    example: "sudo yum update -y\nsudo dnf update\nsudo yum update --security",
    exampleType: "bash",
  },
  {
    id: "linux-yum-install",
    tool: "Linux",
    category: "Linux > 패키지 관리 > YUM/DNF (RHEL/CentOS)",
    commandDisplay: "sudo yum install [패키지명]",
    shortDesc: "패키지 설치 (YUM)",
    longDesc:
      '(DNF도 유사) 새로운 패키지를 설치합니다.\n\n주요 옵션:\n-y: 모든 확인 질문에 자동으로 "예" 응답\n--nogpgcheck: GPG 서명 확인 건너뛰기\n--enablerepo=저장소: 특정 저장소 활성화\n--disablerepo=저장소: 특정 저장소 비활성화\n\n여러 패키지를 한 번에 설치할 수 있습니다.',
    example: "sudo yum install httpd\nsudo dnf install -y git vim curl\nsudo yum install --enablerepo=epel nginx",
    exampleType: "bash",
  },

  // DevTools Commands
  {
    id: "git-clone",
    tool: "Git",
    category: "개발 툴 > Git (버전 관리)",
    commandDisplay: "git clone [저장소 URL]",
    shortDesc: "원격 저장소 복제",
    longDesc:
      "원격 저장소의 내용을 로컬로 복제합니다.\n\n주요 옵션:\n--depth=n: 지정한 깊이까지만 히스토리 가져오기 (얕은 복제)\n--branch, -b: 특정 브랜치만 복제\n--recursive: 서브모듈 포함하여 복제\n\n복제 후에는 원격 저장소의 모든 브랜치와 태그가 로컬에 생성되며, origin이라는 이름으로 원격 저장소가 설정됩니다.",
    example:
      "git clone https://github.com/user/repo.git\ngit clone --depth=1 https://github.com/user/repo.git\ngit clone -b develop https://github.com/user/repo.git",
    exampleType: "bash",
  },
  {
    id: "git-add",
    tool: "Git",
    category: "개발 툴 > Git (버전 관리)",
    commandDisplay: "git add [파일/디렉토리]",
    shortDesc: "변경사항 스테이징",
    longDesc:
      "커밋할 변경사항을 스테이징 영역에 추가합니다.\n\n주요 옵션:\n-A, --all: 모든 변경사항 추가 (새 파일, 수정된 파일, 삭제된 파일)\n-u, --update: 수정되거나 삭제된 파일만 추가 (새 파일 제외)\n-p, --patch: 각 변경사항을 대화식으로 선택\n\n특정 파일이나 디렉토리를 지정하거나, 패턴을 사용할 수 있습니다.",
    example: "git add .\ngit add file.txt\ngit add src/*.js\ngit add -p",
    exampleType: "bash",
  },
  {
    id: "git-commit",
    tool: "Git",
    category: "개발 툴 > Git (버전 관리)",
    commandDisplay: 'git commit -m "[커밋 메시지]"',
    shortDesc: "변경사항 커밋",
    longDesc:
      '스테이징된 변경사항을 로컬 저장소에 기록합니다.\n\n주요 옵션:\n-m "메시지": 커밋 메시지 지정\n-a: 수정되거나 삭제된 파일을 자동으로 스테이징 (git add -u와 유사)\n--amend: 이전 커밋 수정\n--no-edit: 커밋 메시지 편집 없이 --amend 사용\n\n좋은 커밋 메시지는 변경 내용을 명확하게 설명해야 합니다.',
    example:
      'git commit -m "Initial commit"\ngit commit -am "Fix login bug"\ngit commit --amend -m "New commit message"',
    exampleType: "bash",
  },
  {
    id: "git-push",
    tool: "Git",
    category: "개발 툴 > Git (버전 관리)",
    commandDisplay: "git push [원격 저장소 별명] [브랜치명]",
    shortDesc: "로컬 커밋 원격 푸시",
    longDesc:
      "로컬 저장소의 커밋을 원격 저장소로 업로드합니다.\n\n주요 옵션:\n-u, --set-upstream: 추적 관계 설정 (이후 git push만으로 푸시 가능)\n--force, -f: 강제 푸시 (주의: 원격 저장소의 커밋 덮어쓰기)\n--tags: 모든 태그 푸시\n--all: 모든 브랜치 푸시\n\n원격 저장소와 브랜치를 지정하지 않으면 현재 브랜치의 추적 브랜치로 푸시합니다.",
    example: "git push origin main\ngit push -u origin feature/login\ngit push --tags\ngit push --force origin develop",
    exampleType: "bash",
  },
  {
    id: "git-pull",
    tool: "Git",
    category: "개발 툴 > Git (버전 관리)",
    commandDisplay: "git pull [원격 저장소 별명] [브랜치명]",
    shortDesc: "원격 변경사항 가져오기 및 병합",
    longDesc:
      "원격 저장소의 변경사항을 로컬로 가져와 현재 브랜치에 병합합니다.\n\n주요 옵션:\n--rebase: 병합 대신 리베이스 사용\n--no-commit: 자동 커밋 없이 병합\n--ff-only: fast-forward 가능한 경우에만 병합\n\n`git pull`은 `git fetch` + `git merge FETCH_HEAD`와 동일합니다.",
    example: "git pull origin main\ngit pull --rebase origin develop\ngit pull --no-commit",
    exampleType: "bash",
  },
  {
    id: "git-status",
    tool: "Git",
    category: "개발 툴 > Git (버전 관리)",
    commandDisplay: "git status",
    shortDesc: "작업 디렉토리 상태 확인",
    longDesc:
      "현재 작업 디렉토리와 스테이징 영역의 상태를 보여줍니다.\n\n주요 옵션:\n-s, --short: 간략한 형식으로 출력\n-b, --branch: 현재 브랜치 정보 포함\n--ignored: 무시된 파일도 표시\n\n변경된 파일, 스테이징된 파일, 추적되지 않는 파일, 브랜치 정보 등을 확인할 수 있습니다.",
    example: "git status\ngit status -s\ngit status -sb",
    exampleType: "bash",
  },
  {
    id: "git-branch",
    tool: "Git",
    category: "개발 툴 > Git (버전 관리)",
    commandDisplay: "git branch [브랜치명]",
    shortDesc: "브랜치 관리",
    longDesc:
      "브랜치를 생성, 목록 확인, 삭제 등의 작업을 수행합니다.\n\n주요 옵션:\n-a: 모든 브랜치 표시 (로컬 + 원격)\n-r: 원격 브랜치만 표시\n-d, --delete: 브랜치 삭제\n-D: 강제 삭제 (병합되지 않은 브랜치도 삭제)\n-m, --move: 브랜치 이름 변경\n-v, --verbose: 각 브랜치의 마지막 커밋 표시\n\n인자 없이 사용하면 로컬 브랜치 목록을 보여줍니다.",
    example: "git branch feature/new-login\ngit branch -d old-feature\ngit branch -a\ngit branch -m old-name new-name",
    exampleType: "bash",
  },
  {
    id: "git-checkout",
    tool: "Git",
    category: "개발 툴 > Git (버전 관리)",
    commandDisplay: "git checkout [브랜치명/커밋]",
    shortDesc: "브랜치 전환 또는 파일 복원",
    longDesc:
      "다른 브랜치로 전환하거나 특정 커밋 상태로 작업 디렉토리를 변경합니다.\n\n주요 옵션:\n-b 브랜치명: 새 브랜치 생성 후 전환\n-B 브랜치명: 브랜치가 존재하면 재설정, 없으면 생성 후 전환\n--: 파일명과 브랜치명 구분\n-f, --force: 변경사항 무시하고 강제 전환\n\n특정 파일만 복원할 수도 있습니다: git checkout [커밋] -- [파일]",
    example:
      "git checkout develop\ngit checkout -b feature/login\ngit checkout HEAD~2 myfile.txt\ngit checkout -- file.txt",
    exampleType: "bash",
  },
  {
    id: "docker-run",
    tool: "Docker",
    category: "개발 툴 > Docker (컨테이너)",
    commandDisplay: "docker run [옵션] 이미지 [명령]",
    shortDesc: "컨테이너 실행",
    longDesc:
      "지정된 이미지로부터 새 컨테이너를 생성하고 실행합니다.\n\n주요 옵션:\n-d, --detach: 백그라운드에서 실행\n-p, --publish 호스트포트:컨테이너포트: 포트 매핑\n-v, --volume 호스트경로:컨테이너경로: 볼륨 마운트\n--name 이름: 컨테이너 이름 지정\n-e, --env 변수=값: 환경 변수 설정\n--rm: 종료 시 자동 삭제\n-it: 대화형 터미널 연결\n--network 네트워크: 네트워크 연결\n\n컨테이너 내에서 실행할 명령을 지정할 수 있습니다.",
    example:
      "docker run -d -p 80:80 nginx\ndocker run -it --rm ubuntu bash\ndocker run -d --name my_db -e MYSQL_ROOT_PASSWORD=secret -v data:/var/lib/mysql mysql:5.7",
    exampleType: "bash",
  },
  {
    id: "docker-ps",
    tool: "Docker",
    category: "개발 툴 > Docker (컨테이너)",
    commandDisplay: "docker ps [옵션]",
    shortDesc: "실행 중인 컨테이너 목록",
    longDesc:
      "현재 실행 중인 컨테이너 목록을 보여줍니다. `-a` 옵션은 중지된 컨테이너도 포함합니다.\n\n주요 옵션:\n-a, --all: 모든 컨테이너 표시 (중지된 컨테이너 포함)\n-q, --quiet: 컨테이너 ID만 표시\n-s, --size: 디스크 사용량 표시\n--filter key=value: 필터링 (예: status=running)\n--format: 출력 형식 지정\n\n출력 정보:\nCONTAINER ID: 컨테이너 ID\nIMAGE: 사용된 이미지\nCOMMAND: 실행 중인 명령\nCREATED: 생성 시간\nSTATUS: 상태\nPORTS: 포트 매핑\nNAMES: 컨테이너 이름",
    example: "docker ps\ndocker ps -a\ndocker ps -q\ndocker ps --filter status=exited",
    exampleType: "bash",
  },
  {
    id: "docker-images",
    tool: "Docker",
    category: "개발 툴 > Docker (컨테이너)",
    commandDisplay: "docker images",
    shortDesc: "로컬 이미지 목록",
    longDesc:
      "로컬 시스템에 저장된 도커 이미지 목록을 보여줍니다.\n\n주요 옵션:\n-a, --all: 모든 이미지 표시 (중간 이미지 포함)\n-q, --quiet: 이미지 ID만 표시\n--filter key=value: 필터링 (예: dangling=true)\n--format: 출력 형식 지정\n--digests: 다이제스트 표시\n\n출력 정보:\nREPOSITORY: 이미지 저장소\nTAG: 이미지 태그\nIMAGE ID: 이미지 ID\nCREATED: 생성 시간\nSIZE: 이미지 크기",
    example: "docker images\ndocker images -a\ndocker images --filter dangling=true\ndocker images nginx",
    exampleType: "bash",
  },
  {
    id: "docker-pull",
    tool: "Docker",
    category: "개발 툴 > Docker (컨테이너)",
    commandDisplay: "docker pull 이미지명[:태그]",
    shortDesc: "이미지 다운로드",
    longDesc:
      "도커 허브 또는 다른 레지스트리에서 이미지를 다운로드합니다.\n\n주요 옵션:\n-a, --all-tags: 모든 태그 다운로드\n--disable-content-trust: 이미지 서명 확인 비활성화\n--platform: 특정 플랫폼용 이미지 다운로드\n\n태그를 지정하지 않으면 기본적으로 latest 태그가 사용됩니다.",
    example:
      "docker pull ubuntu:latest\ndocker pull nginx:1.19\ndocker pull -a mysql\ndocker pull --platform linux/arm64 node:14",
    exampleType: "bash",
  },
  {
    id: "docker-stop",
    tool: "Docker",
    category: "개발 툴 > Docker (컨테이너)",
    commandDisplay: "docker stop 컨테이너ID/이름",
    shortDesc: "컨테이너 중지",
    longDesc:
      "실행 중인 컨테이너를 중지합니다.\n\n주요 옵션:\n-t, --time 초: 강제 종료 전 대기 시간 (기본값: 10초)\n\n여러 컨테이너를 한 번에 중지할 수 있습니다. 컨테이너는 SIGTERM 신호를 받고, 지정된 시간 내에 종료되지 않으면 SIGKILL 신호를 받습니다.",
    example:
      "docker stop my_nginx_container\ndocker stop 1a2b3c4d5e6f\ndocker stop $(docker ps -q)\ndocker stop -t 5 container1 container2",
    exampleType: "bash",
  },
  {
    id: "docker-rm",
    tool: "Docker",
    category: "개발 툴 > Docker (컨테이너)",
    commandDisplay: "docker rm 컨테이너ID/이름",
    shortDesc: "컨테이너 삭제",
    longDesc:
      "중지된 컨테이너를 삭제합니다. `-f` 옵션으로 실행 중인 컨테이너 강제 삭제 가능.\n\n주요 옵션:\n-f, --force: 실행 중인 컨테이너 강제 삭제\n-v, --volumes: 연결된 익명 볼륨도 함께 삭제\n-l, --link: 지정된 링크 삭제\n\n여러 컨테이너를 한 번에 삭제할 수 있습니다.",
    example:
      "docker rm old_container\ndocker rm -f running_container\ndocker rm -v container_with_volume\ndocker rm $(docker ps -aq -f status=exited)",
    exampleType: "bash",
  },
  {
    id: "docker-exec",
    tool: "Docker",
    category: "개발 툴 > Docker (컨테이너)",
    commandDisplay: "docker exec [옵션] 컨테이너ID/이름 명령어",
    shortDesc: "실행 중인 컨테이너에 명령어 실행",
    longDesc:
      "실행 중인 컨테이너 내부에서 명령어를 실행합니다. `-it` 옵션으로 대화형 셸 접속 가능.\n\n주요 옵션:\n-i, --interactive: 표준 입력 유지\n-t, --tty: 가상 터미널 할당\n-d, --detach: 백그라운드에서 실행\n-e, --env 변수=값: 환경 변수 설정\n-w, --workdir 경로: 작업 디렉토리 설정\n-u, --user 사용자: 사용자 지정\n\n컨테이너 내부에서 명령을 실행하거나 셸에 접속할 때 유용합니다.",
    example:
      "docker exec -it my_ubuntu_container bash\ndocker exec my_nginx nginx -s reload\ndocker exec -d my_redis redis-cli flushall\ndocker exec -it -u www-data container_name sh",
    exampleType: "bash",
  },
  {
    id: "docker-compose-up",
    tool: "Docker",
    category: "개발 툴 > Docker (컨테이너) > Compose",
    commandDisplay: "docker-compose up [옵션]",
    shortDesc: "Compose 서비스 생성 및 시작",
    longDesc:
      "`docker-compose.yml` 파일에 정의된 서비스들을 생성하고 시작합니다. `-d` 옵션은 백그라운드 실행.\n\n주요 옵션:\n-d, --detach: 백그라운드에서 실행\n--build: 시작 전 이미지 빌드\n--no-build: 이미지 빌드 안 함\n--force-recreate: 컨테이너 강제 재생성\n--no-recreate: 이미 존재하는 컨테이너 재사용\n--no-deps: 연결된 서비스 시작 안 함\n-f, --file 파일: 다른 compose 파일 지정\n--scale 서비스=n: 서비스 인스턴스 수 지정\n\n현재 디렉토리의 docker-compose.yml 파일을 기본으로 사용합니다.",
    example:
      "docker-compose up -d\ndocker-compose up --build\ndocker-compose -f prod.yml up\ndocker-compose up -d --scale web=3",
    exampleType: "bash",
  },
  {
    id: "docker-compose-down",
    tool: "Docker",
    category: "개발 툴 > Docker (컨테이너) > Compose",
    commandDisplay: "docker-compose down [옵션]",
    shortDesc: "Compose 서비스 중지 및 제거",
    longDesc:
      "`docker-compose.yml` 파일로 생성된 컨테이너, 네트워크, 볼륨 등을 중지하고 제거합니다.\n\n주요 옵션:\n-v, --volumes: 선언된 볼륨도 제거\n--rmi all: 모든 이미지 제거\n--rmi local: 커스텀 태그가 없는 이미지만 제거\n--remove-orphans: compose 파일에 정의되지 않은 컨테이너도 제거\n-t, --timeout 초: 강제 종료 전 대기 시간\n\n개발 환경을 완전히 정리할 때 유용합니다.",
    example:
      "docker-compose down\ndocker-compose down -v\ndocker-compose down --rmi all\ndocker-compose -f prod.yml down --remove-orphans",
    exampleType: "bash",
  },
  {
    id: "nginx-start",
    tool: "Nginx",
    category: "개발 툴 > 웹 서버 > Nginx",
    commandDisplay: "sudo systemctl start nginx",
    shortDesc: "Nginx 시작",
    longDesc:
      "Nginx 웹 서버를 시작합니다.\n\n관련 명령어:\nsudo systemctl stop nginx: 중지\nsudo systemctl restart nginx: 재시작\nsudo systemctl reload nginx: 설정 다시 로드\nsudo systemctl status nginx: 상태 확인\nsudo systemctl enable nginx: 부팅 시 자동 시작 설정\nsudo systemctl disable nginx: 부팅 시 자동 시작 해제\n\n일부 시스템에서는 systemctl 대신 service 명령어를 사용할 수 있습니다.",
    example: "sudo systemctl start nginx\nsudo systemctl status nginx\nsudo service nginx restart",
    exampleType: "bash",
  },
  {
    id: "nginx-configtest",
    tool: "Nginx",
    category: "개발 툴 > 웹 서버 > Nginx",
    commandDisplay: "sudo nginx -t",
    shortDesc: "Nginx 설정 파일 테스트",
    longDesc:
      "Nginx 설정 파일의 문법 오류를 확인합니다.\n\n주요 옵션:\n-c 파일: 다른 설정 파일 지정\n-T: 설정 파일 테스트 및 내용 출력\n\n설정 변경 후 서버를 재시작하기 전에 항상 설정 파일을 테스트하는 것이 좋습니다. 오류가 있으면 자세한 오류 메시지를 출력합니다.",
    example: "sudo nginx -t\nsudo nginx -T\nsudo nginx -t -c /path/to/nginx.conf",
    exampleType: "bash",
  },
  {
    id: "apache-start",
    tool: "Apache",
    category: "개발 툴 > 웹 서버 > Apache",
    commandDisplay: "sudo systemctl start apache2",
    shortDesc: "Apache 시작 (Debian/Ubuntu)",
    longDesc:
      "Apache 웹 서버를 시작합니다. (RHEL/CentOS 계열은 `httpd`)\n\n관련 명령어:\nsudo systemctl stop apache2: 중지\nsudo systemctl restart apache2: 재시작\nsudo systemctl reload apache2: 설정 다시 로드\nsudo systemctl status apache2: 상태 확인\nsudo systemctl enable apache2: 부팅 시 자동 시작 설정\nsudo systemctl disable apache2: 부팅 시 자동 시작 해제\n\nRHEL/CentOS 계열에서는 apache2 대신 httpd를 사용합니다.",
    example:
      "sudo systemctl start apache2\nsudo systemctl status apache2\n\n# RHEL/CentOS:\nsudo systemctl start httpd",
    exampleType: "bash",
  },
  {
    id: "npm-install",
    tool: "npm",
    category: "개발 툴 > 프로그래밍 환경 > Node.js (npm)",
    commandDisplay: "npm install [패키지명]",
    shortDesc: "npm 패키지 설치",
    longDesc:
      "Node.js 패키지를 로컬 프로젝트 또는 전역으로 설치합니다.\n\n주요 옵션:\n-g, --global: 전역 설치\n--save, -S: package.json의 dependencies에 추가 (npm 5+ 기본값)\n--save-dev, -D: package.json의 devDependencies에 추가\n--save-exact, -E: 정확한 버전 지정\n--no-save: package.json 업데이트 안 함\n\n패키지 이름 없이 사용하면 package.json에 명시된 모든 패키지를 설치합니다.",
    example:
      "npm install express\nnpm install -g nodemon\nnpm install --save-dev jest\nnpm install\nnpm install react@16.8.0",
    exampleType: "bash",
  },
  {
    id: "pip-install",
    tool: "pip",
    category: "개발 툴 > 프로그래밍 환경 > Python (pip)",
    commandDisplay: "pip install [패키지명]",
    shortDesc: "Python 패키지 설치",
    longDesc:
      "Python 패키지를 설치합니다.\n\n주요 옵션:\n--user: 사용자 디렉토리에 설치 (시스템 전역 설치 권한 없을 때)\n--upgrade, -U: 패키지 업그레이드\n--no-deps: 의존성 패키지 설치 안 함\n--requirement, -r 파일: 요구사항 파일에서 설치\n--index-url, -i URL: 패키지 인덱스 서버 지정\n--editable, -e 경로: 개발 모드로 설치\n\nPython 3에서는 pip3 명령어를 사용할 수도 있습니다.",
    example:
      "pip install requests\npip3 install django --user\npip install -U numpy\npip install -r requirements.txt\npip install git+https://github.com/user/project.git",
    exampleType: "bash",
  },

  // Program Installation (Category: 프로그램 설치 > SubCategory)
  {
    id: "install-vscode-apt",
    tool: "VSCode",
    category: "프로그램 설치 > 개발 환경",
    commandDisplay: "sudo apt install code",
    shortDesc: "VS Code 설치 (APT)",
    longDesc:
      "Debian/Ubuntu 시스템에서 Microsoft의 APT 저장소를 추가한 후 VS Code를 설치합니다. (저장소 추가 선행 필요)\n\n설치 과정:\n1. Microsoft GPG 키 다운로드 및 등록\n2. APT 저장소 추가\n3. 패키지 목록 업데이트\n4. VS Code 설치\n\n최신 버전을 설치하려면 Microsoft의 공식 저장소를 추가하는 것이 좋습니다.",
    example:
      "# 1. Microsoft GPG 키 다운로드 및 등록\nwget -qO- https://packages.microsoft.com/keys/microsoft.asc | gpg --dearmor > packages.microsoft.gpg\nsudo install -o root -g root -m 644 packages.microsoft.gpg /etc/apt/trusted.gpg.d/\nsudo sh -c 'echo \"deb [arch=amd64,arm64,armhf signed-by=/etc/apt/trusted.gpg.d/packages.microsoft.gpg] https://packages.microsoft.com/repos/code stable main\" > /etc/apt/sources.list.d/vscode.list'\nrm -f packages.microsoft.gpg\n\n# 2. 패키지 목록 업데이트 및 설치\nsudo apt update\nsudo apt install code",
    exampleType: "bash",
  },
  {
    id: "install-chrome-apt",
    tool: "Chrome",
    category: "프로그램 설치 > 유틸리티",
    commandDisplay: "wget & apt install .deb",
    shortDesc: "Google Chrome 설치 (APT)",
    longDesc:
      "Google Chrome의 .deb 패키지를 다운로드하여 설치합니다.\n\n설치 과정:\n1. Google Chrome .deb 패키지 다운로드\n2. 다운로드한 .deb 패키지 설치\n\nGoogle Chrome은 공식 Ubuntu 저장소에 포함되어 있지 않기 때문에 직접 .deb 패키지를 다운로드하여 설치해야 합니다.",
    example:
      "wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb\nsudo apt install ./google-chrome-stable_current_amd64.deb -y",
    exampleType: "bash",
  },
  {
    id: "install-curl",
    tool: "curl",
    category: "프로그램 설치 > 유틸리티",
    commandDisplay: "sudo apt install curl",
    shortDesc: "curl 설치 (APT)",
    longDesc:
      "데이터 전송 유틸리티 curl을 설치합니다.\n\ncurl은 다양한 프로토콜(HTTP, HTTPS, FTP, FTPS, SCP, SFTP, TFTP, DICT, TELNET, LDAP, FILE 등)을 사용하여 데이터를 전송하는 명령줄 도구입니다.\n\n웹 API 테스트, 파일 다운로드, 웹 요청 디버깅 등 다양한 용도로 사용됩니다.",
    example: "sudo apt update\nsudo apt install curl -y\n\n# 설치 확인\ncurl --version",
    exampleType: "bash",
  },
  {
    id: "install-htop",
    tool: "htop",
    category: "프로그램 설치 > 유틸리티",
    commandDisplay: "sudo apt install htop",
    shortDesc: "htop 설치 (APT)",
    longDesc:
      "인터랙티브 프로세스 뷰어 htop을 설치합니다.\n\nhtop은 기본 top 명령어의 향상된 버전으로, 더 직관적인 인터페이스와 다양한 기능을 제공합니다.\n\n주요 기능:\n- 프로세스 목록 색상 표시\n- 프로세스 트리 보기\n- 마우스 지원\n- 프로세스 정렬 및 필터링\n- 프로세스 종료, 우선순위 변경 등 작업 수행\n\n시스템 모니터링 및 프로세스 관리에 유용합니다.",
    example: "sudo apt update\nsudo apt install htop -y\n\n# 실행\nhtop",
    exampleType: "bash",
  },
]
