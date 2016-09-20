import { IDEPage } from './app.po';

describe('ide App', function() {
  let page: IDEPage;

  beforeEach(() => {
    page = new IDEPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
