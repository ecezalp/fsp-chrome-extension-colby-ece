document.addEventListener('DOMContentLoaded', function() {
  var goButton = document.getElementById('get-alert');
  var stopButton = document.getElementById('stop-alert');

  goButton.addEventListener('click', function() {
    chrome.alarms.create("cat facts", {periodInMinutes: 0.05})
  });

  stopButton.addEventListener('click', function() {
    chrome.alarms.clear("cat facts")
  });

});

var message = function(){
  // this part is not ready, the code starting line 28 is the test for it
  jQuery.get('http://catfacts-api.appspot.com/api/facts', function(data){
    data.responsetext
  })
};

chrome.alarms.onAlarm.addListener(function(alarm){
  message()
});


// test for message function
  jQuery.get('http://catfacts-api.appspot.com/api/facts', 
    function(data, success, object){
    return object.responseText
    });
