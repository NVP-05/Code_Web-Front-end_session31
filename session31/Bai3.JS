let confirmEnding = ["Hello world", "world"];
let confirmEnding1 = ["Hello world", "orld"];
let confirmEnding2 = ["Hello world", "world2"];
function endsWith(dau, cuoi) {
  return dau.endsWith(cuoi);
}

if (endsWith(confirmEnding[0], confirmEnding[1])) {
  console.log("true.");
} else {
  console.log("false.");
}
if (endsWith(confirmEnding1[0], confirmEnding1[1])) {
  console.log("true.");
} else {
  console.log("false.");
}
if (endsWith(confirmEnding2[0], confirmEnding2[1])) {
  console.log("true.");
} else {
  console.log("false.");
}
