package AppLauncher;

import Classes.Users;
import Services.ServicesImpl.BDDCommunicationUtilisateurImpl;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by imerir on 29/09/2014.
 */
public class AppLauncher {

    public static void main(String args[]){

        BDDCommunicationUtilisateurImpl bddCommunicationUtilisateur = new BDDCommunicationUtilisateurImpl();
        List<Users> listUtilisateur = new ArrayList<Users>();
        listUtilisateur = bddCommunicationUtilisateur.list();

        for(Users users : listUtilisateur){
            System.out.println(users.getLogin());
        }

    }


}
