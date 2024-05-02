import { RowID, RowElement } from "../js/interface";

// Crud functions
export declare function insertRow(row: RowElement): RowID;

export declare function deleteRow(rowId: RowID): void;

export declare function updateRow(rowId: RowID, row: RowElement): void;
