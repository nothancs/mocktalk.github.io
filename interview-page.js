var recognition, isRecording = false

function startRecording() 
{
   const muteButton = document.getElementById("mute-button");
   const result = document.querySelector(".textbox-answer");
   result.value = "";
 
   if (!isRecording) 
   {
     muteButton.className = "bi-mic";
 
     isRecording = true;
 
     recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
     recognition.interimResults = true;
     recognition.lang = "en-US"; // stick with only english for now
 
     recognition.onresult = (event) => 
     {
       const transcript = event.results[event.results.length - 1][0].transcript;
       result.value = transcript; // assign transcript to textbox-answer.value
     };
 
     recognition.onspeechend = () => // update values when speech recognition stops picking up audio
     {
       if (isRecording)
       {
         isRecording = false;
       }
       muteButton.className = "bi-mic-mute";
     };

     recognition.start();
  }
}