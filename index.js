const displayElem = document.querySelector('h4');
const refreshElem = document.querySelector('button');

refreshElem.addEventListener('click', () => {
    chrome.windows.getLastFocused(
        {populate: false}, 
        function(currentWindow) {
            displayElem.innerHTML = `${currentWindow.width} x ${currentWindow.height}`;
        }
    ); 
})

