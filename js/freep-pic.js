/*$(document).ready(function(){
    // img get
    var p1 = $("#p1").offset().top;
    var p2 = $("#p2").offset().top;
    
    $(window).scroll(function(){
        var wh = $(window).scrollTop();
        // img count
        var fop1 = (wh/p1) + 0.5;
        var fop2 = (wh/p2) + 0.5;
        // css change
        if(fop1<=1){
            $("#p1").css("opacity", fop1);
            $("#p1").css("transform", "scale(" + fop1 + ")");
        }
        if(fop2<=1){
            $("#p2").css("opacity", fop2);
            $("#p2").css("transform", "scale(" + fop2 + ")");
        }
    });
});*/

$(document).ready(function(){
    var elementCount = 16; // 元素的總數
    var elements = []; // 用來存儲所有元素的 offset top 值

    // 獲取所有元素的 offset top 值
    for (var i = 1; i <= elementCount; i++) {
        elements[i] = $("#p" + i).offset().top;
    }

    $(window).scroll(function(){
        var wh = $(window).scrollTop();

        // 循環處理所有元素
        for (var i = 1; i <= elementCount; i++) {
            var fop = (wh / elements[i]);

            // 使用通用的 CSS 選擇器來設置樣式
            if (fop <= 1) {
                $("#p" + i).css("opacity", fop);
                $("#p" + i).css("transform", "scale(" + fop + ")");
            }
        }
    });
});
