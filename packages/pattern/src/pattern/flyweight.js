// 蝇量级模式: 当我们创建大量相似对象时，蝇量级模式是一种节省内存的有用方法

class Book {
  constructor(title, author, isbn) {
    this.title = title
    this.author = author
    this.isbn = isbn
  }
}
const isbnNumbers = new Set()
const createBook = (title, author, isbn) => {
  const book = isbnNumbers.has(isbn)
  if (book) {
    return book
  }
  else {
    const book = new Book(title, author, isbn)
    isbnNumbers.add(isbn)
    return book
  }
}

const bookList = []
const addBook = (title, author, isbn, availibility, sales) => {
  const book = {
    ...createBook(title, author, isbn),
    sales,
    availibility,
    isbn,
  }

  bookList.push(book)
  return book
}


addBook('Harry Potter', 'JK Rowling', 'AB123', false, 100)
addBook('Harry Potter', 'JK Rowling', 'AB123', true, 50)
addBook('To Kill a Mockingbird', 'Harper Lee', 'CD345', true, 10)
addBook('To Kill a Mockingbird', 'Harper Lee', 'CD345', false, 20)
addBook('The Great Gatsby', 'F. Scott Fitzgerald', 'EF567', false, 20)

console.log('Total amount of copies: ', bookList.length)
console.log('Total amount of books: ', isbnNumbers.size)

// 尽管有5个副本，但我们只有3个Book实例！
