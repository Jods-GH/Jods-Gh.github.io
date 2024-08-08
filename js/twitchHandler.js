window.onload = function(){
     
    var player = new Twitch.Embed("twitch-embed", {
        width: 900,
        height: 900,
        channel: "Jodsderechte",
        autoplay: false,
        muted: true,
        //parent: [ "jods-gh.github.io"]
      });
    player.addEventListener(Twitch.Player.READY, initiate)
    document.getElementById("twitch-embed").classList.add('hide');
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
    document.getElementById("twitchHolder").classList.add('hide');
    document.getElementById("LiveFlair").classList.add('hide');
    //document.getElementById("twitch").classList.add('hide');
    player.removeEventListener(Twitch.Player.OFFLINE, handleOffline);
    player.addEventListener(Twitch.Player.ONLINE, handleOnline);
    player.setMuted(true);
}