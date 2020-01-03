const itemNameValidator = (value) => {
    if (typeof value !== 'string' && typeof value !== 'number') {
        return false;
    }

    const regexp = /^[а-яёa-z1-9]{1,1}[а-яёa-z1-9_/-/ ]{0,31}$/i;       
    return regexp.test(value);
};


export default itemNameValidator;
