document.querySelector('#btnLogin').addEventListener('click', function () {
  let lang = $('#lang').val();
  $('#login').hide();
  let greeter = G$('meng', 'zhou', lang);
  greeter.HtmlGreeting('#greetings', true);
});
