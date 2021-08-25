/*global jQuery window console document $ */

$(function () {

    "use strict";

    if (window.console) {
        console.log('foo');
    }

    // background
    $("._5vb_").css("background-color", "#ffffff" );
    // font
    $("._2let").css({
        "font-family": "'Segoe UI Historic', 'Segoe UI', Helvetica, Arial, sans-serif",
        "font-size": "16px",
        "max-width": "564px"
    });
    // text size
    $("._3a_u").css("width", "100%");
    // reversing texts
    $("._4t5n").css( {
        "display": "flex",
        "flex-direction": "column-reverse"
    });


    // finding the people involved in the chat
    // names is an array with these people
    var all_names = [];
    $("._2pio").each(function (i, obj) {
        all_names.push($(obj).text());
    });
    var names = all_names.filter((item, i, ar) => ar.indexOf(item) === i);


    var messages = $("._2let");
    messages.css({
        "border-radius": "20px",
        "padding": "10px 15px"
    });


    $("._2lel").each(function (i, obj) {
        // NB: $( obj )[0].textContent ) == name of the sender

        var parent = $(obj).parent();
        var message_content = jQuery("._2let", parent);

        // hide name
        $(obj).hide();

        if ($(obj)[0].textContent === names[0]) { // Gabe

            message_content.css({
                "background-color": "#E4E6EB"
                // "font-family": "'Segoe UI Historic', 'Segoe UI', Helvetica, Arial, sans-serif"
            });

        } else { // me

            message_content.css({
                "background-color": "#3B77BB",
                "color": "#FFFFFF"
                // "font-family": "'Segoe UI Historic', 'Segoe UI', Helvetica, Arial, sans-serif"
            });

            parent.css({
                "display": "flex",
                "justify-content": "flex-end"
            });
        }
    });
});