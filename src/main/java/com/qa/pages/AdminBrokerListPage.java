package com.qa.pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.qa.util.Constants;
import com.qa.util.ElementActions;
import com.qa.util.TimeUtil;





public class AdminBrokerListPage extends BasePage{

	ElementActions elementaction;

	@FindBy(xpath="//h5[text()='Broker List']")
	WebElement brokerlistheader;

	//@FindBy(xpath="//a[text()='Heather']//parent::div//parent::td/preceding-sibling::td")
	//WebElement togglebtn;

	@FindBy(xpath="(//button[@id='dropdown0'])[1]")
	WebElement togglebtn;

	@FindBy(xpath="(//a[text()='View'])[1]")
	WebElement viewbtn;

	@FindBy(xpath="//h2[text()='Broker Details']")
	WebElement brokerdetailsheader;

	@FindBy(xpath="(//strong[text()='Back to List'])[1]")
	WebElement backlistbtn;

	@FindBy(name="brokerage_name")
	WebElement companynamefilter;

	@FindBy(xpath="//span[text()='50']")
	WebElement showentries;

	//@FindBy(xpath="(//span[@role='combobox'])[1]")
	//WebElement statefilter;

	@FindBy(xpath="//li[contains(@class,'page-item ng-scope')]/a[@ng-switch-when='next']")
	WebElement nextbtn;
	
	@FindBy(xpath="//button[text()='Clear filters']")
	WebElement clearfilter;
	


	public AdminBrokerListPage(WebDriver driver){
		this.driver=driver;
		PageFactory.initElements(driver, this);
		elementaction=new ElementActions(driver);
	}


	
	public boolean verifyBrokerListPageHeader(){
		elementaction.elementwaitByWebElement(brokerlistheader);
		return brokerlistheader.isDisplayed();
	}

	public void clickViewBtn(){
		elementaction.elementwaitByWebElement(togglebtn);
		togglebtn.click();
		TimeUtil.shortWait();
		elementaction.moveToElement(viewbtn);
		viewbtn.click();
		TimeUtil.shortWait();
	}
	
	public boolean verifyBrokerDetailsDisplayed(){
		/*elementaction.elementwaitByWebElement(togglebtn);
		togglebtn.click();
		TimeUtil.shortWait();
		elementaction.moveToElement(viewbtn);
		viewbtn.click();
		TimeUtil.shortWait();*/
		elementaction.elementwaitByWebElement(brokerdetailsheader);
		return brokerdetailsheader.isDisplayed();
	}

	
	public boolean verifyRedirectionToBrokerListPage(){
		verifyBrokerDetailsDisplayed();
		elementaction.elementwaitByWebElement(backlistbtn);
		backlistbtn.click();
		elementaction.elementwaitByWebElement(brokerlistheader);
		return brokerlistheader.isDisplayed();

	}

/*	@Step("To check the filter functionality in company column step")
	public boolean searchByCompany(){
		elementaction.elementwaitByWebElement(companynamefilter);
		companynamefilter.sendKeys(Constants.filtervalue);
		String beforexpath="//*[@id='page-wrapper']/div[2]/div/div/div/div/div/div/div[2]/div/div/div[2]/div/table/tbody/tr[";
		String afterxpath="]/td[4]/span";
		String tablexpath="//table//tbody//tr";
		elementaction.doClickByWebElement(showentries);
		TimeUtil.mediumWait();
		return elementaction.verifyWebTableData(beforexpath, afterxpath, tablexpath, Constants.filtervalue);


	}*/

	public boolean searchByCompany(){
		elementaction.elementwaitByWebElement(companynamefilter);
		companynamefilter.sendKeys(Constants.BrokerList_filtervalue);
		TimeUtil.mediumWait();
		String beforexpath="//*[@id='page-wrapper']/div[2]/div/div/div/div/div/div/div[2]/div/div/div[2]/div/table/tbody/tr[";
		String afterxpath="]/td[4]/span";
		String tablexpath="//table//tbody//tr";
		String paginationxpath="//a[@class='page-link ng-scope']";

		return elementaction.verifyResultsetAfterFilter(beforexpath, afterxpath, tablexpath, Constants.BrokerList_filtervalue, paginationxpath, nextbtn);
	}
	
	
	public boolean verifyClearFilter(){
		String tablexpath="//table//tbody//tr";
		elementaction.doClickByWebElement(showentries);
		TimeUtil.mediumWait();
		int beforerowCount=elementaction.getRowCount(tablexpath);
		System.out.println("beforcount is"+beforerowCount);
		elementaction.doClickByWebElement(companynamefilter);
		companynamefilter.sendKeys(Constants.BrokerList_filtervalue);
		TimeUtil.mediumWait();
		int filteredrowCount=elementaction.getRowCount(tablexpath);
		System.out.println("filteredcount is "+filteredrowCount);
		elementaction.elementwaitByWebElement(clearfilter);
		clearfilter.click();
		TimeUtil.mediumWait();
		int afterrowCount=elementaction.getRowCount(tablexpath);
		System.out.println("aftercount is"+afterrowCount);  
		if(beforerowCount!=afterrowCount){
			return false;
		}
		return true;
	}

}





