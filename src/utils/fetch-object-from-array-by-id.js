/**
*   Fetch object from objects array by object field named `id` which equals params `id`
*
*   @param {array} Array of objects
*   @param {id} Search by this `id`.
*
*   @return {false or object}
*/

export default (array, id) => {
    if (!Array.isArray(array)) {
        return false;
    }
    const itemIndex = array.findIndex(({ id: itemId }) => itemId === id);
    if (itemIndex < 0) {
        return false;
    }
     
    return array[itemIndex]; 
}
