Restoran Filtreleme Uygulaması 
Kullanıcıların çeşitli restoranları keşfetmesine, fiyatlarına göre filtrelemesine ve menülerindeki ürünlere göre arama yapmasına olanak tanıyan bir React Native mobil uygulamasıdır. Restoranların anlık açık/kapalı durumları da API üzerinden kontrol edilmektedir.

Ekran Görüntüleri
https://hizliresim.com/ltiyo39 - Anasayfa
https://hizliresim.com/7iyrg10 - Listeleme 
https://hizliresim.com/1bi3314 - Restoran detayı


Özellikler 
Harici bir API üzerinden tüm restoran verileri asenkron olarak çekilmektedir.Gelen verilere uygun,orta,pahalı olarak restoranları
gruplanması sağlanır.Kullanıcı arama çubuğunu kullandığında menülerinde bulunan ürünlere göre restoranlar arasında filtreleme yapılır.
Apiden gelen veriye göre restorant açık ise yeşil kapalı ise kırmızı durum ikonu döner.Her restoran kendine ait detay sayfasına yönlendirme yapar.


Kullanılan Teknolojiler 

React Native,Expo,JavaScript,React Navigation,Postman,FlatList,Yelp Api,React Hooks (useState, useEffect)

Api bilgisi: Bu uygulamada veriler Yelp Fusion Api üzerinden çekilmiştir kendiniz çalıştırmak için Yelp'ten kendi API anahtarınızı almanız ve ilgili dosyaya eklemeniz gerekmektedir.

Depoyu klonla:

Bash

git clone https://github.com/kullanici-adin/proje-adin.git
Dizine git:

Bash

cd proje-adin
Gerekli kütüphaneleri yükle:

Bash

npm install
Uygulamayı başlat:

Bash

npm start
🌐 API Bilgisi
Bu uygulamada kullanılan veriler [API'nin Adı veya Kaynağı] API'sinden çekilmektedir.