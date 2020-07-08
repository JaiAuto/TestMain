package Runner;

import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;


@RunWith(Cucumber.class)
@CucumberOptions(features= "features",//adding feature files
glue= {"DefinedSteps"},//adding class files
plugin= {"html:test-outout","json:json_output/test.json","junit:junit_xml/test.xml"},//Generating reports in different formats
monochrome=true,//to see the output in console window in a format.
strict=true,// failed if there is any unimplemented method 
dryRun=false//to check if there is any unimplemented method
)
public class FeatureRunner {

}
