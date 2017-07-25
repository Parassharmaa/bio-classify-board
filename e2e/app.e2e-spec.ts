import { BioClassifyAppPage } from './app.po';

describe('bio-classify-app App', () => {
  let page: BioClassifyAppPage;

  beforeEach(() => {
    page = new BioClassifyAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
