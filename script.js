let count = 0;

function clickMenu() {
    count++;
    if(count == 1)
    {
        document.getElementById('menu').style.display = 'block';
        document.getElementById('maskBody').style.backgroundColor = 'rgba(8, 7, 23, 0.427)';
        document.getElementById('maskBody').style.zIndex = '3';
        document.getElementById('iconMenu').style.position = 'fixed';
        document.getElementById('iconMenu').style.backgroundImage = "url('assets/images/icon-menu-close.svg')";
        document.getElementById('menu').style.position = 'fixed';
        count = -1;
    }
    else {
        document.getElementById('menu').style.display = 'none';
        count = 0;
        document.getElementById('maskBody').style.backgroundColor = 'white';
        document.getElementById('maskBody').style.zIndex = '0';
        document.getElementById('iconMenu').style.position = 'absolute';
        document.getElementById('iconMenu').style.backgroundImage = "url('assets/images/icon-menu.svg')";

    }
    
}