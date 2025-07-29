// Функция для проверки видимости элемента
function isElementVisible(el) {
    const rect = el.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    
    // Элемент виден, если его верхняя граница выше нижней границы окна 
    // и нижняя граница ниже верхней границы окна
    return (
        rect.top < windowHeight - 100 && 
        rect.bottom > 0
    );
}

// Основная функция для обработки появления элементов
function handleReveal() {
    const elements = document.querySelectorAll('.reveal');
    
    elements.forEach(element => {
        if (element.classList.contains('reveal_active')) {
            return; // Пропускаем уже активные элементы
        }
        
        if (isElementVisible(element)) {
            element.classList.add('reveal_active');
        }
    });
}

// Инициализация
document.addEventListener('DOMContentLoaded', () => {
    // Обработка при загрузке
    handleReveal();
    
    // Обработка при скролле с оптимизацией
    let isScrolling = false;
    window.addEventListener('scroll', () => {
        if (!isScrolling) {
            window.requestAnimationFrame(() => {
                handleReveal();
                isScrolling = false;
            });
            isScrolling = true;
        }
    });
});