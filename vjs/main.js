$(document).ready(function () {
    var player = videojs('video');

    player.playlist([
        {
            name: 'Tsports',
            autoplay: true,
            sources: [
                {src: 'http://103.151.60.214:7444/1101/video.m3u8', type: 'application/x-mpegURL'},
            ]
        },
        {
            name: 'GTV',
            sources: [
                {src: 'http://103.151.60.214:7444/1102/video.m3u8', type: 'application/x-mpegURL'},
            ]
        },
        {
            name: 'Star Sports 1',
            sources: [
                {src: 'http://tv.11plus.live/live/stersports1hd/index.m3u8', type: 'application/x-mpegURL'},
            ]
        },
 {
            name: 'Star Sports 2',
            sources: [
                {src: 'http://tv.11plus.live/live/starsports2/index.m3u8', type: 'application/x-mpegURL'},
            ]
        },


	    
  {
            name: 'Star Sports 1',
            autoplay: true,
            sources: [
                {src: 'http://172.17.50.112/live/fifa2022/index.m3u8', type: 'application/x-mpegURL'},
            ]
        },
        {
            name: 'Star Sports 1',
            autoplay: true,
            sources: [
                {src: 'http://172.17.50.112/live/antbd1001/index.m3u8', type: 'application/x-mpegURL'},
            ]
        },
        {
            name: 'TSports',
            sources: [
                {src: 'http://172.17.50.112/live/antbd1002/index.m3u8', type: 'application/x-mpegURL'},
            ]
                }
		]);

// Initialize the playlist-ui plugin with no option (i.e. the defaults).
    player.playlistUi();
});
