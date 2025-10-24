document.addEventListener('DOMContentLoaded', function() {

    let nummer = Math.floor(Math.random() * 100) +1;
    console.log(nummer)

    const eingabeFeld = document.getElementById('eingabe');
    const prüfen = document.getElementById('prüfen');
    const rückmeldung = document.getElementById('rückmeldung');
    const hinweis = document.getElementById('hinweis');

    prüfen.addEventListener('click', function() {
    
        const wert = eingabeFeld.value; //string (Buchstaben)
        console.log(wert)

        if (isNaN(wert) || wert.trim() === '') { //prüfen ob es eine Zahl ist und die Eingabe nicht leer ist

            rückmeldung.textContent = 'Fehler: Bitte geben Sie eine gültige Zahl ein.';
            rückmeldung.style.color = 'red';
        } else { //Eingabezahl der generieten Zahl entspricht --> STIMMT ist eine Zahl
            
            rückmeldung.textContent = 'Erfolg: Dies ist eine gültige Zahl.';
            rückmeldung.style.color = 'green';

            console.log(typeof nummer);
            console.log(typeof wert);

            const wertNummer = parseInt(wert); //(Varable Wert wird von Buchstaben in Nummer umgewandelt)

                if (wertNummer === nummer) {
                    alert ('Sehr gut! Du hast die Zahl erraten!');
                    nummer = Math.floor(Math.random() * 100) +1;
                    console.log(nummer)
                } else if (wertNummer > nummer) {
                    hinweis.textContent = 'Hinweis: Meine Zahl ist kleiner.'
                } else {
                    hinweis.textContent = 'Hinweis: Meine Zahl ist größer.'
                }
        }
    })
});





    