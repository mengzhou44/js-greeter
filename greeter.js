(function (global, $) {
  const Greeter = function (firstName, lastName, language) {
    return new Greeter.init(firstName, lastName, language);
  };

  const supportedLanguages = ['en', 'es'];

  greetings = {
    en: 'Hello',
    es: 'Hola',
  };

  formalGreetings = {
    en: 'Greetings',
    es: 'Saludos',
  };

  Greeter.prototype = {
    fullName() {
      return ` ${this.lastName},  ${this.firstName}`;
    },
    validate() {
      if (supportedLanguages.indexOf(this.language) === -1) {
        throw 'Invalid Language!';
      }
    },

    greeting() {
      return `${greetings[this.language]}  ${this.firstName}  ${this.lastName}`;
    },

    formalGreeting() {
      return `${formalGreetings[this.language]} ${this.fullName()}`;
    },

    greet(formal) {
      let msg = '';
      if (formal) {
        msg = this.formalGreeting();
      } else {
        msg = this.greeting();
      }

      return msg;
    },

    setLang(language) {
      this.language = language;
      this.validate();
      return this;
    },

    HtmlGreeting(selector, formal = false) {
      if ($) {
        if (!selector) {
          throw 'Missing query selector!';
        }
        let el = $(selector);
        el.html(this.greet(formal));
      }
    },
  };

  Greeter.init = function (firstName, lastName, language) {
    this.firstName = firstName || '';
    this.lastName = lastName || '';
    this.language = language || 'en';

    this.validate();
  };

  Greeter.init.prototype = Greeter.prototype;

  global.Greeter = global.G$ = Greeter;
})(window, jQuery);
