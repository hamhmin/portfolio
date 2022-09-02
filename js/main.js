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


    //slide btn show hide
    let W = document.querySelector('#offset-top').offsetTop;
    console.log(222,W);
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
        $('.re-web').fadeIn(600);
        UpDown = 0;
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
        $('.slide-box').animate({ scrollTop: 0 }, 0);
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
        console.log(m);
        let ScrollTop = $('.slide-box').scrollTop();
        $('#re-web .re-sub li').removeClass('active');
        $('#mo-web .mo-sub li').removeClass('active');
        if( ScrollTop <= 0 && r){
            $('#re-web .re-sub li.at').addClass('active');
        }
       else if ( ScrollTop >= v && r){
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
},1000);


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






    // 페이지 네비게이션 호버시 텍스트 등장
    $('.pg-pips ul li').mouseenter(function () {
        let pipsTxt = $(this).index();
        $('.pips-text li').eq(pipsTxt).css('opacity', '1');
    });
    $('.pg-pips ul li').mouseleave(function () {
        $('.pips-text li').css('opacity', '0');
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
    function startEffect(e) {
        var ww =window.innerWidth;
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
    for(let i = 0; i < 1 ; i++){
        if(i <= 1){
                setInterval(function(){
                    startEffect();
                },500);
        }
    }


});
