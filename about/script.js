
function myFunction(x) {
  x.classList.toggle("change");
}


document.getElementById('change-theme-btn').addEventListener('click', function() {
  document.body.classList.toggle('dark-theme');
});
