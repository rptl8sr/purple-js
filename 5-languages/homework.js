const languages = ['fr', 'en', 'ru', 'es', 'jp'];
const preferredLanguage = languages[Math.floor(Math.random() * languages.length)];

let hello;

switch (preferredLanguage) {
  case 'fr':
    hello = 'Bonjour';
    break;
  case 'en':
    hello = 'Hello';
    break;
  case 'ru':
    hello = 'Привет';
    break;  
  default:
    hello = 'Sorry we do not speak this language';
};

console.log(`${preferredLanguage}: ${hello}`);