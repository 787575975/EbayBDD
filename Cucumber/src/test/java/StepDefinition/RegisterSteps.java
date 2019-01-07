package StepDefinition;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class RegisterSteps {
    WebDriver driver;

   @Given("^User in register page$")
    public void User_in_register_page(){
       System.setProperty("WebDriver.chrome.driver","/Users/dola/IdeaProjects/EbayBDD/Cucumber/Driver/chromedriver 4");
       driver = new ChromeDriver();
       driver.navigate().to("https://reg.ebay.com/reg/PartialReg?ru=https%3A%2F%2Fwww.ebay.com%2F");
   }


    @Then("^put first name$")
    public void put_first_name() throws Throwable {
       driver.findElement(By.id("firstname")).sendKeys("Dola");
    }

    @Then("^put last name$")
    public void put_last_name() throws Throwable {
    driver.findElement(By.id("lastname")).sendKeys("Daoud");

    }

    @Then("^put email address$")
    public void put_email_address() throws Throwable {
    driver.findElement(By.id("email")).sendKeys("Doladaoud710@gmail.com");
    }

    @Then("^enter password$")
    public void enter_password() throws Throwable {
        driver.findElement(By.name("PASSWORD")).sendKeys("ABCD1234");

    }

    @Then("^click create account button$")
    public void click_create_account_button() throws Throwable {

       Thread.sleep(10000);
    driver.quit();
    }


}
