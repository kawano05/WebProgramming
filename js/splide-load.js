var splide = new Splide( '.splide',{
    type: 'slide',
    speed: 1000,
    arrows: false,
    pagination: true,
    isNavigation: true,
    // autoplay: true,
    resetProgress: false,
    // interval: 4000,
    direction: 'ttb',
    wheelSleep: 500,
    height:'100vh' ,
    wheel       : true,
    releaseWheel: true,
} )
splide.on( 'pagination:mounted', function ( data ) {
    // ULエレメントにクラスを追加できます
    data.list.classList.add( 'splide__pagination--custom' );
  
    // `items`は、すべてのLI要素とボタン要素を保持しています
    data.items.forEach( function ( item ) {
      item.button.textContent = String( item.page + 1 );
    } );
  } );

splide.mount();