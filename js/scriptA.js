$(document).ready(function(){
	var readMoreOne = true;
	$("article")
	.append($('<button class="articleButton btn btn-default">Læs mere...</button>'));
	$("article").find(".readMore").hide();

	$(".articleButton").on("click", function(){
		if (readMoreOne) {
			$(this).text("Læs mindre...").siblings(".readMore").slideDown();
			readMoreOne = false;
			$(this).text("Læs mindre...");
			$("#kh").text(readMoreOne);
		}
		else{
			$(this).text("Læs mere...").siblings(".readMore").slideUp();
			readMoreOne = true;
			$(this).text("Læs mere...");
			$("#kh").text(readMoreOne);
		};
	});

	$(window).scroll(function(){
		if ($(this).scrollTop() > 50) {
			$('.scrollToTop').fadeIn();
		} else {
			$('.scrollToTop').fadeOut();
		}
	});
	
	//Click event to scroll to top
	$('.scrollToTop').click(function(){
		$('html, body').animate({scrollTop : 0},800);
		return false;
	});
	
$("#Beijing").on("click", function(){
	$(".item").find("img").remove();
	$('.item1').prepend('<img src="img/B.jpg"/>');
	$('.item2').prepend('<img src="img/B2.jpg"/>');
	$('.item3').prepend('<img src="img/B3.jpg"/>');
});

$("#NewYork").on("click", function(){
	$(".item").find("img").remove();
	$('.item1').prepend('<img src="img/NY.jpg"/>');
	$('.item2').prepend('<img src="img/NYS.jpg"/>');
	$('.item3').prepend('<img src="img/NYV.jpg"/>');
});

$("#Paris").on("click", function(){
	$(".item").find("img").remove();
	$('.item1').prepend('<img src="img/P.jpg"/>');
	$('.item2').prepend('<img src="img/P2.jpg"/>');
	$('.item3').prepend('<img src="img/P3.jpg"/>');
});


});
