'use strict';

const notifierContainer = document.createElement('div');
notifierContainer.classList.add('notifier-container');
document.body.append(notifierContainer);

const addNotification = () => {
    notifierContainer.insertAdjacentHTML('beforeend', `
        <div class="notifier">
            <button class="notifier-close" type="button">x</button>
            <h2 class="notifier-title">Reminder!</h2>
            <div class="notifier-body">You have a meeting at 10:30</div>
        </div>`
    );

    setTimeout(() => {
        notifierContainer.lastElementChild.classList.add('shown');
    }, 0);

    notifierContainer.lastChild.querySelector('.notifier-close').addEventListener('click', (event) => {
        const parentNotifier = event.currentTarget.closest('.notifier');
        parentNotifier.classList.remove('shown');

        setTimeout(() => {
            parentNotifier.remove();
        }, 0);
    });


};

const btn = document.querySelector('[data-notifier]');
btn.addEventListener('click', () => {
    addNotification();
});
