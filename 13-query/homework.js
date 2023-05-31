function splitQuery(query) {
  return Object.entries(query).reduce((acc, [key, value]) => acc ? `${acc}&${key}=${value}` : `${key}=${value}`, '')
}

const query = {
  name: "John",
  surname: "Doe",
  age: 30,
  sex: "male",
  isAdmin: true,
};


console.log(splitQuery(query));