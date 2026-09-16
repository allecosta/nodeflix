type MenuOptions = '' | 'all' | 'anime' | 'serie' | 'movie';

export const CreateMenuObject = (activeMenu: MenuOptions) => {
    let returnObject = {
        all: false,
        anime: false,
        serie: false,
        movie: false
    }

    if (activeMenu !== '') {
        returnObject[activeMenu] = true;
    }
    return returnObject;
}