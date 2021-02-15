<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Garden of Books</title>
    <link rel="stylesheet" href="styles.css">
    <link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@600&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@1,200&display=swap" rel="stylesheet">
</head>
<body>

<!-- Hero Image -->
<div id="header">
    <h1>Garden of Books</h1>
    <div>
        <img id="header-image" src="garden-book.jpg" alt="book">
    </div>
</div>

<!-- Banner Info -->
<div id="banner">
  <h1>Garden of Books is a bookclub for friends,<br> family and all bookworms at heart.</h1>
</div>

<!-- Row of Flowers Img -->
<div id="flowers">
  <img id="flower-image" src="row-of-flowers.jpg" alt="flowers">
</div>

<!-- New Book -->
<div id="new-book-container">
    <form id="new-book-form">
      <h1>Add a new book!</h1>
      <label for="new-book-title">Book Title:</label>
      <input type="text" id="new-book-title" placeholder="Book Title">
      <label for="new-book-author">Book Author:</label>
      <input type="text" id="new-book-author" placeholder="Book Author">
      <label for="new-book-image">Image URL:</label>
      <input type="text" id="new-book-image" placeholder="URL"><br/ ><br />
      <button type="submit">Add Book</button>
    </form>
  </div>

<!-- Book Container -->
<div class="container">
    <section id="books-content"></section>
</div>

<!-- New Review -->
<div id="new-review-container">
    <form id="new-review-form">
      <div class="body-input">
        <label for="new-review-body">Review:</label>
        <input type="text" id="new-review-body" placeholder="Please review your book here.">
      </div>

      <div id="buttons">
        <button onclick="closeForm()">Close</button>
      </div>
    </form>
</div>
    
<!-- JS Scripts -->
    <script src="src/components/book.js"></script>
    <script src="src/components/books.js"></script>
    <script src="src/components/app.js"></script>
    <script src="src/adapters/booksAdapter.js"></script>
    <script src="src/index.js"></script>

</body>
</html>
