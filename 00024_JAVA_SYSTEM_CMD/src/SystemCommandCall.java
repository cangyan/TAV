import java.io.BufferedReader;
import java.io.InputStream;
import java.io.InputStreamReader;

public class SystemCommandCall {
    public static void main(String[] args) throws Exception {
        String cmd = "ping 8.8.8.8"; //运行的命令

        Runtime runtime = Runtime.getRuntime();

        Process p = runtime.exec(cmd);

        InputStream is = p.getInputStream();
        InputStreamReader isr = new InputStreamReader(is, "UTF-8");
        BufferedReader reader = new BufferedReader(isr);

        for (String line; (line = reader.readLine()) != null;) {
            System.out.println(line);
        }
    }
}
