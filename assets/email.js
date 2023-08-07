document.getElementById('email').addEventListener("click", function() {
  var reveal = document.getElementById('reveal');
  if (reveal.innerHTML === '') {
    reveal.innerHTML = 'sultamuratov.r [at] gmail [dot] com';
  } else {
    reveal.innerHTML = '';
  }
});