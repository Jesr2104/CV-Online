// function to resize the main boxe on the screen
function setSizeScreen(){
    /*const block1 = document.getElementById('main-header')
    const block2 = document.getElementById('main-content')
    const mainBody = document.getElementById('bodyContainer')
    block2.style.height = ((mainBody.offsetHeight - 30) - block1.offsetHeight) + 'px'*/

    const title = document.getElementById('title')
    const mainBody = document.getElementById('container')
    const pdfviewer = document.getElementById('pdfviewer')

    console.log(title.offsetHeight)
    pdfviewer.style.height = ((mainBody.offsetHeight - 30 ) - title.offsetHeight) + 'px'
}

// event to check when the web is resize
window.addEventListener('resize', setSizeScreen);

// Functions main call  -------------------->>>>
setSizeScreen()