// * Javascript Çıktı Metotları

// Javascript'de kullanıcıya dinamik şekilde çıktı vermek için şu yöntemleri kullanabiliriz:

//! 1-)document.write():

// Html kısmındaki body'nin javascript'deki karşılığı document objesidir.Bu alana yazdırma işlemi yapabilmek için ise bu objenin sonuna .write() metodu eklenir.Bu metot () içerisinde yazılan içeriği arayüze yansıtır.Yazılacak içeriği ise "" içerisinde yazmamız gerekir.

document.write("Udemig Akademiden Selamlar", "<br/>");
document.write("Udemig Akademiden Selamlar", "<br/>");
document.write("Udemig Akademiden Selamlar", "<br/>");
document.write("Udemig Akademiden Selamlar", "<br/>");

//! 2-)console.log():

// Javascript'de console.log() metodu ile kullanıcıya tarayıcıda bulunan console kısmında çıktı verilir.Bu metot bağlantı kontrolü,veri kontrolü ve hata kontrolü için çok yaygın bir şekilde kullanılır.

// ? Tarayıcıdaki console kısmına nasıl ulaşılır?

// Tarayıcıdaki console kısmına erişmek için tarayıcıda sağ tık > incele kısmına tıklanır.Sonrasında aşağıda açılan menüdeki "console" sekmesine tıklanarak console'a erişilir.console.log() ile yazdırılan tüm çıktılar ve proje içerisinde karşılaşacağımız hata mesajlarını buradan görebiliriz.

console.log("Console'dan selamlar");

//! 3-)alert():

// alert metodu açılır bir popup ile kullanıcıya çıktı vermek için kullanılır.Bu metot bizden () içerisinde kullanıcıya verilecek çıktının "" içerisinde yazılmasını ister.

alert("Dikkatttt !!!");
