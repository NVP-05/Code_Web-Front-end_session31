function rútGọn(chuỗi, n) {
  if (chuỗi.length > n) {
    return chuỗi.substring(0, n) + "...";
  } else {
    return chuỗi;
  }
}
let chuỗiGốc = "Hello world, Im Peter.";
let chuỗiRútGọn = rútGọn(chuỗiGốc, 11);
console.log(chuỗiRútGọn);
