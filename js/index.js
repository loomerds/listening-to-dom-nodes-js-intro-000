var main = document.getElementById('#main');
console.log(main);
if(main) {
main.addEventListener('click', function(event) {
  alert('I was clicked!');
});
}
