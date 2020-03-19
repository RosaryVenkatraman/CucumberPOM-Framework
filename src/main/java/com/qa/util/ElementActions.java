package com.qa.util;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;

import com.qa.pages.BasePage;



public class ElementActions extends BasePage{

	WebDriver driver;
	Select select;
	Actions action;
	//File folder;
	ChromeOptions options;

	public ElementActions(WebDriver driver){
		this.driver=driver;
	}

	/**
	 * @author rosary.venkatraman
	 * This method will return the web element found using By locator.
	 * @param locator
	 * @return
	 */
	public WebElement getElements(By locator){
		elementWait(locator);
		return driver.findElement(locator);
	}

	/**
	 * @author rosary.venkatraman.
	 * This method will return the web element. 
	 * @param element
	 * @return
	 */
	public WebElement getElementsByWebelement(WebElement element){
		elementwaitByWebElement(element);
		return driver.findElement((By) element);
	}

	/**
	 * @author rosary.venkatraman.
	 * This method gives element wait using web element.
	 * @param element
	 */
	public void elementwaitByWebElement(WebElement element){
		try{
			WebDriverWait wait=new WebDriverWait(driver,Constants.EXPLICIT_WAIT);
			wait.until(ExpectedConditions.visibilityOf(element));
		}
		catch(Exception e){
			e.printStackTrace();
		}
	}

	/**
	 * @author rosary.venkatraman.
	 * This method gives element wait using By Locator.
	 * @param locator
	 */
	public void elementWait(By locator){
		WebDriverWait wait=new WebDriverWait(driver,Constants.EXPLICIT_WAIT);
		wait.until(ExpectedConditions.presenceOfElementLocated(locator));
	}

	/**
	 * @author rosary.venkatraman.
	 * This method send values to the text field using By locator.
	 * @param locator
	 * @param value
	 */
	public void doSendkeys(By locator,String value){
		getElements(locator).sendKeys(value);
	}

	/**
	 * @author rosary.venkatraman.
	 * This method clicks on the web element using By locator.
	 * @param locator
	 */
	public void doClick(By locator){
		getElements(locator).click();
	}

	/**
	 * @author rosary.venkatraman.
	 * This method performs click operation using web element.
	 * @param element
	 */
	public void doClickByWebElement(WebElement element){
		try{
			element.click();
		}
		catch(Exception e){
			e.printStackTrace();
		}
	}

	/**
	 * @author rosary.venkatraman.
	 * This method clears the text field.
	 * @param element
	 */
	public void clearField(WebElement element) {
		element.clear();
	}

	/**
	 * @author rosary.venkatraman.
	 * This method sends value to the text field using web element.
	 * @param element
	 * @param value
	 */
	public void doSendkeysByWebElement(WebElement element,String value){
		clearField(element);
		element.sendKeys(value);
	}

	/**
	 * @author rosary.venkatraman.
	 * This method selects the value from dropdown using visible text.
	 * @param element
	 * @param value
	 */
	public void doSelectFromDropDown(WebElement element,String value){
		getElementsByWebelement(element);
		select=new Select(element);
		select.selectByVisibleText(value);
	}

	/**
	 * @author rosary.venkatraman.
	 * This method selects the value from dropdown using index value.
	 * @param element
	 * @param index
	 */
	public void doSelectFromDropDown(WebElement element,int index){
		getElementsByWebelement(element);
		select=new Select(element);
		select.selectByIndex(index);
	}

	/**
	 * @author rosary.venkatraman.
	 * This method hovers on the web element.
	 * @param element
	 */
	public void moveToElement(WebElement element){
		try{
			action=new Actions(driver);
			action.moveToElement(element).build().perform();
		}
		catch(Exception e){
			e.printStackTrace();
		}
	}

	/**
	 * @author rosary.venkatraman.
	 * This method hovers on the web element and clicks it.
	 * @param element
	 */
	public void moveToElementAndClick(WebElement element){
		try{
			elementwaitByWebElement(element);
			action=new Actions(driver);
			action.moveToElement(element).click().build().perform();
		}
		catch(Exception e){
			e.printStackTrace();
		}
	}

	/**
	 * @author rosary.venkatraman.
	 * This method prints all the available options in the drop down.
	 * @param element
	 */
	public  void getAllOptionsFromDropDown(WebElement element){
		try{
			select=new Select(element);
			List<WebElement> ls=select.getOptions();
			ls.size();
			for(int i=0;i<ls.size();i++){
				String value=ls.get(i).getText();
				System.out.println(value);
			}
		}
		catch(Exception e){
			e.printStackTrace();
		}

	}

	/**
	 * @author rosary.venkatraman.
	 * This method selects the value from drop down programmatically.
	 * @param element
	 * @param givenvalue
	 */
	public  void selectValueFromDropDownByIteration(WebElement element, String givenvalue){
		select=new Select(element);
		List<WebElement> ls=select.getOptions();
		ls.size();
		for(int i=0;i<ls.size();i++){
			String value=ls.get(i).getText();
			System.out.println(value);
			if(value.equals(givenvalue)){
				ls.get(i).click();
				break;
			}

		}
	}

	/**
	 * @author rosary.venkatraman.
	 * This method switches to the child window.
	 * @param element
	 */
	public void windowHandlers(WebElement element){
		try{
			element.click();
			Set<String> handles=driver.getWindowHandles();
			Iterator<String> it=handles.iterator();
			String mainwindowId=it.next();
			System.out.println("Mainwindow is :" +mainwindowId);
			String childwindowId=it.next();
			System.out.println("Childwindow is :" +childwindowId);
			driver.switchTo().window(childwindowId);
		}
		catch(Exception e){
			e.printStackTrace();
		}

	}

	/**
	 * @author rosary.venkatraman.
	 *  This method switches to the child window using JavaScript executor.
	 * @param element
	 */
	public void JavaScriptwindowHandlers(WebElement element){
		//element.click();
		try{
			elementwaitByWebElement(element);
			JavaScriptUtil.clickElementByJS(element, driver);
			Set<String> handles=driver.getWindowHandles();
			Iterator<String> it=handles.iterator();
			String mainwindowId=it.next();
			System.out.println("Mainwindow is :" +mainwindowId);
			String childwindowId=it.next();
			System.out.println("Childwindow is :" +childwindowId);
			driver.switchTo().window(childwindowId);
		}
		catch(Exception e){
			e.printStackTrace();
		}
	}

	/**
	 * @author rosary.venkatraman.
	 * This method verifies the presence of submenus under menu.
	 * @param Menu
	 * @param submenu
	 * @return
	 */
	public boolean verifyMenus_Presence(WebElement Menu, WebElement submenu){
		elementwaitByWebElement(Menu);
		Menu.click();
		elementwaitByWebElement(submenu);
		return submenu.isDisplayed();
	}

	/**
	 * @author rosary.venkatraman.
	 * This method gives the number of rows in a table by passing the xpath of the table as an argument.
	 * @param xpathexpression
	 * @return
	 */
	public int getRowCount(String tablexpath){
		List<WebElement> rows=driver.findElements(By.xpath(tablexpath));
		int rowCount=rows.size();

		return rowCount;
	}

	/**
	 * @author rosary.venkatraman.
	 * This method gives the items in a specific column of a table.
	 * @param beforexpath
	 * @param afterxpath
	 * @param xpathexpression
	 * @return 
	 */
	public String getWebTableData(String beforexpath,String afterxpath, String tablexpath){
		int rowCount=getRowCount(tablexpath);
		String cellvalue = null;
		for(int rowNum=1;rowNum<=rowCount;rowNum++){
			String actualxpath=beforexpath+rowNum+afterxpath;
			cellvalue=driver.findElement(By.xpath(actualxpath)).getText();
			System.out.println(cellvalue);

		}
		return cellvalue;
	}


	/**
	 * @author rosary.venkatraman
	 * This method is used to verify the result set of web table data after filter applied on any column with given value.
	 * @param beforexpath
	 * @param afterxpath
	 * @param xpathexpression
	 * @param value
	 * @return
	 */
	public boolean verifyWebTableData(String beforexpath,String afterxpath, String tablexpath, String value){
		int rowCount=getRowCount(tablexpath);
		if(rowCount==0){
			return false;
		}
		for(int rowNum=1;rowNum<=rowCount;rowNum++){
			String actualxpath=beforexpath+rowNum+afterxpath;
			String cellvalue=driver.findElement(By.xpath(actualxpath)).getText();
			System.out.println(cellvalue);
			if(!cellvalue.toLowerCase().contains(value.toLowerCase())){
				return false;
			}

		}

		return true;

	}

	/**
	 * @author rosary.venkatraman
	 * This method is used to verify the result set data is correct after applying filter with pagination applied.
	 * @param beforexpath
	 * @param afterxpath
	 * @param tablexpath
	 * @param filtervalue
	 * @param paginationxpath
	 * @param nextbtn
	 * @return
	 */
	public boolean verifyResultsetAfterFilter(String beforexpath,String afterxpath, String tablexpath, String filtervalue,
			String paginationxpath, WebElement nextbtn){

		List<String> cellvalue= new ArrayList<String>();
		List<WebElement> celldata= new ArrayList<WebElement>();
		String actualxpath=null;
		int rowCount=getRowCount(tablexpath);
		for(int rowNum=1;rowNum<=rowCount;rowNum++)//To get the data of the specified column in a list of string.
		{
			actualxpath=beforexpath+rowNum+afterxpath;
			celldata=driver.findElements(By.xpath(actualxpath));
			for(WebElement element:celldata){
				cellvalue.add(element.getText());
			}
		}

		System.out.println(cellvalue.size());
		cellvalue = cellvalue.stream().map(String::toLowerCase).collect(Collectors.toList());//To convert all the values in a list of string to lowercase.
		for(String cell:cellvalue){
			System.out.println(cell);
			if (!(cell.contains(filtervalue.toLowerCase()))){
				return false;
			}
		}

		TimeUtil.shortWait();
		List<WebElement> pagination=driver.findElements(By.xpath(paginationxpath));
		System.out.println(pagination.size());

		if(pagination.size()>0){
			int i=1;
			int count=pagination.size();
			for( i=i+1;i<count;i++){
				TimeUtil.shortWait();
				nextbtn.click();
				TimeUtil.shortWait();
				System.out.println("btn clicked");
				celldata=driver.findElements(By.xpath(actualxpath));
				cellvalue= new ArrayList<String>();;
				celldata= new ArrayList<WebElement>();
				actualxpath=null;

				for(int rowNum=1;rowNum<=rowCount;rowNum++)
				{
					actualxpath=beforexpath+rowNum+afterxpath;
					celldata=driver.findElements(By.xpath(actualxpath));
					for(WebElement element:celldata){
						cellvalue.add(element.getText());
					}
				}
				cellvalue = cellvalue.stream().map(String::toLowerCase).collect(Collectors.toList());;
				for(String cell:cellvalue){
					System.out.println(cell);
					if (!(cell.contains(filtervalue.toLowerCase()))){

						return false;
					}
				}
			}
		}
		return true;
	}

	public boolean verifyResultsetAfterMultiSelect(String beforexpath,String afterxpath, String tablexpath, String filtervalue1,String filtervalue2,
			String paginationxpath, WebElement nextbtn){

		List<String> cellvalue= new ArrayList<String>();
		List<WebElement> celldata= new ArrayList<WebElement>();
		String actualxpath=null;
		int rowCount=getRowCount(tablexpath);
		for(int rowNum=1;rowNum<=rowCount;rowNum++)//To get the data of the specified column in a list of string.
		{
			actualxpath=beforexpath+rowNum+afterxpath;
			celldata=driver.findElements(By.xpath(actualxpath));
			for(WebElement element:celldata){
				cellvalue.add(element.getText());
			}
		}

		System.out.println(cellvalue.size());
		cellvalue = cellvalue.stream().map(String::toLowerCase).collect(Collectors.toList());//To convert all the values in a list of string to lowercase.
		for(String cell:cellvalue){
			System.out.println(cell);
			if(!cell.toLowerCase().contains(filtervalue1.toLowerCase())&!cell.toLowerCase().contains(filtervalue2.toLowerCase())){
				return false;
			}
		}

		TimeUtil.shortWait();
		List<WebElement> pagination=driver.findElements(By.xpath(paginationxpath));
		System.out.println(pagination.size());

		if(pagination.size()>0){
			int i=1;
			int count=pagination.size();
			for( i=i+1;i<count;i++){
				TimeUtil.shortWait();
				nextbtn.click();
				TimeUtil.shortWait();
				System.out.println("btn clicked");
				celldata=driver.findElements(By.xpath(actualxpath));
				cellvalue= new ArrayList<String>();;
				celldata= new ArrayList<WebElement>();
				actualxpath=null;

				for(int rowNum=1;rowNum<=rowCount;rowNum++)
				{
					actualxpath=beforexpath+rowNum+afterxpath;
					celldata=driver.findElements(By.xpath(actualxpath));
					for(WebElement element:celldata){
						cellvalue.add(element.getText());
					}
				}
				cellvalue = cellvalue.stream().map(String::toLowerCase).collect(Collectors.toList());;
				for(String cell:cellvalue){
					System.out.println(cell);
					if(!cell.toLowerCase().contains(filtervalue1.toLowerCase())){
						return false;
					}if(!cell.toLowerCase().contains(filtervalue2.toLowerCase())){
						return false;
					}
				}
			}
		}
		return true;
	}
	/*public void FileDownloadFunctionalitySetUP(){
		folder=new File(UUID.randomUUID().toString());
		folder.mkdir();

		HashMap<String, Object> chromePref=new HashMap<String, Object>();
		chromePref.put("profile.default_content_settings.popups",0);
		chromePref.put("download.default_directory", folder.getAbsolutePath());

		ChromeOptions options=new ChromeOptions();
		options.setExperimentalOption("prefs", chromePref);
		DesiredCapabilities cap=DesiredCapabilities.chrome();
		cap.setCapability(ChromeOptions.CAPABILITY, options);

	}*/
}