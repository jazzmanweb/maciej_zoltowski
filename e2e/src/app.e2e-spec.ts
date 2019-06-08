import {AppPage} from './app.po';

describe('sonalake-task-angular App', () => {
    let page: AppPage;

    beforeEach(() => {
        page = new AppPage();
        page.navigateTo();
    });

    it('should create app', () => {
        expect(page).toBeTruthy();
    });

    it('should display the title', () => {
        expect(page.getTitleText()).toEqual('Characters List');
    });
});
