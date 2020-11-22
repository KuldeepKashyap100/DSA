// height starts with 1
const getMinimumNumberOfNodes = (height) => {
    if(height < 1)
        return 0;
    return getMinimumNumberOfNodes(height - 1) + getMinimumNumberOfNodes(height-2) + 1;
}

console.log(getMinimumNumberOfNodes(5));