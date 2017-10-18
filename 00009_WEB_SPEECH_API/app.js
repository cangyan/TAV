var btn = document.getElementById('btn');
var content = document.getElementById('content');

var speech = new webkitSpeechRecognition();

speech.lang = "ch";

btn.addEventListener('click', function() {
    speech.start();
});

speech.addEventListener('result', function(e) {
    console.log(e);
    var text = e.results[0][0].transcript;
    getTextContents(text);
});
function getTextContents(text) {
    content.innerHTML = '<p>结果:</p>' +
        '<input type="text" value="' + text + '">';
}