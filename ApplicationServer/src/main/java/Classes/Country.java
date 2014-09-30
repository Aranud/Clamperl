package Classes;

import java.io.Serializable;
import java.util.List;

/**
 * Created by imerir on 30/09/2014.
 */
public class Country implements Serializable{

    private String name;
    private List<State> states;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public List<State> getStates() {
        return states;
    }

    public void setStates(List<State> states) {
        this.states = states;
    }
}
