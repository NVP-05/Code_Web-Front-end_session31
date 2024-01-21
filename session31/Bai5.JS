function chiaMảngTheoNhóm(mảng, n) {
  let kếtQuả = [];
  for (let i = 0; i < mảng.length; i += n) {
    let mảngCon = mảng.slice(i, i + n);
    kếtQuả.push(mảngCon);
  }
  return kếtQuả;
}

let mảng1 = ["a", "b", "c", "d"];
let kếtQuả1 = chiaMảngTheoNhóm(mảng1, 2);
console.log(kếtQuả1);

let mảng2 = ["a", "b", "c", "d"];
let kếtQuả2 = chiaMảngTheoNhóm(mảng2, 3);
console.log(kếtQuả2);
