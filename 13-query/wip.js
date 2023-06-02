// sort array of objects
const users = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Jane' },
    { id: 3, name: 'Jack' },
    { id: 4, name: 'Jill' },
];

users.sort((a, b) => b.id - a.id);
console.log(users);

// methods
const user = {
  id: 1,
  name: 'John',
  surname: 'Doe',
  age: 30,
  getFullName() {
    return `${this.name} ${this.surname}`;
  }
};

console.log(user.getFullName());

// wallet
const wallet = {
  money: 0,
  history: [],
  deposit(value, message=null) {
    this.history.push({
      value, 
      message, 
      date: new Date()},
    );

    this.money += value;
    
    return true;
  },
  withdraw(value, message=null) {
    if (this.money < value) {
      console.log(`Unsufficient funds to withdraw ${value}`);
      return null;
    }

    this.history.push({
      value: -value, 
      message, 
      date: new Date()},
    );
    this.money -= value;
    
    return true;
  }
};

wallet.deposit(100, 'salary');
wallet.withdraw(50);
wallet.withdraw(70);

console.log(wallet.money);
console.log(wallet.history);

// iteration
const cities = {
  msk: {
    name: 'Moscow',
    population: 9_000_000_000,
    country: 'Russia',
    geo: {
      lat: 55.7558,
      lon: 37.6173
    }
  },
  spb: {
    name: 'Saint-Petersburg',
    population: 7_000_000_000,
    country: 'Russia'
  },
  ny: {
    name: 'New-York',
    population: 5_000_000_000,
    country: 'USA'
  },
  hk: {
    name: 'Hong-Kong',
    population: 3_000_000_000,
    country: 'China'
  },
}

console.log(Object.keys(cities).length);
for (const city in cities) {
  console.log(city);
}

// destructuring and rest
const { name, ...cityProps} = cities['msk'];
console.log(name, cityProps);

const additionalData = {
  localName: 'Москва',
  foundation: 1147,
}

cities.msk = {...cities.msk, ...additionalData};
console.log(cities.msk);

// chaining
for (const city in cities) {
  if (!!cities[city].geo?.lon) {
    console.log(`${cities[city].name} lon: ${cities[city].geo.lon}`)
  }
};