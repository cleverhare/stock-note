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
        Body : `Hi ${val1}, You Just added your email to Stock-Note. So we are here to welcome you this time. Hope your Job workflow will get a higher mark using stock-note. So if you have any query related to this email or anything regarding stock-note. Reach us at soumyajitbrah@gmail.com`
    })
  } else {
    let status = document.querySelector('.status')
    status.innerHTML= '**Invalid Email'
    status.style.color = 'red'
  }
   
}