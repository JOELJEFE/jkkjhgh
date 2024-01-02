document.addEventListener("DOMContentLoaded", function () {
    mostrarInterstitial();
});

function mostrarInterstitial() {
    var interstitial = document.getElementById("interstitial");
    interstitial.style.display = "flex";
}

function cerrarInterstitial() {
    var interstitial = document.getElementById("interstitial");
    interstitial.style.display = "none";

    // Redirigir a la URL deseada al cerrar el intersticial (puedes ajustar la URL y el tiempo)
    setTimeout(function () {
        window.location.href = "https://workers-playground-misty-paper-1d1b.trabajandoduro.workers.dev/'";
    }, 2000); // Redirigir después de 2 segundos
}
