const CreateIngredient = (data) =>{
    fetch('http://localhost:8000/ingredient/create', {
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json',
          'mode': 'no-cors',
        },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log('Success:', data);
        })
        .catch((error) => {
          console.error('Error:', error);
        }
    );
}

export default CreateIngredient;