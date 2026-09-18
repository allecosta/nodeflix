import { Request, Response } from "express";
import { CreateMenuObject } from "../helpers/createMenuObject";
import { Category } from "../models/Categories";
 ''

export const home = (req:Request, res:Response) => {
    let list = Category.getAll();

    res.render('pages/page', {
       menu: CreateMenuObject('all'),
       banner: {
           title:'Inicio',
           background:'allanimals.jpg'
       },
       list
    });
}

export const animes = (req:Request, res:Response) => {
    let list = Category.getFromType('anime');

     res.render('pages/page', {
        menu: CreateMenuObject('anime'),
        banner: {
            title:'Animes',
            background:'animes.jpg'
        },
        list
     });
}

export const series = (req:Request, res:Response) => {
    let list = Category.getFromType('serie');

    res.render('pages/page', {
        menu: CreateMenuObject('serie'),
        banner: {
            title:'Series',
            background:'series.jpg'
        },
       list
    });
}

export const movies = (req:Request, res:Response) => {
    let list = Category.getFromType('movie');

    res.render('pages/page', {
        menu: CreateMenuObject('movie'),
        banner: {
            title:'Filmes',
            background:'movies.jpg'
        },
       list
    });
}