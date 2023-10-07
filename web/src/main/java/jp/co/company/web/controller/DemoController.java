package jp.co.company.web.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/demo")
public class DemoController {
    @GetMapping("/")
    String index() {
        return "pages/demo/index";
    }
}
