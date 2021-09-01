
const loadBook = () => {
    // const inputField =document.getElementById('input-field').value;
    // console.log(inputField)
    // const url = ` http://openlibrary.org/search.json?q=${inputField}`
    const url = 'http://openlibrary.org/search.json?q=javaScript';
    fetch (url)
    .then(res =>res.json())
    .then (data=>displayBookInfo(data.docs))
}

const displayBookInfo = (books)=>{
// console.log(books)
// console.log(books.title)
// console.log(books.author_name)
// console.log(books.publisher)
// console.log(books.first_publish_year)
books.forEach(book => {
    
    const searchResultDiv=document.getElementById('resultSHow-div')
const newDiv =document.createElement('div');
newDiv.innerHTML = ` <h2>${book.title}</h2>
                    <h3>${book.author_name}</h3>
                    <p>${book.publisher}</p>
                    <p>${book.first_publish_year}</p>
                            `
searchResultDiv.appendChild(newDiv);
});




};