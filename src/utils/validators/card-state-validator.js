const cardStateValidator = (value) => {
    switch (value) {
        case 'NEW':
        case 'IN_PROGRESS':
        case 'FINISHED':
        case 'CANSELLED': {
            return true;
        }
        default: {
            return false;
        }
    }
};


export default cardStateValidator;
