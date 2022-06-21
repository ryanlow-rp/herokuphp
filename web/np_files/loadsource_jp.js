

$(function(){



 loadCSS = function(href,media) {
     var cssLink = $("<link rel='stylesheet' type='text/css' href='" + "https://va.ecitizen.gov.sg/cfp-ng/va/np/css/" + href+"' "+media+">");
     $("body").append(cssLink);
 };


 loadJS = function(src) {
     var jsLink = $("<script type='text/javascript' src='"+ "https://va.ecitizen.gov.sg/cfp-ng/va/np/js/" + src+"'>");
     $("body").append(jsLink);
 };
 
  loadJS_global = function(src) {
      var jsLink = $("<script type='text/javascript' src='"+ "https://va.ecitizen.gov.sg/cfp/script/jquery/" + src+"'>");
      $("body").append(jsLink);
 };

  function getBrowserVersion(){
      var ua= navigator.userAgent;
      var  tem;
      var M= ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*([\d\.]+)/i) || [];
      if(/trident/i.test(M[1])){
        tem=  /\brv[ :]+(\d+(\.\d+)?)/g.exec(ua) || [];
        return 'IE '+(tem[1] || '');
        }
        M= M[2]? [M[1], M[2]]:[navigator.appName, navigator.appVersion, '-?'];
        if((tem= ua.match(/version\/([\.\d]+)/i))!= null) M[2]= tem[1];
        return M.join(' ');
    }


  loadCSS("print.css","media='print'");

 

loadJS_global("jquery.scrollIntoView.js");
loadJS("va_src_jp.js?v=1.1");
//loadJS("js_src.js");
//loadJS("main_jp.js?v=1.1");






});


