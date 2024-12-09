echo "# SyncFi

## 초기 설정 방법

1. **리포지토리 클론**
\`\`\`bash
git clone https://github.com/educhain-blockchainvelly/hackathon.git
cd hackathon
\`\`\`

2. **의존성 설치**
\`\`\`bash
npm install
\`\`\`

3. **본인 담당 브랜치로 전환**
\`\`\`bash
git checkout page/[본인_브랜치명]
# 예: git checkout page/main-subin
\`\`\`

4. **개발 서버 실행**
\`\`\`bash
npm start
\`\`\`

## 브랜치 담당자
| 브랜치 | 담당 페이지 | 담당자 |
|--------|------------|---------|
| page/main-subin | 메인 페이지 | 수빈 |
| page/pool-junmo | 유동성 풀 페이지 | 준모 |
| page/swap-sungwoo | 스왑 페이지 | 성우 |
| page/dashboard-sungjin | 대시보드 | 성진 |
| page/social-minsu | 랭킹, 소셜 페이지 | 민수 |

## 개발 규칙

### 1. 브랜치 관리
- 항상 본인의 브랜치에서만 작업
- 작업 전 최신 코드 받기:
\`\`\`bash
git pull origin main
\`\`\`

### 2. 커밋 컨벤션
| 타입 | 설명 |
|------|------|
| feat | 새로운 기능 추가 |
| fix | 버그 수정 |
| docs | 문서 수정 |
| style | 코드 포맷팅 |
| refactor | 코드 리팩토링 |

### 3. 작업 완료 후 Push
\`\`\`bash
git add .
git commit -m \"feat: 작업내용\"
git push origin [본인_브랜치명]
\`\`\`

### 4. Pull Request
- GitHub에서 Pull Request 생성
- PR 제목은 커밋 컨벤션과 동일하게 작성
- PR 내용에는 변경사항 상세히 기술

## 주의사항
- node_modules는 절대 커밋하지 않기
- 공통 컴포넌트는 src/components에 추가
- 각자 페이지는 src/pages 아래에 개발
- 문제가 생기면 즉시 팀원들과 공유

## 기술 스택
| 분야 | 사용 기술 |
|------|-----------|
| Frontend | React, TypeScript, Tailwind CSS |
| Blockchain | Hardhat, Ethers.js |" > README.md