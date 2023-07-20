function shout(string) {
    return string.toUpperCase();
};
function whisper(string) {
    return string.toLowerCase();
};
function logShout(string) {
    console.log (string.toUpperCase());
};
function logWhisper(string) {
    console.log (string.toLowerCase());
};
function sayHiToHeadphonedRoommate (string) {
    if (string === "Let's have dinner together!") {
    sayHiToHeadphonedRoommate = "I would love to!";
} else if (string === string.toUpperCase()) {
    sayHiToHeadphonedRoommate = "YES INDEED!";
} else {
  sayHiToHeadphonedRoommate = "I can't hear you!";
}
return (sayHiToHeadphonedRoommate);
};