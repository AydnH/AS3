$(document).ready(function(){

var num = 1100;

	$(".send-button").click(function() {
		console.log("Clicked");
		num = $(".counter").val();
		num = num + 1;

		var newPost = $(".message-field").val();
		$(".postContainer").append("<div id='replies' class='post-reply'> <blockquote class='postMessage' id='random'>" + newPost + "</blockquote> <br /> </div>");
		$(".message-field").val("");

	});


});   