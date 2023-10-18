// Add your code here
function submitData(userName, userEmail) {
    const formData = {
      name: userName,
      email: userEmail
    };
  
    const configurationObject = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(formData)
    };
  
    return fetch("http://localhost:3000/users", configurationObject)
      .then(response => response.json())
      .then(data => {
        document.body.innerHTML = `New user ID: ${data.id}`;
      })
      .catch(error => {
        document.body.innerHTML = `Error: ${error.message}`;
      });
  }
  