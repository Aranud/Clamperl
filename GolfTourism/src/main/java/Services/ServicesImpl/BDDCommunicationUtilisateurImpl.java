package Services.ServicesImpl;

import Classes.Users;
import DAO.DAOUsers;
import Hibernate.HibernateUtils;
import Services.BDDCommunicationUtilisateur;
import org.hibernate.SessionFactory;
import org.hibernate.classic.Session;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by imerir on 29/09/2014.
 */
public class BDDCommunicationUtilisateurImpl implements BDDCommunicationUtilisateur {

    @Autowired
    DAOUsers daoUsers;

    public List list() {
        List<Users> employees = new ArrayList();
        employees = daoUsers.findAll();
        return employees;
    }
    public Users read(Long id) {
        SessionFactory sf = HibernateUtils.getSessionFactory();
        Session session = sf.openSession();

        Users Users = (Users) session.get(Users.class, id);
        session.close();
        return Users;
    }
    public Users save(Users Users) {
        SessionFactory sf = HibernateUtils.getSessionFactory();
        Session session = sf.openSession();

        session.beginTransaction();

        Long id = (Long) session.save(Users);
        Users.setId(id);

        session.getTransaction().commit();

        session.close();

        return Users;
    }

    public Users update(Users Users) {
        SessionFactory sf = HibernateUtils.getSessionFactory();
        Session session = sf.openSession();

        session.beginTransaction();

        session.merge(Users);

        session.getTransaction().commit();

        session.close();
        return Users;

    }

    public void delete(Users Users) {
        SessionFactory sf = HibernateUtils.getSessionFactory();
        Session session = sf.openSession();

        session.beginTransaction();

        session.delete(Users);

        session.getTransaction().commit();

        session.close();
    }
}
