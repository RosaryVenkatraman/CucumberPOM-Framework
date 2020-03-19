package com.qa.pages;


import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;

import java.util.Properties;
import java.util.concurrent.TimeUnit;


import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

import com.qa.util.Constants;

import io.github.bonigarcia.wdm.WebDriverManager;

public class BasePage {

	public  WebDriver driver;
	public  Properties prop;
	//File folder;
	public static ThreadLocal<WebDriver> tdriver = new ThreadLocal<WebDriver>();
	
	public WebDriver init_driver(Properties prop){
		String browser=prop.getProperty("browser");
		if(browser.equalsIgnoreCase("chrome")){
			WebDriverManager.chromedriver().setup();
			driver=new ChromeDriver();
		}else if(browser.equalsIgnoreCase("ff")){
			WebDriverManager.firefoxdriver().setup();
			driver=new FirefoxDriver();
		}else
			System.out.println(browser+"is not a valid browser");
		driver.manage().window().maximize();
		driver.manage().deleteAllCookies();
		driver.manage().timeouts().pageLoadTimeout(Constants.DEFAULT_WAIT, TimeUnit.SECONDS);
		tdriver.set(driver);
		return getDriver();
	}
	
	public static synchronized WebDriver getDriver() {
		return tdriver.get();
	}
	
	public Properties init_prop(){
		prop=new Properties();
		try {
			FileInputStream IO=new FileInputStream("D:\\eclipse\\eclipse\\Javaprojects\\CucumberPOM\\src\\"
					+ "main\\java\\com\\qa\\config\\config.properties");
			try {
				prop.load(IO);
			} catch (IOException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		} catch (FileNotFoundException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return prop;
	}
	
		
}
