(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){

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

window._tog = false
function _close (el) {
    document.getElementById("topbar").classList.remove("topbar_expand");
    document.getElementById("header").classList.remove("shrink");
    document.getElementById("topbar").classList.remove("topbar_shrink");
    document.getElementById("header").classList.remove("expand");

    if (window._tog) {
      document.getElementById("topbar").classList.add("topbar_shrink");
      document.getElementById("header").classList.add("expand");

    } else {
      document.getElementById("topbar").classList.add("topbar_expand");
      document.getElementById("header").classList.add("shrink");
    }
    window._tog = !window._tog;    
}
window._close = _close;

function place_header() {

var body  = document.getElementsByTagName('body')[0];
var tb = document.createElement('div');
tb.id = "topbar";
tb.class = "topbar";
tb.innerHTML = 'Hello there <button onclick="window._close(this)">close</button> topbar';

body.insertBefore(tb, body.firstChild);
}

load_css()
place_header()
document.write('hey');



},{}]},{},[1]);
