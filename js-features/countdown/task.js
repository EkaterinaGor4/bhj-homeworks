// Получаем элемент таймера
const timerElement = document.getElementById('timer');

// Функция обновления таймера
function updateTimer() {
    // Преобразуем текст в число и уменьшаем на 1
    let seconds = parseInt(timerElement.textContent) - 1;
    timerElement.textContent = seconds;

    // Проверяем окончание отсчёта
    if (seconds === 0) {
        clearInterval(timerInterval); // Останавливаем интервал
        alert('Вы победили в конкурсе!');
    }
}

// Запускаем интервал (обновление каждую секунду)
const timerInterval = setInterval(updateTimer, 1000);