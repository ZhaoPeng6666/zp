window.addEventListener('load', function () {
    var swiper = document.querySelector('.swiper');
    var swiperWidth = swiper.offsetWidth;
    swiper.addEventListener('mouseenter', function () {
        prev.style.display = 'block';
        next.style.display = 'block';
        clearInterval(timer);
    })
    swiper.addEventListener('mouseleave', function () {
        prev.style.display = 'none';
        next.style.display = 'none';
        timer = setInterval(function () {
            next.click();
        }, 2000);
    })
    var ul = swiper.querySelector('ul');
    var ol = swiper.querySelector('ol');
    var lis = ul.querySelectorAll('li');
    for (var i = 0; i < lis.length; i++) {
        var createLis = document.createElement('li');
        createLis.setAttribute('index', i);
        ol.appendChild(createLis);
        var olLis = ol.querySelectorAll('li');
        for (var j = 0; j < olLis.length; j++) {
            olLis[j].addEventListener('click', function () {
                for (var k = 0; k < olLis.length; k++) {
                    olLis[k].className = '';
                }
                this.className = 'current';
                var index = this.getAttribute('index');
                num = index;
                circle = index;
                animate(ul, -index * swiperWidth);
            })
        }
    }
    olLis[0].className = 'current';
    var prev = swiper.querySelector('.arrow_prev');
    var next = swiper.querySelector('.arrow_next');
    var first = lis[0].cloneNode(true);
    ul.appendChild(first);
    var clonelis = ul.querySelectorAll('li');
    var num = 0;
    var circle = 0;
    var flag = true;
    prev.addEventListener('click', function () {
        if (flag) {
            flag = false;
            if (num == 0) {
                num = clonelis.length - 1;
                ul.style.left = -num * swiperWidth + 'px';
            }
            num--;
            animate(ul, -num * swiperWidth, function () {
                flag = true;
            });
            circle--;
            if (circle < 0) {
                circle = ol.children.length - 1;
            }
            for (m = 0; m < olLis.length; m++) {
                olLis[m].className = '';
            }
            olLis[circle].className = 'current';
        }
    })
    var timer = setInterval(function () {
        next.click();
    }, 2000);
    next.addEventListener('click', function () {
        if (flag) {
            flag = false;
            if (num == clonelis.length - 1) {
                ul.style.left = 0;
                num = 0;
            }
            num++;
            animate(ul, -num * swiperWidth, function () {
                flag = true;
            });
            circle++;
            if (circle == olLis.length) {
                circle = 0;
            }
            for (m = 0; m < olLis.length; m++) {
                olLis[m].className = '';
            }
            olLis[circle].className = 'current';
        }
    })
});
$(function () {
    toggleTop();
    var flag = true;
    function toggleTop() {
        if ($(document).scrollTop() >= $('.jiadian').offset().top) {
            $('.sidebar').fadeIn();
        } else {
            $('.sidebar').fadeOut();
        }
    }
    $(window).scroll(function () {
        toggleTop();
        // console.log($('body,html').scrollTop());
        if (flag) {
            $('.floor .no').each(function (i, ele) {
                if ($(document).scrollTop() >= $(ele).offset().top) {
                    $('.sidebar li').eq(i).addClass('current').siblings().removeClass();
                }
            })
        }
    })
    $('.sidebar li').click(function () {
        flag = false;
        var current = $('.floor .no').eq($(this).index()).offset().top;
        $('body, html').stop().animate({
            scrollTop: current
        }, function () {
            flag = true;
        })
        $(this).addClass('current').siblings().removeClass();
    })
});
