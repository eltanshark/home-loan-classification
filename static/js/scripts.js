function updateMaritalStatus() {
    // Get element form Married_Yes
    var marriedYesForm = document.getElementById('Married_Yes');
    // Get element form hidden Married_No
    var marriedNoForm = document.getElementById('Married_No');

    // Memperbarui nilai pada Married_No berdasarkan nilai Married_Yes
    // Update value on `Married_No` depends on `Married_Yes` value
    if (marriedYesForm.value === '1') {
    marriedNoForm.value = '0';
    } else if (marriedYesForm.value === '0'){
    marriedNoForm.value ='1';
    }   else
    marriedNoForm.value = '';  // null if != 1 || 0
    }

function updateGender(){
    var genderMaleForm = document.getElementById('Gender_Male');
    var genderFemaleForm = document.getElementById('Gender_Female');

    if (genderMaleForm.value === '1'){
        genderFemaleForm.value = '0';
    } else if (genderMaleForm.value === '0'){
        genderFemaleForm.value = '1';
    } else 
    genderMaleForm.value ='';
}