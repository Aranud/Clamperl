package DAO;

import java.io.Serializable;
import java.util.List;

/**
 * Created by imerir on 29/09/2014.
 */
public interface DAOGeneric<T, ID extends Serializable>{

    T findById(ID id);
    List<T> findAll();
    List<T> findByExemple(T exempleInstance);
    T makePersistent(T entity);
    void makeTransient(T entity);

}
