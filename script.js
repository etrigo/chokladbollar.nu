// tabs script
function openContent(evt, contentName) {
  var tabcontent, i, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(contentName).style.display = "block";
  evt.currentTarget.className += " active";
}


// copy url and open modal
/*function copyFunction() {
  document.getElementById("siteUrl").select();
  document.execCommand("copy");*/

function copyFunction() {
  var siteUrl = document.createElement("input"),
    text = window.location.href;
  
  document.body.appendChild(siteUrl);
  siteUrl.value = text;
  siteUrl.select();
  document.execCommand("copy");
  document.body.removeChild(siteUrl);
  var modal = document.getElementById("myModal");
  var span = document.getElementsByClassName("closeModal")[0];
  modal.style.display = "block";
  span.onclick = function() {
    modal.style.display = "none";
  }
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
}


/*// side nav script
function openNav() {
  document.getElementById("mySideNav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySideNav").style.width = "0";
}*/
