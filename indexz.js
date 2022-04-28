var get = function (selector, scope) {
  scope = scope ? scope : document;
  return scope.querySelector(selector);
};

var getAll = function (selector, scope) {
  scope = scope ? scope : document;
  return scope.querySelectorAll(selector);
};

if (document.getElementsByClassName('demo').length > 0) {
  var i = 0;
  var txt = `sudo python3 main.py
            [Entry mode; press Ctrl+D to save and quit; press Ctrl+C to quit without saving]

            # error @ error 
            This Tool Created By Error
            Github  : https://github.com/TheSadError 
            Discord : err0r#4018
             
            [NIVOS] Welcome To NIVOS -NIVOS-
             
            [INFO] You Must Run This Tool By Super User Power.   

            [1]     Scan Devices In Your Network
            [2]     Scan Networks
            [3]     Try Crack Network With Mac [Adress Aircrack-ng]
            [4]     Scan Website [NMAP, WHOIS]
            [5]     DOS-DDOS
            [6]     Phone [Information Gathering , SMS Sender]
            [7]     Get Your Information [System INFO]
            [8]     Sniffing , Spoofing [Bettercap]
            [9]     IP [Information Gathering]
            [10]    Verify Gmail
            [11]    Port Scanner
            [12]    SQL Scan (WEBSITE)
            [13]    Discord Spammer
            [14]    Wordlist Generator
            [15]    Find Social Media Account With Username
            [16]    See index.html Source Of Website
            [17]    Creating Fake Wifi Acces Point For Phishing
             
            [MENU] Please Select Operation Number : 
            `;
  var speed = 60;

  function typeItOut () {
    if (i < txt.length) {
      document.getElementsByClassName('demo')[0].innerHTML += txt.charAt(i);
      i++;
      setTimeout(typeItOut, speed);
    }
  }

  setTimeout(typeItOut, 1800);
}

window.addEventListener("load", function() {
  var tabContainers = getAll(".tab__container");
  for (var i = 0; i < tabContainers.length; i++) {
    get('.tab__menu', tabContainers[i]).addEventListener("click", tabClick);
  }
  function tabClick (event) {
    var scope = event.currentTarget.parentNode;
    var clickedTab = event.target;
    var tabs = getAll('.tab', scope);
    var panes = getAll('.tab__pane', scope);
    var activePane = get(`.${clickedTab.getAttribute('data-tab')}`, scope);

    // remove all active tab classes
    for (var i = 0; i < tabs.length; i++) {
      tabs[i].classList.remove('active');
    }

    for (var i = 0; i < panes.length; i++) {
      panes[i].classList.remove('active');
    }

    clickedTab.classList.add('active');
    activePane.classList.add('active');
  }
});

var btns = getAll('.js-btn');
var sections = getAll('.js-section');

function setActiveLink(event) {
  for (var i = 0; i < btns.length; i++) {
    btns[i].classList.remove('selected');
  }

  event.target.classList.add('selected');
}

function smoothScrollTo(i, event) {
  var element = sections[i];
  setActiveLink(event);

  window.scrollTo({
    'behavior': 'smooth',
    'top': element.offsetTop - 20,
    'left': 0
  });
}

if (btns.length && sections.length > 0) {
  for (var i = 0; i<btns.length; i++) {
    btns[i].addEventListener('click', smoothScrollTo.bind(this,i));
  }
}

window.addEventListener('scroll', function () {
  var docNav = get('.doc__nav > ul');

  if( docNav) {
    if (window.pageYOffset > 63) {
      docNav.classList.add('fixed');
    } else {
      docNav.classList.remove('fixed');
    }
  }
});

var topNav = get('.menu');
var icon = get('.toggle');

window.addEventListener('load', function(){
  function showNav() {
    if (topNav.className === 'menu') {
      topNav.className += ' responsive';
      icon.className += ' open';
    } else {
      topNav.className = 'menu';
      icon.classList.remove('open');
    }
  }
  icon.addEventListener('click', showNav);
});

