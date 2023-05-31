function splitQuery(query) {
  // return Object.entries(query).reduce((acc, [key, value]) => acc ? `${acc}&${key}=${value}` : `${key}=${value}`, '')
  return Object.entries(query).map(([key, value]) => `${key}=${value}`).join('&'); // There's less calls and creating new variables 
}

const query = {
  name: "John",
  surname: "Doe",
  age: 30,
  sex: "male",
  isAdmin: true,
};


console.log(splitQuery(query));