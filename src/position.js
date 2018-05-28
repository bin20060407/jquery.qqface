//根据按钮显示div的位置
module.exports = function(handle, div) {
    var win = $(window);
    var left = handle.offset().left;
    var top = handle.offset().top;
    var width = handle.outerWidth();
    var height = handle.outerHeight();

    var wWidth = win.width();
    var wHeight = win.height();

    var dLeft;
    var dTop;

    if (left + div.outerWidth() < wWidth) {
        dLeft = left;
    } else {
        var right = wWidth - left - width;
        dLeft = wWidth - right - div.outerWidth();
    }

    if (top + div.outerHeight() < wHeight) {
        dTop = top + height;
    } else {
        dTop = top - div.outerHeight();
    }

    div.css({
        left: dLeft,
        top: dTop
    });
};
