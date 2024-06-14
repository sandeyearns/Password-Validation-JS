
function checkPassword()
{
    let password=document.getElementById("password").value
    let conformpassword=document.getElementById("conformpassword").value
    console.log(password,conformpassword)
    let message=document.getElementById("message")
    if(password.length!=0)
        {
            if(password==conformpassword)
                {
                    message.textContent="password match"
                    message.style.color="green"
                }
                else
                {
                    message.textContent="password doesnot match"
                    message.style.color="red"
                }
        }
} 
      