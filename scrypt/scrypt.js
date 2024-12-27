fetch('https://jsonplaceholder.typicode.com/posts').then((reponse)=>{
  if(!reponse.ok){
    throw new Error("network response is not ok");
  }
  return reponse.json();
}).then(data =>{
  console.log(data);
})
.catch(error => {
  console.error('erreur fetch');
});