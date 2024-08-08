var player
window.onload = function(){
     
    player = new Twitch.Embed("twitch-embed", {
        width: 500,
        height: 888,
        channel: "Jodsderechte",
        autoplay: false,
        muted: true,
        //parent: [ "jods-gh.github.io"]
      });
    player.addEventListener(Twitch.Player.READY, initiate)
}

function initiate() {
    player.addEventListener(Twitch.Player.ONLINE, handleOnline);
    player.addEventListener(Twitch.Player.OFFLINE, handleOffline);
    player.removeEventListener(Twitch.Player.READY, initiate);
}

function handleOnline() {
    //document.getElementById("twitch").classList.remove('hide');
    document.getElementById("LiveFlair").classList.remove('hide');
    player.removeEventListener(Twitch.Player.ONLINE, handleOnline);
    player.addEventListener(Twitch.Player.OFFLINE, handleOffline);
    player.setMuted(false);
}

function handleOffline() {
    document.getElementById("LiveFlair").classList.add('hide');
    //document.getElementById("twitch").classList.add('hide');
    player.removeEventListener(Twitch.Player.OFFLINE, handleOffline);
    player.addEventListener(Twitch.Player.ONLINE, handleOnline);
    player.setMuted(true);
}