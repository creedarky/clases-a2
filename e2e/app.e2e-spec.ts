import { CliPage } from './app.po';

describe('cli App', function() {
  let page: CliPage;

  beforeEach(() => {
    page = new CliPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });

  // it('should render album list', async () : Promise<any> => {
  //   // console.log(await page.getAlbums().count());
  //   page.navigateTo();
  //
  //   console.log(page.getAlbums().get(0).getText());
  //
  //   // console.log(count);
  //   // let albums = await page.getAlbums();
  //   // console.log(albums);
  //   // let count = albums.count();
  //   // if(count > 1) {
  //   //   console.log(count);
  //   //   expect(count).toEqual(14)
  //   // }
  //
  // });
});
