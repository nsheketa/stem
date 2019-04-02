$('document').ready(function () {
    var tl = new TimelineMax({repeat: 0}),
        tl2 = new TimelineMax({repeat: 0}),
        txt =  '羅馬不是一天就能建成的。城市全賴 不同界別的專業人士才能成功構建 出來!',
         bubbleVisible = $('.constructor__bubble.is-visible');
        bubbleHidden =$('.constructor__bubble.is-hidden');


    // $('.constructor__img-wrap').hover(function(e){
    //         function addText(){
    //             bubbleVisible.addClass('is-inactive');
    //             bubbleHidden.addClass('is-active');
    //             tl.fromTo(bubbleHidden, 1, {text:""},{text:"羅馬不是一天就能建成的。城市全賴 不同界別的專業人士才能成功構建 出來!", ease:Linear.easeNone, delay: 0.1, clearProps:"all"})
    //         }
    //          function removeText(){
    //             bubbleVisible.removeClass('is-inactive');
    //             bubbleHidden.removeClass('is-active');
    //             tl.set(bubbleHidden, 1, {text:"", clearProps:"all"})
    //         }
    //
    //
    // })
        // on('mouseleave', function(e){
    //     e.stopPropagation();
    //     bubbleVisible.removeClass('is-inactive');
    //     bubbleHidden.removeClass('is-active');
    //     // tl
    //     //     .to(bubbleHidden, 0.3,{scaleX:0, opacity: 0, ease:Linear.easeNone, delay: 0.3})
    //     //     .to(bubbleVisible, 0.3, {opacity: 1, scaleY:1, ease:Linear.easeNone, delay: 0.1})
    //     // .set(bubbleHidden, {text:""})
    // })
    //
    // function typeWriter() {
    //     if (i < txt.length) {
    //        bubbleHidden.innerHTML += txt.charAt(i);
    //         i++;
    //        setTimeout(typeWriter,50);
    //     }
    // }

})