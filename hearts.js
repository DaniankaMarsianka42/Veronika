document.addEventListener('DOMContentLoaded', () => {
    const trail = document.getElementById('hearts-trail');
    let hearts = [];
    
    document.addEventListener('mousemove', (e) => {
        // Создаем сердечко ПРИ КАЖДОМ движении мыши
        const heart = document.createElement('div');
        heart.className = 'heart-trail';
        heart.style.left = (e.clientX - 12) + 'px';
        heart.style.top = (e.clientY - 12) + 'px';
        trail.appendChild(heart);
        hearts.push({el: heart, time: 90}); // Живут дольше
    });

    function animate() {
        for (let i = hearts.length - 1; i >= 0; i--) {
            const heart = hearts[i];
            heart.time--;
            
            if (heart.time <= 0) {
                heart.el.remove();
                hearts.splice(i, 1);
                continue;
            }
            
            // Плавная анимация
            const progress = heart.time / 90;
            heart.el.style.opacity = progress;
            heart.el.style.transform = `translateY(-${(1-progress) * 80}px) scale(${progress * 1.2}) rotate(${Math.sin(progress * Math.PI) * 10}deg)`;
        }
        requestAnimationFrame(animate);
    }
    animate();
});
