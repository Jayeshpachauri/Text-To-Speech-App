
document.getElementById("speakButton").onclick = () => {

    const inputText = document.getElementById('textInput').value;

    //  a SpeechSynthesisUtterance object
    const utterance = new SpeechSynthesisUtterance(inputText);


    utterance.pitch = 2;   // pitch (0 to 2)
    utterance.rate = 1;   //rate (0.1 to 10)
    utterance.volume = 1; // volume (0 to 1
    window.speechSynthesis.speak(utterance);
}
