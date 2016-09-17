document.addEventListener('DOMContentLoaded', function() {
  var button = document.getElementById('cat-alert');
  button.addEventListener('click', function() {

    function myAlert(message) {
      alert(message)
    }

    function alerter(){
      setTimeout(myAlert("hello"), 3000);
    }
    alerter()

  });
});
