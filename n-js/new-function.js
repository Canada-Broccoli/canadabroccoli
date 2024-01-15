function aboutmePage(){window.open("aboutme.html");}
            function designPage(){window.open("design.html");}
            function animationPage(){window.open("animation.html");}
            function photographyWeb(){window.open("https://broccolidesign.myportfolio.com/");}
            function summerWeb(){window.open("https://summersoig.com/");}
            function foodWeb(){window.open("https://foodcomebuffet.com/");}
            function barWeb(){window.open("https://newmatch19.com/project/waroom_lady/");}

            $(window).scroll(function() {
            bannerBall("svgB", "0.6", "1");
            bannerBall("svgY", "1.1", "-1");
            bannerBall("svgY2", "0.8", "0");
            bannerBall("svgR", "0.7", "-1");
            writerFun("introP")
            writerFun("designP");
            writerFun("animationP");
            writerFun("photoP");
            });

            function writerFun(target) {
            const targetP = $("#" + target);
            let scrollD = $(window).scrollTop();
            const targetPosition = targetP.offset().top;
            const windowHeight = $(window).height();
            
            if (scrollD >= targetPosition - windowHeight) {
                targetP.addClass("typeAct");
            }
            }

            
            function bannerBall(targetBall, amount, layer){
            let scrollD = $(window).scrollTop();
            const windowHeight = $(window).height();
            const bannerHeight = $("#bBanner").offset().top + windowHeight;
            const theBall = $("#" + targetBall);
            const endDrop = $("#website").offset().top - windowHeight;
            let ballDrop = scrollD * amount;
            theBall.css("transition", "1s");
            if(endDrop > scrollD && scrollD > bannerHeight){
                theBall.css("transform", "translateY(" + ballDrop + "px)");
                theBall.css("z-index", layer);
            }
            else if(scrollD > endDrop){
                theBall.css("transform", "translateY(" + endDrop + "px)");
            }
            else{
                theBall.css("transform", "translateY(0px)");
            }
            }
