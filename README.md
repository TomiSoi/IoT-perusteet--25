IoT-Perusteet: Lämpötila-anturin pipeline

Tämä repositorio sisältää IoT-Perusteet-kurssilla kehitetyn lämpötila-anturin pipelinen koodin ja viikkotehtävät. Projekti toteuttaa kokonaisen IoT-pipelinen Wokwi Pico -simulaattorilla, 
joka kerää ja lähettää lämpötiladataa ThingSpeakiin, visualisoi sen selainpohjaisella käyttöliittymällä ja sisältää Discord-ilmoitukset.

Sisältö:
Viikkotehtävät omissa kansioissaan.
Server.js: Node.js/Express-palvelin, joka lähettää viestejä Discord-webhookiin /notify-päätepisteen kautta.
fetch_temperature.html: HTML-tiedosto lämpötiladatan visualisointiin.
fetch_temperature.js: JavaScript-koodi, joka hakee lämpötiladataa ThingSpeakistä ja piirtää sen Google Charts -käyränä (päivitys 60 sekunnin välein).

Wokwi Setup:

<img width="572" height="616" alt="Sensor   Pico" src="https://github.com/user-attachments/assets/a669d62c-91c9-4081-a21d-909c061a362e" />
