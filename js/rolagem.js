function descer(tag){
    targetOffset = $("#" + tag).offset().top
    $("html, body").animate({ 
		scrollTop: targetOffset - 20
   }, 800);
}