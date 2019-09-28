if(window.Twitch.ext) {
  var latestColor1 = "#8a3ab9";
  var latestColor2 = "#fbad50";

  function updateResultDiv(color1, color2){
      document.getElementById('resultDiv').style.background = "linear-gradient(to right, " + color1 + ", " + color2 + ")";
      $("#headerColor1").val(color1);
      $("#headerColor2").val(color2);
  }

  window.Twitch.ext.onAuthorized(function(auth) {
  	document.getElementById("twitchID").setAttribute("value", auth.channelId);
    document.getElementById("updateButton").addEventListener("click", function(e){
      e.preventDefault();
      //hide saved div
      document.getElementById("savedDiv").style.display = "none";
      
  		var form = document.querySelector('form');
  		var data = new FormData(form);

  		var xmlHttp = new XMLHttpRequest();
	    xmlHttp.onreadystatechange = function() { 
        if (xmlHttp2.status == 200){
          document.getElementById("savedDiv").style.display = "block";
        }
	    }
	    xmlHttp.open("POST", "https://api.pixelsgaming.com:8080/updateInstagramFeed", true); 
	    xmlHttp.send(data);
  	});

	  var xmlHttp2 = new XMLHttpRequest();
    xmlHttp2.onreadystatechange = function() { 
    	if (xmlHttp2.readyState == 4 && xmlHttp2.status == 200){
        console.log(xmlHttp2.responseText)
    		var username = JSON.parse(xmlHttp2.responseText).username;
        var header_color1 = JSON.parse(xmlHttp2.responseText).header_color1;
        var header_color2 = JSON.parse(xmlHttp2.responseText).header_color2;
    		document.getElementById("instagramUsername").setAttribute("value", username);

        latestColor1 = header_color1;
        latestColor2 = header_color2;

        if (latestColor1 == "" || latestColor2 == ""){
          latestColor1 = "#8a3ab9";
          latestColor2 = "#fbad50";
        }

        $("#headerColor1").spectrum({
          color: header_color1,
          preferredFormat: "hex",
          showInput: true,
          move: function(color) {
            latestColor1 = color.toHexString();
            updateResultDiv(latestColor1, latestColor2);
          }
        });

        $("#headerColor2").spectrum({
          color: header_color2,
          preferredFormat: "hex",
          showInput: true,
          move: function(color) {
            latestColor2 = color.toHexString();
            updateResultDiv(latestColor1, latestColor2);
          }
        });

        updateResultDiv(latestColor1, latestColor2);
    	} 
    }
    xmlHttp2.open("GET", "https://api.pixelsgaming.com:8080/instagramFeed?streamer_id=" + auth.channelId, true); 
    xmlHttp2.send();
  });

  window.Twitch.ext.onContext(function(context, contextFields) {
    
  });
  
  window.Twitch.ext.onError(function(err) {
    
  });
}