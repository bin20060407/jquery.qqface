(function() {
    var css = require('./css.css'); //创建css
    var arr = require('./facemap.js'); //返回表情数组
    var insertText = require('./insertText.js'); //负责向textarea插入字符串
    var position = require('./position.js'); //根据按钮显示div的位置
    var creatFace = require('./creatFace.js'); //传入arr 和图片路径 返回html字符串

    $.extend({
        qqface: function(opt) {
            var defaults = {
                // 插入之前执行
                before: function() {},
                // 插入之后执行
                after: function() {},
                // 动态设置表情插入的文本框
                setTextArea: null
            };

            opt = $.extend({}, defaults, opt);

            var div = $('<div class="jquery-qqface">');
            var layer = $('<div class="jquery-qqface-layer">');

            layer.html(creatFace(arr, opt.imgPath));
            div.append(layer).appendTo('body');

            //表情层事件
            div.on('click', 'a', function() {
                var code = '[' + $(this).data('code') + ']';
                opt.before.call(null, opt.textarea, code);
                insertText(opt.textarea[0], code);
                opt.after.call(null, opt.textarea, code);
                div.hide();
            });

            function handle(current, e) {
                div.show();
                position($(current), div);
                // 如果设置了设置文本框参数，则调用
                if (opt.setTextArea && typeof opt.setTextArea === 'function') {
                    opt.textarea = opt.setTextArea.call(null, $(current), e);
                }
                e.stopPropagation();
            }
            // 如果不是字符串，直接绑定在相应对象click事件上面，否则执行自定义绑定
            if (typeof opt.handle === 'string') {
                // 点击打开表情层
                $(document).on('click', opt.handle, function(e) {
                    handle(this, e);
                });
            } else {
                opt.handle.on('click', function(e) {
                    handle(this, e);
                });
            }

            //空白处点击，关闭表情层
            $(document).on('click', function() {
                div.hide();
            });
        }
    });
})();
