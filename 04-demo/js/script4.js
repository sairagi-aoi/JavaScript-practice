const btn = document.getElementById('btn');

btn.addEventListener('click', () => {
    document.boby.classList.toggle('dark-theme');

    if (btn.textContent === 'ダークモードにする'){
        btn.textContent = 'ライトモードにする';
    } else {
        btn,textContent = 'ダークモードにする';

    }
});
