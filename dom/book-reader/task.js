document.addEventListener('DOMContentLoaded', () => {
    const bookElement = document.getElementById('book');
    const fontSizeControls = document.querySelector('.book__control_font-size');
    
    fontSizeControls.addEventListener('click', (event) => {
        event.preventDefault();
        const target = event.target.closest('.font-size');
        
        if (!target) return;
        
        // Удаляем активный класс у всех кнопок
        fontSizeControls.querySelectorAll('.font-size').forEach(btn => {
            btn.classList.remove('font-size_active');
        });
        
        // Добавляем активный класс текущей кнопке
        target.classList.add('font-size_active');
        
        // Удаляем все классы размера шрифта
        bookElement.classList.remove('book_fs-small', 'book_fs-big');
        
        // Добавляем нужный класс в зависимости от размера
        const size = target.dataset.size;
        if (size === 'small') {
            bookElement.classList.add('book_fs-small');
        } else if (size === 'big') {
            bookElement.classList.add('book_fs-big');
        }
    });
});