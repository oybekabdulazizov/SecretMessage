document.querySelector('form').addEventListener('submit', event => {
    event.preventDefault();

    document.querySelector('#message-form').classList.add('hide');
    document.querySelector('#link-form').classList.remove('hide');

    const messageInput = document.querySelector('#message-input');
    const encryptedMessage = btoa(messageInput.value);

    const linkInput = document.querySelector('#link-input');
    linkInput.value = `${window.location}#${encryptedMessage}`;
    linkInput.select();
    console.log(window.location);
});