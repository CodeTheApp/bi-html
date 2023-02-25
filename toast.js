const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  // show toast
  myFunction();
});

function myFunction() {
  // Get the snackbar DIV
  var x = document.getElementById('snackbar');

  // Add the "show" class to DIV
  x.className = 'show';

  // After 3 seconds, remove the show class from DIV
  setTimeout(function () {
    x.className = x.className.replace('show', '');
    form.reset();
  }, 3000);
}
