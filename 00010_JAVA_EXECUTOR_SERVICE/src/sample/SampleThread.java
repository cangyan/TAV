package sample;

import java.text.SimpleDateFormat;
import java.util.Calendar;

public class SampleThread implements Runnable {
    private int no;
    private int time;

    SimpleDateFormat sdf = new SimpleDateFormat("HH:mm:ss");

    SampleThread(int no, int time) {
        this.no = no;
        this.time = time;
    }

    @Override
    public void run() {
        System.out.println("No." + no + " start ID:" + Thread.currentThread().getId() + " 生命周期:" + time + " 现在时间:" + sdf.format(Calendar.getInstance().getTime()));
        try {
            Thread.sleep(time * 1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

        System.out.println("No." + no + " end ID:" + Thread.currentThread().getId() + " 生命周期:" + time + " 现在时间:" + sdf.format(Calendar.getInstance().getTime()));
    }
}
