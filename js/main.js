$(function(){
    // splash
    // setTimeout(function(){
    //     $('.splash p').fadeIn();
    // },1000);
    // setTimeout(function(){
    //     $('.splash').fadeOut();
    // },3000);

    //project nav
    $('#all').click(function(){
        $('.slide-content').fadeIn();
        $('.slide-btn').fadeIn();
    });
    $('#re-web').click(function(){
        $('.slide-content').not('.re-web').fadeOut();
        $('.re-web').fadeIn(600);
        $('.slide-btn').fadeIn();

    });
    $('#mo-web').click(function(){
        $('.slide-content').not('.mo-web').fadeOut();
        $('.mo-web').fadeIn(600);
        $('.slide-btn').hide();
    });
    $('#pc-web').click(function(){
        $('.slide-content').not('.pc-web').fadeOut();
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

});