$(document).ready(function(){
  media();

  function media(){
    var windowWidth = $(window).width();
    if(windowWidth >= 960){

      new fullpage('#wrap',{
        //새로고침시 페이지 고정
        anchors: ['firstPage', 'secondPage', '3rdPage', '4rdPage','5rdPage'],

        scrollBar:'true'
      });

    //수정
      //main-banner
      var swiper = new Swiper(".main_swiper", {
        loop:true,
        effect:"fade",
        autoplay:{
          delay:3500,
          disableOnInteraction: false,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        // pagination: {
        //   el: ".swiper-pagination",
        // }, 
      });

    //main-banner-bg
    var swiper = new Swiper(".sub_swiper", {
      loop:true,
      effect:"fade",
      autoplay:{
        delay:3500,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      // pagination: {
        //   el: ".swiper-pagination",
        // }, 
    });

        //top-btn : 상단이동
        var but = $('.top-btn');
        $(window).scroll(function(){
            if($(window).scrollTop() >= 100){
                but.fadeIn();
                console.log('scrollTop200');
            }else{
                but.fadeOut();
            }
        });
        but.on('click',function(e){
            e.preventDefault();
            $('html,body').animate({
                scrollTop:0
            },300);
        });

        // 서브메뉴
        $('.menu li').mouseenter(function(){
          $(this).addClass('active');
          $(this).siblings().removeClass('active');
    
          var result = $(this).attr('data-alt');
    
          $('.sub-menu').removeClass('active');
    
          $('#' + result).addClass('active');
    
          $('.sub-menu-box').stop().slideDown().addClass('active');
    
        });
    
        $('.sub-menu-box').mouseleave(function(){
          //sub-menu-box에서 마우스 리브할때 박스 없어짐
          $('.sub-menu').removeClass('active');
    
          $(this).stop().slideUp().removeClass('active');
        });
    

    }else{
      //수정
      //main-banner
      var swiper = new Swiper(".main_swiper", {
        loop:true,
        effect:"fade",
        autoplay:{
          delay:3500,
          disableOnInteraction: false,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        // pagination: {
        //   el: ".swiper-pagination",
        // }, 
      });

    var swiper = new Swiper(".sub_swiper", {
      loop:true,
      effect:"fade",
      autoplay:{
        delay:3500,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      // pagination: {
        //   el: ".swiper-pagination",
        // }, 
    });  
    
    //top-btn : 상단이동
    var but = $('.top-btn');
      $(window).scroll(function(){
        if($(window).scrollTop() >= 100){
          but.fadeIn();
          console.log('scrollTop200');
        }else{
          but.fadeOut();
        }
      });

        but.on('click',function(e){
          e.preventDefault();
            $('html,body').animate({
              scrollTop:0,
              },300);
        });

    // 햄버거버튼 + 모바일 메뉴
    $('#hamburger').click(function(){
      $('#hamburger').toggleClass('active');
      $('.sub-menu-box-m').toggleClass('active');
    });


    }
  }
      
}); /* end */