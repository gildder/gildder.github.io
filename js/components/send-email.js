const btn = document.getElementById('button');
const nam = document.getElementById('name');
const mai = document.getElementById('email');
const msg = document.getElementById('message');

document.getElementById('form')
    .addEventListener('submit', function (event) {
        event.preventDefault();
        btn.disabled = true;
        btn.value = 'Enviando...';

        const serviceID = 'service_ib7bfsn';
        const templateID = 'template_3vxwhfl';

        emailjs.sendForm(serviceID, templateID, this)
            .then(() => {
                btn.disabled = false;
                btn.value = 'Enviar';
                nam.value = '';
                mai.value = '';
                msg.value = '';
                console.log('Enviado!');
            }, (err) => {
                btn.disabled = false;
                btn.value = 'Enviar';
                console.log(JSON.stringify(err));
            });
    });
;