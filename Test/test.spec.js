const chai = require('chai');
chai.should();
const expect = chai.expect;
const assert = chai.assert;

const homepage = require('./../PageObjects/datatable');

describe('Datatable home page',() => {
    it('should be able to check the title',() => {
        browser.url('https://datatables.net/');
        browser.timeoutsImplicitWait(2000);
        expect(homepage.getTitle()).equal('DataTables | Table plug-in for jQuery');
    });

    it('should have a heading DataTables ',() => {
        const heading = homepage.getHeading();
        const expectedheading = 'DataTables Table plug-in for jQuery';

        heading.should.equal(expectedheading);
        expect(heading).to.equal(expectedheading);
        assert.equal(heading, expectedheading);
        assert.notEqual(heading, '');
    });
});

describe('Employee salary information table',() => {
    beforeEach(() => {
        browser.pause(500);
    });
    it('should show 25 entries in the table',() => {
        homepage.selectShowEntries(25);
        expect(homepage.noOfEntriesDisplayed()).equal('Showing 1 to 25 of 57 entries');
        homepage.selectNext();
    });

    it('should show 50 entries in the table',() => {
        homepage.selectShowEntries(50);
        expect(homepage.noOfEntriesDisplayed()).equal('Showing 1 to 50 of 57 entries');
    });

    it('should show 100 entries in the table',() => {
        homepage.selectShowEntries(100);
        expect(homepage.noOfEntriesDisplayed()).equal('Showing 1 to 57 of 57 entries');
    });

    it('should search for employee name "cox"', () => {
        homepage.searchInEmpTable("cox");
        expect(homepage.getEmpName().toLowerCase()).to.contain('cox');
        expect(homepage.noOfEntriesDisplayed()).equal('Showing 1 to 1 of 1 entries (filtered from 57 total entries)');
    });

    it('should search for employee name "Ash"', () => {
        homepage.searchInEmpTable("Ash");
        expect(homepage.noOfEntriesDisplayed()).equal('Showing 1 to 2 of 2 entries (filtered from 57 total entries)');
    });

    it('should go to next page of employee information table', () => {
        homepage.selectNext();
        browser.pause(2000);
    });
});

