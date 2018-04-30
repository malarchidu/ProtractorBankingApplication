var openAccount=function(){
	var openAccount=element(by.partialButtonText('Open'))
	var customerDropdown=element.all(by.css('select option')).then(function(text){
		text[1].click();
	});
	this.clickOpenAccount=function(){
		openAccount.click();
	}
	this.clickCustomerDropDown=function(){
		customerDropdown.click();
	}
}
module.exports=new openAccount();