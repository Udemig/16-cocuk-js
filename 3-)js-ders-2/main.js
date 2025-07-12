// * Javascript Veri Tipleri:

// Javascript'de değerlerin birer veri tipi vardır.Bu veri tipleri program içerisinde işlemler yapılırken bilinmesi önem arzeden yapılardır.Bu veri tiplerinden temel olanlar:

// 1-)string: Javascript'de alfanümerik karakterlerden oluşan verilerin veri tipi string'dir.Bir string değer tanımlanırken "" içerisinde yazılmalıdır.

// 2-)number: Javascript'de nümerik karekterlerden oluşan verilerin veri tipi number'dır.Bir number değer tanımlanırken direkt olarak yazılır.

// 3-)boolean: Javascript'de true/false değerlerinin veri tipi boolean'dir.

// 4-)array: Javascript'de dizilerin veri tipi array'dir.Diziler javascript'de verilerin yönetilmesi noktasında önemli yapılardandır.Bu sebeple ileride daha detaylı şekilde ele alacağız.

// 5-)object: Javascript'de nesnelerin veri tipi object'dir.Nesneler içerisinde key-value değer çiftleri halinde veri tutan yapılardır.Nesnelerde tıpkı dizilerden olduğu gibi javascript içerisinde önemli bir yere sahiptir.Bu sebeple nesneleride ileride daha detaylı şekilde ele alacağız.

// ! type of ==> Javascript'de bir değerin veri tipini kontrol etmek için typeof metodu kullanılır.Bu metotdan sonra kontrol edilecek değer yazılır ve veri tipi kontrolü yapılır.

// string örneği

var isim = "Elif";

document.write("İsim:", isim, "<br/>");

document.write("İsim Verisinin Veri Tipi:", typeof isim, "<br/>");

// number örneği

var yaş = 15;

document.write("Yaş:", yaş, "<br/>");

document.write("Yaş Verisinin Veri Tipi:", typeof yaş, "<br/>");

// boolean örneği

var öğrenciMi = true;

document.write("Öğrenci Mi:", öğrenciMi, "<br/>");

document.write("öğrenciMi Verisinin Veri Tipi:", typeof öğrenciMi, "<br/>");

document.write(
  "----------------------------------------------------------",
  "<br/>"
);

// ! Özetle Javascript projesi içerisinde değerlerin yönetilebilmesi noktasında veri tipleri önem arzeder.

// * Javascript String Metotları:

var mesaj =
  "Udemig akademiden selamlar.Bu kurs kapsamında frontend eğitimi alıyoruz.Bu eğitim sonucunda çok iyi seviyeye geleceğiz.Kurs kapsamında html ve css'den sonraki konumuz Javascript'dir.Javascript dinamik web siteleri oluşturmak için gerekli bir programlama dilidir.";

document.write("Mesaj: ", mesaj, "<br/>");

document.write(
  "----------------------------------------------------------",
  "<br/>"
);

// Javascript'de string ifadelerin sahip olduğu bazı metotlar vardır.Bu metotlardan bazıları:

// ! length: Bir string ifadenin karakter uzunluğunu ölçmek için kullanılır.

document.write("Mesaj'ın Karakter Uzunluğu: ", mesaj.length, "<br/>");

document.write(
  "----------------------------------------------------------",
  "<br/>"
);

// ! indexOf: Bir string ifadenin içerisinde bir kelimenin kaçıncı index'de bulunduğunu kontrol etmek için kullanılır.İndex javascript içerisinde çok duyacağımız bir kavramdır.İndex bir değerin bulunduğu bağlam içerisindeki sırasını belirtir.Bir bağlam içerisindeki ilk değerin index'i yani sıra sayısı 0'dır.Yani javascript'de index sıfırdan başlar.Bu metot değişken adından sonra '.' konularak kullanılır.Bu metot () içerisinde string ifade içerisinde aranacak kelimeyi yazmamızı ister.

document.write(
  "Mesaj'ın İçerisinde 'selamlar' kelimesinin İndex'i: ",
  mesaj.indexOf("selamlar"),
  "<br/>"
);

document.write(
  "----------------------------------------------------------",
  "<br/>"
);

// ! slice: Bir string ifade içerisinden belirli bir aralığı almak için kullanılır.Bu metot değişken adından sonra '.' konulduktan sonra slice() şeklinde çağırılır.() içerisinde bizden 2 adet parametre ister.Bu iki parametreden birincisi başlangıç index'ini ikincisi ise bitiş index'ini belirtir.Birinci parametre zorunludur,ikincisi ise opsiyoneldir.Yani birinciyi vermezsek metot çalışmaz.Ama ikinci değeri vermezsek birinci değerden başlayarak değişkenin son karakterine kadarki aralığı alır.

// ! İndex 0'dan başlayacağından ötürü 2. karakterden itibaren metin ifade bölünecekse slice metodunun başlangıç değeri olarak 1 yazılmalıdır.Bitiş içinde bu mantığa uygun değer girilir.

document.write(
  "Mesaj'ın İçerisinden 2-44. karakterler arası: ",
  mesaj.slice(1, 43),
  "<br/>"
);

document.write(
  "----------------------------------------------------------",
  "<br/>"
);

// ! replace: Bir string ifade içerisindeki bir değeri başka bir değer ile değiştirmek için kullanılır.Bu metot bizden iki parametre alır.Bu parametreler sırasıyla aranacak kelime ve değiştirilecek kelimedir.

document.write(
  "Mesaj'ın İçerisinde frontend kelimesini yazılım Kelimesi İle Değiştir: ",
  mesaj.replace("frontend", "yazılım"),
  "<br/>"
);

document.write(
  "----------------------------------------------------------",
  "<br/>"
);

// ! toLocaleLowerCase: Bir string ifade içerisinde yer alan tüm harflerin küçük harf olmasını sağlar.

document.write("Mesaj Büyük Harf: ", mesaj.toLocaleUpperCase(), "<br/>");

document.write(
  "----------------------------------------------------------",
  "<br/>"
);

// ! toLocaleUpperCase: Bir string ifade içerisinde yer alan tüm harflerin büyük harf olmasını sağlar.

document.write("Mesaj Küçük Harf: ", mesaj.toLocaleLowerCase(), "<br/>");

document.write(
  "----------------------------------------------------------",
  "<br/>"
);

// ! Özetle javascript'de alfanümerik karakterlerden oluşan ifadelerin veri tipi string'dir.String ifadelerin sahip olduğu metotların bilinmesi proje içerisinde önemlidir.

// * Javascript Number Metotları

var sayi = 13.544544;

document.write("Sayı: ", sayi, "<br/>");

// Javascript'de number veri tipindeki değerlerin sahip olduğu metotların bilinmesi proje içerisinde önemlidir.Number metotlarından bazıları:

// ! toFixed: Ondalıklı bir sayının devreden kısmının kaç basamaktan oluşacağını belirlemek için kullanılır.Bu metot () içerisinde devreden kısmın kaç basamaktan oluşacağının belirtilmesi gerekir.

document.write("Sayı Devreden Kısım 2 Basamaklı: ", sayi.toFixed(2), "<br/>");

// ! Math.round: Ondalıklı bir sayıyı en yakın tam sayıya göre yuvarlamak için kullanılır.Yuvarlanacak sayıyı () içerisinde yazılmalıdır.Bu metot matematikteki yuvarlama kuralına göre yuvarlama işlemi yapar.

document.write("Sayı En Yakın Tam Sayıya Yuvarla: ", Math.round(sayi), "<br/>");

// ! Math.ceil: Ondalıklı sayıyı en yakın bir üst tam sayıya göre yuvarlamak için kullanılır.
document.write(
  "12.2'yi En Yakın Bir Üst Tam Sayıya Yuvarla: ",
  Math.ceil(12.2),
  "<br/>"
);

// ! Math.floor: Ondalıklı sayıyı en yakın bir alt tam sayıya göre yuvarlamak için kullanılır.

document.write(
  "12.8'yi En Yakın Bir Alt Tam Sayıya Yuvarla: ",
  Math.floor(12.8),
  "<br/>"
);

// ! Math.max: Birden fazla sayı içerisinde yer alan sayılardan en büyüğünü bulmak için kullanılır.

document.write(
  "En Büyük Sayı: ",
  Math.max(1, 2, 3, 4, 5, 8, 99, 123, 4565),
  "<br/>"
);

// ! Math.min: Birden fazla sayı içerisinde yer alan sayılardan en küçüğünü bulmak için kullanılır.

document.write(
  "En Küçük Sayı: ",
  Math.min(1, 2, 3, 4, 5, 8, 99, 123, 4565),
  "<br/>"
);

// ! Math.random: 0-1 arasında rastgele bir sayı üretmek için kullanılır.

document.write("Rastgele Sayı:", Math.random(), "<br/>");

// Math.random metodu 0-1 arasında rastgele bir sayı üretir. Fakat bu aralkta oluşturulan sayıların program içerisinde çok kullanışlı değildir.Bu sebeple ilgili aralığı genişletip bir tam sayı elde ederiz

document.write("Rastgele Sayı:", Math.round(Math.random() * 100), "<br/>");

// ! Özetle javascript'de nümerik karakterlerden oluşan ifadelerin veri tipi number'dır.Number ifadelerin sahip olduğu metotların bilinmesi proje içerisinde önemlidir.
