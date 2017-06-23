import { CursoPage } from './app.po';

describe('curso App', () => {
  let page: CursoPage;

  beforeEach(() => {
    page = new CursoPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
