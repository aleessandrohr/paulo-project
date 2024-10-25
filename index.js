const api = "https://api.github.com/users";

const handleButton = () => {
	const answer = window.prompt("Você me ama?");

	if (answer == null) {
		alert('Escreva "sim" ou "não"');
	}

	const answerFormatted = answer.toLocaleLowerCase();

	if (answerFormatted === "sim" || answerFormatted == "não") {
		if (answer == "sim") {
			alert("blz");
		} else {
			alert("fds");
		}
	} else {
		alert('Escreva "sim" ou "não"');
	}
};

const handleButton2 = async () => {
	const answer = window.prompt("Nome de usuário");

	if (answer == null) {
		alert("Escreva um nome de usuário válido");
	}

	try {
		const data = await fetch(`${api}/${answer}`);
		const user = await data.json();

		console.log(user);

		const image = document.getElementById("userAvatar");

		image.setAttribute("src", user.avatar_url);
	} catch (err) {
		console.log("Deu erro");
	}
};
