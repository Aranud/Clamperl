package Logic;

import Model.Product;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by imerir on 01/10/2014.
 */
import javax.faces.bean.ManagedBean;
import javax.faces.bean.ApplicationScoped;

@ManagedBean
@ApplicationScoped
public class Manager {

    List<Product> productList;

    public Manager() {
        this.productList = new ArrayList<Product>(); {
        };
    }

    public List<Product> getProductList() {
        return productList;
    }

    public void setProductList(List<Product> productList) {
        this.productList = productList;
    }
}
