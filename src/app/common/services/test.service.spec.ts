/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TestService } from './test.service';

describe('Service: Test', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TestService]
    });
  });

  it('should create the service', inject([TestService], (service: TestService) => {
    expect(service).toBeTruthy();
  }));

  it('getHelloWorld should return "Hello world"', inject([TestService], (service: TestService) => {
    expect(service.getHelloWorld()).toEqual('Hello world');
  }));

  it('should check if getHelloWorld has been called', inject([TestService], (service: TestService) => {
    spyOn(service, 'getHelloWorld');
    service.getHelloWorld();
    expect(service.getHelloWorld).toHaveBeenCalled();
    expect(service.getHelloWorld).toHaveBeenCalledTimes(1);
  }));

  it('add should workd with multiple parameters', inject([TestService], (service: TestService) => {
    expect(service.add()).toEqual(13);
    expect(service.add(5)).toEqual(15);
    expect(service.add(5, 40)).toEqual(45);
  }));

  it('should check if getHelloWorld has been called', inject([TestService], (service: TestService) => {
    spyOn(service, 'add');
    service.add();
    service.add(5);
    service.add(5, 40);
    expect(service.add).toHaveBeenCalled();
    expect(service.add).toHaveBeenCalledTimes(3);
    expect(service.add).toHaveBeenCalledWith();
    expect(service.add).toHaveBeenCalledWith(5);
    expect(service.add).toHaveBeenCalledWith(5, 40);
  }));

});
