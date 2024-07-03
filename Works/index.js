// 線が伸びるための設定を関数でまとめる
function scrollTimelineAnime() {
    document.querySelectorAll('.timeline li').forEach(function(element) {
        // それぞれのli要素の
        var elemPos = element.getBoundingClientRect().top + window.pageYOffset; // 上からの高さ取得
        var scroll = window.pageYOffset; // スクロール値取得
        var windowHeight = window.innerHeight; // windowの高さ取得
        var startPoint = 100; //線をスタートさせる位置を指定※レイアウトによって調整してください
        if (scroll >= elemPos - windowHeight - startPoint) {
            element.classList.add('show');
            
            var H = element.offsetHeight; //liの余白と高さを含めた数値を取得
            //スクロール値から要素までの高さを引いた値を、liの高さの半分のパーセントで出す
            var percent = (scroll + startPoint - elemPos) / (H / 2) * 100; //liの余白と高さの半分で線を100％に伸ばす

            // 100% を超えたらずっと100%を入れ続ける
            if (percent > 100) {
                percent = 100;
            }
            // ボーダーの長さをセット
            element.querySelector('.border-line').style.height = percent + "%"; //CSSでパーセント指定
        }
    });
}

window.addEventListener('scroll', scrollTimelineAnime);
window.addEventListener('load', scrollTimelineAnime);
document.querySelectorAll('.timeline li').forEach(function(element) {
    element.addEventListener('click', function() {
        this.classList.toggle('active');
    });
});
// 画面をスクロールをしたら動かしたい場合の記述
window.addEventListener('scroll', function() {
    scrollTimelineAnime(); // 線が伸びる関数を呼ぶ
});

// ページが読み込まれたらすぐに動かしたい場合の記述
window.addEventListener('load', function() {
    scrollTimelineAnime(); // 線が伸びる関数を呼ぶ
});

// ポップアップ関連の要素を取得
const popupOverlay = document.getElementById('popup-overlay');
const popupTitle = document.getElementById('popup-title');
const popupImage = document.getElementById('popup-image');
const popupDescription = document.getElementById('popup-description');
const closePopup = document.querySelector('.close-popup');

// 各「詳細を見る」ボタンにイベントリスナーを追加
document.querySelectorAll('.popup-trigger').forEach(button => {
    button.addEventListener('click', function() {
        const listItem = this.closest('li');
        const title = listItem.querySelector('dt').textContent;
        const imageSrc = listItem.querySelector('img').src;
        const description = listItem.querySelector('.details p').textContent;

        popupTitle.textContent = title;
        popupImage.src = imageSrc;
        popupDescription.textContent = description;

        popupOverlay.style.display = 'block';
    });
});

// ポップアップを閉じる
closePopup.addEventListener('click', function() {
    popupOverlay.style.display = 'none';
});

// オーバーレイをクリックしてもポップアップを閉じる
popupOverlay.addEventListener('click', function(e) {
    if (e.target === this) {
        popupOverlay.style.display = 'none';
    }
});