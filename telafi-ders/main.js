// * Javascript Çıktı Metotları

// document.write()
document.write("Selamlar,nasılsınız?", "<br/>");

// console.log()
console.log("Selamlar,nasılsınız?");

// alert()
// alert("Dikkat,bu işlem için izniniz yok.");

// * Javascript Değişkenler

var numara = 44;

document.write(numara, "<br/>");

var kullanıcıReferansNo = 123456765;

document.write(kullanıcıReferansNo, "<br/>");

// * Javascript Operatörler

var sayı1 = 14;
var sayı2 = 7;

// ! Matematiksel Operatörler
document.write(sayı1 + sayı2, "<br/>");
document.write(sayı1 - sayı2, "<br/>");
document.write(sayı1 * sayı2, "<br/>");
document.write(sayı1 / sayı2, "<br/>");

// ! Eşittir && Atama Operatörleri
// document.write((sayı1 = sayı2), "<br/>"); Atama
document.write(sayı1 == sayı2, "<br/>"); // Eşitlik

// ! Karşılaştırma Operatörleri
document.write(sayı1 > sayı2, "<br/>");
document.write(sayı1 < sayı2, "<br/>");

// * Javascript Veri Tipleri

document.write(typeof sayı1, "<br/>"); // Number
document.write(typeof "Selamlar", "<br/>"); // String
document.write(typeof true, "<br/>"); // Boolean

// ! Javascript String Metotları

var mesaj = "Selamlar,nasılsın?Çalışamaların nasıl gidiyor?Neler yapıyorsun?";

document.write(mesaj, "<br/>");

document.write(mesaj.length, "<br/>"); // Uzunluk ölçer

document.write(mesaj.indexOf("nasılsın"), "<br/>"); // Bir kelimenin string içerisinde kaçıncı sırada olduğunu bulur

document.write(mesaj.slice(12, 44), "<br/>"); // String ifadenin belirli aralığını almak için kullanılır

document.write(mesaj.replace("Selamlar", "Merhaba"), "<br/>"); // String ifade içerisinde yer alan bir kelimeyi değiştirmek için kullanılır.

document.write(mesaj.toLocaleLowerCase(), "<br/>"); // String ifadeyi küçük harfe çevirir

document.write(mesaj.toLocaleUpperCase(), "<br/>"); // String ifadeyi büyük harfe çevirir

document.write("------------------------------------------------", "<br/>");

// ! Javascript Number Metotları

var sayı3 = 100.234523452345;

document.write(sayı3, "<br/>");

document.write(sayı3.toFixed(2), "<br/>"); // .'dan sonra kaç basamak olacağını belirler

document.write("Round:", Math.round(sayı3), "<br/>"); // Matematiksel olarak en yakın tam sayıya yuvarlar

document.write("Floor:", Math.floor(132.67890987), "<br/>"); // Bir alt tam sayıya yuvarlar

document.write("Ceil:", Math.ceil(sayı3), "<br/>"); // Bir üst tam sayıya yuvarlar

document.write(Math.max(1, 234, 23456, 12341, 7654, 98765), "<br/>"); // En büyüğü bulur

document.write(Math.min(1, 234, 23456, 12341, 7654, 98765), "<br/>"); // En küçüğü bulur

document.write(Math.random(), "<br/>"); // 0-1 arasında rastgele sayı oluşturur

document.write("0-10", Math.round(Math.random() * 10), "<br/>"); // 0-10

// * Javascript Diziler

var kişiler = ["Yusuf", "Ezgi", "Harun", "Melis", "Buse"];

document.write(kişiler, "<br/>"); // Diziye erişme

document.write(kişiler[0], "<br/>"); // Dizi içersindeki bir elemana erişme

document.write(kişiler[2], "<br/>"); // Dizi içersindeki bir elemana erişme
