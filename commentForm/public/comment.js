// console.log("hello world");
// let commentData = document.getElementById("comment").value;
// console.log(commentData);

// let commentData = document
//   .getElementById("comment")
//   .addEventListener("keyup", event => {
//     console.log(event.target.value);
//     newValue(event.target.value);
//   });

const submit = document
  .querySelector(".submit")
  .addEventListener("click", e => {
    e.preventDefault();
    const input = document.querySelector("#comment").value;

    const dataObj = { input };
    console.log(dataObj);
    
    async function postData(url = "/", data = dataObj) {
      // Default options are marked with *
      const response = await fetch(url, {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        headers: {
          "Content-Type": "application/json"
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },

        body: JSON.stringify(data) // body data type must match "Content-Type" header
      });
      console.log(response + "this is the response");
      return await response.json(); // parses JSON response into native JavaScript objects
    }
    postData("http://localhost:9090/", dataObj).then(data => {
      console.log(data); // JSON data parsed by `response.json()` call
    });
  });
