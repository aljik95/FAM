
$(document).on('click','.itm-src', function (e) {
    e.preventDefault();
    e.stopImmediatePropagation();
    var href = 'http://localhost:5000/' +$(this).val();
    $('.frame-item').attr('src', href)
});