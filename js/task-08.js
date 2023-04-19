const formRef = document.querySelector('.login-form');
formRef.addEventListener('submit', handleSubmit)


function handleSubmit(event){
    event.preventDefault();

    const { email, password }  = event.currentTarget;

    if (email.value === "" || password.value === "") {
        return alert('You must fill all fields')
    }


   const user = {
       email: email.value,
      password: password.value
   }
    
    event.currentTarget.reset();
    
return console.log(user);

//    Version2 
// return console.log(`User Email: ${user.email} , User Password: ${user.password}`)
}
