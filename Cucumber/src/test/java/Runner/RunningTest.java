package Runner;


import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions
        (features = {"/Users/dola/IdeaProjects/EbayBDD/Cucumber/src/test/java/Features/Register.feature"},
        glue = {"StepDefinition"},
                format = {"pretty","json:Report/cucumber.json","html:report/cucumber-pretty"},
                strict = false,
                monochrome = true,
                tags = {"@FunctionalTest"},
                dryRun = false

        )





public class RunningTest {
}
