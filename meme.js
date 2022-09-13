const outputContainer = document.querySelector(".output-container")

    
document.querySelector("#input-form").addEventListener('submit', function (e) {
    e.preventDefault()
    const url = document.querySelector("#url")
    const topText = document.querySelector("#top-text")
    const bottomText = document.querySelector("#bottom-text")
    let errorMessage =document.querySelector(".error__message")
    //check that the inputs are filled in
    if (!url.value && !topText.value && !bottomText.value) {
        errorMessage.innerText = "You're not making anything right now. Give me an image and text please."
        
    } else if (!url.value) {
        errorMessage.innerText = "A meme needs an image dude."
    }else if(!topText.value && !bottomText.value){
        errorMessage.innerText = "Make me funny, give me some text!"
        
    } else{
    
        //is there a point in setting variables? Or just get the dom elements when we need it?
        //is it not efficient to get the dom variables all the time?
        const output = document.createElement('div')
        const outputOverlay = document.createElement('div')
        const outputOverlayText = document.createElement('span')
        const pic = document.createElement('img')
        const text1 = document.createElement('span')
        const text2 = document.createElement('span')
 
        output.className = "output-container__output"
        outputContainer.append(output)
        outputOverlay.classList.add("output-container__outputOverlay")
        outputOverlay.classList.add("removable")
        output.append(outputOverlay)
        outputOverlayText.innerText = "X"
        outputOverlayText.classList.add("output-container__outputOverlay__text")
        outputOverlayText.classList.add("removable")
        outputOverlay.append(outputOverlayText)
        pic.src = url.value
        pic.className = "meme-img"
        pic.alt = "Meme"
        text1.innerText = topText.value
        text1.classList.add('output-container__output__text')
        text1.classList.add('output-container__output__text-top')
        text2.innerText = bottomText.value
        text2.classList.add('output-container__output__text')
        text2.classList.add('output-container__output__text-bottom')
        output.append(pic)
        output.append(text1)
        output.append(text2)
    }
})

outputContainer.addEventListener("click", function (e) {
    let currentElement = e.target

    if (currentElement.classList.contains("removable")) {
        //find the top most element and remove it
        while (currentElement.classList.contains("removable")) {
            currentElement = currentElement.parentElement
        }
        currentElement.remove()
    }
})