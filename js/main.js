$(function(){
	// var initialseconds=1*60*60;
	// var numberofdivisions=3;
	// var tseconds=0;
	// var teseconds=initialseconds;
	// countdown=setInterval(function(){
	// 	if(teseconds==0)
	// 	{
	// 		$("#main_count").html('1 hour elapsed');
	// 		$('#count').html('');
	// 	}
	// 	else
	// 	{
	// 		teseconds--;
	// 		tseconds=teseconds;
			

	// 		// tseconds=teseconds;
	// 		// alert(tseconds);
	// 		var hours= parseInt(tseconds/(60*60));
	// 		var minutes= parseInt((tseconds - hours*(60*60))/60);
	// 		var seconds = parseInt((tseconds- hours*(60*60) - minutes*60))
	// 		$("#main_count").html(minutes + ' minutes and ' + seconds + ' seconds');

	// 		// tseconds=initialseconds-teseconds;

	// 		var ttseconds=parseInt(tseconds/(initialseconds/numberofdivisions));
	// 		var tttseconds=tseconds-(ttseconds*(initialseconds/numberofdivisions));

	// 		minutes= parseInt((tttseconds - hours*(60*60))/60);
	// 		seconds = parseInt((tttseconds- hours*(60*60) - minutes*60))

	// 		$('#count').html(minutes + ' minutes and ' + seconds + ' seconds');

	// 		// tseconds=initialseconds-teseconds;
	// 	}
	// }, 1000);

	var timeElapsed=0;
	var sound = new Audio( "media/alert.wav" );   
	var Sound = new Audio("media/alert2.wav");
    // sound.play();  	
	countdown=setInterval(function(){
		timeElapsed++;
		var modElapsed=timeElapsed%60;

		// var sTimeElapsed=parseInt(timeElapsed);
		// $('#count').html("Total: " + sTimeElapsed+ " sec");

		
		var hours= parseInt(timeElapsed/(60*60));
		var minutes= parseInt((timeElapsed - hours*(60*60))/60);
		var seconds = parseInt((timeElapsed- hours*(60*60) - minutes*60))
		$("#count").html(minutes + ' min ' + seconds + ' sec');

		var sModElapsed=parseInt(modElapsed);
		$('#main_count').html(sModElapsed);

		if(modElapsed==30)
		{
			sound.play();
		}
		else if (modElapsed==0 && timeElapsed!=0)
		{
			Sound.play();
		}
	},1000);
})