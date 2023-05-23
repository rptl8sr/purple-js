// languuages

const preferredLanguage = prompt('Enter your preferred language (fr, en, ru)', 'ru');

switch (preferredLanguage) {
  case 'fr':
    alert('Bonjour');
    break;
  case 'en':
    alert('Hello');
    break;
  case 'ru':
    alert('Привет');
    break;  
  default:
    alert('Sorry we do not speak this language')
};
