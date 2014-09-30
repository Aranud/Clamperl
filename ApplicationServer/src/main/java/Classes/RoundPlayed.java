package Classes;

import java.io.Serializable;

/**
 * Created by imerir on 30/09/2014.
 */

public class RoundPlayed implements Serializable{

    private Users users;
    private City cityStart;
    private City cityEnd;
    private Integer kmTraveled;

    public Users getUsers() {
        return users;
    }

    public void setUsers(Users users) {
        this.users = users;
    }

    public Integer getKmTraveled() {
        return kmTraveled;
    }

    public void setKmTraveled(Integer kmTraveled) {
        this.kmTraveled = kmTraveled;
    }

    public City getCityEnd() {
        return cityEnd;
    }

    public void setCityEnd(City cityEnd) {
        this.cityEnd = cityEnd;
    }

    public City getCityStart() {
        return cityStart;
    }

    public void setCityStart(City cityStart) {
        this.cityStart = cityStart;
    }
}
