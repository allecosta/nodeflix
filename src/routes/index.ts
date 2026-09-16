import { Router } from "express";
import * as PageController from '../controllers/pageController';
import * as SearchController from '../controllers/seachController';

const router = Router();

router.get('/',PageController.home);
router.get('/animes',PageController.animes);
router.get('/series',PageController.series);
router.get('/movies',PageController.movies);

router.get('/search',SearchController.search);


export default router;