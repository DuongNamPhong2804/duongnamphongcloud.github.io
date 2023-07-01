OC.L10N.register(
    "bruteforcesettings",
    {
    "Brute-force settings" : "Brute-force ayarları",
    "Whitelist IPs" : "Beyaz listedeki IP adresleri",
    "Brute Force Protection is meant to protect Nextcloud servers from attempts to\nguess account passwords in various ways. Besides the obvious \"*let's try a big\nlist of commonly used passwords*\" attack, it also makes it harder to use\nslightly more sophisticated attacks via the reset password form or trying to\nfind app password tokens.\n\nIf triggered, brute force protection makes requests coming from an IP on a\nbruteforce protected controller with the same API slower for a 24 hour period.\n\nWith this app, the admin can exempt an IP address or range from this\nprotection which can be useful for testing purposes or when there are false\npositives due to a lot of accounts on one IP address." : "Brute Force Koruması Nextcloud sunucularını çeşitli hesap parolası bulma yöntemlerine \nkarşı korur. Bilinen **büyük sık kullanılan parola listesini denemek** saldırısının yanında\nparola sıfırlama formunu ya da uygulama parola kodlarını kullanan daha karmaşık \nsaldırı yöntemlerine karşı da koruma sağlar.\n\nBrute force koruması belirli bir IP adresinden yapılan bir saldırıyı algıladığında\nistekler 24 saat süreyle brute force tarafından korunan ve aynı API uygulamasını\nkullanan daha yavaş bir denetçiye yönlendirilir\n\nBu uygulama ile, yöneticiler bir IP adresinin bu koruma tarafından engellenmemesini\nsağlayabilir. Böylece denemeler sırasında ya da aynı adresten gelen çok sayıda \nhesap nedeniyle hatalı algılama durumunda engelleme yapılmaması sağlanır.",
    "Brute-force IP whitelist" : "Brute Force IP beyaz listesi",
    "To whitelist IP ranges from the brute-force protection specify them below. Note that any whitelisted IP can perform authentication attempts without any throttling. For security reasons, it is recommended to whitelist as few hosts as possible or ideally even none at all." : "Beyaz listeye eklenerek brute-force korumasına katılmayacak IP aralıklarını aşağıda belirtebilirsiniz. Beyaz listeye alınan IP adreslerinin sınırsız sayıda kimlik doğrulama isteğinde bulunabileceğini unutmayın. Güvenlik nedeniyle olabildiğince ideal olarak hiç ya da olabildiğince az sayıda adres belirtmeniz önerilir.",
    "Add new whitelist" : "Yeni beyaz liste ekle",
    "Add" : "Ekle",
    "Delete" : "Sil"
},
"nplurals=2; plural=(n > 1);");
