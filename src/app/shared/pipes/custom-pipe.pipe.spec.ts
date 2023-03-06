import { CustomPipePipe } from './custom-pipe.pipe';

describe('CustomPipesPipe', () => {
  it('create an instance', () => {
    const pipe = new CustomPipePipe();
    expect(pipe).toBeTruthy();
  });
});
