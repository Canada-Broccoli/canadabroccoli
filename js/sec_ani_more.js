
/*rest of animation section codes ----------------------------*/
$(window).on('scroll',function(){
    var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
        if(!isMobile){
    const scrollTop = $(window).scrollTop();
    const watch = $("#now_watch");
    const w_height = watch.offset().top-500;
    if(scrollTop>w_height){
        watch.velocity({translateX:"-100px", opacity:1},{duration: 750});
    }
}
});

$(window).on('scroll',function(){
    var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
        if(!isMobile){
    const scrollTop = $(window).scrollTop();
    const target = $("#let_her");
    const w_height = target.offset().top-500;
    if(scrollTop>w_height){
        target.velocity({translateX:"-100px", opacity:1},{duration: 750});
    }
}
});

$(window).on('scroll',function(){
    var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
        if(!isMobile){
    const scrollTop = $(window).scrollTop();
    const target = $("#amag");
    const w_height = target.offset().top-500;
    if(scrollTop>w_height){
        target.velocity({translateX:"-100px", opacity:1},{duration: 750});
    }
}
});

$(window).on('scroll',function(){
    var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
        if(!isMobile){
    const scrollTop = $(window).scrollTop();
    const target = $("#ani_des");
    const w_height = target.offset().top-500;
    if(scrollTop>w_height){
        target.velocity({translateY:"-50px", opacity:1},{duration: 750, easing:[.08,.46,.35,1.15]});
    }
}
});

/*othercodes ------------------------------------------*/
$(window).on('scroll',function(){
    var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
        if(!isMobile){
    const scrollTop = $(window).scrollTop();
    const target = $("#model_pic");
    const w_height = target.offset().top-500;
    if(scrollTop>w_height){
        target.velocity({translateX:"-50px", opacity:1},{duration: 750, easing:[.08,.46,.35,1.15]});
    }
}
});
