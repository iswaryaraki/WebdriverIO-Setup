var homepage = {
    getTitle: function () {
        return browser.getTitle();
    },
    getHeading: () => browser.getText('.page_title'),
    selectShowEntries: (count) => {
        browser.selectByValue('[name="example_length"]', count)
    },
    noOfEntriesDisplayed: () => {
        return browser.getText('#example_info')
    },
    searchInEmpTable: (count) => browser.setValue('#example_filter label input', count),
    getEmpName: () => browser.getText('.sorting_1'),
    selectNext: () => browser.click('.paginate_button.next')
};

module.exports = homepage;
