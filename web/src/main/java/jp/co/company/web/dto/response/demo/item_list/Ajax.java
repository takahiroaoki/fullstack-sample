package jp.co.company.web.dto.response.demo.item_list;

import java.util.List;

import jp.co.company.web.dto.response.demo.item_list.component.Item;
import lombok.Data;

@Data
public class Ajax {
    private List<Item> itemList;
}
