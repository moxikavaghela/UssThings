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
  
    function getRandomShayari() {
        const randomIndex = Math.floor(Math.random() * shayaris.length);
        return shayaris[randomIndex];
    }
  
    const shayariBlockquote = document.getElementById('shayari-blockquote');
    shayariBlockquote.textContent = getRandomShayari();
  });
  
  let currentMood = '';
  
  function showGiftBox(mood) {
    currentMood = mood;
    document.getElementById('giftBoxModal').style.display = 'block';
  }
  
  function closeGiftBox() {
    document.getElementById('giftBoxModal').style.display = 'none';
  }
  
  function openGiftContent() {
    closeGiftBox();
    document.getElementById('moodContentModal').style.display = 'block';
    displayMoodContent(currentMood);
  }
  
  function closeContent() {
    document.getElementById('moodContentModal').style.display = 'none';
  }
  
  function displayMoodContent(mood) {
    const moodContent = {
        anger: {
            letter: "Here's a letter to calm your anger...",
            quote: "Anger is one letter short of danger.",
            image: "img/angry-img.jpg",
            song: "https://open.spotify.com/embed/track/0xKfC5OlwwZAy0rSAbuXIW?utm_source=generator",
            tips: "Take a deep breath, count to ten."
        },
        sad: {
            letter: "It's okay to feel sad sometimes...",
            quote: "Tears are words that need to be written.",
            image: "img/sad-img.jpg",
            song: "https://open.spotify.com/embed/track/4iV5W9uYEdYUVa79Axb7Rh?utm_source=generator",
            tips: "Talk to someone about your feelings."
        },
        happy: {
            letter: "Your happiness is contagious...",
            quote: "Happiness is not by chance, but by choice.",
            image: "img/happy-img.jpg",
            song: "https://open.spotify.com/embed/track/3Kkjo3cT83cw09VJyrLNwX?utm_source=generator",
            tips: "Keep smiling and spread the joy."
        },
        overthinking: {
            letter: "It's okay to overthink sometimes...",
            quote: "Overthinking is the art of creating problems that weren't even there.",
            image: "img/overthinking-img.jpg",
            song: "https://open.spotify.com/embed/track/2TpxZ7JUBn3uw46aR7qd6V?utm_source=generator",
            tips: "Take a break and clear your mind."
        },
        stressed: {
            letter: "Stress is part of life, but...",
            quote: "It's not the load that breaks you down, it's the way you carry it.",
            image: "img/stressed-img.jpg",
            song: "https://open.spotify.com/embed/track/6DCZcSspjsKoFjzjrWoCdn?utm_source=generator",
            tips: "Practice mindfulness and relaxation techniques."
        },
        irritated: {
            letter: "Feeling irritated? Here's something to calm you down...",
            quote: "Irritation is a great motivator.",
            image: "img/irritated-img.jpg",
            song: "https://open.spotify.com/embed/track/7hQJA50XrCWABAu5v6QZ4i?utm_source=generator",
            tips: "Identify the source and find a solution."
        },
        fear: {
            letter: "Face your fears, for...",
            quote: "The only thing we have to fear is fear itself.",
            image: "img/fear-img.jpg",
            song: "https://open.spotify.com/embed/track/1AhDOtG9vPSOmsWgNW0BEY?utm_source=generator",
            tips: "Confront your fears gradually."
        },
        emotional: {
            letter: "It's okay to feel emotional...",
            quote: "Emotions are the colors of the soul.",
            image: "img/emotional-img.jpg",
            song: "https://open.spotify.com/embed/track/4iV5W9uYEdYUVa79Axb7Rh?utm_source=generator",
            tips: "Express your emotions through creative outlets."
        },
        lonely: {
            letter: "Feeling lonely? Remember...",
            quote: "Loneliness is the human condition.",
            image: "img/lonely-img.jpg",
            song: "https://open.spotify.com/embed/track/2TpxZ7JUBn3uw46aR7qd6V?utm_source=generator",
            tips: "Reach out to friends and family."
        },
        'missing-me': {
            letter: "Missing yourself? Reflect on...",
            quote: "Sometimes you need to step outside, get some air, and remind yourself of who you are and who you want to be.",
            image: "img/missing-me-img.jpg",
            song: "https://open.spotify.com/embed/track/6DCZcSspjsKoFjzjrWoCdn?utm_source=generator",
            tips: "Spend some quality time with yourself."
        },
        'missing-family': {
            letter: "Missing family? Cherish the moments...",
            quote: "Family is not an important thing, it's everything.",
            image: "img/missing-family-img.jpg",
            song: "https://open.spotify.com/embed/track/7hQJA50XrCWABAu5v6QZ4i?utm_source=generator",
            tips: "Plan a visit or a call."
        },
        confused: {
            letter: "Feeling confused? Clarity is within reach...",
            quote: "Confusion is the first step toward clarity.",
            image: "img/confused-img.jpg",
            song: "https://open.spotify.com/embed/track/1AhDOtG9vPSOmsWgNW0BEY?utm_source=generator",
            tips: "Take a step back and reassess."
        },
        // Define content for other moods similarly...
    };
  
    const content = moodContent[mood];
    const moodDiv = document.getElementById('mood-content');
  
    moodDiv.innerHTML = `
        <h2>${mood.charAt(0).toUpperCase() + mood.slice(1)}</h2>
        <div class="card letter">
            <h2>Letter</h2>
            <p>${content.letter}</p>
        </div>
        <div class="card quote">
            <h2>Quote</h2>
            <p>${content.quote}</p>
        </div>
        <div class="card image">
            <h2>Image</h2>
            <img src="${content.image}" alt="${mood.charAt(0).toUpperCase() + mood.slice(1)} Image">
        </div>
        <div class="card song">
            <h2>Song</h2>
            <iframe style="border-radius:12px" src="${content.song}" width="100%" height="352" frameborder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        </div>
        <div class="card tips">
            <h2>Tips</h2>
            <p>${content.tips}</p>
        </div>
    `;
  }
  
  document.querySelectorAll('.circle').forEach(circle => {
    circle.addEventListener('click', function() {
        showGiftBox(this.getAttribute('data-mood'));
    });
  });
  