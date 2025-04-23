// 감정 선택 및 일기 작성 관련 기능
document.addEventListener('DOMContentLoaded', function() {
    // 감정 아이템들 선택
    const emotionItems = document.querySelectorAll('.emotion-item');
    const emotionSelectedArea = document.getElementById('emotion-selected-area');
    const selectedEmotionIcon = document.getElementById('selected-emotion-icon');
    const selectedEmotionText = document.getElementById('selected-emotion-text');
    
    // 감정 관련 메시지 매핑
    const emotionMessages = {
      happy: '행복한 기분이군요!',
      sad: '슬픈 기분이시네요.',
      angry: '화가 나셨군요.',
      calm: '평온한 하루를 보내고 계시네요.',
      anxious: '불안한 마음이 있으신가요?',
      tired: '오늘은 피곤하신가요?',
      excited: '신나는 일이 있으셨나요?',
      confused: '혼란스러운 일이 있으신가요?'
    };
    
    // 각 감정 아이템에 클릭 이벤트 리스너 추가
    emotionItems.forEach(item => {
      item.addEventListener('click', function() {
        // 선택된 감정 정보 가져오기
        const emotion = this.getAttribute('data-emotion');
        const emotionClasses = this.querySelector('.emotion-icon').classList;
        
        // 모든 감정 아이템에서 선택 표시 제거
        emotionItems.forEach(el => el.classList.remove('selected'));
        
        // 현재 감정 아이템에 선택 표시 추가
        this.classList.add('selected');
        
        // 선택된 감정 아이콘 클래스 설정
        selectedEmotionIcon.className = 'selected-emotion-icon';
        emotionClasses.forEach(cls => {
          if(cls !== 'emotion-icon') {
            selectedEmotionIcon.classList.add(cls);
          }
        });
        
        // 선택된 감정 텍스트 업데이트
        selectedEmotionText.textContent = emotionMessages[emotion] || '오늘의 감정을 선택하셨군요!';
        
        // 선택 영역 표시
        emotionSelectedArea.style.display = 'block';
        
        // 부드러운 스크롤 애니메이션으로 선택 영역으로 이동
        emotionSelectedArea.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    });
    
    // 일기 작성 버튼 클릭 시
    const writeButton = document.querySelector('.write-button');
    writeButton.addEventListener('click', function() {
      // 일기 작성 페이지로 이동 (또는 일기 작성 모달 표시)
      console.log('일기 작성 버튼 클릭');
      // 실제 구현 시 주석 해제
      // window.location.href = '/diary/write'; 
      alert('일기 작성 페이지로 이동합니다.');
    });
    
    // 감정만 기록 버튼 클릭 시
    const emotionOnlyButton = document.querySelector('.emotion-only-button');
    emotionOnlyButton.addEventListener('click', function() {
      console.log('감정만 기록 버튼 클릭');
      // 서버에 감정만 저장하는 API 호출
      saveEmotionOnly();
    });
    
    // 템플릿 태그 클릭 시
    const templateTags = document.querySelectorAll('.template-tag');
    templateTags.forEach(tag => {
      tag.addEventListener('click', function() {
        const template = this.textContent;
        console.log(`템플릿 선택: ${template}`);
        // 선택된 템플릿으로 일기 작성 페이지로 이동
        // window.location.href = `/diary/write?template=${encodeURIComponent(template)}`; // 실제 구현 시 주석 해제
        alert(`"${template}" 템플릿으로 일기 작성 페이지로 이동합니다.`);
      });
    });
    
    // 감정만 저장하는 함수
    function saveEmotionOnly() {
      // 선택된 감정 찾기
      const selectedEmotion = document.querySelector('.emotion-item.selected');
      if (!selectedEmotion) {
        alert('감정을 선택해주세요!');
        return;
      }
      
      const emotion = selectedEmotion.getAttribute('data-emotion');
      
      // 실제 구현 시 서버 API 호출
      // fetch('/api/emotion', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify({ emotion }),
      // })
      // .then(response => response.json())
      // .then(data => {
      //   if (data.success) {
      //     alert('감정이 성공적으로 기록되었습니다!');
      //     window.location.reload(); // 페이지 새로고침
      //   } else {
      //     alert('감정 기록에 실패했습니다.');
      //   }
      // });
      
      // 데모용 알림
      alert(`"${emotion}" 감정이 성공적으로 기록되었습니다!`);
      
      // 선택 영역 숨기기
      emotionSelectedArea.style.display = 'none';
      // 선택 표시 제거
      document.querySelector('.emotion-item.selected')?.classList.remove('selected');
    }
    
    // 일기 카드 클릭 이벤트
    const diaryCards = document.querySelectorAll('.diary-card');
    diaryCards.forEach(card => {
      card.addEventListener('click', function() {
        const diaryTitle = this.querySelector('.diary-title').textContent;
        console.log(`일기 카드 클릭: ${diaryTitle}`);
        // 일기 상세 페이지로 이동
        // window.location.href = `/diary/view/${diaryId}`; // 실제 구현 시 주석 해제
        alert(`"${diaryTitle}" 일기 상세 페이지로 이동합니다.`);
      });
    });
    
    // 커뮤니티 피드 아이템 클릭 이벤트
    const feedItems = document.querySelectorAll('.popular-feed-item');
    feedItems.forEach(item => {
      item.addEventListener('click', function() {
        const feedTitle = this.querySelector('.feed-title').textContent;
        console.log(`피드 아이템 클릭: ${feedTitle}`);
        // 커뮤니티 상세 페이지로 이동
        // window.location.href = `/community/view/${feedId}`; // 실제 구현 시 주석 해제
        alert(`"${feedTitle}" 커뮤니티 게시글 페이지로 이동합니다.`);
      });
    });
    
    // 달력 날짜 클릭 이벤트
    const calendarDates = document.querySelectorAll('.calendar-date');
    calendarDates.forEach(date => {
      if (date.textContent.trim() !== '') {
        date.addEventListener('click', function() {
          const day = this.textContent;
          console.log(`달력 날짜 클릭: ${day}일`);
          // 해당 날짜의 일기 목록 페이지로 이동
          // window.location.href = `/diary/date/2025/3/${day}`; // 실제 구현 시 주석 해제
          
          // 데모용 알림
          if (this.classList.contains('has-diary')) {
            alert(`2025년 3월 ${day}일의 일기를 확인합니다.`);
          } else if (this.classList.contains('current')) {
            alert('오늘의 일기를 작성해보세요!');
          } else {
            alert(`2025년 3월 ${day}일에는 작성된 일기가 없습니다.`);
          }
        });
      }
    });
    
    // 빠른 액션 버튼 이벤트
    const quickActionBtns = document.querySelectorAll('.quick-action-btn');
    quickActionBtns.forEach(btn => {
      btn.addEventListener('click', function() {
        const action = this.textContent;
        console.log(`빠른 액션 클릭: ${action}`);
        
        switch(action) {
          case '일기 쓰기':
            // window.location.href = '/diary/write'; // 실제 구현 시 주석 해제
            alert('일기 작성 페이지로 이동합니다.');
            break;
          case '친구 찾기':
            // window.location.href = '/community/friends'; // 실제 구현 시 주석 해제
            alert('친구 찾기 페이지로 이동합니다.');
            break;
          case '설정':
            // window.location.href = '/settings'; // 실제 구현 시 주석 해제
            alert('설정 페이지로 이동합니다.');
            break;
        }
      });
    });
  });