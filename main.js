"use strict";
var Track = /** @class */ (function () {
    function Track(artist, song, minutes, sec) {
        this.artist = artist;
        this.songName = song;
        this.min = minutes;
        this.sec = sec;
    }
    Track.prototype.ToString = function () {
        return this.songName + ": " + this.artist + " (" + this.min + ":" + this.sec + ")";
    };
    Track.prototype.NumOFSeconds = function () {
        return (this.min * 60) + this.sec;
    };
    return Track;
}());
var PlayList = /** @class */ (function () {
    function PlayList(name) {
        this.playlistName = name;
        this.tracks = [];
    }
    PlayList.prototype.AddTracks = function (t) {
        this.tracks.push(t);
    };
    PlayList.prototype.RemoveTrack = function (t) {
        this.tracks.splice(this.tracks.indexOf(t), 1);
    };
    PlayList.prototype.GetshortestTrack = function () {
        this.tracks.sort(function (a, b) { return a.NumOFSeconds() - b.NumOFSeconds(); });
        /*let shortest = this.tracks[0];
        for(let i = 0; i < this.tracks.length; i++) {
          let track = this.tracks[i];
          if(shortest.NumOFSeconds() >= track.NumOFSeconds())
            shortest = track;
        }
        return shortest; */
        return this.tracks[0];
    };
    return PlayList;
}());
var Driver = /** @class */ (function () {
    function Driver() {
    }
    Driver.Exam = function () {
        var t1 = new Track("TLC", "Waterfalls", 4, 19);
        var t2 = new Track("Elvis", "Love me tender", 2, 41);
        var t3 = new Track("Elvis", "Love me tender", 2, 41);
        console.log(t1.ToString());
        console.log(t2.ToString());
        var playlist = new PlayList("FuckList");
        playlist.AddTracks(t1);
        playlist.AddTracks(t2);
        console.log(playlist.GetshortestTrack().ToString());
    };
    return Driver;
}());
Driver.Exam();
