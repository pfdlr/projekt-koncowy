Projekt końcowy w ramach bootcampu KODILLI
### INFO
Projekt na bazie poprzednich modułów dotyczących MERN
W założeniu miał powstać w oparciu o full stack MERN ale ze względu ograniczeń czasowych (mogłem poświęcić na niego tylko 2 tyg.), uległ pewnym modyfikacjom.

Nie korzystam z MongoDB tylko z zewnętrznego API.

Exspress, tymczasowo, wykorzystuję jako pośrednika między zdalnym API a aplikacją. Docelowo albo uruchomię bazę, albo Fetch API przeniosę do aplikacji. 
##### AKTUALIZACJA - na branchu `refactoring` znajduje się wersja clienta obsługująca API. Serwer został usunięty.

Ze względu na wspomniane ograniczenia czasowe skupiłem się na wymaganych w założeniach projektu funkcjonalnościach. W niektórych przypadkach ograniczyłem się do najprostszych rozwiązań - niekoniecznie najlepszych. 

Stylowanie skromne.

Największym problemem dla mnie było łączenie i komunikacja miedzy komponentami.
### Uruchomienie
#### Projekt można uruchomić tylko lokalnie
Do działania aplikacji konieczne jest uruchomienie obu procesów dla serwera i aplikacji.

Z głównego poziomu `yarn start` - 
gdyby pojawiły się błędy, każdy proces należy uruchomić indywidualnie

`cd /server/ yarn start`

`cd /client/ yarn start`
### API
Korzystam z API z rapidapi.com z limitem zapytań 500/miesiąc, więc gdyby aplikacja przestała działać może znaczyć to, że limit został wyczerpany
