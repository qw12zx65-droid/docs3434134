const form = document.getElementById('messageForm');
const messageEl = document.getElementById('message');
const counterEl = document.getElementById('counter');
const statusEl = document.getElementById('status');
const submitBtn = document.getElementById('submitBtn');
const MAX_LEN = 9000;

function updateCounter() {
  const len = messageEl.value.length;
  counterEl.textContent = `${len} / ${MAX_LEN}`;
}

function setStatus(text, type = '') {
  statusEl.textContent = text;
  statusEl.className = `status ${type}`.trim();
}

messageEl.addEventListener('input', updateCounter);
updateCounter();

form.addEventListener('submit', async (event) => {
  event.preventDefault();

  const actionUrl = form.getAttribute('action') || '';
  if (!actionUrl.includes('formspree.io/f/') || actionUrl.includes('PASTE_YOUR_FORMSPREE_ID')) {
    setStatus('Сначала вставь свой адрес Formspree в файл docs/index.html.', 'error');
    return;
  }

  if (messageEl.value.length > MAX_LEN) {
    setStatus('Сообщение длиннее 9000 символов.', 'error');
    return;
  }

  submitBtn.disabled = true;
  setStatus('Отправка...');

  try {
    const response = await fetch(actionUrl, {
      method: 'POST',
      headers: {
        'Accept': 'application/json'
      },
      body: new FormData(form)
    });

    if (!response.ok) {
      throw new Error('request_failed');
    }

    form.reset();
    updateCounter();
    setStatus('Сообщение успешно отправлено на почту.', 'success');
  } catch (error) {
    setStatus('Не удалось отправить. Проверь Formspree ID и настройки формы.', 'error');
  } finally {
    submitBtn.disabled = false;
  }
});
