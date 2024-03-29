$(function () {
    const searchParams = new URLSearchParams(location.search);
    var resizeValue = "";
    for(const param of searchParams){
        if(param[0] == "resize"){
            resizeValue = Number(param[1]);
        }
    }
    history.pushState(null,null,"/portfolio");
    // resizeValue = 1;
    // splash
    if(resizeValue == ""){
        $('.splash').hide();
        $('.splash').show();
        $('.pg-pips').hide();
        setTimeout(function(){
            $('.splash p,.pg-pips').fadeIn();
        },1000);
        setTimeout(function(){
            $('.splash').fadeOut();
        },3000);
    } else if(resizeValue == 1) {
        $('.splash').hide();
        $(".main-text").css("animation-delay","1s");
    }


    // splash 랜덤 인삿말 삽입
    let hi = Math.floor(Math.random() * 3);
    if (hi == 0) {
        $('.splash p').html('Welcome!');
    }
    if (hi == 1) {
        $('.splash p').html('Nice to meet you!');
    }
    if (hi == 2) {
        $('.splash p').html('안녕하세요!');
    }

    //slide btn show hide
    let v = document.querySelector('#offset-top').offsetTop;
    let scrollValue = document.querySelector('#offset-top').offsetTop;
    let UpDown = 0;
    // 사이트 실행후 vh 를 줄이고 작업물 슬라이드를 했을때 덜내려오거나 다음 혹은 이전의 작업물이 삐져나오는 현상은 
    // scrollValue, v 의 값이 사이트 첫실행시에 맞춰져있기 때문.


    //project nav
    // 상위 카테고리 선택시 해당 상위의 하위 add .active  // 타 상위, 하위 remove .active
    $('#all').click(function () {
        $('#re-web ul li, #mo-web ul li').removeClass('active');
        $('.slide-content').fadeIn();

    });
    $('#re-web span, #re-web .re-sub li').click(function () {
        $('#re-web ul li, #mo-web ul li').removeClass('active');
        $('.slide-content').fadeOut(1);
        UpDown = 0;
        $('.re-web').fadeIn(600);

        $('#re-web .re-sub li').eq(0).addClass('active');
    });
    $('#mo-web span, #mo-web .mo-sub li').click(function () {
        $('#re-web ul li, #mo-web ul li').removeClass('active');
        $('.slide-content').fadeOut(1);
        UpDown = 0;
        $('.mo-web').fadeIn(600);

        
        $('#mo-web .mo-sub li').eq(0).addClass('active');

    });

    // project nav .on
    $('.project-nav > ul > li').click(function () {
        $('.project-nav > ul > li').removeClass('on');
        $(this).addClass('on');
    });


    // 하위 메뉴 클릭시 형제요소의 remove .active
    $('#re-web .re-sub li').eq(0).click(function(){
        $('#re-web .re-sub li').eq(1).removeClass('active');
        $(this).addClass('active');
    });
    $('#re-web .re-sub li').eq(1).click(function(){
        $('#re-web .re-sub li').eq(0).removeClass('active');
        $(this).addClass('active');
    });
    $('#mo-web .mo-sub li').eq(0).click(function(){
        $('#mo-web .mo-sub li').eq(1).removeClass('active');
        $(this).addClass('active');
    });
    $('#mo-web .mo-sub li').eq(1).click(function(){
        $('#mo-web .mo-sub li').eq(0).removeClass('active');
        $(this).addClass('active');
    });



    $('.down-btn').click(function () {
        // div가 몇개인 카테고리를 가리기 위한 참 거짓 값 가져오기  
        var z = $('#re-web, #mo-web').hasClass('on');
        var x = $('#all').hasClass('on');

        // div가 2개일때, 마지막요소에선 실행되지않음.
        if (UpDown < v && z) {
            UpDown += scrollValue;
            console.log(UpDown);
            $('.slide-content img').stop().fadeOut(300);
            setTimeout(function(){
                $('.slide-box').stop().animate({ scrollTop: UpDown }, 0);
                $('.slide-content img').fadeIn();
            },700);
        }

        //div가 4개 일때, 마지막요소에선 실행되지않음.
        if (UpDown < v * 3 && x) {
            UpDown += scrollValue;
            console.log(UpDown);
            $('.slide-content img').stop().fadeOut(300);
            setTimeout(function(){
                $('.slide-box').stop().animate({ scrollTop: UpDown }, 0);
                $('.slide-content img').fadeIn();
            },300);
        }
    });

    // top값이 0이하이면 실행되지않음.
    $('.up-btn').click(function () {
        if (UpDown > 0) { 
        UpDown -= scrollValue; 
        console.log(UpDown);
        $('.slide-content img').stop().fadeOut(300);
        setTimeout(function(){
            $('.slide-box').stop().animate({ scrollTop: UpDown }, 0);
            $('.slide-content img').fadeIn();
        },300);
    }
});

    // 하위메뉴 클릭시 해당 요소 등장
    $('#all').click(function(){
        Updown = 0;
        $('.slide-content img').stop().fadeOut(1);
            $('.slide-box').stop().animate({ scrollTop: UpDown}, 0);
            $('.slide-content img').fadeIn(300);
    });
    $('#re-web ul .at').click(function(){
        UpDown = 0;
        $('.slide-box').animate({ scrollTop: UpDown }, 0);
    });
    $('#re-web ul .de').click(function(){
        UpDown = scrollValue;
        $('.slide-box').animate({ scrollTop: UpDown }, 0);
    });

    $('#mo-web ul .dr').click(function(){
        UpDown = 0;
        $('.slide-box').animate({ scrollTop: UpDown }, 0);
    });
    $('#mo-web ul .au').click(function(){
        UpDown = scrollValue;
        $('.slide-box').animate({ scrollTop: UpDown }, 0);
    });
    $('#re-web span, #mo-web span').click(function(){
        $('.slide-content img').stop().fadeOut(1);
            $('.slide-box').stop().animate({ scrollTop: 0 }, 0);
            $('.slide-content img').fadeIn(300);
    });

// 해당 작품이 나오면 그 작품과 이름이 같은 카테고리에 add active
// 2depth 카테고리 active를 빼고 hover 효과만 넣으면 상황이 무마되긴함.
    $('.slide-btn .bi').click(function(){
        setTimeout(function(){
        let r = $('#re-web').hasClass('on');
        let m = $('#mo-web').hasClass('on');
        console.log('v값', v);
        let ScrollTop = $('.slide-box').scrollTop();
        $('#re-web .re-sub li').removeClass('active');
        $('#mo-web .mo-sub li').removeClass('active');
        if( ScrollTop <= 0 && r){
            $('#re-web .re-sub li.at').addClass('active');
        }
        // 모바일 에이티컴퍼니 -> 사람그리고치과 이동시 소수점 반올림으로 적용안된부분 v -1 로 조정
       else if ( ScrollTop >= v-1 && r){
            $('#re-web .re-sub li.de').addClass('active');
        }
        else if( ScrollTop <= 0 && m){
            $('#mo-web .mo-sub li.dr').addClass('active');
        }
        // vh 조절시 작동 안됐던 부분 수정 >= v =>>> > v -10
        else if ( ScrollTop > v -10 && m){
            $('#mo-web .mo-sub li.au').addClass('active');
        }
        // slide-box 이동시간 700ms가 지난후의 scrolltop 값 추출 => 701ms설정
    },701);
    });
    setInterval(function(){
    let ScrollTop = $('.slide-box').scrollTop();
console.log('ScrollTop',ScrollTop);
},4000);


    //color pick 등장
    $('.color-box').hide();
    setTimeout(function () {
        $('.color-box').fadeIn();
    }, 1000);
    // :root 변경
    $('.change-red').click(function () {
        $(':root').css('--main-color', '#ff7979');
        $(':root').css('--dark', '#333');
        $(':root').css('--light', '#fff');
    });
    $('.change-blue').click(function () {
        $(':root').css('--main-color', '#74b9ff');
        $(':root').css('--dark', '#333');
        $(':root').css('--light', '#fff');
    });
    $('.change-purple').click(function () {
        $(':root').css('--main-color', '#9C88FF');
        $(':root').css('--dark', '#333');
        $(':root').css('--light', '#fff');
    });
    $('.change-green').click(function () {
        $(':root').css('--main-color', '#1abc9c');
        $(':root').css('--dark', '#333');
        $(':root').css('--light', '#fff');
    });

    $('.change-dark').click(function () {
        $(':root').css('--main-color', '#333');
        $(':root').css('--dark', '#fff');
        $(':root').css('--light', '#333');
    });

    // 색상 변경시 자연스러운 연출 (일시적인 어두운 화면)
    $('.color-box div').click(function () {
        $('.color-change-shadow').stop().fadeIn(1);
        $('.color-change-shadow').fadeOut(1000);
    });


    // 클릭시 생성되는 원, 그 원이 애니메이션으로 불투명도,스케일 조정, 애니메이션이 끝난후 코드 삭제

    function clickEffect(e) {
        var d = document.createElement("div");
        d.className = "clickEffect";
        d.style.top = e.clientY + "px"; d.style.left = e.clientX + "px";
        document.body.appendChild(d); 
        d.addEventListener('animationend', function () { 
            d.parentElement.removeChild(d); 
        }.bind(this));
    }
    document.addEventListener('click', clickEffect);
    //접속시 랜덤 폭죽 생성
    // title particle
    function startEffect() {
        var ww = window.innerWidth;
        var wh = window.innerHeight
        var randomX = Math.floor(Math.random() * ww);
        var randomY = Math.floor(Math.random() * wh);
        var g = document.createElement("div");
        g.className = "startEffect";
        g.style.top = randomY + "px"; g.style.left = randomX + "px";
        document.querySelector('#title').appendChild(g);
        g.addEventListener('animationend', function () { 
            g.parentElement.removeChild(g); 
        }.bind(this));
    }

    // 폭죽 개수 및 반복시간
    for(let i = 0; i < 1 ; i++){
        if(i <= 1){
                setInterval(function(){
                    startEffect();
                },500);
        }
    }

    // 작품별 자세히보기 버튼 클릭시 이미지, 깃허브 주소 해당 요소에 맞게 교체

    $('.c01 .view-more').click(function(){
        $('.modal img').attr('src','./images/project-img01.jpg');
        $('.modal .modal-btn-box a').attr('href','https://github.com/hamhmin/solo-work01');
        $('.modal').show();
    });
    $('.c02 .view-more').click(function(){
        $('.modal img').attr('src','./images/project-img02.jpg');
        $('.modal .modal-btn-box a').attr('href','https://github.com/hamhmin/2team-0811');
        $('.modal').show();
    });
    $('.c03 .view-more').click(function(){
        $('.modal img').attr('src','./images/project-img03.jpg');
        $('.modal .modal-btn-box a').attr('href','https://github.com/hamhmin/drawfit-mobile-web');
        $('.modal').show();
    });
    $('.c04 .view-more').click(function(){
        $('.modal img').attr('src','./images/project-img04.jpg');
        $('.modal .modal-btn-box a').attr('href','https://github.com/hamhmin/audio-technica');
        $('.modal').show();
    });
    $('.close-btn').click(function(){
        $('.modal').hide();
    });



    // 모바일에서 slide-box 터치스크롤기능 해제
    $('.slide-box').off('touchmove');
    // splash 화면에서 스크롤 해제
    $('.splash').on('mousewheel',false).on('touchmove',false);

    function skillAnimation(){
    // skills animation
        draw(95, '.skill-chart1', 'var(--main-color)');
        draw(80, '.skill-chart2', 'var(--main-color)');
        draw(70, '.skill-chart3','var(--main-color)');
        draw(80, '.skill-chart4', 'var(--main-color)');
        draw(80, '.skill-chart5', 'var(--main-color)');
        draw(90, '.skill-chart6','var(--main-color)');
        draw(70, '.skill-chart7', 'var(--main-color)');
        draw(50, '.skill-chart8', 'var(--main-color)');
     
      function draw(max, classname, colorname){
         var i=1;
          var func1 = setInterval(function(){
           
            if(i<max){
                color1(i,classname,colorname);
                i++;
            } else{
              clearInterval(func1);
            }
          },10);
      }
      function color1(i, classname,colorname){
         $(classname).css({
              "background":"conic-gradient("+colorname+" 0% "+i+"%, #ffffff "+i+"% 100%)"
         });
      }
    // skills annimation end
};




$(window).scroll(function(){
    let a = $(window).scrollTop();
    let b = document.querySelector('#about').offsetTop;
    console.log(a , b);
    if (window.matchMedia("(min-width: 501px)").matches){
        if( a < b && a > b - 50){
            skillAnimation();
        }
        else if( a > b*2 && a < b*2  + 50){
            skillAnimation();
        }
    }else{
    if( a > b && a < b + 5){
        skillAnimation();
    }
    // 다음 조건식 #about 상하 10px 반경에 진입시 
    else if( a < b*2 && a > b*2  - 5){
        skillAnimation();
    }
    }
    });
    $('.title-a').click(function(){
        setTimeout(function(){
            skillAnimation();
        },500);
    }); 

        // 페이지 네비게이션 호버시 텍스트 등장
        $('.pg-pips ul li').mouseenter(function () {
            let pipsTxt = $(this).index();
            $('.pips-text li').eq(pipsTxt).css('opacity', '1');
        });
        $('.pg-pips ul li').mouseleave(function () {
            $('.pips-text li').css('opacity', '0');
        });
        $('.pips-text li').eq(0).css('opacity', '1');
// mobile-pips page animation
    $(window).scroll(function(){
        // 소수점 없애고, +1 로 scroll값 정수화 
        let mobileScroll = Math.floor($(window).scrollTop())+1;
        let Page1 = document.querySelector('#page-1').offsetTop;
        let Page2 = document.querySelector('#page-2').offsetTop;
        let Page3 = document.querySelector('#page-3').offsetTop;
        let Page4 = document.querySelector('#page-4').offsetTop;
        // console.log('mobileScroll = ',mobileScroll,'page1 = ',Page1,'page2 = ',Page2,'page3 = ',Page3,'page4 = ',Page4);
        $('.mobile-pips ul li a').removeClass('active');
        if( Page1 <= mobileScroll && Page2 > mobileScroll ){
            $('.pips-text li').css('opacity', '0');
            $('.mobile-pips ul li a').eq(0).addClass('active');
            $('.pips-text li').eq(0).css('opacity', '1');
        }else if( Page2 <= mobileScroll && Page3 > mobileScroll ){
            $('.pips-text li').css('opacity', '0');
            $('.mobile-pips ul li a').eq(1).addClass('active');
            $('.pips-text li').eq(1).css('opacity', '1');
        }else if( Page3 <= mobileScroll && Page4 > mobileScroll ){
            $('.pips-text li').css('opacity', '0');
            $('.mobile-pips ul li a').eq(2).addClass('active');
            $('.pips-text li').eq(2).css('opacity', '1');
        }else if( Page4 <= mobileScroll){
            $('.pips-text li').css('opacity', '0');
            $('.mobile-pips ul li a').eq(3).addClass('active');
            $('.pips-text li').eq(3).css('opacity', '1');
        }
    });

    // pc에서 vw가 500px까지 줄어들었을때 새로고침
    setInterval(function(){
        $(window).resize(function(){
            let vw = window.innerWidth;
            // console.log(vw);
            history.pushState(null,null,"/portfolio?resize=1");
            if(vw >= 520 && vw <=550){
                location.reload();
            }
        });
    },1000);

    let vh1 = window.innerHeight;
    if (window.matchMedia("(min-width: 501px)").matches){
        // 501px 이상일때 vh 조절시 새로고침
        $(window).resize(function(){
            let vh2 = window.innerHeight;
            console.log('vh',vh1 , vh2);
            if(vh1 != vh2){
                location.reload();
            }
        });
    }
});
