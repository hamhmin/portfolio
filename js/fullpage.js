
// let pageable = new Pageable("#container", {
//     animation: 600,
//     swipeThreshold:200,});

    // let vw = document.documentElement.clientWidth;
    // console.log(vw);
    //     if (window.matchMedia("(min-width: 500px)").matches) {
    //         /* 뷰포트 너비가 501 픽셀 이상 */
    //         let pageable = new Pageable("#container", {
    //             animation: 600,
    //             swipeThreshold:50,
    //             throttle: 50,
    //             events:{
    //                 mouse: false,
    //                 touch:false,
    //                 keydown: false,
    //     }});
    //       } else {
    //         /* 뷰포트 너비가 501 픽셀 미만 */
    //         let pageable = new Pageable.destroy();
    //       }


    let pageable = new Pageable("#container", {
        animation: 600,
        swipeThreshold:50,
        throttle: 50,
        events:{
            // mouse = 마우스드래그 / touch = 모바일 터치? / keydown = 키패드 상하 / wheel = 마우스휠 
            mouse: false,
            touch:false,
            keydown: true,}});
if (window.matchMedia("(min-width: 501px)").matches){
    pageable;

}else{
    pageable.destroy();
}

