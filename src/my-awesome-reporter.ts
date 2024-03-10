import type {
    Reporter, FullConfig, Suite, TestCase, TestResult, FullResult,TestError,TestStep
  } from '@playwright/test/reporter';
  
class MyReporter implements Reporter {
    constructor(options: { customOption?: string , Name?: string} = {}) {
      console.log(`my-awesome-reporter setup with customOption set to ${options.customOption} and  ${options.Name}`);
    }
    /**
     * Called once before running tests. All tests have been already discovered and put into a hierarchy of Suites.
     * @param config Resolved configuration.
     * @param suite The root suite that contains all projects, files, and test cases.
     */
    onBegin(config: FullConfig, suite: Suite) {
      console.log(`Starting the run with ${suite.allTests().length} tests`);
      console.log('####################onBegin()#########################')
    }

   /**
     * Called after a test has been started in the worker process.
     * @param test Test that has been started.
     * @param result Result of the test run.
     */
    onTestBegin(test: TestCase) {
      console.log(`Starting test ${test.title}`);
      console.log('####################onTestBegin()#########################')
    }
  
    /**
     * Called after a test has been finished in the worker process.
     * @param test Test that has been finished.
     * @param result Result of the test run.
     */
    onTestEnd(test: TestCase, result: TestResult) {
      console.log(`Finished test ${test.title}: ${result.status}`);
      console.log('####################onTestEnd()#########################')
    }
    /**
     * Called after all tests have been run, or testing has been interrupted.
     * @param result Result of the full test run.
     * @returns An optional Promise resolving to an object containing the status of the test run.
     */
    onEnd(result: FullResult) {
      console.log(`Finished the run: ${result.status}`);
      console.log('####################onEnd()#########################')
    }

    /**
     * Called on some global error, for example unhandled exception in the worker process.
     * @param error The error that occurred.
     */
    onError(error: TestError) {
        // Your implementation here
        console.log('####################onError()#########################')
    }
    /**
     * Called immediately before test runner exists. At this point all the reporters have received the reporter.onEnd() signal, so all the reports should be built. You can run the code that uploads the reports in this hook.
     * @returns An optional Promise.
     */
    async onExit(): Promise<void> {
        // Your implementation here
        console.log('####################onExit()#########################')
    }
    /**
     * Called when a test step started in the worker process.
     * @param test Test that the step belongs to.
     * @param result Result of the test run.
     * @param step Test step instance that has started.
     */
    onStepBegin(test: TestCase, result: TestResult, step: TestStep) {
        // Your implementation here
        console.log('####################onStepBegin()#########################')
    }

    /**
     * Called when a test step finished in the worker process.
     * @param test Test that the step belongs to.
     * @param result Result of the test run.
     * @param step Test step instance that has finished.
     */
    onStepEnd(test: TestCase, result: TestResult, step: TestStep) {
        // Your implementation here
        console.log('####################onStepEnd()#########################')
    }
    /**
     * Called when something has been written to the standard error in the worker process.
     * @param chunk Output chunk.
     * @param test Test that was running.
     * @param result Result of the test run.
     */
    onStdErr(chunk: string | Buffer, test: TestCase | undefined, result: TestResult | undefined) {
        // Your implementation here
        console.log('####################onStdErr()#########################')
    }

    /**
     * Called when something has been written to the standard output in the worker process.
     * @param chunk Output chunk.
     * @param test Test that was running.
     * @param result Result of the test run.
     */
    onStdOut(chunk: string | Buffer, test: TestCase | undefined, result: TestResult | undefined) {
        // Your implementation here
        console.log('####################onStdOut()#########################')
    }

    /**
     * Whether this reporter uses stdio for reporting. When it does not, Playwright Test could add some output to enhance user experience. If your reporter does not print to the terminal, it is strongly recommended to return false.
     * @returns A boolean indicating whether this reporter prints to stdio.
     */
    printsToStdio(): boolean {
        // Your implementation here
        console.log('####################printsToStdio()#########################')
        return true;
    }
}
export default MyReporter;