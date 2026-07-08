const navToggle = document.querySelector('.nav-toggle');
const navList = document.querySelector('.nav__list');

if (navToggle && navList) {
    navToggle.addEventListener('click', () => {
        const expanded = navToggle.getAttribute('aria-expanded') === 'true';
        navToggle.setAttribute('aria-expanded', String(!expanded));
        navList.classList.toggle('open');
    });
}

const WHATSAPP_NUMBER = '5544997670805';
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}`;
const WHATSAPP_BUBBLE_MESSAGE = '👋 Olá! Como posso ajudar?';
const BUBBLE_DELAY_MS = 5000;
const BUBBLE_SHOW_MS = 10000;

const yearSpan = document.getElementById('year');
if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
}

const whatsappButton = document.querySelector('.whatsapp-float__button');
const whatsappBubble = document.querySelector('.whatsapp-bubble');
const whatsappBubbleText = document.querySelector('.whatsapp-bubble__text');
const whatsappBubbleClose = document.querySelector('.whatsapp-bubble__close');

if (whatsappButton) {
    whatsappButton.href = WHATSAPP_LINK;
}

if (whatsappBubbleText) {
    whatsappBubbleText.textContent = WHATSAPP_BUBBLE_MESSAGE;
}

let bubbleTimer;
let bubbleAutoHideTimer;

const hideWhatsappBubble = () => {
    if (!whatsappBubble) return;
    whatsappBubble.classList.remove('whatsapp-bubble--visible');
    whatsappBubble.setAttribute('aria-hidden', 'true');
    if (bubbleTimer) clearTimeout(bubbleTimer);
    if (bubbleAutoHideTimer) clearTimeout(bubbleAutoHideTimer);
};

const showWhatsappBubble = () => {
    if (!whatsappBubble) return;
    whatsappBubble.classList.add('whatsapp-bubble--visible');
    whatsappBubble.setAttribute('aria-hidden', 'false');
    bubbleAutoHideTimer = setTimeout(hideWhatsappBubble, BUBBLE_SHOW_MS);
};

if (whatsappBubble && whatsappBubbleClose) {
    bubbleTimer = setTimeout(showWhatsappBubble, BUBBLE_DELAY_MS);
    whatsappBubbleClose.addEventListener('click', hideWhatsappBubble);
}