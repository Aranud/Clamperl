package Classes;

/**
 * Created by imerir on 30/09/2014.
 */

import java.io.*;
import java.net.InetAddress;
import java.net.ServerSocket;
import java.net.Socket;

public class Connection implements Runnable{

    private ServerSocket socketserver;
    private Socket socket;

    public Connection(){

        try {
            socketserver = new ServerSocket(1234);


            System.out.println("Connection initialise");

        } catch (IOException e) {

            e.printStackTrace();
        }
    }

    public void run(){

        try {
            while(true){
                socket = socketserver.accept(); // Un client se connecte on l'accepte
                System.out.println("Une connection est accepte");

                DataInputStream dIn = new DataInputStream(socket.getInputStream());
                DataOutputStream dOut = new DataOutputStream(socket.getOutputStream());
                dOut.write("GET /index.php HTTP/1.0\r\n\r\n".getBytes());

//                PrintWriter out =
//                        new PrintWriter(socket.getOutputStream(), true);
//                BufferedReader in =
//                        new BufferedReader(
//                                new InputStreamReader(socket.getInputStream()));
//                BufferedReader stdIn =
//                        new BufferedReader(
//                                new InputStreamReader(System.in));

//                String userInput;
//                while ((userInput = stdIn.readLine()) != null) {
//                    out.println(userInput);
//                    System.out.println("echo: " + in.readLine());
//                }

                // out.println("Hello World");

                //socket.close();
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

//    try {
//        URL myURL = new URL("http://example.com/");
//        URLConnection myURLConnection = myURL.openConnection();
//        myURLConnection.connect();
//    }
//    catch (MalformedURLException e) {
//        // new URL() failed
//        // ...
//    }
//    catch (IOException e) {
//        // openConnection() failed
//        // ...
//    }
}

