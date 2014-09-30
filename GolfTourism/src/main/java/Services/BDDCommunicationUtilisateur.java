package Services;

import Classes.Users;

import java.util.List;

/**
 * Created by imerir on 29/09/2014.
 */
public interface BDDCommunicationUtilisateur {

    public List list();
    public Users read(Long id);
    public Users save(Users Users);
    public Users update(Users Users);
    public void delete(Users Users);


}
