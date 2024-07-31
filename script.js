document.addEventListener('DOMContentLoaded', () => {
    const shayaris = [
        'ठीक है ख़ुद को हम बदलते हैं शुक्रिया मश्वरत का चलते हैं',
        'क्या तकल्लुफ़ करें ये कहने में जो भी ख़ुश है हम उस से जलते हैं',
        'किस लिए देखती हो आईना तुम तो ख़ुद से भी ख़ूब-सूरत हो',
        'दास्ताँ ख़त्म होने वाली है तुम मिरी आख़री मोहब्बत हो',
        'जो गुज़ारी न जा सकी हम से हम ने वो ज़िंदगी गुज़ारी है',
        'ये मुझे चैन क्यूँ नहीं पड़ता एक ही शख़्स था जहान में क्या',
        'हम को यारों ने याद भी न रखा जौन यारों के यार थे हम तो'
    ];

    // Function to select a random Shayari
    function getRandomShayari() {
        const randomIndex = Math.floor(Math.random() * shayaris.length);
        return shayaris[randomIndex];
    }

    // Set a random Shayari in the blockquote element
    document.getElementById('shayari-blockquote').innerHTML = `<p>${getRandomShayari()}</p>`;
});
//document.addEventListener('DOMContentLoaded', () => {
  //  const envelope = document.getElementById('envelope');
  //  const envelopeBody = envelope.querySelector('.envelope-body');
    
 //   envelope.addEventListener('click', () => {
     //   envelopeBody.style.display = 'flex'; // Show cards
  //  });
//});

document.addEventListener('DOMContentLoaded', () => {
    const envelope = document.getElementById('envelope');
    const envelopeBody = envelope.querySelector('.envelope-body');
    const cards = envelopeBody.querySelectorAll('.card');
    const openEnvelopeButton = document.getElementById('open-envelope');

    openEnvelopeButton.addEventListener('click', () => {
        envelope.classList.add('open');
        envelopeBody.style.display = 'block'; // Show envelope body
        
        // Reveal cards one by one
        cards.forEach((card, index) => {
            setTimeout(() => {
                card.classList.add('visible');
            }, index * 500); // Delay each card's appearance
        });
    });
});

