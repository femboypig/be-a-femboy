const words = ['You need to be a femboy', 'You need to become a femboy'];
let i = 0;
let j = 0;
let currentWord = '';
let isDeleting = false;
const dynamicText = document.getElementById('dynamic-text');

function type() {
    currentWord = words[i];

    if (isDeleting) {
        dynamicText.textContent = currentWord.substring(0, j--);
        if (j < 0) {
            isDeleting = false;
            i = (i + 1) % words.length;
            setTimeout(type, 500); // Пауза после полного удаления
            return;
        }
    } else {
        dynamicText.textContent = currentWord.substring(0, j++);
        if (j > currentWord.length) {
            isDeleting = true;
            setTimeout(type, 1000); // Пауза перед удалением
            return;
        }
    }
    setTimeout(type, isDeleting ? 100 : 200); // Скорость печати и удаления
}

document.addEventListener('DOMContentLoaded', type);
