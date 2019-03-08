package mt.mstr.steps;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.ie.InternetExplorerDriver;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import mt.mstr.config.config;

public class mercurytsCucumber {
	
	public WebDriver driver;
	@When("^user open \"(.*)\" browser$")
    public String OpenBrowser(String browsernm)
    {
		System.out.println("openbrowser");
	    
		System.out.println("openbrowser");
    	if(browsernm.equalsIgnoreCase("chrome"))
    	{
    		System.setProperty("webdriver.chrome.driver","F:\\16122018\\chromedriver_win32\\chromedriver.exe");
    		driver=new ChromeDriver();
    		System.out.println("open chrome browser");
    	}else if(browsernm.equalsIgnoreCase("firefox"))
    	{
    		System.setProperty("webdriver.gecko.driver","F:\\16122018\\geckodriver-v0.23.0-win64\\geckodriver.exe");
    		driver=new InternetExplorerDriver();
    		System.out.println("open firefox browser");
    	}else{
    		System.setProperty("webdriver.ie.driver","F:\\16122018\\IEDriverServer_x64_3.14.0 (10)\\IEDriverServer.exe");
    		driver=new FirefoxDriver();
    		System.out.println("open internetexplorer browser");
    	}
		return browsernm;
    	
    }
	@And("^user enter the application url\"(.*)\"$")
    public String enterApplicationurl(String url)
    {
		driver.get(url);
		return url;
    }
	@And("^user waits \"(.*)\" seconds to load login page$")
    public void waitTillloginPageload(int timeout)
    {
		driver.manage().timeouts().pageLoadTimeout(timeout,TimeUnit.SECONDS);
    	System.out.println("login page is loaded");
    }
	@And("^user maximize login page$")
    public void maximizeBrowser()
    {
		driver.manage().window().maximize();
    	System.out.println("maximize browser");
    }
	@Then("^mercuryTours application login page should be displayed$")
	public void verifyTitle()
	{
		
		String title=driver.getTitle();
		if(title.equalsIgnoreCase("Welcome: Mercury Tours"))
		{
			System.out.println("user is on login page");
		}
	}
	@Given("^user access login page of mercury Tours application$")
	public void verifytitile1()
	{
//		WebElement title1=driver.findElement(By.xpath("//img[@src='/images/hdr_findflight.gif"));
//		String s=title1.getText();
		System.out.println("s");
	}
    @And("^user enters \"(.*)\" as username$")
	public void enterUsername(String username)
	{
		WebElement usernm=driver.findElement(By.xpath("//input[@name='userName']"));
		usernm.sendKeys(username);
		System.out.println("username:"+usernm);
		
	}
    
    @And("^user enters \"(.*)\" as password$")
    public void enterPassword(String passwd)
	{
		WebElement pass=driver.findElement(By.xpath("//input[@name='password']"));
		pass.sendKeys(passwd);
		System.out.println("password:"+pass);
		
	}
    
    @And("^user click on sign in button$")
    public void clickonlogin() throws InterruptedException
    {
    	Thread.sleep(15000);
    	driver.findElement(By.xpath("//input[@name='login']")).click();
    	System.out.println("click on sign in button");
    }
    
    @Then("^user is on flight finder page$")
    public void flightfinder()
    {
    	WebElement flightfinder=driver.findElement(By.xpath("//img[@src='/images/masts/mast_flightfinder.gif']"));
    	String s1= flightfinder.getText();
    	System.out.println("flightfinder name is:"+s1);
    }
    
    @When("^user click on signoff link$")
    public void clicksignoff()
    {
    	driver.findElement(By.linkText("SIGN-OFF")).click();
    	System.out.println("signoff");
    }

    @Then("^user access sign on page$")
    public void signonpage()
    {
    	WebElement signon=driver.findElement(By.xpath("//img[@src='/images/masts/mast_signon.gif']"));
    	String s2=signon.getText();
    	System.out.println(s2);
    	System.out.println("signon");
    }

}
