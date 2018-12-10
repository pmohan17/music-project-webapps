$(document).ready(() => {
  function hideAll() {
  $('#comeFlyWithMeSong').hide();
  $('#luckBeALadySong').hide();
  $('#asTimeGoesBySong').hide();
  $('#somethinStupidSong').hide();
  $('#comeFlyWithMePlaying').hide();
  $('#luckBeALadyPlaying').hide();
  $('#asTimeGoesByPlaying').hide();
  $('#somethinStupidPlaying').hide();
}
hideAll();

$('.albumCover').click(function() {

hideAll();
  switch ($(this).attr("id")) {
    case "comeFlyWithMeCover":
      $('#comeFlyWithMeSong').show();
      $('#comeFlyWithMePlaying').slideToggle();
      break;
    case "myKindOfBroadwayCover":
      $('#luckBeALadySong').show();
      $('#luckBeALadyPlaying').slideToggle();
      break;
    case "pointOfNoReturn":
      $('#asTimeGoesBySong').show();
      $('#asTimeGoesByPlaying').slideToggle();
      break;
    case "theWorldWeKnew":
      $('#somethinStupidSong').show();
      $('#somethinStupidPlaying').slideToggle();
      break;
  }
  $("audio").each(function() {
    this.pause();
    this.currentTime = 0;
    });
});
});
