package com.qa.pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.qa.util.ElementActions;
import com.qa.util.TimeUtil;

public class AdminLoginPage extends BasePage{

	ElementActions elementaction;

	@FindBy(name="email")
	WebElement usrname;
	
	@FindBy(name="password")
	WebElement pwd;
	
	@FindBy(xpath="//button[@type='submit']")
	WebElement loginbtn;
	
	@FindBy(xpath="//div[@role='alert' and @type='danger']")
	WebElement alert;
	
	@FindBy(xpath="//small[@class='text-danger' and text()='Please enter your valid email add']")
	WebElement invalidemailid;
	
	public AdminLoginPage(WebDriver driver){
		this.driver=driver;
		PageFactory.initElements(driver,this);
		elementaction=new ElementActions(driver);
	}
	
	
	public void pass_IncorrectCredentials(String incorrect_username, String incorrect_password){
		TimeUtil.shortWait();
		elementaction.doSendkeysByWebElement(usrname, incorrect_username);
		elementaction.doSendkeysByWebElement(pwd, incorrect_password);
	}
		
	public void click_loginbtn(){
		elementaction.doClickByWebElement(loginbtn);
	}
	
	public boolean verifyAlertDisplay(){
		TimeUtil.shortWait();
		elementaction.elementwaitByWebElement(alert);
		return alert.isDisplayed();
	}
	
	
	public void pass_Invalidemailid(String invalidemail){
		TimeUtil.shortWait();
		//elementaction=new ElementActions(driver);
		elementaction.doSendkeysByWebElement(usrname, invalidemail);
	}
		
	public boolean verifyInvalidEmailidMsg(){
		TimeUtil.shortWait();
		elementaction.elementwaitByWebElement(invalidemailid);
		return invalidemailid.isDisplayed();
		
	}
	
	
	public AdminHomePage doLogin_CorrectCredentials(String username, String password){
		TimeUtil.shortWait();
		//elementaction=new ElementActions(driver);
		elementaction.doSendkeysByWebElement(usrname, username);
		elementaction.doSendkeysByWebElement(pwd, password);
		elementaction.doClickByWebElement(loginbtn);
		TimeUtil.shortWait();
		return new AdminHomePage(driver);
	}
	
	
	}

