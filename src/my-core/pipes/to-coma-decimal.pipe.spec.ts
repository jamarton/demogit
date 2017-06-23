import { ToComaDecimalPipe } from './to-coma-decimal.pipe';

describe('ToComaDecimalPipe', () => {
  it('create an instance', () => {
    const pipe = new ToComaDecimalPipe();
    expect(pipe).toBeTruthy();
  });
});
