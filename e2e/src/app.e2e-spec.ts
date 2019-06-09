import {AppPage} from './app.po';
import {by, element} from 'protractor';

describe('sonalake-task-angular App', () => {
    let page: AppPage;

    beforeEach(() => {
        page = new AppPage();
        page.navigateTo();
    });

    it('should create app', () => {
        expect(page).toBeTruthy();
    });

    describe('Star Wars List', () => {
        it('should display the title', () => {
            expect(page.getStarWarsListHeader()).toEqual('Characters List');
        });

        it('should has prev button', () => {
            expect(element(by.buttonText('Previous'))).toBeTruthy();
        });

        it('should has next button', () => {
            expect(element(by.buttonText('Next'))).toBeTruthy();
        });

        it('should start page from 1', () => {
            const prevButton = element(by.css('sl-star-wars-list sl-list-view-pagination li:first-child'));

            const idCell = element(by.css('sl-star-wars-list tbody tr:nth-child(1) th:first-child')).getText();
            const activePage = element(by.css('sl-star-wars-list sl-list-view-pagination li.active button')).getText();

            expect(prevButton.getAttribute('class')).toContain('disabled');
            expect(idCell).toEqual('1');
            expect(activePage).toContain('1');
            expect(activePage).toContain('current');
        });

        it('should paginate be set to 10', () => {
            const nextButton = element(by.buttonText('Next')).click();
            const idCell = element(by.css('sl-star-wars-list tbody tr:nth-child(1) th:first-child')).getText();
            const activePage = element(by.css('sl-star-wars-list sl-list-view-pagination li.active button')).getText();

            expect(idCell).toEqual('11');
            expect(activePage).toContain('2');
            expect(activePage).toContain('current');
        });
    });

    describe('Star Wars Add New', () => {
        it('should display "add" button', () => {
            expect(page.getCreateButton().getText()).toEqual('Add New');
        });

        it('should redirect to edit view in create mode', () => {
            page.getCreateButton().click();
            expect(page.getStarWarsEditHeader()).toEqual('Add Character');
        });

        describe('Creating', () => {
            beforeEach(() => {
                page.getCreateButton().click();
            });

            it('should not redirect to home after empty form submit', () => {
                page.getSubmitButton().click();
                expect(page.getStarWarsEditHeader()).toEqual('Add Character');
            });
        });
    });

    describe('Star Wars Edit', () => {
        it('should display "edit" button', () => {
            expect(page.getFirstEditButton().getText()).toEqual('Edit');
        });

        it('should redirect to edit view in edit mode', () => {
            page.getFirstEditButton().click();
            expect(page.getStarWarsEditHeader()).toEqual('Edit Character');
        });

        describe('Editing', () => {
            beforeEach(() => {
                page.getFirstEditButton().click();
            });

            it('should redirect to home after successful submit', () => {
                page.getSubmitButton().click();
                expect(page.getStarWarsListHeader()).toEqual('Characters List');
            });
        });
    });
});
