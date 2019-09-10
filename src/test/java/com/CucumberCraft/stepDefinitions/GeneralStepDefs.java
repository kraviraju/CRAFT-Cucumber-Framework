package com.CucumberCraft.stepDefinitions;

import static org.testng.Assert.assertTrue;

import org.apache.log4j.Logger;

import com.CucumberCraft.supportLibraries.CraftDriver;
import com.CucumberCraft.supportLibraries.DriverManager;
import com.CucumberCraft.supportLibraries.Util;

import cucumber.api.java.en.Given;

public class GeneralStepDefs extends MasterStepDefs {

	static Logger log = Logger.getLogger(LoginStepDefs.class);
	CraftDriver driver = DriverManager.getDriver();

	@Given("^I am in the login page of the application$")
	public void i_am_in_login_page() {
		driver.get("http://newtours.demoaut.com");

		currentScenario.embed(Util.takeScreenshot(driver.getWebDriver()),
				"image/png");

		assertTrue(driver.getTitle().contains("Welcome")
				|| driver.getTitle().contains("Sign-on"));
	}
}