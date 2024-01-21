function check(n) {
  let chuoi = n;
  chuoi = chuoi.split(" ");
  let chuoiMoi = chuoi[0];
  let end = [];

  for (let i = 0; i < chuoi.length; i++) {
    if (chuoiMoi.length < chuoi[i].length) {
      chuoiMoi = chuoi[i];
    }
  }
  end[0] = chuoiMoi;
  end[1] = chuoiMoi.length;

  console.log(end);
}

let n = prompt("Nhập 1 chuỗi bất kỳ.");

check(n);
