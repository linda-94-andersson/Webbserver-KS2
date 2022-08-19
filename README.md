## Deployment
* http://localhost:5000/

## Skills used for this project
* JavaScript
* Node.js
* Express.js
* env. 
* JWT Token 
* JSON
* SQlite 3
* API 

## Requirements

# Kunskapskontroll 2: Biblioteks-system

## För att uppnå Godkänt är kraven att:

- Den ska vara byggd med ramverket Express (X)

### API:et ska ha följande endpoints:
        - GET /books - Hämta alla böcker (X)

        - GET /books/:id - Hämta en bok (X)

        - POST /books - Skapa en bok (X)

        - PUT /books/:id - Ändra en bok (full) (X)

        - PATCH /books/:id - Ändra en bok (partial) (X)

        - DELETE /books/:id - Ta bort en bok (X)

- API:et ska endast ta emot och skicka data i JSON-format (X)

- API:et ska svara med lämpligt meddelande och statuskod om allt gått väl (X)

- API:et ska svara med lämpligt meddelande och statuskod om något går fel, exempelvis om användaren skickar in fel strukturerad data (X)

- API:et ska lagra och läsa data från en SQL-databas (X)

### API:et ska följa MVC-modellen:
        - Model - accessar databasen (X)

        - (View) - Din frontend

        - Controller - Interagerar med modellen och returnerar responsen till användaren (servitrisen) (X)

## För att uppnå Väl Godkänt behöver du åtminstone implementera punkt 1:

### API:et ska även ha följande routes:
        * POST /auth/register - Registrera en användare (X)

        * POST /auth/login - Logga in en användare och svara med en JWT-token (X)

        * POST /users/lend - Låna ut en bok (authorized route) (X)

        * POST /users/return - Lämna tillbaka en bok (authorized route) (X)

        * GET /me - Användarens aktiva lånade böcker och användar-info (authorized route) (X)

* Endpoints för /books ska även innehålla antalet böcker tillgängliga för utlåning (X)

* Skriv en egen logging-middleware som sparar loggar med relevant info i en eller enskilda filer (tidsstämpel, request-metod, route, status) (X)