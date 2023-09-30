
/*now the real codes--------------------------------------------- */
    //better
    $(document).ready(function(){
        var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
        if(!isMobile){
        const intro_slide = $("#Better");
        intro_slide.velocity({translateX:"110px", opacity:1},{duration: 500, easing:[.87,0,1,.68]});
        }
    });

    //life
    $(document).ready(function(){
        var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
        if(!isMobile){
        const intro_slide = $("#life");
        intro_slide.velocity({translateY:"-80px"},{duration: 500, delay: 550, easing:[.28,.06,.92,.67]});
        intro_slide.velocity({opacity:1},{display: "none"})
        }
    });

    //web
    $(document).ready(function(){
        var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
        if(!isMobile){
        const intro_slide = $("#web");
        intro_slide.velocity({translateY:"-80px"},{duration: 500, delay: 1150});
        intro_slide.velocity({opacity:1},{display: "none"})
        }
    });

    //idea
    $(document).ready(function(){
        var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
        if(!isMobile){
        const intro_slide = $("#idea");
        intro_slide.velocity({translateY:"-80px"},{duration: 500, delay: 1700});
        intro_slide.velocity({opacity:1},{display: "none"})
        }
    });

    //design
    $(document).ready(function(){
        var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
        if(!isMobile){
        const intro_slide = $("#design");
        intro_slide.velocity({translateY:"-80px"},{duration: 500, delay: 2300});
        intro_slide.velocity({opacity:1},{display: "none"})
        }
    });

    //broccoli
    $(document).ready(function(){
        var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
        if(!isMobile){
        const intro_slide = $("#broccoli");
        intro_slide.velocity({translateY:"-80px"},{duration: 500, delay: 2900});
        }
    });

    //broccolidesign scroll
    $(document).ready(function(){
        var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
        if(!isMobile){
        const broccolidesign = $("#broccolidesign");
        broccolidesign.velocity("scroll",{duration:800, delay: 3600, easing:[.06,.63,.48,1]})
        }
    });

/*logo js---------------------------------*/
    //logo_l
    $(document).ready(function(){
        const logo_l = $("#logo_l_img");
        logo_l.velocity({translateX:"50px", opacity:"1"}, {duration:500, delay: 4500}, "easeOut")
    });

    //logo_r
    $(document).ready(function(){
        $(document).ready(function() {
            var test = Snap("#logo_r_img");
            var t_c = test.circle(50, 50, 25);
            t_c.attr({fill: "#000000"});
        });

        const logo_l = $("#logo_r_img");
        logo_l.velocity({translateX:"-50px", opacity:"1"}, {duration:500, delay: 4500}, "easeOut")
    });

    //logo l move
    $(window).on('scroll',function(){
        const scrollTop = $(window).scrollTop();
        const logo_l = $("#logo_l_img");
        const start = $(window).height()+ 200;
        const move = scrollTop/5;
            moveX = move;
        logo_l.css('transform', `translateX(${moveX}px)`);

    });

    //whole div scale
    $(window).on('scroll',function(){
        var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
        if(!isMobile){
        const scrollTop = $(window).scrollTop();
        const logo_l = $("#logo_l");
        const logo_r = $("#logo_r");
        const b_design = $("#b_design");
        const logo_l_top = logo_l.offset().top;
        const targettop = $(window).height()+ 200;
        const change = logo_l_top - scrollTop;
        const s_fin = change/logo_l_top + 0.4;
        const font_s = 100*s_fin;
        if(s_fin>0.2){
            scale = s_fin;
            }
            else{
                scale = 0.2;
            }
        logo_l.css("transform",`scale(${scale})`);
        logo_r.css("transform",`scale(${scale})`);
        b_design.css("font-size", `${font_s}px`);
        }
    });

    //title sticky
    $(window).on('scroll',function(){
        var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
        if(!isMobile){
        const scrollTop = $(window).scrollTop();
        const targettop = $(window).height()+ 200;
            if (targettop <= scrollTop){
                $('.title_div_inner').addClass('title_sticky');
            } else {
                $('.title_div_inner').removeClass('title_sticky');
                    }
                }
    });


