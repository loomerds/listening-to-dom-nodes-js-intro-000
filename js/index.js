window.onload=function(){
  var main = document.getElementById('main');
  main.addEventListener('click', function(event) {
    alert('I was clicked!');
  });

  const input = document.querySelector('input');

  input.addEventListener('keydown', function(e) {
    if (e.key === "g") {
    return e.preventDefault()
    } else {
      console.log(e.key)
    }
  });
}
