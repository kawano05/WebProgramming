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