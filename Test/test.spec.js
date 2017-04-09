var chai = require('chai');
var expect = chai.expect;

 describe('Datatable home page', function() {
     it('should be able to check the title', function () {
         browser.url('https://datatables.net/');
         browser.timeoutsImplicitWait(2000);
         expect(browser.getTitle()).equal('DataTables | Table plug-in for jQuery');
     });
 });