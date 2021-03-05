let count = 1;
let gs = ["", "", "", "", "", "", "", "", ""];
let cp = "X";
let xwinCount = 0;
let owinCount = 0;
let drawCount = 0;
let gameAc = true;
const wm = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

//========================
// Cell Filling Function
//========================

function fill(cts) {
  if (!gameAc) {
    return;
  }
  let check = document.getElementById(cts.id).innerHTML;
  if (check == "") {
    if (count % 2 != 0) {
      document.getElementById(cts.id).innerHTML = "X";
      cp = "X";
      gs[cts.id - 1] = cp;
      checkWin();
    } else {
      document.getElementById(cts.id).innerHTML = "0";
      cp = "0";
      gs[cts.id - 1] = cp;
      checkWin();
    }
    count++;
  }
}

//======================
// Game Reset Function
//======================

function reset() {
  for (let i = 1; i <= 9; i++) {
    document.getElementById(i).innerHTML = "";
  }
  count = 1;
  gameAc = true;
  document.getElementById("gameStatus").innerHTML = "";
  gs = ["", "", "", "", "", "", "", "", ""];
}

//======================
//Check Game Win Status
//=======================

function checkWin() {
  let rw = false;
  for (let i = 0; i <= 7; i++) {
    const wc = wm[i];
    let a = gs[wc[0]];
    let b = gs[wc[1]];
    let c = gs[wc[2]];
    if (a === "" || b === "" || c === "") {
      continue;
    }
    if (a === b && b === c) {
      rw = true;
      break;
    }
  }
  if (rw) {
    console.log(`${cp} Player Win`);
    if (cp == "X") {
      xwinCount++;
    }
    if (cp == "0") {
      owinCount++;
    }
    document.getElementById("gameStatus").innerHTML = `${cp} win`;
    document.getElementById("xcount").innerHTML = xwinCount;
    document.getElementById("draw").innerHTML = drawCount;
    document.getElementById("ocount").innerHTML = owinCount;
    gameAc = false;
    return;
  }
  let roundDraw = !gs.includes("");
  if (roundDraw) {
    document.getElementById("gameStatus").innerHTML = `Match Draw`;
    drawCount++;
    document.getElementById("xcount").innerHTML = xwinCount;
    document.getElementById("draw").innerHTML = drawCount;
    document.getElementById("ocount").innerHTML = owinCount;
    gameAc = false;
    return;
  }
}
