"use strict";
var alertTimeout = null;
function bindAlerts(message, type, callback) {
    var alertBox = $("#w0");
    alertBox.closest(".app-status-message").removeClass('hidden').addClass('show').removeAttr( 'style' );
    $(".message",alertBox).text('');
    $(".status",alertBox).addClass("hidden");
    if(type!='' && message!=''){
        switch(type){
            case "success":
                alertBox.append(renderAlertDiv(alertBox,type,message));
                break;
            case "info":
                alertBox.append(renderAlertDiv(alertBox,type,message));
                break;
            case "warn":
                alertBox.append(renderAlertDiv(alertBox,type,message));
                break;
            case "danger":
                alertBox.append(renderAlertDiv(alertBox,type,message));
                break;
            case "error":
                alertBox.append(renderAlertDiv(alertBox,type,message));
                break;
            default:
                $(".message",alertBox).text('');
                alertBox.fadeOut().removeClass('show');
                break;
        }
        restartAlertTimeout();
        alertTimeout = setTimeout(function() {
            $(".message",alertBox).text('');
            alertBox.fadeOut().removeClass('show');

        }, 9000);
    }
    if(typeof callback !== typeof undefined) callback();
}

function restartAlertTimeout() {
    clearTimeout(alertTimeout);
}

function renderAlertDiv(selector,type,message) {
    var c = selector.find(".status");
    $.each(c,function () {
        if($(this).hasClass(type)){
            $(this).removeClass('hidden');
            $(this).find(".message").text(message);
        }
    });
}
$(document).ready(function () {
    $(document).on("click",".icon-close", function (e) {
        bindAlerts();
        e.preventDefault()
    });
});