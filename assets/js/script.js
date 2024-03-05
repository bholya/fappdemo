// Initialize the datepicker
$('.datepicker').datepicker({
    format: 'mm/dd/yyyy',
    autoclose: true
});

// Initialize the timepicker
$(document).ready(function () {
    $('#timepicker').timepicker({
        showMeridian: false,
        minuteStep: 1,
        defaultTime: '12:00 AM'
    });

    $('#toggle-btn').on('click', function () {
        $('#timepicker').timepicker('show');
    });
});


// Show/Hide Elemets
function toggleTechElements() {
    var techFields = document.querySelector('.section_names');
    if (techFields.style.display === 'none') {
        techFields.style.display = 'block';
    } else {
        techFields.style.display = 'none';
    }
}

// Show/Hide Tech. Fields
function toggleTechFields() {
    var techFields = document.querySelector('.techFields');
    if (techFields.style.display === 'none') {
        techFields.style.display = 'block';
    } else {
        techFields.style.display = 'none';
    }
}

// Show/Hide Tech. Fields for Short Text
function toggleTechFieldsShort() {
    var techFields = document.querySelector('.techFieldsShort');
    if (techFields.style.display === 'none') {
        techFields.style.display = 'block';
    } else {
        techFields.style.display = 'none';
    }
}

// Show/Hide Tech. Fields for long Text
function toggleTechFieldsLong() {
    var techFields = document.querySelector('.techFieldsLong');
    if (techFields.style.display === 'none') {
        techFields.style.display = 'block';
    } else {
        techFields.style.display = 'none';
    }
}

// Show/Hide Tech. Fields for Numbers
function toggleTechFieldsNumbers() {
    var techFields = document.querySelector('.techFieldsNumbers');
    if (techFields.style.display === 'none') {
        techFields.style.display = 'block';
    } else {
        techFields.style.display = 'none';
    }
}

// Show/Hide Tech. Fields for Date
function toggleTechFieldsDate() {
    var techFields = document.querySelector('.techFieldsDate');
    if (techFields.style.display === 'none') {
        techFields.style.display = 'block';
    } else {
        techFields.style.display = 'none';
    }
}

// Show/Hide Tech. Fields for Time
function toggleTechFieldsTime() {
    var techFields = document.querySelector('.techFieldsTime');
    if (techFields.style.display === 'none') {
        techFields.style.display = 'block';
    } else {
        techFields.style.display = 'none';
    }
}