package demo.controller.sample;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import demo.controller.sample.helper.index.IndexHelper;
import demo.controller.sample.response.index.View;
import demo.session.SampleSessionData;

@Controller
@RequestMapping("/sample")
public class IndexController {
    private final SampleSessionData sampleSessionData;

    public IndexController(SampleSessionData sessionData) {
        this.sampleSessionData = sessionData;
    }

    @GetMapping({ "", "/" })
    String index(Model model) {
        sampleSessionData.setTest("test session scope");

        View view = new View();
        view.setGreeting(IndexHelper.getGreeting());
        model.addAttribute("view", view);
        return "pages/sample/index";
    }
}
