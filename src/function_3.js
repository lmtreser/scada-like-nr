var flecha1;
var flecha2;
var flecha3;
var flechacc;

//set global variable for animar
var estado = context.get('animar') || 0;

switch (estado){
    case 0:
        flecha1 = "inline";
        flecha2 = "none";
        flecha3 = "none";
        flechacc = "#ffdd55";
        estado = 1;
    break;

    case 1:
        flecha1 = "none";
        flecha2 = "inline";
        flecha3 = "none";
        flechacc = "#666666";
        estado = 2;
    break;

    case 2:
        flecha1 = "none";
        flecha2 = "none";
        flecha3 = "inline";
        flechacc = "#d45500";
        estado = 0;
    break;
}
context.set('animar', estado);

msg.payload = [
    {
        "command": "set_style",
        "selector": "#path5806",
        "attributeName": "display",
        "attributeValue": flecha1
    },
    {
        "command": "set_style",
        "selector": "#path5806-5",
        "attributeName": "display",
        "attributeValue": flecha2
    },
    {
        "command": "set_style",
        "selector": "#path5806-6",
        "attributeName": "display",
        "attributeValue": flecha3
    },
    {
        "command": "set_style",
        "selector": "#path4577-3-4-7-1",
        "attributeName": "stroke",
        "attributeValue": flechacc
    }
    ];

return msg;
