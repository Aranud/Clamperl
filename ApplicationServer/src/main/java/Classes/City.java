package Classes;

import java.io.Serializable;

/**
 * Created by imerir on 30/09/2014.
 */

public class City implements Serializable{

    private String name;
    private Department department;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Department getDepartment() {
        return department;
    }

    public void setDepartment(Department department) {
        this.department = department;
    }
}
