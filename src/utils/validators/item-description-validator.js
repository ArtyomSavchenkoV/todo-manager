const itemDescriptionValidator = (value) => {
    if (typeof value !== 'string' && typeof value !== 'number') {
        return false;
    }
    return true;
};


export default itemDescriptionValidator;
