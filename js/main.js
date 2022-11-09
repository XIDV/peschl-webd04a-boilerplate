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
        menue.slideToggle();
        mnB.menShown = !mnB.menShown;
        resetButton();
    });
    
    
    setMenuVisibility();

    $(window).on('resize', () => {
        setMenuVisibility();
    });
});

