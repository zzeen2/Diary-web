// 요소 선택
const modalOverlay = document.getElementById('modalOverlay');
const modal = document.querySelector('.modal');
const mainLogo = document.getElementById('mainLogo');
const modalLogo = document.getElementById('modalLogo');
const startBtn = document.getElementById('startBtn');
const appTitle = document.querySelector('.app-title');
const appDesc = document.querySelector('.app-desc');

// 로고 클릭 이벤트
mainLogo.addEventListener('click', openModal);
startBtn.addEventListener('click', openModal);

// 모달 열기
function openModal() {

    // 로고 애니메이션
    mainLogo.style.transform = 'scale(0.4) translateY(-150px)';
    mainLogo.style.opacity = '0';

    // 타이틀과 설명, 버튼 숨기기
    appTitle.style.opacity = '0';
    appTitle.style.transform = 'translateY(20px)';
    appDesc.style.opacity = '0';
    appDesc.style.transform = 'translateY(20px)';
    startBtn.style.opacity = '0';
    startBtn.style.transform = 'translateY(20px)';

    // 약간의 지연 후에 모달 표시
    setTimeout(() => {
    modalOverlay.classList.add('active');
    
    // 모달 로고 표시
    setTimeout(() => {
        modalLogo.classList.add('active');
    }, 300);
    }, 500);
}

// 모달 닫기 
function closeModal() {
    // 모달 숨기기
    modalOverlay.classList.remove('active');
    modalLogo.classList.remove('active');

    // 약간의 지연 후에 원래 화면으로 복귀
    setTimeout(() => {
    mainLogo.style.transform = 'scale(1) translateY(0)';
    mainLogo.style.opacity = '1';
    
    appTitle.style.opacity = '1';
    appTitle.style.transform = 'translateY(0)';
    appDesc.style.opacity = '1';
    appDesc.style.transform = 'translateY(0)';
    startBtn.style.opacity = '1';
    startBtn.style.transform = 'translateY(0)';
    }, 500);
}

// 탭 전환
function switchTab(tab) {
    // 탭 활성화
    document.querySelectorAll('.tab').forEach(t => {
    t.classList.remove('active');
    });
    document.querySelector(`.tab[onclick="switchTab('${tab}')"]`).classList.add('active');

    // 폼 내용 전환
    document.querySelectorAll('.form-content').forEach(f => {
    f.classList.remove('active');
    });
    if (tab === 'login') {
    document.getElementById('loginForm').classList.add('active');
    } else {
    document.getElementById('signupForm').classList.add('active');
    }
}

// 비밀번호 강도 체크
function checkPasswordStrength() {
const password = document.getElementById('signup-password').value;
const meter = document.getElementById('strengthMeter');

// 초기화
meter.className = 'strength-meter';

if (password.length === 0) {
  meter.style.width = '0';
  return;
}

// 간단한 비밀번호 강도 체크
const hasLower = /[a-z]/.test(password);
const hasUpper = /[A-Z]/.test(password);
const hasNumber = /[0-9]/.test(password);
const hasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(password);

const strength = 
  (password.length >= 8 ? 1 : 0) +
  (hasLower ? 1 : 0) +
  (hasUpper ? 1 : 0) +
  (hasNumber ? 1 : 0) +
  (hasSpecial ? 1 : 0);

if (strength <= 2) {
  meter.classList.add('strength-weak');
} else if (strength <= 4) {
  meter.classList.add('strength-medium');
} else {
  meter.classList.add('strength-strong');
}
}

// 모달 외부 클릭 시 닫기
modalOverlay.addEventListener('click', function(e) {
if (e.target === modalOverlay) {
  closeModal();
}
});

// 페이지 로드 시 모달 숨기기
window.addEventListener('load', function() {
modalOverlay.classList.remove('active');
});

//TODO:  이제 회원정보 저장하고 jWt 토큰 넘겨서 로그인 유지하기