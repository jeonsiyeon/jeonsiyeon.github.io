$(function(){

  $(".pc-nav .gnb > li").hover(function(){
    $('header').addClass('on');
    $('header').after('<div class="bg"></div>');
  },function(){
    $('header').removeClass('on');
    $('.bg').remove();
  });


  //언어선택
  $(".lang-nav li").click(function(){
    $(".lang-nav li").css('text-decoration','none');
    $(this).css('text-decoration','underline');
  });

  //퀵메뉴 서브
  $('.quick-nav .login-btn').click(function(e){
    e.preventDefault();
    $(this).next().stop().slideToggle();
  })


  //팝업창 안보이게
  $('.event-popup .popup-footer button').click(function(){
    $('.event-popup').hide();
  })

  //검색팝업
  $('.search-popup').hide();
  $('#btn-search').click(function(){
    $('.search-popup').css('display','block');
  })
  $('.search-popup>button').click(function(){
    $('.search-popup').hide();
  })

  //검색팝업-슬라이더바
  $( "#slider-bar" ).slider({
    range: true,
    min: 0,
    max: 300,
    values: [ 50, 300 ],
    slide: function( event, ui ) {
      $( "#data-value1" ).val( ui.values[ 0 ] );
      $( "#data-value2" ).val( ui.values[ 1 ] );
    }
  });
  $( "#data-value1" ).val($( "#slider-bar" ).slider( "values", 0 ));
  $( "#data-value2" ).val($( "#slider-bar" ).slider( "values", 1 ) );


  //메인 메인슬라이드
  var swiper = new Swiper('.main-slide .swiper-container', {
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 4000,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      loop: true,
    });


  //스타일픽
  $('.style-pick .row a').hover(function(){
    $('.style-pick .row a').css('background','#fff').css('color','#000')
    .css('transition','1s');
  },function(){
    $('.style-pick .row a').css('background','#000').css('color','#fff');
  });

  //MD choice
  var swiper = new Swiper('.md-choice .swiper-container', {
      slidesPerView: 5,
      spaceBetween: 20,

      breakpoints: {
        1024: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 0,
        }
      },
      navigation: {
        nextEl: '.md-choice .swiper-button-next',
        prevEl: '.md-choice .swiper-button-prev',
      },
    });

    //back to top이동
    $('.sns>a').click(function(){
      $('html').animate({scrollTop:0},600);
    });

    //탭메뉴
    var grid=$('.product-contents').isotope({
      itemSelector:'.item'
    })

    $('.btn').on('click',function(){
      $('.btn').removeClass('active');
      $(this).addClass('active');
      var selector=$(this).attr('data-filter');

      grid.isotope({
        filter:selector
      })
    })

    $('.product-contents-best').hide();


    //탭메뉴-1depth
    $('.product-list .tab-nav a').click(function(e){
        e.preventDefault();
        $('.product-list .tab-nav a').removeClass('active');
        $('.product-list .tab-contents > div').removeClass('active');

        id=$(this).attr('href');
        $(this).addClass('active');

        $('.product-list .tab-contents > div').hide();
        $(id).show();
        //필터링 초기화
        grid.isotope({
          filter:'*'
        })
        $('.btn').removeClass('active');
        $('.select-product-pc li:nth-child(1) a').addClass('active');
    })

    //탭메뉴-2depth
    $('.select-product-pc li a').click(function(e){
      e.preventDefault();
      $('.product-list .select-product-pc a').removeClass('active');
      $('.product-list .tab-contents > div').removeClass('active');

      id=$(this).attr('href');
      $(this).addClass('active');
    })

    //로그인 페이지
    $('.login-click').click(function(e){
       e.preventDefault();
       console.log('로그인폼 열기');
       $('.login-form').fadeIn();
    })
    $('.login-form .btn-close').click(function(){
      $('.login-form').fadeOut();
    })



    //로그인폼의 로그인버튼을 눌렀을 때(아이디, 비밀번호값의 여부 체크)
    $('.btn-login').click(function(){
      var id=$('#id').val();
      var password=$('#password').val();

      $('.message').remove();

      if(id==''){
        $('#password').after('<p class="message">아이디를 입력하세요.</p>').focus();
      }else if(password==''){
        $('#password').after('<p class="message">비밀번호를 입력하세요.</p>').focus();
      }else{
        $('.login-form').fadeOut(1000);
      }

      $('input').val('');
    })









})
