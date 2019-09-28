var ads = [
	"12.gif",
	"1.gif",
	"2.png",
	"3.png",
	"4.jpg",
	"5.jpg",
	"6.jpg",
	"7.jpg",
	"8.jpg",
	"9.jpg",
	"10.jpg",
	"11.gif"
];

function getRandomAd() {
    let keys = Array.from(ads.keys());
    return keys[Math.floor(Math.random() * keys.length)];
}

$(document).on("click", ".answer", function(){
	console.log($(this).html());

	$("#adBox").attr("src", "ads/" + getRandomAd());
	$("#questionBox").css("display", "none");
	$("#adBox").css("display", "block");

	setTimeout(function(){
		$("#adBox").css("display", "none");
		$("#questionBox").css("display", "block");
	}, 5000);
});

// (adsbygoogle = window.adsbygoogle || []).push({});

// // if(window.Twitch.ext) {
//   (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
//   (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
//   m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
//   })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

//   ga('create', 'UA-37336033-13', 'auto');
//   ga('set', 'anonymizeIp', true);
//   ga('send', 'event', 'Load', 'IGExtensionLoaded');
//   function loadPanel() {
//     // var xmlHttp2 = new XMLHttpRequest();
//     // xmlHttp2.onreadystatechange = function() { 
//     //   if (xmlHttp2.readyState == 4 && xmlHttp2.status == 200){
//         // var username = JSON.parse(xmlHttp2.responseText).username;
//         var username = "twitch"
//         var header_css = "#000";
//         var header_color1 = "";
//         var header_color2 = "";

//         if (header_color1 == "" || header_color2 == ""){
//           document.getElementById("navImages").style["background"] = header_css;
//         } else {
//           document.getElementById("navImages").style["background"] = "linear-gradient(to right, " + header_color1 + ", " + header_color2 + ")";
//         }

//         var xmlHttp = new XMLHttpRequest();
//         xmlHttp.onreadystatechange = function() { 

//           if (xmlHttp.readyState == 4 && xmlHttp.status == 200){
//             var user = JSON.parse(xmlHttp.responseText).graphql.user;
//             var edges = user.edge_owner_to_timeline_media.edges;

//             document.getElementById("fullname").innerHTML = username;
//             document.getElementById("profilepic").setAttribute("src", user.profile_pic_url);
//             // document.getElementById("profilepic_wrapper").setAttribute("href", "https://www.instagram.com/" + username);
//             // document.getElementById("name_wrapper").setAttribute("href", "https://www.instagram.com/" + username);
//             // document.getElementById("profilepic_wrapper").setAttribute("target", "_blank");
//             // document.getElementById("name_wrapper").setAttribute("target", "_blank");

//             var tmpHTML = "";

//             for (var i = 0; i < edges.length; i++){
//               tmpHTML = tmpHTML + "<img src='" + edges[i].node.display_url + "' width='100%' />";
//             }

//             document.getElementById("pictures").innerHTML = tmpHTML;
//           } 
//           // else if (xmlHttp2.status == 500) {
//           //   console.log("Error")
//           //   // var myEle = document.getElementById("pixelsErrorMessage");
//           //   // if(!myEle){
//           //   //   document.getElementsByClassName("pixelpage")[0].insertAdjacentHTML('beforeend', "<div id='pixelsErrorMessage' style='color:white; background-color:red; padding:5px;'>Please make sure you have signed up at pixelsgaming.com and have entered a public Instagram username on the extension config page. If this problem persists, contact us on Discord!</div>");
//           //   // }
//           // }
//         }
//         xmlHttp.open("GET", "https://www.instagram.com/" + username + "/?__a=1", true); 
//         xmlHttp.send();
//       // } else if (xmlHttp2.status == 500) {
//       //   var myEle = document.getElementById("pixelsErrorMessage");
//       //   if(!myEle){
//       //     document.getElementsByClassName("pixelpage")[0].insertAdjacentHTML('beforeend', "<div id='pixelsErrorMessage' style='color:white; background-color:red; padding:5px;'>Please make sure you have signed up at pixelsgaming.com and have entered a public Instagram username on the extension config page. If this problem persists, contact us on Discord!</div>");
//       //   }
//       // }
//     // }
//     // xmlHttp2.open("GET", "https://api.pixelsgaming.com:8080/instagramFeed?streamer_id=" + auth.channelId, true);
//     // xmlHttp2.send();
//   }

//   loadPanel();

// //   window.Twitch.ext.onAuthorized(function(auth) {
// //     loadPanel(auth);
// //   });

// //   window.Twitch.ext.onContext(function(context, contextFields) {
    
// //   });
  
// //   window.Twitch.ext.onError(function(err) {
    
// //   });
// // }