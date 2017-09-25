import java.security.InvalidKeyException;
import java.security.Key;
import java.security.KeyPair;
import java.security.KeyPairGenerator;
import java.security.NoSuchAlgorithmException;
import java.security.PrivateKey;
import java.security.PublicKey;
import java.security.SecureRandom;
import java.security.Signature;
import java.security.SignatureException;
import java.util.logging.Level;
import java.util.logging.Logger;

/**
 * ECDSA 160bit 签名及签名验证例子
 */
public class ECDSASignature {

    public static void main(String argv[]) {
        signatureTest();
    }

    public static void signatureTest() {

        /**
         * 密钥对生成
         */
        KeyPairGenerator keyPairGenerator = null;
        try {
            keyPairGenerator = KeyPairGenerator.getInstance("EC");
        } catch (NoSuchAlgorithmException ex) {
            return;
        }
        SecureRandom secureRandom = new SecureRandom();
        keyPairGenerator.initialize(160, secureRandom);
        KeyPair pair = keyPairGenerator.generateKeyPair();
        Key publicKey = pair.getPublic();
        Key privateKey = pair.getPrivate();

        // 字符串
        String hako = "test";

        /**
         * 私钥签名（ECDSA 160bit）
         */
        byte[] sign = null;
        try {
            Signature signatureSign = null;
            signatureSign = Signature.getInstance("NONEwithECDSA");
            signatureSign.initSign((PrivateKey) privateKey, secureRandom);
            signatureSign.update(hako.getBytes());
            sign = signatureSign.sign();

            System.out.println("sign: " + new String(sign));

        } catch (InvalidKeyException | NoSuchAlgorithmException | SignatureException ex) {
            Logger.getLogger(ECDSASignature.class.getName()).log(Level.SEVERE, null, ex);
        }

        /**
         * 用公钥进行签名验证
         */
        Signature signatureVerify = null;
        try {
            signatureVerify = Signature.getInstance("NONEwithECDSA");
            signatureVerify.initVerify((PublicKey) publicKey);
            signatureVerify.update(hako.getBytes());
            boolean verifyResult = signatureVerify.verify(sign);
            System.out.println(verifyResult ? "签名OK" : "签名NG");

        } catch (NoSuchAlgorithmException | InvalidKeyException | SignatureException e) {
            Logger.getLogger(ECDSASignature.class.getName()).log(Level.SEVERE, null, e);
        }

    }

}