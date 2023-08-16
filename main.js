// تغير span الي كلامات ثانية
var typed = new Typed(".multtext", {
    strings: [,"","مصمم ويب UI/UX","مبرمج تطبيقات ذكية"],
    loop:true,
    typeSpeed:100,
    backSpeed:80,
    backDelay:1500
    });

    // رسالة الترحيب عند دخول الموقع
    document.addEventListener("DOMContentLoaded", function () {
        const welcomePopup = document.getElementById("welcomePopup");
        const closePopupButton = document.getElementById("closePopup");
    
        welcomePopup.style.display = "flex";
    
        closePopupButton.addEventListener("click", function () {
            welcomePopup.style.display = "none";
        });
    });

    
