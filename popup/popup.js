console.log('this is working');
jsConfetti = new JSConfetti();

document.addEventListener('DOMContentLoaded', function () {
  const link = document.getElementById('test');
  const customConfetti = document.getElementById('customConfetti');
  

  link.addEventListener('click', function () {
    if (customConfetti.value) {
      // split the string into an array of emojis
      const emojis = customConfetti.value.split(' ');
      jsConfetti.addConfetti({
        emojis: emojis,
      });
    } else {
      jsConfetti.addConfetti();
    }
  });
});
