package Model;

import java.io.Serializable;

/**
 * Created by imerir on 01/10/2014.
 */
public class Product implements Serializable{

    private Integer id;
    private String name;
    private Double number;

    public Product(){

        id = 1;
        name = "Test";
        number = 1234.0;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Double getNumber() {
        return number;
    }

    public void setNumber(Double number) {
        this.number = number;
    }

}
