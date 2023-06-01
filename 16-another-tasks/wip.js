'use strict';

// methods
const b = 1;

const a = {
  b,
  getB: function() {
    return this.b;
  },
  getBAlt() {
    return this.b;
  },
};

console.log(a.getB());
console.log(a.getBAlt());

// call, apply
const audi = {
  brand: 'Audi',
  model: 'A4',
  year: 2020,
  damages: [],
  addDamage(part, rate) {
    console.log(`${this.brand} ${this.model} ${this.year}: ${part} with a rate of ${rate}`);
    this.damages.push({ part, rate });
  },
};

audi.addDamage('engine', 100);
audi.addDamage('body', 200);
audi.addDamage('tires', 300);


const bmw = {
  brand: 'BMW',
  model: 'X5',
  year: 2020,
  damages: [],
};

bmw.addDamage = audi.addDamage;
bmw.addDamage('engine', 200);
bmw.addDamage('body', 100);
bmw.addDamage('tires', 200);

const addDamageFunc = audi.addDamage;

addDamageFunc.call(bmw, 'engine', 300);
addDamageFunc.apply(bmw, ['body', 300]);
addDamageFunc.call(bmw, ...['body', 300]);

// bind
const carHanlers = {
  addDamageBind(part, rate) {
    console.log(`BIND: ${this.brand} ${this.model} ${this.year}: ${part} with a rate of ${rate}`);
    this.damages.push({ part, rate });
  }
}

const addDamageBmw = carHanlers.addDamageBind.bind(bmw);
addDamageBmw('engine', 100);

const addDamageBmwRoof = carHanlers.addDamageBind.bind(bmw, 'roof');
addDamageBmwRoof(200);

// this practice
function removePassword(reset) {
  if (reset) {
    this.password = undefined;
  } else {
    this.password = 'password';
  }
}

const user = {
  password: 'password',
};

removePassword.call(user);
console.log(user.password);
removePassword.call(user, true);
console.log(user.password);

removePassword.call(user, false);
console.log(user.password);

const removePasswordUser = removePassword.bind(user, true);
removePasswordUser();
console.log(user.password);

// IIFE imediatly invoked function expression
(function() {
  var varFromIife = 1;
  console.log('IIFE');
})();

// console.log(varFromIife); // varFromIife is not defined

// closure
function changeBalance() {
  let balance = 0;
  const key = 'a';

  return function(sum) {
    balance += sum;
    console.log('balance', balance);
  }
}

const change = changeBalance();

change(100);
change(-200);
change(300);
console.dir(change);

const change2 = changeBalance();
change2(100);
change2(-200);
change2(400);

// closure practice
const userInfo = {
  balance: 0,
  operations: 0,
  increase(sum) {
    this.balance += sum;
    this.operations++;
  },
}

function userC() {
  const userObj = {...userInfo};

  return function() {
    return userObj;
  }
}

const user1 = userC();
user1().increase(100);
user1().increase(-200);
console.log(user1());

const user2 = userC();
user2().increase(100);
user2().increase(200);
console.log(user2());