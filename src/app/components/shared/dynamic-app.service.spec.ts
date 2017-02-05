/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DynamicAppService } from './dynamic-app.service';

describe('Service: DynamicApp', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DynamicAppService]
    });
  });

  it('should ...', inject([DynamicAppService], (service: DynamicAppService) => {
    expect(service).toBeTruthy();
  }));
});
