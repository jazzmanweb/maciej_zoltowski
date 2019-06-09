import {AppPage} from './app.po';
import {by, element} from 'protractor';

describe('sonalake-task-angular Maciej Żółtowski', () => {
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

        describe('Pagination', () => {
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

        describe('Search', () => {
            let search;
            beforeEach(() => {
                search = element(by.css('sl-star-wars-list input#searchInput'));
            });

            it('should has Search Field', () => {
                expect(search).toBeTruthy();
            });

            it('should search input be enabled', () => {
                search.sendKeys('Someone');
                expect(search.getAttribute('value')).toEqual('Someone');
            });

            // If there is no map
            it('should not know where is The Map', () => {
                search.sendKeys('The Map');
                const tbody = element(by.css('sl-star-wars-list tbody')).getText();

                expect(tbody).toEqual('');
            });

            // If Luke is in database
            it('should know where is Luke', () => {
                search.sendKeys('Luke');
                const idCell = element(by.css('sl-star-wars-list tbody tr:nth-child(1) td')).getText();

                expect(idCell).toEqual('Luke Skywalker');
            });
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
