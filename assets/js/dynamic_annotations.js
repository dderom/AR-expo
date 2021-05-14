AFRAME.registerComponent('clickhandler', {
     init: function() {
       const pin = this.el;
       pin.addEventListener('click', () => {
            var pinId = pin.getAttribute('pin-id');
             
             console.log('Dynamic annotation for ID: ', pinId)
         });

 }});
