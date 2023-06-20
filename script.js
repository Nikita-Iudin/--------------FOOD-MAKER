var toggleButton = document.getElementById('toggleButton');
var hiddenBlock = document.getElementById('hiddenBlock');

toggleButton.addEventListener('click', function() {
  hiddenBlock.classList.toggle('visible'); // Добавляем или удаляем класс "visible"
}); 

