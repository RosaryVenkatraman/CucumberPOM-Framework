package com.qa.pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.qa.util.ElementActions;
import com.qa.util.TimeUtil;



public class AdminHomePage extends BasePage {
	ElementActions elementaction;

	@FindBy(xpath="//a[text()='Broker Actions']")
	WebElement broker_actions;
	
	@FindBy(xpath="//a[text()='Employer Actions']")
	WebElement employer_actions;
	
	@FindBy(xpath="//span[text()='Broker']")
	WebElement broker;
	
	@FindBy(xpath="//a[text()='Broker List']")
	WebElement brokerlist;
	
	@FindBy(xpath="//span[text()='Employer']")
	WebElement employer;
	
	@FindBy(xpath="//a[text()='Groups In-progress']")
	WebElement groups;
	
	@FindBy(xpath="//a[text()='Manage Group']")
	WebElement managegrp;
	
	@FindBy(xpath="//span[text()='Member']")
	WebElement member;
	
	@FindBy(xpath="//a[text()='Add Member']")
	WebElement addmember;
	
	@FindBy(xpath="//a[text()='Member List']")
	WebElement memberlist;
	
	@FindBy(xpath="//span[text()='Proposals']")
	WebElement proposals;
	
	@FindBy(xpath="//a[text()='New Proposal']")
	WebElement newproposal;
	
	@FindBy(xpath="//a[text()='Manage Proposals']")
	WebElement manageproposal;
	
	@FindBy(xpath="//span[text()='Reports']")
	WebElement reports;
	
	@FindBy(xpath="//a[text()='Selling Report']")
	WebElement sellingreport;
	
	@FindBy(xpath="//a[text()='Proposal Report']")
	WebElement proposalreport;
	
	@FindBy(xpath="//span[text()='Admin']")
	WebElement admin;
	
	@FindBy(xpath="//a[text()='Upload Reports']")
	WebElement uploadreports;
	
	@FindBy(xpath="//a[text()='Manage Packages']")
	WebElement managepackages;
	
	@FindBy(xpath="//a[text()='Import Group History']")
	WebElement importgrphistory;
	
	@FindBy(xpath="//a[text()='Generate Member Password']")
	WebElement generatemempwd;
	
	@FindBy(xpath="//a[text()='System Alert']")
	WebElement systemalert;
	
	@FindBy(xpath="//span[text()='Manage User']")
	WebElement manageuser;
	
	@FindBy(xpath="//a[text()='Add User']")
	WebElement adduser;
	
	@FindBy(xpath="//a[text()='Users List']")
	WebElement userlist;
		
	public AdminHomePage(WebDriver driver){
		this.driver=driver;
		PageFactory.initElements(driver, this);
		elementaction=new ElementActions(driver);
	}
	
	
	public String getHomePageTitle(){
		String title=driver.getTitle();
		return title;
	}
	
	
	public boolean verifyActionitem_Brokeraction(){
		elementaction.elementwaitByWebElement(broker_actions);
		return broker_actions.isDisplayed();
	}
	
	
	public boolean verifyActionitem_Employeraction(){
		elementaction.elementwaitByWebElement(employer_actions);
		return employer_actions.isDisplayed();
	}
	

	public boolean verifyBrokeritem_Brokerlist(){
		TimeUtil.shortWait();
		return elementaction.verifyMenus_Presence(broker,brokerlist);
	}
	
	
	public boolean verifyEmployer_GroupsInprogress(){
		return elementaction.verifyMenus_Presence(employer,groups);
		
	}
	

	public boolean verifyEmployer_ManageGroup(){
		return elementaction.verifyMenus_Presence(employer,managegrp);
	}
	
	
	public boolean verifyMember_AddMember(){
		return elementaction.verifyMenus_Presence(member,addmember);
	}
	
	
	public boolean verifyMember_MemberList(){
		return elementaction.verifyMenus_Presence(member,memberlist);
	}
	

	public boolean verifyProposals_NewProposal(){
		return elementaction.verifyMenus_Presence(proposals,newproposal);
	}
	

	public boolean verifyProposals_ManageProposal(){
		return elementaction.verifyMenus_Presence(proposals,manageproposal);
	}
	
	
	public boolean verifyReports_ProposalReport(){
		return elementaction.verifyMenus_Presence(reports,proposalreport);
	}
	
	
	public boolean verifyReports_SellingReport(){
		return elementaction.verifyMenus_Presence(reports,sellingreport);
	}
	
	
	public boolean verifyAdmin_UploadReports(){
		TimeUtil.shortWait();
		return elementaction.verifyMenus_Presence(admin,uploadreports);
	}
	

	public boolean verifyAdmin_ManagePackages(){
		TimeUtil.shortWait();
		return elementaction.verifyMenus_Presence(admin,managepackages);
	}
	

	public boolean verifyAdmin_ImportGroupHistory(){
		TimeUtil.shortWait();
		return elementaction.verifyMenus_Presence(admin,importgrphistory);
	}
	
	
	public boolean verify_GenerateMemberPwd(){
		TimeUtil.shortWait();
		return elementaction.verifyMenus_Presence(admin,generatemempwd);
	}
	

	public boolean verifyAdmin_SystemAlert(){
		TimeUtil.shortWait();
		return elementaction.verifyMenus_Presence(admin,systemalert);
	}
	
	
	public boolean verifyManageUser_AddUser(){
		return elementaction.verifyMenus_Presence(manageuser,adduser);
	}
	
	
	public boolean verifyManageUser_UserList(){
		return elementaction.verifyMenus_Presence(manageuser,userlist);
	}
	

	public AdminBrokerListPage moveToBrokerList(){
		elementaction.verifyMenus_Presence(broker, brokerlist);
		brokerlist.click();
		TimeUtil.shortWait();
		return new AdminBrokerListPage(driver);
	}
	
public void closeBrowser(){
	driver.quit();
}

}
