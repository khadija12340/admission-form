// script.js

// This function allows only one gender checkbox to be selected at a time
function allowOnlyOneCheckbox(checkbox) {
    const checkboxes = document.getElementsByName("gender");

    checkboxes.forEach((item) => {
        if (item !== checkbox) item.checked = false;
    });

    // Optional safety check
    const selected = Array.from(checkboxes).filter(cb => cb.checked);
    if (selected.length > 1) {
        alert("Please select only one gender.");
        checkbox.checked = false;
    }
}
