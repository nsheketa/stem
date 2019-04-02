$(document).ready(function () {

    function isMobile() {
        var trigger = $('.is-mobile'),
            triggerStyle = trigger.css('display');
        if (triggerStyle === "block") {
            // console.log('true');
            return true;
        } else {
            return false;
        }
    }

    /*-----wisdom page bubbles posiotioning----*/
    function bubblePosition() {
        var svgSpot = $('.svg__spot'),
            dataId = svgSpot.attr('data-id'),
            bubble = $('.page__bubble'),
            $window = $(window),
            wTop = $window.scrollTop();

        if (!isMobile()) {
            bubble.each(function () {

                var $this = $(this),
                    dataSvg = $this.attr('data-svg'),
                    $thisSvg = $('.page__bg-svg').find('.svg__spot' + '.' + dataSvg).get(0).getBoundingClientRect(),
                    $thisSvgTop = Math.abs($thisSvg.top),
                    $thisSvgLeft = $thisSvg.left,
                    $thisSvgBottom = $thisSvg.bottom,
                    $thisHeight = $this.height();
                if ($this.hasClass('bubble__top')) {
                    $this.css({
                        top: wTop + $thisSvgTop - $thisHeight - 30 + 'px'
                    });

                }
                else if ($this.hasClass('bubble__bottom')) {
                    $this.css({
                        // top: $thisSvgBottom + $thisHeight + 30 + 'px'
                        top: wTop + $thisSvgBottom + 30 + 'px'
                    });
                }

            })
        }
    }

    // function relatedInfoPosition() {
    //     var svgSpot = $('.wisdom-spot__bg').get(0).getBoundingClientRect(),
    //         svgTop = svgSpot.top,
    //         relatedBlock = $('.related-info'),
    //         $window = $(window),
    //         wTop = $window.scrollTop();
    //
    //     if (!isMobile()) {
    //         relatedBlock.css({
    //             top: wTop + svgTop + 20 + 'px'
    //         })
    //     }
    // }

    // relatedInfoPosition();
    bubblePosition();

    $(window).resize(function () {
        // relatedInfoPosition();
        bubblePosition();
    });

    $(window).scroll(function () {

    });

});