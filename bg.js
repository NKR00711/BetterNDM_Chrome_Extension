var h=!1,aa=RegExp("^bytes [0-9]+-[0-9]+/([0-9]+)$"),n="object xmlhttprequest media other main_frame sub_frame image".split(" "),ba=["object","xmlhttprequest","media","other"],ca=RegExp("://.+/([^/]+?(?:.([^./]+?))?)(?=[?#]|$)"),da=[301,302,303,307,308],ea=RegExp("^(?:application/x-apple-diskimage|application/download|application/force-download|application/x-msdownload|binary/octet-stream)$","i"),u=RegExp("^(?:FLV|SWF|MP3|MP4|M4V|F4F|F4V|M4A|MPG|MPEG|MPEG4|MPE|AVI|WMV|WMA|WAV|WAVE|ASF|RM|RAM|OGG|OGV|OGM|OGA|MOV|MID|MIDI|3GP|3GPP|QT|WEBM|TS|MKV|AAC|MP2T|MPEGTS|RMVB|VTT|SRT)$",
"i"),fa=RegExp("^(?:HTM|HTML|MHT|MHTML|SHTML|SHTM|XHT|XHTM|XHTML|XML|TXT|CSS|JS|JSON|GIF|ICO|JPEG|JPG|PNG|WEBP|BMP|SVG|TIF|TIFF|PDF|PHP|ASP|ASPX|EOT|TTF|WOF|WOFF|WOFF2|MSG|CHN|PEM|BR|OTF|ACZ|AZC|CGI|TPL|OSD|M3U8|DO)$","i"),ha=RegExp("^(?:FLV|AVI|MPG|MPE|WMV|QT|MOV|RM|RAM|WMA|MID|MIDI|AAC|MKV|RMVB)$","i"),C=RegExp("^(?:F4F|MPEGTS|TS|MP2T)$","i"),D={"application/x-apple-diskimage":"DMG","application/cert-chain+cbor":"MSG","application/epub+zip":"EPUB","application/java-archive":"JAR","video/x-matroska":"MKV",
"text/html":"HTML|HTM","text/css":"CSS","text/javascript":"JS|JSON","text/mspg-legacyinfo":"MSI|MSP","text/plain":"TXT|SRT","text/srt":"SRT","text/vtt":"VTT|SRT","text/xml":"XML|F4M|TTML","text/x-javascript":"JS|JSON","text/x-json":"JSON","application/f4m+xml":"F4M","application/gzip":"GZ","application/javascript":"JS","application/json":"JSON","application/msword":"DOC|DOCX|DOT|DOTX","application/pdf":"PDF","application/ttaf+xml":"DFXP","application/vnd.apple.mpegurl":"M3U8","application/zip":"ZIP",
"application/x-7z-compressed":"7Z","application/x-aim":"PLJ","application/x-compress":"Z","application/x-compress-7z":"7Z","application/x-compressed":"ARJ","application/x-gtar":"TAR","application/x-msi":"MSI","application/x-msp":"MSP","application/x-gzip":"GZ","application/x-gzip-compressed":"GZ","application/x-javascript":"JS","application/x-mpegurl":"M3U8","application/x-msdos-program":"EXE|DLL","application/vnd.apple.installer+xml":"MPKG","application/x-ole-storage":"MSI|MSP","application/x-rar":"RAR",
"application/x-rar-compressed":"RAR","application/x-sdlc":"EXE|SDLC","application/x-shockwave-flash":"SWF","application/x-silverlight-app":"XAP","application/x-subrip":"SRT","application/x-tar":"TAR","application/x-zip":"ZIP","application/x-zip-compressed":"ZIP","video/3gpp":"3GP|3GPP","video/3gpp2":"3GP|3GPP","video/avi":"AVI","video/f4f":"F4F","video/f4m":"F4M","video/flv":"FLV","video/mp2t":"TS|M3U8","video/mp4":"MP4|M4V","video/mpeg":"MPG|MPEG|MPE","video/mpegurl":"M3U8|M3U","video/mpg4":"MP4|M4V",
"video/msvideo":"AVI","video/quicktime":"MOV|QT","video/webm":"WEBM","video/x-flash-video":"FLV","video/x-flv":"FLV","video/x-mp4":"MP4|M4V","video/x-mpegurl":"M3U8|M3U","video/x-mpg4":"MP4|M4V","video/x-ms-asf":"ASF","video/x-ms-wmv":"WMV","video/x-msvideo":"AVI","audio/3gpp":"3GP|3GPP","audio/3gpp2":"3GP|3GPP","audio/mp3":"MP3","audio/mp4":"M4A|MP4","audio/mp4a-latm":"M4A|MP4","audio/mpeg":"MP3","audio/mpeg4-generic":"M4A|MP4","audio/mpegurl":"M3U8|M3U","image/svg+xml":"SVG|SVGZ","audio/webm":"WEBM",
"audio/wav":"WAV","audio/x-mpeg":"MP3","audio/x-mpegurl":"M3U8|M3U","audio/x-ms-wma":"WMA","audio/x-wav":"WAV","ilm/tm":"MP3","image/gif":"GIF|GFA","image/icon":"ICO|CUR","image/jpg":"JPG|JPEG","image/jpeg":"JPG|JPEG","image/png":"PNG|APNG","image/tiff":"TIF|TIFF","image/vnd.microsoft.icon":"ICO|CUR","image/webp":"WEBP","image/x-icon":"ICO|CUR","flv-application/octet-stream":"FLV","image/x-xbitmap":"XBM","audio/x-mp3":"MP3","audio/x-hx-aac-adts":"AAC","audio/aac":"AAC","audio/x-aac":"AAC","application/vnd.rn-realmedia-vbr":"RMVB"};
function E(a){return a&&unescape(a.split(";",1).shift().trim())||""}function F(a){return(a=ca.exec(a))?a[1]||"":""}function K(a){return-1<a.indexOf(".")?a.split(".").pop():""}function ia(a){var b;a=a.toUpperCase();for(b in D)if(-1<D[b].split("|").indexOf(a))return b;return""}function L(a,b){if(!a)return null;for(var c=0;c<a.length;c++)if(a[c].name.toLowerCase()==b.toLowerCase())return a[c].value||a[c].binaryValue||null;return null}
function M(){for(var a={},b=0;b<arguments.length;b++)for(var c in arguments[b])arguments[b].hasOwnProperty(c)&&(a[c]=arguments[b][c]);return a}function N(a,b){return a&&b&&0==a.indexOf(b)}function P(a,b){if(!a||!b)return!1;var c=a.length-b.length;return 0<=c&&a.indexOf(b,c)==c}function Q(a,b){return a&&b&&0<=a.indexOf(b)}function R(a){return Q(a,"://")?a.split("://",1).shift().toLowerCase()||"":"http"}
async function S(a,b){var c=null,d={},e,f=b&&b["1"]||"GET";if(b&&(e=b.m))for(var g=0;g<e.length;g++)N(e[g].name.toLowerCase(),"x-")&&(d[e[g].name]=e[g].value);if("POST"==f&&b){try{T(b,b),b["10"]&&(d["Content-Type"]=b["10"])}catch(m){}b&&b.postData&&(c=b.postData)}try{const m=await fetch(a["2"],{method:f,credentials:"include",headers:new Headers(d),body:c});if(m.ok){let y=await m.text();(a.L||function(){})(y)}}catch(m){}}
function U(){this["1"]="GET";this["2"]="";this["3"]="";this["4"]="";this["5"]="";this["6"]="normal";this["7"]=0;this["8"]="";this["9"]="";this["10"]="";this.cookies=this["11"]="";this.postData=null}
function V(){var a=this.constructor.prototype,b;for(b in a)this[b]=a[b].bind(this);this.H={};this.g={};this.j={};this.ga=1;this.s="";this.C=!1;chrome.contextMenus.removeAll();chrome.contextMenus.create({title:"Download by NeatDownloadManager",id:"NDM_CtxMenu",contexts:["link","image"]});this.l(chrome.contextMenus.onClicked,this.X);this.l(chrome.downloads.onCreated,this.Y);this.l(chrome.runtime.onConnect,this.$);this.l(chrome.webRequest.onBeforeRequest,this.T,{urls:["http://*/*","https://*/*","ftp://*/*"],
types:n},["requestBody"]);this.l(chrome.webRequest.onBeforeSendHeaders,this.U,{urls:["https://*/*","http://*/*"],types:n},["requestHeaders"]);this.l(chrome.webRequest.onHeadersReceived,this.W,{urls:["<all_urls>"],types:n},["responseHeaders"]);this.l(chrome.webRequest.onCompleted,this.O,{urls:["<all_urls>"]});this.l(chrome.webRequest.onErrorOccurred,this.O,{urls:["<all_urls>"]});this.l(chrome.webNavigation.onHistoryStateUpdated,this.Z);chrome.action.onClicked.addListener(this.N);this.v=!1;chrome.action.setBadgeBackgroundColor({color:"#FF3333"});
this.N();var c=this;this.F=!0;chrome.storage.local.get(["ShowMediaPanel"],function(d){-1==d.ShowMediaPanel&&(c.F=!1)});this.i=this.G=null;this.D=!1;this.M()}var W=V.prototype;W.N=function(){var a=(this.v=!this.v)?"":"Off";chrome.action.setTitle({title:this.v?"":"Download catcher is Off\r\nClick to toggle catching"});chrome.action.setBadgeText({text:a})};W.Z=function(a){var b=this.g[[a.tabId,a.frameId]];b&&b["2"]!=a.url&&(b.postMessage([11,a.url]),b["2"]=a.url)};
W.Y=function(a){h||!this.v?this.s="":this.s!=a.finalUrl&&this.s!=a.url?this.s="":(this.s="",chrome.downloads.cancel(a.id),chrome.downloads.erase({id:a.id}))};
W.I=async function(a){if(this.D){var b="1:"+a["1"]+"\r\n";b+="2:"+a["2"]+"\r\n";a["3"]&&(b+="3:"+a["3"]+"\r\n");b+="6:"+(a["6"]||"normal")+"\r\n";a["4"]&&(b+="4:"+a["4"]+"\r\n");if(a.pageUrl){var c=a.pageUrl,d="";c&&=c.trim();c&&(d=(new URL(c)).origin);b+="Origin: "+d+"\r\n"}if(a.pageUrl){if(c=a.pageUrl)d=c.lastIndexOf("#"),c=0>d||d<c.indexOf("?")?c:c.substr(0,d);b+="Referer: "+c+"\r\n"}a["5"]&&(b+="5:"+a["5"]+"\r\n");a.cookies&&(b+="Cookie: "+a.cookies+"\r\n");a["10"]&&(b+="Content-Type: "+a["10"]+
"\r\n");a["11"]&&(b+="Content-Disposition: "+a["11"]+"\r\n");a["9"]&&(b+="9:"+a["9"]+"\r\n");for(var e in a)N(e.toLowerCase(),"x-")&&(b+=e+": "+a[e]+"\r\n");"POST"==a["1"]&&(a["7"]&&(b+="7:"+a["7"]+"\r\n"),a["8"]&&(b+="8:"+a["8"]+"\r\n"),b=a.postData?b+("__0NeatPostData9__:"+a.postData):b+"Content-Length: 0\r\n");if(!(118784<b.length))if(a["3"])this.G.send(b),this.i=null;else if("POST"==a["1"]||!this.C||a["7"]&&a["8"])"POST"!=a["1"]&&this.C&&(b+="8:"+a["8"]+"\r\n",b+="7:"+a["7"]+"\r\n"),this.G.send(b),
this.i=null;else try{const f=await fetch(a["2"],{method:"HEAD",credentials:"include"});f.ok&&(a["8"]=a["8"]||f.headers.get("content-type")||"",a["7"]=a["7"]||f.headers.get("Content-Length")||0,b+="8:"+a["8"]+"\r\n",b+="7:"+a["7"]+"\r\n",this.G.send(b),this.i=null)}catch(f){}}else this.i=a,this.M()};W.M=function(){var a=new WebSocket("ws://127.0.0.1:10007/download","neatextension.v1");a.onopen=this.fa;a.onclose=this.ca;a.onmessage=this.ea;a.onerror=this.da;this.G=a};
W.fa=function(){this.D=!0;this.i&&this.I(this.i)};W.ca=function(){this.D=!1;this.i=null};W.ea=function(a){a=a.data;"waiting"==a?this.C=!0:"nowaiting"==a?this.C=!1:!Q(a,"Version")&&N(a,"ShowPanelEdge")&&(a="1"==a.split("=")[1],a!=this.F&&(this.F=a,chrome.storage.local.set({la:a?1:-1},function(){}),this.ha([13,a])))};W.da=function(){this.D=!1;if(this.i){var a=this;chrome.tabs.query({currentWindow:!0,active:!0},function(b){b&&b.length&&(b=a.g[[b[0].id,0]])&&b.postMessage([15])})}this.i=null};
W.J=function(a){if(this.i){var b="";if(a&&0<a.length)for(var c=0;c<a.length;c++)b+=a[c].name+"="+a[c].value+(c<a.length-1?"; ":"");b=b.trim();this.i.cookies=b;this.I(this.i)}};W.X=function(a,b){var c=R(a.linkUrl);!c||"ftp"!=c&&"http"!=c&&"https"!=c||"ftp"==c&&!F(a.linkUrl)||(c=new U,c["2"]=a.linkUrl||a.srcUrl,c.pageUrl=a.pageUrl,c["4"]=b&&b.title||"",b&&b.url&&(c["5"]=b.url),!c["5"]&&(c["5"]=a.pageUrl),this.i=c,chrome.cookies.getAll({url:c["2"]},this.J))};function X(a){this.g=a}var ja=X.prototype;
ja.j=function(a){var b="";if(!a)return b;if((a=a.split(","))&&a.length)for(var c=0;c<a.length;c++){var d=a[c].split("=");d&&2==d.length&&("BANDWIDTH"==d[0].toString().trim()&&(b+=parseInt(parseInt(d[1])/1024)+" Kbps "),"RESOLUTION"==d[0].toString().trim()&&(b+=d[1]+" "))}return b.trim()};
ja.i=function(a,b){var c=[],d=0,e="",f=this;b=b.split(/[\r\n]+/);if(0!=b.length&&"#EXTM3U"==b[0].trim()){for(var g=!1,m=!1,y=!1,p="",t=RegExp("^#(EXT[^\\s:]+)(?::(.*))"),G=1;G<b.length;G++){var k=b[G].trim();k&&("#"==k[0]?0==k.indexOf("#EXT")&&(k=t.exec(k))&&(g||(g="EXTINF"==k[1])&&(p=k[2]),m||(m="EXT-X-STREAM-INF"==k[1])&&(p=k[2]),y||="EXT-X-BYTERANGE"==k[1]):(g&&(d+=parseFloat(p),g=!1),m&&(c.push({2:(new URL(k,a["2"])).href,tags:p}),m=!1),y&&!e&&(e=(new URL(k,a["2"])).href)))}if(e){b="";d&&(60<
d&&(b+=parseInt(d/60)+" min "),b+=parseInt(d%60)&&parseInt(d%60)+" sec");var l={6:"media",fEx:"ts",4:"TS File "+b,fDu:b};l=M(l,{1:a["1"],2:e,tabId:a.tabId,frameId:a.frameId,fS:a["7"],fileName:a.fileName});Y(a,l);"POST"==l["1"]&&T(a,l);setTimeout(function(){f.g.A(l)},2500)}else c.length?setTimeout(function(){for(var B=0;B<c.length;B++)f.g.A(M({tabId:a.tabId,frameId:a.frameId},{1:"GET",2:c[B]["2"],6:"hls",fEx:"ts",4:"TS File "+f.j(c[B].tags)}))},2500):0<d&&(b="",60<d&&(b+=parseInt(d/60)+" min "),b+=
parseInt(d%60)&&parseInt(d%60)+" sec",l={6:"hls",fEx:"ts",4:"TS File "+b,fDu:b},l=M(l,{1:a["1"],2:a["2"],tabId:a.tabId,frameId:a.frameId,fS:a["7"],fileName:a.fileName}),Y(a,l),"POST"==l["1"]&&T(a,l),setTimeout(function(){f.g.A(l)},2500))}};W.A=function(a){var b=this.g[[a.tabId,a.frameId]];if(!b&&(b=this.g[[a.tabId,0]],!b))return;var c=a["2"],d=0,e;var f=0;for(e=c.length;f<e;f++){var g=c.charCodeAt(f);d=(d<<5)-d+g;d|=0}a.id=d;b.postMessage([1,a,b["2"]])};W.O=function(a){delete this.j[a.requestId]};
function ka(a,b){if(!a)return null;var c=a.raw;if(c){a="";for(b=0;b<c.length;b++){var d=c[b].bytes;if(!d)return null;d=new Uint8Array(d);for(var e=d.length,f=0;f<e;f++)a+=String.fromCharCode(d[f])}return a}c=a.formData;if(!c)return null;e=E(b);a=[];e&&=e.toLowerCase();if("application/x-www-form-urlencoded"==e){for(d in c)for(e=c[d],d=d.split(" ").map(encodeURIComponent).join("+"),b=0;b<e.length;b++)a.length&&a.push("&"),a.push(d,"=",e[b].split(" ").map(encodeURIComponent).join("+"));return a.join("")}if("multipart/form-data"==
e){(f=Z(b,"boundary"))||(f="----WebKitFormBoundary"+Math.random().toString(36).substr(2));for(d in c)for(e=c[d],b=0;b<e.length;b++)a.push("--",f,'\r\nContent-Disposition: form-data; name="',d,'"\r\n\r\n',e[b],"\r\n");a.push("--",f,"--\r\n");return a.join("")}return null}
W.V=function(a){if(!("video/webm"!=a["8"].toLowerCase()&&"audio/webm"!=a["8"].toLowerCase()||1>a["2"].indexOf("signature=")&&1>a["2"].indexOf("sig="))){var b=this.g[[a.tabId,a.frameId]];b||=this.g[[a.tabId,0]];if(b){var c=a["2"].indexOf("?");if(-1!=c){var d=a["2"].substring(0,c);c=a["2"].substring(c+1);a={2:"",mme:a["8"].split("/").shift(),ig:0,du:0,mK:"",purl:b["2"]};d+="?";c=c.split("&");for(var e=0;e<c.length;e++)N(c[e],"dur=")&&(a.du=parseFloat(c[e].split("=").pop())),N(c[e],"itag=")&&(a.ig=c[e].split("=").pop()),
N(c[e],"ei=")&&(a.mK=c[e].split("=").pop()),N(c[e],"range=")||N(c[e],"rbuf=")||N(c[e],"rn=")||(d=d+c[e]+"&");a.du&&a.ig&&(d=d.substring(0,d.length-1),a["2"]=d,b.postMessage([9,a]))}}}};
W.W=function(a){var b,c=a.requestId,d=this;if(b=this.j[c]){var e=a.url,f=a.type,g=0<=ba.indexOf(f),m=a.method.toUpperCase(),y=R(e);if(!y||"http"!=y&&"https"!=y||"GET"!=m&&"POST"!=m)delete this.j[c];else{b.B=a.responseHeaders;var p=L(b.B,"Content-Type"),t=E(p).toLowerCase();if("image"==f&&t&&N(t.toLowerCase(),"image/"))delete this.j[c];else{var G=L(b.B,"Content-Disposition"),k="attachment"==E(G).toLowerCase();a=parseInt(a.statusLine.split(" ",2).pop())||0;b.ia=0<=da.indexOf(a);if(!b.ia)if(200!=a&&
206!=a)delete this.j[c];else{a=L(b.B,"Content-Length");var l=L(b.B,"Content-Range"),B=null;l&&(l=aa.exec(l))&&(a=l[1]);a&&(B=parseInt(a));if(0===B)delete this.j[c];else if(b["2"]=e,b["8"]=p,b["7"]=B,b.type=f,b.protocol=y,b["1"]=m,b.S=P(f,"_frame"),f=new URL(e),e=f.hostname,f=f.pathname,(m=f.split("/").pop().trim())&&(m=m.split("?").shift().trim()),b.o=m||"",b.u=K(b.o),b.K=Z(G,"filename")||Z(p,"name"),b.R=b.K&&K(b.K)||"",p=t?D[t]:!1,b.P=(p?p.split("|").shift():"").toLowerCase(),b.h=b.P||b.R||b.u||
"",b.fileName=b.K||b.o||"",b.fileName&&(p=b.fileName.lastIndexOf("."),-1<p&&(b.fileName=b.fileName.substr(0,p).trim())),b.fileName&&b.h&&(b.fileName+="."+b.h),!t&&b.h&&(t=ia(b.h)),p="main_frame"==b.type&&u.test(b.h)&&!C.test(b.h),Q(b.o.toLowerCase(),"manif")||Q(b.o.toLowerCase(),"favicon.ico")||Q(b.o.toLowerCase(),"pem.msg")||P(b.o.toLowerCase(),".wasm")||Q(b.o.toLowerCase(),".json")||Q(b.P.toLowerCase(),"json")||Q(b.R.toLowerCase(),"json")||!(p||"other"==b.type&&u.test(b.h)||(b.S||!g)&&ha.test(b.h)||
(b.S||"other"==b.type)&&(k||ea.test(t)||b.h&&!u.test(b.h)&&!fa.test(b.h))))if(Q(e,"youtube.com")&&Q(f,"api/timedtext")){if(g=b["2"].indexOf("?"),-1!=g){c=b["2"].substring(0,g)+"?";g=b["2"].substring(g+1).split("&");for(t=0;t<g.length;t++)c=N(g[t],"fmt=")?c+"fmt=vtt&":c+g[t]+"&";"&"==c[c.length-1]&&(c=c.substring(0,c.length-1));b["2"]=c;var H={2:b["2"],6:"media",1:b["1"],tabId:b.tabId,frameId:b.frameId,fEx:"VTT",7:b["7"],8:b["8"],fS:b["7"],fileName:b.fileName};setTimeout(function(){d.A(H)},1500)}}else{k=
"vtt"==b.h.toLowerCase()||"vtt"==b.u.toLowerCase()||"srt"==b.h.toLowerCase()||"srt"==b.u.toLowerCase();var O=null;"m3u8"==b.h.toLowerCase()||"m3u8"==b.u.toLowerCase()?O=new X(this):k||"POST"==b["1"]||Q(e.toLowerCase(),"vimeo")||Q(e.toLowerCase(),"youtube")||Q(e.toLowerCase(),"google")||"txt"!=b.h.toLowerCase()&&"js"!=b.h.toLowerCase()||"xmlhttprequest"!=b.type||b["7"]&&307200<b["7"]||(O=new X(this));if(O)S({2:b["2"],L:function(v){O.i(M({},b),v)}},M({},b));else if(g&&P(e,"googlevideo.com")&&N(f,"/videoplayback"))this.V(b);
else if(g&&RegExp("^(?:[w-]+.)*?(?:youtube.com|googlevideo.com|youtube.googleapis.com|docs.google.com)$","i").test(e)){if(P(f,"player")&&"POST"==b["1"]&&0!=b.frameId){T(b,b);var q=b.postData;var r=q.indexOf('"videoId"');if(0>r)return;q=q.substr(r+9);r=q.indexOf('"');if(0>r)return;var I=q.indexOf('"',r+1);if(I<r)return;S({2:"https://www.youtube.com/watch?v="+q.substr(r+1,I-r-1),L:function(v){for(var w=['"formats"',"adaptiveFormats"],z=0;z<w.length;z++)if(q=v,r=q.indexOf(w[z]),!(0>r||-1<q.indexOf("signatureCipher"))){q=
q.substr(r);r=q.indexOf("[");I=q.indexOf("]");if(0>r||0>I||I<=r)break;q=q.substr(r+1,I-r-1);(x=d.g[[b.tabId,b.frameId]])||(x=d.g[[b.tabId,0]]);x&&x.postMessage([7,q,1==z])}}},null)}}else g&&"player.vimeo.com"==e&&N(f,"/video/")&&"application/json"==t?S({2:b["2"],L:function(v){var w=null;try{w=JSON.parse(v)}catch(J){}if(w){var z=w.request.files.progressive;z&&setTimeout(function(){for(var J=0;J<z.length;J++)d.A({1:"GET",2:z[J].url,6:"media",tabId:b.tabId,frameId:b.frameId,fEx:"mp4",4:"MP4 File "+z[J].quality})},
2500)}}},b):!g&&!k||!u.test(b.h)&&!u.test(b.u)||C.test(b.h)||!(!b["7"]||204800<b["7"]||k)||"ASF"==b.h&&1024E3>=b["7"]||"DCLK-AdSvr"==L(b.B,"Server")||(H={2:b["2"],6:"media",1:b["1"],tabId:b.tabId,frameId:b.frameId,fEx:u.test(b.h)?b.h:b.u,7:b["7"],8:b["8"],fS:b["7"],fileName:b.fileName},"POST"==H["1"]&&T(b,H),Y(b,H),setTimeout(function(){d.A(H)},2E3));delete this.j[c]}else{if(h||!this.v)this.s="";else{this.s=b["2"];var x=d.g[[b.tabId,b.frameId]];g=d.g[[b.tabId,0]];var A=M(new U,{2:b["2"],1:b["1"],
4:g&&g["4"]||x&&x["4"],5:g&&g["2"]||x&&x["2"],7:b["7"],8:b["8"],pageUrl:x&&x["2"]||b["2"]});chrome.tabs.query({active:!0,currentWindow:!0},function(v){if(v&&v.length&&(b["2"]==v[0].pendingUrl||b["2"]==v[0].url)&&!A["5"]&&v[0].openerTabId){var w=d.g[[v[0].openerTabId,0]];A["5"]=w&&w["2"];A["4"]=w&&w["4"];u.test(b.h)&&(chrome.tabs.remove(v[0].id),A["6"]="media")}});"POST"==A["1"]&&T(b,A);Y(b,A);d.i=A;chrome.cookies.getAll({url:A["2"]},d.J)}delete this.j[c]}}}}}};
function T(a,b){var c=L(a.m,"Content-Type"),d=L(a.m,"Content-Disposition");a=ka(a.ka,c);if(!a||1>a.length)a=null;b.postData=a;c&&(b["10"]=c.trim());d&&(b["11"]=d.trim())}function Y(a,b){if(a.m)for(var c=0;c<a.m.length;c++)N(a.m[c].name.toLowerCase(),"x-")&&(b[a.m[c].name]=a.m[c].value)}W.U=function(a){if(!(0>a.tabId||0>a.frameId)){var b=this.j[a.requestId];b&&(b.m=a.requestHeaders)}};
W.T=function(a){if(!(0>a.tabId||0>a.frameId))if("ftp"==R(a.url)){if(F(a.url)&&!h){var b=new U,c=this.g[[a.tabId,0]];c&&c["2"]&&(b["5"]=c["2"],b.pageUrl=c["2"]);c&&c["4"]&&(b["4"]=c["4"]);b["2"]=a.url;this.I(b)}}else b=a.requestId,c=this.j[b]||{id:b,2:a.url,tabId:a.tabId,frameId:a.frameId},"POST"==a.method.toUpperCase()&&(c.ka=a.requestBody),this.j[b]=c};
function Z(a,b){if(!a)return null;b=b.toLowerCase();a=a.split(";");a.shift();for(var c=0;c<a.length;c++){var d=a[c],e=d.indexOf("=");if(0<e){var f=d.substr(0,e).trim().toLowerCase(),g="*"==f[f.length-1];g&&(f=f.substr(0,f.length-1).trimRight());if(f==b)return a=d.substr(e+1).trim(),c=a.length-1,'"'==a[0]&&'"'==a[c]&&(a=a.substring(1,c)),g&&(a=a.split("'",3).pop()),unescape(a)}else if(0>e&&d.trim().toLowerCase()==b)return""}return null}W.l=function(a){a.addListener.apply(a,Array.prototype.slice.call(arguments).slice(1))};
W.$=function(a){var b=a.sender.tab;if(b&&0<=b.id){var c=a.sender.frameId,d=a.id||this.ga++,e=b.id;a.id=d;a["4"]=b.title;a.tabId=e;a.frameId=c;a.ja=0==c;a["2"]=a.sender.url||a.ja&&b.url||null;a.onMessage.addListener(this.ba.bind(this,a));a.onDisconnect.addListener(this.aa.bind(this,a));this.H[d]=a;this.g[[e,c]]=a;a.postMessage([3,a.id]);a.postMessage([13,this.F]);a.sender=null}};
W.ba=function(a,b){switch(b[0]){case 2:var c=b[2],d=b[3];(a=this.H[b[1]])&&c&&(a["2"]=c);a&&d&&(a["4"]=d);break;case 4:h=b[1];break;case 6:c=b[1];a=(a=a.tabId)&&this.g[[a,0]];var e=new U;e["1"]=c["1"]||"GET";e["2"]=c["2"];c["3"]&&(e["3"]=c["3"]);e.pageUrl=b[2];e["4"]=b[3]||a&&a["4"]||"";e["5"]=a&&a["2"]||e.pageUrl;e["9"]=b[4];c["7"]&&(e["7"]=c["7"]);c["8"]&&(e["8"]=c["8"]);e["6"]=c["6"]||"media";!c.fEx||"vtt"!=c.fEx.toLowerCase()&&"srt"!=c.fEx.toLowerCase()||(e["6"]="normal");c.postData&&(e.postData=
c.postData);c["10"]&&(e["10"]=c["10"]);c["11"]&&(e["11"]=c["11"]);for(d in c)N(d.toLowerCase(),"x-")&&(e[d]=c[d]);this.i=e;chrome.cookies.getAll({url:e["2"]},this.J)}};W.aa=function(a){for(var b in this.g)this.g[b]==a&&delete this.g[b];delete this.H[a.id]};W.ma=function(a,b){var c=this.g;a=a.toString()+",";for(var d in c)N(d,a)&&c[d].postMessage(b)};W.ha=function(a){var b=this.g,c;for(c in b)b[c].postMessage(a)};new V;