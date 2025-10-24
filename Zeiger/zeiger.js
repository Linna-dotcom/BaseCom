document.addEventListener('DOMContentLoaded', function() {   
    
    const zeiger = document.getElementById("zeiger");

    document.addEventListener("mousemove", (e) => {  

    // Mittelpunkt des Fensters
    const mitteX = window.innerWidth / 2;   
    const mitteY = window.innerHeight / 2;
    // Mausposition
    const dx = e.clientX - mitteX;
    const dy = e.clientY - mitteY;
    // Winkel berechnen (in Grad)
    const winkel = Math.atan2(dy, dx) * (180 / Math.PI);
    // Zeiger drehen
    zeiger.style.transform = `rotate(${winkel}deg)`;


    })});
