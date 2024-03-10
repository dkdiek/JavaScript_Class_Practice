// function Song(singer, title, release) {
//   this.singer = singer;
//   this.title = title;
//   this.release = new Date(release);
//   this.getReleaseDay = function () {
//     return this.release.getDay();
//   };
//   this.getInfo = function () {
//     return `이노래는 ${this.singer}의 노래이고 제목은 ${this.title}입니다.`;
//   };
//   console.log(this);
// }

//es6 클래스
class Song {
  constructor(singer, title, release) {
    this.singer = singer;
    this.title = title;
    this.release = new Date(release);
  }
  getReleaseDay() {
    return this.release.getDay();
  }
}

// 인스턴스화 new
const song1 = new Song("bts", "dna", "2018-09-18");
const song2 = new Song("eminem", "loveyourself", "2020-03-18");

console.log(song1, song2);
console.log(song1.getReleaseDay());
