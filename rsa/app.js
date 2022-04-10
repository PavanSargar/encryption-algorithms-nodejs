const NodeRSA = require("node-rsa");

const key = new NodeRSA({
  b: 1024,
});

let secret = "This is a secret text";

// getting public and private keys from Key object
let public_key = key.exportKey("public");
let private_key = key.exportKey("private");

// console.log(`${public_key} \n ${private_key}`);

// Public and Private key that we got
// public_key =
//   "-----BEGIN PUBLIC KEY-----\n" +
//   "MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCvcH7/tOJblvaBDvpMDQ/HaYbF" +
//   "76gJYWMYvlhPGrByXGC0EFhRQi1gkcN/0gb0eVFVyoe5wEPtyKK7igHw8J33bar5" +
//   "njhb9WKiaoLzGCf3EPYT3c7WzJARerrOv9Icw2x3wNkhRciD9WmrHHsYwqdn1ugI" +
//   "J83AkbJZwbns8R9yIwIDAQAB" +
//   "-----END PUBLIC KEY-----";

// private_key = `
//   -----BEGIN RSA PRIVATE KEY-----
//   MIICXQIBAAKBgQCvcH7/tOJblvaBDvpMDQ/HaYbF76gJYWMYvlhPGrByXGC0EFhR
//   Qi1gkcN/0gb0eVFVyoe5wEPtyKK7igHw8J33bar5njhb9WKiaoLzGCf3EPYT3c7W
//   zJARerrOv9Icw2x3wNkhRciD9WmrHHsYwqdn1ugIJ83AkbJZwbns8R9yIwIDAQAB
//   AoGAcln0HX3scOCESfjWQo3c9BCfbRLZx0t4CR/AdccirVfzHErvFf/5jdFUyVK/
//   f8g3sKCzOOrOHAZDs9Ovkjlz7EWTcDRllqPSCwBQjIAyky79cLPwQxxWcd93ubl0
//   yG2MI7EIn3u5hpqlBmaDdkM/tY845Th7M+/mbBPMxbAxeHECQQDumaGkkQ6qcL9t
//   b5sJL23FcN4o0L2trzLGcLvdfOICsvDTiyK1hehFk/f6YzLoNtOcnQJb9095xOQS
//   7MSMyXl5AkEAvDu7o30Il+Vf34Pf1G/8MCWbPjHmlaq8Cqr46N/JaBRzSwg+3ZY/
//   38fKNW7wxi2Gd+XMpTkBRtmeA49wjZJ9ewJBALCisYTIEmhhYYXdupOZNhWV0hG7
//   PsCG0/sOWDXHDvZajGi/NynVATgJK+qEZ5p7hDsMDUQSGRcXiJTuDTAAs1kCQAZp
//   ImLXB0vlC/bYzu61QamCHl9n46qFPhI+8Gs98+YPjD2p8jopu9MrQr+/H4QgWMwM
//   j4OxBVIcZz1HzVWE/7ECQQDVGm9UUipJa/ktcVmtVMfZ+QngW09rZYGXwwfsQorH
//   H44dqED99vR1KehiPyaRHAhHHvECq4vqDXpRqnj1BpSK
//   -----END RSA PRIVATE KEY-----
//   `;

let key_private = new NodeRSA(private_key);
let key_public = new NodeRSA(public_key);

// Public key for encryption
let encryptedString = key_public.encrypt(secret, "base64");
console.log(encryptedString);


// Private key for decryption
let decrptedString = key_private.decrypt(encryptedString, "utf8");
console.log(decrptedString);

