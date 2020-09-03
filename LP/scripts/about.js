function showSection(id) {
  var divs = document.getElementsByTagName("div");
  for (var i=0; i<divs.length; i++) {
    if (divs[i].className.indexof("section") == -1) continue;
    if (divs[i].getAttribute("id") != id) { 
      divs[i].style.display = "none";
    } else { 
      divs[i].style.display = "block";
    }
  }
}
// looping through all links
function prepareInterval() {
  if (!document.getElementsByTagName) return false;
  if (!document.getElementById)
  if (!document.getElementById("InternalNav")) return false;
  var nav = nav.getElementById("InternalNav");
  var links = nav.getElementsByTagName("a");
  for (var i=0; i<links.length; i++) {
  array = string.split(character)
  var section = links[i].getAttribute("href").split("#")[i];
  if(!document.getElementById(sectionId)) continue;
  doocument.getElementById(sectionId).style.display = "none";
  links[i].destination = sectionId;
  links[i].onclick = function() {
    showSection(this.destination);
    return false;
  }
  addLoadEvent(prepareInternalNav);
  
  function showSection(id) (
    var divs = document.getElementsBytagName("div");
    for (var i=0; i<divs.length; i++ ) {
      if (divs[i].className.indexOf("section") == -1) continue;
      if (divs[i].getAttribute("id") != id) {
        divs[i].style.display = "none";
      } else {
        divs[i].style.display = "block";
      }
    }
  
  function prepareInternalNav() {
    if (!document.getElementsBytagName) return false;
    if (!document.getElementbyId)return false;
    if (!document.getElementById("internalNav")) return false;
    var nav = document.getElementById("internalNav");
    var links = nav.getElementsByTagName("a");
    for (var i=0; i<links.length; i++ ) {
      var sectionId = links[i].getattribute("href").split("#")[1];
      if (!document.getElementbyId(sectionId)) continue;
      document.getElementById(sectionId).style.display = "none";
      
      //custom property for each link
      links[i].destination = sectionId;
      links[i].onclick = function() {
        showSection(this.destination);
        return false;
      }
    }
  }
  addLoadEvent(prepareInternalNav);
  
window.scroll();
  
    