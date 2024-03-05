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
    if (techFields.style.display === 'none' || techFields.style.display === '') {
        techFields.style.display = 'block';
    } else {
        techFields.style.display = 'none';
    }

    var imageElement = document.getElementById('myImage');

    // Check the current image source and toggle to the other image
    if (imageElement.src.endsWith('/assets/images/chevron-up.svg')) {
        imageElement.src = '/assets/images/chevron-down.svg';
    } else {
        imageElement.src = '/assets/images/chevron-up.svg';
    }
}

// Show/Hide Tech. Fields
function toggleTechFields() {
    var techFields = document.querySelector('.techFields');
    if (techFields.style.display === 'none' || techFields.style.display === '') {
        techFields.style.display = 'block';
    } else {
        techFields.style.display = 'none';
    }
}

// Show/Hide Tech. Fields for Short Text
function toggleTechFieldsShort() {
    var techFields = document.querySelector('.techFieldsShort');
    if (techFields.style.display === 'none' || techFields.style.display === '') {
        techFields.style.display = 'block';
    } else {
        techFields.style.display = 'none';
    }
}

// Show/Hide Tech. Fields for long Text
function toggleTechFieldsLong() {
    var techFields = document.querySelector('.techFieldsLong');
    if (techFields.style.display === 'none' || techFields.style.display === '') {
        techFields.style.display = 'block';
    } else {
        techFields.style.display = 'none';
    }
}

// Show/Hide Tech. Fields for Numbers
function toggleTechFieldsNumbers() {
    var techFields = document.querySelector('.techFieldsNumbers');
    if (techFields.style.display === 'none' || techFields.style.display === '') {
        techFields.style.display = 'block';
    } else {
        techFields.style.display = 'none';
    }
}

// Show/Hide Tech. Fields for Date
function toggleTechFieldsDate() {
    var techFields = document.querySelector('.techFieldsDate');
    if (techFields.style.display === 'none' || techFields.style.display === '') {
        techFields.style.display = 'block';
    } else {
        techFields.style.display = 'none';
    }
}

// Show/Hide Tech. Fields for Time
function toggleTechFieldsTime() {
    var techFields = document.querySelector('.techFieldsTime');
    if (techFields.style.display === 'none' || techFields.style.display === '') {
        techFields.style.display = 'block';
    } else {
        techFields.style.display = 'none';
    }
}

// Show/Hide Tech. Fields for Time
function toggleTechFieldsChoice() {
    var techFields = document.querySelector('.techFieldsChoice');
    if (techFields.style.display === 'none' || techFields.style.display === '') {
        techFields.style.display = 'block';
    } else {
        techFields.style.display = 'none';
    }
}

////// Add Values From Choice Value's Input
// function addValue() {
//     var inputValue = document.getElementById("inputValue").value;
//     var displayArea = document.getElementById("displayArea");

//     // Create a new div for the added value
//     var newAddedLabelDiv = document.createElement("div");
//     newAddedLabelDiv.classList.add("added_label");

//     // Create a new paragraph element for the value
//     var newValueElement = document.createElement("p");
//     newValueElement.classList.add("mb-0");
//     newValueElement.innerText = inputValue;

//     // Create img elements for edit and remove icons
//     var editImg = document.createElement("img");
//     editImg.src = "assets/images/edit-white.svg";
//     editImg.classList.add("img-fluid", "ms-1");
//     editImg.alt = "edit";

//     var removeImg = document.createElement("img");
//     removeImg.src = "assets/images/remove-white.svg";
//     removeImg.classList.add("img-fluid", "ms-1");
//     removeImg.alt = "remove";

//     // Append the value and img elements to the added label div
//     newAddedLabelDiv.appendChild(newValueElement);
//     newAddedLabelDiv.appendChild(editImg);
//     newAddedLabelDiv.appendChild(removeImg);

//     // Append the new added label div to the display area
//     displayArea.appendChild(newAddedLabelDiv);

//     // Show the display area if it was hidden
//     displayArea.classList.remove("added_label_main");

//     // Clear the input field for the next input
//     document.getElementById("inputValue").value = "";
// }




let editingLabelId = null;

document.getElementById('exampleModal').addEventListener('hidden.bs.modal', function () {
    // Clear the input field when the modal is hidden
    document.getElementById("inputValue").value = "";
});

function addOrUpdateValue() {
    var inputValue = document.getElementById("inputValue").value;
    var displayArea = document.getElementById("displayArea");

    if (editingLabelId) {
        // Update the existing value for the specified label ID
        var existingValueElement = document.getElementById(editingLabelId).querySelector('p');
        existingValueElement.innerText = inputValue;
        // Reset the editingLabelId
        editingLabelId = null;
    } else {
        // Create a unique ID for the added label
        var labelId = 'label_' + new Date().getTime();

        // Create a new div for the added value
        var newAddedLabelDiv = document.createElement("div");
        newAddedLabelDiv.id = labelId;
        newAddedLabelDiv.classList.add("added_label");

        // Create a new paragraph element for the value
        var newValueElement = document.createElement("p");
        newValueElement.classList.add("mb-0");
        newValueElement.innerText = inputValue;

        // Create img elements for edit and remove icons
        var editImg = document.createElement("img");
        editImg.src = "assets/images/edit-white.svg";
        editImg.classList.add("img-fluid", "ms-1");
        editImg.alt = "edit";
        editImg.setAttribute("data-bs-toggle", "modal");
        editImg.setAttribute("data-bs-target", "#exampleModal");

        var removeImg = document.createElement("img");
        removeImg.src = "assets/images/remove-white.svg";
        removeImg.classList.add("img-fluid", "ms-1");
        removeImg.alt = "remove";

        // Event listener for the editImg
        editImg.addEventListener('click', function () {
            // Set the editingLabelId before opening the modal
            editingLabelId = labelId;
            openModalForEdit();
        });

        // Event listener for the removeImg
        removeImg.addEventListener('click', function () {
            // Remove the field
            displayArea.removeChild(newAddedLabelDiv);
        });

        // Append the value and img elements to the added label div
        newAddedLabelDiv.appendChild(newValueElement);
        newAddedLabelDiv.appendChild(editImg);
        newAddedLabelDiv.appendChild(removeImg);

        // Append the new added label div to the display area
        displayArea.appendChild(newAddedLabelDiv);
    }

    // Manually hide the modal
    $('#exampleModal').modal('hide');

    // Show the display area if it was hidden
    displayArea.classList.remove("added_label_main");
}

function openModalForEdit() {
    // Set the modal values for editing
    var editingValue = document.getElementById(editingLabelId).querySelector('p').innerText;
    document.getElementById("inputValue").value = editingValue;
}