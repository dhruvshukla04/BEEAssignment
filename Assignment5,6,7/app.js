// const express = require('express');
// const app = express();
// const port = 3000;


// const items = [
//     { id: 1, name: 'The Great Gatsby', category: 'book' },
//     { id: 2, name: 'Inception', category: 'movie' },
//     { id: 3, name: 'Interstellar', category: 'movie' },
//     { id: 4, name: 'To Kill a Mockingbird', category: 'book' },
//     { id: 5, name: 'The Matrix', category: 'movie' }
// ];


// app.set('view engine', 'ejs');

// app.use(express.static('public'));

// app.get('/search', (req, res) => {
//     const query = req.query.q || '';  
    
//     // Filter items based on the search query
//     const filteredItems = items.filter(item => item.name.toLowerCase().includes(query.toLowerCase()));

  
//     res.render('search', {
//         query,
//         results: filteredItems
//     });
// });

// app.listen(port, () => {
//     console.log(`Server running at http://localhost:${port}`);
// });

// ex6
// const express = require('express');
// const bodyParser = require('body-parser');
// const app = express();
// const PORT = 3000;


// app.set('view engine', 'ejs');


// app.use(bodyParser.urlencoded({ extended: true }));


// const posts = [];

// app.get('/posts', (req, res) => {
//   res.render('posts', { posts });
// });


// app.post('/posts', (req, res) => {
//   const { title, body } = req.body;
//     posts.push({ title, body });
//     res.redirect('/posts');
// });

// app.get('/posts/:title', (req, res) => {
//   const requestedTitle = req.params.title;
//   const post = posts.find(p => p.title === requestedTitle);
//   if (post) {
//     res.render('post', { post });
//   } else {
//     res.status(404).send('Post not found');
//   }
// });

// app.listen(PORT, () => {
//   console.log(`Server running on http://localhost:${PORT}`);
// });

const express = require('express');
const app = express();
const PORT = 3000;
app.set('view engine', 'ejs');
let isLoggedIn = false;
app.get('/', (req, res) => {
  res.render('index', { isLoggedIn });
});
app.get('/login', (req, res) => {
  isLoggedIn = true;
  res.redirect('/');
});
app.get('/logout', (req, res) => {
  isLoggedIn = false;
  res.redirect('/');
});
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});