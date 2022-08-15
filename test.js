const express = require("express")
const ejs = require("ejs")

const app  = express();

app.set("view engine", "ejs");

app.listen(3000, 'localhost', () => {
    console.log("app started");
});

app.get('/', (req ,res)=>{
    res.render("index"); 
});


/* 

  <script>

    const update = document.querySelector('button.update');
    update.addEventListener('click', (e) => {
      const urc = `/tasks/update/${update.dataset.doc}`;
      console.log(urc);
      fetch(urc, {
        method: 'PUT',
      })
      .then(response => response.render())
      .then(data => window.location.href = data.redirect)
      .catch(err => console.log(err));
    });
  </script>
  
*/