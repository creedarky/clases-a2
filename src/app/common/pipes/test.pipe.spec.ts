/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { TestPipe } from './test.pipe';

describe('Pipe: Test', () => {
  let pipe;
  beforeEach(() => {
    pipe = new TestPipe();
  });
  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should capitalize-ish the text', () => {
    expect(pipe.transform('text')).toEqual('Text');
    expect(pipe.transform('text', 2)).toEqual('TExt');
    expect(pipe.transform('text', 6)).toEqual('TEXT');
  });
});
