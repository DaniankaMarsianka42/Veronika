document.addEventListener('DOMContentLoaded', () => {
    const startDate = new Date('2025-04-19T00:00:00');
    
    function updateTime() {
        const now = new Date();
        const diff = now - startDate;
        
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);
        
        document.getElementById('time-display').textContent = 
            `${days} дней, ${hours} часов, ${minutes} минут, ${seconds} секунд`;
    }
    
    updateTime();
    setInterval(updateTime, 1000);
});

