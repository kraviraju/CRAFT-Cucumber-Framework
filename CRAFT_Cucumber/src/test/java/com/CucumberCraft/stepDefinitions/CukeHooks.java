package com.CucumberCraft.stepDefinitions;

import java.io.File;
import java.io.IOException;
import java.util.Properties;

import org.apache.log4j.Logger;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebDriverException;

import com.CucumberCraft.supportLibraries.AppiumDriverFactory;
import com.CucumberCraft.supportLibraries.CraftDriver;
import com.CucumberCraft.supportLibraries.DriverManager;
import com.CucumberCraft.supportLibraries.ExecutionMode;
import com.CucumberCraft.supportLibraries.PerfectoDriverFactory;
import com.CucumberCraft.supportLibraries.PerfectoLabUtils;
import com.CucumberCraft.supportLibraries.RestApiForJira;
import com.CucumberCraft.supportLibraries.SeleniumTestParameters;
import com.CucumberCraft.supportLibraries.Settings;
import com.CucumberCraft.supportLibraries.Util;
import com.CucumberCraft.supportLibraries.WebDriverFactory;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;

public class CukeHooks extends MasterStepDefs {

	static Logger log;
	private CraftDriver driver;

	static {
		log = Logger.getLogger(CukeHooks.class);
	}

	@Before
	public void setUp(Scenario scenario) {
		try {
			currentScenario = scenario;
			currentTestParameters = DriverManager.getTestParameters();
			currentTestParameters.setScenarioName(scenario.getName());
			log.info("Running the Scenario" + scenario.getName());
			initializeWebDriver(currentTestParameters);
		} catch (Exception e) {
			log.error("Error at Before Scenario " + e.getMessage());
		}
	}

	@After
	public void embedScreenshot(Scenario scenario) {
		try {
			update(scenario);
			Properties properties = Settings.getInstance();
			CraftDriver driver = DriverManager.getDriver();
			SeleniumTestParameters testParameters = DriverManager
					.getTestParameters();
			if (Boolean.valueOf(properties
					.getProperty("PerfectoReportGeneration"))
					&& testParameters.getExecutionMode().equals(
							ExecutionMode.PERFECTO)) {
				try {
					driver.close();
					String Udid;

					if (!(driver.getCapabilities().getCapability("model") == null)) {
						Udid = driver.getCapabilities().getCapability("model")
								.toString();
					} else {
						Udid = driver.getCapabilities()
								.getCapability("deviceName").toString();
					}
					PerfectoLabUtils.downloadReport(driver.getRemoteDriver(),
							"pdf",
							Util.getResultsPath() + Util.getFileSeparator()
									+ scenario.getName() + "_" + Udid);
				} catch (IOException e) {
					e.printStackTrace();
					log.error("Problem while downloading Perfecto Report for "
							+ scenario.getName());
				}
			}

		} catch (Exception ex) {
			log.error("Problem while closing the Driver Object"
					+ ex.getMessage());

		} finally {
			CraftDriver driver = DriverManager.getDriver();
			if (driver != null) {
				driver.quit();
			}
		}

	}

	/**
	 * Embed a screenshot in test report if test is marked as failed And Update
	 * Task in JIRA
	 */
	private void update(Scenario scenario) {
		if (scenario.isFailed()) {
			try {
				CraftDriver driver = DriverManager.getDriver();
				Properties properties = Settings.getInstance();
				byte[] screenshot = ((TakesScreenshot) driver.getWebDriver())
						.getScreenshotAs(OutputType.BYTES);
				scenario.embed(screenshot, "image/png");
				/*
				 * Below Logic to Simple create Bug/Taks in Jira without
				 * Screenshot
				 */
				if (Boolean.valueOf(properties
						.getProperty("TrackIssuesInJiraWithScreenShots"))) {

					RestApiForJira.creatLog(scenario.getName(),
							scenario.getName());

				}
				/* Below Logic to create Bug/Taks in Jira with Screenshot */
				else if (Boolean.valueOf(properties
						.getProperty("TrackIssuesInJiraWithOutScreenShots"))) {
					File filePath = ((TakesScreenshot) driver.getWebDriver())
							.getScreenshotAs(OutputType.FILE);
					RestApiForJira.createLog(scenario.getName(),
							scenario.getName(), filePath.toString());
				}
			} catch (WebDriverException somePlatformsDontSupportScreenshots) {
				log.error(somePlatformsDontSupportScreenshots.getMessage());
			}
		}
	}

	private void initializeWebDriver(SeleniumTestParameters testParameters) {

		try {
			switch (testParameters.getExecutionMode()) {

			case LOCAL:
				WebDriver webdriver = WebDriverFactory
						.getWebDriver(testParameters.getBrowser());
				driver = new CraftDriver(webdriver);
				break;

			case MOBILE:
				WebDriver appiumDriver = AppiumDriverFactory
						.getAppiumDriver(testParameters);
				driver = new CraftDriver(appiumDriver);
				break;
				
			case PERFECTO:

				WebDriver perfectoDriver = PerfectoDriverFactory
						.getPerfectoAppiumDriver(testParameters);
				driver = new CraftDriver(perfectoDriver);

			default:
				log.warn("No Such ExecutionMode Available, please modify accordingly");
			}
			DriverManager.setWebDriver(driver);
		} catch (Exception ex) {
			ex.printStackTrace();
			log.error(ex.getMessage());
		}

	}

}