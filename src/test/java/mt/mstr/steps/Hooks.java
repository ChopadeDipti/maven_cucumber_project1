package mt.mstr.steps;

import java.io.File;
import java.io.IOException;
import java.util.Set;

import org.apache.commons.io.FileUtils;
import org.openqa.selenium.Cookie;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import mt.mstr.config.config;

public class Hooks {
	
	public WebDriver driver;
	@Before
	public void getAllcookies(){
		
		System.out.println("getallcookies");
//		Set<Cookie> cookies=driver.manage().getCookies();
//		for(Cookie cookie:cookies)
//		{
//			System.out.println(cookie.getName());
//		}
	}

	@After
	public void Screenshot() throws IOException
	{
//		File src=((TakesScreenshot)driver).getScreenshotAs(OutputType.FILE);
//		FileUtils.copyFile(src, new File("F:\\cjc_software\\java elipse\\eclips\\maven_cucumber_project1\\src\\test\\resources\\Screenshot\\"));
//	
		System.out.println("hello");
	}
	
}
