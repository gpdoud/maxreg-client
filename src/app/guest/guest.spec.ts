import { Guest } from './guest.class';

describe('Guest', () => {
  it('should create an instance', () => {
    expect(new Guest("", "", "")).toBeTruthy();
  });
});
