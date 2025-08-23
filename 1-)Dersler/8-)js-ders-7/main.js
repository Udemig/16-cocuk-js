var getUserBtn = document.querySelector("#getusers-btn");

// * Api

// Api bizim server adındaki makinelerde tutulan verilere erişmemizi sağlar.Api'lar temelde iki kısımdan oluşur.
// 1.baseUrl ==> Api'ın temel kısmıdır.
// 2.endpoint ==> Api'ın verileri tutmak için özelleştirilmiş uç noktalarıdır.

// * fetch ==> Api'dan verileri almamızı sağlayan metotdur.Bu metot () içerisinde "" arasında istek atılacak api'ın yazılmasını ister.

// ! Api'dan gelen veri json veri formatındadır.Javascript dosyasında json veri tipinde veriler tutulduğundan bizim bu verileri javascript nesnesine çevirmemiz gerekir.

// fetch("https://dummyjson.com/recipes") // Api'a istek at
//   .then((response) => response.json()) // Api'dan gelen veriyi json veri formatında javascript nesnesine çevir
//   .then((data) => console.log(data)); // Elde edilen veriyi console'a yazdır.

// todo: Butona tıklanınca api'a istek atan ve gelen verileri console'a yazdıran bir örnek yapınız.

getUserBtn.addEventListener("click", getUsers);

function getUsers() {
  fetch("https://dummyjson.com/users")
    .then((response) => response.json())
    .then((users) => console.log(users));
}

fetch("https://dummyjson.com/products")
  .then((res) => res.json())
  .then((data) => console.log(data));
