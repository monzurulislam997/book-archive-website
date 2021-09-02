
const errorDiv =document.getElementById('errorDiv');
const searchResultDiv=document.getElementById('resultShow-div')
const searchNumber =document.getElementById('search-number');


// ___loadfuntion by click___
  const loadBook = () => {
    searchResultDiv.innerHTML =''
  let inputField =document.getElementById('input-field').value;
 document.getElementById('input-field').value=' '
    const url = ` http://openlibrary.org/search.json?q=${inputField}`
    if(inputField ===''){ 
      return  errorDiv.innerHTML =  `<h4> search field can not be empty  </h4>  `
    } 
     errorDiv.innerText =''
     searchNumber.innerText =''

     console.log(url)

    fetch (url)
    .then(res =>res.json())
    .then (data=> displayBookInfo(data.docs)
      )
  
}


// ____displayBookInfo function_____
const displayBookInfo = (books)=>{
  if(books.length=== 0){
    return errorDiv.innerHTML = `<p> ❌No result found</p>`
 }
    // displaytotalbook
const searchNumber =document.getElementById('search-number');
 searchNumber.innerHTML = `<p>Your search number is ${books.length}</p>`
      // _____loop for single book information___
    books.forEach(book => { 
    const newDiv =document.createElement('div');
    newDiv.classList.add("col");
    newDiv.classList.add("border");
    newDiv.classList.add("border-2");
    
    newDiv.innerHTML = ` <img width ="210px" src ="https://covers.openlibrary.org/b/id/ ${book.   cover_i}-M.jpg"></img>
                     <h3>${book.title}</h3>
                    <h4>${book.author_name}</h4>
                    <p>${book.publisher}</p>
                    <p>${book.first_publish_year}</p>
                            `
searchResultDiv.appendChild(newDiv);
});

};
