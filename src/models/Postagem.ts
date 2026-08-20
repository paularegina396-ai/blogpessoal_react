import type Tema from "./Tema"
import type Usuario from "./Usuario"

export default interface Postagem{
    id: number
    titulo: string
    texto: string
    // Data é string pq só vamos exibir a data, 
    // agora se fosse fazer alguma operação precisaria ser date
    data: string
    // Como ele pode ser nulo
    tema: Tema | null
    usuario: Usuario | null
}