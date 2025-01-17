# WELCOME TO MINGFILX🍿
## 프로젝트 미리보기🎥
* Header
<img width="1440" alt="Screenshot 2025-01-17 at 10 45 02 AM" src="https://github.com/user-attachments/assets/6bf5d874-4e10-4f64-a623-f74ec9e6279e" />

* 영화 목록
<img width="1440" alt="Screenshot 2025-01-17 at 10 43 26 AM" src="https://github.com/user-attachments/assets/2d5d3c4f-dd9c-439a-a3f0-ad6e8069ad1f" />

* 영화 정보 모달창
<img width="1440" alt="Screenshot 2025-01-17 at 10 43 39 AM" src="https://github.com/user-attachments/assets/f8fc521f-c043-479e-a4f7-45da0c408f04" />

* 영화 검색
<img width="1440" alt="Screenshot 2025-01-17 at 10 44 29 AM" src="https://github.com/user-attachments/assets/da5907e2-32a8-4d1d-809a-34aeb8fb8b25" />

* 북마크
<img width="1440" alt="Screenshot 2025-01-17 at 10 43 32 AM" src="https://github.com/user-attachments/assets/fefd8d00-4a37-45db-b933-8828caab0a78" />



## 프로젝트 소개📄
**📆 프로젝트 기간 : 2025.01.08 ~ 2025.01.17**

TMDB open API를 사용해 해당 카테고리별 영화를 보여주고, 검색 및 북마크 기능을 제공합니다.

아직 반응형 디자인이 완벽하게 적용되지 않아, PC 환경에 최적화되어 있으며 모바일 환경은 지원하지 않습니다.

## 프로젝트 기능⚙️
* html, css, 바닐라 javaScript로 구성되었습니다.
* TMDB open API의 `movie-popular`, `movie-now playing`, `movie-top rated`, `movie-up coming`, `search-movie` API를 활용했습니다.
* 한국어를 제공합니다.
* header에 이미지 슬라이드로 `movie-up coming` 영화가 랜덤으로 표시됩니다.
* 영화 제목 검색에서 `enter`키와 `검색`버튼으로 검색이 가능합니다.
* localStorage를 사용하여 사용자 북마크 기능을 제공합니다.
* 모달창 내부의 `♥︎`버튼으로 북마크 추가/삭제가 가능합니다.
* 하단 `영화 더보기` 버튼을 사용하여 해당 카테고리의 영화 목록을 추가로 불러옵니다.

## 트러블 슈팅🧑‍💻
[TroubleShooting 1 : 검색 기능](https://velog.io/@miiing_gaeng/%EC%98%81%ED%99%94-%EA%B2%80%EC%83%89-%EC%82%AC%EC%9D%B4%ED%8A%B8-TroubleShooting-1-%EA%B2%80%EC%83%89-%EA%B8%B0%EB%8A%A5)

[TroubleShooting 2 : 더보기 기능](https://velog.io/@miiing_gaeng/%EC%98%81%ED%99%94-%EA%B2%80%EC%83%89-%EC%82%AC%EC%9D%B4%ED%8A%B8-TroubleShooting-2-%EB%8D%94%EB%B3%B4%EA%B8%B0-%EA%B8%B0%EB%8A%A5)

[TroubleShooting 3 : 북마크 기능](https://velog.io/@miiing_gaeng/%EC%98%81%ED%99%94-%EA%B2%80%EC%83%89-%EC%82%AC%EC%9D%B4%ED%8A%B8-TroubleShooting-3-%EB%B6%81%EB%A7%88%ED%81%AC-%EA%B8%B0%EB%8A%A5)

## clone시 실행방법✅
해당 프로젝트를 클론하여 사용할 때, TMDB API 토큰이 필요합니다. [해당 사이트](https://www.themoviedb.org/?language=ko)에서 API 토큰을 발급 받으시고, `options - ${api_key}`에 발급받은 토큰을 넣어주시면 됩니다.

그리고 이 프로젝트는 Live Server 기준으로 디자인되었습니다. VSCode 확장프로그램에서 `LiveServer`를 설치하신 후, html 파일에서 `open in live server`로 실행하시면 보다 쾌적한 환경에서 프로젝트를 이용하실 수 있습니다.
