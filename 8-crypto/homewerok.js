function generateSalt() {
  return Math.random().toString(36).substring(2, 10);
}

function encodePassword(password, topSecretSalt) {
  if (!password || !topSecretSalt) return null;
  if (password.includes('-')) return null;

  const len = password.length;
  const ecnodedPassword = [
    password.slice(0, len/2).split('').reverse().join(''), 
    topSecretSalt, 
    password.slice(len/2).split('').reverse().join('')
  ];

  return ecnodedPassword.join('-');
}

function decodePassword(encodedPassword, password) {
  const [firstHalf, _, secondHalf] = encodedPassword.split('-');
  const decodedPassword = [firstHalf.split('').reverse().join(''), secondHalf.split('').reverse().join('')].join('');

  return decodedPassword === password;
}

const topSecretSalt = generateSalt();
console.log(`topSecretSalt: ${topSecretSalt}`);

const password = 'password';
const encodedPassword = encodePassword(password, topSecretSalt);
console.log(`encodedPassword: ${encodedPassword}`);

const decodedPassword = decodePassword(encodedPassword, password);
console.log(`decodedPassword: ${decodedPassword}`);
