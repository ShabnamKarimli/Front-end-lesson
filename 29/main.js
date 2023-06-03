fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(json => {
    var htmlElement = '';
    json.forEach(element => {
      //``
      htmlElement += `
      <div class="col-lg-4 col-md-6 mt-4  rounded  ">
      <div class="card p-3 bg-warning bg-gradient border-dark">
      <div class="w-100 d-flex justify-content-center">      
       <h5 class="text-center rounded-circle bg-dark pt-1 text-warning" style="height: 40px; width: 40px; font-family: 'Pacifico', cursive;">${element.id}</h5>
      </div>
          <h6 class="card-name text-muted ">Name: <i class="text-dark"> ${element.name} </i></h6>
          <h6 class="card-username text-muted">Username:<i class="text-dark"> ${element.username} </i> </h6>
          <h6 class="card-email text-muted"> Email: <i class="text-dark">${element.email} </i></h6>
          
          
          <h6 class="card-phone text-muted "  > Phone: <i style="font-size:13px" class="text-dark">${element.phone}</i></h6>
          <h6 class="card-website text-muted">Website: <i class="text-dark"> ${element.website} </i></h6>
          <h6 class="text-muted" > Adress:</h6>
          <ul>
              <li class="font-italic text-dark"><b>Street:</b> <i>${element.address.street}</i></li>
              <li class="font-italic text-dark"> <b>Suit:</b> ${element.address.suit}</li>
              <li class="font-italic text-dark"> <b>City:</b> ${element.address.city}</li>
          </ul>
      </div>
  </div> `
    })
    document.querySelector(".dataObject").innerHTML = htmlElement
  })

