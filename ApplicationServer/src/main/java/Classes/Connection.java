package Classes;

/**
 * Created by imerir on 30/09/2014.
 */

import java.io.IOException;
import java.net.InetAddress;
import java.net.ServerSocket;
import java.net.Socket;

public class Connection {

    private ServerSocket socketserver;

    public Connection(){

        try {
            socketserver = new ServerSocket(2009);
            System.out.println("Connection initialise");

        } catch (IOException e) {

            e.printStackTrace();
        }
    }
}

