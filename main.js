
function load_css() {

var cssId = 'myCss';  // you could encode the css path itself to generate id..
if (!document.getElementById(cssId))
{
    var head  = document.getElementsByTagName('head')[0];
    var link  = document.createElement('link');
    link.id   = cssId;
    link.rel  = 'stylesheet';
    link.type = 'text/css';
    link.href = 'stylesheet.css';
    link.media = 'all';
    head.appendChild(link);
}

}

window._tog = true
function _close (el) {
    document.getElementById("topbar").classList.remove("topbar_expand");
    document.getElementById("topbar").classList.remove("topbar_shrink");
    document.getElementById("header").classList.remove("shrink");
    document.getElementById("header").classList.remove("expand");
    document.getElementById("body").classList.remove("xshrink");
    document.getElementById("body").classList.remove("xexpand");

    if (window._tog) {
      document.getElementById("topbar").classList.add("topbar_expand");
      document.getElementById("header").classList.add("expand");
      document.getElementById("body").classList.add("xexpand");

    } else {
      document.getElementById("topbar").classList.add("topbar_shrink");
      document.getElementById("header").classList.add("shrink");
      document.getElementById("body").classList.add("xshrink");
    }
    window._tog = !window._tog;    
}
window._close = _close;

function place_header() {

var body  = document.getElementsByTagName('body')[0];
var tb = document.createElement('div');
tb.id = "topbar";
tb.class = "topbar";
tb.innerHTML = 'Hello there <span style="width:40px"><svg width="20" height="20" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M941 1299l454-454q19-19 19-45t-19-45l-102-102q-19-19-45-19t-45 19l-307 307-307-307q-19-19-45-19t-45 19l-102 102q-19 19-19 45t19 45l454 454q19 19 45 19t45-19zm723-403q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z" fill="#fff"/></svg></span><button onclick="window._close(this)">close</button> topbar';

body.insertBefore(tb, body.firstChild);
}

function place_icon() {

var body  = document.getElementsByTagName('body')[0];
var tb = document.createElement('div');
tb.id = "topbar_icon";
tb.class = "topbar";
tb.zIndex = "1000";
tb.innerHTML = '<button onclick="window._close(this)">close</button> ';

body.appendChild(tb);
}
load_css()
place_header()
place_icon()
//document.write('hey');


