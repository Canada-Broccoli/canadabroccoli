
/*menubar(header)------------------------------------------------ */

    //menu sticky
    $(window).on('scroll',function(){
        var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
        if(!isMobile){
        const scrollTop = $(window).scrollTop();
        const targettop = $(window).height()+ 450;
            if (targettop <= scrollTop){
                $('.menu_div_outside').addClass('menu_sticky');
            } else {
                $('.menu_div_outside').removeClass('menu_sticky');
                    }
                }
    });

    //broccoli in
    $(window).on('scroll',function(){
        const scrollTop = $(window).scrollTop();
        const menu_div = $(".menu_div");
        const menu_show = menu_div.offset().top/1.8;
        const intro_slide = $("#broccoli_menu");
        if(scrollTop>=menu_show){
            intro_slide.velocity({translateX:"-50px", opacity:1},{duration: 750});
        }
    });

    //design in
    $(window).on('scroll',function(){
        const scrollTop = $(window).scrollTop();
        const menu_div = $(".menu_div");
        const menu_show = menu_div.offset().top/1.8;
        const intro_slide = $("#design_menu");//id to be change
        if(scrollTop>=menu_show){
            intro_slide.velocity({translateX:"-50px", opacity:1},{duration: 750, delay: 100});
        }
    });

    //animation in
    $(window).on('scroll',function(){
        const scrollTop = $(window).scrollTop();
        const menu_div = $(".menu_div");
        const menu_show = menu_div.offset().top/1.8;
        const intro_slide = $("#animation_menu");//id to be change
        if(scrollTop>=menu_show){
            intro_slide.velocity({translateX:"-50px", opacity:1},{duration: 750, delay: 200});
        }
    });

    //photography in
    $(window).on('scroll',function(){
        const scrollTop = $(window).scrollTop();
        const menu_div = $(".menu_div");
        const menu_show = menu_div.offset().top/1.8;
        const intro_slide = $("#photography_menu");//id to be change
        if(scrollTop>=menu_show){
            intro_slide.velocity({translateX:"-50px", opacity:1},{duration: 750, delay: 300});
        }
    });

    //modeling in
    $(window).on('scroll',function(){
        const scrollTop = $(window).scrollTop();
        const menu_div = $(".menu_div");
        const menu_show = menu_div.offset().top/1.8;
        const intro_slide = $("#modeling_menu");//id to be change
        if(scrollTop>=menu_show){
            intro_slide.velocity({translateX:"-50px", opacity:1},{duration: 750, delay: 400});
        }
    });

    //website in
    $(window).on('scroll',function(){
        const scrollTop = $(window).scrollTop();
        const menu_div = $(".menu_div");
        const menu_show = menu_div.offset().top/1.8;
        const intro_slide = $("#website_menu");//id to be change
        if(scrollTop>=menu_show){
            intro_slide.velocity({translateX:"-50px", opacity:1},{duration: 750, delay: 500});
        }
    });

    //contact in
    $(window).on('scroll',function(){
        const scrollTop = $(window).scrollTop();
        const menu_div = $(".menu_div");
        const menu_show = menu_div.offset().top/1.8;
        const intro_slide = $("#contact_menu");//id to be change
        if(scrollTop>=menu_show){
            intro_slide.velocity({translateX:"-50px", opacity:1},{duration: 750, delay: 600});
        }
    });

    /* scroll function---------------------------------- */

    $(document).ready(function(){
        //broccoli
        const bro_click = $("#broccoli_menu");
        bro_click.on('click', function() {
            $("#sec_bro").velocity("scroll", { duration: 1500, easing:[0,.75,0,.98]});
        })
        //design
        const des_click = $("#design_menu");
        des_click.on('click', function() {
            $("#sec_des").velocity("scroll", { duration: 1500, easing:[0,.75,0,.98]});
        })

        //animation
        const ani_click = $("#animation_menu");
        ani_click.on('click', function() {
            $("#sec_animation").velocity("scroll", { duration: 1500, easing:[0,.75,0,.98]});
        })

        //photography
        const pho_click = $("#photography_menu");
        pho_click.on('click', function() {
            $("#sec_photo").velocity("scroll", { duration: 1500, easing:[0,.75,0,.98]});
        })

        //modeling
        const mod_click = $("#modeling_menu");
        mod_click.on('click', function() {
            $("#sec_model").velocity("scroll", { duration: 1500, easing:[0,.75,0,.98]});
        })

        //website
        const web_click = $("#website_menu");
        web_click.on('click', function() {
            $("#sec_web").velocity("scroll", { duration: 1500, easing:[0,.75,0,.98]});
        })


        //contact
        const con_click = $("#contact_menu");
        con_click.on('click', function() {
            $("#sec_contact").velocity("scroll", { duration: 1500, easing:[0,.75,0,.98]});
        })
        
    });

