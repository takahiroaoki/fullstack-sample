package jp.co.company.web.controller.demo;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import jp.co.company.web.controller.demo.helper.item_list.ItemListHelper;
import jp.co.company.web.controller.demo.response.item_list.Ajax;
import jp.co.company.web.dto.session.SampleSessionData;

@RestController
@RequestMapping("/demo")
public class ItemListController {
    private final SampleSessionData sampleSessionData;

    public ItemListController(SampleSessionData sessionData) {
        this.sampleSessionData = sessionData;
    }

    @GetMapping({ "/items", "/items/" })
    Ajax itemList() {
        Ajax response = new Ajax();
        response.setItemList(ItemListHelper.getItemList());
        response.setText(sampleSessionData.getTest());
        return response;
    }
}
