const sh1 = document.querySelector(".sh1");
const sh2 = document.querySelector(".sh2");
const sh3 = document.querySelector(".sh3");
const sn5 = document.querySelector(".sn5");
const sn6 = document.querySelector(".sn6");
const sn8 = document.querySelector(".sn8");
const sn9 = document.querySelector(".sn9");
const sn10 = document.querySelector(".sn10");

const infoPanel = document.querySelector(".info-starship");
const flightInfo = document.querySelector(".info-d");
const snName = document.querySelector(".info-s-header");
const moreInfo = document.querySelector(".brm-d");

sh1.addEventListener("click", function () {
  infoPanel.style.display = "block";
  flightInfo.innerHTML =
    "Tethered hop which hit tethered limits. With a single Raptor SN2 engine.";
  snName.innerHTML = "Starhopper";

  moreInfo.innerHTML =
    "5 April 2019<br /> Boca Chica, Texas <br /> ~1 m (3 ft 3 in)<br /> ~3 seconds";
});

sh2.addEventListener("click", function () {
  infoPanel.style.display = "block";
  flightInfo.innerHTML =
    "First untethered flight test. Single Raptor engine, SN6.";
  snName.innerHTML = "Starhopper";

  moreInfo.innerHTML =
    "25 July 2019<br /> Boca Chica, Texas <br /> 20 m (66 ft)<br />~22 seconds";
});

sh3.addEventListener("click", function () {
  infoPanel.style.display = "block";
  flightInfo.innerHTML =
    "Single Raptor engine, SN6. Starhopper was retired after this launch, with some parts being reused for other tests.";
  snName.innerHTML = "Starhopper";

  moreInfo.innerHTML =
    "27 August 2019 22:00<br /> Boca Chica, Texas <br />150 m (490 ft)<br /> ~58 seconds";
});

sn5.addEventListener("click", function () {
  infoPanel.style.display = "block";
  flightInfo.innerHTML = "Single Raptor engine, SN27.";
  snName.innerHTML = "Starship SN5";

  moreInfo.innerHTML =
    "4 August 2020 23:57<br /> Boca Chica, Texas <br />150 m (490 ft)<br /> ~45 seconds";
});

sn6.addEventListener("click", function () {
  infoPanel.style.display = "block";
  flightInfo.innerHTML = "Single Raptor engine, SN29.";
  snName.innerHTML = "Starship SN6";

  moreInfo.innerHTML =
    "3 September 2020 17:47<br /> Boca Chica, Texas <br />150 m (490 ft)<br /> ~58 seconds";
});

sn8.addEventListener("click", function () {
  infoPanel.style.display = "block";
  flightInfo.innerHTML =
    "Three Raptor engines, SN30, SN36, and SN42. The vehicle successfully launched, ascended, performed the skydive descent maneuver, relit the engines fueled by the header tanks, and steered to the landing pad. Low pressure in the fuel header tank caused engine issues, resulting in a hard landing and destruction of SN8. However, Elon Musk stated that all the vital telemetry data was acquired from the flight and he seemed very pleased with the outcome tweeting things like 'hell yeah!!' and 'Mars here we come.'";
  snName.innerHTML = "Starship SN8";

  moreInfo.innerHTML =
    "9 December 2020 22:45<br /> Boca Chica, Texas <br />12.5 km (7.8 mi)<br /> 6 minutes, 42 secondss";
});

sn9.addEventListener("click", function () {
  infoPanel.style.display = "block";
  flightInfo.innerHTML =
    "Three Raptor engines, including SN45 and SN49. Test flight on 2 February 2021, during landing, one of the engines failed to ignite, resulting in a hard landing that destroyed SN9.";
  snName.innerHTML = "Starship SN9";

  moreInfo.innerHTML =
    "2 February 2021 20:25<br /> Boca Chica, Texas <br />10 km (6.2 mi)<br /> 6 minutes, 26 seconds";
});

sn10.addEventListener("click", function () {
  infoPanel.style.display = "block";
  flightInfo.innerHTML =
    "SN10 was moved to the launch site to begin its preflight tests on 29 January 2021.";
  snName.innerHTML = "Starship SN10";

  moreInfo.innerHTML =
    "NET February 2021<br /> Boca Chica, Texas <br />high altitude<br /> ~58 seconds";
});
