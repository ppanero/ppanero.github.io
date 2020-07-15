window.addEventListener('load', function () {
  var arrow = document.querySelector('.arrow');

  arrow.animate([
    {right: '0'},
    {right: '50px'},
    {right: '0'}
  ],{
    duration: 1200,
    iterations: 5
  });
})