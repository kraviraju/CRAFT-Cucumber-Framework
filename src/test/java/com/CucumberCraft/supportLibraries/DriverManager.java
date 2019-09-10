package com.CucumberCraft.supportLibraries;

import org.apache.log4j.Logger;
import java.util.concurrent.TimeUnit;

/**
 * A generic WebDriver manager, which handles multiple instances of WebDriver.
 * 
 * @author Cognizant
 */
public class DriverManager {

	/*
	 * Used for Multithreading of WebDriver Object
	 */
	private static ThreadLocal<CraftDriver> driver = new ThreadLocal<CraftDriver>();
	private static ThreadLocal<SeleniumTestParameters> testParameters = new ThreadLocal<SeleniumTestParameters>();

	static Logger log;

	static {
		log = Logger.getLogger(DriverManager.class);
	}

	public static CraftDriver getDriver() {
		if (driver.get() == null) {
			// this is need when running tests from IDE
			log.info("Thread has no WedDriver, creating new one");
			//setWebDriver(DriverFactory.createInstance(null));
		}
		log.debug("Getting instance of remote driver" + driver.get().getClass());
		return driver.get();
	}

	public static void setWebDriver(CraftDriver driver) {
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		DriverManager.driver.set(driver);
	}

	public static void setTestParameters(SeleniumTestParameters testParameters) {
		DriverManager.testParameters.set(testParameters);

	}

	public static SeleniumTestParameters getTestParameters() {
		return testParameters.get();
	}
}