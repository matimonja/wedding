const chk_juli = document.getElementById("check-juli");
const chk_mati = document.getElementById("check-mati");
const his_juli = document.getElementById("hist-juli");
const his_mati = document.getElementById("hist-mati");

chk_juli.addEventListener('change', function() {
    if (this.checked) {
      chk_mati.checked = false;
      his_juli.classList.remove("hide");
      his_mati.classList.add('hide');
    } else {
        chk_mati.checked = true;
        his_juli.classList.add("hide");
        his_mati.classList.remove('hide');
    }
});

chk_mati.addEventListener('change', function() {
    if (this.checked) {
      chk_juli.checked = false;
      his_juli.classList.add("hide");
      his_mati.classList.remove('hide');
    } else {
        chk_juli.checked = true;
        his_juli.classList.remove("hide");
        his_mati.classList.add('hide');
    }
});

chk_juli.checked = true;
chk_mati.checked = false;