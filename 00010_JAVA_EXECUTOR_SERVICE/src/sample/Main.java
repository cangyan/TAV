package sample;

import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

public class Main {

    public static void main(String[] args) {
        final int MAX_THREADS = 3;

        ExecutorService executorService = Executors.newFixedThreadPool(MAX_THREADS);

        for (int i = 0; i < 10; i++) {
            int no = i;

            int lifeTime = (int)(Math.random() * 9 + 1);

            executorService.submit(new SampleThread(no, lifeTime));
        }


        System.out.println("executor.shutdown();");
        executorService.shutdown();
    }
}
