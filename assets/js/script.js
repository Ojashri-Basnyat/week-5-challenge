var currentHour = parseInt((moment().format('HH')));

function removeQuotes(text) {
    if (text !== null) {
        while (text.slice(0,1) == '\"') {
            text = text.substring(1);
        }
        while (text.slice(-1) == '\"') {
            text = text.slice(0,-1);
        }
        return text;
    }
}

// Displays current time //
$('#current-time').text(moment().format('MMMM Do YYYY'));

// Local Storage loader // 
for (let i = 0; i < 24; i++) {
    $('.text-input').eq(i).val(removeQuotes(localStorage.getItem(JSON.stringify(i))));
}

// Local Storage saver //
for (let i = 0; i < 24; i++) {
    $('.save').eq(i).click(function () {
        localStorage.setItem(JSON.stringify(i), JSON.stringify($('.text-input').eq(i).val()));
    })
}

// Saving all in Local Storage //
$('#save').click(function () {
    for (let i = 0; i < 24; i++) {
        localStorage.setItem(JSON.stringify(i), JSON.stringify($('.text-input').eq(i).val()));
    }
})

// Resetting all in Local Storage //
$('#reset').click(function () {
    localStorage.clear();
    for (let i = 0; i < 24; i++) {
        $('.text-input').eq(i).val('');
    }
})

// Changing colors in the text-input section //
if (currentHour >= 8 && currentHour <= 17) {
    for (i = 0; i < currentHour - 8; i++) {
        $('.planner-section').eq(i).css('background-color', 'grey');
    }
    $('.planner-section').eq(currentHour - 9).css('background-color', 'red')
} else if (currentHour > 17) {
    for (i = 0; i < currentHour - 8; i++) {
        $('.planner-section').eq(i).css('background-color', 'grey');
    }
}
