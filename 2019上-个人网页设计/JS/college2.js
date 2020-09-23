/*
* @Author: ASUS
* @Date:   2019-07-28 19:33:27
* @Last Modified by:   ASUS
* @Last Modified time: 2019-07-31 11:19:21
*/
$(function (){
	$('#dd li').click(function(){
		$(this).addClass('ccc')
		$(this).siblings().removeClass('ccc')
	})
})