// alert("Bağlantı gerçekleşti");

// * Javascript Değişkenler:

// Değişkenler program içerisinde değeri değişebilecek verileri yönetmek için kullanılır.Bir değişkeni program içerisinde kullanabilmek için önce tanımlamamız sonra değer ataması yapmamız en son ise program içerisinde uygun yerde kullanmamız gerekir.

// i-)Değişken Tanımlama:

// Değişken tanımlamak için ilk olarak "var" anahtar kelimesi kullanılır.Bu anahtar kelimenin ardından bir boşluk bırakıp oluşturulacak değişkene bir isim verilir.Bu isim değişkenin içeriği ile ilintili olmalıdır.Eğer değişkene verilecek isim birden fazla kelimeden oluşuyorsa bu kelimeler arasında boşluk bırakılmaz.Çünkü boşluk bırakıldığında boşluktan öncesi ve sonrası ayrı birer değişken adı olarak algılanır.Bu sebeple değişken birden fazla kelimeden oluşuyorsa bu kelimelerden ilk kelimenin tüm harflerini küçük bundan sonra gelecek diğer kelimelerin ise sadece ilk harfi büyük olarak yazılır.Değişken isimlendirmesi yapılırken javascript içerisinde yer alan bazı kelimeler değişken ismi olarak kullanılamaz.

var isim = "Helin";

// ii-)Değişkene Değer Atama:

// Bir değişkene değer atanacakken atama operatörü (=) kullanılır.Bu operatör sağında yer alan değerleri solundaki değişkenin değeri olarak atar.Eğer sağ kısımda bir değer değilde işlemler varsa önce bu işlemleri yapıp elde edilen değeri değişkene atar.Değişkene atanacak değer metin ifade ise "" içerisinde yazılmalıdır ama eğer sayı ise "" kullanmadan direkt olarak yazılır.

// iii-)Değişken Kullanımı:

// Oluşturulan değişken program içerisinde uygun yerlerde kullanılır.

document.write(isim, "<br/>");

var yaş = 15;

document.write(yaş, "<br/>");

// ! Özetle javascript değişkenleri bir program içerisinde verileri yönetmek için kullanılan yapılardır.Bir değişkeni program içerisinde kullanabilmek için önce değişkeni tanımlamalı sonrasında değişkene değer atamalı en son değişken program içerisinde gerekli yerlerde kullanılmalıdır.

// * Javascript Aritmetik Operatörler:

// Javascript artimetik operatörüyle iki veya daha fazla değer ile işlemler yapabiliriz.

var sayi1 = 15;
var sayi2 = 36;

// 1. Toplama(+):

document.write("Toplama: ", 4 + 7, "<br/>");

document.write("Toplama: ", sayi1 + sayi2, "<br/>");

// 2. Çıkarma(-):

document.write("Çıkarma: ", sayi2 - sayi1, "<br/>");

document.write("Çıkarma: ", 23 - 14, "<br/>");

// 3. Çarpma(*):

document.write("Çarpma: ", sayi1 * sayi2, "<br/>");

document.write("Çarpma: ", 5 * 7, "<br/>");

// 4. Bölme(/):

document.write("Bölme: ", 360 / 9, "<br/>");

// ! Özetle Javascript aritmetik operatörler matematikten bildiğimiz dört işlemdir.Bu operatörler ile sayılarla işlemler yapabiliriz.

// * Javascript Eşitlik Operatörü

// Matematikte değerlerin eşitliği için "=" kullanılır.Fakat javascript'de "=" atama operatörü olarak kullanılmaktadır.Bu sebeple değerlerin eşitliği için "==" kullanırız."==" sağında ve solunda yer alan değerlerin eşitliğini kontrol eder.Ve kontrol sonucunda değerler eşitse "true(doğru)" değilse "false(yanlış)" değer döndürür.

var sayi3 = 44;
var sayi4 = 44;

document.write("Sayı-3 ve Sayı-4 Eşit Mi? ", sayi3 == sayi4, "<br/>");

document.write("44 55'e Eşit Mi? ", 44 == 55, "<br/>");

// * Javascript Karşılaştırma Operatörleri

var sayi5 = 65;
var sayi6 = 89;

// Javascript'de değerlerin karşılaştırılması için karşılaştırma operatörleri kullanılır.Karşılaştırma operatörleri:

// 1. Küçüktür(<): Bu operatör solunda bulunan ifadenin sağında yer alan ifadeden küçük olup olmama durumunu kontrol eder.Kontrol sonucunda eğer küçükse "true(doğru)" değilse "false(yanlış)" değer döndürür.

document.write("Sayı-5 Sayı-6'dan Küçük Mü? ", sayi5 < sayi6, "<br/>");

document.write("Sayı-5 40'dan Küçük Mü? ", sayi5 < 40, "<br/>");

// 2. Büyüktür(>): Bu operatör sağında bulunan ifadenin solunda yer alan ifadeden büyük olup olmama durumunu kontrol eder.Kontrol sonucunda eğer büyük "true(doğru)" değilse "false(yanlış)" değer döndürür.

document.write("Sayı-6 Sayı-5'den Büyük Mü? ", sayi6 > sayi5, "<br/>");

document.write("Sayı-5 Sayı-6'dan Büyük Mü? ", sayi5 > sayi6, "<br/>");

// ! Özetle javascript karşılaştırma operatörleri ile iki değerin karşılaştırılması yapabiliriz.Bu operatörler özellikle karar yapılarında çokça kullanılır.
