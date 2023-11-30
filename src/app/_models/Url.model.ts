export class Url {
    private static URL_BD = "http://localhost:8080";
    private static URL_Crypto = "https://min-api.cryptocompare.com";
    private static API_KEY_CRYPTO = "1e6bb4f007e292a8e8c94b8ef6e7a0a13ed757476e2204dcbf721b850248f4c1";

    static getUrlBD() {
      return this.URL_BD;
    }
    
    static getUrlCrypto() {
      return this.URL_Crypto;
    }
    
    static getAPIKeyCrypto() {
      return this.API_KEY_CRYPTO;
    }
}