/*
 * Please see the included README.md file for license terms and conditions.
 */


/*jslint browser:true, devel:true, white:true, vars:true */
/*global $:false, intel:false app:false, dev:false, cordova:false */



// This file contains your event handlers, the center of your application.
// NOTE: see app.initEvents() in init-app.js for event handler initialization code.

// function myEventHandler() {
//     "use strict" ;
// // ...event handler code here...
// }


// ...additional event handlers here...


// ...additional event handlers here...
$(function(){

	$('.footer1 .icon').click(function(){ 
		$('.footer1 .icon').removeClass('tab_activo');
		$(this).addClass('tab_activo');
	});
	
	$('.linkApoyo').click(function(){
		var url = $(this).data('href');
		window.open(url, '_self ', 'location=yes');
	});
 
});
