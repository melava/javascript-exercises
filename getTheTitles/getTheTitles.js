const getTheTitles = function() {
    const books = [
        {
          title: 'Book',
          author: 'Name'
        },
        {
          title: 'Book2',
          author: 'Name2'
        }
    ]

    let bookTitles = books.map(book => book.title)
    return bookTitles;
}

module.exports = getTheTitles;
