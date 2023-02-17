window.addEventListener('load', function () {
    var preview = document.querySelector('.preview_img');
    var mask = document.querySelector('.mask');
    var big = document.querySelector('.big');
    var bigImg = document.querySelector('.bigImg');
    preview.addEventListener('mouseover', function () {
        mask.style.display = 'block';
        big.style.display = 'block';
    })
    preview.addEventListener('mouseout', function () {
        mask.style.display = 'none';
        big.style.display = 'none';
    })
    preview.addEventListener('mousemove', function (e) {
        var x = e.pageX - preview.offsetLeft;
        var y = e.pageY - preview.offsetTop;
        var maskX = x - mask.offsetWidth / 2;
        var maskY = y - mask.offsetHeight / 2;
        var maskMax = preview.offsetWidth - mask.offsetWidth;
        if (maskX <= 0) {
            maskX = 0;
        } else if (maskX >= maskMax) {
            maskX = maskMax;
        }
        if (maskY <= 0) {
            maskY = 0;
        } else if (maskY >= maskMax) {
            maskY = maskMax;
        }
        mask.style.left = maskX + 'px';
        mask.style.top = maskY + 'px';
        bigImg.style.left = -maskX * maskMax / maskMax + 'px';
        bigImg.style.top = -maskY + maskMax / maskMax + 'px';
    })
    var tabList = document.querySelector('.detail_tab_list');
    var lis = tabList.querySelectorAll('li');
    var tabCon = document.querySelector('.detail_tab_con');
    var ul = tabCon.querySelectorAll('ul');
    ul[0].parentNode.style.display = 'block';
    for (var i = 0; i < lis.length; i++) {
        lis[i].setAttribute('index', i);
        lis[i].addEventListener('click', function () {
            for (var j = 0; j < lis.length; j++) {
                lis[j].className = '';
            }
            this.className = 'current';
            var index = this.getAttribute('index');
            for (var k = 0; k < ul.length; k++) {
                ul[k].parentNode.style.display = 'none';
            }
            ul[index].parentNode.style.display = 'block';
        })
    }
})