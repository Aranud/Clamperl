package Classes;

import java.io.Serializable;
import java.util.List;

/**
 * Created by imerir on 30/09/2014.
 */
public class State implements Serializable{

    private String name;
    private Country country;
    private List<Department> departments;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Country getCountry() {
        return country;
    }

    public void setCountry(Country country) {
        this.country = country;
    }

    public List<Department> getDepartments() {
        return departments;
    }

    public void setDepartments(List<Department> departments) {
        this.departments = departments;
    }
}
