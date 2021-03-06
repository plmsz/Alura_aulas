import { validarCPF } from "../components/helpers/validarCPF";

function CPFvalido(cpf) {
	if (cpf.length !== 11) {
		return { valido: false, texto: "CPF deve ter 11 dígitos" };
	} else if (!validarCPF(cpf)) {
		return { valido: false, texto: "CPF inválido" };
	} else {
		return { valido: true, texto: "" };
	}
}

function validarNome(nome) {
	if (nome.length < 4 && nome.length < 72) {
		return { valido: false, texto: "Nome deve ter entre 4 a 72 dígitos" };
	} else {
		return { valido: true, texto: "" };
	}
}

function validarSenha(senha) {
	// if (senha.length < 4 && senha.length < 72) {
	// 	return { valido: false, texto: "Senha deve ter entre 4 a 72 dígitos" };
	// } else {
	// 	return { valido: true, texto: "" };
	// }
	if (!senha.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,72}$/)) {
		return {
			valido: false,
			texto:
				"Deve conter uma letra maisucula, uma minuscula, e a senha deve ter entre 8 a 72 dígitos",
		};
	} else {
		return { valido: true, texto: "" };
	}
}

export { validarSenha, CPFvalido, validarNome };
