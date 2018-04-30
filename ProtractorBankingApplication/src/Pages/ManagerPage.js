var Manager=function(){
var btnAddCus=element(by.partialButtonText('Add'));
var btnOpenAct=element(by.partialButtonText('Open'));
var btnCustomers=element(by.partialButtonText('Customers'));

this.verifyManagerPageTitle=function(){
	title=browser.getCurrentUrl();
	if(title.contains='manager')
		console.log('Title is verifed');
		else
			console.log('Title is not verifed');
	
}
this.enabledAddCustomerLogin=function(){
	if(btnAddCus.isEnabled)
		console.log('Add Customer button is present in the page');
	else
		console.log('Add Customer button is not present in the page');
}

this.enabledOpenAccount=function(){
	if(btnOpenAct.isEnabled)
		console.log('Open Account button is present in the page');
	else
		console.log('Open Account button is not present in the page');
}

this.enabledAddCustomerLogin=function(){
	if(btnCustomers.isEnabled)
		console.log('Customers  button is present in the page');
	else
		console.log('Customers button is not present in the page');
}

this.clickAddCustomer=function(){
	btnAddCus.click();
}

this.clickOpenAccount=function(){
	btnOpenAct.click();
}

this.clickCustomers=function(){
	btnCustomers.click();
}

}
module.exports=new Manager();