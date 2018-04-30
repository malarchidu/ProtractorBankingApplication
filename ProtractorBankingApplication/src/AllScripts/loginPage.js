var data=require(process.cwd()+'/src/Utility/BankingApplicationData.json');
var HomePage=require(process.cwd()+'/src/Pages/HomePage.js');
describe('Banking e2e automation',function(){
	it('e2e flow',function(){
		
		browser.get(data.url)
		browser.sleep(3000);
		HomePage.enabledCustomerLogin();
		HomePage.enabledBankManagerLogin() 
		
	
	});
	
}); 