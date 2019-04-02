



document.getElementById('change-theme-btn').addEventListener('click', function () {

 let darkThemeEnabled = document.body.classList.toggle('dark-theme');
 localStorage.setItem('dark-theme-enabled', darkThemeEnabled);

  document.querySelector('.headers').classList.toggle('dark-theme');

  document.querySelector('.para').classList.toggle('dark-theme');

  document.querySelector('.tools1').classList.toggle('dark-theme');

  document.querySelector('.tools2').classList.toggle('dark-theme');

  document.querySelector('.para1').classList.toggle('dark-theme');

  document.querySelector('.para2').classList.toggle('dark-theme');

  document.querySelector('.link1').classList.toggle('dark-theme');

  document.querySelector('.link2').classList.toggle('dark-theme');

  document.querySelector('.link3').classList.toggle('dark-theme');

  document.querySelector('.link4').classList.toggle('dark-theme');

  document.querySelector('.letsChat').classList.toggle('dark-theme');

  document.querySelector('.about-image').classList.toggle('greyscale');
});

if (JSON.parse(localStorage.getItem('dark-theme-enabled'))) {
    document.body.classList.add('dark-theme');
  }

  function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
