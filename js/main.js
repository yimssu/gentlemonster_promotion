var lastScrollTop = 0;

window.addEventListener('DOMContentLoaded', function () {
    var scrollTop = $(this).scrollTop();

    setTimeout(() => {
        $('#section01 .image01_01').addClass('on');
    },200)
    setTimeout(() => {
        $('#section01 .image02_01').addClass('on');
    },400)

    $("#container").each(function () {
        var contentIndex = $(this).attr("id");
        if(scrollTop >= $(this).offset().top) {
            $(".scroll_03 a").removeClass("on");
            $(".scroll_03 a[href=#"+contentIndex+"]").addClass("on");
        }
    })


    /* scroll event section */
    container.addListener((e) => {

        let scrollTop = container.scrollTop;
        $('.posNum').html(scrollTop)

        if(scrollTop >= 1148){
            $('.title01_02').addClass('on');
        }
        if(scrollTop >= 1370){
            $('.title02_02').addClass('on');
        }
        if(scrollTop >= 1600){
            $('.line_02').addClass('on');
        }
        if(scrollTop >= 1840){
            $('.image01_02').addClass('on');
        }
        if(scrollTop >= 2000){
            $('.image02_02').addClass('on');
        }
        if(scrollTop >= 2000){
            $('.text02_02').addClass('on');
        }
        if(scrollTop >= 2400){
            $('.image03_02').addClass('on');
        }
        if(scrollTop >= 2700){
            $('.text04_02').addClass('on');
        }
        if(scrollTop >= 3100){
            $('.title04_02').addClass('on');
        }
        if(scrollTop >= 3500){
            $('.image04_02').addClass('on');
        }
        if(scrollTop >= 3900){
            $('.image05_02').addClass('on');
        }
        if(scrollTop >= 3900){
            $('.image05_02').addClass('on');
        }
        if(scrollTop >= 3650){
            $('.title05_02').addClass('on');
        }
        if(scrollTop >= 3650){
            $('.title06_02').addClass('on');
        }
        if(scrollTop >= 3650){
            $('.color_02').addClass('on');
        }
        if(scrollTop >= 4250){
            $('.typo01_02').addClass('on');
        }
        if(scrollTop >= 4440){
            $('.typo02_02').addClass('on');
        }

        if(scrollTop >= 4800){
            $('.circle01_02').addClass('on');
        }
        if(scrollTop >= 5200){
            $('.circle02_02').addClass('on');
        }
        if(scrollTop >= 5500){
            $('.circle03_02').addClass('on');
        }

        if(scrollTop >= 5200){
            $('.title07_02').addClass('on');
        }
        if(scrollTop >= 5300){
            $('.title08_02').addClass('on');
        }
        if(scrollTop >= 5600){
            $('.text05_02').addClass('on');
        }
        if(scrollTop >= 6500){
            $('.title04_03').addClass('on');
        }
        if(scrollTop >= 7253){
            $('.title02_04').addClass('on');
        }
        if(scrollTop >= 7344){
            $('.text01_04').addClass('on');
        } 
        if(scrollTop >= 7550){
            $('.mockup01_04').addClass('on');
        }
        if(scrollTop >= 8700){
            $('.image01_04').addClass('on');
        }
        if(scrollTop >= 8900){
            $('.mockup02_04').addClass('on');
        }
        if(scrollTop >= 9939){
            $('.bg_text_04').addClass('on');
        }
        if(scrollTop >= 10400){
            $('.mockup03_04').addClass('on');
        }

        if(scrollTop >= 13100){
            $('.mockup01_05').addClass('on');
        }
        if(scrollTop >= 13700){
            $('.mockup02_05').addClass('on');
        }
        if(scrollTop >= 14250){
            $('.image01_05').addClass('on');
        }

        if(scrollTop >= 15380){
            $('.title01_05').addClass('on');
        }
        if(scrollTop >= 15600){
            $('.title02_05').addClass('on');
        }
        if(scrollTop >= 15800){
            $('.title03_05').addClass('on');
        }

        if(scrollTop >= 16400){
            $('.image01_footer').addClass('on');
        }
        if(scrollTop >= 16500){
            $('.image02_footer').addClass('on');
        }
        if(scrollTop >= 16600){
            $('.image03_footer').addClass('on');
        }
        if(scrollTop >= 16700){
            $('.image04_footer').addClass('on');
        }



        if(scrollTop >= 100) { // 숫자에 따라 아래로 스크롤 했을 때 사라지는 영역의 크기가 바뀝니다.
            if ((scrollTop > lastScrollTop) && (lastScrollTop>0)) { /* &&: AND, 두 값이 모두 참이어야 값이 출력 */
                /* 화면에 나오지 않을 때: top값을 마이너스로 요소가 보이지 않게 사용해야함 */
                $("#header").css("top","-100px");
            } else {
                $("#header").css("top","0px");
            }
    
            lastScrollTop = scrollTop;
        } 



    });



    /*  slide,click event section */

    gsap.from(".title04_01", {
        // 사진 가로 크기
        y: -2039,
        ease: "none",
        duration: 15,
        repeat: -1,
      });

      gsap.from(".long_text_02", {
        // 사진 가로 크기
        x: -2240, 
        ease: "none",
        duration: 20,
        repeat: -1,
      });
      gsap.from(".long_text_04", {
        // 사진 가로 크기
        x: -2240, 
        ease: "none",
        duration: 20,
        repeat: -1,
      });

      gsap.to(".star01_02", {
        rotation: 360,
        ease: "none",
        duration: 8,
        repeat: -1,
      });
      gsap.to(".star02_02", {
        rotation: 360,
        ease: "none",
        duration: 8,
        repeat: -1,
      });
      gsap.to(".star03_02", {
        rotation: 360,
        ease: "none",
        duration: 8,
        repeat: -1,
      });
      gsap.to(".star04_02", {
        rotation: 360,
        ease: "none",
        duration: 8,
        repeat: -1,
      });

      gsap.to(".star05_02", {
        rotation: 360,
        ease: "none",
        duration: 8,
        repeat: -1,
      });
      gsap.to(".star06_02", {
        rotation: 360,
        ease: "none",
        duration: 8,
        repeat: -1,
      });     
      gsap.to(".star07_02", {
        rotation: 360,
        ease: "none",
        duration: 8,
        repeat: -1,
      });
      gsap.to(".star01_04", {
        rotation: 360,
        ease: "none",
        duration: 8,
        repeat: -1,
      });
      gsap.to(".star02_04", {
        rotation: 360,
        ease: "none",
        duration: 8,
        repeat: -1,
      });
      gsap.to(".star03_04", {
        rotation: 360,
        ease: "none",
        duration: 8,
        repeat: -1,
      });
      gsap.to(".star04_04", {
        rotation: 360,
        ease: "none",
        duration: 8,
        repeat: -1,
      });


  




})


