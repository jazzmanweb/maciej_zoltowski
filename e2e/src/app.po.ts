import {browser, by, element} from 'protractor';

export class AppPage {
    public navigateTo() {
        return browser.get('/');
    }

    public getStarWarsListHeader() {
        return element(by.css('sl-star-wars-list h1')).getText();
    }

    public getStarWarsEditHeader() {
        return element(by.css('sl-star-wars-edit h1')).getText();
    }

    public getCreateButton() {
        return element(by.css('sl-star-wars-list button.add-new'));
    }

    public getFirstEditButton() {
        return element(by.css('sl-star-wars-list tbody tr:nth-child(1) button.edit'));
    }

    public getFirstRemoveButton() {
        return element(by.css('sl-star-wars-list tbody tr:nth-child(1) button.remove'));
    }

    public getFirstConfirmButton() {
        return element(by.css('sl-star-wars-list tbody tr:nth-child(1) button.confirm'));
    }

    public getFirstCancelButton() {
        return element(by.css('sl-star-wars-list tbody tr:nth-child(1) button.cancel'));
    }

    public getSubmitButton() {
        return element(by.css('sl-star-wars-edit button[type=submit]'));
    }
}
