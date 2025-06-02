// document.addEventListener('DOMContentLoaded', function() {
//     const timelineItems = document.querySelectorAll('.timeline-item');

//     function isElementInViewport(el) {
//         const rect = el.getBoundingClientRect();
//         return (
//             rect.top >= 0 &&
//             rect.left >= 0 &&
//             rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
//             rect.right <= (window.innerWidth || document.documentElement.clientWidth)
//         );
//     }

//     function handleScroll() {
//         timelineItems.forEach(item => {
//             if (isElementInViewport(item)) {
//                 item.classList.add('visible');
//                 applyParallax(item);
//             }
//         });
//     }

//     function applyParallax(item) {
//         const content = item.querySelector('.timeline-content');
//         const backgroundImage = item.querySelector('.background-image');
//         const scrollPosition = window.pageYOffset;
//         const itemPosition = item.offsetTop;
//         const distance = scrollPosition - itemPosition;
        
//         content.style.transform = `translateZ(${distance * 0.1}px)`;
//         backgroundImage.style.transform = `scale(1.1) translateY(${distance * 0.05}px)`;
//     }

//     window.addEventListener('scroll', handleScroll);
//     handleScroll(); // 初期ロード時にも実行
// });
document.addEventListener('DOMContentLoaded', () => {
    const items = document.querySelectorAll('.timeline-item');
    
    const assignDirection = (item, index) => {
      if (index % 2 === 0) {
        item.classList.add('from-left');
      } else {
        item.classList.add('from-right');
      }
    };
  
    const handleScroll = () => {
      items.forEach((item) => {
        const rect = item.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        if (rect.top < windowHeight * 0.85 && rect.bottom > 0) {
          item.classList.add('fade-in');
          item.classList.remove('fade-out');
        } else if (rect.bottom < 0 || rect.top > windowHeight) {
          item.classList.remove('fade-in');
          item.classList.add('fade-out');
        }
      });
    };
  
    // 初期方向の割り当てと初期スクロールハンドリング
    items.forEach(assignDirection);
    handleScroll();
  
    // スクロール時にhandleScroll関数を実行
    window.addEventListener('scroll', handleScroll);
  
    // フェードアウト後に元の位置とサイズに戻す
    items.forEach(item => {
      item.addEventListener('transitionend', (e) => {
        if (e.propertyName === 'opacity' && item.classList.contains('fade-out')) {
          if (item.classList.contains('from-left')) {
            item.style.transform = 'translateX(-100px) scale(0.5)';
          } else {
            item.style.transform = 'translateX(100px) scale(0.5)';
          }
        }
      });
    });
  });

  const modal = document.getElementById('imageModal');
        const thumbnails = document.querySelectorAll('.thumbnail');
        const enlargedImage = document.getElementById('enlargedImage');
        const closeBtn = document.querySelector('.close');

        thumbnails.forEach(thumbnail => {
            thumbnail.onclick = function() {
                modal.style.display = "block";
                enlargedImage.src = this.src;
            }
        });

        closeBtn.onclick = function() {
            modal.style.display = "none";
        }

        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }