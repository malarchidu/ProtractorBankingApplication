var data=require(process.cwd()+'/src/Utility/BankingApplicationData.json')
var HomePage=require(process.cwd()+'/src/Pages/HomePage.js')
describe('Banking e2e automation',function(){
	it('e2e flow',function(){
		
		browser.get(data.url);
		HomePage.clickLogin();
//		Profile.enterId(data.userData.id);
//		Profile.enterEmail(data.userData.email);
//		browser.sleep(3000);
//		var interest=Profile.clickNext();
//		
//		interest.selectRadio(1);
//		var payment=interest.clickNext();
//		payment.clickSubmit();
//		payment.acceptAlert();
//		browser.sleep(3000);
//		
		
	});
	
}); 