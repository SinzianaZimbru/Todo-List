const butonAdaugare = document.querySelector(".button-list");
const textAdaugat = document.querySelector(".input-list");
const lista = document.querySelector(".listare-texte");

butonAdaugare.addEventListener("click", adauga);

function adauga(){
	const rez = document.createElement("div");
	rez.classList.add("rezultate");

	const par = document.createElement("p");
	par.classList.add("p-text");
	par.innerText = textAdaugat.value;
	textAdaugat.value = "";
	rez.appendChild(par);

	const butonCheck = document.createElement("button");
	butonCheck.classList.add("check");
	butonCheck.innerText = "Bifat";
	rez.appendChild(butonCheck);

	const butonDelete = document.createElement("button");
	butonDelete.classList.add("sterge");
	butonDelete.innerText = "Sterge";
	rez.appendChild(butonDelete);

	butonCheck.addEventListener("click", function(){
		par.classList.toggle("tai");
		rez.classList.toggle("taiat");
		// butonDelete.remove();
	});
	butonDelete.addEventListener("click", function(){
		rez.remove();
	});
	lista.appendChild(rez);
}


