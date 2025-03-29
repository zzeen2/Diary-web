# Diary-web

(이 프로젝트는 node.js와 데이터베이스를 어느정도 익힌 후 개인 사이드 프로젝트 입니다.)

이 프로젝트는 감정 분석 기능이 있는 일기 웹 애플리케이션 개발 프로젝트 입니다. 사용자가 일기를 작성하고, 라이브러리의 추천으로 감정 카테고리를 분류하며, 원하는 경우 커뮤니티에 공유할 수 있는 플랫폼입니다.

## 프로젝트 이름: 무드 구름 (Mood Cloud)

"무드 구름"은 사용자의 감정과 기분을 구름처럼 담아내고 공유하는 일기 플랫폼입니다. 

이 이름은 다음과 같은 의미를 담고 있습니다:

- **무드(Mood)**: 사용자의 다양한 감정과 기분을 의미합니다. 우리의 일상에서 경험하는 행복, 슬픔, 분노, 평온함 등 모든 감정이 일기에 담깁니다.

- **구름(Cloud)**: 세 가지 의미를 내포합니다:
  1. 가볍고 몽글몽글한 구름처럼 마음을 부드럽게 담아내는 공간
  2. 클라우드 기술을 활용해 언제 어디서나 접근 가능한 플랫폼
  3. 하늘의 구름처럼 다른 사람들과 연결되고 공유될 수 있는 매개체

"무드 구름"은 단순한 일기장을 넘어, 사용자가 자신의 감정을 표현하고 분석하며, 선택적으로 다른 사용자들과 공유하고 소통할 수 있는 감정 네트워킹 플랫폼입니다. 구름처럼 자유롭게 떠다니는 우리의 감정들이 모여 하나의 커뮤니티를 형성하고, 서로 공감하고 위로하는 공간을 추구합니다.

## 프로젝트 개요

이 프로젝트는 사용자가 일상의 감정과 경험을 기록하고 공유할 수 있는 웹 애플리케이션을 개발하는 것을 목표로 합니다. 주요 기능으로는 자동 감정 분석, 감정 카테고리 분류, 커뮤니티 상호작용 등이 있습니다.

### 주요 기능

- **일기 작성 및 관리**: 사용자가 일기를 작성, 수정, 삭제할 수 있습니다.
- **자동 감정 분석**: Google Cloud Natural Language API를 활용하여 일기 내용을 분석하고 감정을 자동으로 추천합니다.
- **감정 카테고리 분류**: 일기를 다양한 감정 카테고리(행복함, 슬픔, 분노, 불안 등)로 분류합니다.
- **공개/비공개 설정**: 사용자가 일기를 커뮤니티에 공개하거나 비공개로 설정할 수 있습니다.
- **커뮤니티 상호작용**: 공개된 일기에 댓글 달기, 좋아요 표시 기능을 제공합니다.
- **감정 통계 시각화**: 시간 경과에 따른 감정 변화를 시각적으로 표현합니다.

## 기술 스택

- **프론트엔드**: HTML, CSS, JavaScript
- **백엔드**: Node.js
- **데이터베이스**: MySQL
- **감정 분석 API**: Google Cloud Natural Language API
- **아키텍처 패턴**: MVC (Model-View-Controller)

## 프로젝트 구조
Diary-web/
├── config/             # 데이터베이스 설정 파일
├── controllers/        # 컨트롤러 로직
│   ├── diaryController.js
│   ├── userController.js
│   └── communityController.js
├── models/             # 데이터 모델
│   ├── diaryModel.js
│   ├── userModel.js
│   └── commentModel.js 
├── views/              # 뷰 템플릿
│   ├── diary/
│   ├── user/
│   └── community/
├── public/             # 정적 파일 (CSS, JS, 이미지)
│   ├── css/
│   ├── js/
│   └── images/
├── routes/             # 라우팅 설정
│   ├── diaryRoutes.js
│   ├── userRoutes.js
│   └── communityRoutes.js
├── services/           # 외부 서비스 연동
│   └── sentimentAnalysisService.js
├── utils/              # 유틸리티 함수
├── app.js              # 애플리케이션 진입점
├── package.json        # 프로젝트 의존성 관리
└── README.md           # 프로젝트 문서

## 데이터베이스 테이블 구조
  1. Users(사용자 테이블):
  - id: 기본키, 자동 증가
  - uid: 사용자 아이디(고유값)
  - upw: 암호화된 비밀번호
  - email: 이메일 주소(고유값)
  - name: 사용자 이름
  - profile_image: 프로필 이미지 경로(선택)
  - created_at: 계정 생성 시간
  - updated_at: 계정 정보 수정 시간

  2. Emotions(감정 테이블):
  - id: 기본키, 자동 증가
  - name: 감정 이름(행복, 슬픔, 분노 등)
  - description: 감정 설명
  - color: 감정과 연관된 색상 코드
  - icon_path: 감정 아이콘 경로

  3. Diaries (일기 테이블):
  - id: 기본키, 자동 증가
  - user_id: 외래키(Users 테이블의 id 참조)
  - title: 일기 제목
  - content: 일기 내용
  - is_public: 공개 여부(boolean)
  - suggested_emotion_id: 외래키(Emotions 테이블의 id 참조) - API가 분석한 감정
  - emotion_id: 외래키(Emotions 테이블의 id 참조) - 사용자가 선택한 감정
  - created_at: 일기 작성 시간
  - updated_at: 일기 수정 시간

  4. Comments (댓글 테이블):
  - id: 기본키, 자동 증가
  - diary_id: 외래키(Diaries 테이블의 id 참조)
  - user_id: 외래키(Users 테이블의 id 참조)
  - content: 댓글 내용
  - created_at: 댓글 작성 시간
  - updated_at: 댓글 수정 시간
  
  5. Likes (좋아요 테이블):
  - id: 기본키, 자동 증가
  - diary_id: 외래키(Diaries 테이블의 id 참조)
  - user_id: 외래키(Users 테이블의 id 참조)
  - created_at: 좋아요 시간

  6. Follows (팔로우 테이블):
  - id: 기본키, 자동 증가
  - follower_id: 외래키(Users 테이블의 id 참조) - 팔로우하는 사용자
  - following_id: 외래키(Users 테이블의 id 참조) - 팔로우 받는 사용자
  - created_at: 팔로우 시작 시간

  7. (기능구현 미정) Notifications (알림 테이블):
  - id: 기본키, 자동 증가
  - user_id: 외래키(Users 테이블의 id 참조) - 알림을 받는 사용자
  - sender_id: 외래키(Users 테이블의 id 참조) - 알림을 발생시킨 사용자
  - type: 알림 유형(댓글, 좋아요, 팔로우 등)
  - reference_id: 관련 객체 ID(일기 ID, 댓글 ID 등)
  - message: 알림 메시지
  - is_read: 읽음 여부(boolean)
  - created_at: 알림 생성 시간


## 🗓 프로젝트 일정
- 2025.03.29: 기획 및 데이터베이스 설계