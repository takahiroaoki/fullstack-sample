package jp.co.company.web.controller.demo.helper.index;

import jp.co.company.web.controller.demo.response.index.component.Greeting;

public class IndexHelper {
    public static Greeting getGreeting() {
        Greeting greeting = new Greeting();
        greeting.setMessage("Hello world");
        return greeting;
    }
}
