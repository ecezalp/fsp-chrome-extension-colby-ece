document.addEventListener('DOMContentLoaded', function() {

  var testButton = $('#test-alert');
  var obj = $.get('http://catfacts-api.appspot.com/api/facts')
  var audio = new Audio()
  audio.src = "assets/audio/meow.mp3"

  localStorage.getItem("button") ? testButton.val(localStorage.getItem("button")) : localStorage.setItem("button", "I thirst for knowledge!")

  testButton.click(function() {

    if (localStorage.getItem("button") === "I thirst for knowledge!") {
      chrome.alarms.create("cat facts", {periodInMinutes: .09})
      toggleStorageAndButton()
    }

    else if (localStorage.getItem("button") === "Make it stop!") {
    chrome.alarms.clear("cat facts")
    toggleStorageAndButton()
    }
  });

  function toggleStorageAndButton () {
    if (localStorage.getItem("button") === "I thirst for knowledge!") {
      localStorage.setItem("button", "Make it stop!")
      testButton.attr("value", "Make it stop!")
    }
    else if (localStorage.getItem("button") === "Make it stop!") {
      localStorage.setItem("button", "I thirst for knowledge!")
      testButton.attr("value", "I thirst for knowledge!")
    }
  }

  chrome.alarms.onAlarm.addListener(function(alarm){
    audio.play();
    alert(catFactAlertMessages())
    refreshObject();
  });

  function refreshObject() {
    obj = null
    obj = $.get('http://catfacts-api.appspot.com/api/facts')
    return obj
  };

  function catFactAlertMessages(){
    respText = obj.responseText
    fact = JSON.parse(respText).facts[0]
    return fact
  }

});
