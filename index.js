const btn = document.querySelector('.arrow-img');
const linkConEl = document.querySelector('.links-container');
const chosedLinkEl = document.querySelector('.chosed-link');
const linksList = linkConEl.querySelectorAll('.link');

chosedLinkEl.innerHTML = linksList[0].innerHTML;

btn.addEventListener('click', () => {
    linkConEl.classList.toggle('active');

    if (linkConEl.classList.contains('active')) {
        btn.style.transform = 'rotateZ(180deg)';
    } else {
        btn.style.transform = 'rotateZ(0deg)';
    }
});

chosedLinkEl.addEventListener('click', () => {
    const link = chosedLinkEl.querySelector('a').href;
    window.open(link, '_blank');
});

for (const [index, el] of linksList.entries()) {
    el.addEventListener('click', () => {
        chosedLinkEl.innerHTML = linksList[index].innerHTML;
        linkConEl.classList.toggle('active');
        btn.style.transform = 'rotateZ(0deg)';
    });
}