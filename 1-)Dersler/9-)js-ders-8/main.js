// * Api Nedir?

// Api frontend (bir web sitesinin ön ucu) ve backend (bir web sitesinin arka ucu) arasında veri iletimini sağlayan bir aracıdır.Api temelde iki ana kısımdan oluşur.Bunlar base url ve endpoints'dir.Endpoints  veri döndermek için özelleştirilmiş uç noktalardır.Base url ise bu endpointlerin kapsayıcısıdır.

// Base url ve endpoint arasındaki ilişikiyi market örneği üzerinden açıklayalım.Bir markete girildiğinde almak istenilen ürünün yeri bellidir.Eğer cips alacaksak bunların bulunduğu kısıma gideriz.Eğer peynir alacaksak peynirlerin bulunduğu kısıma gideriz.İşte marketi baseUrl'e benzetirsek market içerisindeki ürünlerin bulunduğu her kısım bir endpoint olacaktır.

// Api ile haberleşme noktasında "fetch" metodu kullanılır.Bu metot bizden alınacak verinin adresini ister.Devamında ise bu adresten verileri alıp bize getirir.Fakat bu nokta  karşımıza ufak bir sıkıntı  çıkıyor.Backend kısmındaki veri tipi ve frontend kısmındaki veri tipi birbirinden farklıdır.Yani backend kısmındaki verileri frontend'de kullanamayız.Bu noktada ise hem backend'in hemde frontend'in kullanabileceği bir veri tipi olan JSON kullanılır.JSON javascript'deki objelere benzer bir yapıdadır.Ama birebir aynı değildir.Bizde api ile her haberleşmemizde bu veriler arasında dönüşüm yapacağız.

// Api'dan veri alma örneği

// ! Api'dan verileri alırken eğer bu işlemi uygun şekilde yapmazsak bu noktada veriyi alamayız.Uygun şekilden kastımızda asekron şekilde api işlemini yapmaktır.Asekron yönetime bakmadan önce sekron-asekron ne demektir bir bakalım

// Sekron aynı anda  gerçekleşen demektir.Ve javascript'de kodlar aksi söylenmediği müddetçe sekron yani aynı anda çalışır.Ama api işlemleri asekron olmak zorundadır.

// Asekron ise sekron olmayan yani aynı anda çalışmayan demektir.Api işlemleri asekron şekilde yapılmalıdır.Çünkü bu işlemler internet hızı backend kısmında yoğunluk,... vs sebeplere bağlı olarak uzayabilir.

// Api işlemlerini genellikle bir fonksiyon içerisinde yöneteceğiz.Aksi söylenmedikçe javascript fonksiyonlarıda sekrondur.Bir fonksiyonu asekron yapabilmek için tanımlarken başına "async" ibaresi eklememiz gerekir.Devamında fonksiyon içerisinde nerede asekron yönetim sergilemek istersek o kısımda "await" yani "bekle" dememiz yeterlidir.Api'a istek atıldığı noktada await denilmesi bu fonksiyonu veri gelene kadar durduracaktır.Bizde bu sayede api'dan verilerimizi alırız.

async function verileriAl() {
  // Api'a istek atıp yanıt gelmesini bekliyor devamında ise geleb yanıtı bir değişkene aktarıyoruz.
  var yanit = await fetch("https://fakestoreapi.com/products");

  // Api'dan JSON veris tipinde gelen veriyi Javascript'de kullanabileceğimiz formata çeviriyoruz.
  var veri = await yanit.json();

  //   console.log(veri);
}

verileriAl();

// ! Api'dan kullanılar verisini alma
async function kullanicilariAl() {
  // Api'a istek atıp yanıt gelmesini bekliyor devamında ise geleb yanıtı bir değişkene aktarıyoruz.
  var apiYanit = await fetch("https://fakestoreapi.com/users");

  // Api'dan JSON veris tipinde gelen veriyi Javascript'de kullanabileceğimiz formata çeviriyoruz.
  var kullaniciVerisi = await apiYanit.json();

  console.log(kullaniciVerisi);
}

kullanicilariAl();

// Api'ın temelde iki ana kısımdan oluştuğunu söylemiştik.Bu iki ana kısmın haricinde api'a parametrelerde geçilebilir.Bu parametreler api'dan gelen veriyi özelleştirmek için kullanılır.Ör. api'dan tüm kullanıcı verilerini almak değilde sadece belirli bir kullanıcının verisini almak istersek bu durumda api'a parametre geçmemiz gerekir.

// ! Api'dan sadece bir kullanıcı verisini alma (Tüm bu işlemler farklı api'lara göre farklı değerler ve endpointler alacaktır)

async function kullaniciVerisiAl() {
  var yanit = await fetch("https://fakestoreapi.com/users/1");

  var kullanici = await yanit.json();

  console.log(kullanici);
}

kullaniciVerisiAl();
