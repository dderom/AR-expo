AFRAME.registerComponent('clickhandler', {
     init: function() {
       const pin = this.el;
       pin.addEventListener('click', () => {
            var pinId = pin.getAttribute('pin-id');
             alert('Clicked! 1');
             console.log('Dynamic annotation for ID: ', pinId)
         });

 }});
