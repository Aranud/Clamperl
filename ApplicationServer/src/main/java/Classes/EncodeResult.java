package Classes;

import org.json.simple.JSONObject;

/**
 * Created by cpoizat on 30/09/2014.
 */

public class EncodeResult {

        public static void main(String[] args)
        {
            JSONObject obj = new JSONObject();

            obj.put("name", "foo");
            obj.put("num", new Integer(100));
            obj.put("balance", new Double(1000.21));
            obj.put("is_vip", new Boolean(true));

            System.out.print(obj);
        }

}
