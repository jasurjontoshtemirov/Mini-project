document.addEventListener("DOMContentLoaded", () => {
  "use strict";
  const tbody = document.querySelector("#namesTableBody");

  // apu tizim bo'yicha ishlash

  const getData = (Api) => {
    return new Promise((resolve, reject) => {
      const request = new XMLHttpRequest();
      request.addEventListener('readystatechange', (e) => {
        if (request.readyState === 4 && request.status === 200) {
          const data = JSON.parse(request.responseText);
          resolve(data);
        } else if (readyState === 4) {
          reject("Xatolik yuz berdi");
        }
      });
      request.open("GET", Api);
      request.send();
    });
  };

  getData("JSONS/all.json")
    .then((data) => {
      console.log(data);
    })


});