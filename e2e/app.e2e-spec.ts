import { AmmysRecipesCollectionPage } from './app.po';

describe('ammys-recipes-collection App', function() {
  let page: AmmysRecipesCollectionPage;

  beforeEach(() => {
    page = new AmmysRecipesCollectionPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('arc works!');
  });
});
