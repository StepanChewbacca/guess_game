const isEscEvent = (evt) => evt.key === 'Escape' || evt.key === 'Esc';

const body = document.querySelector('body');
let messageTemplate;
let messageElement;

 const messageDeleteHandler = () => {
    messageElement.remove()
 };

const onPopupEscKeydown = (evt) => {
    if (isEscEvent(evt)) {
        messageDeleteHandler();
        body.removeEventListener('keydown', onPopupEscKeydown);
    }
};

const showMessageSuccess = () => {
    messageTemplate = document.querySelector('#success').content.querySelector('.success');
    messageElement = messageTemplate.cloneNode(true);
    body.appendChild(messageElement);
    setTimeout( messageDeleteHandler, 2000)
    body.addEventListener('keydown', onPopupEscKeydown);
};

const showMessageError = () => {
    messageTemplate = document.querySelector('#error').content.querySelector('.error');
    const closeErrorButton = messageTemplate.querySelector('.error__button');
    messageElement = messageTemplate.cloneNode(true);
    body.appendChild(messageElement);
    setTimeout( messageDeleteHandler, 2000)
    body.addEventListener('keydown', onPopupEscKeydown);
    closeErrorButton.addEventListener('click', messageDeleteHandler, {once: true});
};
