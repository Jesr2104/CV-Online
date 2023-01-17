// function to resize the main boxe on the screen
function setSizeScreen(){
    const title = document.getElementById('title')
    const mainBody = document.getElementById('container')
    const pdfviewer = document.getElementById('pdfviewer')

    pdfviewer.style.height = ((mainBody.offsetHeight - 30 ) - title.offsetHeight) + 'px'
}

// event to check when the web is resize
window.addEventListener('resize', setSizeScreen);

// Functions main call  -------------------->>>>
setSizeScreen()