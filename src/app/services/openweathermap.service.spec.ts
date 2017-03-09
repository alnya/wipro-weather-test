import { TestBed, inject } from '@angular/core/testing';
import { HttpModule, Http, BaseRequestOptions, XHRBackend, Response, ResponseOptions } from '@angular/http';
import { MockBackend } from '@angular/http/testing';

import { OpenweathermapService } from './openweathermap.service';

describe('OpenweathermapService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MockBackend, OpenweathermapService, {provide: XHRBackend, useClass: MockBackend}],
      imports: [HttpModule],
    });
  });

  it('should return data', inject([OpenweathermapService, MockBackend], (service: OpenweathermapService, mockBackend) => {
    const mockResponse = { foo:'bar'};

        mockBackend.connections.subscribe((connection) => {
          connection.mockRespond(new Response(new ResponseOptions({
            body: JSON.stringify(mockResponse)
          })));
        });

        service.get("foo").then((response) => {
          expect(response.foo).toEqual("bar");
        });
  }));
});
