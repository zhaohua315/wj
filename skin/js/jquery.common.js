/*!

 */
$(function(){$(window).scroll(function(){if($(window).scrollTop()>=50){$('#back-to-top').fadeIn(300)}else{$('#back-to-top').fadeOut(300)}});$('.stop').click(function(){$('html,body').animate({scrollTop:'0px'},300)})});document.writeln('<div id="back-to-top"><a class="stop" href="javascript:"><span></span></a></div>');
if($(".nav ul li").length>6){$(".nav ul").find("li:gt(5)").hide();$(".nav ul").find("li:last").after("<div class='open'>\u5c55\u5f00</div>");$(".open").click(function(){$(this).parent().find("li:gt(5)").slideToggle();$(".open").hide()})}
function ShowAlert(notice){$("#prompt").text(notice).show();setTimeout(function(){$("#prompt").hide()},2000)};
function search(){if($("#baidusearch").val()==""||$("#baidusearch").val()==0||$("#baidusearch").val()=="在这里搜索您感兴趣的读后感"){ShowAlert("请输入搜索关键词");$("#baidusearch").focus();return false}var keywords=document.getElementById("baidusearch").value;self.location.href="/search.php?keyword="+keywords+""};
function count(aid){$.ajax({type:'post',url:"/click.php",data:{aid:aid},cache:false,dataType:'json',error:function(){},beforeSend:function(){},success:function(msg){$('#click').html(msg)}})};
//自动推送
