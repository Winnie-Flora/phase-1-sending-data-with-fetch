const formData = {
    dogName: "Byron",
    dogBreed: "Poodle",
  };
  
  // method: "POST" is missing from the object below
  const configurationObject = {
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
    },
    body: JSON.stringify(formData),
  };
  
  fetch("http://localhost:3000/dogs", configurationObject)
    .then(function (response) {
      return response.json();
    })
    .then(function (object) {
      console.log(object);
    })
    .catch(function (error) {
      alert("Bad things! Ragnarők!");
      console.log(error.message);
    });


function submitData(name, email) {
  //Creating a POST request in submitData
  return fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
    },
    body: JSON.stringify({ name: name, email: email }),
  })

    .then((response) => response.json())
    .then((data) => {
      //Getting the new id and appending it to the DOM
      const newId = data.id;
      const idElement = document.createElement("p");
      idElement.textContent = `New Id: ${newId}`;
      document.body.appendChild(idElement);
    })

        //Handling errors using catch
    .catch((error) => {
       const errorElement = document.createElement("p");
       errorElement.textContent = `Error: ${error.message}`;
       document.body.appendChild(errorElement);
    });
}
