document.addEventListener('DOMContentLoaded', function() {
    const timelineItems = document.querySelectorAll('.timeline-item');

    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function handleScroll() {
        timelineItems.forEach(item => {
            if (isElementInViewport(item)) {
                item.classList.add('visible');
                applyParallax(item);
            }
        });
    }

    function applyParallax(item) {
        const content = item.querySelector('.timeline-content');
        const backgroundImage = item.querySelector('.background-image');
        const scrollPosition = window.pageYOffset;
        const itemPosition = item.offsetTop;
        const distance = scrollPosition - itemPosition;
        
        content.style.transform = `translateZ(${distance * 0.1}px)`;
        backgroundImage.style.transform = `scale(1.1) translateY(${distance * 0.05}px)`;
    }

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // 初期ロード時にも実行
});