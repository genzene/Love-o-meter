let f = document.getElementById("f");
f.addEventListener("submit", (e) => {
  e.preventDefault();

  //collecting data and getting the variables ready...
  let close = document.querySelector("dialog button");
  const dia = document.querySelector("dialog");
  let dialog = document.getElementById("dia");
  let n1 = document.getElementById("n1").value;
  let n3 = n1.replace(" ", "");
  let n2 = document.getElementById("n2").value;
  let n4 = n2.replace(" ", "");
  let n5 = "love";
  let s = n3 + n4 + n5;

  //taking out every character from the input to the main list...
  let o = {};
  for (let i = 0; i < s.length; i++) {
    let ch = s[i];
    if (!o[ch]) {
      o[ch] = 1;
    } else {
      o[ch] += 1;
    }
  }
  let l = Object.values(o);

  //making the 23 to 2,3 kind of stuff...
  for (let i = 0; i < l.length; i++) {
    if (l[i] > 9) {
      let a = String(l[i]);
      l.splice(i, i + 1);
      l.splice(i, 0, a.charAt(0), a.charAt(1));
      l = l.map(Number);
    }
  }

  let x = [];
  let t = 0;
  let c = 0;
  let len = 0;

  if (l.length % 2 == 0) {
    len = l.length / 2;
  } else {
    len = (l.length - 1) / 2;
  }

  //Cancelling the letters till they are 4/3 letters long...
  while (l.length > 3 || x.length > 3) {
    c++;

    //cancelling and checking 23-> 2,3 stuff...
    if (t == 0) {
      for (let i = 0; i < len; i++) {
        if (l[i] > 9) {
          let a = String(l[i]);
          l.splice(i, i + 1);
          l.splice(i, 0, a.charAt(0), a.charAt(1));
          l = l.map(Number);
        }
        x[i] = l[i] + l[l.length - i - 1];
      }
    } else {
      for (let i = 0; i < len; i++) {
        if (x[i] > 9) {
          let a = String(x[i]);
          x.splice(i, i + 1);
          x.splice(i, 0, a.charAt(0), a.charAt(1));
          x = x.map(Number);
        }
        l[i] = x[i] + x[x.length - i - 1];
      }
    }

    // getting ready for the second while loop if list characters still not less than 3 & also getting ready for the upcoming process...
    if (t == 0) {
      t = 1;
      if (l.length % 2 !== 0) {
        x[x.length] = l[len];
      }
      if (x.length % 2 == 0) {
        len = x.length / 2;
      } else {
        len = (x.length - 1) / 2;
      }
      l = [];
    } else {
      if (x.length % 2 !== 0) {
        l[l.length] = x[len];
      }
      t = 0;
      if (l.length % 2 == 0) {
        len = l.length / 2;
      } else {
        len = (l.length - 1) / 2;
      }
      x = [];
    }
    if (c > 5) {
      break;
    }
  }

  // getting ready to check if the number is 100 or not and 23-> 2,3...
  let y = "";
  if (t == 0) {
    for (let i = 0; i < l.length; i++) {
      if (l[i] > 9) {
        let a = String(l[i]);
        l.splice(i, i + 1);
        l.splice(i, 0, a.charAt(0), a.charAt(1));
        l = l.map(Number);
      }
      y += l[i];
    }
  } else {
    for (let i = 0; i < x.length; i++) {
      if (x[i] > 9) {
        let a = String(x[i]);
        x.splice(i, i + 1);
        x.splice(i, 0, a.charAt(0), a.charAt(1));
        x = x.map(Number);
      }
      y += x[i];
    }
  }
  y = Number(y);

  // Checking if the number in 100...
  if (y == 100) {
    document.getElementById("big").innerText = `${y}%`;
    document.getElementById("p").innerText = `${n1} loves ${n2} ${y}%`;
    dia.showModal();
  }
  // if not 100 than making 4& 3 characters to 2 characters for the percentage...
  else if (y > 100) {
    // runs only if x is empty list...
    if (x.length == 0) {
      if (l.length == 3) {
        l[0] = l[0] + l[2];
        l.splice(2, 1);
        for (let i = 0; i < 1; i++) {
          if (l[i] > 9) {
            let a = String(l[i]);
            l.splice(i, i + 1);
            l.splice(i, 0, a.charAt(0), a.charAt(1));
            l = l.map(Number);
            x[0] = l[0] + l[2];
            x[1] = l[1];
            l = [];
          }
        }
      } else {
        x[0] = l[0] + l[3];
        x[1] = l[1] + l[2];
        l = [];
      }
      // Converting list to string to show it to the output...
      y = "";
      if (x.length == 0) {
        for (let i = 0; i < l.length; i++) {
          y += l[i];
        }
      } else {
        for (let i = 0; i < x.length; i++) {
          y += x[i];
        }
      }
      // Showing results to ther user...
      document.getElementById("big").innerText = `${y}%`;
      document.getElementById("p").innerText = `${n1} loves ${n2} ${y}%`;
    } else {
      // runs only if l is empty list...
      if (x.length == 3) {
        x[0] = x[0] + x[2];
        x.splice(2, 1);
        for (let i = 0; i < 1; i++) {
          if (x[i] > 9) {
            let a = String(x[i]);
            x.splice(i, i + 1);
            x.splice(i, 0, a.charAt(0), a.charAt(1));
            x = x.map(Number);
            l[0] = x[0] + x[2];
            l[1] = x[1];
            x = [];
          }
        }
      } else {
        l[0] = x[0] + x[3];
        l[1] = x[1] + x[2];
        x = [];
      }
      // Converting list to string to show it to the output...
      y = "";
      if (x.length == 0) {
        for (let i = 0; i < l.length; i++) {
          y += l[i];
        }
      } else {
        for (let i = 0; i < x.length; i++) {
          y += x[i];
        }
      }
      // Showing results to ther user...
      document.getElementById("big").innerText = `${y}%`;
      document.getElementById("p").innerText = `${n1} loves ${n2} ${y}%`;
    }

    dia.showModal();
  } else {
    // Runs if the list characters are 2 and show the results
    if (x.length == 0) {
      y = "";
      for (let i = 0; i < l.length; i++) {
        y += l[i];
      }
      document.getElementById("big").innerText = `${y}%`;
      document.getElementById("p").innerText = `${n1} loves ${n2} ${y}%`;
    } else {
      y = "";
      for (let i = 0; i < x.length; i++) {
        y += x[i];
      }
      document.getElementById("big").innerText = `${y}%`;
      document.getElementById("p").innerText = `${n1} loves ${n2} ${y}%`;
    }

    dia.showModal();
  }

  //Close dialog when pressed the button
  close.addEventListener("click", () => {
    dia.close();
  });
});
