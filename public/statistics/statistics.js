
// 시간 범위 선택기 기능
const timeOptions = document.querySelectorAll('.time-option');

timeOptions.forEach(option => {
option.addEventListener('click', function() {
    timeOptions.forEach(opt => opt.classList.remove('active'));
    this.classList.add('active');
});
});

// 차트 애니메이션 및 인터랙션은 실제 구현 시 자바스크립트 라이브러리
// (예: Chart.js, D3.js) 등을 사용하여 구현할 수 있습니다.

// 이 예제에서는 정적 디자인만 보여주기 위해 간단한 스크립트만 포함했습니다.
