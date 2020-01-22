const addMoment = require('../dateAdjust');
describe('addMoment to a date', () => {
  it('date add ', () => {
    expect(addMoment(new Date('November 09, 2020 16:00:00'), '10d')).toEqual('November 19th 2020, 4:00:00 pm');
    expect(addMoment(new Date('November 09, 2020 16:00:00'), '10s')).toEqual('November 9th 2020, 4:00:10 pm');
    expect(addMoment(new Date('November 09, 2020 16:00:00'), '10m')).toEqual('November 9th 2020, 4:10:00 pm');
    expect(addMoment(new Date('November 09, 2020 16:00:00'), '10h')).toEqual('November 10th 2020, 2:00:00 am');
    expect(addMoment(new Date('November 09, 2020 16:00:00'), '10w')).toEqual('January 18th 2021, 4:00:00 pm');
    expect(addMoment(new Date('November 09, 2020 16:00:00'), '10M')).toEqual('September 9th 2021, 4:00:00 pm');
    expect(addMoment(new Date('November 09, 2020 16:00:00'), '10y')).toEqual('November 9th 2030, 4:00:00 pm');
  });
});
