window.onload = function() {
    const d = new Date();
    var day = d.getDate();
    var month = d.getMonth() + 1;
    var year = d.getFullYear();
    var dateeur = day+'.'+month+'.'+year;
    document.getElementById('heading').innerHTML =  'Top 15 Memes of Reddit on ' + dateeur;
}

const container = document.querySelector(".post-container");
const renderPosts = (postType) => {

  fetch(`https://www.reddit.com/r/Memes/${postType}.json`)
    .then(function(res) {
      // Return the response in JSON format
      return res.json();
    })
    .then(function(res) {
      // We render our posts to the UI in this block
      let currPost, markup = ``;

      // The array that contains our posts
      const postsArr = res.data.children;

      // Add a title based on post type
      markup = `<h3>${postType} posts from r/Memes</h3>`;

      // Iterate through our posts array and chain
      // the markup based on our HTML structure
      for (let i = 0; i < 5; i++) {
        currPost = postsArr[i].data; // a single post object
        markup += `
          <a class="post" href="https://www.reddit.com/${currPost.permalink}">
            <div class="title"> ${currPost.title} </div>
            <div class="content"> 
              ${currPost.selftext}
              </br></br>
              <span><img src=${currPost.url} alt=${currPost.url}></span>
            </div>
            <div class="author"> Posted by ${currPost.author} </div>
          </a>`;
      }
      // Insert the markup HTML to our container
      container.insertAdjacentHTML('afterbegin', markup);
    })
    .catch(function(err) {
      console.log(err); // Log error if any
    });

    fetch(`https://www.reddit.com/r/terriblefacebookmemes/${postType}.json`)
    .then(function(res) {
      // Return the response in JSON format
      return res.json();
    })
    .then(function(res) {
      // We render our posts to the UI in this block
      let currPost, markup = ``;

      // The array that contains our posts
      const postsArr = res.data.children;

      // Add a title based on post type
      markup = `<h3>${postType} posts from r/terriblefacebookmemes</h3>`;

      // Iterate through our posts array and chain
      // the markup based on our HTML structure
      for (let i = 0; i < 5; i++) {
        currPost = postsArr[i].data; // a single post object
        markup += `
          <a class="post" href="https://www.reddit.com/${currPost.permalink}">
            <div class="title"> ${currPost.title} </div>
            <div class="content"> 
              ${currPost.selftext} 
              </br></br>
              <span><img src=${currPost.url} alt=${currPost.url}></span>
            </div>
            <div class="author"> Posted by ${currPost.author} </div>
          </a>`;
      }
      // Insert the markup HTML to our container
      container.insertAdjacentHTML('afterbegin', markup);
    })
    .catch(function(err) {
      console.log(err); // Log error if any
    });

    fetch(`https://www.reddit.com/r/sbubby/${postType}.json`)
    .then(function(res) {
      // Return the response in JSON format
      return res.json();
    })
    .then(function(res) {
      // We render our posts to the UI in this block
      let currPost, markup = ``;

      // The array that contains our posts
      const postsArr = res.data.children;

      // Add a title based on post type
      markup = `<h3>${postType} posts from r/sbubby</h3>`;

      // Iterate through our posts array and chain
      // the markup based on our HTML structure
      for (let i = 0; i < 5; i++) {
        currPost = postsArr[i].data; // a single post object
        markup += `
          <a class="post" href="https://www.reddit.com/${currPost.permalink}">
            <div class="title"> ${currPost.title} </div>
            <div class="content"> 
              ${currPost.selftext} 
              </br></br>
              <span><img src=${currPost.url} alt=${currPost.url}></span>
            </div>
            <div class="author"> Posted by ${currPost.author} </div>
          </a>`;
      }
      // Insert the markup HTML to our container
      container.insertAdjacentHTML('afterbegin', markup);
    })
    .catch(function(err) {
      console.log(err); // Log error if any
    });
};
// Load hot posts on page load
renderPosts("top");
