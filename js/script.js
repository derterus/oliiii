 function ActiveCloseclick() {
 let x = document.getElementById('hidden-element-active');
      if (x.style.display == "none"){
   x.style.display = "block";
   } else {
 x.style.display = "none"}
    };

    function ModerateCloseclick() {
      let x = document.getElementById('hidden-element-moderate');
           if (x.style.display == "none"){
        x.style.display = "block";
        } else {
      x.style.display = "none"}
         };

         function FoundCloseclick() {
          let x = document.getElementById('hidden-element-found');
               if (x.style.display == "none"){
            x.style.display = "block";
            } else {
          x.style.display = "none"}
             };

             function ArchiveCloseclick() {
              let x = document.getElementById('hidden-element-archive');
                   if (x.style.display == "none"){
                x.style.display = "block";
                } else {
              x.style.display = "none"}
                 };


document.getElementById('inputImage').addEventListener('change',function(){
   var files = this.files;
   if(files.length>3){
      alert('c');
      this.value='';
   }
   else{
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
