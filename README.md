# Simil SCADA con Node-RED

Sistema simil SCADA experimental con Node-RED

Basado en el trabajo "Tutorial SVG Node (SCADA-Like) Machine Monitoring System Node-Red" de Yaser Ali Husen (www.lean-tool.com).

Dependencias:

Node-RED
https://nodered.org/

node-red-contrib-ui-svg
https://flows.nodered.org/node/node-red-contrib-ui-svg

Créditos:
	
Krupp-Renn process diagram.svg
https://commons.wikimedia.org/wiki/File:Krupp-Renn_Process_diagram.svg

Nodo "function 1"

```javascript
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
```

nodo "function 2"

```javascript
msg.payload = [
    {
        "command": "update_text",
        "selector": "#tspan2836",
        "textContent": msg.payload
    }
    ];

return msg;
```

nodo "function 3"

```javascript
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
```

## RECURSOS

- [Node Red: Machine Monitoring System SCADA-Like](https://www.youtube.com/watch?v=8d3fbDEnuFo)
- [A Node-RED node to host a local DrawSvg service](https://flows.nodered.org/node/node-red-contrib-drawsvg)
- [A Node-RED widget node to show interactive SVG (vector graphics) in the dashboard](https://flows.nodered.org/node/node-red-contrib-ui-svg)
- [Creating SCADA-Like User Interfaces For Node-RED](https://ricolsen1supervc.wordpress.com/2019/09/29/creating-scada-like-user-interfaces-for-node-red/)
- [Open Source HTML5 Synoptic Toolkit](https://scadavis.io)
- [Easily create data-driven web UI's for Node-RED using any (or no) front-end library](https://flows.nodered.org/node/node-red-contrib-uibuilder)

## Licencia

Este trabajo está protegido por la **Licencia MIT**. Puedes acceder a la versión original de la licencia (en inglés) a través del archivo [LICENSE](./LICENSE) o en línea en [The MIT License (MIT)](https://mit-license.org/). También proporcionamos una traducción no oficial desde [Wikipedia](https://es.m.wikipedia.org/wiki/Licencia_MIT#La_licencia):

Copyright (c) 2024 Lucas Martín Treser

Por la presente se concede permiso, libre de cargos, a cualquier persona que obtenga una copia de este software y de los archivos de documentación asociados (el "Software"), a utilizar el Software sin restricción, incluyendo sin limitación los derechos a usar, copiar, modificar, fusionar, publicar, distribuir, sublicenciar, y/o vender copias del Software, y a permitir a las personas a las que se les proporcione el Software a hacer lo mismo, sujeto a las siguientes condiciones:

El aviso de copyright anterior y este aviso de permiso se incluirán en todas las copias o partes sustanciales del Software.

EL SOFTWARE SE PROPORCIONA "COMO ESTÁ", SIN GARANTÍA DE NINGÚN TIPO, EXPRESA O IMPLÍCITA, INCLUYENDO PERO NO LIMITADO A GARANTÍAS DE COMERCIALIZACIÓN, IDONEIDAD PARA UN PROPÓSITO PARTICULAR E INCUMPLIMIENTO. EN NINGÚN CASO LOS AUTORES O PROPIETARIOS DE LOS DERECHOS DE AUTOR SERÁN RESPONSABLES DE NINGUNA RECLAMACIÓN, DAÑOS U OTRAS RESPONSABILIDADES, YA SEA EN UNA ACCIÓN DE CONTRATO, AGRAVIO O CUALQUIER OTRO MOTIVO, DERIVADAS DE, FUERA DE O EN CONEXIÓN CON EL SOFTWARE O SU USO U OTRO TIPO DE ACCIONES EN EL SOFTWARE.