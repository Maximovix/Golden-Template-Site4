$(function () {

	let scrollPosition = $(window).scrollTop(),
		header = $("#header"),
	 	intro = $("#intro"),
	 	introH,
	 	headerH;

	/* Scroll */
		$("[data-scroll]").on("click",function(event) {
			event.preventDefault();

			let blockID = $(this).data('scroll'),
				blockOffSet = $(blockID).offset().top;

				$("#nav_toggle_item").removeClass("active");
				$("#nav").removeClass("active");
				$("body").removeClass('hide');

				headerH = header.innerHeight();

				$('html,body').animate({
					scrollTop: blockOffSet - 75
				}, 700);
		});

	/* Black-Header */
	$(window).on("scroll load resize" ,function(){
		introH = intro.innerHeight();
		scrollPosition = $(this).scrollTop();
		checkScroll(scrollPosition,introH);
	});


	function checkScroll(scrollPosition,introH) {
		if (scrollPosition >= introH - 100) {
			header.addClass("black");
		} else {
			header.removeClass("black");
		}
	}

	/* Nav-Toggle */
		$("#nav_toggle").on("click", function (event) {
			event.preventDefault();

			$("#nav").toggleClass("active");
			$("#nav_toggle_item").toggleClass('active');
			$("body").toggleClass('hide');
		});
})

