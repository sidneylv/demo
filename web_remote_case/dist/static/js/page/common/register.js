require(["bootstrap"],function(){function t(){l.on("click",e)}function e(t){var e=$(t.target),a=60;t.preventDefault(),r=setInterval(function(){a>1?(e.text("再次获取("+--a+")"),e.prop("disabled",!0),e.addClass("btn-default--disabled")):1>=a&&n()},1e3)}function n(){clearInterval(r),l.text("获取验证码"),l.prop("disabled",!1),l.removeClass("btn-default--disabled")}function a(){t()}var l=$("#J_btn-verifyCode"),r=null;a()});