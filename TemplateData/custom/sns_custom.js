// Example JavaScript injection to change the file name
window.addEventListener("zappar-sns-ready", function(){
    var saveButton = document.getElementById('zapparSaveButton');
    if(saveButton){
         saveButton.setAttribute('download', 'MyCustomVideoName.mp4');
    }
});
