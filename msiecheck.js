    // Trigger only if IE is 8 or 9 to enable placeholders
    if (navigator.userAgent.match(/msie/i) ){
        var ua = window.navigator.userAgent;
        var msie = ua.indexOf('MSIE ');

        if (msie > 0) {
            var msieVersion = parseInt(ua.substring(msie + 5, ua.indexOf(".", msie)));
            if(msieVersion < 10){
                jQuery('input, textarea').placeholder();
            }
        }
    }
