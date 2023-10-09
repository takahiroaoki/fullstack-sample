package jp.co.company.web.controller.demo;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import jp.co.company.web.controller.demo.helper.ItemListHelper;
import jp.co.company.web.dto.response.demo.item_list.Ajax;

@RestController
@RequestMapping("/demo")
public class ItemListController {
    @GetMapping("/items")
    Ajax itemList() {
        Ajax response = new Ajax();
        response.setItemList(ItemListHelper.getItemList());
        return response;
    }
}
