var player
window.addEventListener("load", (event) => {
     
    player = new Twitch.Embed("twitch-embed", {
        width: 1,
        height: 1,
        channel: "Jodsderechte",
        autoplay: false,
        muted: true,
        //parent: [ "jods-gh.github.io"]
      });
      $("#twitch-embed").addClass('hide');  
    player.addEventListener(Twitch.Player.READY, initiate)
});

function initiate() {
    player.addEventListener(Twitch.Player.ONLINE, handleOnline);
    player.addEventListener(Twitch.Player.OFFLINE, handleOffline);
    player.removeEventListener(Twitch.Player.READY, initiate);
}

function handleOnline() {
    $("LiveFlair").removeClass('hide');
    player.removeEventListener(Twitch.Player.ONLINE, handleOnline);
    player.addEventListener(Twitch.Player.OFFLINE, handleOffline);
}

function handleOffline() {
    $("LiveFlair").addClass('hide');
    //document.getElementById("twitch").classList.add('hide');
    player.removeEventListener(Twitch.Player.OFFLINE, handleOffline);
    player.addEventListener(Twitch.Player.ONLINE, handleOnline);
}