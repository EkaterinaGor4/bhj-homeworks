document.addEventListener('DOMContentLoaded', function() {
    // Закрывает все открытые выпадающие списки
    function closeAllDropdowns() {
        document.querySelectorAll('.dropdown__list_active').forEach(list => {
            list.classList.remove('dropdown__list_active');
        });
    }

    // Обработчики для всех dropdown-элементов на странице
    document.querySelectorAll('.dropdown').forEach(dropdown => {
        const valueElement = dropdown.querySelector('.dropdown__value');
        const listElement = dropdown.querySelector('.dropdown__list');
        
        // Обработчик клика по кнопке
        valueElement.addEventListener('click', function(event) {
            event.stopPropagation();
            
            if (listElement.classList.contains('dropdown__list_active')) {
                listElement.classList.remove('dropdown__list_active');
            } else {
                closeAllDropdowns();
                listElement.classList.add('dropdown__list_active');
            }
        });
        
        // Обработчики для пунктов меню
        listElement.querySelectorAll('.dropdown__item').forEach(item => {
            item.addEventListener('click', function(e) {
                e.preventDefault();
                
                // Устанавливаем новое значение
                const link = this.querySelector('.dropdown__link');
                valueElement.textContent = link.textContent;
                
                // Закрываем список
                listElement.classList.remove('dropdown__list_active');
            });
        });
    });
    
    // Закрытие списков при клике вне области
    document.addEventListener('click', function() {
        closeAllDropdowns();
    });
});