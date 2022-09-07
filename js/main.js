const elFooter = document.querySelector('footer');
const elcont_wrap = document.querySelector('#cont_wrap');

//#cont_wrap의 높이 구하기 - footer에 fixed 사용 안할 때
let winH = $(window).height(); //열려져 있는 화면의 높이
console.log(winH);
const headerH = $('header').height(); //header의 높이
const footerH = elFooter.offsetHeight; //footer의 높이(javascript)
console.log(`현재 화면 높이는 ${winH} / header의 높이 ${headerH} / footer의 높이 ${footerH}`);

//#cont_wrap의 높이는 화면 전체 세로에서 헤더, 푸터 높이를 빼준 값
let cont_wrapH = winH - (headerH + footerH);
// $('#cont_wrap').css({height : cont_wrapH});
console.log(cont_wrapH);

elcont_wrap.style.height = `${cont_wrapH}px`;

// $(window).resize(function(){
//     winH = $(window).height(); 
//     cont_wrapH = winH - (headerH + footerH);
//     $('#cont_wrap').css({height : cont_wrapH});
// });

window.addEventListener('resize', function(){
    winH = $(window).height(); 
    cont_wrapH = winH - (headerH + footerH);
    elcont_wrap.style.height = `${cont_wrapH}px`;
});

var du = 400;
var open = 0; //메뉴가 닫혀있는 상태 (처음)

// lnb 슬라이드 메뉴
$('.lnb_btn').click(function(){
    if(open == 0){
        $('#wrap').animate({left: 274}, du);
        $('#lnb').animate({left: 0}, du);
        $('.cover').fadeIn(du);
        $('.lnb_btn').find('img').attr({'src':'img/bg_header_lnb_active.png', 'alt': '메뉴닫기'});
        open=1;
    }else{
        $('#wrap').animate({left: 0}, du);
        $('#lnb').animate({left: -274}, du);
        $('.cover').fadeOut(du);
        $('.lnb_btn').find('img').attr({'src':'img/bg_header_lnb.png', 'alt': '메뉴열기'});
        open=0;
    }
    
});


