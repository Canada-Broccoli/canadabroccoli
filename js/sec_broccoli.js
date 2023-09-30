/*slogn scroll down function-------- */

$(window).on('scroll',function(){
    var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
        if(!isMobile){
    const scrollTop = $(window).scrollTop();
    const whenit = $("#whenit");
    const matters = $("#matters");
    const humor = $("#humor");
    const subt_top = 1300;
    const sub_move = scrollTop-subt_top;
    if(scrollTop >= subt_top){
        if(400>=sub_move){
            subt_down = sub_move;
        }
        // keyword humor showing function
        if(sub_move > 150){
            humor.velocity({translateY:"-80px", opacity:1},{duration: 750, easing:[.08,.41,.14,1]});
        }
    }
    else{
        subt_down = 0;
    }
    //console.log(subt_top);
    whenit.css('transform', `translateY(${subt_down}px)`);
    matters.css('transform', `translateY(${subt_down}px)`);
}
});

/* self intro section */

$(window).on('scroll',function(){
    var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
        if(!isMobile){
    const scrollTop = $(window).scrollTop();
    const selfinfo = $("#selfinfo_in");
    const self_design = $("#sec_self_design")
    if(scrollTop>2000){
        selfinfo.velocity({translateY:"-80px", opacity:1},{duration: 1500, easing:[.08,.41,.14,1]});
        self_design.velocity({opacity:1},{duration: 1500, delay: 1000, easing:[.08,.41,.14,1]});
    }  
}
});
