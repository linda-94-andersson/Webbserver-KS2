# Kunskapskontroll 2: Biblioteks-system

## För att uppnå Godkänt är kraven att:

- Den ska vara byggd med ramverket Express ()
### API:et ska ha följande endpoints:
- GET /books - Hämta alla böcker ()
- GET /books/:id - Hämta en bok ()
- POST /books - Skapa en bok ()
- PUT /books/:id - Ändra en bok (full) ()
- PATCH /books/:id - Ändra en bok (partial) ()
- DELETE /books/:id - Ta bort en bok ()
- API:et ska endast ta emot och skicka data i JSON-format ()
- API:et ska svara med lämpligt meddelande och statuskod om allt gått väl ()
- API:et ska svara med lämpligt meddelande och statuskod om något går fel, exempelvis om användaren skickar in fel strukturerad data ()
- API:et ska lagra och läsa data från en SQL-databas ()
### API:et ska följa MVC-modellen:
- Model - accessar databasen ()
- (View) - Din frontend ()
- Controller - Interagerar med modellen och returnerar responsen till användaren (servitrisen) ()

## För att uppnå Väl Godkänt behöver du åtminstone implementera punkt 1:

#### 1, API:et ska även ha följande routes:
        * POST /auth/register - Registrera en användare ()
        * POST /auth/login - Logga in en användare och svara med en JWT-token ()
        * POST /users/lend - Låna ut en bok (authorized route) ()
        * POST /users/return - Lämna tillbaka en bok (authorized route) ()
        * POST /me - Användarens aktiva lånade böcker och användar-info (authorized route) ()
#### 2, Endpoints för /books ska även innehålla antalet böcker tillgängliga för utlåning ()
#### 3, Skriv en egen logging-middleware som sparar loggar med relevant info i en eller enskilda filer (tidsstämpel, request-metod, route, status) ()