var login=function(){
var cusLogin=element(by.partialButtonText('Customer'));
var bankMgrLogin=element(by.partialButtonText('Bank'));

this.enabledCustomerLogin=function(){
	if(cusLogin.isEnabled)
		console.log('Customer login button is present in the page');
	else
		console.log('Customer login button is not present in the page');
}

this.enabledBankManagerLogin=function(){
	if(bankMgrLogin.isEnabled)
		console.log('Bank Manager login button is present in the page');
	else
		console.log('Bank Manager login button is not present in the page');
	
}

this.clickLogin=function(){
	cusLogin.click();
}

this.clickBankManagerLogin=function(){
	bankMgrLogin.click();
}
}
module.exports=new login();