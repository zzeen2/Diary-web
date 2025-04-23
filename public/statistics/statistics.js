
// 시간 범위 선택기 기능
const timeOptions = document.querySelectorAll('.time-option');

timeOptions.forEach(option => {
option.addEventListener('click', function() {
    timeOptions.forEach(opt => opt.classList.remove('active'));
    this.classList.add('active');
});
});