package jp.co.company.web.controller.demo.helper;

import java.util.ArrayList;
import java.util.List;

import jp.co.company.web.dto.response.demo.item_list.component.Item;

public class ItemListHelper {
    public static List<Item> getItemList() {
        Item item1 = new Item();
        item1.setName("item1");
        item1.setPrice("100円");

        Item item2 = new Item();
        item2.setName("item2");
        item2.setPrice("300円");

        List<Item> itemList = new ArrayList<>();
        itemList.add(item1);
        itemList.add(item2);

        return itemList;
    }
}
