window.onload=function(){
var main = document.getElementById('main');
if(main) {
main.addEventListener('click', function(event) {
  alert('I was clicked!');
});
}

const input = document.querySelector('input');

input.addEventListener('keydown', function(e) {
  console.log(e.key);
});
}
