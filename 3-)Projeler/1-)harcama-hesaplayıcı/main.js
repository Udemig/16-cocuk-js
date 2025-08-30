// Bu projede kullanıcı arayüzde bulunan formu gönderdiğinde form içerisinde yer alan harcama ismi ve harcama miktarını alıp bu değerler ile arayüzde dinamik şekilde bir harcama kartı render etmeliyiz.Sonrasında harcama kartı üzerinde bulunan sil ikonuna tıklayınca bu harcama kartını silmeliyiz.

// Bu işlemleri yapabilmek içinse ilk olarak arayüzdeki formun gönderilmesini izlememiz gerekir.Çünkü formun içerisindeki değerler olmadan arayüzde harcama kartı render edemeyiz.Devamında render edilen harcama kartı üzerinde bulunan sil ikonuna tıklayınca harcama kartını silebilmek içinse bu sil ikonuna tıklanma durmunu izlememiz gerekecek.Javascript'de bu izleme olaylarını "addEventListener" ile yapıyorduk.Bu addEventListener'ı kullanbilmek içinse ilk olarak Html'de bulunan elemanları javascript kısmına çekmemiz gerekir.Html'den javascript'e eleman çekmek içinse "DOM" seçicilerini (getElementsByTagName,getElementsByClassName,getElementById,querySelector) kullanacağız.

// 1. Html'deki elemanları javascript'e çek
var form = document.querySelector("form");
var expenseList = document.querySelector(".expense-list");

// console.log(form);

// 2. Erişilen formun gönderilmesini izle

form.addEventListener("submit", function (event) {
  // Form'lar gönderildiğinde default olarak sayfayı yeniler.Ve eğer sayfa yenilemeyi engellemezsek bu durumda formun içerisindeki değerler erişemeyiz.Sayfa yenilemeyi ise gönderilme olayı neticesinde gelen event parametresi içerisinde bulunan "preventDefault" metodu ile engelleriz.
  event.preventDefault();

  // Form gönderildiğinde fonksiyona parametre olarak geçilen event içerisinde bu olay ile alakalı değerler bulunur.Bunlardan biride "target"  dır.event.target ile bu olayı tetikleyen html elemanına (form) eriştikten sonra erişilen eleman içerisindeki elemanlarada (input) erişebiliriz.

  var expenseName = event.target[0].value;
  var expensePrice = event.target[1].value;

  // 3. Formun gönderilmesi ile erişilen expenseName ve expensePrice değerlerini kullanarak bir harcama kartı oluştur

  // Javascript kısmında dinamik şekilde bir html elemanı oluşturmak için document objesi içerisinde bulunan "createElement()" metodu kullanılır.Bu metot bizden () içerisinde oluşturulmak istenen html elemanının adını ister.

  var expenseDiv = document.createElement("div");

  // 4. document.createElement metodu ile oluşturulan boş div'e class ata ve html içeriğini belirle

  // Bir elemana javascript kısmında class ile alakalı işlemler yaparken elemanAdı.classList.kullanılacakMetod metodu kullanılır.Buradaki kullanılacakMetod kısmında eğer elemana class atanacaksa "add",eğer class kaldırılacaksa "remove",eğer class varsa kaldırılıp class yoksa eklenecekse toggle kullanılır.Biz bu noktada sadece eklemek istediğimizden "add" kullanacağız.

  expenseDiv.classList.add("expense-card");

  // Bir elemanın javascript kısmından html içeriğini belirlemek için elemanAdı.innerHTML metodu kullanılır.

  // Eğer dinamik değer kullanmak istiyorsak bunu ``içerisinde ${} ile yaparız.${} kısmında kullanılacak dinamik değer yazılır.(değişken adı,fonksiyon,...)

  expenseDiv.innerHTML = `     
         
          <h3>${expenseName}</h3>

          
          <h4>${expensePrice} TL</h4>

         
          <img class="delete-icon"  src="./assets/trash.png" alt="trash-icon" />
        `;

  // 5. Javascript kısmında oluşturulan,class atanan,html içeriği belirlenen elemanı dinamik şekilde arayüze ekle

  // Bir elemanı dinamik şekilde arayüze eklemek için eklenecekElemanınKapsayıcısı.appendChild() metodu kullanılır.Burada () içerisinde arayüze eklenmek istenen elemanın adı yazılır

  // 6. expenseDiv elemanın içeriğini dinamik hale getir ve form gönderildikten sonra formun içerisini sıfırla

  // Formu sıfırlamak için iki yöntem bulunur.Biz bu yöntemlerden ilki olan form içerisinde elemanların değeri teker teker sıfırlama yönetimini izleyeceğiz.

  event.target[0].value = "";
  event.target[1].value = "";

  expenseList.appendChild(expenseDiv);
});

// 7. Harcama kartı üzerinde bulunan sil ikonuna tıklayınca harcama kartını arayüzden kaldır.

// Bu silme işlemini yapmak için bizim sil ikonuna erişmemiz gerek.Fakat form gönderilinceye kadar bu erişme işlemini yapamayız.Bu sebeple silme ikonuna erişmek için her zaman ekranda bulunan expenseList'i kullanacağız.expenseList üzerinde gerçekleşen tıklanlamaları izleyeceğiz ve eğer bu tıklanma sil ikonu üzerinde gerçekleşirse bu noktada harcama card'ını sileceğiz.

expenseList.addEventListener("click", function (event) {
  // Tıklanılan noktaya event içerisinde bulunan target ile erişebiliriz.Fakat bizi bu alandaki sadece sil ikonu üzerinde gerçekleşen tıklanmalar ilgilendiriyor.Yani bizim silme işlemi yaparken fonksiyona dememiz gereken şey şu:"Eğer sil ikonuna tıklandıysa silme işlemini gerçekleştir."

  // Javascript'de eğer li bir ifade varsa yani bir koşul durumu söz konusuysa bu noktada if-else kullanılır.Kontrol edilecek koşul ise "Eğer tıklanılan elemanın classı "delete-icon" sa olacak.

  if (event.target.classList.contains("delete-icon")) {
    // Yazdığımız koşulla birlikte delete-icon classına sahip bir elemana tıklandıysa bu anı izleyebiliyoruz.Şimdi ise erişilen bu delete-icon classına sahip elemanı kapsayıcısı olan expense-card classlı elemana erişmeli akabinde bunu ekrandak kaldırmalıyız.

    // Bir elemanın kapsayıcına "parentElement" ile erişilirken bir eleman arayüzde "remove" ile kaldırılır.

    event.target.parentElement.remove();
  }
});
