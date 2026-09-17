import { type } from "os";

type CategoryType = 'anime'|'serie'|'movie';

type Category =  {
    type: CategoryType,
    image: string,
    name: string,
    author:string,
    year: number
};

const data: Category[] = [
    {
        type: 'anime',
        image: 'akami_ga_kill.jpg',
        name: 'Akami ga Kill',
        author: 'Amarelo e Preto',
        year: 2026
    },
    {
        type: 'anime',
        image: 'animatrix.jpg',
        name: 'Animatrix',
        author: 'Branco',
        year: 2026
    },
    {
        type: 'anime',
        image: 'another.jpg',
        name: 'Another',
        author: 'Amarelo',
        year: 2026
    },
    {
        type: 'anime',
        image: 'fullmetal_alchemist.jpg',
        name: 'Fullmetal Alchemist',
        author: 'Branco e Preto',
        year: 2026
    },
    {
        type: 'anime',
        image: 'death_note.jpg',
        name: 'Death Note',
        author: 'Amarelo',
        year: 2026
    },
    {
        type: 'anime',
        image: 'my_hero_academia.jpg',
        name: 'My Hero Academia',
        author: 'Branco',
        year: 2026
    },
    {
        type: 'anime',
        image: 'tokyo_ghoul.jpg',
        name: 'Tokyo Ghoul',
        author: 'Branco e Amarelo',
        year: 2026
    },
    {
        type: 'anime',
        image: 'nanatsu_no_tazai.jpg',
        name: 'Nanatsu no Tazai',
        author: 'Branco e Amarelo',
        year: 2026
    },
    {
        type: 'serie',
        image: 'startup.jpg',
        name: 'StartUp',
        author: 'Amarelo',
        year: 2026
    },
    {
        type: 'serie',
        image: 'game_of_thrones.jpg',
        name: 'Game of Thrones',
        author: 'Branco, Preto e Amarelo',
        year: 2026
    },
    {
        type: 'serie',
        image: 'house-the-dragon.jpg',
        name: 'House of the Dragon',
        author: 'Amarelo e Preto',
        year: 2026
    },
    
    {
        type: 'serie',
        image: 'la_casa_de_papel.jpg',
        name: 'La Casa de Papel',
        author: 'Branco',
        year: 2026
    },
    {
        type: 'serie',
        image: 'mandalorian.jpg',
        name: 'The Mandalorian',
        author: 'Branco',
        year: 2026
    },
    {
        type: 'serie',
        image: 'mr_robot.jpg',
        name: 'Mr. Robot',
        author: 'Branco',
        year: 2026
    },
    {
        type: 'serie',
        image: 'silicon_valley.jpg',
        name: 'Silicon Valley',
        author: 'Branco',
        year: 2026
    },
    {
        type: 'movie',
        image: 'snowden.jpg',
        name: 'Snowden: Herói ou Traidor',
        author: 'Laranja',
        year: 2026
    },
    {
        type: 'movie',
        image: 'matrix.jpg',
        name: 'Matrix',
        author: 'Vermelho e Azul',
        year: 2026
    },
    {
        type: 'movie',
        image: 'matrix_reloaded.jpg',
        name: 'Matrix Reloaded',
        author: 'Laranja',
        year: 2026
    },
    {
        type: 'movie',
        image: 'matrix_revolutions.jpg',
        name: 'Matrix Revolutions',
        author: 'Verde e Branco',
        year: 2026
    },
    {
        type: 'movie',
        image: 'ameaca_fantasma.jpg',
        name: 'A Ameaca Fantasma',
        author: 'Vermelho',
        year: 2026
    },
    {
        type: 'movie',
        image: 'ascensao_skywalker.jpg',
        name: 'A Ascensao Skywalker',
        author: 'Preto',
        year: 2026
    },
    {
        type: 'movie',
        image: 'despertar_forca.jpg',
        name: 'O Despertar da Força',
        author: 'Preto',
        year: 2026
    },
    {
        type: 'movie',
        image: 'rogue_one.jpg',
        name: 'Rogue One',
        author: 'Preto',
        year: 2026
    },
    {
        type: 'movie',
        image: 'ultimos_jedi.jpg',
        name: 'Os Ultimos Jedi',
        author: 'Preto',
        year: 2026
    },
    {
        type: 'movie',
        image: 'vinganca_sith.jpg',
        name: 'A Vinganca dos Sith',
        author: 'Preto',
        year: 2026
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