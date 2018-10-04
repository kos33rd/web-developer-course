export const reducer =(prevState, action) => {
    const newState = {...prevState};
    switch (action.type) {
        case 'SELECT_ARTICLE':
            return {...newState, article: action.article}
    }

    return newState
};
