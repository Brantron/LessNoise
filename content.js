console.log(window.location);
if(window.location.href.indexOf("?w=1") == -1 ) {
  window.location.replace(window.location.href += "?w=1");
}
