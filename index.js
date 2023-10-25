function buttonOpen(){
    document.getElementById("sidebar").style.width="100vw";
    document.querySelector("body").style.overflow= "hidden"

}

//définir la la largeur de la sidebar a 0  et faire un overflow auto

function buttonFermer(){
    document.getElementById("sidebar").style.width="0";
    document.querySelector("body").style.overflow= "auto"

}

const faqs = document.querySelectorAll(".faq");
faqs.forEach((faq) => {
    faq.addEventListener("click", () => {
        faq.classList.toggle("active");
    });
});



let email_input = document.getElementsByClassName("js");

for (let i = 0; i <= email_input.length; i++) {
  email_input[i].addEventListener("invalid", () => {
    input_error(email_input[i]);
  });

  email_input[i].addEventListener("input", () => {
    input_error(email_input[i]);
  });
}
// console.log(email_input[i]);

function input_error(x) {
  if (x.validity.valueMissing) {
    x.setCustomValidity("Vous n'avez saisi aucune donnée dans ce champ.");
  } else if (x.validity.typeMismatch) {
    x.setCustomValidity("Données invalides");
  } else {
    x.setCustomValidity("");
    return true;
  }
}
