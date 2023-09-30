const topFixed = document.querySelector('.top-fixed');
const swifto = document.querySelector('.swifto');
const hiddenDivTopFixed = document.getElementById('hidden-div-top-fixed');

window.addEventListener('scroll', () => {
    if (window.scrollY === 0) {
        hiddenDivTopFixed.classList.add('hidden');
        hiddenDivTopFixed.classList.remove('visible');
    } else if (window.scrollY >= 1) {
        hiddenDivTopFixed.classList.add('visible');
    }
});

document.addEventListener('DOMContentLoaded', () => {
    topFixed.style.height = '60px';
});

// Sprawic zeby sie nie ruszalo
// Powiekszanie sie topFixed po scrollowaniu do dolu



// PARALLAX IMAGE

window.addEventListener('scroll', function () {
    const yOffset = window.pageYOffset;
    const parallaxImage = document.getElementById('parallax-image');
  
    // Dostosuj prędkość przesuwania obrazu
    const speed = 0.5; // Możesz dostosować prędkość
  
    // Przesuń obraz w górę o odpowiednią ilość pikseli
    parallaxImage.style.transform = `translateY(-${yOffset * speed}px)`;
  });
  
// PARALLAX




// PARALLAX

const czytajDalejButton = document.querySelector('.czytaj-dalej-button');

czytajDalejButton.addEventListener('click', () => {
    window.scrollTo(0, 1300);
});

const firstPageMainTitle = document.querySelector('.first-page-main-title');
const descriptionFirstPage = document.querySelector('.description-first-page');

document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        firstPageMainTitle.classList.add('main-title-animation');
        firstPageMainTitle.style.color = '#000';
        descriptionFirstPage.style.color = '#000';
        czytajDalejButton.style.color = '#fff';
        czytajDalejButton.style.backgroundColor = 'rgb(158, 63, 253)';
    }, 300)
});

const uslugiP = document.querySelector('.uslugi-p');
const biznesplany = document.querySelector('.biznesplany');
const descriptionSecondPageFirstDiv = document.querySelector('.description-second-page-first-div');
const uslugiKsiegowe = document.querySelector('.uslugi-ksiegowe');
const descriptionSecondPageSecondDiv = document.querySelector('.description-second-page-second-div');
const optymalizacjaFinansow = document.querySelector('.optymalizacja-finansow');
const descriptionThirdPage = document.querySelector('.description-third-page');

// Canvas

const secondCircle = document.querySelector('.second-circle');
const circle = document.querySelector('.circle');
const smallDot = document.querySelector('.small-dot');
const secondRotatedCanva = document.querySelector('.second-rotated-canva');
const rotatedCanva = document.querySelector('.rotated-canva');
const secondSmallDot = document.querySelector('.second-small-dot');
const firstCanvaThirdPage = document.querySelector('.first-canva-third-page');
const secondCanvaThirdPage = document.querySelector('.second-canva-third-page');
const thirdDotThirdPage = document.querySelector('.third-dot-third-page');

// third page

const liczbyToNaszaSpecjalnosc = document.querySelector('.liczby-to-nasza-specjalnosc'); 
const four = document.querySelector('.four');
const lataDoswiadczenia = document.querySelector('.lata-doswiadczenia');
const trzynascie = document.querySelector('.trzynascie');
const ekspertow = document.querySelector('.ekspertow');
const dot = document.querySelector('.dot');

const descriptionSecondPage = document.querySelector('.description-second-page');

document.addEventListener('scroll', () => {
    console.log(window.scrollY);
    if (window.scrollY >= 1000) {
        biznesplany.style.color = '#000';
        biznesplany.classList.add('biznesplany-animation');
        console.log('jest 1300')
        document.querySelector('.description-second-page').style.color = '#000';
        uslugiP.style.color = 'rgb(158, 63, 253)';
        uslugiP.classList.add('uslugi-p-animation');
        descriptionSecondPageFirstDiv.style.color = '#000';
        descriptionSecondPageFirstDiv.classList.add('description-second-page-first-div-animation');
        uslugiKsiegowe.style.color = '#000';
        uslugiKsiegowe.classList.add('uslugi-ksiegowe-animation');
        descriptionSecondPageSecondDiv.style.color = '#000';
        descriptionSecondPage.classList.add('description-second-page-animation');
        optymalizacjaFinansow.style.color = '#000';
        optymalizacjaFinansow.classList.add('optymalizacja-finansow-animation');
        descriptionThirdPage.style.color = '#000';
        descriptionThirdPage.classList.add('description-third-page-animation');
        secondCircle.style.backgroundColor = '#dcbcff';
        circle.style.backgroundColor = 'rgb(158, 63, 253)';
        smallDot.style.backgroundColor = '#000';
        secondRotatedCanva.style.backgroundColor = 'rgb(158, 63, 253)';
        rotatedCanva.style.backgroundColor = '#dbbcff';
        secondSmallDot.style.backgroundColor = '#000';
        firstCanvaThirdPage.style.backgroundColor = 'rgb(158, 63, 253)';
        secondCanvaThirdPage.style.backgroundColor = '#dbbcff';
        thirdDotThirdPage.style.backgroundColor = '#000';
    }
});

document.addEventListener('scroll', () => {
    if (scrollY >= 1300) {
        liczbyToNaszaSpecjalnosc.style.color = '#fff';
        liczbyToNaszaSpecjalnosc.classList.add('liczby-to-nasza-specjalnosc-animation');
        four.style.color = '#fff';
        four.classList.add('four-animation');
        lataDoswiadczenia.style.color = '#fff';
        lataDoswiadczenia.classList.add('four-animation');
        trzynascie.style.color = '#fff';
        trzynascie.classList.add('four-animation');
        ekspertow.style.color = '#fff';
        ekspertow.classList.add('four-animation');
        dot.style.color = '#fff';
        dot.classList.add('four-animation');
    }
});

const oNas2 = document.querySelector('.o-nas-2');
const nasiEksperci = document.querySelector('.nasi-eksperci');

document.addEventListener('scroll', () => {
    if (scrollY >= 1700) {
        oNas2.style.color = 'rgb(158, 63, 253)';
        oNas2.classList.add('go-up-animation-o-nas');
    }
});

document.addEventListener('scroll', () => {
    if (scrollY >= 1750) {
        nasiEksperci.style.color = '#000';
        nasiEksperci.classList.add('nasi-eksperci-animation');
    }
})

const text = document.querySelector('.text');

document.addEventListener('scroll', () => {
    if (scrollY >= 1800) {
        text.style.color = '#000';
        text.classList.add('text-animation')
    }
});

const glowna = document.querySelector('.glowna');

// dokonczyc buttons w top

glowna.addEventListener('click', () => {
   window.scrollTo(0, 0);
})

const uslugi = document.querySelector('.uslugi');

uslugi.addEventListener('click', () => {
    window.scrollTo(0, 1228);
})

const oNas = document.querySelector('.o-nas');

oNas.addEventListener('click', () => {
    window.scrollTo(0, 2000);
});

const referencje = document.querySelector('.referencje');

referencje.addEventListener('click', () => {
    window.scrollTo(0, 2450);
});

const klienci = document.querySelector('.klienci');

klienci.addEventListener('click', () => {
    window.scrollTo(0, 3280);
});

const kontakt = document.querySelector('.kontakt');

kontakt.addEventListener('click', () => {
    window.scrollTo(0, 3882);
});

let scrollingStarted = false;

window.addEventListener('scroll', () => {
    if (window.scrollY >= 2200 && window.scrollY <= 3300 && !scrollingStarted) {
        if (window.scrollY <= 3300) {
            // DOKONCZYC <= 3300
            scrollingStarted = true; 
        }
    }


    if (scrollingStarted) {
        const scrollY = window.scrollY - 2200; // Odejmujemy 2200, aby scrollY zaczynało się od 0 na tej wysokości
        // Tutaj możesz użyć scrollY do dowolnych obliczeń lub animacji
        let speed = 0.5;
    
        document.querySelector('.second-background').style.transform = `translateY(${(scrollY - 100) * speed}px)`;
    }
    
});


/*
            window.addEventListener('scroll', () => {
            if (window.scrollY >= 2600) {
                document.querySelector('.second-background').style.transform = `translateY(0px)`;
            }
*/

window.addEventListener('scroll', () => {
    if (window.scrollY >= 3300) {
        document.querySelector('.second-background').style.transform = `translateY(0px)`;
    }
})

const messageIcon = document.querySelector('.message-icon');
const chat = document.querySelector('.chat');

messageIcon.addEventListener('click', () => {
    chat.style.display = 'block';
});

const closeIcon = document.querySelector('.close-icon');

closeIcon.addEventListener('click', () => {
    chat.style.display = 'none';
})


emailjs.init("aCAlpjkdmEVRYrWGF");

const sendBtn = document.querySelector('.przeslij');

sendBtn.addEventListener("click", sendEmail);

function sendEmail () {
    const imie = document.querySelector('.name').value;
    const message = document.querySelector('.wiadomosc-input').value;
    const user_email = document.querySelector('.email-input').value;
    const nazwisko = document.querySelector('.nazwisko-input').value;
    const subject = 'New Message';

    emailjs.send("service_4ttpfmo", "template_4acs649", {
        subject: subject,
        imie: imie,
        message: message,
        user_email: user_email,
        nazwisko: nazwisko,
    }).then( function () {
        document.querySelector('.wspolpracuj-z-nami').innerHTML = 'Dziala';
    });
};