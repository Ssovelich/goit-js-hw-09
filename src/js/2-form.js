const formEl = document.querySelector('.feedback-form');
let formData = {
    email: "",
    message: "",
};

const fillFormFields = () => { 
    const formDataFromLS = JSON.parse(localStorage.getItem('feedback-form-state'));
   if (formDataFromLS === null) {
       return;
    }
    
    formData = formDataFromLS;
     
    for (const key in formDataFromLS) {
       if (formDataFromLS.hasOwnProperty(key)) {
           formEl.elements[key].value = formDataFromLS[key];
    }
}
    
};
fillFormFields();

const onFormFieldInput = event => {
    const fieldName = event.target.name;
    const fieldValue = event.target.value.trim();
    
    formData[fieldName] = fieldValue;
    localStorage.setItem('feedback-form-state', JSON.stringify(formData))
};

const onFormSubmit = event => {
  event.preventDefault();
    
  const email = formEl.elements['email'].value;
  const message = formEl.elements['message'].value;
  if (email === ''|| message === '') {
    alert('Fill please all fields');
    return;
  }

    console.log(formData);
    event.target.reset();
    localStorage.removeItem('feedback-form-state')
};

formEl.addEventListener('input', onFormFieldInput);
formEl.addEventListener('submit', onFormSubmit);


