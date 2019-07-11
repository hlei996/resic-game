# 1. 非json格式字符串转对象
    <!-- 使用正则表达式进行匹配 -->
    "{'type':'1', 'obj':{'orderId':'1','positionId':'2', 'promotionId':'1','teamId':'2'}}".replace(/("\w+":)(?=[},])/g, '$1null').replace(/'/g, '"')

# 2. rem进行适配
<!-- 比列为1:100 -->
   (function(doc, win) {
        var docEl = doc.documentElement,
            resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
            recalc = function() {
                var clientWidth = docEl.clientWidth;
                if (!clientWidth) return;
                docEl.style.fontSize = 100 * (clientWidth / 750) + 'px';
            };
        if (!doc.addEventListener) return;
        win.addEventListener(resizeEvt, recalc, false);
        doc.addEventListener('DOMContentLoaded', recalc, false);
    })(document, window);

