$(function() {
	var $anvlfteb = $('#anvlfteb'),
		$posbox = $anvlfteb.find('div.posbox'),
		$seledbox = $("#seledbox"),
		anvjson = {
			Overview: '<a href="#">Who we are</a>' +
				'<a href="#">Our history</a>' +
				'<a href="#">What we do</a>' ,
			Research: '<a href="#">DSKD </a>' +
				'<a href="#">DeSI</a>' +
				'<a href="#">Magic</a>' +
				'<a href="#">BDS </a>' +
				'<a href="#">CIBCI </a>' +
				'<a href="projects.html">Projects</a>',
			Opportunities: '<a href="#">Jobs</a>' +
				'<a href="#">Study</a>' +
				'<a href="#">Research Collaboration</a>',
			People: '<a href="#">Chief Researcher</a>' +
				'<a href="#">Student</a>' +
				'<a href="#">Staff</a>',
			Events: '<a href="events.html">events</a>',
			News: '<a href="#">News</a>' +
				'<a href="spotlights.html">Spotlights</a>',
			Contact: '<a href="">Contact</a>'

		};

	$posbox.mouseover(function() {
		var i = $(this).index();
		$(this).addClass("anvh").siblings().removeClass("anvh");
		var selec = $(this).attr("selec");
		if($seledbox.is(":hidden")) {
			$seledbox.show().css("left", 64 * i + 1).html("<div>" + anvjson[selec] + "</div>")
		} else {
			$seledbox.stop().animate({
				left: 64 * i + 1
			}, 200, function() {
				$("#seledbox").html("<div>" + anvjson[selec] + "</div>")
			})
		}
	});
	$anvlfteb.mouseleave(function() {
		$seledbox.hide();
		$posbox.removeClass("anvh");
	})
});