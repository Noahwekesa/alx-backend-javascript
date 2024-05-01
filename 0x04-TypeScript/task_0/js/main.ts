// interface for student wuth properties firstName, lastName, age, location
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Two student objects
let student1: Student = {
  firstName: "Noah",
  lastName: "Wekesa",
  age: 28,
  location: "Nairobi",
};

let student2: Student = {
  firstName: "Paul",
  lastName: "Kwach",
  age: 24,
  location: "Nairobi",
};

// array
let studentsList: Student[] = [student1, student2];

export default function renderTable() {
  const table = document.createElement("table");

  // Create table header
  const header = table.createTHead();
  const headerRow = header.insertRow();
  const firstNameHeader = headerRow.insertCell(0);
  const locationHeader = headerRow.insertCell(1);
  firstNameHeader.textContent = "First Name";
  locationHeader.textContent = "Location";

  // Create table body
  const body = table.createTBody();
  studentsList.forEach((student) => {
    const row = body.insertRow();
    const firstNameCell = row.insertCell(0);
    const locationCell = row.insertCell(1);
    firstNameCell.textContent = student.firstName;
    locationCell.textContent = student.location;
  });

  // Append table to document body
  document.body.appendChild(table);
}
