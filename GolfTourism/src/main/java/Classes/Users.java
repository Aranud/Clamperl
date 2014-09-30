package Classes;


import javax.persistence.*;
import java.io.Serializable;

/**
 * Created by imerir on 29/09/2014.
 */

@Entity
@Table(name = "UTILISATEURS")
public class Users implements Serializable{

    @Id
    @GeneratedValue
    private Long id;

    @Column(name = "LOGIN")
    private String login;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getLogin() {
        return login;
    }

    public void setLogin(String login) {
        this.login = login;
    }
}
