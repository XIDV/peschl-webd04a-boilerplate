// Execute when DOM is ready ...
$(function() {
    console.log('Ready');
    const menue = $('#pageNav');
    
    
    const mnB = {
        button: $('#mainNavButton'),
        topBar : $('#mnbBarTop'),
        middleBar : $('#mnbBarMiddle'),
        bottomBar : $('#mnbBarBottom'),
        menShown: false,
        
        
        /*  
            Aktivieren bei ausgelagerter Konfiguration des mainNavButton
            und Verwendung des Projekts auf einem Server.
        */ 
        //.....................................................................
        // config: undefined,
        // setConfig(data) {
        //     this.config = data;
        // },
        //.....................................................................

        
        /*
            Deaktivieren bei ausgelagerter Konfiguration des mainNavButton
            und Verwendung des Projekts auf einem Server.
        */
        //.....................................................................
        config: {
            default: {
                topBar: {
                    'top': '-.35rem'    
                },
                middleBar: {
                    'transform': 'translate(-50%, -50%) rotate(0deg)'
                },
                bottomBar: {
                    'top': '.6rem'    
                }
            },
            closedover: {
                topBar: {
                    'top': '0',
                    'left': '0',
                    'transform': 'rotate(90deg)'
                },
                bottomBar: {
                    'top': '.125rem'
                }
            },
            leave: {
                topBar: {
                    'transform': 'translateY(-50%) rotate(0deg)',
                    'top': '-.35rem'
                },
                bottomBar: {
                    'top': '.6rem'
                }
            },
            openmenu: {
                middleBar: {
                    'transform': 'translate(-50%, -50%) rotate(45deg)'
                }
            },
            closemenu: {
                middleBar: {
                    'transform': 'translate(-50%, -50%) rotate(0deg)'
                }
            }
        },
        //.....................................................................

        setMenuButton(status = 'default') {
            const selection = this.config[status];
            for(configuration in selection) {
                this[configuration].css(selection[configuration])
            }
        }
    }

    
    /*  
        Aktivieren bei ausgelagerter Konfiguration des mainNavButton
        und Verwendung des Projekts auf einem Server.
        Ajax-Abfrage der und Initialisierung der config-Property des mnB-Objekt
    */
    //.........................................................................
    // $.getJSON('/js/mainNavButtonConfig.json',
    //     (data, textStatus, jqXHRObject) => {
    //         mnB.setConfig(data);
    //     });
    //.........................................................................
    
    
    /*
        Zeitliche Verzögerung bei initialem Aufruf von setMenuButton() bei
        Ajax-Anfrage erforderlich.
    */
    setTimeout(() => {
        mnB.setMenuButton();
    }, 50);

    mnB.button.on('mouseover', () => {
        mnB.setMenuButton('closedover');
    });

    $('#mainNavButton').on('mouseleave', () => {
        mnB.setMenuButton('leave');  
    });

    $('#mainNavButton').on('click', () => {
        menue.slideToggle();
        mnB.menShown = !mnB.menShown;
        mnB.menShown ? mnB.setMenuButton('openmenu') : mnB.setMenuButton('closemenu');
    });

    function setMenuVisibility() {
        if($(window).width() < 1000) {
            menue.hide();
            mnB.button.css({ 'display': 'block'})
            if(mnB.menShown) {
                resetButton();
                mnB.menShown = !mnB.menShown;
            }
        } else {
            mnB.button.css({ 'display': 'none'})
            menue.show();
        }
    }

    function resetButton() {
        mnB.setMenuButton('leave');
        mnB.setMenuButton('default');
    }

    $('.mainNavLink').on('click', () => {
        if($(window).width() < 1000) {
            menue.slideToggle();
            mnB.menShown = !mnB.menShown;
            resetButton();
        }
    });
    
    
    setMenuVisibility();

    $(window).on('resize', () => {
        setMenuVisibility();
    });


    //  =======================================================================
    //  fancy canvas stuff
    initMyNameCanvas();
});

function initMyNameCanvas() {
    const myNameCanvas = $('#myName');
    const ctx = myNameCanvas[0].getContext('2d');

    ctx.strokeStyle = 'black';
    ctx.lineWidth = 2;
    ctx.lineCap = "round";
    ctx.translate(20, 20);

    const cmdStack = getCmdStack('Sebastian Seb Peschl');
    
    for(let i = 0; i < cmdStack.length; i++) {
        if(cmdStack[i].length) {
            drawLetter(ctx, cmdStack[i]);
        } else {
            ctx[cmdStack[i].cmd](cmdStack[i].param.x,cmdStack[i].param.y);
        }
    }

}

// schreibe einen Buchstaben auf den Canvas
function drawLetter(ctx, letter) {
    ctx.beginPath();
    for(i = 0; i < letter.length; i++) {
        const cmd = letter[i].cmd
        const param = letter[i].param
        if(cmd == 'moveTo' || cmd == 'lineTo') {
            ctx[cmd](param.x, param.y);
        } else if(cmd == 'arc') {
            ctx[cmd](param.x, param.y, param.rad, param.start, param.end, param.dir);
        } else {
            console.log('Unknown cmd');
        }
    }
    ctx.stroke();
    ctx.closePath();
}

// erforderliche Buchstaben als moveTo-, lineTo- und arc-Anweisungen (könnte auch in json ausgelagert werden)
const letters = {
    S: [
        { cmd: "moveTo", param: { x: 14, y: 7 }},
        { cmd: "arc", param: {x: 7, y: 7, rad: 7, start: 0, end: Math.PI * .5, dir: true}},
        { cmd: "moveTo", param: { x: 0, y: 21 }},
        { cmd: "arc", param: {x: 7, y: 21, rad: 7, start: Math.PI * 1, end: Math.PI * -.5, dir: true}},
    ],
    s: [
        { cmd: "moveTo", param: { x: 8, y: 16 }},
        { cmd: "arc", param: {x: 4, y: 16, rad: 4, start: 0, end: Math.PI * .5, dir: true}},
        { cmd: "moveTo", param: { x: 0, y: 24 }},
        { cmd: "arc", param: {x: 4, y: 24, rad: 4, start: Math.PI * 1, end: Math.PI * -.5, dir: true}},
    ],
    P: [
        { cmd: 'moveTo', param: { x: 0, y: 0 } },
        { cmd: 'lineTo', param: { x: 0 , y: 28 } },
        { cmd: 'moveTo', param: { x: 0, y: 0 } },
        { cmd: 'lineTo', param: { x: 5, y: 0 } },
        { cmd: "arc", param: {x: 5, y: 7, rad: 7, start: Math.PI * -.5, end: Math.PI * .5, dir: false}},
        { cmd: 'lineTo', param: { x: 0, y: 14 } },
    ],
    e: [
        { cmd: 'moveTo', param: { x: 0, y: 21 } },
        { cmd: 'lineTo', param: { x: 14 , y: 21 } },
        { cmd: "arc", param: {x: 7, y: 21, rad: 7, start: 0, end: Math.PI * .25, dir: true}},
    ],
    a: [
        { cmd: 'moveTo', param: { x: 10, y: 14 } },
        { cmd: 'lineTo', param: { x: 10 , y: 28 } },
        { cmd: 'moveTo', param: { x: 10, y: 25 } },
        { cmd: "arc", param: {x: 7, y: 21, rad: 7, start: Math.PI * .4, end: Math.PI * 1.6, dir: false}},
    ],
    b: [
        { cmd: 'moveTo', param: { x: 0, y: 0 } },
        { cmd: 'lineTo', param: { x: 0, y: 28 } },
        { cmd: 'lineTo', param: { x: 5, y: 28 } },
        { cmd: "arc", param: {x: 5, y: 21, rad: 7, start: Math.PI * .5, end: Math.PI * 1.5, dir: true}},
        { cmd: 'lineTo', param: { x: 0, y: 14 } },
    ],
    t: [
        { cmd: 'moveTo', param: { x: 0, y: 8 } },
        { cmd: 'lineTo', param: { x: 9, y: 8 } },
        { cmd: 'moveTo', param: { x: 3, y: 0 } },
        { cmd: 'lineTo', param: { x: 3, y: 25 } },
        { cmd: "arc", param: {x: 6, y: 25, rad: 3, start: Math.PI * 1, end: Math.PI * 0, dir: true}},
    ],
    n: [
        { cmd: 'moveTo', param: { x: 0, y: 14 } },
        { cmd: 'lineTo', param: { x: 0, y: 28 } },
        { cmd: 'moveTo', param: { x: 0, y: 18 } },
        { cmd: "arc", param: {x: 4, y: 18, rad: 4, start: Math.PI * 1, end: Math.PI * 0, dir: false}},
        { cmd: 'lineTo', param: { x: 8, y: 28 } },
    ],
    c: [
        { cmd: 'moveTo', param: { x: 9, y: 14 } },
        { cmd: 'lineTo', param: { x: 7, y: 14 } },
        { cmd: "arc", param: {x: 7, y: 21, rad: 7, start: Math.PI * 1.5, end: Math.PI * .5, dir: true}},
        { cmd: 'lineTo', param: { x: 9, y: 28 } },
    ],
    h: [
        { cmd: 'moveTo', param: { x: 0, y: 0 } },
        { cmd: 'lineTo', param: { x: 0, y: 28 } },
        { cmd: 'moveTo', param: { x: 0, y: 18 } },
        { cmd: "arc", param: {x: 4, y: 18, rad: 4, start: Math.PI * 1, end: Math.PI * 1.5, dir: false}},
        { cmd: 'lineTo', param: { x: 6, y: 14 } },
        { cmd: "arc", param: {x: 6, y: 18, rad: 4, start: Math.PI * 1.5, end: Math.PI * 0, dir: false}},
        { cmd: 'lineTo', param: { x: 10, y: 28 } },
    ],
    l: [
        { cmd: 'moveTo', param: { x: 0, y: 0 } },
        { cmd: 'lineTo', param: { x: 0, y: 28 } },
    ],
    i: [
        { cmd: 'moveTo', param: { x: 1, y: 14 } },
        { cmd: 'lineTo', param: { x: 1, y: 28 } },
        { cmd: 'moveTo', param: { x: 2, y: 8 } },
        { cmd: "arc", param: {x: 1, y: 8, rad: 1, start: 0, end: Math.PI * 2}}
    ]
}

// generiere ein Array mit der erforderlichen Komandoabfolge
function getCmdStack(nameString) {
    const stringBreaks = getStringBreaks(nameString);
    
    let substrings = [];
    if(stringBreaks.length != 0) {
        for(let i = 0; i < stringBreaks.length; i++) {
            substrings.push(nameString.substring(stringBreaks[i], stringBreaks[i+1] || nameString.length));
        }
    }

    let cmdStack = [];

    for(let i = 0; i < substrings.length; i++) {
        let writtenLetter = 0;
        for(let j = 0; j < substrings[i].length; j++) {
            if(letters[substrings[i][j]]) {
                cmdStack.push(letters[substrings[i][j]]);
                writtenLetter++;
                cmdStack.push({ cmd: 'translate', param: { x: 20, y: 0 } });
            }
        }
        cmdStack.push({ cmd: 'translate', param: { x: -(writtenLetter * 20), y: 35 } });
    }
    return cmdStack;
}

// lokalisiere alle Leerstellen im String und geben Array mit den Indices zurück
function getStringBreaks(someString) {
    let breakIndices = [0];
    for(let i = 0; i < someString.length; i++) {
        if(someString[i] == ' ') {
            breakIndices.push(i);
        }
    }
    return breakIndices;
}