package com.CucumberCraft.TestNGrunners;

import java.io.File;
import java.io.IOException;
import java.util.Properties;

import org.testng.annotations.AfterSuite;
import org.testng.annotations.AfterTest;
import org.apache.commons.io.FileUtils;

import com.CucumberCraft.supportLibraries.Settings;
import com.CucumberCraft.supportLibraries.TimeStamp;
import com.CucumberCraft.supportLibraries.Util;
import com.github.mkolisnyk.cucumber.reporting.CucumberResultsOverview;
import com.github.mkolisnyk.cucumber.runner.ExtendedCucumberOptions;

import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;

@ExtendedCucumberOptions(jsonReport = "target/cucumber-report/Regresssion/cucumber.json", 
	jsonUsageReport = "target/cucumber-report/Regresssion/cucumber-usage.json", 
	outputFolder = "target/cucumber-report/Regresssion", 
	detailedReport = true, 
	detailedAggregatedReport = true, 
	overviewReport = true, 
	usageReport = true)

/**
 * Please notice that com.CucumberCraft.stepDefinations.CukeHooks class
 * is in the same package as the steps definitions.
 * It has two methods that are executed before or after scenario.
 * I'm using to take a screenshot if scenario fails.
 */
@CucumberOptions(features = "src/test/resources/features", 
	glue = { "com.CucumberCraft.stepDefinitions" }, 
	tags = { "@tag1, @tag2" }, 
	monochrome = true,
	plugin = {
		"pretty", 
		"pretty:target/cucumber-report/Regresssion/pretty.txt",
		"html:target/cucumber-report/Regresssion",
		"json:target/cucumber-report/Regresssion/cucumber.json",
		"junit:target/cucumber-report/Regresssion/cucumber-junitreport.xml" })

public class RunCucumberTests_Regression extends AbstractTestNGCucumberTests {

	@AfterTest
	private void test() {
		generateCustomReports();
		copyReportsFolder();
	}

	private void generateCustomReports() {

		CucumberResultsOverview results1 = new CucumberResultsOverview();
		results1.setOutputDirectory("target");
		results1.setOutputName("cucumber-results");
		results1.setSourceFile("target/cucumber-report/Regresssion/cucumber.json");
		try {
			results1.executeFeaturesOverviewReport();
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	private void copyReportsFolder() {

		String timeStampResultPath = TimeStamp.getInstance();

		File source = new File(Util.getTargetPath());
		File dest = new File(timeStampResultPath);

		try {
			FileUtils.copyDirectory(source, dest);
			try {
				FileUtils.cleanDirectory(source);
			} catch (Exception e) {

			}
		} catch (IOException e) {
			e.printStackTrace();
		}

		TimeStamp.reportPathWithTimeStamp = null;

	}

	@AfterSuite
	private void copyStoredReports() {

		Properties properties = Settings.getInstance();

		if (Boolean.valueOf(properties.getProperty("TrackOldResults"))) {
			String timeStampResultPath = TimeStamp.getOldReportInstance();

			File source = new File(Util.getResultsPath());
			File dest = new File(timeStampResultPath);

			try {
				FileUtils.copyDirectory(source, dest);
			} catch (IOException e) {
				e.printStackTrace();
			}

			TimeStamp.OldreportPathWithTimeStamp = null;
		}
	}
}