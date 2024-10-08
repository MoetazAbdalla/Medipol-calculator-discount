    // Tuition fee data for each major (from the cleaned Excel data)
    const tuitionFees = {
        "International School of Medicine 100% English": {"listFee": 40000, "advanceFee": 36000},
        "School of Medicine 30% English & 70% Turkish": {"listFee": 30000, "advanceFee": 27000},
        "School of Dentistry 100% English": {"listFee": 32000, "advanceFee": 28800},
        "School of Dentistry 30% English 70% Turkish": {"listFee": 30000, "advanceFee": 27000},
        "School of Pharmacy 100% English": {"listFee": 18000, "advanceFee": 16200},
        "School of Pharmacy": {"listFee": 14000, "advanceFee": 12600},
        "School of Law 30% English 70% Turkish": {"listFee": 10000, "advanceFee": 9000},
        "Nursing 100% English": {"listFee": 7000, "advanceFee": 6300},
        "Nursing": {"listFee": 7000, "advanceFee": 6300},
        "Physiotherapy and Rehabilitation 100% English": {"listFee": 7000, "advanceFee": 6300},
        "Physiotherapy and Rehabilitation 100% Turkish": {"listFee": 7000, "advanceFee": 6300},
        "Nutrition and Dietetics": {"listFee": 5500, "advanceFee": 4950},
        "Health Management 100% English": {"listFee": 5500, "advanceFee": 4950},
        "Health Management": {"listFee": 5500, "advanceFee": 4950},
        "Audiology": {"listFee": 5500, "advanceFee": 4950},
        "Orthotics and Prosthetics": {"listFee": 5500, "advanceFee": 4950},
        "Child Development": {"listFee": 5500, "advanceFee": 4950},
        "Midwifery": {"listFee": 5500, "advanceFee": 4950},
        "Ergotherapy": {"listFee": 5500, "advanceFee": 4950},
        "Social Services": {"listFee": 5500, "advanceFee": 4950},
        "Speech and Language Therapy 100% English": {"listFee": 5500, "advanceFee": 4950},
        "Speech and Language Therapy": {"listFee": 5500, "advanceFee": 4950},
        "Electrical-Electronic Engineering 100% English": {"listFee": 6500, "advanceFee": 5850},
        "Biomedical Engineering 100% English": {"listFee": 7000, "advanceFee": 6300},
        "Industrial Engineering 100% English": {"listFee": 5500, "advanceFee": 4950},
        "Computer Engineering 100% English": {"listFee": 7000, "advanceFee": 6300},
        "Civil Engineering 100% English": {"listFee": 6500, "advanceFee": 5850},
        "Civil Engineering": {"listFee": 5000, "advanceFee": 4500},
        "Business Administration 100% English": {"listFee": 5500, "advanceFee": 4950},
        "Economics and Finance 100% English": {"listFee": 5500, "advanceFee": 4950},
        "International Trade and Finance 100% English": {"listFee": 5500, "advanceFee": 4950},
        "International Trade and Finance": {"listFee": 5500, "advanceFee": 4950},
        "Management Information Systems 100% English": {"listFee": 5500, "advanceFee": 4950},
        "Management Information Systems": {"listFee": 5500, "advanceFee": 4950},
        "Logistic Management 100% English": {"listFee": 5500, "advanceFee": 4950},
        "Logistic Management": {"listFee": 5500, "advanceFee": 4950},
        "Human Resources Management": {"listFee": 5500, "advanceFee": 4950},
        "Aviation Management": {"listFee": 5500, "advanceFee": 4950},
        "Banking and Insurance": {"listFee": 5500, "advanceFee": 4950},
        "Psychology 100% English": {"listFee": 5500, "advanceFee": 4950},
        "Psychology": {"listFee": 5500, "advanceFee": 4950},
        "Political Science and International Relations 100% English": {"listFee": 5500, "advanceFee": 4950},
        "Political Science and Public Administration 100% English": {"listFee": 5500, "advanceFee": 4950},
        "Political Science and Public Administration": {"listFee": 5500, "advanceFee": 4950},
        "Architecture 100% English": {"listFee": 5000, "advanceFee": 4500},
        "Architecture": {"listFee": 5000, "advanceFee": 4500},
        "Industrial Design": {"listFee": 5000, "advanceFee": 4500},
        "Interior Architecture and Environmental Design 100% English": {"listFee": 5000, "advanceFee": 4500},
        "Interior Architecture and Environmental Design": {"listFee": 5000, "advanceFee": 4500},
        "Visual Communication Design": {"listFee": 5000, "advanceFee": 4500},
        "Turkish Music Art": {"listFee": 5000, "advanceFee": 4500},
        "Gastronomy and Culinary Arts": {"listFee": 5000, "advanceFee": 4500},
        "Urban Design and Landscape Architecture": {"listFee": 5000, "advanceFee": 4500},
        "Psychological Counselling and Guidance 100% English": {"listFee": 5000, "advanceFee": 4500},
        "Psychological Counselling and Guidance": {"listFee": 5000, "advanceFee": 4500},
        "English Teaching 100% English": {"listFee": 5000, "advanceFee": 4500},
        "Primary Mathematics Teaching": {"listFee": 5000, "advanceFee": 4500},
        "Special Education Teaching": {"listFee": 5000, "advanceFee": 4500},
        "Preschool Teaching": {"listFee": 5000, "advanceFee": 4500},
        "Journalism": {"listFee": 5000, "advanceFee": 4500},
        "Public Relations and Advertising 100% English": {"listFee": 5000, "advanceFee": 4500},
        "Public Relations and Advertising": {"listFee": 5000, "advanceFee": 4500},
        "Media and Visual Arts": {"listFee": 5000, "advanceFee": 4500},
        "New Media and Communication Systems": {"listFee": 5000, "advanceFee": 4500},
        "Radio Television and Cinema": {"listFee": 5000, "advanceFee": 4500},
        "Nutrition and Dietetics": {"listFee": 5000, "advanceFee": 4500},
        "Child Development": {"listFee": 5000, "advanceFee": 4500},
        "Midwifery": {"listFee": 5000, "advanceFee": 4500},
        "Audiology": {"listFee": 5000, "advanceFee": 4500},
        "Social Services": {"listFee": 5000, "advanceFee": 4500},
        "Justice": {"listFee": 3500, "advanceFee": 2800},
        "Oral and Dental Health": {"listFee": 3500, "advanceFee": 3150},
        "Operating Room Services": {"listFee": 3500, "advanceFee": 3150},
        "Anesthesia 100% English": {"listFee": 4000, "advanceFee": 3600},
        "Anesthesia": {"listFee": 3500, "advanceFee": 3150},
        "Dental Prosthesis Technology": {"listFee": 4000, "advanceFee": 3600},
        "Dialysis": {"listFee": 3500, "advanceFee": 3150},
        "Pharmacy Services": {"listFee": 3500, "advanceFee": 3150},
        "Electroneurophysiology": {"listFee": 3500, "advanceFee": 3150},
        "Physiotherapy 100% English": {"listFee": 3500, "advanceFee": 3150},
        "Physiotherapy": {"listFee": 3500, "advanceFee": 3150},
        "First and Emergency Aid 100% English": {"listFee": 4000, "advanceFee": 3600},
        "First and Emergency Aid": {"listFee": 3500, "advanceFee": 3150},
        "Occupational Health and Safety": {"listFee": 3500, "advanceFee": 3150},
        "Audiometry": {"listFee": 3500, "advanceFee": 3150},
        "Opticianry": {"listFee": 3500, "advanceFee": 3150},
        "Pathology Laboratory Techniques": {"listFee": 3500, "advanceFee": 3150},
        "Radiotherapy": {"listFee": 3500, "advanceFee": 3150},
        "Management of Health Institutions": {"listFee": 3500, "advanceFee": 3150},
        "Medical Documentation and Secretary": {"listFee": 3500, "advanceFee": 3150},
        "Medical Imaging Techniques": {"listFee": 3500, "advanceFee": 3150},
        "Medical Laboratory Techniques": {"listFee": 3500, "advanceFee": 3150},
        "Computer Programming": {"listFee": 3500, "advanceFee": 3150},
        "Biomedical Device Technology": {"listFee": 3500, "advanceFee": 3150},
        "Interior Design": {"listFee": 3500, "advanceFee": 3150},
        "Construction Technology": {"listFee": 3500, "advanceFee": 3150},
        "Architectural Restoration": {"listFee": 3500, "advanceFee": 3150},
        "Civil Aviation Transportation Management": {"listFee": 3500, "advanceFee": 3150},
        "Foreign Trade": {"listFee": 3500, "advanceFee": 3150},
        "Public Relations and Publicity": {"listFee": 3500, "advanceFee": 3150},
        "Human Resources Management": {"listFee": 3500, "advanceFee": 3150},
        "Logistics": {"listFee": 3500, "advanceFee": 3150},
        "Finance": {"listFee": 3500, "advanceFee": 3150},
        "Accounting and Taxation": {"listFee": 3500, "advanceFee": 3150},
        "Radio and Television Programming": {"listFee": 3500, "advanceFee": 3150},
        "Civil Aviation Cabin Services": {"listFee": 3500, "advanceFee": 3150},
        "Social Services": {"listFee": 3500, "advanceFee": 3150},
        "Sports Management": {"listFee": 3500, "advanceFee": 3150},
        "Applied English and Translation 50% English 50% Turkish": {"listFee": 3500, "advanceFee": 3150},



    };

    // List of special countries with 15% discount
    const specialCountries = [
        "Afghanistan", "Albania", "Algeria", "Azerbaijan", "Bangladesh", "Belarus", 
        "Bosnia and Herzegovina", "Brazil", "Bulgaria", "Cameroon", "Chile", "Comoros", 
        "Congo", "Croatia", "Democratic Republic of Congo", "Djibouti", "Egypt", 
        "Georgia", "Greece", "India", "Indonesia", "Israel", "Jordan", "Kazakhstan", 
        "Kenya", "Kosovo", "Kyrgyzstan", "Lebanon", "Malaysia", "Mali", "Mauritania", 
        "Moldova", "Mongolia", "Montenegro", "Morocco", "Myanmar", "Nigeria", "North Macedonia", 
        "Pakistan", "Palestine", "Peru", "Romania", "Russia", "Senegal", "Serbia", 
        "Sierra Leone", "Slovenia", "Somalia", "Sudan", "Tajikistan", "Tanzania", "Tunisia", 
        "Ukraine", "Uzbekistan"
    ];

    document.getElementById("major").addEventListener("change", updateLanguageAndFees);

function updateLanguageAndFees() {
    var majorSelect = document.getElementById("major");
    var languageSelect = document.getElementById("language");
    var major = majorSelect.value;

    // Set the language based on the major
    if (major.includes("100% English")) {
        languageSelect.innerHTML = '<option value="100% English">100% English</option>';
    } else if (major.includes("30% English & 70% Turkish") || major.includes("70% Turkish")) {
        languageSelect.innerHTML = '<option value="30% English & 70% Turkish">30% English & 70% Turkish</option>';
    } else {
        languageSelect.innerHTML = '<option value="Turkish">Turkish</option>';
    }

    // Optionally reset the language dropdown to default or first option
    languageSelect.value = languageSelect.options[0].value;

    // Call the discount calculation function
    calculateDiscount();
}

function calculateDiscount() { 
    const majorSelect = document.getElementById('major');
    const major = majorSelect.value;
  
    const nationalitySelect = document.getElementById('nationality');
    const nationality = nationalitySelect.options[nationalitySelect.selectedIndex].text;
  
    const languageSelect = document.getElementById('language');
    const language = languageSelect.options[languageSelect.selectedIndex].value;
  
    const fees = tuitionFees[major];
    if (!fees) {
      alert("Tuition fee data not found for the selected major.");
      return;
    }
  
    const listFee = fees.listFee;  // Fetch the fee from the tuitionFees object
    let finalFee = listFee;  // Start with the original fee
    let totalDiscountPercentage = 0;
    let totalDiscountAmount = 0;
  
    // Special countries list for 15% discount (applies to all programs)
    const specialCountriesList = [
      "Afghanistan", "Albania", "Algeria", "Azerbaijan", "Bangladesh", "Belarus", 
      "Bosnia and Herzegovina", "Brazil", "Bulgaria", "Cameroon", "Chile", "Comoros", 
      "Congo", "Croatia", "Democratic Republic of Congo", "Djibouti", "Egypt", 
      "Georgia", "Greece", "India", "Indonesia", "Israel", "Jordan", "Kazakhstan", 
      "Kenya", "Kosovo", "Kyrgyzstan", "Lebanon", "Malaysia", "Mali", "Mauritania", 
      "Moldova", "Mongolia", "Montenegro", "Morocco", "Myanmar", "Nigeria", "North Macedonia", 
      "Pakistan", "Palestine", "Peru", "Romania", "Russia", "Senegal", "Serbia", 
      "Sierra Leone", "Somalia", "Sudan", "Tajikistan", "Tanzania", "Tunisia", 
      "Ukraine", "Uzbekistan"
    ];
  
  
    // Included Turkish countries for 4-year programs only 15% discount
    const includedTurkishCountries = [
      "Bahrain", "United Arab Emirates", "Iraq", "Qatar", "Comoros", "Kuwait", "Libya", "Saudi Arabia", "Syria", "Oman", "Yemen"
    ];
  
    // Excluded Turkish programs (Medicine, Dentistry, Pharmacy, Physiotherapy, Law)
    const excludedTurkishPrograms = ["Medicine", "Dentistry", "Pharmacy", "Law"];
  
    // Apply Special Countries Discount (15%)
    if (specialCountriesList.includes(nationality)) {
      let specialDiscount = (listFee * 15) / 100;
      finalFee -= specialDiscount;  // Apply special discount first
      totalDiscountAmount += specialDiscount;  // Track discount
      totalDiscountPercentage += 15;  // Track discount percentage
    }
  
    // Get the study duration of the selected major
    const studyDuration = majorSelect.options[majorSelect.selectedIndex].getAttribute('data-duration');
  
    // Apply Turkish 4-Year Program Discount (15%) for included countries, if not in English or excluded programs   
    if (language === 'Turkish' && includedTurkishCountries.includes(nationality) && studyDuration === '4 years') {
      let turkishDiscount = (listFee * 15) / 100;
      finalFee -= turkishDiscount;  // Apply Turkish discount
      totalDiscountAmount += turkishDiscount;  // Track discount amount
      totalDiscountPercentage += 15;  // Track discount percentage
    }

    // Campaign Discounts
    const campaigns = {
        "Biomedical Engineering 100% English": 15,
        "Electrical-Electronic Engineering 100% English": 15,
        "Nursing 100% English": 15,
        "Architecture 100% English": 15,
        "School of Medicine 30% English & 70% Turkish": nationality === "Iran" ? 10 : 0,
        "School of Pharmacy 100% English": nationality === "Iran" ? 15 : 0
    };

    // Apply Campaign Discount after the Special Country Discount
    if (campaigns[major]) {
        let campaignDiscount = (finalFee * campaigns[major]) / 100;
        finalFee -= campaignDiscount;  // Apply campaign discount on the reduced fee
        totalDiscountAmount += campaignDiscount;  // Track discount amount
        totalDiscountPercentage += campaigns[major];  // Track discount percentage
    }

    // Apply Advanced Payment Discount (if selected)
    const advancedPaymentChecked = document.getElementById('advancedPaymentDiscount').checked;
    if (advancedPaymentChecked) {
        const advancedPaymentDiscount = (finalFee * 10) / 100;
        finalFee -= advancedPaymentDiscount;
        totalDiscountAmount += advancedPaymentDiscount;
        totalDiscountPercentage += 10;  // Track discount percentage
    }

    // Apply Fair Discount (if selected)
    const fairDiscountChecked = document.getElementById('fairDiscount').checked;
    if (fairDiscountChecked) {
        const fairDiscount = (finalFee * 10) / 100;
        finalFee -= fairDiscount;
        totalDiscountAmount += fairDiscount;
        totalDiscountPercentage += 10;  // Track discount percentage
    }

    // Apply Successful Scholarship Discount (dropdown)
    const scholarshipValue = parseInt(document.getElementById('successfulScholarship').value) || 0;
    if (scholarshipValue > 0) {
        const scholarshipDiscount = (finalFee * scholarshipValue) / 100;
        finalFee -= scholarshipDiscount;
        totalDiscountAmount += scholarshipDiscount;
        totalDiscountPercentage += scholarshipValue;  // Track discount percentage
    }

    // Apply Campaign Discount (dropdown)
    const campaignValue = parseInt(document.getElementById('Campaigns').value) || 0;
    if (campaignValue > 0) {
        const campaignDiscount = (finalFee * campaignValue) / 100;
        finalFee -= campaignDiscount;
        totalDiscountAmount += campaignDiscount;
        totalDiscountPercentage += campaignValue;  // Track discount percentage
    }

    // Ensure the total discount doesn't exceed 50%
    if (totalDiscountPercentage > 50) {
        alert("The total discount exceeds 50%. The maximum allowed discount is 50%.");
        totalDiscountPercentage = 50;
        totalDiscountAmount = listFee * 0.50;  // Cap total discount to 50%
        finalFee = listFee - totalDiscountAmount;  // Recalculate final fee
    }


    // Calculate deposit and remaining advance
    const depositAmount = finalFee * 0.50;
    const resetOfAdvance = finalFee - depositAmount;

    // Update the UI with the results
    document.getElementById("listFeeDisplay").innerHTML = "List Tuition Fee: $" + listFee.toLocaleString();
    document.getElementById("finalAmountDisplay").innerHTML = "Final Amount to be Paid: $" + finalFee.toLocaleString();
    document.getElementById("advanceFeeDisplay").innerHTML = "Advance Payment Fee: $" + (finalFee * 0.90).toLocaleString();
    document.getElementById("depositAmountDisplay").innerHTML = "Deposit Amount: $" + depositAmount.toLocaleString();
    document.getElementById("resetAdvanceDisplay").innerHTML = "Reset of The Advance: $" + resetOfAdvance.toLocaleString();
    document.getElementById("finalDiscountDisplay").innerHTML = "Final Discount Amount: $" + totalDiscountAmount.toLocaleString();
    document.getElementById("totalDiscountPercentageDisplay").innerHTML = "Total Discount Percentage: " + totalDiscountPercentage + "%";
}

// Wait for the DOM to be fully loaded before adding event listeners
document.addEventListener("DOMContentLoaded", function() {
    // Get the button element by its ID and bind the click event
    document.getElementById("calculateButton").addEventListener("click", calculateDiscount);
});

// Your existing calculateDiscount function will stay the same here
function calculateDiscount() {
    // ... your discount calculation logic ...
}
