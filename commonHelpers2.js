import"./assets/modulepreload-polyfill-3cfb730f.js";const a=document.querySelector(".feedback-form");let o={email:"",message:""};const r=()=>{const e=JSON.parse(localStorage.getItem("feedback-form-state"));if(e!==null){o=e;for(const t in e)e.hasOwnProperty(t)&&(a.elements[t].value=e[t])}};r();const s=e=>{const t=e.target.name,l=e.target.value.trim();o[t]=l,localStorage.setItem("feedback-form-state",JSON.stringify(o))},m=e=>{e.preventDefault();const t=a.elements.email.value,l=a.elements.message.value;if(t===""||l===""){alert("Fill please all fields");return}console.log(o),e.target.reset(),localStorage.removeItem("feedback-form-state")};a.addEventListener("input",s);a.addEventListener("submit",m);
//# sourceMappingURL=commonHelpers2.js.map
