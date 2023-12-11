function openTab(e, tabName, display) {
    let i;
    let tabcontent;
    let tablinks;

    tabcontent = document.getElementsByClassName("tabcontent");
    for(i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active active-button", "");
    }
    document.getElementById(tabName).style.display = display;
    e.currentTarget.className += " active active-button";
}