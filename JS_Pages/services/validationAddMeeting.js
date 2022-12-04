const meetingDate = document.querySelector("#meetAdd");
const meetingStartHour = document.querySelector("#hourStart");
const meetingStartMinute = document.querySelector("#minutesStart");
const meetingEndHour = document.querySelector("#hourEnd");
const meetingEndminute = document.querySelector("#minutesEnd");

function validDate() {
  const meetDate = meetingDate.value;
  const formEl = meetingDate.closest(".formContent");
  const messageElement = formEl.querySelector(".message");
  let error = "";
  messageElement.innerHTML = "";
  const today = new Date();
  const selectedDate = new Date(`${meetDate}`);
  const tday = today.getDate();
  const mDay = selectedDate.getDate();
  const tYear = today.getFullYear();
  const mYear = selectedDate.getFullYear();
  const tMonth = today.getMonth();
  const mMonth = selectedDate.getMonth();

  if (tYear > mYear) {
    error += "Date Should be greater than today's date";
  } else if (tYear === mYear) {
    if (tMonth > mMonth) {
      error += "Date Should be greater than today's date";
    } else if (tMonth === mMonth) {
      if (tday > mDay) {
        error += "Date Should be greater than today's date";
      }
    }
  }
  messageElement.innerHTML = error;
  return error === "";
}

function validTime() {
  const startHour = meetingStartHour.value;
  const startMinute = meetingStartMinute.value;
  const endHour = meetingEndHour.value;
  const endMinute = meetingEndminute.value;

  const formEl = meetingEndHour.closest(".formContent");
  const messageElement = formEl.querySelector(".message");
  console.log(startHour);
  console.log(endHour);
  let error = "";
  messageElement.innerHTML = "";
  let sh = parseInt(startHour, 10);
  let sm = parseInt(startMinute, 10);
  let eh = parseInt(endHour, 10);
  let em = parseInt(endMinute, 10);
  if (sh > eh) {
    // console.log(11);
    error += "End time should greater than start time";
  } else if (sh === eh) {
    if (sm > em) {
      error += "End time should greater than start time";
    }
  }
  messageElement.innerHTML = error;
  return error === "";
}

function validate() {
  let isValid = true;

  isValid = validDate() && isValid;
  isValid = validTime() && isValid;

  return isValid;
}

meetingDate.addEventListener("blur", validDate);
meetingDate.addEventListener("input", validDate);

meetingStartHour.addEventListener("blur", validTime);
meetingStartHour.addEventListener("input", validTime);

meetingStartMinute.addEventListener("blur", validTime);
meetingStartMinute.addEventListener("input", validTime);

meetingEndminute.addEventListener("blur", validTime);
meetingEndminute.addEventListener("input", validTime);

meetingEndminute.addEventListener("blur", validTime);
meetingEndminute.addEventListener("input", validTime);

meetingEndHour.addEventListener("blur", validTime);
meetingEndHour.addEventListener("input", validTime);

meetingEndminute.addEventListener("blur", validTime);
meetingEndminute.addEventListener("input", validTime);

const form = document.querySelector("#addForm");









