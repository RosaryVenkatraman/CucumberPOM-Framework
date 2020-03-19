package com.qa.stepDefinitions;

import java.util.Properties;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.testng.Assert;

import com.qa.pages.AdminHomePage;
import com.qa.pages.AdminLoginPage;
import com.qa.pages.BasePage;
import com.qa.util.Constants;
import com.qa.util.TimeUtil;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;



public class HomePageSteps extends BasePage {
	
	Logger log=LogManager.getLogger(LoginPageSteps.class);
	
	static WebDriver driver;
	Properties prop;
	BasePage basepage;
	AdminLoginPage adminlogin;
	AdminHomePage adminhome;
	//Scenario scenario;
	
	@Given("^User is in homepage$")
	public void user_is_in_homepage() throws Throwable {
		basepage=new BasePage();
		prop=basepage.init_prop();
		driver=basepage.init_driver(prop);
		driver.get(prop.getProperty("admin_url_qa"));
		TimeUtil.mediumWait();
		adminlogin=new AdminLoginPage(driver);
		adminhome=adminlogin.doLogin_CorrectCredentials(prop.getProperty("admin_username"), prop.getProperty("admin_pwd"));
	 String title= adminhome.getHomePageTitle();
	 Assert.assertEquals(title, Constants.ADMIN_HOMEPAGE_TITLE);
	}

	@Then("^Verify for the submenus under the menu ActionItems$")
	public void verify_for_the_submenus_under_the_menu_ActionItems() throws Throwable {
	  Assert.assertTrue(adminhome.verifyActionitem_Brokeraction()); 
	  Assert.assertTrue(adminhome.verifyActionitem_Employeraction());
	}

	@Then("^Verify for the submenus under the menu Broker$")
	public void verify_for_the_submenus_under_the_menu_Broker() throws Throwable {
	    Assert.assertTrue(adminhome.verifyBrokeritem_Brokerlist());
	}

	@Then("^Verify for the submenus under the menu Employer$")
	public void verify_for_the_submenus_under_the_menu_Employer() throws Throwable {
		TimeUtil.shortWait();
	   Assert.assertTrue(adminhome.verifyEmployer_GroupsInprogress());
	   Assert.assertTrue(adminhome.verifyEmployer_ManageGroup());
	}

	@Then("^Verify for the submenus under the menu Member$")
	public void verify_for_the_submenus_under_the_menu_Member() throws Throwable {
		TimeUtil.shortWait();
	    Assert.assertTrue(adminhome.verifyMember_AddMember());
	    Assert.assertTrue(adminhome.verifyMember_MemberList());
	}

	@Then("^Verify for the submenus under the menu Proposals$")
	public void verify_for_the_submenus_under_the_menu_Proposals() throws Throwable {
		TimeUtil.shortWait();
	   Assert.assertTrue(adminhome.verifyProposals_ManageProposal());
	   Assert.assertTrue(adminhome.verifyProposals_NewProposal());
	}

	@Then("^Verify for the submenus under the menu Reports$")
	public void verify_for_the_submenus_under_the_menu_Reports() throws Throwable {
		TimeUtil.shortWait();
	    Assert.assertTrue(adminhome.verifyReports_ProposalReport());
	    Assert.assertTrue(adminhome.verifyReports_SellingReport());
	}

	@Then("^Verify for the submenus under the menu Admin$")
	public void verify_for_the_submenus_under_the_menu_Admin() throws Throwable {
		TimeUtil.shortWait();
	    Assert.assertTrue(adminhome.verifyAdmin_ImportGroupHistory());
	    Assert.assertTrue(adminhome.verifyAdmin_ManagePackages());
	    Assert.assertTrue(adminhome.verifyAdmin_SystemAlert());
	    Assert.assertTrue(adminhome.verifyAdmin_UploadReports());
	    Assert.assertTrue(adminhome.verify_GenerateMemberPwd());
	}

	@Then("^Verify for the submenus under the menu ManageUser$")
	public void verify_for_the_submenus_under_the_menu_ManageUser() throws Throwable {
		TimeUtil.shortWait();
	    Assert.assertTrue(adminhome.verifyManageUser_AddUser());
	    Assert.assertTrue(adminhome.verifyManageUser_UserList());
	}
	
	@Then("^CloseHomePage$")
	public void closehomepage() throws Throwable {
	    adminhome.closeBrowser();
	}
	
	

	@After
	public void tearDown(Scenario scenario) {
		try{
			if (scenario.isFailed()) {
				//scenario.getName();
			      // Take a screenshot...
			      final byte[] screenshot = ((TakesScreenshot) driver).getScreenshotAs(OutputType.BYTES);
			      scenario.embed(screenshot, "image/png"); // ... and embed it in the report.
			    }
		}
		catch(Exception e){
			log.error(e.getMessage());
		}
				
		
		//driver.close();
			        
	    //driver.quit();
	  
	}
	
	
}
