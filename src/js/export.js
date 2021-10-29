// // Get DataTable that DataGrid is bound to.
// var dataTable = (DataTable)dataGrid.DataSource;

// // Create new ExcelFile.
// var ef = new ExcelFile();
// // Add new worksheet to the file.
// var ws = ef.Worksheets.Add(dataTable.TableName);
// // Insert the data from DataTable to the worksheet starting at cell "A1".
// ws.InsertDataTable(dataTable, "A1", true);

// // Stream file to browser.
// Response.Clear();
// Response.ContentType = "application/vnd.ms-excel";
// Response.AddHeader("Content-Disposition", "attachment; filename=Employee.xls");
// ef.SaveXls(Response.OutputStream);
// Response.End();