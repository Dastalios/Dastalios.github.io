/* toggle between adding and removing the "responsive" class to topnav when user clicks the icon */
function topnavToggle() {
    var x = document.getElementById("myTopnav");
    if(x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

/*Set width of sidebar to 250px and lef margin of page content to 250px */
function openSidebar() {
    var scrWidth = window.innerWidth;
    if(scrWidth > 600) {
    document.getElementById("mySidebar").style.width = "250px";
    /*document.getElementById("main").style.marginLeft = "250px"; */
    } else {
        document.getElementById("mySidebar").style.width = "100%";
    }
}

/*Set width of sidebar to 0px and lef margin of page content to 0px */
function closeSidebar() {
    document.getElementById("mySidebar").style.width = "0px";
    document.getElementById("main").style.marginLeft = "0px";
}

/* testing function of loading docs - Works, but only when server is simulated */
function loadDoc(x) {
    var url = x;
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
       document.getElementById("demo").innerHTML = this.responseText;
      }
    };
    xhttp.open("GET", url, true);
    xhttp.send();
}
