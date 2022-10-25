const hakkinda = function (req, res) {
    res.render('hakkinda', { "title": "hakkinda" });
  };

  module.exports={
    hakkinda
  }
var express = require('express');
var router = express.Router();

const anaSayfa = function (req, res) {
  res.render('anasayfa', 
  { "baslik": "Anasayfa",
  "sayfaBaslik":{
    "siteAd":"Mekanbul",
    "slogan": "Civardaki Mekanlari Kesfet"
  },
  "mekanlar":[
    {
      "ad":"Barida Kafe",
      "adres":"Sdü Batı Kampüsü",
      "puan":"4",
      "mesafe":"2km",
      "imkanlar":["kahve","Çay","Tatlı"]


    },
    {
      "ad":"Gloria",
      "adres":"iyas AVM",
      "puan":"3",
      "mesafe":"3km",
      "imkanlar":["kahve","Çay","Tatlı"]
    }
  ]
});
};

const mekanBilgisi = function (req, res) {
  res.render('mekanbilgisi',
   { "mekanbaslik": "Starbucks",
    "mekanDetay":{
    "ad":"Starbucks",
    "adres":"Centrum Garden",
    "puan":"4",
    "saatler":[
      {
        "gunler":"Pazartesi-Cuma",
        "acilis":"09:00",
        "kapanis":"23:00",
        "kapali":"false"
      },
      {
        "gunler":"Pazartesi-Cuma",
        "acilis":"09:00",
        "kapanis":"23:00",
        "kapali":"false"
      }
    ],
    "imkanlar":["kahve","Çay","Tatlı"],
    "koordinatlar":{
      "enlem":"37.7",
      "boylam":"30.5"
    },
    "yorumlar":[
      {
        "yorumYapan":"Sinan",
        "puan":"3",
        "tarih":"20 Ekim 2022",
        "yorumMetni":"Berbat"
      },
      {
        "yorumYapan":"ertugrul",
        "puan":"0",
        "tarih":"20 Ekim 2022",
        "yorumMetni":"pek leziz"
      }
    ]


   }

   });
};

const yorumEkle = function (req, res) {
  res.render('yorumekle', { "title": "Yorum ekle" });
};



module.exports = {

  anaSayfa,
  mekanBilgisi,
  yorumEkle
}