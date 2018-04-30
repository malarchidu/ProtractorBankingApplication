var data=require(process.cwd()+'/src/Utility/BankingApplicationData.json')
var OpenAccount=require(process.cwd()+'/src/Pages/OpenAccountPage.js')
var HomePage=require(process.cwd()+'/src/Pages/HomePage.js')

describe('Banking Manager login',function(){
	it('e2e flow',function(){
		browser.get(data.url);
		HomePage.clickBankManagerLogin();
		OpenAccount.clickOpenAccount();
		browser.sleep(3000);
		OpenAccount.clickCustomerDropDown();

	});
	
}); 

