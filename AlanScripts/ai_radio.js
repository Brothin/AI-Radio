// Use this sample to create your own voice commands
question(
    'what can this app do?','what does this app do?',
    reply('This is a radio app where you can ask me to play some music'),
);

intent('play $(CHANNEL* (.*)) fm', p => {
    let channel=project.radios.filter(x=> x.name.toLowerCase()===p.CHANNEL.value.toLowerCase())[0];
    try {
        p.play({"command":"play_channel","id":channel.id});
        p.play("(Playing Now|Ok sir|On it|Doing it)");
    } catch(err) {
        console.log("Can't play");
        p.play("Sorry sir, this channel is unavailable");
    }
});

intent('play (some|) $(CATEGORY* (.*)) music', p => {
    let channel=project.radios.filter(x=> x.category.toLowerCase()===p.CATEGORY.value.toLowerCase())[0];
    try {
        p.play({"command":"play_channel","id":channel.id});
        p.play("(Playing Now|Ok sir|On it|Doing it)");
    } catch(err) {
        console.log("Can't play");
        p.play("Sorry sir, this genre is unavailable");
    }
});

intent('(play)','play (the|) (some|) music', p => {
    p.play({"command":"play"});
    p.play("(Playing Now|Ok sir|On it|Doing it)");
});

intent('stop (it|)','stop (the|) music','pause (it|)','pause (the|) music', p => {
    p.play({"command":"stop"});
    p.play("(Stopping Now|Ok sir|On it|Doing it)");
});

intent('(play|) next (channel|fm|radio|)', p => {
    p.play({"command":"next"});
    p.play("(Ok sir|On it|Doing it|Sure)");
});

intent('(play|) previous (channel|fm|radio|)', p => {
    p.play({"command":"prev"});
    p.play("(Ok sir|On it|Doing it|Sure)");
});
