//! Project KPI
//! started CRUD
let API = "http://localhost:8000/students";
let inputName = $(".inp-name");
let inputPhone = $(".inp-phone");
let inputWeek = $(".inp-week-kpi");
let inputMonth = $(".inp-month-kpi");
let addForm = $(".add-form");

async function addStudent(event) {
  event.preventDefault();
  let nameVal = inputName.val().trim();
  let phoneVal = inputPhone.val().trim();
  let weekVal = inputWeek.val().trim();
  let monthVal = inputMonth.val().trim();
  let newStudent = {
    name: nameVal,
    phone: phoneVal,
    weekKpi: weekVal,
    monthKpi: monthVal,
  };
  console.log(newStudent);
  for (let key in newStudent) {
    if (!newStudent[key]) {
      alert("Заполните поля!");
      return;
    }
  }
  try {
    const response = await axios.post(API, newStudent);
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}
addForm.on("submit", addStudent);
