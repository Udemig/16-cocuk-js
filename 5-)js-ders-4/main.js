// ? Bir javascript fonksiyonu nasıl dinamik işlemler yapabilir ?

// Bir fonksiyonu dinamik hale getirmek için fonksiyonlarda parametre kullanırız.Bir fonksiyonda parametre kullanırken ilk olarak () içerisinde bu parametreleri karşılar sonrasında ise fonksiyon içerisinde karşılanan parametreleri kullanırız.

// todo: Dışarıdan alınan 3 adet sayının ortalamasını hesaplayan bir fonksiyon oluşturunuz.

function ortalamaHesapla(x, y, z) {
  // Dışarıdan alınan 3 adet sayının toplamını hesapla
  var toplam = x + y + z;

  // Ortalama hesapla
  var ortalama = toplam / 3;

  document.write("Ortalama: ", ortalama, "<br/>");
}

ortalamaHesapla(); // NaN çıktısı verdi.Bunun sebebi ise fonksiyonun dışarıdan 3 adet değer alması gerekirken bizim bu değerleri vermemiş olmamızdır.

ortalamaHesapla(10, 15, 20);

ortalamaHesapla(4, 5, 6);

// todo: Dışarıdan alınan kullanıcı adına göre "Merhaba,kullanıcıAdı🤩" şeklinde çıktı veren bir fonksiyon oluşturunuz.

function selamla(isim) {
  document.write("Merhaba ", isim, "🤩,", "<br/>");
}

selamla("Hakan");

selamla("Pelin");

selamla("Ayşe");

// ! Özetle bir fonksiyonun dinamik işlemler yapabilmesini istiyorsak bunu fonksiyonda parametre kullanımı ile yapabiliriz.Bir fonksiyonda parametre kullanılırken ilk olarak fonksiyona parametre geçmeli sonrasında ise geçilen parametre fonksiyon içerisinde gereken yerlerde kullanılır.Parametre kullanılan bir fonksiyon çalıştırılırken parametrelerinde verilmesi gerekir.

// * Javascript Fonksiyonlarının Bir Değer Döndürmesi

// Bir javascript fonksiyonu içerisinde tanımlanan bir değeri fonksiyon dışına direkt olarak çıkarılamaz.Bu sebeple fonksiyonun bir değeri dosya dışarısına çıkarmamız için fonksiyon içerisinde return keyword'ü kullanılır.return keyword'ü yanında yer alan değer fonksiyon çağırıldığında geri dönderilir.

// todo: Stok hesapla adındaki bir fonksiyon hesaplanan stok değerini fonksiyonun dışarısına çıkarsın.

function stokHesapla(a, b, c) {
  // Stok hesapla
  var stok = a + b + c;

  // stok sonucunu fonksiyon çağırıldığında geri döndür

  return stok;
}

document.write("Stok ", stokHesapla(100, 200, 300), "<br/>");

// ! Özetle bir fonksiyonun bir dizi işlem yapması sonucunda elde edilen değeri fonksiyon dışarısına çıkarması için return keyword'ü kullanılır.return keyword'ü yanında yazılan değeri fonksiyon çağırıldığında fonksiyon dışına dönderir.

// * Javascript Object

// Javascript'de key-value değer çiftleri halinde veri tutmak için javascript objeleri kullanılır.Bir javascript objesi oluşturmak için var anahtar kelimesi sonrasında objeye bir isim verilir.Verilecek bu ismin objenin içeriği ile ilintili olmasında fayda vardır.Obje isminin ardından ise ={} oluşturulur.{} içerisinde objenin sahip olması gereken elemanlar kodlanır.Bir obje içerisinde string,number,boolean,array verilerinin yanı sıra obje dahi tanımlanabilir.

// todo: Bir kullanıcı objesi oluşturunuz

var kullanıcı = {
  isim: "Şerife Sevde",
  soyisim: "Şen",
  yaş: 15,
  hobiler: ["Yazılım", "Spor", "Müzik", "Yüzme"],
  öğrenciMi: true,
  adres: {
    şehir: "İstanbul",
    ilçe: "Sarıyer",
    mahalle: "Küçüksu",
    postaKodu: 340054,
  },

  // * Bir obje içerisinde bu objenin içerisindeki bir değere erişmek istenirse bunun objenin içerisinde yer alan bir değer olduğunu belirtmemiz gerekir.Bu belirtme işlemini objeAdı.erişilmekİstenenDeğer şeklinde yapabildiğimiz gibi this.erişilmekİstenenDeğer şeklinde de yapabiliriz.

  kişiTanıtım: function () {
    document.write(
      "Kullanıcı adı: ",
      this.isim,
      "<br/>",
      "Kullanıcı soyadı: ",
      this.soyisim,
      "<br/>"
    );
  },
};

// Objeye erişme
console.log(kullanıcı);

// Obje içerisindeki bir key değerine erişme
console.log(kullanıcı.isim);
console.log(kullanıcı.yaş);
console.log(kullanıcı.hobiler);
console.log(kullanıcı.hobiler[2]);

// Obje içerisindeki bir fonksiyonu kullanma

kullanıcı.kişiTanıtım();

// ! Özetle objeler içerisinde key-value değer çiftleri halinde değerler tutmak için kullanan javascript yapılarıdır.Bu yapı sayesinde düzenli kod yazar ve birden fazla değerin bir arada yönetilmesini sağlarız.
