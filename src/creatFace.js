//传入arr 和图片路径 返回html字符串
module.exports = function(arr, imgPath) {
    return $.map(arr, function(item, index) {
        var src = imgPath + item[0].replace('em_', '') + '.png';
        return '<a data-code="' + item[0] + '" href="javascript:;" title="' + item[1] + '" ></a>';
    }).join('');
};
