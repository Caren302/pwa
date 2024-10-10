if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/sw.js')
        .then(registration => {
          console.log('Service Worker registrado:', registration);
        }).catch(error => {
          console.log('Service Worker falló:', error);
        });
    });
  }
  
  document.getElementById('pushButton').addEventListener('click', function() {
    Notification.requestPermission().then(function(permission) {
      if (permission === 'granted') {
        navigator.serviceWorker.ready.then(function(registration) {
          const options = {
            body: 'Esta es una notificación enviada en segundo plano',
            icon: '/images/des.jpg',
            badge: '/images/des.jpg'
          };
  
          registration.showNotification('Notificación PWA', options);
        });
      } else {
        console.log('Permiso para notificaciones denegado.');
      }
    });
  });
  