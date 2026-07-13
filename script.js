// ==============================
// WABI.STUDIO
// script.js
// ==============================

// Cambiar el fondo del menú al hacer scroll
window.addEventListener("scroll", function () {

    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 80) {

        navbar.style.background = "rgba(14,13,11,0.92)";
        navbar.style.transition = "0.4s";

        document.querySelectorAll(".navbar a").forEach(link => {
            link.style.color = "#F0EBE3";
        });

        document.querySelector(".logo").style.color = "#F0EBE3";

    } else {

        navbar.style.background = "rgba(240,235,227,0.90)";

        document.querySelectorAll(".navbar a").forEach(link => {
            link.style.color = "#0E0D0B";
        });

        document.querySelector(".logo").style.color = "#0E0D0B";

    }

});



// Animación al aparecer las secciones

const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";
entry.target.style.transform="translateY(0px)";

}

});

});

sections.forEach(section=>{

section.style.opacity="0";

section.style.transform="translateY(60px)";

section.style.transition="all 1s ease";

observer.observe(section);

});



// Animación de tarjetas

const cards=document.querySelectorAll(".card");

cards.forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transform="translateY(-15px) scale(1.02)";

});

card.addEventListener("mouseleave",()=>{

card.style.transform="translateY(0px) scale(1)";

});

});



// Botón flotante WhatsApp

const whatsapp=document.createElement("a");

whatsapp.href="https://wa.me/593962741940";

whatsapp.target="_blank";

whatsapp.innerHTML="💬";

whatsapp.style.position="fixed";

whatsapp.style.right="25px";

whatsapp.style.bottom="25px";

whatsapp.style.width="65px";

whatsapp.style.height="65px";

whatsapp.style.borderRadius="50%";

whatsapp.style.background="#25D366";

whatsapp.style.display="flex";

whatsapp.style.justifyContent="center";

whatsapp.style.alignItems="center";

whatsapp.style.fontSize="30px";

whatsapp.style.color="white";

whatsapp.style.textDecoration="none";

whatsapp.style.boxShadow="0 10px 25px rgba(0,0,0,.25)";

whatsapp.style.zIndex="9999";

document.body.appendChild(whatsapp);
