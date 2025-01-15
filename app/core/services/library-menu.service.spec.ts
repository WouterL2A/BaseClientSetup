import { TestBed } from '@angular/core/testing';

import { LibraryMenuService } from './library-menu.service';

describe('LibraryMenuService', () => {
  let service: LibraryMenuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LibraryMenuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
