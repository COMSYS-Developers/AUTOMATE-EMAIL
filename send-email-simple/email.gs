function myFunction() {
  let workbook=SpreadsheetApp.getActiveSpreadsheet();
    let sheet=workbook.getSheetByName('Sheet1');
    //error : 28,47
    let start_row=48;  //2
    let end_row=49;  // 121
    for(let i=start_row;i<=end_row;i++) {
      
        let name = sheet.getRange('B'+i).getValue();
        let email = sheet.getRange('D'+i).getValue();
        let track = sheet.getRange('H'+i).getValue();
        let venue = sheet.getRange('J'+i).getValue();
        let date = sheet.getRange('E'+i).getValue();
        let time = sheet.getRange('F'+i).getValue();
        let mode = sheet.getRange('G'+i).getValue();
        let invitation = sheet.getRange('K'+i).getValue();

        let sub=`COMSYS 2024::Invitation to act as a Session Chair (${date} ${time})`;

        let body=HtmlService.createTemplateFromFile("email");
        body.name = name;
        body.track = track;
        body.venue = venue;
        body.date = date;
        body.time = time;
        body.mode = mode;
        body.url = invitation;
       
        MailApp.sendEmail({
            to:email,
            subject:sub,
            htmlBody: body.evaluate().getContent(),
        });
        Logger.log(`${i} ${name} th Row completed !`);
    }
}
