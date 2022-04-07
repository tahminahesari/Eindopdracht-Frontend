# "Borahae" project

Met behulp van React heb ik webapplicatie genaamd “Borahae" gemaakt voor Zuid Koreaanse K-Pop Band “BTS”. Waar in fans alle quote van alle 7 members kunnen terugvinden in een plekje, spelletjes spelen en quote kunnen plaatsen van de members. Om te kunnen uploaden dient fan ingelogd te zijn. Om de data van mijn gebruikers op te slaan zoals gebruikersnaam, email en wachtwoord, maak ik gebruik van Novi Backend API.

Volgende functionaliteiten bevatten mijn webapplicatie “Borahae”

- Fan kan een account aanmaken
- Fan kan inloggen
- Een ingelogde fan kan een quote uploaden( tekst )
- Alle quotes zien van alle members
- Gebruiker kan raden van wie de quote is (game)

## Screenshots

![This is home page](./src/img/screenshots.png)

## Benodigdheden

- Github repo van mij project vind je hier [Borahae](hhttps://github.com/oanhgle/bangtan-api).

- Om data opslaan is gebruik gemaakt van de [Novi Backend API](https://github.com/hogeschoolnovi/novi-educational-backend-documentation).

- Om data op te halen is gebruik gemaakt van de [BTS Quotes API](https://github.com/hogeschoolnovi/novi-educational-backend-documentation).

- Node.js dient geinstaleerd te zijn om app te kunnen runnen. Ik heb versie v16.13.2 gebruikt tijdens ontwikkelen

## Installatie stappen

1. Download de repo: `git clone https://github.com/tahminahesari/Eindopdracht-Frontend.git ` of get from VCS in Webstorm
2. Instaleer de dependencies: `npm install`
3. En dan start de app: `npm start`

## Inloggegevens

Er zijn geen standaard accounts beschikbaar, om in te logggen dient gebruiker te registeren via de browsers via [http://localhost:3000/signup](http://localhost:3000/signup).
Met het volgende gegevens:

- gebruikersnaam
- email
- wachtwoord

En het vervolgens inloggen via [http://localhost:3000/signIn](http://localhost:3000/signIn).
Met het volgende gegevens:

- gebruikersnaam
- wachtwoord

## NPM Commando's

- `npm start`
  om de applicatie te starten.

  Open [http://localhost:3000](http://localhost:3000) om het in het browser te bekijken.

- `npm test`
  om te je code te testen voor het deployen.

- `npm run build`
  voor optimaliseren en voor het betere gebruikerservaring.

- `npm run eject`
  Maakt de instellingen van Create React App zichtbaar, en aanpasbaar dit proces is niet terug te draaien.
