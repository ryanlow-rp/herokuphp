    if ($('.js-player').length) {
        var player = plyr.setup('.js-player', { controls: ['play-large', 'mute', 'progress', 'volume', 'fullscreen'] }, {})[0].plyr;
    }
    function clickMe() {
        player.play()
    }
    function mute() {
        player.setVolume(0);
    }
    function unMute() {
        player.setVolume(10);
    }
    function changeLocal(source, title) {
        $('.video-popup').css('display','table');
        var sourceConfig = {
                type:       'video',
                title:      title,
                sources: [{
                    src:    source,
                    type:   'video/mp4'
                }]
            }
        player.source(sourceConfig);
        setTimeout(function(){ player.play(); }, 1000);

    }
    function changeYoutube(source, title) {
        $('.video-popup').css('display','table');
                
        var sourceConfig = {
            type:       'video',
            title:      title,
            sources: [{
                src:    source,
                type:   'youtube'
            }]
        }
        player.source(sourceConfig);
        setTimeout(function(){ player.play(); }, 1000);

    }
    function changeVimeo(source, title) {
        $('.video-popup').css('display','table');
        var sourceConfig = {
                type:       'video',
                title:      title,
                sources: [{
                    src:    source,
                    type:   'vimeo'
                }]
            }
        player.source(sourceConfig);
        setTimeout(function(){ player.play(); }, 1000);

    }

    $(document).ready(function () {
    	        
       $('.close-video').click(function () {
           $('.video-popup').hide();
           player.pause();
       });
    });