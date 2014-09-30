package Classes;

import java.io.Serializable;
import java.util.List;

/**
 * Created by imerir on 30/09/2014.
 */
public class Department implements Serializable{

    private String name;
    private State state;
    private List<City> city;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public List<City> getCity() {
        return city;
    }

    public void setCity(List<City> city) {
        this.city = city;
    }

    public State getState() {
        return state;
    }

    public void setState(State state) {
        this.state = state;
    }
}
