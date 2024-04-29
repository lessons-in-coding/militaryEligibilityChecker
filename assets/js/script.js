function checkEligibility(
  gender,
  age,
  isDisabled,
  isReligiousWorker,
  isUnderMedication,
  isMarried
) {
  return (
    (gender === "male" &&
      age >= 18 &&
      age <= 35 &&
      !isDisabled &&
      !isReligiousWorker &&
      !isUnderMedication &&
      !isMarried) ||
    (gender === "female" &&
      age >= 18 &&
      age <= 27 &&
      !isDisabled &&
      !isReligiousWorker &&
      !isUnderMedication &&
      !isMarried)
  );
}

const form = document.getElementById("eligibilityForm");
form.addEventListener("submit", function (event) {
  event.preventDefault();
  const name = document.getElementById("name").value;
  const gender = document.getElementById("gender").value.toLowerCase();
  const age = parseInt(document.getElementById("age").value);
  const isDisabled = document.getElementById("isDisabled").value === "true";
  const isReligiousWorker =
    document.getElementById("isReligiousWorker").value === "true";
  const isUnderMedication =
    document.getElementById("isUnderMedication").value === "true";
  let isMarried;
  if (gender === "male") {
    isMarried = false;
  } else {
    isMarried = document.getElementById("isMarried").value === "true";
  }

  const result = document.getElementById("result");
  const formContainer = document.getElementById("formContainer");
  if (
    checkEligibility(
      gender,
      age,
      isDisabled,
      isReligiousWorker,
      isUnderMedication,
      isMarried
    )
  ) {
    result.innerHTML = `Oh! Sorry ${name}, you are eligible to apply for the military.`;
  } else {
    result.innerHTML = `Congrats! ${name}, you are NOT eligible to apply for the military!!!`;
  }
  result.style.display = "block";
  formContainer.style.display = "none";
});

const genderSelect = document.getElementById("gender");
genderSelect.addEventListener("change", function () {
  const marriedQuestion = document.getElementById("marriedQuestion");
  if (genderSelect.value === "female" || genderSelect.value === "male") {
    marriedQuestion.style.display = "block";
  } else {
    marriedQuestion.style.display = "none";
  }
});
