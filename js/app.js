const progress = (progressCircle, value, triggerElement) => {

    var circle = new ProgressBar.Circle(progressCircle, {
        trailColor: '#000000',
        // This has to be the same size as the maximum width to
        // prevent clipping
        strokeWidth: 10,
        trailWidth: 1,
        easing: 'easeInOut',
        duration: 1400,
        text: {
            autoStyleContainer: false
        },
        svgStyle: {
            strokeLinecap: 'round'
        },
        from: {
            color: '#006400',
            width: 4
        },
        to: {
            color: '#006400',
            width: 4
        },
        // Set default step function for all animate calls
        step: function (state, circle) {
            circle.path.setAttribute('stroke', state.color);
            circle.path.setAttribute('stroke-width', state.width);

            var value = Math.round(circle.value() * 100);
            if (value === 0) {
                circle.setText('');
            } else {
                circle.setText(`${value}%`);
            }

        }
    });
    circle.text.style.fontFamily = '"Montserrat", sans-serif';
    circle.text.style.fontSize = '5rem';
    circle.text.style.fontWeight = '600';

    $(triggerElement).waypoint(function () {
        circle.animate(value);          // Number from 0.0 to 1.0 
    }, { offset: '100%' });
}

progress(progressCircle1, 0.10, '#page2 .row1');
progress(progressCircle2, 0.20, '#page2 .row1');
progress(progressCircle3, 0.30, '#page2 .row1');
progress(progressCircle4, 0.40, '#page2 .row1');
progress(progressCircle5, 0.50, '#page2 .row1');
progress(progressCircle6, 0.60, '#page2 .row2');
progress(progressCircle7, 0.70, '#page2 .row2');
progress(progressCircle8, 0.80, '#page2 .row2');
progress(progressCircle9, 0.90, '#page2 .row2');
progress(progressCircle10, 1.00, '#page2 .row2');