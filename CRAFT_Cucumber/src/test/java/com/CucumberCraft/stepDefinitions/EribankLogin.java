package com.CucumberCraft.stepDefinitions;

import org.apache.log4j.Logger;

import com.CucumberCraft.pageObjects.EribankLoginPage;
import com.CucumberCraft.supportLibraries.CraftDriver;
import com.CucumberCraft.supportLibraries.DriverManager;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class EribankLogin extends MasterStepDefs {

	static Logger log = Logger.getLogger(EribankPayment.class);
	CraftDriver driver = DriverManager.getDriver();

	@Given("^I launch eribank$")
	public void i_launch_eribank() throws Throwable {
		System.out.println("LAUNCHED");
	}

	@When("^I enter \"([^\"]*)\" and \"([^\"]*)\"$")
	public void i_enter_and(String userName, String password) throws Throwable {
		driver.findElement(EribankLoginPage.userName).sendKeys(userName);
		driver.findElement(EribankLoginPage.password).sendKeys(password);
	}

	@Then("^I click LOGIN$")
	public void i_click_LOGIN() throws Throwable {
		driver.findElement(EribankLoginPage.login).click();
	}

	@Then("^I click LOGOUT$")
	public void i_click_LOGOUT() throws Throwable {
		driver.findElement(EribankLoginPage.logout).click();
	}
}
