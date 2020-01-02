const createObjectByFieldPath = (fullFieldPath, value) => {


    const pathPartsArray = fullFieldPath.split('.');
    let resultObject = value;
    for (let i = pathPartsArray.length - 1; i > -1; i -= 1 ) {
        if (pathPartsArray[i] !== 'Object') {
            resultObject = {[pathPartsArray[i]]: resultObject};
        }
    };

    return resultObject;
}

export default createObjectByFieldPath;
