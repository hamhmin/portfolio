$(function () {
    // splash
    // $('.splash').hide();
    setTimeout(function(){
        $('.splash p').fadeIn();
    },1000);
    setTimeout(function(){
        $('.splash').fadeOut();
    },3000);

    // splash 랜덤 인삿말 삽입
    let hi = Math.floor(Math.random() * 3);
    console.log(hi);
    if (hi == 0) {
        $('.splash p').html('Welcome!');
    }
    if (hi == 1) {
        $('.splash p').html('Nice to meet you!');
    }
    if (hi == 2) {
        $('.splash p').html('안녕하세요!');
    }


    //project nav
    // 상위 카테고리 선택시 해당 상위의 하위 add .active  // 타 상위, 하위 remove .active
    $('#all').click(function () {
        $('#re-web ul li, #mo-web ul li').removeClass('active');
        $('.slide-content').fadeIn();

    });
    $('#re-web span, #re-web .re-sub li').click(function () {
        $('#re-web ul li, #mo-web ul li').removeClass('active');
        $('.slide-content').fadeOut(1);
        $('.re-web').fadeIn(600);
        $('#re-web .re-sub li').eq(0).addClass('active');
    });
    $('#mo-web span, #mo-web .mo-sub li').click(function () {
        $('#re-web ul li, #mo-web ul li').removeClass('active');
        $('.slide-content').fadeOut(1);
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


    //slide btn show hide

    let v = window.innerHeight - 100;
    let scrollValue = window.innerHeight - 100;
    let UpDown = 0;

    // 하위메뉴 클릭시 해당 요소 등장
    $('#re-web ul .at').click(function(){
        Updown = 0;
        $('.slide-box').animate({ scrollTop: Updown }, 0);
        console.log(scrollValue);
    });
    $('#re-web ul .de').click(function(){
        $('.slide-box').animate({ scrollTop: scrollValue }, 0);
        console.log(scrollValue);
    });

    $('#mo-web ul .dr').click(function(){
        Updown = 0;
        $('.slide-box').animate({ scrollTop: Updown }, 0);
        console.log(scrollValue);
    });
    $('#mo-web ul .au').click(function(){
        $('.slide-box').animate({ scrollTop: scrollValue }, 0);
        console.log(scrollValue);
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
        $('.slide-content img').stop().fadeOut(300);
        setTimeout(function(){
            $('.slide-box').stop().animate({ scrollTop: UpDown }, 0);
            $('.slide-content img').fadeIn();
        },300);
    }
});




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
        $('#container').stop().fadeOut(1);
        $('#container').fadeIn(1000);
    });

    // let 1 = 누르기 이전 --main-color 의 값
    // let 2 = 누른 이후의 --main-color 의 값
    // 현재 너무 확바뀌어서 멀미가 날정도
    // ? 에서 ! 색변경 자연스러운 연출  
    //             실패.
    // $('.color-box div').click(function(){
    //     var rootName1 = '#9C88FF';
    //     var rootName2 = $(this).css("background-color");
    //     console.log(rootName1,rootName2);
    //     // 이곳에 색상을 바꿨을때 실행시킬 함수 넣어주기
    //     $('.color-box-fade').css('background',`${rootName2})`);


    //     // 다음 색상을 누르기 전에 먼저 누른 색상 변수
    //     var rootName1 = rootName2;
    //     console.log(rootName1,rootName2);
    // });





    // 페이지 네비게이션 호버시 텍스트 등장
    $('.pg-pips ul li').mouseenter(function () {
        let pipsTxt = $(this).index();
        $('.pips-text li').eq(pipsTxt).css('opacity', '1');
    });
    $('.pg-pips ul li').mouseleave(function () {
        $('.pips-text li').css('opacity', '0');
    });



    // var Click = $('body');
    // Click.click(function (event) {
    //     x = event.pageX;
    //     y = event.pageY;
    //     console.log(x, y);
    //     $('body').append(`<div class="click-motion"></div>`);
    //     $(`.click-motion`).css({ 'top': `${y}px`, 'left': `${x}px` });
    // });

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

});
