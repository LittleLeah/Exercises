class Track {
  private artist: string;
  private songName: string;
  private min: number;
  private sec: number;
  constructor(artist: string, song: string, minutes: number, sec: number) {
    this.artist = artist;
    this.songName = song;
    this.min = minutes;
    this.sec = sec;
  }
  ToString()
  {
    return this.songName +": "+ this.artist + " (" + this.min +":" + this.sec +")";
  }
  NumOFSeconds() {
    return (this.min*60) + this.sec;
  }
}
class PlayList{
  private playlistName: string;
  private tracks: Track[];
  constructor(name: string){
    this.playlistName = name;
    this.tracks = [];
  }
  AddTracks(t: Track) {
    this.tracks.push(t);
  }
  RemoveTrack(t : Track) {
    this.tracks.splice(this.tracks.indexOf(t), 1);
  }
  GetshortestTrack() {
    this.tracks.sort((a, b) => a.NumOFSeconds() - b.NumOFSeconds())
    /*let shortest = this.tracks[0];
    for(let i = 0; i < this.tracks.length; i++) {
      let track = this.tracks[i];
      if(shortest.NumOFSeconds() >= track.NumOFSeconds())
        shortest = track;
    }
    return shortest; */ 
    return this.tracks[0];
  }
}

class Driver{
  static Exam(): void {
    let t1 = new Track("TLC", "Waterfalls", 4, 19);
    let t2 = new Track("Elvis", "Love me tender", 2, 41);
    let t3 = new Track("Elvis", "Love me tender", 2, 41);
    console.log(t1.ToString());
    console.log(t2.ToString());
    let playlist = new PlayList("FuckList")
    playlist.AddTracks(t1);
    playlist.AddTracks(t2);
    console.log(playlist.GetshortestTrack().ToString());
  }
}
Driver.Exam();