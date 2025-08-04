// Javascript Koşullu Yapılar (if-else)

    // todo: Kullanıcının yaşı 18'den büyükse ehliyet alabilir değilse alamaz yazdırınız.

    var yaş = 21;

    if(yaş > 18) {
        document.write("Ehliyet alabilir." + "<br>")
    } else{
        document.write("Ehliyet alamaz. " , "<br>");
    }

    // todo: Bir öğrencinin ortalaması 50'den büyükse geçtiniz değilse kaldınız ekrana yazdırınız.

    var ortalama = 49;

    if(ortalama > 50) {
        document.write("Geçtiniz." + "<br>")
    }else{
        document.write("Kaldınız." + "<br>");
    }

    // if-else ile javascript'te karar yapıları oluşturulur.İf eğer demektir.
    // if(){} else{} yapısın () içerisinde yazılacak koşul sağlanırsa buradaki {} içerisinde kodlar çalışır. Ama eğer sağlanmaz else kısmındaki {} içerisinde kod çalışır.

    // Birden fazla kontrol koşullu yapılarda nasıl kullanılır

    // Birden fazla koşullu yapılarında ilk if'den sonra diğer bir koşul için else if kullanılır.Sonuncu durum için ise else kullanılır.

    // todo: Kullanıcının ortalaması 50'den küçükse 'Kaldınız' 50-64 arasında ise 'Geçtiniz ama belge alamadınız.' 65-84 arasında 'Tebrekler.Teşekküer belgesi aldınız.'95-100 arasında ise 'Tebrikler.Taktir Belgesi aldınız.' yazdırınız.

    var öğrenciOrtalama = 44;

    if(öğrenciOrtalama < 50 ) {
        document.write("Kaldınız." + "<br>");
    }else if(öğrenciOrtalama >=50 && öğrenciOrtalama <65 ){
        document.write("Geçtiniz ama belge alamadnız." + "<br>");
    }else if(öğrenciOrtalama >=65 && öğrenciOrtalama < 85) {
        document.write("Tebrikler.Teşekkür belgesi aldınız." + "<br>");
    }else{
        document.write("Tebrikler.Takdir belgesi aldınız." + "<br>");
    }

    // Javasicript'te switch-case yapısı

    // Switch-case yapısı javascript'te bir ifadenin sahip olduğu değerlere göre işlem yapmamızı sağlar.

    // Örn: Kurs numarası 1 ise Frontend , 2 ise Backend,3 ise Mobile 4 ise İngilizce yazdırılarım

    var kursNumarası = 3;

    switch(kursNumarası){
        case 1:
            document.write("Frontend Kursu"+ "<br>");
            break;
        case 2:
            document.write("Backend Kursu" + "<br>");
            break;
        case 3:
            document.write("Mobile Kursu" + "<br>");
            break;
        case 4:
            document.write("İngilizce Kursu" + "<br>");
            break;       
    }

    // todo: haftagün adında bir değişken alacağız değer bit haftanın hangi gününe karşılık geliryose bunu yazdıram bir codı-cript yazınız.

    var haftagün = 5;

    switch(haftagün){
        case 1:
            document.write("Pazartesi" + "<br>");
            break;
        case 2:
            document.write("Salı" + "<br>");
            break;
        case 3:
            document.write("Çarşamba" + "<br>");
            break;
        case 4:
            document.write("Perşembe" + "<br>");
            break;
        case 5:
            document.write("Cuma" + "<br>");
            break;
        case 6:
            document.write("Cumartesi" + "<br>");
            break;
        case 7:
            document.write("Pazar" + "<br>");
            break;             
                
    }

    // DOM (Document Object Modal) Manipülasyonları

    // 1)document.getElementsByTagName() htmldeki elemanlara etiket isimlerine göre erişmek için kullanılır.
    
    var başlık1 = document.getElementsByTagName("h1")

    var link1 = document.getElementsByTagName("a")
    // console.log(başlık1)
    // console.log(link1)

    // document.getElementsByClassName() Htmlde'deki elemanlar class adına göre erişmek için kullanılır.

    var başlık2 = document.getElementsByClassName("title-1")

    // console.log(başlık2)

    // document.getElementById() Htmlde'deki elemanlar id adına göre erişmek için kullanılır
    var başlık3 = document.getElementById("title-2")
    // console.log(başlık3)

    // document.querySelector() ile elemanlara erişirken erişilecek eleman bir class ise document.querySelector() buradaki () içerisinde class adının başına .; id ise document.querySelector() buradaki () içerisinde # işareti konulmalıdır.Aksi halde erişim sağlanamaz.

    var text = document.querySelector("#paragraf-1")

    // console.log(text)

    // Html'den Javascript'e cekilen elemanlara still özellikleri verme:

    // text.style.backgroundColor = "red";
    
    // text.style.fontSize = "20px";

    // text.style.padding = "10px";

    // text.style.borderRadius = "20px";

    // Html'den js e çekilen elemanlara stikk özellikleri yukarı gibi verilebilir. Fakat bunu yapmak hem otomatik tamamlamaması hemde alacağı değerleri (eğer renk özelliklği verilicekse kırmızı,mavi,...) bize sunmamasından dolayı bizi zorlar.Bizde bunu ilgili elemana css dosyasında oluşturduğumuz classı ekleyerek yaparız.

    // text.classList.add("paragraf")
    // console.log(text)

    // text.classList.remove("paragraf")
    // console.log(text)

    // todo: add-style butonuna tıklanınca aşağıdaki dibe class ekleyen ve çıaran bir örnek yapınız.

    var addStyleBtn = document.querySelector(".add-style");
    var wrapper = document.querySelector("#wrapper")
    console.log(wrapper)

    addStyleBtn.addEventListener("click", function(){
       
        wrapper.classList.toggle("example")
        console.log(wrapper)
    })

     console.log(wrapper)