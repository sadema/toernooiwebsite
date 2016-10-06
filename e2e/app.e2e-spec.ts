import { Kristalbootstrap3Page } from './app.po';

describe('kristalbootstrap3 App', function() {
  let page: Kristalbootstrap3Page;

  beforeEach(() => {
    page = new Kristalbootstrap3Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
