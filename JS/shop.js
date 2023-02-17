$(function () {
    $('.checkall').change(function () {
        $('.j-checkbox,.checkall').prop('checked', ($(this).prop('checked')));
        if ($(this).prop('checked')) {
            $('.cart-item').addClass('check-cart-item');
        } else {
            $('.cart-item').removeClass('check-cart-item');
        }
    })
    $('.checkall').change(function () {
        $('.j-checkbox,.checkall').prop('checked', ($(this).prop('checked')));
    })
    $('.j-checkbox').change(function () {
        if ($('.j-checkbox:checked').length == $('.j-checkbox').length) {
            $('.checkall,.checkall').prop('checked', true);
        } else {
            $('.checkall,.checkall').prop('checked', false);
        }
        if ($(this).prop('checked')) {
            $(this).parents('.cart-item').addClass('check-cart-item')
        } else {
            $(this).parents('.cart-item').removeClass('check-cart-item')
        }
    })
    $('.increment').click(function () {
        var num = $(this).siblings('.itxt').val();
        num++;
        $(this).siblings('.itxt').val(num);
        var price = $(this).parents('.p-num').siblings('.p-price').text();
        price = price.substr(1);
        var sum = (price * num).toFixed(2);
        $(this).parents('.p-num').siblings('.p-sum').text('￥' + sum);
        getSum();
    })
    $('.decrement').click(function () {
        var num = $(this).siblings('.itxt').val();
        if (num == 0) {
            return false;
        }
        num--;
        $(this).siblings('.itxt').val(num);
        var price = $(this).parents('.p-num').siblings('.p-price').text();
        price = price.substr(1);
        var sum = (price * num).toFixed(2);
        $(this).parents('.p-num').siblings('.p-sum').text('￥' + sum);
        getSum();
    })
    $('.itxt').change(function () {
        var num = $(this).val();
        var price = $(this).parents('.p-num').siblings('.p-price').text();
        price = price.substr(1);
        var sum = (price * num).toFixed(2);
        $(this).parents('.p-num').siblings('.p-sum').text('￥' + sum);
        getSum();
    })
    getSum();
    function getSum() {
        var count = 0;
        var money = 0;
        $('.itxt').each(function (i, ele) {
            count += parseInt($(ele).val());
        })
        $('.amount-sum em').text(count);
        if (count < $('.cart-item').length) {
            if (count == 0) {
                $('.price-sum em').text('￥' + 0 + '.00');
            } else {
                $('.itxt').each(function (i, ele) {
                    var price = $(this).parents('.p-num').siblings('.p-price');
                    money += $(this).val() * price.text().substr(1);
                    $('.price-sum em').text('￥' + money.toFixed(2));
                })
            }
        } else {
            $('.p-sum').each(function (i, ele) {
                money += parseFloat($(ele).text().substr(1));
            })
            $('.price-sum em').text('￥' + money.toFixed(2));
        }
    }
    $('.p-action a').click(function () {
        $(this).parents('.cart-item').remove();
        getSum();
    })
    $('.remove-batch').click(function () {
        $('.j-checkbox:checked').parents('.cart-item').remove();
        getSum();
    })
    $('.clear-all').click(function () {
        $('.cart-item').remove();
        getSum();
    })
})