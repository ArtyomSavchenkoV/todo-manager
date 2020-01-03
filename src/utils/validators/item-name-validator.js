const itemNameValidator = (value) => {
    if (typeof value !== 'string' && typeof value !== 'number') {
        return false;
    }

    const regexp = /^[a-z1-9]{1,1}[a-z1-9а-я_\-]{0,31}$/;       
    return regexp.test(value);
};


export default itemNameValidator;
