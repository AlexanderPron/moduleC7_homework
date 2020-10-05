import { reverceStr } from "./reverce";

describe('Reverce string', () => {
  it('reverce string for \'12345\' is \'54321\'', ()=>{
    expect(reverceStr('12345')).toBe('54321');
  });
  it('reverce string for undefined  variable is \'undefinedGrr\'', () => {
    expect(reverceStr(undefined)).toBe('undefinedGrr');
  });
});
