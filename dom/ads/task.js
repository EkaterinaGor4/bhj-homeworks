document.addEventListener('DOMContentLoaded', () => {
    const rotators = document.querySelectorAll('.rotator');
    
    rotators.forEach(rotator => {
        const cases = Array.from(rotator.querySelectorAll('.rotator__case'));
        let currentIndex = cases.findIndex(c => c.classList.contains('rotator__case_active'));
        
        // Инициализация первого активного элемента
        if (currentIndex === -1) {
            currentIndex = 0;
            cases[currentIndex].classList.add('rotator__case_active');
        }
        applyStyles(cases[currentIndex]);
        
        // Запуск ротации с фиксированным интервалом 1000 мс
        setInterval(() => {
            cases[currentIndex].classList.remove('rotator__case_active');
            
            currentIndex = (currentIndex + 1) % cases.length;
            
            cases[currentIndex].classList.add('rotator__case_active');
            applyStyles(cases[currentIndex]);
        }, 1000);
    });
    
    function applyStyles(element) {
        const color = element.dataset.color;
        if (color) {
            element.style.color = color;
        }
    }
});