import { IdePage } from './app.po';

describe('ide App', function() {
  let page: IdePage;

  beforeEach(() => {
    page = new IdePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
