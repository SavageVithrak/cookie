window.onload = function () {
    $(window).scroll(function () {
        if ($(this).scrollTop()) {
            $('#back-to-top').fadeIn();

        } else {
            $('#back-to-top').fadeOut();
        }
    });
    $("#back-to-top").click(function () {
        $("html, body").animate({scrollTop: 0}, 300);
    });

    $(".button-mobile-menu").on('click', function (e) {
        let transform = $(".nav-side").css('left');
        if (transform == "0px" || transform == "0") {
            $(".line").removeClass('active');
            $(".nav-side").css({left: '-180px'});
            
        } else {
            $(".line").addClass('active');
            $(".nav-side").css({left: '0px'});
        }
    });
	$("#txt-search").keydown(function (e) {
        if (e.keyCode === 13) {
            var value = $(this).val();
            var old_value = $(this).data('key');
            value = jQuery.trim(value);
            if (value !== '' && value !== old_value)
            {
                var $rex_rule = /[ \-\.?:\\\/\_\']+/g;
                var value1 = value.replace($rex_rule, "\-").trim().toLowerCase();
                var $url = domain_url2 + "/search/" + value1;
                window.location.href = $url;
            }
        }
    });
    $("#search-button").click(function () {
        var value = $("#txt-search").val();
        var _old = $("#txt-search").data('key');
        value = jQuery.trim(value);
        if (value !== '' && value !== _old)
        {
            var $rex_rule = /[ \-\.?:\\\/\_\']+/g;
            var value1 = value.replace($rex_rule, "\-").trim().toLowerCase();
            var $url = domain_url2 + "/search/" + value1;
            window.location.href = $url;
        }
    });
}
$("#expand").on('click', function () {
    $("#iframehtml5").addClass("force_full_screen");
    requestFullScreen(document.body);
});

$("#_exit_full_screen").on('click', cancelFullScreen);

function copyToClipboard(element) {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val($(element).attr('href')).select();
    document.execCommand("copy");
    $temp.remove();
}
function requestFullScreen(element) {
    // Supports most browsers and their versions.
    var requestMethod = element.requestFullScreen || element.webkitRequestFullScreen || element.mozRequestFullScreen || element.msRequestFullScreen;

    if (requestMethod) { // Native full screen.
        requestMethod.call(element);
    } else if (typeof window.ActiveXObject !== "undefined") { // Older IE.
        var wscript = new ActiveXObject("WScript.Shell");
        if (wscript !== null) {
            wscript.SendKeys("{F11}");
        }
    }
}

function cancelFullScreen() {
    $("#iframehtml5").removeClass("force_full_screen");
    var requestMethod = document.cancelFullScreen || document.webkitCancelFullScreen || document.mozCancelFullScreen || document.exitFullScreenBtn;
    if (requestMethod) { // cancel full screen.
        requestMethod.call(document);
    } else if (typeof window.ActiveXObject !== "undefined") { // Older IE.
        var wscript = new ActiveXObject("WScript.Shell");
        if (wscript !== null) {
            wscript.SendKeys("{F11}");
        }
    }
}

if (document.addEventListener) {
    document.addEventListener('webkitfullscreenchange', exitHandler, false);
    document.addEventListener('mozfullscreenchange', exitHandler, false);
    document.addEventListener('fullscreenchange', exitHandler, false);
    document.addEventListener('MSFullscreenChange', exitHandler, false);
}

function exitHandler() {
    if (document.webkitIsFullScreen === false
            || document.mozFullScreen === false
            || document.msFullscreenElement === false) {
        cancelFullScreen();
    }
}
