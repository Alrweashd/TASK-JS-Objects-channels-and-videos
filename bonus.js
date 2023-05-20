const channels = require("./channels.json");

/**************************************************************
 * totalVideosDuration(channel):
 * - receives a channel object
 * - returns the total duration of all the videos in this channel
 *
 * BONUS: use iteration method `.reduce()`
 ****************************************************************/
function totalVideosDuration(channel) {
  // let dur = 0;
  // channel.videos.forEach((element) => {
  //   dur = dur + element.duration;
  // });
  // return dur;

  //total initially 0
  return [...channel.videos].reduce(
    (total, video) => total + video.duration,
    0
  );
}
//console.log(channels[0].videos[0].duration);
//console.log(totalVideosDuration(channels[0]));
/**************************************************************
 * channelWithMostContent(channels):
 * - receives an array of channel objects
 * - returns the channel with the highest total video duration
 *
 * Hint: use the `totalVideosDuration()` function
 * BONUS: use iteration method `.sort()`
 ****************************************************************/
function channelWithMostContent(channels) {
  // let totalDurArray = [];
  // channels.forEach((channel) => {
  //   totalDurArray.push(totalVideosDuration(channel));
  // });
  // let index = totalDurArray.indexOf(Math.max.apply(Math, totalDurArray));
  //return channels[index];

  return [...channels].sort(
    (ch1, ch2) => totalVideosDuration(ch2) - totalVideosDuration(ch1)
  )[0];
}

console.log(channelWithMostContent(channels));

/**************************************************************
 * longestChannelName(channels):
 * - receives an array of channel objects
 * - returns the channel with the longest name
 *
 * BONUS: use iteration method `.sort()`
 ****************************************************************/
function longestChannelName(channels) {
  // let arra = channels.map((channel) => channel.name.length);
  // let index = arra.indexOf(Math.max.apply(Math, arra));
  // return channels[index];
  return [...channels].sort((ch1, ch2) => ch2.name.length - ch1.name.length)[0];
}

console.log(longestChannelName(channels));
