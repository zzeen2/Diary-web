
// 뷰 전환 기능
const viewOptions = document.querySelectorAll('.view-option');
const diaryGrid = document.querySelector('.diary-grid');
const diaryList = document.querySelector('.diary-list');
const diaryCalendar = document.querySelector('.diary-calendar');

function switchView(viewType) {
    // 모든 뷰 숨기기
    diaryGrid.style.display = 'none';
    diaryList.style.display = 'none';
    diaryCalendar.style.display = 'none';
    
    // 선택된 뷰 보이기
    if (viewType === 'grid') {
    diaryGrid.style.display = 'grid';
    } else if (viewType === 'list') {
    diaryList.style.display = 'flex';
    } else if (viewType === 'calendar') {
    diaryCalendar.style.display = 'block';
    }
}

viewOptions.forEach(option => {
    option.addEventListener('click', function() {
    viewOptions.forEach(opt => opt.classList.remove('active'));
    this.classList.add('active');
    
    const viewType = this.getAttribute('data-view');
    switchView(viewType);
    });
});

// 초기 로드시 그리드 뷰 보이기
switchView('grid');