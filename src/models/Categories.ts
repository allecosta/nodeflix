//import { type } from "os";

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
        author: 'Makoto Uezu',
        year: 2014
    },
    {
        type: 'anime',
        image: 'animatrix.jpg',
        name: 'Animatrix',
        author: 'The Wachowskis',
        year: 2003
    },
    {
        type: 'anime',
        image: 'another.jpg',
        name: 'Another',
        author: 'Tsutomu Mizushima',
        year: 2012
    },
    {
        type: 'anime',
        image: 'fullmetal_alchemist.jpg',
        name: 'Fullmetal Alchemist',
        author: 'Hiromu Arakawa',
        year: 2003
    },
    {
        type: 'anime',
        image: 'death_note.jpg',
        name: 'Death Note',
        author: 'Tsugumi Ohba',
        year: 2003
    },
    {
        type: 'anime',
        image: 'my_hero_academia.jpg',
        name: 'My Hero Academia',
        author: 'Kohei Horikoshi    ',
        year: 2014
    },
    {
        type: 'anime',
        image: 'tokyo_ghoul.jpg',
        name: 'Tokyo Ghoul',
        author: 'Sui Ishida',
        year: 2014
    },
    {
        type: 'anime',
        image: 'nanatsu_no_tazai.jpg',
        name: 'The Seven Deadly Sins',
        author: 'Nakaba Suzuki',
        year: 2012
    },
    {
        type: 'serie',
        image: 'startup.jpg',
        name: 'StartUp',
        author: 'Ben Ketai',
        year: 2016
    },
    {
        type: 'serie',
        image: 'game_of_thrones.jpg',
        name: 'Game of Thrones',
        author: 'George R. R. Martin',
        year: 2011
    },
    {
        type: 'serie',
        image: 'house-the-dragon.jpg',
        name: 'House of the Dragon',
        author: 'George R. R. Martin',
        year: 2022
    },
    
    {
        type: 'serie',
        image: 'la_casa_de_papel.jpg',
        name: 'La Casa de Papel',
        author: 'Álex Pina',
        year: 2017
    },
    {
        type: 'serie',
        image: 'mandalorian.jpg',
        name: 'The Mandalorian',
        author: 'Jon Favreau',
        year: 2019
    },
    {
        type: 'serie',
        image: 'mr_robot.jpg',
        name: 'Mr. Robot',
        author: 'Sam Esmail',
        year: 2015
    },
    {
        type: 'serie',
        image: 'silicon_valley.jpg',
        name: 'Silicon Valley',
        author: 'Mike Judge',
        year: 2014
    },
    {
        type: 'movie',
        image: 'snowden.jpg',
        name: 'Snowden: Herói ou Traidor',
        author: 'William Oliver Stone',
        year: 2016
    },
    {
        type: 'movie',
        image: 'matrix.jpg',
        name: 'Matrix',
        author: 'The Wachowskis',
        year: 1999
    },
    {
        type: 'movie',
        image: 'matrix_reloaded.jpg',
        name: 'Matrix Reloaded',
        author: 'The Wachowskis',
        year: 2003
    },
    {
        type: 'movie',
        image: 'matrix_revolutions.jpg',
        name: 'Matrix Revolutions',
        author: 'The Wachowskis',
        year: 2003
    },
    {
        type: 'movie',
        image: 'ameaca_fantasma.jpg',
        name: 'A Ameaca Fantasma',
        author: 'George Lucas',
        year: 1999
    },
    {
        type: 'movie',
        image: 'ascensao_skywalker.jpg',
        name: 'A Ascensao Skywalker',
        author: 'George Lucas',
        year: 2019
    },
    {
        type: 'movie',
        image: 'despertar_forca.jpg',
        name: 'O Despertar da Força',
        author: 'George Lucas',
        year: 2015
    },
    {
        type: 'movie',
        image: 'rogue_one.jpg',
        name: 'Rogue One',
        author: 'George Lucas',
        year: 2016
    },
    {
        type: 'movie',
        image: 'ultimos_jedi.jpg',
        name: 'Os Ultimos Jedi',
        author: 'George Lucas',
        year: 2017
    },
    {
        type: 'movie',
        image: 'vinganca_sith.jpg',
        name: 'A Vinganca dos Sith',
        author: 'George Lucas',
        year: 2005
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