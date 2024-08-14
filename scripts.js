
document.getElementById('encryptBtn').addEventListener('click', () => {
    const inputText = document.getElementById('inputText').value;
    const encryptedText = encrypt(inputText);
    displayMessage(encryptedText);
});

document.getElementById('decryptBtn').addEventListener('click', () => {
    const inputText = document.getElementById('inputText').value;
    const decryptedText = decrypt(inputText);
    displayMessage(decryptedText);
});

function encrypt(text) {
    return text.split('').reverse().join(''); 
}

function decrypt(text) {

    return text.split('').reverse().join(''); 
}

function displayMessage(message) {
    const outputSection = document.querySelector('.output-message');
    outputSection.innerHTML = `<p>${message}</p>`;
}
