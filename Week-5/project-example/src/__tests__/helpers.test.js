import { sum, isNull } from '../helpers';

describe('testing sum', () => {
   it('a + b = 2', ()=> {
      expect(sum(1,1)).toBe(2);
   });
});


describe('testing isNull', () =>{
   it('isNull = false', () => {
      expect(isNull(1)).toBeFalsy();
   });

   it('isNull = true val = null', () => {
      expect(isNull(null)).toBeTruthy();
   });

    it('isNull = true val = undefine', () => {
        expect(isNull()).toBeTruthy();
    });
});
