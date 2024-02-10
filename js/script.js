function ActiveCloseclick() {
   let x = document.getElementById('hidden-element-active');
   if (x.style.display == "none") {
      x.style.display = "block";
   } else {
      x.style.display = "none"
   }
};

function ModerateCloseclick() {
   let x = document.getElementById('hidden-element-moderate');
   if (x.style.display == "none") {
      x.style.display = "block";
   } else {
      x.style.display = "none"
   }
};

function FoundCloseclick() {
   let x = document.getElementById('hidden-element-found');
   if (x.style.display == "none") {
      x.style.display = "block";
   } else {
      x.style.display = "none"
   }
};

function ArchiveCloseclick() {
   let x = document.getElementById('hidden-element-archive');
   if (x.style.display == "none") {
      x.style.display = "block";
   } else {
      x.style.display = "none"
   }
};


function ActiveCloseclickAdmin() {
   let x = document.getElementById('hidden-element-active-admin');
   if (x.style.display == "none") {
      x.style.display = "block";
   } else {
      x.style.display = "none"
   }
};

function ModerateCloseclickAdmin() {
   let x = document.getElementById('hidden-element-moderate-admin');
   if (x.style.display == "none") {
      x.style.display = "block";
   } else {
      x.style.display = "none"
   }
};

function FoundCloseclickAdmin() {
   let x = document.getElementById('hidden-element-found-admin');
   if (x.style.display == "none") {
      x.style.display = "block";
   } else {
      x.style.display = "none"
   }
};

function ArchiveCloseclickAdmin() {
   let x = document.getElementById('hidden-element-archive-admin');
   if (x.style.display == "none") {
      x.style.display = "block";
   } else {
      x.style.display = "none"
   }
};

document.getElementById('inputImage').addEventListener('change', function () {
   var files = this.files;
   if (files.length > 3) {
      alert('c');
      this.value = '';
   }
   else {
      var as = document.getElementsByClassName('input-file-text');
      let file = this.files[0];
      as.value = file.value;
   }

});
function auth3() {
   localStorage.setItem('isLoggedIn', 'false');
   localStorage.setItem('login', '');
   window.location.href = "signIN.html";
}
function liveSearch() {
var countries = ["Кошка", "Собака", "Хорёк", "Попугай", "Хомяк", "Кролик", "Рыбка", "Черепаха", "Морская свинка", "Канарейка", "Удав", "Игуана", "Таракан", "Паук", "Шиншилла", "Крыса", "Мышь", "Летучая мышь", "Еж"];

  var input = document.getElementById("searchInput");
  var filter = input.value.toUpperCase();
  var div = document.getElementById("searchDropdown");
  div.innerHTML = "";
  for (i = 0; i < countries.length; i++) {
    if (countries[i].toUpperCase().indexOf(filter) > -1) {
      div.innerHTML += "<div>" + countries[i] + "</div>";
    }
  }
  if (div.innerHTML === "") {
    div.style.display = "none";
  } else {
    div.style.display = "block";
  }
}

document.getElementById("searchInput").addEventListener("focus", function() {
  document.getElementById("searchDropdown").style.display = "block";
});

document.getElementById("searchInput").addEventListener("blur", function() {
  setTimeout(function() {
    document.getElementById("searchDropdown").style.display = "none";
  }, 200);
});