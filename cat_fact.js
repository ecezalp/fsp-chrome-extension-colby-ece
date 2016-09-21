document.addEventListener('DOMContentLoaded', function() {

  var factButton = $('#facts');
  var muteButton = $('#mute')
  var obj = $.get('http://catfacts-api.appspot.com/api/facts')
  var audio = new Audio()
  audio.src = "assets/audio/meow.mp3"

  // Set local storage and button values
  localStorage.getItem("button") ? factButton.val(localStorage.getItem("button")) : localStorage.setItem("button", "I thirst for knowledge!")
  localStorage.getItem("muteButton") ? muteButton.val(localStorage.getItem("muteButton")) : localStorage.setItem("muteButton", "mute")

  // mute listener
  muteButton.click(function() {
    toggleStorageAndMute()
  })

  // fact listener
  factButton.click(function() {
    if (localStorage.getItem("button") === "I thirst for knowledge!") {
      chrome.alarms.create("cat facts", {periodInMinutes: 15})
      toggleStorageAndFacts()
    }
    else if (localStorage.getItem("button") === "Make it stop!") {
    chrome.alarms.clear("cat facts")
    toggleStorageAndFacts()
    }
  });


  function toggleStorageAndMute() {
    if (localStorage.getItem("muteButton") === "mute") {
      localStorage.setItem("muteButton", "meow!")
      muteButton.attr("value", "meow!")
    }
    else if (localStorage.getItem("muteButton") === "meow!") {
      localStorage.setItem("muteButton", "mute")
      muteButton.attr("value", "mute")
    }
  }

  function toggleStorageAndFacts() {
    if (localStorage.getItem("button") === "I thirst for knowledge!") {
      localStorage.setItem("button", "Make it stop!")
      factButton.attr("value", "Make it stop!")
    }
    else if (localStorage.getItem("button") === "Make it stop!") {
      localStorage.setItem("button", "I thirst for knowledge!")
      factButton.attr("value", "I thirst for knowledge!")
    }
  }
  //Listens for alarms and retrieves fact
  chrome.alarms.onAlarm.addListener(function(alarm){
    if (localStorage.getItem("muteButton") === "mute") {
      audio.play();
    }
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
