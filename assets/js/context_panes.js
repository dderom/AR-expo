AFRAME.registerComponent('markerhandler', {
    init: function () {
      const marker = this.el;
      marker.addEventListener("markerFound", ()=> {
        var markerId = marker.id;
        var markerArtistDIV = 'menu-artist-' + markerId;
        var markerDescriptionDIV = 'menu-description-' + markerId;
        var markerVideoDIV = 'menu-video-' + markerId;
        var markeriframeId = 'iframe-' + markerId;
        var markerVideoDIViframe = 'context-video-' + markerId;
        /* Check if there is a artistDiv and get ID if so */
        if (document.getElementById(markerArtistDIV) !== null) {
          var visibelvar = document.getElementById(markerArtistDIV).style.visibility = "visible";
        }
        var visibelvar2 = document.getElementById(markerDescriptionDIV).style.visibility = "visible";
        if (document.getElementById(markerVideoDIV) !== null) {
        var visibelvar3 = document.getElementById(markerVideoDIV).style.visibility = "visible";

            $(document).ready(function(){
                /* Get iframe src attribute value i.e. YouTube video url
                and store it in a variable */
                var url = $("#" + markeriframeId).attr('src');
                console.log("Video URL: ", url);
                /* Assign empty url value to the iframe src attribute when
                modal hide, which stop the video playing */
                $("#" + markerVideoDIViframe).on('hide.bs.modal', function(){
                    $("#" + markeriframeId).attr('src', '');
                    console.log("Video autoplay: ", markerVideoDIViframe);
                });

                /* Assign the initially stored url back to the iframe src
                attribute when modal is displayed again */
                $("#" + markerVideoDIViframe).on('show.bs.modal', function(){
                    $("#" + markeriframeId).attr('src', url);
                    console.log("Video autoplay: ", markerVideoDIViframe);
                });


            });
        }
        // check if there are dynamic annotations and build these if there are

        // Now print some console
        console.log('Marker Found: ', markerId);
        console.log("visibility: ", visibelvar);
        console.log("Description ID: ", markerDescriptionDIV);
        console.log("Artist ID: ", markerArtistDIV);
        console.log("Video ID: ", markerVideoDIV);
        console.log("Video autoplay: ", markerVideoDIViframe);

      });
      marker.addEventListener("markerLost",() =>{
        var markerId = marker.id;
        if (document.getElementById(markerArtistDIV) !== null) {
          var markerArtistDIV = 'menu-artist-' + markerId;
          var visibelvar = document.getElementById(markerArtistDIV).style.visibility = "hidden";
        }
        var markerDescriptionDIV = 'menu-description-' + markerId;
        var markerVideoDIV = 'menu-video-' + markerId;
        var visibelvar2 = document.getElementById(markerDescriptionDIV).style.visibility = "hidden";
        if (document.getElementById(markerVideoDIV) !== null) {
          var visibelvar3 = document.getElementById(markerVideoDIV).style.visibility = "hidden";
        }
        console.log('Marker Lost: ', markerId);
        console.log("visibility: ", visibelvar);
        console.log("Description ID - hidden: ", markerDescriptionDIV)
        console.log("Artist ID - hidden: ", markerArtistDIV)
        console.log("Video ID - hidden: ", markerVideoDIV)
      });
    },
  });
