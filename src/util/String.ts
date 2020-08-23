const sanitizeArray = (array: any[]): any[] => {
    if (array.length === 1 && array[0] === "") return [];
    return array;
};

export default sanitizeArray;
