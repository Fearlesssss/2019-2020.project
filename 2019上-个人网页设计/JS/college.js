/*
* @Author: ASUS
* @Date:   2019-07-26 10:58:37
* @Last Modified by:   ASUS
* @Last Modified time: 2019-07-31 12:44:44
*/
// $(function(){})
var i=0;
var time;
$(document).ready(function() {
	$('.mm').eq(0).show().siblings().hide()
	timer();
});

function timer() {
		time = setInterval(function() {
			show();
			i++;
			if(i==4){
				i=0;
			}
		},2000)
	}
function show()
	 {
		$('.mm').eq(i).fadeIn(300).siblings ().fadeOut (300) 	
		}