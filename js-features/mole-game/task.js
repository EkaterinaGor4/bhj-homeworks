// task.js
(() => {
    // Инициализация счетчиков
    let dead = 0;
    let lost = 0;
    const deadCounter = document.getElementById('dead');
    const lostCounter = document.getElementById('lost');
    
    // Функция для получения лунки по индексу
    const getHole = index => document.getElementById(`hole${index}`);
    
    // Функция сброса игры
    function resetGame(message) {
        alert(message);
        dead = 0;
        lost = 0;
        deadCounter.textContent = dead;
        lostCounter.textContent = lost;
        
        // Удаляем всех кротов с поля
        for (let i = 1; i <= 9; i++) {
            getHole(i).classList.remove('hole_has-mole');
        }
    }

    // Регистрируем обработчики для всех лунок
    for (let i = 1; i <= 9; i++) {
        getHole(i).addEventListener('click', function() {
            // Проверяем, есть ли крот в текущей лунке
            if (this.classList.contains('hole_has-mole')) {
                // Удаляем крота сразу после попадания
                this.classList.remove('hole_has-mole');
                
                // Обновляем счетчик убитых кротов
                dead++;
                deadCounter.textContent = dead;
                
                // Проверяем условие победы
                if (dead === 10) {
                    resetGame('Победа! Убито 10 кротов!');
                }
            } else {
                // Обновляем счетчик промахов
                lost++;
                lostCounter.textContent = lost;
                
                // Проверяем условие поражения
                if (lost === 5) {
                    resetGame('Поражение! 5 промахов!');
                }
            }
        });
    }
})();