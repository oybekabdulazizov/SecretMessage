document.querySelector('form').addEventListener('submit', event => {
    event.preventDefault();
    const messageInput = document.querySelector('#message-input');

    const encryptedLink = btoa(messageInput.value);

    document.querySelector('#link-input').value = encryptedLink;
});