// * Javascript Diziler (Arrays)

// Javascript dizileri program içerisinde verilerimizi bir arada tutarak ve sahip olduğu metotlar sayesinde kolayca yönetebilmemizi sağlayan bir yapıdır.

// Diziler ile verilerimizi yönetirken ilk olarak bir dizi tanımlamalı sonrasında bu dizinin sahip olacağı elemanları atamalı akabinde ise program içerisinde gereken yerde bu dizileri kullanmalıyız.Bir dizi "var" anahtar kelimesinden sonra dizi bir isim verilerek tanımlanır.Tanımlanan bir diziye değer ataması yapmak içinse "=" çağırılıp sonrasında [] oluşturulup bu [] içerisinde dizinin elemanları yazılarak yapılır.

// todo: Öğrenciler adında bir dizi tanımlayın.Bu diziye 5 öğrencinin isimleri ekleyin.

var öğrencilerDizisi = ["Ala Nur", "Helin", "Hümeyra", "Hakan", "Elif"];

// ! Dizinin tüm elemanlarına erişme
document.write("Öğrenciler:", öğrencilerDizisi, "<br/>");

// todo: Sınav notları adında bir dizi tanımlayın.Bu diziye 7 öğrencinin notlarını ekleyin.

var öğrenciNotları = [100, 98, 95, 50, 70, 60, 85];

// ! Dizinin tüm elemanlarına erişme
document.write("Öğrenci Notları:", öğrenciNotları, "<br/>");

var karmaDizi = ["Malatya", 44, "Yusuf", true, "Udemig"];

// ! Dizinin tüm elemanlarına erişme
document.write("Karma Dizi:", karmaDizi, "<br/>");

// ? Bir dizinin içerisinde yer alan tüm elemanlar aynı anda erişmek zorunda mıyız dizi içerisinde yer alan bir eleman tek başına erişebilir miyiz ?

// Bir dizi içerisinde yer alan bir eleman tek başına erişmek için dizi adından sonra [] koyulup [] içerisinde erişilmek istenen elemanın sıra sayısı yazılmalıdır.Fakat bu tek bir elemana erişmek isterken ufak bir sıkıntı mevcut. 1. elemana erişmek istersek 2.elemana erişiriz.Bunun sebebi ise dizi içerisindeki elemanları 1,2,3 şeklinde değilde 0,1,2,3 şeklinde sıralanmasıdır.Bunada dizilerde index kavramı denir.Dizi içerisindeki doğru elemana erişmek içinse erişilmek istenen elemanın sıra sayısının 1 eksiği yazılır.Yani birinci elemana erişmek [] içerisine 0,3. elemana erişmek istersek 2 yazmamız gerekir.

// ! Dizi içerisindeki spesifik bir elemana erişme

document.write(
  "Öğrenciler Dizisi İçerisindeki 1.Eleman:",
  öğrencilerDizisi[0],
  "<br/>"
);

document.write("------------------------------------------------", "<br/>");

// Dizilerin Sahip Olduğu Metotlar

var arabalar = ["Opel", "Mercedes", "Bmw", "Renault"];

document.write("Arabalar Dizisi: ", arabalar, "<br/>");

// Dizi içerisindeki elemanları yönetmek için kullanılan metotlardan bazıları şunlardır:

// ! 1-)push: Bir dizinin sonuna eleman eklemek için kullanılır.Bu metot eleman eklenecek dizi adının sonuna .push() yazılarak kullanılır.Diziye eklenmek istenen elemanların ise () içerisinde yazılması gerekir.

arabalar.push("Nissan"); // arabalar dizisine Nissan eklendi

document.write("Arabalar Dizisi-1: ", arabalar, "<br/>");

// ! 2-)pop: Bir dizinin sonundaki elemanı diziden kaldırmak için kullanılır.

arabalar.pop(); // arabalar dizisinin son elemanı diziden kaldırıldı

document.write("Arabalar Dizisi-2: ", arabalar, "<br/>");

// ! 3-)shift: Bir dizinin ilk elemanını diziden kaldırmak için kullanılır.

arabalar.shift(); // arabalar dizisinin ilk elemanını diziden kaldırdık

document.write("Arabalar Dizisi-3: ", arabalar, "<br/>");

// ! 4-)unshift: Bir dizinin başına eleman eklemek için kullanılır.Bu metot eklenecek dizi adından sonra .unshift() olarak kullanılır ve () içerisinde diziye eklenmek istenen elemanların yazılması gerekir.

arabalar.unshift("Citroen"); // arabalar dizisinin başına Citroen eklendi

document.write("Arabalar Dizisi-4: ", arabalar, "<br/>");

// ! 5-)length: Bir dizinin uzunluğunu ölçmek için kullanılır.

document.write("Arabalar Dizisi Uzunluğu: ", arabalar.length, "<br/>");

// ! Bir dizinin elemanını güncelleme

arabalar[0] = "Tesla";

document.write("Arabalar Dizisi-5: ", arabalar, "<br/>");

document.write("------------------------------------------------", "<br/>");

// * Javascript Fonksiyonlar

// Javascript fonksiyonları bir işlemi gereçkleştirmek için özelleştirilmiş kod bloklarıdır.Belirlenen bu işlem iki sayıyı toplamak,birden fazla sayının ortalamasını hesaplamak,bir çıktı vermek,...

// ? Fonksiyonlar Nasıl Kullanılır ?

// Javascript programı içerisinde bir fonksiyon kullanabilmek için ilk olarak bu fonksiyonu tanımlamalı sonrasında ise bu fonksiyonun yapması istenen işlem herneyse onu kodlamalıyız.

// ? Bir Fonksiyon Nasıl  Tanımlanır,Yapacağı İşlem Nasıl Belirlenir ?

// Bir fonksyion "function" anahtar kelimesi yazıldıktan sonra fonksiyona bir isimi verilir verilen bu ismin yanına sırasıyla (){} oluşturularak tanımlanır.Buradaki {} içerisinde fonksiyonun yapması istenen işlemler kodlanır.

// todo: Selamla adında bir fonksiyon oluşturunuz,bu fonksiyon kullanıcıya document.write() ile çıktı versin.

function selamla() {
  document.write("Udemig akademiden selamlar.", "<br/>");
}

// ! Bir fonksiyonun belirtilen işlemi gerçekleştirmesi için tanımlanması yeterli değildir.Tanımlandıktan sonra bu fonksiyonun çağrılması gerekir.Bir fonksiyon ise fonksiyon adı ve sonrasında () oluşturularak çağırılır.Bir fonksiyon kaç defa çağırılırsa o sayıda çalışacaktır.

selamla();

// todo: 3 adet sayıyı toplayıp toplam sonucunu ekrana yazdıran bir fonksiyon oluşturunuz.

function toplamaİşlemi() {
  // Toplanacak sayıların tanımlanması
  var sayi1 = 10;
  var sayi2 = 44;
  var sayi3 = 32;

  // 3 adet sayının toplanıp bir toplam sonucunun bulunması
  let toplam = sayi1 + sayi2 + sayi3;

  // Elde edilen toplam sonucunun ekrana yazdırılması
  document.write("Toplam:", toplam, "<br/>");
}

toplamaİşlemi();
toplamaİşlemi();
toplamaİşlemi();

// ? Bir javascript fonksiyonu nasıl dinamik işlemler yapabilir ?
