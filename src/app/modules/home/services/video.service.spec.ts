import { TestBed } from '@angular/core/testing';

import { VideoService } from './video.service';

describe('YoutubeService', () => {
  let service: VideoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VideoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
