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


// copy url and get modal
window.onload = function() {
  // Get the modal
  var modal = document.getElementById("myModal");

  // Get the button that opens the modal
  var urlField = document.getElementById("siteUrl");

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];

  // When the user clicks the button, open the modal 
  urlField.onclick = function() {
    urlField.select();
    document.execCommand("copy");
    modal.style.display = "block";
  }

  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
    modal.style.display = "none";
  }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
}