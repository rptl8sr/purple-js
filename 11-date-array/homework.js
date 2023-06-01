const arr = [
  '10-01-2022', '12/31/2022', '31-02-2023', '30/12/2023',
  '32-03-2022', '13/04/2022', '12/04/-2022','10-052022', 
  'ab/bc/dceg', {}, undefined, null, 0, false, ''
];

const patternRu = /(\d{2})-(\d{2})-(\d{4})/ // yes I like regexp :)
const patternUs = /(\d{2})\/(\d{2})\/(\d{4})/
const format = 'ru-RU';
const options = { year: 'numeric', month: '2-digit', day: '2-digit' };


function checkPattern(date) {
  if (typeof date !== 'string') return null;

  const match = date.match(patternRu);
  const match2 = date.match(patternUs);
  
  if (!!match) {
    return `${match[2]}-${match[1]}-${match[3]}`;
  } else if (!!match2) {
    return `${match2[1]}-${match2[2]}-${match2[3]}`;
  }

  return null;
}


function strftime (format, options, date, pattern=/\./g) {
  return date.toLocaleDateString(format, options).replace(pattern, '-');
}


function compareDates(origin) {
  const format = 'en-US'; // By the way, just for practice the scope 
  const pattern = /\//g;
  return origin === strftime(format, options, new Date(origin), pattern);
}


const dates = [];

const datesObj = arr
  .map(date => checkPattern(date))
  .filter(date => !!date)
  .filter(date => compareDates(date))
  .map(date => new Date(date));

datesObj.forEach(date => {
  if (!isNaN(date)) {
    return dates.push(strftime(format, options, date));
  }
});

console.log(dates); 