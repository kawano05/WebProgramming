const serchStrings = 'is-active';
var test = document.getElementById('splide01-slide03');

window.addEventListener('DOMContentLoaded',function(){
    this.window.addEventListener('scroll',function(){
        if(test.classList.value.includes('is-active')){
            console.log("3つめ");
            UnLockScroll();
        }else{
            this.scrollTo(0,0)
            LockScroll();
        }
    })
})


function LockScroll() {
    document.addEventListener("mousewheel", handleMouseWheel, { passive: false });
    document.addEventListener("touchmove", handleTouchMove, { passive: false });
    document.addEventListener("keydown", handleKeyDown, { passive: false });
    document.body.style.overflow = "hidden";
}

function UnLockScroll() {
    document.removeEventListener("mousewheel", handleMouseWheel, { passive: false });
    document.removeEventListener("touchmove", handleTouchMove, { passive: false });
    document.removeEventListener("keydown", handleKeyDown, { passive: false });
    document.body.style.overflow = "visible";
}

function handleMouseWheel(e) {
    e.preventDefault();
}

function handleTouchMove(e) {
    e.preventDefault();
}

function handleKeyDown(e) {
    switch (e.keyCode) {
        case 0x25:
        case 0x26:
        case 0x27:
        case 0x28:
            e.preventDefault();
            break;
    }
}
document.addEventListener('DOMContentLoaded', function() {

    // CSSアニメーションアイコンの表示
    function show_load() {
      const spinner = document.querySelector('#my-custom-loader .fulfilling-square-spinner');
      spinner.style.display = 'block';
      spinner.style.transition = 'opacity 0.4s';
      spinner.style.opacity = '1';
    }
  
  
    // CSSアニメーションアイコンを非表示
    function hide_load() {
      const spinner = document.querySelector('#my-custom-loader .fulfilling-square-spinner');
      spinner.style.transition = 'opacity 0.4s';
      spinner.style.opacity = '0';
      setTimeout(function() {
        spinner.style.display = 'none';
      }, 400);
    }
  
  
    // テキストを表示
    function show_txt() {
      const txt = document.querySelector('#my-custom-loader .txt');
      txt.style.display = 'block';
      txt.style.transition = 'opacity 0.4s';
      txt.style.opacity = '1';
    }
    
  
  
    // ローディング画面を非表示
    function end_loader() {
      document.getElementById('my-custom-loader').style.transition = 'opacity 0.8s';
      document.getElementById('my-custom-loader').style.opacity = '0';
      setTimeout(function() {
        document.getElementById('my-custom-loader').style.display = 'none';
      }, 800);
    }
  
  
  
    window.addEventListener('load', function() {
      // CSSアニメーションを開始
      setTimeout(function() {
        show_load();
      }, 800);
      
      // CSSアニメーションを終了
      setTimeout(function() {
        hide_load();
      }, 3500);
      
      // テキストアニメーションを開始
      setTimeout(function() {
        show_txt();
      }, 4000);
      
      // ローディング画面を非表示
      setTimeout(function() {
        end_loader();
      }, 5000);
    });
  });