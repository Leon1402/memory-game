export const getTime = (duration) => {
  let hours = Math.floor(duration / 60 / 60);
  let minutes = Math.floor(duration / 60) - (hours * 60);
  var seconds = duration % 60;

  hours = (hours < 10) ? '0' + hours : hours;
  minutes = (minutes < 10) ? '0' + minutes : minutes;
  seconds = (seconds < 10) ? '0' + seconds : seconds;

  return hours + ':' + minutes + ':' + seconds
}