let player;
      function onYouTubeIframeAPIReady() {
        player = new YT.Player('yt-player', {
          height: '405',
          width: '660',
          videoId: 'LFDaKUHgK7E',
          events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
          }
        });
      }