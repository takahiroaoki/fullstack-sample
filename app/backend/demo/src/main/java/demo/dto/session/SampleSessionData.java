package demo.dto.session;

import java.io.Serializable;

import org.springframework.stereotype.Component;
import org.springframework.web.context.annotation.SessionScope;

import lombok.Data;

@Component
@Data
@SessionScope
public class SampleSessionData implements Serializable {
    private String test;

    public void clear() {
        test = null;
    }
}
