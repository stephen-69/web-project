var CALL_TO_ACTION_TEXT="Install",DEFAULT_SUBDOMAIN="go",MOBILE_REGEXP="/Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile|Kindle|NetFront|Silk-Accelerated|(hpw|web)OS|Fennec|Minimo|Opera M(obi|ini)|Blazer|Dolfin|Dolphin|Skyfire|Zune/i";function AFBanner(){this.buildBanner=function(e,t,n){var i=document.createElement("IMG");i.setAttribute("class","appsflyer-banner-close-img"),i.setAttribute("src","./assets/images/close_web_mobile.svg");var r=document.createElement("DIV");r.setAttribute("class","appsflyer-banner-close-container mr-2"),r.addEventListener("click",function(){var t=document.getElementById(e);for(document.getElementById("appflyer-show").classList.remove("appflyer-show1"),sessionStorage.setItem("isShowBanner","false");t.firstChild;)t.removeChild(t.firstChild)}),r.appendChild(i);var a=document.createElement("DIV");a.setAttribute("class","appsflyer-banner-title"),a.innerHTML=n.title;var l=document.createElement("DIV");l.setAttribute("class","appsflyer-banner-subtitle"),l.innerHTML=n.subtitle;var s=document.createElement("DIV");if(s.setAttribute("class","appsflyer-banner-text-container"),s.appendChild(a),s.appendChild(l),n.app_icon){var o=document.createElement("IMG");o.setAttribute("class","appsflyer-banner-icon-img"),o.setAttribute("src",n.app_icon)}var c=document.createElement("BUTTON");c.setAttribute("class","downloadButton red button ml-2 "),c.addEventListener("click",()=>{t((e,t)=>{e||window.location.replace(t)})}),c.innerHTML=n.call_to_action||CALL_TO_ACTION_TEXT;var d=document.createElement("DIV");return d.setAttribute("class","appsflyerContainer d-flex justify-content-center align-items-center p-2"),d.appendChild(r),d.appendChild(s),d.appendChild(c),d},this.validateSettings=function(e){var t=[];return e.onelink_id||t.push("OneLink ID"),e.media_source||t.push("Media Source"),!(t.length>0&&(console.error("Error: Your AppsFlyer Banner settings object does not contain: "+t.join(", ")),1))},this.showOnCurrentDevice=function(e){return!e.show_only_mobile||navigator.userAgent.match(MOBILE_REGEXP)},this.init=function(e,t,n){var i=this.buildBanner(e,n,t);document.getElementById(e).appendChild(i);var r=document.createElement("meta");r.name="viewport",r.content="width=device-width, initial-scale=1.0",document.getElementsByTagName("head")[0].appendChild(r)}}