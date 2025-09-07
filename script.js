document.addEventListener('DOMContentLoaded', () => {
    const dynamicText = document.getElementById('dynamic-text');
    const changeTextBtn = document.getElementById('change-text-btn');

    const messages = ["반갑습니다!", "포트폴리오를 둘러보세요.", "좋은 하루 되세요!"];
    let currentIndex = 0;

    changeTextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % messages.length;
        dynamicText.textContent = messages[currentIndex];
    });
});
