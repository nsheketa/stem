$(document).ready(function () {

    var controller = new ScrollMagic.Controller();
    var sceneInit1, sceneInit2, sceneInit3, sceneInit4;
    var sceneDestroy1, sceneDestroy2, sceneDestroy3, sceneDestroy4;
    var masterTimeline, masterTimelineInit, elem1, elemItems1, elem2, elemItems2, elem3, elemItems3, elem4, elemItems4;
    var modalSlider, modalSliderSettings;
    var relatedInfoSlider, relatedInfoSliderSettings;

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

    //header menu

    $('.hamburger').on('click', function (e) {
        e.stopPropagation();
        $('.nav__menu').addClass('is-active');
    });
    $('.menu__close').on('click', function (e) {
        e.preventDefault();
        $('.nav__menu').removeClass('is-active');
    });
    $(document).on('click', function (e) {
        if (!e) e = window.event;
        if ($('.nav__menu').is('.is-active')) {
            if (!$(e.target).closest('.nav__menu.is-active').length || !$(this).closest('.nav__menu.is-active').length
                || $('.menu__list-item').length) {
                $('.nav__menu').removeClass('is-active');
            }
        }
    });

    $("a.share__icon-link").on('click', function (e) {
        var html = $(this).html();
        var url = "";
        if (html.indexOf("icon-fb") != -1) {
            url = "https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(window.location.href);
        }
        else if (html.indexOf("google-plus") != -1) {
            url = "https://plus.google.com/share?url=" + encodeURIComponent(window.location.href);
        }
        else if (html.indexOf("icon-twitter") != -1) {
            url = "https://twitter.com/intent/tweet?url=" + encodeURIComponent(window.location.href);
        }
        window.open(url, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=450,width=600');
        return false;
    });

    $('.menu__list-dropdown-link').on('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
        var $this = $(this),
            parent = $this.parent(),
            span = $this.find('span');

        parent.toggleClass('is-open');
        span.toggleClass('is-visible');
        $('.menu__list-dropdown').slideToggle();
    })


    function submenuMobInit() {
        $('.page__submenu-item.is-active .page__submenu-link').on('click', function (e) {
            if (isMobile()) {
                e.preventDefault();
                var $this = $(this),
                    dropdown = $this.parent().find('.page__submenu-dropdown');

                dropdown.toggleClass('is-open');

            }
            return false;
        });
    }

    $(document).on('click', function (e) {
        if (!e) e = window.event;
        if ($('.page__submenu-dropdown').hasClass('is-open')) {
            e.stopPropagation();
            if (!$(e.target).closest('.page__submenu-dropdown.is-open').length) {
                $('.page__submenu-dropdown.is-open').removeClass('is-open');
            }
        }
    });

    $('.go__top-link').on('click', function (e) {
        e.preventDefault();
        var $this = $(this),
            href = $this.attr('href');

        $('html, body').animate({
            scrollTop: $('.page__row' + href).position().top
        }, 500)
    })

    function goTopLinkPosition(){
        var link =  $('.go__top-link'),
            firstSection = $('.page__row-intro'),
            firstSectionEnd = firstSection.outerHeight(),
            vwBottom = $(document).scrollTop();

        if(vwBottom > firstSectionEnd){
            link.addClass('is-visible');
        }else {
            link.removeClass('is-visible');
        }
    }

    //homepage city building animation
    elem1 = $(".building__scene-01"),
        elemItems1 = $(".building__scene-01 .scene__item"),
        elem2 = $(".building__scene-02"),
        elemItems2 = $(".building__scene-02 .scene__item"),
        elem3 = $(".building__scene-03"),
        elemItems3 = $(".building__scene-03 .scene__item"),
        elem4 = $(".building__scene-04"),
        elemItems4 = $(".building__scene-04 .scene__item");

    function tl1() {
        sceneInit1 = new TimelineMax({});
        sceneInit1
            // .to(elemItems1, 0, {className: '-=not-animated'})
            .to(elem1, 0, {className: '-=is-hidden'})
            // .staggerTo(elemItems1, 0.07, {className: '+=is-animated'}, 0.02)
            .staggerTo(elemItems1, 0.3, {className: '+=is-animated'}, 0.1)
        return sceneInit1;
    }

    function tl2() {
        sceneDestroy1 = new TimelineMax({delay: 2.5});
        sceneDestroy1
            // .staggerTo(elemItems1, 0.2, {className: '+=not-animated'}, 0.2)
            .staggerTo(elemItems1, 0.3, {className: '+=not-animated'}, 0.1)
            .to(elemItems1, 0, {className: '-=is-animated'})
            .fromTo(elem1, 0, {className: '-=is-visible'}, {className: '+=is-removed'})
            .to(elem2, 0, {className: '-=is-hidden'})
        return sceneDestroy1;
    }

    function tl3() {
        sceneInit2 = new TimelineMax({delay: 0.1});
        sceneInit2
            .to(elemItems2, 0, {className: '-=not-animated'})
            // .staggerTo(elemItems2, 0.07, {className: '+=is-animated'}, 0.02)
            .staggerTo(elemItems2, 0.2, {className: '+=is-animated'}, 0.1)
        return sceneInit2;
    }

    function tl4() {
        sceneDestroy2 = new TimelineMax({delay: 2.5});
        sceneDestroy2
            // .staggerTo(elemItems2, 0.2, {className: '+=not-animated'}, 0.1)
            .staggerTo(elemItems2, 0.2, {className: '+=not-animated'}, 0.1)
            .to(elemItems2, 0, {className: '-=is-animated'})
            .fromTo(elem2, 0, {className: '-=is-visible'}, {className: '+=is-hidden'})
            .to(elem3, 0, {className: '-=is-hidden'})
        return sceneDestroy2;
    }

    function tl5() {
        sceneInit3 = new TimelineMax({delay: 0.1});
        sceneInit3
            .to(elemItems3, 0, {className: '-=not-animated'})
            // .staggerTo(elemItems3, 0.07, {className: '+=is-animated'}, 0.05)
            .staggerTo(elemItems3, 0.1, {className: '+=is-animated'}, 0.05)
        return sceneInit3;
    }

    function tl6() {
        sceneDestroy3 = new TimelineMax({delay: 2.5});
        sceneDestroy3
            .staggerTo(elemItems3, 0.1, {className: '+=not-animated'}, 0.05)
            .to(elemItems3, 0, {className: '-=is-animated'})
            .fromTo(elem3, 0, {className: '-=is-visible'}, {className: '+=is-hidden'})
            .to(elem4, 0, {className: '-=is-hidden'})
        return sceneDestroy3;
    }

    function tl7() {
        sceneInit4 = new TimelineMax({delay: 0.1});
        sceneInit4
            .to(elemItems4, 0, {className: '-=not-animated'})
            .staggerTo(elemItems4, 0.1, {className: '+=is-animated'}, 0.05)
        return sceneInit4;
    }

    function tl8() {
        sceneDestroy4 = new TimelineMax({delay: 2.5});
        sceneDestroy4
            .staggerTo(elemItems4, 0.1, {className: '+=not-animated'}, 0.05)
            .to(elemItems4, 0, {className: '-=is-animated'})
            .fromTo(elem4, 0, {className: '-=is-visible'}, {className: '+=is-hidden'})
            // .to(elemItems1, 0, {className: '-=not-animated'})
        return sceneDestroy4;
    }

    masterTimeline = new TimelineMax({repeat: -1});
    masterTimeline
        .add(tl1())
        .add(tl2())
        .add(tl3())
        .add(tl4())
        .add(tl5())
        .add(tl6())
        .add(tl7())
        .add(tl8());
    masterTimeline.pause();

    masterTimelineInit = new ScrollMagic.Scene({
        triggerElement: ".section-building",
        offset: 50,
        duration: $('.section-building').height() + 100
    })
        .on('enter', function (event) {
            masterTimeline.resume();
            console.log("passed start trigger");

        })
        .on('leave', function (event) {
            masterTimeline.pause();
            console.log("passed end trigger");

        })
        // .addIndicators()
        .addTo(controller);

    $('.section-building').on('click', function (e) {
        masterTimeline.resume();
    });

    /*----related projects popup---*/
    function relatedProjectInit() {
        $('.related-info__item-link-projects').on('click', function (e) {
            e.preventDefault();
            e.stopPropagation();
            var $this = $(this),
                attr = $this.attr('href'),
                headerH = $('.header').outerHeight(),
                relatedInfoModal = $this.parents('.page__content').find('.related-info__projects');
            if (!isMobile()) {
                if (relatedInfoModal.hasClass('is-visible')) {
                    relatedInfoModal.removeClass('is-visible');
                    return;
                } else {
                    relatedInfoModal.addClass('is-visible');
                    return;
                }

            } else {
                $current = $.attr(this, 'href');
                $(".modal__item").hide();
                $(".related-info__modal").hide();
                console.log($current);
                $($current).show();
                $('html, body').animate({
                    scrollTop: $($current).offset().top - headerH
                }, 500);
            }
        });
    }

    $(document).on('click', function (e) {
        if (!e) e = window.event;
        if ($('.related-info__modal').is('.is-visible')) {
            if (!$(e.target).closest('.related__info, .related-info__modal.is-visible').length) {
                $('.related-info__modal.is-visible').removeClass('is-visible');
            }
        }
    });

    relatedInfoSlider = $('.related-info__slider');
    modalSlider = $('.modal__slider');

    relatedInfoSliderSettings = {
        arrows: true,
        dots: false,
        infinite: false,
        // fade: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: "unslick"
            }
        ]
    };

    modalSliderSettings = {
        arrows: true,
        dots: false,
        infinite: false,
        fade: true,
        speed: 150,
        adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: "unslick"
            }
        ]
    };

    relatedInfoSlider.slick(relatedInfoSliderSettings);
    modalSlider.slick(modalSliderSettings);

    function relatedInfoSliderInit() {
        if ($(window).width() <= 1024) {
            if (relatedInfoSlider.hasClass('slick-initialized')) {
                relatedInfoSlider.slick('unslick');
            }
            return
        }

        if (!relatedInfoSlider.hasClass('slick-initialized')) {
            return relatedInfoSlider.slick(relatedInfoSliderSettings);
        }

    }

    function modalSliderInit() {
        if ($(window).width() <= 1024) {
            if (modalSlider.hasClass('slick-initialized')) {
                modalSlider.slick('unslick');
            }
            return
        }

        if (!modalSlider.hasClass('slick-initialized')) {
            return modalSlider.slick(modalSliderSettings);
        }

    }

    /*modal init*/
    $('.modal__link').on('click', function (event) {
        event.preventDefault();
        event.stopPropagation();
        var $this = $(this),
            attrId = $this.attr('href'),
            parentContainer = $this.parents('.page__content'),
            target = parentContainer.find('.modal__item' + attrId)
        modal = $('.modal__item'),
            headerH = $('.header').outerHeight();

        if (!isMobile()) {
            $(".modal__item").show();
            $(".related-info__modal").show();
            $('#overlay').addClass('is-visible');
            target.addClass('is-active');
        } else {
            $current = $.attr(this, 'href');
            $(".modal__item").hide();
            $(".related-info__modal").hide();
            console.log($current);
            $($current).show();
            $('html, body').animate({
                scrollTop: $($current).offset().top - headerH
            }, 500);
        }
    });

    $(document).on('click', function (e) {
        if (!e) e = window.event;
        if ($('.modal__item').is('.is-active')) {
            if (!$(e.target).closest('.modal__item.is-active').length) {
                $('.modal__item.is-active').removeClass('is-active');
                $('#overlay').removeClass('is-visible');
                if (!e.target.closest('.modal__carousel.is-active.no-transition')) {
                    // $('.modal__carousel.no-transition').removeClass('no-transition');
                    $('.modal__carousel.no-transition').each(function (i) {
                        $(this).removeClass('no-transition');
                    });
                }
            }
        }
    });

    $('.modal__close').on('click', function (e) {
        var $this = $(this);
        $this.parents('.modal__item').removeClass('is-active');
        $('#overlay').removeClass('is-visible');
    });

    //modal carousel

    $('.modal__carousel-link').on('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
        var $this = $(this),
            attrId = $this.attr('href'),
            parentContainer = $this.parents('.page__content'),
            target = parentContainer.find('.modal__carousel' + attrId),
            carousel = $('.modal__carousel'),
            headerH = $('.header').outerHeight();
        if (!isMobile()) {
            $('#overlay').addClass('is-visible');
            target.addClass('is-active');
            if (target.index() < 1) {
                target.find('.modal__controls-prev').addClass('is-inactive');
            }
            else if (target.index() >= carousel.length - 1) {
                target.find('.modal__controls-next').addClass('is-inactive');
            }
        } else {
            $current = $.attr(this, 'href');
            $(".modal__item").hide();
            $(".related-info__modal").hide();
            console.log($current);
            $($current).show();
            $('html, body').animate({
                scrollTop: $($current).offset().top - headerH
            }, 500);
        }
    })

    function modalCarouselInit() {
        var carousel = $('.modal__carousel'),
            i,
            carouselLength = carousel.length,
            carouselPrev = $('.modal__controls-prev'),
            carouselNext = $('.modal__controls-next');
        if (!isMobile()) {
            carouselNext.on('click', function (e) {
                var $this = $(this),
                    carouselWrap = $('.modal__carousel-wrap');
                if ($this.parents(carousel).index() < carouselLength) {
                    $this.parents(carousel).removeClass('is-active');
                    $this.parents(carousel).next().addClass('is-active');
                    e.stopPropagation();


                    if ($this.parents(carousel).next().index() >= carouselLength - 1) {
                        $this.parents(carousel).next().find('.modal__controls-next').addClass('is-inactive');
                    }
                }
            })
            carouselPrev.on('click', function (e) {
                var $this = $(this);
                if ($this.parents('.modal__carousel').index() > 0) {
                    $this.parents('.modal__carousel').removeClass('is-active');
                    $this.parents('.modal__carousel').prev().addClass('is-active');

                    if ($this.parents(carousel).prev().index() < 1) {
                        $this.parents(carousel).prev().find('.modal__controls-prev').addClass('is-inactive');
                    }

                }
                e.stopPropagation();
            })

        }
    }

    function resizeReset() {
        if (isMobile()) {
            $('.modal__item').removeClass('is-active');
            $('#overlay').removeClass('is-visible');
        }
    }

    //check answers in modal

    $('.ri__answer').on('click', function (e) {
        var $this = $(this),
            attrAnswer = $this.attr('data-answer');

        if (attrAnswer == 'is-true') {
            $this.removeClass('is-false is-true').addClass('is-true');
        } else {
            $this.removeClass('is-false is-true').addClass('is-false');
        }
    });

    /*history page*/
    $('.history-slider').slick({
        arrows: true,
        dots: false,
        infinite: false,
        // fade: true
    });


    /*--------page-3--------*/
    $('.skyscraper__info-item').on('mouseenter', function (e) {
        var $this = $(this),
            attrId = $this.attr('data-id');
        if (!$this.hasClass('skyscraper__info-item-main')) {
            $this.parent().find('.skyscraper__img-overlay' + attrId).addClass('is-visible');
            $this.siblings('.skyscraper__info-item-main').removeClass('is-active');
        }
    }).on('mouseleave', function (e) {
        var $this = $(this);
        $('.skyscraper__img-overlay.is-visible').removeClass('is-visible');
        $this.siblings('.skyscraper__info-item-main').addClass('is-active');
    });

    $('.modal__accordion-head').on('click', function (e) {
        var $this = $(this);
        $this.find('.arrow').toggleClass('is-rotated');
        $this.parent().find('.modal__accordion-body').slideToggle();
    })


    submenuMobInit();
    relatedProjectInit();
    relatedInfoSliderInit();
    modalSliderInit();
    modalCarouselInit();
    goTopLinkPosition();

    $(window).resize(function () {
        // setMenuPin();
        submenuMobInit();
        masterTimelineInit.duration($('.section-building').height() + 100);
        relatedProjectInit();
        relatedInfoSliderInit();
        modalSliderInit();
        modalCarouselInit();
        resizeReset();
    });

    $(window).scroll(function () {
        goTopLinkPosition();
    });

});