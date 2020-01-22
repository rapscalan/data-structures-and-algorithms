const Moment = require('moment');

const addMoment = (aDate, diff) => {
  let num = diff.replace(/(\d+)\D+/, '$1');
  let type = diff.replace(/\d+(\D+)/, '$1');
  
  let unit = ['seconds', 
    'minutes', 
    'hours', 
    'days', 
    'weeks', 
    'months', 
    'years'][('smhdwMy'.indexOf(type))];
  return Moment(aDate).add(num, unit).format('MMMM Do YYYY, h:mm:ss a');
};

module.exports = addMoment;
