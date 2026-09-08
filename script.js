
const nav = document.querySelector('.nav');
const toggle = document.querySelector('.menu-toggle');

toggle?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(open));
});

document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    toggle?.setAttribute('aria-expanded', 'false');
  });
});

document.getElementById('year').textContent = new Date().getFullYear();

function handleLead(event) {
  event.preventDefault();

  const name = document.getElementById('name').value.trim();
  const goal = document.getElementById('goal').value;
  const phone = document.getElementById('phone').value.trim();

  // Replace the number below with Mostafa's real WhatsApp number in international format.
  const coachWhatsApp = '201000000000';

  const message =
    `Hi Mostafa, my name is ${name}.%0A` +
    `My main goal is: ${goal}.%0A` +
    `My phone number is: ${phone}.%0A%0A` +
    `I'm interested in your coaching and would like to know the next step.`;

  window.open(`https://wa.me/${coachWhatsApp}?text=${message}`, '_blank');
  return false;
}
