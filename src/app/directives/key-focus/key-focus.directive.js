import angular from 'angular';

export const keyFocus = () => {
    const keyCodes = {
        ARROW_UP: 38,
        ARROW_DOWN: 40
    };

    const link = (scope, elem, attrs) => {
        elem.bind('keyup', handleKeyUp.bind(this, scope, elem));
    }

    const handleKeyUp = (scope, elem, e) => {
        if (e.keyCode == keyCodes.ARROW_UP) {
            if (!scope.$first) {
                elem[0].previousElementSibling.focus();
            }
        } else if (e.keyCode == keyCodes.ARROW_DOWN) {
            if (!scope.$last) {
                elem[0].nextElementSibling.focus();
            }
        }
    };

    return {
        restrict: 'A',
        link: link
    }
}

    
