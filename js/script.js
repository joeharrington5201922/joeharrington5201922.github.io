$(document).ready(function(){
	$('.bodySection .photo img').mouseover(function(){
		$(this).attr('src','images/joeHarrington2.jpg');
	}).mouseout(function(){
		$(this).attr('src',"images/joeHarrington2.jpg");
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

	$('.book1, .book2, .book3, .book4, .book5, .booksDescription').css('height',$('.booksPage .book1').width()+50+"px");
	$('.book3 img').click(function(){
		window.open('https://mitpress.mit.edu/books/economics-regulation-and-antitrust-fifth-edition');
	});
	$('.book5 img').click(function(){
		window.open('https://macmillanlearning.com/Catalog/product/gamesstrategiesanddecisionmaking-secondedition-harringtonjr');
	});
	$('.book4 img').click(function(){
		window.open('https://mitpress.mit.edu/books/theory-collusion-and-competition-policy');
	});
	$('.book2 img').click(function(){
		window.open('https://mitpress.mit.edu/books/hub-and-spoke-cartels');
	});
	$('.book1 img').click(function(){
		window.open('https://www.cambridge.org/gb/universitypress/subjects/economics/industrial-economics/cartels-diagnosed-new-insights-collusion?format=HB&isbn=9781009428484');
	});
});
