var colorss;
var colorte;
var textoss;

//set global variable for start/stop
var toogle = context.get('toogle') || "false";

if (toogle == true){
    toogle = false;
    colorss = "#ff0000";
    colorte = "#ececec";
    textoss = "STOP";
}
else {
    toogle = true;
    colorss = "#00ff00";
    colorte = "#ff9800";
    textoss = "START";
}
context.set('toogle', toogle);

msg.payload = [
    {
        "command": "set_style",
        "selector": "#path3951",
        "attributeName": "fill",
        "attributeValue": colorss
    },
    {
        "command": "update_text",
        "selector": "#tspan2836-7",
        "textContent": textoss
    },
    {
        "command": "set_style",
        "selector": "#rect2988",
        "attributeName": "fill",
        "attributeValue": colorte
    },
    {
        "command": "update_text",
        "selector": "#tspan2836",
        "textContent": "30"
    }
    ];

return msg;
