// Получаем элементы DOM
const clickerCounter = document.getElementById('clicker__counter');
const cookie = document.getElementById('cookie');

// Исходные размеры печеньки
const initialWidth = cookie.width;
const initialHeight = cookie.height;

// Флаг для отслеживания состояния печеньки (увеличена/уменьшена)
let isEnlarged = false;

// Обработчик клика по печеньке
cookie.addEventListener('click', () => {
  // Увеличиваем счётчик кликов
  const clicks = parseInt(clickerCounter.textContent);
  clickerCounter.textContent = clicks + 1;
  
  // Чередуем увеличение и уменьшение печеньки
  if (isEnlarged) {
    // Возвращаем исходный размер
    cookie.width = initialWidth;
    cookie.height = initialHeight;
  } else {
    // Увеличиваем размер (на 20%)
    cookie.width = initialWidth * 1.2;
    cookie.height = initialHeight * 1.2;
  }
  
  // Меняем состояние на противоположное
  isEnlarged = !isEnlarged;
});