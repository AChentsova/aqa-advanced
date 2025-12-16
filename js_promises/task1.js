function delayedText(text, delay) {
    setTimeout(() => {console.log(text)}, delay);
}

delayedText("Hello, World!", 5000);