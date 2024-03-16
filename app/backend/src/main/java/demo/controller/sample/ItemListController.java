package demo.controller.sample;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import demo.controller.sample.helper.item_list.ItemListHelper;
import demo.dto.response.item_list.Ajax;
import demo.dto.session.SampleSessionData;

@RestController
@RequestMapping("/sample")
public class ItemListController {
    private final SampleSessionData sampleSessionData;

    public ItemListController(SampleSessionData sessionData) {
        this.sampleSessionData = sessionData;
    }

    @GetMapping({ "/items", "/items/" })
    ResponseEntity<Ajax> itemList() {
        Ajax response = new Ajax();
        response.setItemList(ItemListHelper.getItemList());
        response.setText(sampleSessionData.getTest());
        return ResponseEntity.ok().body(response);
    }
}
