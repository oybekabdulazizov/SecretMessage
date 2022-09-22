document.querySelector('form').addEventListener('submit', event => {
    event.preventDefault();
    const messageInput = document.querySelector('#message-input');

    const encryptedMessage = btoa(messageInput.value);
    const linkInput = document.querySelector('#link-input');
    linkInput.value = `${window.location}/${encryptedMessage}`;
    linkInput.select();
});