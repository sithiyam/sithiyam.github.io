function cancelFullScreen(el) {
    var requestMethod = el.cancelFullScreen || el.webkitCancelFullScreen || el.mozCancelFullScreen || el.exitFullscreen;
    if (requestMethod) { // cancel full screen.
        requestMethod.call(el);
    } else if (typeof window.ActiveXObject !== "undefined") { // Older IE.
        var wscript = new ActiveXObject("WScript.Shell");
        if (wscript !== null) {
            wscript.SendKeys("{F11}");
        }
    }
}

function requestFullScreen(el) {
    // Supports most browsers and their versions.
    var requestMethod = el.requestFullScreen || el.webkitRequestFullScreen || el.mozRequestFullScreen || el.msRequestFullscreen;

    if (requestMethod) { // Native full screen.
        requestMethod.call(el);
    } else if (typeof window.ActiveXObject !== "undefined") { // Older IE.
        var wscript = new ActiveXObject("WScript.Shell");
        if (wscript !== null) {
            wscript.SendKeys("{F11}");
        }
    }
    return false
}

function toggleFull() {
    var elem = document.body; // Make the body go full screen.
    var isInFullScreen = (document.fullScreenElement && document.fullScreenElement !== null) || (document.mozFullScreen || document.webkitIsFullScreen);

    if (isInFullScreen) {
        cancelFullScreen(document);
    } else {
        requestFullScreen(elem);
    }
    return false;
}

function openChat() {
    document.getElementById("chatBox").style.display = "block";
}

function closeChat() {
    document.getElementById("chatBox").style.display = "none";
}

function togleChat() {
    var isopen = document.getElementById("chatBox").style.display == "block";
    if (isopen) {
        closeChat();
    }
    else {
        openChat();
        initChatBox();
    }
}
window.ShowModal = async (id) => {
    $(id).modal('show');
    console.log("Show Modal");
}
window.HideModal = async (id) => {
    $(id).modal('hide');
    console.log("Show Modal");
}
window.ShowCollapse = async (id) => {
    $(id).collapse('show');
    console.log("Show Collapse " + id);
}

window.HideCollapse = async (id) => {
    $(id).collapse('hide');
    console.log("Hide Collapse " + id);
}
var zoom = 1;
var zoomStep = 0.1;

var Sid;
window.RegisterOnClickPos = async (id) => {
    var ele = document.getElementById(id);
    Sid = id;
    if (ele != null) {
        ele.onclick = Clicked;
        console.log("Registered OnClickPos " + id);
    }

}


var X = -1;
var Y = -1;
function Clicked(e) {
    console.log("clicked");
    var posX = $(this).position().left, posY = $(this).position().top;
    X = (e.pageX - posX);
    Y = (e.pageY - posY);
}

window.GetPosition = function () {
    if (X === -1) {
        return "N";
    }

    var r = X + ',' + Y;
    X = -1;
    Y = -1;
    return r;
};

window.ForceRelord = function () {
    location.reload(true);
};

window.animatethis = function (targetElement, speed) {
    var scrollWidth = $(targetElement).get(0).scrollWidth;
    var clientWidth = $(targetElement).get(0).clientWidth;
    $(targetElement).animate({ scrollLeft: scrollWidth - clientWidth },
        {
            duration: speed,
            complete: function () {
                $(targetElement).animate({ scrollLeft: 0 },
                    {
                        duration: speed,
                        complete: function () {
                            animatethis(targetElement, speed);
                        }
                    });
            }
        });
};

window.PlayTrack = async (id) => {
    var p = document.getElementById(id);
    if (p != null) {
        p.play();
    }
    console.log("play sound");
}