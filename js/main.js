$(function(){
    // splash
    // $('.splash').hide();
    setTimeout(function(){
        $('.splash p').fadeIn();
    },1000);
    setTimeout(function(){
        $('.splash').fadeOut();
    },3000);

    // main-p 랜덤번호 텍스트 삽입
    let hi = Math.floor(Math.random()*3);
    console.log(hi);
    if(hi == 0){
        $('.splash p').html('Welcome!');
    }
    if(hi == 1){
        $('.splash p').html('Nice to meet you!');
    }
    if(hi == 2){
        $('.splash p').html('안녕하세요!');
    }


    //project nav
    $('#all').click(function(){
        $('.slide-content').fadeIn();
        $('.slide-btn').fadeIn();
    });
    $('#re-web').click(function(){
        $('.slide-content').not('.re-web').fadeOut(1);
        $('.re-web').fadeIn(600);
        $('.slide-btn').fadeIn();

    });
    $('#mo-web').click(function(){
        $('.slide-content').not('.mo-web').fadeOut(1);
        $('.mo-web').fadeIn(600);
        $('.slide-btn').hide();
    });
    $('#pc-web').click(function(){
        $('.slide-content').not('.pc-web').fadeOut(1);
        $('.pc-web').fadeIn(600);
        $('.slide-btn').hide();
    });

    // project nav .on
    $('.project-nav ul li').click(function(){
        $('.project-nav ul li').removeClass('on');
        $(this).addClass('on');
    });

    //slide btn show hide

    let v =  window.innerHeight - 100;
    let scrollValue = window.innerHeight - 100;
    let UpDown = 0;

        $('.project-nav ul li').click(function(){
            UpDown = 0;
            $('.slide-box').stop().animate({scrollTop: 0},500);
        });
        $('.down-btn').click(function(){
            // div가 몇개인 카테고리를 가리기 위한 참 거짓 값 가져오기  
            var z = $('#re-web').hasClass('on');
            var x = $('#all').hasClass('on');
            // console.log(z ,v,UpDown);

            // div가 2개일때, 마지막요소에선 실행되지않음.
            if( UpDown < v && z)
            {
                UpDown += scrollValue;            
                console.log(UpDown);
                $('.slide-box').stop().animate({scrollTop: UpDown},500);
                console.log(UpDown);
            }
            //div가 4개 일때, 마지막요소에선 실행되지않음.
            if(UpDown < v * 4 && x)
            {
                UpDown += scrollValue;
            $('.slide-box').stop().animate({scrollTop: UpDown},500);

        }

            // console.log(UpDown);
        });

        // top값이 0이하이면 실행되지않음.
        $('.up-btn').click(function(){
            if(UpDown > 0)
            {UpDown -= scrollValue;}
            $('.slide-box').stop().animate({scrollTop: UpDown},500);
            console.log(UpDown);
        });



        // setInterval(function(){
        //     var h = $('.slide-content').length;
        //     console.log(h, UpDown);
        // },500);

        //color pick 등장
        $('.color-box').hide();
        setTimeout(function(){
            $('.color-box').fadeIn();
        },1000);
        // :root 변경
        $('.change-red').click(function(){
            $(':root').css('--main-color','#ff7979');
            $(':root').css('--dark','#333');
            $(':root').css('--light','#fff');
        });
        $('.change-blue').click(function(){
            $(':root').css('--main-color','#74b9ff');
            $(':root').css('--dark','#333');
            $(':root').css('--light','#fff');
        });
        $('.change-purple').click(function(){
            $(':root').css('--main-color','#9C88FF');
            $(':root').css('--dark','#333');
            $(':root').css('--light','#fff');
        });
        $('.change-green').click(function(){
            $(':root').css('--main-color','#1abc9c');
            $(':root').css('--dark','#333');
            $(':root').css('--light','#fff');
        });
        
        $('.change-dark').click(function(){
            $(':root').css('--main-color','#333');
            $(':root').css('--dark','#fff');
            $(':root').css('--light','#333');
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

        $('.color-box div').click(function(){
            $('#container').stop().fadeOut(1);
            $('#container').fadeIn(1000);
        });
});