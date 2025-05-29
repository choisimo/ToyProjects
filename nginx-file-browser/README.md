# Nginx File Browser (Next.js)

## Docker Compose 사용법

```yaml
version: '3.8'
services:
  nginx-file-browser:
    image: nginx-file-browser:latest
    build:
      context: .
    ports:
      - "3101:3000"
    volumes:
      - ./public/files:/app/public/files:rw
    environment:
      - NODE_ENV=production
    restart: unless-stopped
```

## 단일 Docker 명령어 실행

```bash
docker run -d \
  -p 3101:3000 \
  -v $(pwd)/public/files:/app/public/files:rw \
  --name nginx-file-browser \
  -e NODE_ENV=production \
  nginx-file-browser:latest
```

- `-v` 옵션으로 호스트의 `./public/files` 디렉토리를 컨테이너의 `/app/public/files`에 마운트합니다.
- `-p` 옵션으로 3101번 포트를 엽니다.
- `-p` 옵션으로 3000번 포트를 엽니다.

## 빌드 및 실행 순서

1. Docker 이미지 빌드
   ```bash
   docker build -t nginx-file-browser .
   ```
2. 컨테이너 실행
   - docker-compose 사용: `docker-compose up -d`
   - 단일 명령어 사용: 위의 `docker run ...`

---

**Tip:** 파일 업로드/다운로드 경로는 `public/files`입니다. 호스트 디렉토리 권한에 주의하세요.
