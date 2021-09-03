document.writeln('<div class="scrollmenu"><li><a href="javascript:;" data-original-title="回到顶部" class="scroll iconfont icon-down"></a></li></div>');
$(function() {
	$(window).scroll(function() {
		if ($(window).scrollTop() >= 50) {
			$('.scroll').fadeIn(800)
		} else {
			$('.scroll').fadeOut(500)
		}
	});
	$('.scroll').click(function() {
		$('html,body').animate({
			scrollTop: '0px'
		}, 500)
	});
});


function searchsubmit() {
	if ($("#keyword").val() == "" || $("#keyword").val() == "在这里搜索您感兴趣的内容") {
		alert("请输入搜索关键词");
		$("#keyword").focus();
		return false
	};
	var keyword = document.getElementById("keyword").value;
	self.location.href = "/so.php?searchword=" + keyword + ""
};
if ($('.sidefixed').length) {
	var r = $('.sidefixed');
	var t = $(r).offset().top;
	$.event.add(window, "scroll", function() {
		var w = $(window).scrollTop();
		var f = $('.footer').offset().top;
		var d = parseInt(f - t - $(r).height());
		var m = parseInt(f - $(r).height());
		if (w > t) {
			if (w < m) $(r).css({
				"position": "fixed",
				"top": "0px",
				"margin-top": "0px"
			});
			else $(r).css({
				"position": "static",
				"margin-top": d + "px"
			})
		} else {
			$(r).css({
				"position": "static",
				"margin-top": "0px"
			})
		}
	})
}!
function(e, t, a) {
	function r() {
		for (var e = 0; e < s.length; e++) s[e].alpha <= 0 ? (t.body.removeChild(s[e].el), s.splice(e, 1)) : (s[e].y--, s[e].scale += .004, s[e].alpha -= .013, s[e].el.style.cssText = "left:" + s[e].x + "px;top:" + s[e].y + "px;opacity:" + s[e].alpha + ";transform:scale(" + s[e].scale + "," + s[e].scale + ") rotate(45deg);background:" + s[e].color + ";z-index:99999");
		requestAnimationFrame(r)
	}
	function n() {
		var t = "function" == typeof e.onclick && e.onclick;
		e.onclick = function(e) {
			t && t(), o(e)
		}
	}
	function o(e) {
		var a = t.createElement("div");
		a.className = "heart", s.push({
			el: a,
			x: e.clientX - 5,
			y: e.clientY - 5,
			scale: 1,
			alpha: 1,
			color: c()
		}), t.body.appendChild(a)
	}
	function i(e) {
		var a = t.createElement("style");
		a.type = "text/css";
		try {
			a.appendChild(t.createTextNode(e))
		} catch (t) {
			a.styleSheet.cssText = e
		}
		t.getElementsByTagName("head")[0].appendChild(a)
	}
	function c() {
		return "rgb(" + ~~ (255 * Math.random()) + "," + ~~ (255 * Math.random()) + "," + ~~ (255 * Math.random()) + ")"
	}
	var s = [];
	e.requestAnimationFrame = e.requestAnimationFrame || e.webkitRequestAnimationFrame || e.mozRequestAnimationFrame || e.oRequestAnimationFrame || e.msRequestAnimationFrame ||
	function(e) {
		setTimeout(e, 1e3 / 60)
	}, i(".heart{width: 10px;height: 10px;position: fixed;background: #f00;transform: rotate(45deg);-webkit-transform: rotate(45deg);-moz-transform: rotate(45deg);}.heart:after,.heart:before{content: '';width: inherit;height: inherit;background: inherit;border-radius: 50%;-webkit-border-radius: 50%;-moz-border-radius: 50%;position: fixed;}.heart:after{top: -5px;}.heart:before{left: -5px;}"), n(), r()
}(window, document);
if ($('#support').length) {
	support.innerHTML = '<div class="support-mask"></div><div class="support-mian"><div class="support-close iconfont icon-close"></div><a class="support-logo" href="" title="" target="_blank"></a><p class="support-title">感谢您的支持，我会继续努力的!</p><div class="support-qrcode"><img src="images/picture/qrcode-alipay.png" alt="扫一扫"/></div><div class="support-explain">扫一扫打赏，你说多少就多少</div><div class="support-select"><div class="support-select-item support-checked" data-id="alipay"><i class="iconfont icon-radio"></i><span class="support-pay-logo alipay"></span></div><div class="support-select-item" data-id="wechat"><i class="iconfont icon-radio"></i><span class="support-pay-logo wechat"></span></div></div><div class="support-info"><p>打开<span class="support-txt">支付宝</span>扫一扫，即可进行扫码打赏哦</p>分享从这里开始，精彩与您同在</p></div></div>';
};
$(".btn-support").click(function() {
	$(".support-mask").fadeIn(300);
	$(".support-mian").fadeIn(1000);
	$(".support-select-item").click(function() {
		$(this).addClass('support-checked').siblings('.support-select-item').removeClass('support-checked');
		var dataid = $(this).attr('data-id');
		$(".support-qrcode img").attr("src", "/skin/zhann/images/qrcode-" + dataid + ".png");
		$(".support-txt").text(dataid == "alipay" ? "支付宝" : "微信")
	})
});
$(".support-close,.support-mask").click(function() {
	$(".support-mask").fadeOut(300);
	$(".support-mian").fadeOut(500)
});

function count(aid) {
	$.ajax({
		type: 'post',
		url: "",
		data: {
			aid: aid
		},
		cache: false,
		dataType: 'json',
		error: function() {},
		beforeSend: function() {},
		success: function(msg) {
			$('#click').html(msg)
		}
	})
};
//自动推送