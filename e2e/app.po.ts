import { browser, element, by } from 'protractor';

export class AmmysRecipesCollectionPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('arc-root h1')).getText();
  }
}
