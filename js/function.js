document.addEventListener('DOMContentLoaded', function () {
  const button = document.querySelector('.hButton');
  button.addEventListener('click', function () {
    button.classList.toggle('active');
  });
});
