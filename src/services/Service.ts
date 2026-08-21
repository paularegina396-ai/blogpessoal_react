//  contante api que recebe o resultado de. .. e la dentro define onde esta o backend

import axios from "axios";

// base url propriedade dda axios
const api = axios.create({
    // COnexão do react como backend, depois com o deploy vamos trocar por uma vaiavel de ambiente,
    //  pq se n fica exposto
    baseURL: 'https://blogpessoal-spring-629e.onrender.com'

})

// Função para cadastrar usuário
// Vc pode criar uma função e atribur a uma const
// aXIOS manda reqs e é assincrono por natureza
// Setdadso - atualzia o estado odne esta guardado o status do usuario - function
// A CONEXÃO FOI CRIADA PELA CONST API então ela que vamos suar p chamar os metodos
export const cadastrarUsuario = async (url: string, dados:Object, setDados: Function) =>{
    // parametros - url e dados q quer passa rno corpo da req
    const resposta = await api.post(url, dados)
    // dai vamos atualizar
    setDados(resposta.data)
}
// Na duvida olha o swagger - cadastrar usuario esta em /usuarios/cadastrar e ods dados? 
// É um objeto de usuario ta escrito oq precisa enviar
// E esses dadso estao definidor an sua model
// Set dadso - dados armazenados em um estado - uando vc faz o ccadastro vc n passa o ID, ele vai vazio
// Se o id vai vazio o estaod n tem o id, dai precisa atualizar o estado com o id
// por isso ele passa o estado setdaos -->vaia tualizar o estado com os dados recebidos da API
// url - do endpoint
// dados
// set dados vai attualizar usuario




//Função autenticar usuario - login - é igual - poderia suar A MESMA FUNÇÃO, ams pra ficar didativo separaemos
export const login = async (url: string, dados:Object, setDados: Function) =>{
    const resposta = await api.post(url, dados)
    setDados(resposta.data)

    
}

// COM TOKEN - Função Consultar com token
export const buscar = async (url: string, setDados: Function, header: Object) => {
    const resposta = await api.get(url, header);
    setDados(resposta.data);
}

// Função Cadastrar com token
export const cadastrar = async (url: string, dados: Object, setDados: Function, header: Object) => {
    const resposta = await api.post(url, dados, header)
    setDados(resposta.data)
}


// Função Atualizar com token
export const atualizar = async (url: string, dados: Object, setDados: Function, header: Object) => {
    const resposta = await api.put(url, dados, header)
    setDados(resposta.data)
}


// Função deletar com token
export const deletar = async (url: string, header: Object) => {
    await api.delete(url, header);
}