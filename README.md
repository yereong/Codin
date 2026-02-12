<div align='center'>
  <img width="128" height="128" alt="image" src="https://github.com/user-attachments/assets/701407ec-1611-4252-976c-ae2d1e425e7f" />
</div>

<p align="center">
인천대학교 정보기술대학 학생들을 위한 교내 SNS · 편의 기능 서비스<br/>
빈 강의실 · 간식나눔 티켓팅 · 익명채팅/투표 기능을 운영 중인 실서비스입니다.
</p>

<p align="center">
  <a href="https://github.com/yereong/Codin">GitHub</a> ·
  <a href="https://codin.inu.ac.kr/login">Web</a> ·
  <a href="https://play.google.com/store/apps/details?id=com.codin_android_app&hl=ko">Google Play</a> ·
  <a href="https://apps.apple.com/kr/app/codin/id6742378374">App Store</a>
</p>

> ⚠️ 서비스는 학교 이메일로만 로그인 가능합니다.

---

## 📌 Overview
<img width=auto height="350" alt="image" src="https://github.com/user-attachments/assets/3d9e603f-2a3f-49c9-9606-372b74eae0d5" />
<img width=auto height="350" alt="image" src="https://github.com/user-attachments/assets/b3967a86-a1d1-49a6-b7e2-f2456b0c7e95" />
<img width=auto height="350" alt="image" src="https://github.com/user-attachments/assets/caaa4583-f6a8-4b37-b08a-31d62b8f672b" />
<img width=auto height="350" alt="image" src="https://github.com/user-attachments/assets/1cc24ec9-1a28-4d17-ae7b-6cc719b13eee" />




**CodIN**은 인천대학교 정보기술대학 학생들을 위한 SNS 기반 서비스입니다.  
교내 공모전에서 시작하여 학생 편의를 위한 기능을 확장하며 현재 실서비스 운영 중입니다.

- 실사용자 약 200명
- 학생회 간식나눔 이벤트를 티켓팅 기능으로 실제 운영
- 학장님 미팅 후 장학금 지원

---

## 🛠 Tech Stack

### Frontend
- TypeScript
- Next.js
- Tailwind CSS
- Zustand

### Real-time
- SSE
- STOMP (WebSocket)

---

## ⚙️ Core Features

| 기능 | 설명 |
|------|------|
| 🔐 로그인 | Google OAuth |
| 🏠 메인화면 | 학사 일정, 빈 강의실 현황, 인기 게시물 |
| 🎫 간식나눔 티켓팅 | 선착순 배부 시스템 |
| 📊 관리자 화면 | 수령 여부 변경, 수령자 Excel 다운로드 |
| ✉️ 익명채팅 | STOMP 기반 실시간 채팅 |
| 🗳️ 익명투표 | 투표 작성/참여/결과 확인 |
| 📚 교과목 검색 | 평점 및 리뷰 기반 추천 |

> 로그인, 티켓팅, 익명채팅, 익명투표, 마이페이지를 맡아 개발하였습니다.
---

## 🏗 Architecture

> Next.js 기반 프론트엔드 + API 서버 연동  
> 실시간 기능: **SSE**, **STOMP(WebSocket)**

<img width="805" height="554" alt="image" src="https://github.com/user-attachments/assets/6335a984-48b8-4c04-a592-e6b92af4a7eb" />


---

## 📈 Result

- 간식나눔 이벤트 오픈 직후 100개 중 약 80개가 5초 내 소진
- 티켓팅 기능에 대한 학생/학생회 긍정 피드백 확보
- 실제 사용자 약 200명 확보
- 실서비스 운영 경험

---

## 🤔 Retrospective

- STOMP 기반 실시간 알림 및 읽음 처리 구현 경험
- 실제 사용자 환경에서 테스트의 중요성 체감
- 팀원 변동 속 문서화의 중요성 인식
- SSR을 고려해 Next.js 선택 → 추후 SSR 마이그레이션 예정

---

## 👩🏻‍💻 Contribution

- Next.js 기반 프론트엔드 기능 개발
- 티켓팅 기능 및 상태 관리(Zustand) 구현
- 실시간 기능(STOMP) 연동
- 로그인 및 리다이렉트 로직 개선
