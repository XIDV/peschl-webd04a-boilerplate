// Execute when DOM is ready ...
$(function() {
    console.log('Ready');
    
    const menue = $('#pageNav');
    menue.hide();
    
    const mnB = {
        button: $('#mainNavButton'),
        topBar : $('#mnbBarTop'),
        middleBar : $('#mnbBarMiddle'),
        bottomBar : $('#mnbBarBottom'),
        menShown: false,
        
        config: {
            default: {
                topBar: {
                    'top': '-.35rem'    
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

        setMenuButton(status = 'default') {
            const selection = this.config[status];
            for(configuration in selection) {
                this[configuration].css(selection[configuration])
            }
        }
    }

    mnB.setMenuButton();

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
});

