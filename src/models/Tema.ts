import type Postagem from "./Postagem";

export default interface Tema{
    id: number;
    descricao: string
    // Quando criar postagem ele pode trazer os temas associados
    postagem?: Postagem[] |null
}