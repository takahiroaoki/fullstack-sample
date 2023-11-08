package demo.controller.sample.helper.index;

import demo.controller.sample.response.index.component.Greeting;

public class IndexHelper {
    public static Greeting getGreeting() {
        Greeting greeting = new Greeting();
        greeting.setMessage("Hello world");
        return greeting;
    }
}
