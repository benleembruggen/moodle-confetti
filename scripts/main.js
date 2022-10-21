const sleep = (milliseconds) => {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
};

const confettiOnButton = (element) => {
  jsConfetti.addConfetti();
  sleep(1500).then(() => {
    element.setAttribute('type', 'submit');
    element.click();
  });
};

if (
  [...document.querySelectorAll('button')].find((btn) =>
    btn.textContent.includes('Add submission')) !== undefined
) {
  jsConfetti = new JSConfetti();

  const element = [...document.querySelectorAll('button')].find((btn) =>
    btn.textContent.includes('Add submission'));
  element.setAttribute('type', 'button');
  element.setAttribute('onclick', 'confettiOnButton(this)');
}
