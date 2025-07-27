document.addEventListener('DOMContentLoaded', function() {
    // Находим все контейнеры с вкладками
    const tabsContainers = document.querySelectorAll('.tabs');
    
    tabsContainers.forEach(container => {
        // Элементы вкладок и содержимого внутри текущего контейнера
        const tabs = container.querySelectorAll('.tab');
        const contents = container.querySelectorAll('.tab__content');
        
        tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                // Удаляем активные классы у всех вкладок и контента
                tabs.forEach(t => t.classList.remove('tab_active'));
                contents.forEach(c => c.classList.remove('tab__content_active'));
                
                // Добавляем активный класс текущей вкладке
                tab.classList.add('tab_active');
                
                // Находим индекс выбранной вкладки
                const tabIndex = Array.from(tabs).indexOf(tab);
                
                // Активируем соответствующий блок контента
                if (contents[tabIndex]) {
                    contents[tabIndex].classList.add('tab__content_active');
                }
            });
        });
    });
});