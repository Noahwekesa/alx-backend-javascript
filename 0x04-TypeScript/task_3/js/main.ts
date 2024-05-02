import { RowID, RowElement } from "../interface.ts";
import * as CRUD from "./crud.js"; // Import functions from crud.js

const row: RowElement = {
  firstName: "Guillaume",
  lastName: "Salva",
};

const newRowID: RowID = CRUD.insertRow(row);
console.log("Inserted row ID:", newRowID); // Log the generated ID

const updatedRow: RowElement = { ...row, age: 23 }; // Spread existing row and add age
CRUD.updateRow(newRowID, updatedRow);
console.log("Updated row with age:", updatedRow);

CRUD.deleteRow(newRowID);
console.log("Deleted row with ID:", newRowID);
