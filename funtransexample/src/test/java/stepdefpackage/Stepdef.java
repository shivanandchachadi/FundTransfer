package stepdefpackage;

import static org.junit.Assert.assertEquals;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.Select;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Stepdef {
	
	protected WebDriver driver;
	
	@Given("fundtransfer url,and registerd payee")
	public void fundtransfer_url_and_registerd_payee() {
		System.setProperty("webdriver.chrome.driver","c:\\Chromedriver\\chromedriver.exe");
	   
		driver=new ChromeDriver();
		driver.get("http://cookbook.seleniumacademy.com/fundTransfer.html");
		
	}

	@When("enter {string}")
	public void enter(String name) {
		
		Select obj=new Select(driver.findElement(By.xpath("//select[@id='payee']")));
		obj.selectByValue(name);
		
	   
	}

	@When("enter correct {string}")
	public void enter_correct(String amount) {
		
		driver.findElement(By.xpath("//input[@name='amount']")).sendKeys(amount);	
	    
	}

	@Then("click on transfer button and validate with the messages {string}")
	public void click_on_transfer_button_and_validate_with_the_messages(String status) {
		
		driver.findElement(By.xpath("//input[@type='button']")).click();
		WebElement actual_status=driver.findElement(By.xpath("//label[@id='message']"));
				
		assertEquals(actual_status.getText(),status);
	}

	

}
