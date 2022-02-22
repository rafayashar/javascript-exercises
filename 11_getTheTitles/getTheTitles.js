const getTheTitles = function(books) {
    
    const name = books.map(book => {
        return (book.title);
    });

    return name;
};



// Do not edit below this line
module.exports = getTheTitles;
