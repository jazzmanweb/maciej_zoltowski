import {browser, by, element} from 'protractor';

export class AppPage {
    async navigateTo() {
        return await browser.get('#/');
    }

    async getTitleText() {
        return await element(by.css('h1')).getText();
    }
}
