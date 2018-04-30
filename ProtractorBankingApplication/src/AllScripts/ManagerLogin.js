var data=require(process.cwd()+'/src/Utility/AddCustomerDetails.json')
var HomePage=require(process.cwd()+'/src/Pages/HomePage.js')
var ManagerPage=require(process.cwd()+'/src/Pages/ManagerPage.js');

describe('Banking Manager login',function(){
	it('e2e flow',function(){
		browser.get(data.url)
		browser.sleep(3000);
		
		HomePage.clickBankManagerLogin();
		ManagerPage.verifyManagerPageTitle();
		ManagerPage.enabledAddCustomerLogin();
		ManagerPage.enabledOpenAccount();
		ManagerPage.enabledAddCustomerLogin();

	});
	
}); 