package com.CucumberCraft.supportLibraries;

/**
 * Enumeration to represent the mode of execution
 * 
 * @author Cognizant
 */
public enum ExecutionMode {
	LOCAL("local"),
	PERFECTO("perfecto"), 
	MOBILE("appium"),

	/**
	 * Execute on a mobile device using Appium
	 */

	;

	private String value;

	ExecutionMode(String value) {
		this.value = value;
	}

	public String getValue() {
		return value;
	}

}