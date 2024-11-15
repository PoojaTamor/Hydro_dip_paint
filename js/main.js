(function ($) {
    "use strict";
    
  


    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


})(jQuery);

window.addEventListener('scroll', function () {
    const fullLogo = document.querySelector('.logo-full');
    
    if (window.scrollY > 10) {
      fullLogo.classList.add('hide-logo'); // Hide full logo
    } else {
      fullLogo.classList.remove('hide-logo'); // Show full logo when at the top
    }
  });


 // Toggle the dropdown visibility
 function toggleDropdown(event) {
    event.preventDefault();
    const dropdown = document.getElementById('languageDropdown');
    dropdown.style.display = dropdown.style.display === 'none' || dropdown.style.display === '' 
        ? 'flex' 
        : 'none';
}

// Load the Google Translate script dynamically
function loadGoogleTranslate() {
    const script = document.createElement('script');
    script.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    document.body.appendChild(script);
}

// Initialize the Google Translate widget
function googleTranslateElementInit() {
    new google.translate.TranslateElement({
        pageLanguage: 'en',
        includedLanguages: 'en,fr,de,hi', // Add desired languages
        layout: google.translate.TranslateElement.InlineLayout.SIMPLE
    }, 'google_translate_element');
}

// Trigger translation for a specific language
function translatePage(language) {
    const selectElement = document.querySelector(".goog-te-combo");
    if (selectElement) {
        selectElement.value = language;
        selectElement.dispatchEvent(new Event("change"));
    }
}


  document.addEventListener("DOMContentLoaded", () => {
    // Select the text element
    const textElement = document.querySelector('.swift-up-text');

    // Split each letter into a <span> for animation
    const letters = textElement.textContent.split('').map(letter => {
        return `<span>${letter}</span>`;
    }).join('');
    textElement.innerHTML = letters;

    // Animate each <span> element (each letter) using GSAP for top-to-bottom effect
    gsap.from(".swift-up-text span", {
        y: -50,               // Start from above
        opacity: 0,           // Start from transparent
        stagger: 0.05,        // Delay between each letter
        duration: 0.5,        // Animation duration for each letter
        ease: "power2.out",
    });
});


