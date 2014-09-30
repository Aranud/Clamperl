package Classes;

import java.io.Serializable;
import java.util.List;

/**
 * Created by imerir on 29/09/2014.
 */

public class Users implements Serializable{

    private String firstName;
    private String lastName;
    private List<RoundPlayed> listRoundPlayed;
    private String email;
    private Long id;
    private String login;

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLogin() {
        return login;
    }

    public void setLogin(String login) {
        this.login = login;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public List<RoundPlayed> getListRoundPlayed() {
        return listRoundPlayed;
    }

    public void setListRoundPlayed(List<RoundPlayed> listRoundPlayed) {
        this.listRoundPlayed = listRoundPlayed;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }
}
