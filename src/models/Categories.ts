import { type } from "os";

type CategoryType = 'anime'|'serie'|'movie';
//type PetSex = 'Masculino'| 'Feminino'

type Category =  {
    type: CategoryType,
    image: string,
    name: string,
    author:string,
    //sex: PetSex
};

const data: Category[] = [
    {
        type: 'anime',
        image: 'pastor-alemao.jpg',
        name: 'Pastor-alemão',
        author: 'Amarelo e Preto',
        //sex: 'Masculino'
    },
    {
        type: 'anime',
        image: 'labrador.jpg',
        name: 'Labrador-retriever',
        author: 'Branco',
        //sex: 'Masculino'
    },
    {
        type: 'anime',
        image: 'zwergspitz.jpg',
        name: 'Zwergspitz',
        author: 'Amarelo',
        //sex: 'Feminino'
    },
    {
        type: 'anime',
        image: 'husky.jpg',
        name: 'Husky Siberiano',
        author: 'Branco e Preto',
        //sex: 'Masculino'
    },
    {
        type: 'anime',
        image: 'golden.jpg',
        name: 'Golden Retriever',
        author: 'Amarelo',
        //sex: 'Masculino'
    },
    {
        type: 'anime',
        image: 'poodle.jpg',
        name: 'Poodle',
        author: 'Branco',
        //sex: 'Feminino'
    },
    {
        type: 'anime',
        image: 'bulldog.jpg',
        name: 'Bulldog',
        author: 'Branco e Amarelo',
        //sex: 'Masculino'
    },
    {
        type: 'serie',
        image: 'persa.jpg',
        name: 'Persa',
        author: 'Amarelo',
        //sex: 'Masculino'
    },
    {
        type: 'serie',
        image: 'mainecoon.jpg',
        name: 'Maine Coon',
        author: 'Preto e Branco',
        //sex: 'Masculino'
    },
    {
        type: 'serie',
        image: 'bengal.jpg',
        name: 'Bengal',
        author: 'Branco, Preto e Amarelo',
        //sex: 'Feminino'
    },
    {
        type: 'serie',
        image: 'siames.jpg',
        name: 'Siamês',
        author: 'Amarelo e Preto',
        //sex: 'Masculino'
    },
    {
        type: 'serie',
        image: 'sphynx.jpg',
        name: 'Sphynx',
        author: 'Branco',
        //sex: 'Masculino'
    },
    {
        type: 'movie',
        image: 'neon.jpg',
        name: 'Tetra Neon',
        author: 'Vermelho e Azul',
        //sex: 'Masculino'
    },
    {
        type: 'movie',
        image: 'matogrosso.jpg',
        name: 'Mato Grosso',
        author: 'Laranja',
        //sex: 'Masculino'
    },
    {
        type: 'movie',
        image: 'limpavidro.jpg',
        name: 'Limpa Vidro',
        author: 'Verde e Branco',
        //sex: 'Masculino'
    },
    {
        type: 'movie',
        image: 'tanictis.jpg',
        name: 'Tanictis',
        author: 'Vermelho',
        //sex: 'Masculino'
    },
    {
        type: 'movie',
        image: 'house-the-dragon.jpg',
        name: 'A Casa do Dragão',
        author: 'Preto',
        //sex: 'Masculino'
    },
]

export const Category = {
    getAll: (): Category[] => {
        return data
    },
    getFromType: (type:CategoryType): Category[] => {
        return data.filter(item => item.type === type)
    },
    getFromName: (name:string): Category[] => {
        return data.filter(item => {
            return (item.name.toLocaleLowerCase().indexOf(name.toLocaleLowerCase()) > -1)
        })
    }
}