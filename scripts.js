window.onload = function() {
    const d = new Date();
    var day = d.getDate();
    var month = d.getMonth() + 1;
    var year = d.getFullYear();
    var dateeur = day+'.'+month+'.'+year;
    document.getElementById('logo').innerHTML = dateeur;
}

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

const container1 = document.querySelector(".post-container1");
const container2 = document.querySelector(".post-container2");
const container3 = document.querySelector(".post-container3");
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
      markup = `<h3 class="heading">${postType} posts from r/Memes</h3>`;

      // Iterate through our posts array and chain
      // the markup based on our HTML structure
      for (let i = 0; i < 5; i++) {
        var currentpos = +i + +1
        currPost = postsArr[i].data; // a single post object
        markup += `
          <a class="post" href="https://www.reddit.com/${currPost.permalink}">
            <div class="title">top ${currentpos}. ${currPost.title} </div>
            <div class="content"> 
              ${currPost.selftext}
              </br></br>
              <span><img src=${currPost.url} alt=${currPost.url}></span>
            </div>
            <div class="author"> Posted by ${currPost.author} </div>
          </a>`;
      }
      // Insert the markup HTML to our container
      container1.insertAdjacentHTML('afterbegin', markup);
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
      let currPost, markup = ``;

      const postsArr = res.data.children;

      markup = `<h3 class="heading">${postType} posts from r/terriblefacebookmemes</h3>`;

      for (let i = 0; i < 5; i++) {
        var currentpos = +i + +1
        currPost = postsArr[i].data;
        markup += `
          <a class="post" href="https://www.reddit.com/${currPost.permalink}">
          <div class="title">top ${currentpos}. ${currPost.title} </div>
            <div class="content"> 
              ${currPost.selftext} 
              </br></br>
              <span><img src=${currPost.url} alt=${currPost.url}></span>
            </div>
            <div class="author"> Posted by ${currPost.author} </div>
          </a>`;
      }
      container2.insertAdjacentHTML('afterbegin', markup);
    })
    .catch(function(err) {
      console.log(err); 
    });

  fetch(`https://www.reddit.com/r/sbubby/${postType}.json`)
    .then(function(res) {
      return res.json();
    })
    .then(function(res) {
      let currPost, markup = ``;

      const postsArr = res.data.children;
      markup = `<h3 class="heading">${postType} posts from r/sbubby</h3>`;

      for (let i = 0; i < 5; i++) {
        var currentpos = +i + +1
        currPost = postsArr[i].data;
        markup += `
          <a class="post" href="https://www.reddit.com/${currPost.permalink}">
          <div class="title">top ${currentpos}. ${currPost.title} </div>
            <div class="content"> 
              ${currPost.selftext} 
              </br></br>
              <span><img src=${currPost.url} alt=${currPost.url}></span>
            </div>
            <div class="author"> Posted by ${currPost.author} </div>
          </a>`;
      }
      container3.insertAdjacentHTML('afterbegin', markup);
    })
    .catch(function(err) {
      console.log(err);
    });
};
// Load top posts on page load
renderPosts("top");
