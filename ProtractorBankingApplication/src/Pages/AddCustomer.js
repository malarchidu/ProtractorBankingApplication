//var data=require(process.cwd()+'/src/Utility/AddCustomerDetails.json')
var addCustomer=function(){
var btnAddCustomer=element(by.className('btn btn-default'));
var firstName=element(by.model('fName'));
var lastName=element(by.model('lName'));
var postalCode=element(by.model('postCd'));

this.clickAddCustomer=function(){
	btnAddCustomer.click();
}

this.enterFirstName=function(firstnamevalue){
	firstName.sendKeys(firstnamevalue);
	return this;
}

this.enterLastName=function(lastnamevalue){
	lastName.sendKeys(lastnamevalue);
	return this;
}

this.enterPostalCode=function(postalcodevalue){
	postalCode.sendKeys(postalcodevalue);
	return this;
}
//this.alert=function(){
//	browser.switchTo().alert().accept;
//	
//
//}
}
module.exports=new addCustomer();