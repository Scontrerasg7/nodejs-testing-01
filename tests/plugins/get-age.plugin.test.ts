import { getAge } from '../../src/plugins/get-age.plugin';
// const getAgePlugin = require('get-age');

describe('plugins/get-age.plugin.ts', () => { 
  
  test('getAge should return the age of a person', () => { 
    const birthdate = '1999-05-25';
    const age = getAge(birthdate);

    expect(typeof age).toBe('number');

  })

  test('getAge should return current age', () => { 
    const birthdate = '1999-05-25';
    const age = getAge(birthdate);

    // const calculatedAge = getAgePlugin(birthdate);
    const calculatedAge = new Date().getFullYear() - new Date(birthdate).getFullYear();

    expect(age).toBe(calculatedAge);

  })

  test('getAge should return 0 years', () => { 
    const spy =  jest.spyOn(Date.prototype, 'getFullYear').mockReturnValue(1999);
    const birthdate = '1999-05-25';
    const age = getAge(birthdate);

    expect(age).toBe(0);
  })

})