package com.CucumberCraft.supportLibraries;

import org.apache.log4j.Logger;
import org.testng.IInvokedMethod;
import org.testng.IInvokedMethodListener;
import org.testng.ITestResult;
import org.testng.internal.BaseTestMethod;

import java.lang.reflect.Field;
import java.util.Properties;

/**
 * Will be called before every TestNG Method * @author Cognizant
 */
public class WebDriverListener implements IInvokedMethodListener {

	static Logger log = Logger.getLogger(WebDriverListener.class);

	private static Properties properties = Settings.getInstance();;

	@Override
	public void beforeInvocation(IInvokedMethod method, ITestResult testResult) {

		SeleniumTestParameters testParameters = new SeleniumTestParameters();

		log.debug("BEGINNING: com.CucumberCraft.supportLibraries.WebDriverListener-beforeInvocation");

		if (method.isTestMethod()) {

			try {
				setDefaultTestParameters(method, testParameters);
				DriverManager.setTestParameters(testParameters);

			} catch (Exception ex) {
				log.error(ex.getMessage());
				ex.printStackTrace();
			}

		} else {
			log.warn("Provided method is NOT a TestNG testMethod!!!");
		}
		log.debug("END: org.stng.jbehave.LocalWebDriverListener.beforeInvocation");

	}

	@Override
	public void afterInvocation(IInvokedMethod method, ITestResult testResult) {

		log.debug("BEGINNING: WebDriverListener.afterInvocation");
		/*
		 * change the name of the test method that will appear in the report to
		 * one that will contain very handy when analysing results.
		 */
		if (method.isTestMethod()) {
			try {
				BaseTestMethod bm = (BaseTestMethod) testResult.getMethod();
				Field f = bm.getClass().getSuperclass()
						.getDeclaredField("m_methodName");
				f.setAccessible(true);
				String newTestName = testResult.getTestContext()
						.getCurrentXmlTest().getName()
						+ " - " + bm.getMethodName() + " - ";
				log.info("Renaming test method name from: '"
						+ bm.getMethodName() + "' to: '" + newTestName);
				f.set(bm, newTestName);

			} catch (Exception ex) {
				System.out.println("afterInvocation exception:\n"
						+ ex.getMessage());
				ex.printStackTrace();
			}
		}
		log.debug("END: WebDriverListener.afterInvocation");
	}

	private void setDefaultTestParameters(IInvokedMethod method,
			SeleniumTestParameters testParameters) {
		try {
			String executionMode = method.getTestMethod().getXmlTest()
					.getLocalParameters().get("ExecutionMode");

			switch (executionMode) {

			case "LOCAL":

				testParameters.setExecutionMode(ExecutionMode
						.valueOf(executionMode));
				if (method.getTestMethod().getXmlTest().getLocalParameters()
						.get("BrowserName") == null) {
					testParameters.setBrowser(Browser.valueOf(properties
							.getProperty("DefaultBrowser")));

				} else {
					testParameters.setBrowser(Browser.valueOf(method
							.getTestMethod().getXmlTest().getLocalParameters()
							.get("BrowserName")));
				}

				break;
			case "MOBILE":
				testParameters.setExecutionMode(ExecutionMode
						.valueOf(executionMode));
				if (method.getTestMethod().getXmlTest().getLocalParameters()
						.get("MobileExecutionPlatform") == null) {
					testParameters.setMobileToolName(MobileToolName
							.valueOf(properties
									.getProperty("DefaultMobileToolName")));
				} else {
					String mobileExecutionPlatform = method.getTestMethod()
							.getXmlTest().getLocalParameters()
							.get("MobileExecutionPlatform");
					testParameters
							.setMobileExecutionPlatform(MobileExecutionPlatform
									.valueOf(mobileExecutionPlatform));
				}

				if (method.getTestMethod().getXmlTest().getLocalParameters()
						.get("DeviceName") == null) {
					testParameters.setMobileToolName(MobileToolName
							.valueOf(properties
									.getProperty("DefaultDeviceName")));

				} else {
					testParameters.setDeviceName(method.getTestMethod()
							.getXmlTest().getLocalParameters()
							.get("DeviceName"));
				}

				break;
			case "PERFECTO":
				testParameters.setExecutionMode(ExecutionMode
						.valueOf(executionMode));
				if (method.getTestMethod().getXmlTest().getLocalParameters()
						.get("MobileExecutionPlatform") == null) {
					testParameters.setMobileToolName(MobileToolName
							.valueOf(properties
									.getProperty("DefaultMobileToolName")));
				} else {
					String mobileExecutionPlatform = method.getTestMethod()
							.getXmlTest().getLocalParameters()
							.get("MobileExecutionPlatform");
					testParameters
							.setMobileExecutionPlatform(MobileExecutionPlatform
									.valueOf(mobileExecutionPlatform));
				}

				if (testParameters.getIsDeviceUdid()) {

					testParameters.setDeviceName(method.getTestMethod()
							.getXmlTest().getLocalParameters()
							.get("DeviceName"));

				} else {
					testParameters
							.setModelName(method.getTestMethod().getXmlTest()
									.getLocalParameters().get("ModelName"));
					testParameters.setManuFacturerName(method.getTestMethod()
							.getXmlTest().getLocalParameters()
							.get("ManufacturerName"));

				}

				break;
			default:
				testParameters
						.setExecutionMode(ExecutionMode.valueOf(properties
								.getProperty("DefaultExecutionMode")));
				if (method.getTestMethod().getXmlTest().getLocalParameters()
						.get("BrowerName") == null) {
					testParameters.setBrowser(Browser.valueOf(method
							.getTestMethod().getXmlTest().getLocalParameters()
							.get("BrowerName")));
				} else {
					testParameters.setBrowser(Browser.valueOf(properties
							.getProperty("DefaultBrowser")));
				}
			}

		} catch (Exception ex) {
			log.error(ex.getMessage());
		}
	}
}