$(document).ready(function() {


		$('.scope-tags').click(function (){
			$('.tags-box').fadeToggle(120);
		});

		$('.prev_button, .next_button').hover(function () {
			$(this).animate({opacity: 0.4}, 400);
		}, function () {
			$(this).css("opacity", "0.2");
		});

		$('#slide').hover(function () {
			$('.drop').slideDown('fast');
			$('#angle-right').rotate({
										angle: 0,
										animateTo: 90,
										duration: 300,
										
									});
			}, function () {
					$('.drop').slideUp('fast');
					$('#angle-right').rotate({
										angle: 90,
										animateTo: 0,
										duration: 300,
										
									});

			});


	



		$('.expand-nav').click(function () {
			$(".nav-menu").slideToggle();
		});

	

		// панель навигации. 
	
		$(function(){
    	$(window).scroll(function() {
        var top = $(document).scrollTop();
     	
     	if (top > 250) {
     		
     		$('#static-pos').removeClass("main-navigation").addClass("main-navigation-fixed", 500).fadeIn('slow');
     		$('.main-nav').css('left', '64px').fadeIn('fast');

     	}
     	else {
     		$('.main-nav').css('left', '3px');
     		$('#static-pos').removeClass('main-navigation-fixed').addClass("main-navigation", 500);
     	}

     
    });
});
		//отображение главных ссылок при мобильном расширении
	$(".list-items-top").click(function(){
		$(this).next().slideToggle();
	});

	//Таймер обратного отсчета
	//Документация: http://keith-wood.name/countdown.html
	//<div class="countdown" date-time="2015-01-07"></div>
	var austDay = new Date($(".countdown").attr("date-time"));
	$(".countdown").countdown({until: austDay, format: 'yowdHMS'});

	//Попап менеджер FancyBox
	//Документация: http://fancybox.net/howto
	//<a class="fancybox"><img src="image.jpg" /></a>
	//<a class="fancybox" data-fancybox-group="group"><img src="image.jpg" /></a>
	$(".fancybox").fancybox();

	//Навигация по Landing Page
	//$(".top_mnu") - это верхняя панель со ссылками.
	//Ссылки вида <a href="#contacts">Контакты</a>
	$(".top_mnu").navigation();

	//Добавляет классы дочерним блокам .block для анимации
	//Документация: http://imakewebthings.com/jquery-waypoints/
	$(".block").waypoint(function(direction) {
		if (direction === "down") {
			$(".class").addClass("active");
		} else if (direction === "up") {
			$(".class").removeClass("deactive");
		};
	}, {offset: 100});

	//Плавный скролл до блока .div по клику на .scroll
	//Документация: https://github.com/flesler/jquery.scrollTo
	$("a.scroll").click(function() {
		$.scrollTo($(".div"), 800, {
			offset: -90
		});
	});

	//Каруселька
	//Документация: http://owlgraphic.com/owlcarousel/
	var owl = $(".carousel");
	owl.owlCarousel({
		items :3,
		autoHeight: true
	});
	owl.on("mousewheel", ".owl-wrapper", function (e) {
		if (e.deltaY > 0) {
			owl.trigger("owl.prev");
		} else {
			owl.trigger("owl.next");
		}
		e.preventDefault();
	});
	$(".next_button").click(function(){
		owl.trigger("owl.next");
	});
	$(".prev_button").click(function(){
		owl.trigger("owl.prev");
	});

	//Кнопка "Наверх"
	//Документация:
	//http://api.jquery.com/scrolltop/
	//http://api.jquery.com/animate/
	$("#top").click(function () {
		$("body, html").animate({
			scrollTop: 0
		}, 800);
		return false;
	});
	
	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
	$("form").submit(function() {
		$.ajax({
			type: "GET",
			url: "mail.php",
			data: $("form").serialize()
		}).done(function() {
			alert("Спасибо за заявку!");
			setTimeout(function() {
				$.fancybox.close();
			}, 1000);
		});
		return false;
	});

	$('.search-input').focus(function () {
		
		$(this).animate({
			width: 132
		}, 200).prop("placeholder", "");
		

	});
	$('.search-input').blur(function() {
		
		$(this).animate({width: 65}, 200).prop("placeholder", "Search..");
		
	});


		$('.wrapper-pop').hover(function () {
			$(this).children().first().animate({"height": 69, 'opacity': 0.83},150, function () {
				$(this).children().animate({"top": 20, "opacity": 0.9}, 150)
			});
		}, function () {
	
				var selector = $(this).children().first();
				selector.children().animate({'opacity': 0, 'top': 0}, 150, function (){
					selector.animate({"height": 0, 'opacity': 0}, 150);
				});
				});
				$('.fresh-block').hover(function (){
						$(this).addClass('clicked');
					}, function (){
						$(this).removeClass('clicked');
					});

		$('.sidebar-list > li').hover(function () {
			$(this).addClass('hover');
		}, function (){
			$(this).removeClass('hover');
		});


});



/*


*/	
