

let vw = document.documentElement.clientWidth;
console.log(vw);
if( vw > 820)
{let pageable = new Pageable("#container", {
    animation: 600,
    swipeThreshold:0,
    throttle: 0,
    events:{
        mouse: false
    }
});
}
else{
    let pageable = new Pageable("#container", {
        animation: 600,
        swipeThreshold:0,
        throttle: 0,
        events:{
            mouse: false,
            wheel: false,
        }
    });
}