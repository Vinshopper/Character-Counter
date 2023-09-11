const txt1 = document.getElementById('tbuser');
const btn1 = document.getElementById('btn1');
const out1 = document.getElementById('output1');

//Updates character count based on user's input
function updateCharacterCount() {
    const charCount = txt1.value.length;
    let message;

    if (charCount === 1) {
        message = `${charCount} character entered.`;
    } else if (charCount === 0) {
        message = `No characters entered.`;
    } else {
        message = `${charCount} characters entered.`;
    }

    out1.innerHTML = message;
}

btn1.addEventListener('click', updateCharacterCount);

// Initializes the count when the page loads
updateCharacterCount();

// Capture 'Enter' and 'Shift + Enter' key presses
txt1.addEventListener('keydown', function (kdE) {
    if (kdE.key === 'Enter' && !kdE.shiftKey) {
        kdE.preventDefault();
        updateCharacterCount();
    } else if (kdE.key === "Tab") {

        // Prevent the tab key from focusing out of the textarea
        kdE.preventDefault();

        let start = this.selectionStart;
        let end = this.selectionEnd;

        this.value = this.value.substring(0, start) + "    " + this.value.substring(end);
        this.selectionStart = this.selectionEnd = start + 4;
    }
});

// Auto-expands the textarea based on content
txt1.addEventListener('input', function () {
    this.style.height = 'auto';
    this.style.height = (this.scrollHeight) + 'px';
});
