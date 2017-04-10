import { FilmyDiariesPage } from './app.po';

describe('filmy-diaries App', () => {
  let page: FilmyDiariesPage;

  beforeEach(() => {
    page = new FilmyDiariesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
