/* 
* @Author: ASUS
* @Date:   2019-07-24 23:46:49
* @Last Modified by:   ASUS
* @Last Modified time: 2019-07-31 11:13:05
*/

// 'use strict';



$('.top').click(function(){
	$('body,html').animate({
		scrollTop:0
	},300)

})/*点击top实现回到顶部*/

$(window).scroll(function(){
	if($(window).scrollTop()>100){
		$('.top').css('display','block')
	}
	else{
		$('.top').css('display','none')
	}
})