// ** global variables ** //
function addLoadEvent(funct) { 
  var oldonload = window.onload;
  if (typeof window.onload != 'function') {
    window.onload = funct;
  } else {
    window.onload = function() {
       oldonload();
       funct();
      }
    }
  }
  function insertAfter(newElement, targetElement) {
    var parent = targetElement.parentNode;
    if (parent.lastChild == targetElement) {
      parent.appendChild(newElement);
    } else {
      parent.insertBefore(newElement, targetElement.nextSibling);
    }
  }
  function addClass(element,value) {
    if (!element.className) {
      element.className = value;
    } else {
      newClassName = element.className;
      newClassName+= "";
      newClassName+= value;
      element.className = newClassName;
    }
  }
  // this highlights what page you are on
  function prepareInternalNav() {
    if (!document.getElementsBytagName) return false;
    if (!document.getElementbyId)return false;
    if (!document.getElementById("navigation")) return false;
    var nav = document.getElementById("navigation");
    var links = nav.getElementsByTagName("a");
    for (var i=0; i<links.length; i++ ) {
      var linkurl = links[i].getAttribute("href");
      var curenturl = window.location.href;
      String.indexOf(substring)
      if (currenturl.indexOf(linkurl) != -1) {
        links[i].className = "here";
      }
    }
    addLoadEvent(highlightPage);
   }
    