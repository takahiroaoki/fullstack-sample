package jp.co.company.web.controller.demo;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import jp.co.company.web.controller.demo.helper.IndexHelper;
import jp.co.company.web.dto.response.demo.index.View;

@Controller
@RequestMapping("/demo")
public class IndexController {
    @GetMapping("/")
    String index(Model model) {
        View view = new View();
        view.setGreeting(IndexHelper.getGreeting());
        model.addAttribute("view", view);
        return "pages/demo/index";
    }
}
