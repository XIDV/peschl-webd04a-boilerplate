// Execute when DOM is ready ...
$(function() {
    console.log('Ready');
    const menue = $('#mainNav');
    menue.hide();
    
    const button = {
        topBar : $('#mnbBarTop'),
        middleBar : $('#mnbBarMiddle'),
        bottomBar : $('#mnbBarBottom')
    }

    function setMenueButton() {
        button.topBar.css({
            'top': '-.35rem',
        });
        button.bottomBar.css({
            'top': '.6rem',
        })
    }

    setMenueButton();
    
    $('#mainNavButton').on('mouseover', () => {
        button.topBar.css({
            'top': '0',
            'left': '0',
            'transform': 'rotate(90deg)'
        });
        
        button.middleBar.css({
            
        });

        button.bottomBar.css({
            'top': '.125rem',
        });  
    });

    $('#mainNavButton').on('mouseleave', () => {
        button.topBar.css({
            'transform': 'translateY(-50%) rotate(0deg)',
            'top': '-.35rem'
        });
        
        button.middleBar.css({
            
        });

        button.bottomBar.css({
            'top': '.6rem'
        });  
    });

    let menShown = false;
    $('#mainNavButton').on('click', () => {
        menue.slideToggle();
        menShown = !menShown;
        if(menShown) {
            button.middleBar.css({
                'transform': 'translate(-50%, -50%) rotate(45deg)'
            });
        } else {
            button.middleBar.css({
                'transform': 'translate(-50%, -50%) rotate(0deg)'
            });
        }
    });
});