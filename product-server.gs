function doGet(e) {
  const sheet = SpreadsheetApp.openById("YOUR_SHEET_ID").getSheetByName("Products");
  const data = sheet.getDataRange().getValues();
  
  const headers = data[0];
  const rows = data.slice(1);

  const products = rows.map(row => {
    let product = {};
    headers.forEach((header, index) => {
      product[header] = row[index];
    });
    return product;
  });

  return ContentService.createTextOutput(JSON.stringify(products))
    .setMimeType(ContentService.MimeType.JSON);
}