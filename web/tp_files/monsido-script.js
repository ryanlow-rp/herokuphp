!function(t){document.readyState&&"complete"!==document.readyState?window.addEventListener?window.addEventListener("load",t,!1):window.attachEvent&&window.attachEvent("onload",t):t()}(function(){var t,e,n,i,s={heatmap:"//heatmaps.monsido.com/v1/heatmaps.js",pageAssist:"//cdn.monsido.com/page-assist/mon-page-assist.js",pageAssistV2:"//cdn.monsido.com/page-assist/v2/mon-page-assist-loader.js",pageCorrect:"//pagecorrect.monsido.com/v1/page-correct.js",sopScript:"//app-script.monsido.com/v2/monsido_sop_script.js",statistics:"//tracking.monsido.com/"},a={createScriptsFromConfig:function(t,e){var n=new Array;return t.heatmap&&t.heatmap.enabled&&n.push(this.createScriptTag(e.heatmap)),t.pageAssist&&t.pageAssist.enabled&&n.push(this.createScriptTag(e.pageAssist)),t.pageAssistV2&&t.pageAssistV2.enabled&&n.push(this.createScriptTag(e.pageAssistV2)),t.pageCorrect&&t.pageCorrect.enabled&&n.push(this.createScriptTag(e.pageCorrect)),n},createScriptTag:function(t){var e=document.createElement("script");return e.type="text/javascript",e.src=t,e}},o={create:function(t){var e=this.createUrl(t);return this.createHiddenImage(e)},createHiddenImage:function(t){var e=document.createElement("img");return e.style.height="1px",e.style.width="1px",e.src=t,e.setAttribute("hidden",""),e.style.display="none !important",e},createUrl:function(t){var e=t.trackingEndpoint+"?a="+encodeURIComponent(t.token)+"&b="+encodeURIComponent(t.currentUrl)+"&c="+encodeURIComponent(t.userName);return"number"==typeof t.screenHeight&&"number"==typeof t.screenWidth&&(e=e+"&d="+encodeURIComponent(t.screenWidth+"x"+t.screenHeight)),t.referrer&&(e=e+"&e="+encodeURIComponent(t.referrer)),e=e+"&f="+encodeURIComponent(t.random),t.performanceTiming&&(e=e+"&g="+encodeURIComponent(t.performanceTiming)),e+="&h=2",t.isFile&&(e+="&i=1"),e}};try{if(window._monsido_script_loader_has_run)return;window._monsido_script_loader_has_run=!0;var r=document.getElementsByTagName("script")[0];if(!r)return;var c=window._monsido;if(!c)return;if(c.statistics&&c.statistics.enabled&&(window.monsido_tracking={trackUrl:function(t){var e=window._monsido;if(!e)return;var n,i=t,r=d();e.statistics&&e.statistics.enabled?(h("monsido",r,30),m(n=g(s.statistics,e.token,i,r))):n={trackingEndpoint:s.statistics,token:e.token,currentUrl:i,userName:r,random:w()},k(o.createUrl(n))},trackDocument:function(t){var e=window._monsido;if(!e)return;var n=g(s.statistics,e.token,t,d());n.isFile=!0,m(n),k(o.createUrl(n))}}),c.statistics&&!0===c.statistics.enabled&&c.statistics.documentTracking&&!0===c.statistics.documentTracking.enabled&&!c.statistics.documentTracking.documentExt&&(c.statistics.documentTracking.documentExt=["pdf","doc","ppt","docx","pptx"]),c.statistics&&!0===c.statistics.enabled&&c.statistics.documentTracking&&!0===c.statistics.documentTracking.enabled&&!c.statistics.documentTracking.documentCls&&(c.statistics.documentTracking.documentCls="monsido_download"),c.statistics&&!0===c.statistics.enabled&&c.statistics.documentTracking&&!0===c.statistics.documentTracking.enabled&&!c.statistics.documentTracking.documentIgnoreCls&&(c.statistics.documentTracking.documentIgnoreCls="monsido_download_ignore"),-1!==window.location.hash.indexOf("#_monT="))return l(r,c,s),void f(a.createScriptTag(s.sopScript),r);l(r,c,s),function(t){if(t.statistics&&t.statistics.documentTracking&&t.statistics.documentTracking.enabled)if(document.querySelectorAll){var e=function(t){for(var e=[],n="",i=0;i<t.length;i++)""!==(n=t[i].replace(/^\s+|\s+$/g,""))&&("."!==n.charAt(0)&&(n="."+n),e.push('a[href$="'+n+'"]'));return e.join(",")}(t.statistics.documentTracking.documentExt).replace(/^\s+|\s+$/g,"");""!==e&&(e+=","),""!==t.statistics.documentTracking.documentCls&&(e=e+"."+t.statistics.documentTracking.documentCls),u(document.querySelectorAll(e),s.statistics,t.token,d(),t.statistics.documentTracking.documentIgnoreCls)}else u(document.getElementsByClassName(t.statistics.documentTracking.documentCls),s.statistics,t.token,d(),t.statistics.documentTracking.documentIgnoreCls)}(c),!1!==c.hasOwnProperty("statistics")&&!1===c.statistics.track_on_load||(t=c,n=document.URL,i=d(),t.statistics&&t.statistics.enabled?(h("monsido",i,30),m(e=g(s.statistics,t.token,n,i))):e={trackingEndpoint:s.statistics,token:t.token,currentUrl:n,userName:i,random:w()},o.create(e))}catch(t){}function d(){var t=function(t){for(var e=t+"=",n=document.cookie.split(";"),i=0;i<n.length;i++){for(var r=n[i];" "===r.charAt(0);)r=r.substring(1);if(0===r.indexOf(e))return r.substring(e.length,r.length)}return""}("monsido");return t=t||w()}function m(t){!(window.performance&&window.performance.timing&&window.performance.timing.domContentLoadedEventEnd&&window.navigationStart)||(t.performanceTiming=window.performance.timing.domContentLoadedEventEnd-window.performance.timing.navigationStart)}function u(t,e,n,i,r){if(t&&0<t.length)for(var s=0;s<t.length;s++)v("click",t[s],r,function(){var t=g(e,n,p(this.getAttribute("href")),i);t.isFile=!0,k(o.createUrl(t))})}function g(t,e,n,i){return{trackingEndpoint:t,token:e,currentUrl:n,userName:i,random:w(),screenWidth:window.screen.width,screenHeight:window.screen.height,referrer:document.referrer}}function p(t){var e=document.createElement("a");return e.href=t,e.href}function l(t,e,n){var i=a.createScriptsFromConfig(e,n);if(i)for(var r=0;i.length>r;r++)f(i[r],t)}function f(t,e){if(!e.parentNode)throw new Error("could not insert element: target element has no parent");e.parentNode.insertBefore(t,e)}function h(t,e,n){var i=new Date;i.setTime(i.getTime()+24*n*60*60*1e3);var r="expires="+i.toUTCString();document.cookie=t+"="+e+"; "+r+";path=/"}function w(){for(var t="",e="ABCDE1234567890",n=0;n<3;n++)t+=e.charAt(Math.floor(Math.random()*e.length));return t+(new Date).getTime()}function v(t,e,n,i){e.getAttribute("class")&&-1!==e.getAttribute("class").indexOf(n)||(e.addEventListener?e.addEventListener(t,i,!1):e.attachEvent&&e.attachEvent("on"+t,i))}function k(t,e){if(e=JSON.stringify(e),"navigator"in window&&"sendBeacon"in window.navigator)navigator.sendBeacon(t,e);else{var n=window.event&&window.event.type,i="unload"===n||"beforeunload"===n,r=new XMLHttpRequest;r.open("POST",t,!i),r.withCredentials=!1,r.setRequestHeader("Accept","*/*"),r.setRequestHeader("Content-Type","application/json");try{r.send(e)}catch(t){return!1}}return!0}});