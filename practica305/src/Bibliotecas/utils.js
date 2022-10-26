export const cal = (data) => {
    try {
        return (new Function( 'return (' + data + ')' ))();
    }
    catch(err) {
        return '';
    }
    // return (new Function( 'return (' + data + ')' ))();
}