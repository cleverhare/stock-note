function sendEmail(params) {
  var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  let email = document.getElementById('email')
  if (email.value.match(validRegex)) {
    let status = document.querySelector('.status')
    status.innerHTML= '✅Message sent succesfully'
    status.style.color = 'green'
    setTimeout(() => {
      status.innerHTML = ""
    }, 2000);
    let val1 = document.getElementById('name').value
    let emailval = document.getElementById('email').value
    let message = document.getElementById('message').value
    Email.send({
        SecureToken : "2d08c861-cd0f-40af-9793-58a518c9040d",
        To : 'soumyajitbrah@gmail.com',
        From : "soumyajitbrah@gmail.com",
        Subject : `This is a query from ${val1}`,
        Body : `Hi soumyajit brahma, This is a Query from mr/mrs ${val1}, From the Email ${emailval}, His/her query about the application is: ${message}`
    })
    Email.send({
        SecureToken : "2d08c861-cd0f-40af-9793-58a518c9040d",
        To : `${emailval}`,
        From : "soumyajitbrah@gmail.com",
        Subject : `Hi ${val1}, Welcome to Stock-Note`,
        Body : `<table width="100%" border="0" align="center" cellpadding="0" cellspacing="0">

        <!-- START HEADER/BANNER -->
        
            <tbody><tr>
              <td align="center">
                <table class="col-600" width="600" border="0" align="center" cellpadding="0" cellspacing="0">
                  <tbody><tr>
                    <td align="center" valign="top" background="https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y29kaW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" bgcolor="#66809b" style="background-size:cover; background-position:top;height=" 400""="">
                      <table class="col-600" width="600" height="400" border="0" align="center" cellpadding="0" cellspacing="0">
        
                        <tbody><tr>
                          <td height="40"></td>
                        </tr>
        
        
                        <tr>
                          <td align="center" style="line-height: 0px;">
                            <img style="display:block; line-height:0px; font-size:0px; border:0px;" src="https://stock-note.netlify.app/media/Logo.png" width="209" height="203" alt="logo">
                          </td>
                        </tr>
        
        
        
                        <tr>
                          <td align="center" style="font-family: 'Raleway', sans-serif; font-size:37px; color:#ffffff; line-height:24px; font-weight: bold; letter-spacing: 7px;">
                            Stock <span style="font-family: 'Raleway', sans-serif; font-size:37px; color:#ffffff; line-height:39px; font-weight: 300; letter-spacing: 7px; font-weight: bold;">Notes</span>
                          </td>
                        </tr>
        
        
        
        
        
                        <tr>
                          <td align="center" style="font-family: 'Lato', sans-serif; font-size:15px; color:#ffffff; line-height:24px; font-weight: 300;">
                          Hi, ${val1} we are here to welcome you this time. Hope your Job workflow will get a higher mark using stock-note. So if you have any query related to this email or anything regarding stock-note. Reach us at soumyajitbrah@gmail.com

                          </td>
                        </tr>
        
        
                        <tr>
                          <td height="50"></td>
                        </tr>
                      </tbody></table>
                    </td>
                  </tr>
                </tbody></table>
              </td>
            </tr>
        
        
        <!-- END HEADER/BANNER -->
        
       
        
        
       `
    })
  } else {
    let status = document.querySelector('.status')
    status.innerHTML= '**Invalid Email'
    status.style.color = 'red'
  }
   
}