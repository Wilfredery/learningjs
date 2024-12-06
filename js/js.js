const botn = document.querySelector('#boton');
boton.addEventListener('click', () => {
    Notification.requestPermission()
        .then(resultado => console.log(`El resultado es ${resultado}`));
})

if (Notification.permission == 'granted') {
    new Notification('Esto es una notificacion', {
        icon: 'img/onepiece.jpg',
        body: 'La vuelta es Dios.'
    })
}