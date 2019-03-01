//require('@atlaskit/dropdown-menu')

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
window.click_item = (e) => {
  alert("Item = "+e);
}

var icon_chevron_down = '<svg width="20" height="20" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M941 1299l454-454q19-19 19-45t-19-45l-102-102q-19-19-45-19t-45 19l-307 307-307-307q-19-19-45-19t-45 19l-102 102q-19 19-19 45t19 45l454 454q19 19 45 19t45-19zm723-403q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z" fill="#fff"/></svg>';
var icon_black_bars = '<svg width="20" height="20" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z"/></svg>';
var icon_white_times_circle = '<svg width="14" height="14" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M1277 1122q0-26-19-45l-181-181 181-181q19-19 19-45 0-27-19-46l-90-90q-19-19-46-19-26 0-45 19l-181 181-181-181q-19-19-45-19-27 0-46 19l-90 90q-19 19-19 46 0 26 19 45l181 181-181 181q-19 19-19 45 0 27 19 46l90 90q19 19 46 19 26 0 45-19l181-181 181 181q19 19 45 19 27 0 46-19l90-90q19-19 19-46zm387-226q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z" fill="#fff"/></svg>';
var icon_black_caret_down = '<svg width="14" height="14" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M1408 704q0 26-19 45l-448 448q-19 19-45 19t-45-19l-448-448q-19-19-19-45t19-45 45-19h896q26 0 45 19t19 45z"/></svg>';

var items = ["Gateway", "Keycloak", "Gitea", "Go.CD", "Kubernetes", "Grafana", "Vault", "Consul"];

var menu_items = "";
for (i in items ) {
  menu_items += '<span class="topbar-menu-item" onClick="window.click_item(\'' + items[i] + '\')">' + items[i] + ' ' + icon_black_caret_down + '</span>';
}

function place_header() {

var body  = document.getElementsByTagName('body')[0];
var tb = document.createElement('div');
tb.id = "topbar";
tb.class = "topbar";
tb.innerHTML = '<span class="topbar-title">' + '23432432.xyz' + '</span> ' + menu_items + '';
// <span onclick="window._close(this)" class="topbar">' + icon_white_times_circle + '</span> 
// <span class="topbar-title">https://my-project.swes.xyz</span> 
body.insertBefore(tb, body.firstChild);
}

function place_icon() {

var body  = document.getElementById('header');
//var body  = document.getElementsByTagName('body')[0];
var tb = document.createElement('span');
tb.id = "topbar_icon";
tb.class = "topbar";
tb.zIndex = "1000";
tb.innerHTML = '<span onclick="window._close(this)" class="topbar topbar_toggle">' + icon_black_bars + '</span> ';

body.insertBefore(tb, body.firstChild);
//body.appendChild(tb);
}
load_css()
place_header()
place_icon()
//document.write('hey');


// each app will have a plugin for integration
// Need to retrieve menu options

// document.getElementsByTagName("head")[0].insertAdjacentHTML(
// "beforeend",
// "<link rel=\"stylesheet\" href=\"path/to/style.css\" />");
