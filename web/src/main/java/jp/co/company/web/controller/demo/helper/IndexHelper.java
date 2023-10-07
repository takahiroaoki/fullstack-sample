package jp.co.company.web.controller.demo.helper;

import jp.co.company.web.dto.response.demo.index.component.Greeting;

public class IndexHelper {
    public static Greeting getGreeting() {
        Greeting greeting = new Greeting();
        greeting.setMessage("Hello world");
        return greeting;
    }
}
