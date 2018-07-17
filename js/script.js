$(document).ready(function(){
	$('.bodySection .photo img').mouseover(function(){
		$(this).attr('src','images/Joe_Simpson.bmp');
	}).mouseout(function(){
		$(this).attr('src',"images/joeHarrington.jpg");
	});
	
	setInterval(
		function(){$('.bodySection .details .flashNews').animate({'left':'-700px'},7500,function(){$(this).css('left','390px')});}
	);
	
	$('.bodySection').css('height',($(this).height()-70)+"px");
	//$('.homePageContent').css('height',($(this).height()-100)+"px");
	$(window).scroll(function(){
		if($(document).scrollTop() < 116)
			$('.tabsSection').css('top',(116-$(document).scrollTop()+"px"));
		else
			$('.tabsSection').css('top','0px');
	});
	
	$('.tabsSection').height(window.innerHeight);
	$('.tabsContainer').height($('.tabsSection').height()-$('.tabs').height());
	$('.goToTop').click(function(){
		$("html, body").animate({ scrollTop: 0 }, "slow");
	})
	
	$('.book1, .book2, .booksDescription').css('height',$('.booksPage .book1').width()+100+"px");
	$('.book1 img').click(function(){
		window.open('http://mitpress.mit.edu/books/economics-regulation-and-antitrust?ttype=2&tid=10586');
	});
	$('.book2 img').click(function(){
		window.open('http://www.worthpublishers.com/harringtonpreview/');
	});
});