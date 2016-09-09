/* tslint:disable:no-unused-variable */
import {Response, ResponseOptions, Http, BaseRequestOptions} from '@angular/http';

import { TestBed, inject } from '@angular/core/testing';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { ApiService } from './api.service';
import {provide} from '@angular/core';

let data = require('../../../data/albums.json');


describe('Service: Api', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApiService, MockBackend, BaseRequestOptions, provide(Http, {
        useFactory: (backend: MockBackend, defaultOptions: BaseRequestOptions) => {
          return new Http(backend, defaultOptions);
        },
        deps: [MockBackend, BaseRequestOptions]
      })],
    });

  });

  beforeEach(inject([MockBackend], (backend: MockBackend) => {
    const baseResponse = new Response(new ResponseOptions({body: data}));
    backend.connections.subscribe((c: MockConnection) => c.mockRespond(baseResponse));
  }));

  it('should be able to create the service', inject([ApiService], (service: ApiService) => {
    expect(service).toBeTruthy();
  }));

  it('should be able to call the api', inject([ApiService], (service: ApiService) => {
    // expect(service.getAllAlbums()).not.toThrow()
    const { albums } = data;
    service.getAllAlbums().add(() => {
      service.albums.subscribe(response => {
        // console.log(response);
        expect(response.length).toEqual(albums.length);
        expect(response[0].id).toEqual(albums[0].id);
        expect(response).toEqual(albums);
      });
    });

  }));
});
