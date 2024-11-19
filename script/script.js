//첫번째 공지사항 내용(.open-modal)을 클릭했을 때 , 모달창이 짠 등장


$(".open-modal").click(function(){
    //$(".modal").css("display", "block")
    $("modal").show();
})

//닫기 버튼을 클릭했을 때, 모달창이 사라지게
$(".close-modal").click(function(){
    //$(".modal").css("display", "none")
    $("modal").hide();
})


//공지사항 버튼을 클릭했을 때, 공지사항 영역이 짠 등장, 갤러리 영역은 사라짐
$(".btn-notice").click(function(){
    $(".notice").show();
    $(".gal").hide();

    $(".btn-notice").css("background-color", "brown")
    $(".btn-gal").css("background-color", "#cccccc")
})


//갤러리 버튼을 클릭했을 때, 갤러리 영역이 짠 등장, 공지사항 영역은 사라짐

$(".btn-gal").click(function(){
    $(".gal").show();
    $(".notice").hide();

    $(".btn-gal").css("background-color", "brown")
    $(".btn-notice").css("background-color", "#cccccc")
})


//메인메뉴 안에 있는 li태그한테 마우스를 올리면 , sub가 나타난다
$(".gnb>li").mouseenter(function(){
    $(this).children(".sub").stop().slideDown();
})

$(".gnb>li").mouseleave(function(){
    $(this).children(".sub").stop().slideUp();
})