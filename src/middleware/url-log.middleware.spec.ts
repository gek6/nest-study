import { UrlLogMiddleware } from './url-log.middleware';

describe('UrlLogMiddleware', () => {
  it('should be defined', () => {
    expect(new UrlLogMiddleware()).toBeDefined();
  });
});
