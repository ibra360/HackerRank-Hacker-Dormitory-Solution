import React, { useState } from "react";

// `joiningDate` && `validityDate` format "yyyy-mm-dd"
import { STUDENTS } from "../studentsList";
function checkValidity(joiningDate, validityDate) {
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const [year, month, day] = joiningDate.split("-");
  const [yyyy, mm, dd] = validityDate.split("-");
  const maxValid = new Date(yyyy, mm - 1, dd);
  const selected = new Date(year, month - 1, day);
  console.log(maxValid >= selected && maxValid >= today);
  return maxValid >= selected && maxValid >= today;
}
// const [name, setName] = useState('')

function onAdd(residents, setResidents, setErrorText) {
  const studentName = document.getElementById("studentName").value;
  const joiningDate = document.getElementById("joiningDate").value;

  const nameRes = STUDENTS.filter((student) => {
    return (
      studentName.toLowerCase() == student.name.toLowerCase()
      // checkValidity(joiningDate, student.validityDate)
    );
  });
  console.log({ nameRes });
  if (studentName && joiningDate) {
    if (nameRes.length == 0) {
      setErrorText(`Sorry, ${studentName} is not a verified student!`);
    }
    else if (!checkValidity(joiningDate, nameRes[0].validityDate)) {
      setErrorText(`Sorry, ${studentName}'s validity has Expired!`);
    } else {
      setErrorText("");

      setResidents([...residents, studentName]);
    }
  }
  // console.log({ response });
  // if (response.length > 0) {
  //   setResidents([...residents, studentName]);
  //   // residents.push(studentName);
  // } else {
  //   alert("Invalid joining date");
  // }
  // if (studentName && joiningDate) {
  //   if (checkValidity(joiningDate, "2030-05-25")) {
  //     //   setName(studentName)
  //     alert("Wah YAr");
  //   } else {
  //     alert("Invalid joining date");
  //   }
  // } else {
  //   alert("Please enter all the fields");
  // }
  document.getElementById("studentName").value = "";
  document.getElementById("joiningDate").value = "";
}
function Search({ residents, setResidents, setErrorText }) {
  return (
    <div className="my-50 layout-row align-items-end justify-content-end">
      <label htmlFor="studentName">
        Student Name:
        <div>
          <input
            id="studentName"
            data-testid="studentName"
            type="text"
            // value={name}
            className="mr-30 mt-10"
          />
        </div>
      </label>
      <label htmlFor="joiningDate">
        Joining Date:
        <div>
          <input
            id="joiningDate"
            data-testid="joiningDate"
            type="date"
            className="mr-30 mt-10"
          />
        </div>
      </label>
      <button
        onClick={() => onAdd(residents, setResidents, setErrorText)}
        type="button"
        data-testid="addBtn"
        className="small mb-0"
      >
        Add
      </button>
    </div>
  );
}

export default Search;
