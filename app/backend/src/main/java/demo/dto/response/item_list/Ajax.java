package demo.dto.response.item_list;

import java.util.List;

import demo.dto.response.item_list.component.Item;
import lombok.Data;

@Data
public class Ajax {
    private List<Item> itemList;
    private String text;
}
