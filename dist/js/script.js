

//mobile-nav-open
$(function() {
	$(".mobile-nav__menu").click(function() {
		$(".mobile-nav__wrap").addClass("active");
	});
});

//mobile-nav-close
$(function() {
	$(".mobile-nav__close").click(function() {
		$(".mobile-nav__wrap").removeClass("active");
	});
});


// specification button
// $(function() {
// 	$(".btn-round-transparent").click(function() {
// 		$(".equipment-list-wrap").toggle("show");
// 	});
// });

// auto-rotation jumbotron images
// function autoRotate() {
//     $(".jumbotron-image").each(function(index) {
//         $(this).hide();
//         $(this).delay(3000 * index).fadeIn(1000).fadeOut();
//     });
// }
// autoRotate();

// $('.jumbotron-image').hide();

// function autoRotate() {
//     $("#jumbotron .jumbotron-image").first().appendTo('#jumbotron').fadeOut(1000);
//     $("#jumbotron .jumbotron-image").first().fadeIn(1000);
    
//     setTimeout(autoRotate, 3000);
// }
// autoRotate();





