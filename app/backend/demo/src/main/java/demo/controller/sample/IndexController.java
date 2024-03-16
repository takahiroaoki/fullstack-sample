package demo.controller.sample;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import demo.controller.sample.helper.index.IndexHelper;
import demo.dto.response.index.View;
import demo.dto.session.SampleSessionData;
import lombok.AllArgsConstructor;

@Controller
@RequestMapping("/sample")
@AllArgsConstructor
public class IndexController {
    private final SampleSessionData sampleSessionData;

    @GetMapping({ "", "/" })
    String index(Model model) {
        sampleSessionData.setTest("test session scope");

        View view = new View();
        view.setGreeting(IndexHelper.getGreeting());
        model.addAttribute("view", view);
        return "pages/sample/index";
    }
}
