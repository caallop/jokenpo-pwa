/**
 * Service Worker JoKenPo
 * @author Guilherme Rosa, Vitor de Assis, Wellington R Cruz.
 */

//=========================================================
// Registro do Service Worker
// Se o navegador de internet suportar este recurso
if ('serviceWorker' in navigator) {
    navigator.serviceWorker
        .register('./sw.js')
        .then(() => {
            console.log("Service Worker registrado!")
        })
}

//=========================================================


// Instalação (cache "armazenamento local")
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open('static')
            .then((cache) => {
                cache.add('./jokenpo-pwa/')
                cache.add('./jokenpo-pwa/index.html')
                cache.add('./jokenpo-pwa/style.css')
                cache.add('./jokenpo-pwa/app.js')
                cache.add('./jokenpo-pwa/img/papel.png')
                cache.add('./jokenpo-pwa/img/pc.png')
                cache.add('./jokenpo-pwa/img/pcpapel.png')
                cache.add('./jokenpo-pwa/img/pcpedra.png')
                cache.add('./jokenpo-pwa/img/pctesoura.png')
                cache.add('./jokenpo-pwa/img/pedra.png')
                cache.add('./jokenpo-pwa/img/tesoura.png')
                cache.add('./jokenpo-pwa/img/bgyll.jpg')
            })
    )
})

// Ativação
self.addEventListener('activate', (event) => {
    console.log("Ativando o service worker...", event)
    return self.clients.claim()
})


// Interceptação (solicitações https servindo em cache quando off-line)
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
            .then((response) => {
                if (response) {
                    return response
                } else {
                    return fetch(event.request)
                }
            })
    )
})