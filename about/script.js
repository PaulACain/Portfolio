
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
};

function mFunction() {
  document.getElementById("myDropdown").classList.toggle("show");

document.getElementById('change-theme-btn').addEventListener('click', function() {
  document.body.classList.toggle('dark-theme');
});


//function myFunction(x) {
  x.classList.toggle("change");
};
