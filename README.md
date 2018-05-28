# From
从 [http://kyo4311.github.io/jquery.qqface/](http://kyo4311.github.io/jquery.qqface/ "原项目")  修改而来，根据实际项目做了相应调整

# jquery.qqface
[![Packagist](https://img.shields.io/packagist/l/doctrine/orm.svg?style=plastic)](https://github.com/bin20060407/jquery.qqface)



jQuery QQ 表情插件。     
点击一个按钮，弹出一个选择QQ表情的组件，点击即可选择表情，插入到textara里面。

查看：示例：http://kyo4311.github.io/jquery.qqface/   
<img src="http://kyo4311.github.io/jquery.qqface/gif/bg.png" width="406" height="163" />

# 开始使用
1. 引入jQuery
2. 引入jquery.qqface.css
3. 引入jquery.qqface.js

## html
``` html
<div>
    <textarea id="liveChatContent" spellcheck="false"></textarea>
</div>
<a href="javascript:;" id="face">表情</a>
```

## js
```js
//看起来很简单！
$.qqface({
    imgPath : 'gif/',
    textarea : $('#liveChatContent'),
    handle : $('#face')
});
```
# 进阶使用
页面有多个需要输入表情的文本框，对应触发输入也有多个，输入框可能是动态生成
## html
``` html
<div>
    <textarea id="chat-1" spellcheck="false"></textarea>
</div>
<a href="javascript:;" class="face" data-id="1">表情</a>
<div>
    <textarea id="chat-2" spellcheck="false"></textarea>
</div>
<a href="javascript:;" class="face" data-id="2">表情</a>

```

## js

``` js
$.qqface({
    imgPath : 'gif/',
    handle : 'a.face',
    // 动态设置表情插入的文本框
    setTextArea : function(current) {
        return $('#chat-' + current.data('id'));
    }
});

```

# 开发
``` bash
# clone
git clone ...
# 进入目录
npm install
# 打包发布
npm run build

```

# 代码列表

序号 | 符号 | 中文释义 | 图片
--- | --- | --- | ---
0 | /::) | 微笑 | ![微笑](https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/0.gif "微笑")
1 | /::~ | 撇嘴 | ![撇嘴](https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/1.gif "撇嘴")
2 | /::B | 色 | ![色](https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/2.gif "色")
3 | /::&#124; | 发呆 | ![发呆](https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/3.gif "发呆")
4 | /:8-) | 得意 | ![得意](https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/4.gif "得意")
5 | /::< | 流泪 | ![流泪](https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/5.gif "流泪")
6 | /::$ | 害羞 | ![害羞](https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/6.gif "害羞")
7 | /::X | 闭嘴 | ![闭嘴](https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/7.gif "闭嘴")
8 | /::Z | 睡 | ![睡](https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/8.gif "睡")
9 | /::'( | 大哭 | ![大哭](https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/9.gif "大哭")
10 | /::-&#124; | 尴尬 | ![尴尬](https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/10.gif "尴尬")
11 | /::@ | 发怒 | ![发怒](https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/11.gif "发怒")
12 | /::P | 调皮 | ![调皮](https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/12.gif "调皮")
13 | /::D | 呲牙 | ![呲牙](https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/13.gif "呲牙")
14 | /::O | 惊讶 | ![惊讶](https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/14.gif "惊讶")
15 | /::( | 难过 | ![难过](https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/15.gif "难过")
16 | /::+ | 酷 | ![酷](https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/16.gif "酷")
17 | /:--b | 冷汗 | ![冷汗](https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/17.gif "冷汗")
18 | /::Q | 抓狂 | ![抓狂](https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/18.gif "抓狂")
19 | /::T | 吐 | ![吐](https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/19.gif "吐")
20 | /:,@P | 偷笑 | ![偷笑](https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/20.gif "偷笑")
21 | /:,@-D | 可爱 | ![可爱](https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/21.gif "可爱")
22 | /::d | 白眼 | ![白眼](https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/22.gif "白眼")
23 | /:,@o | -傲慢 | ![-傲慢](https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/23.gif "-傲慢")
24 | /::g | 饥饿 | ![饥饿](https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/24.gif "饥饿")
25 | /:&#124;-) | 困 | ![困](https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/25.gif "困")
26 | /::! | 惊恐 | ![惊恐](https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/26.gif "惊恐")
27 | /::L | 流汗 | ![流汗](https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/27.gif "流汗")
28 | /::> | 憨笑 | ![憨笑](https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/28.gif "憨笑")
29 | /::,@ | 大兵 | ![大兵](https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/29.gif "大兵")
30 | /:,@f | 奋斗 | ![奋斗](https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/30.gif "奋斗")
31 | /::-S | 咒骂 | ![咒骂](https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/31.gif "咒骂")
32 | /:? | 疑问 | ![疑问](https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/32.gif "疑问")
33 | /:,@x | 嘘 | ![嘘](https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/33.gif "嘘")
34 | /:,@@ | 晕 | ![晕](https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/34.gif "晕")
35 | /::8 | 折磨 | ![折磨](https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/35.gif "折磨")
36 | /:,@! | 衰 | ![衰](https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/36.gif "衰")
37 | /:!!! | 骷髅 | ![骷髅](https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/37.gif "骷髅")
38 | /:xx | 敲打 | ![敲打](https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/38.gif "敲打")
39 | /:bye | 再见 | ![再见](https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/39.gif "再见")
40 | /:wipe | 擦汗 | ![擦汗](https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/40.gif "擦汗")
41 | /:dig | 抠鼻 | ![抠鼻](https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/41.gif "抠鼻")
42 | /:handclap | 鼓掌 | ![鼓掌](https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/42.gif "鼓掌")
43 | /:&-( | 糗大了 | ![糗大了](https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/43.gif "糗大了")
44 | /:B-) | 坏笑 | ![坏笑](https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/44.gif "坏笑")
45 | /:<@ | 左哼哼 | ![左哼哼](https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/45.gif "左哼哼")
46 | /:@> | 右哼哼 | ![右哼哼](https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/46.gif "右哼哼")
47 | /::-O | 哈欠 | ![哈欠](https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/47.gif "哈欠")
48 | /:>-&#124; | 鄙视 | ![鄙视](https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/48.gif "鄙视")
49 | /:P-( | 委屈 | ![委屈](https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/49.gif "委屈")
50 | /::'&#124; | 快哭了 | ![快哭了](https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/50.gif "快哭了")
51 | /:X-) | 阴险 | ![阴险](https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/51.gif "阴险")
52 | /::* | 亲亲 | ![亲亲](https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/52.gif "亲亲")
53 | /:@x | 吓 | ![吓](https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/53.gif "吓")
54 | /:8* | 可怜 | ![可怜](https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/54.gif "可怜")
55 | /:pd | 菜刀 | ![菜刀](https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/55.gif "菜刀")
56 | /:<W> | 西瓜 | ![西瓜](https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/56.gif "西瓜")
57 | /:beer | 啤酒 | ![啤酒](https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/57.gif "啤酒")
58 | /:basketb | 篮球 | ![篮球](https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/58.gif "篮球")
59 | /:oo | 乒乓 | ![乒乓](https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/59.gif "乒乓")
60 | /:coffee | 咖啡 | ![咖啡](https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/60.gif "咖啡")
61 | /:eat | 饭 | ![饭](https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/61.gif "饭")
62 | /:pig | 猪头 | ![猪头](https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/62.gif "猪头")
63 | /:rose | 玫瑰 | ![玫瑰](https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/63.gif "玫瑰")
64 | /:fade | 凋谢 | ![凋谢](https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/64.gif "凋谢")
65 | /:showlove | 示爱 | ![示爱](https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/65.gif "示爱")
66 | /:heart | 爱心 | ![爱心](https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/66.gif "爱心")
67 | /:break | 心碎 | ![心碎](https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/67.gif "心碎")
68 | /:cake | 蛋糕 | ![蛋糕](https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/68.gif "蛋糕")
69 | /:li | 闪电 | ![闪电](https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/69.gif "闪电")
70 | /:bome | 炸弹 | ![炸弹](https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/70.gif "炸弹")
71 | /:kn | 刀 | ![刀](https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/71.gif "刀")
72 | /:footb | 足球 | ![足球](https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/72.gif "足球")
73 | /:ladybug | 瓢虫 | ![瓢虫](https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/73.gif "瓢虫")
74 | /:shit | 便便 | ![便便](https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/74.gif "便便")
75 | /:moon | 月亮 | ![月亮](https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/75.gif "月亮")
76 | /:sun | 太阳 | ![太阳](https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/76.gif "太阳")
77 | /:gift | 礼物 | ![礼物](https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/77.gif "礼物")
78 | /:hug | 拥抱 | ![拥抱](https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/78.gif "拥抱")
79 | /:strong | 强 | ![强](https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/79.gif "强")
80 | /:weak | 弱 | ![弱](https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/80.gif "弱")
81 | /:share | 握手 | ![握手](https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/81.gif "握手")
82 | /:v | 胜利 | ![胜利](https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/82.gif "胜利")
83 | /:@) | 抱拳 | ![抱拳](https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/83.gif "抱拳")
84 | /:jj | 勾引 | ![勾引](https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/84.gif "勾引")
85 | /:@@ | 拳头 | ![拳头](https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/85.gif "拳头")
86 | /:bad | 差劲 | ![差劲](https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/86.gif "差劲")
87 | /:lvu | 爱你 | ![爱你](https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/87.gif "爱你")
88 | /:no | NO | ![NO](https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/88.gif "NO")
89 | /:ok | OK | ![OK](https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/89.gif "OK")
90 | /:love | 爱情 | ![爱情](https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/90.gif "爱情")
91 | /:<L> | 飞吻 | ![飞吻](https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/91.gif "飞吻")
92 | /:jump | 跳跳 | ![跳跳](https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/92.gif "跳跳")
93 | /:shake | 发抖 | ![发抖](https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/93.gif "发抖")
94 | /:<O> | 怄火 | ![怄火](https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/94.gif "怄火")
95 | /:circle | 转圈 | ![转圈](https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/95.gif "转圈")
96 | /:kotow | 磕头 | ![磕头](https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/96.gif "磕头")
97 | /:turn | 回头 | ![回头](https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/97.gif "回头")
98 | /:skip | 跳绳 | ![跳绳](https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/98.gif "跳绳")
99 | /:oY | 投降 | ![投降](https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/99.gif "投降")
100 | /:#-0 | 激动 | ![激动](https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/100.gif "激动")
101 | /:hiphot | 乱舞 | ![乱舞](https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/101.gif "乱舞")
102 | /:kiss | 献吻 | ![献吻](https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/102.gif "献吻")
103 | /:<& | 左太极 | ![左太极](https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/103.gif "左太极")
104 | /:&> | 右太极 | ![右太极](https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/104.gif "右太极")

注：
符号对应微信公众号表情符号

# todo
- [ ] 新增js、PHP最终显示表情说明
- [ ] css 样式支持分离和一起
- [ ] 公布到npm

# License
Copyright (c) 2016 [guosheng](http://www.f00sun.com/) Licensed under the MIT License.

