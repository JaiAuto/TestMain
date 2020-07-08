package DefinedSteps;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class DefinedSteps {
	WebDriver driver;

	@Given("^User is already on login page$")
	public void user_is_already_on_login_page() throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		System.setProperty("webdriver.chrome.driver", "C:\\Users\\jbalasal\\Desktop\\Selenium\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.get("http://demo.guru99.com/test/newtours/login.php");
	}

	@When("^site of login page is Demo$")
	public void site_of_login_page_is_Demo() throws Throwable {
		
	}

	@Then("^User enters login name as \"([^\"]*)\" and enters password as \"([^\"]*)\"$")
	public void user_enters_Login_Name_and_enters_password(String uname,String pass) throws Throwable {
		driver.findElement(By.xpath("//input[@name='userName']")).sendKeys(uname);
		driver.findElement(By.xpath("//input[@name='password']")).sendKeys(pass);
	}

	@Then("^User clicks on Login Button$")
	public void user_clicks_on_Login_Button() throws Throwable {
		driver.findElement(By.xpath("//input[@name='submit']")).click();

	}
	@Then("^User should be able to login$")
	public void user_should_be_able_to_login() throws Throwable {
		System.out.println("test");
		driver.close();

	}

}
