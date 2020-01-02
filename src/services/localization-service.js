
class LocalizationService {
    dictionary = {};

    setLanguage = (dictionary) => {
        if (typeof dictionary === 'object' && dictionary !== null) {
            this.dictionary = dictionary;
        } else {
            console.warn("Dictionary JSON is not JSON.");
        }
    }

    localize = (path, inserts) => {
        //TODO: Make mechanism for insert a text from the inserts object to the string of the translate. 
        const pathPartsArray = path.split('.');

        let result = '#' + path;

        let obj = this.dictionary;
        for (let i = 0; i < pathPartsArray.length; i += 1 ) {
            if (typeof obj[pathPartsArray[i]] === 'object' && obj[pathPartsArray[i]] !== null) {
                obj = obj[pathPartsArray[i]]
            } else if (typeof obj[pathPartsArray[i]] === 'string' ||  obj[pathPartsArray[i]] === null) {
                result = obj[pathPartsArray[i]];
                break;
            } else if (obj[pathPartsArray[i]] === undefined) {
                console.log('Not possible to localize:', result);
                break;
            }
        };

        return result;
    }
}

export default LocalizationService;
