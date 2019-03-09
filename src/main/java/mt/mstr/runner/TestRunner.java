package mt.mstr.runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(plugin={"pretty","html:target/cucumber","html:target/htmlreports","junit:junit/cucumber.junit"},
features={"F:\\cjc_software\\java elipse\\eclips\\maven_cucumber_project1\\src\\test\\resources\\Features_Collection\\"},
glue={"mt.mstr.steps"},
monochrome=true,
tags={"@SmokeTest"})
 public class TestRunner {
	

}
