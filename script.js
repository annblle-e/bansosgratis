const wrapper = document.querySelector('.wrapper');
const question = document.querySelector('.question');
const yesBtn = document.querySelector('.yesbut');
const noBtn = document.querySelector('.nobut');
const wrapperRect = wrapper.getBoundingClientRect();
const noBtnRect = noBtn.getBoundingClientRect();
yesBtn.addEventListener('click', () => {
    question.innerHTML = 'L BOZOO GADA AWOKAWOK';
    yesBtn.remove()
    noBtn.remove()
    setTimeout(() => {
        window.location.href = "https://youtu.be/eBGIQ7ZuuiU?si=IveCcQMDg_GXo2We";
}, 1000);
});

noBtn.addEventListener('mouseover', () => {
    const i = Math.floor(Math.random() * (wrapperRect.width - noBtnRect.width)) + 1;
    const j = Math.floor(Math.random() * (wrapperRect.height - noBtnRect.height)) + 1;
    noBtn.style.left = i + 'px';
    noBtn.style.top = j + 'px';
});