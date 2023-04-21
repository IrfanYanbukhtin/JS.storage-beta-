function GetProducts() {
    let items = JSON.parse(localStorage.getItem('products'));
    let alertbox = document.querySelector('.alert');

    if(items.length === 0) {
        alertbox.classList.remove('d-none')
        document.querySelector('table').classList.add('d-none')
    }
    else{
        alertbox.classList.add('d-none')
        document.querySelector('table').classList.remove('d-none')
        
        let x = '';
        items.forEach(item => {
        x += `
        <tr>
            <th scope="row">${item.Id}</th>
            <td>
                <img src=${item.Image}>
            </td>
            <td>${item.Title}</td>
            <td>
                <input type="number" min="1" value=${item.Count}>
            </td>
            <td>${(item.Price) * (item.Count)} AZN</td>
            <td>
                <button class="btn btn-danger">Delete</button>
            </td>
        </tr>
        `
    })
    document.querySelector('tbody').innerHTML = x;
    }
    
}

GetProducts();

let list = JSON.parse(localStorage.getItem('products'))
let remove = document.querySelectorAll('.btn')

for(let rem of remove) {
    rem.onclick = function() {
        let id = this.parentElement.parentElement.firstElementChild.id
        let products = list.filter(item => item.Id !== id)
        localStorage.setItem('products',JSON.stringify(products))

        let x = ''

        products.forEach(item =>{
            x += `
            <tr>
                <th scope="row" id="${item.Id}" >${item.Id}</th>
                <td>
                   <img src=${item.Image}>
                </td>
                <td>
                   ${item.Title}
                </td>
                <td>
                   <input type="number" min="1" value="${item.Count}">
                </td>
                <td>
                   ${item.Price}
                </td>
                <td>
                   ${((Number(item.Count)) * (Number(item.Price))).toFixed(2)}
                   </td>
                <td><button class="btn btn-danger">Delete</button></td>
            </tr>
             `
        });
        document.querySelector('tbody').innerHTML = x
        window.location.reload()
    }
}

let inp = document.querySelectorAll('input')

for(let input of inp) {
    input.oninput = function() {
        let value = input.value

        let list = JSON.parse(localStorage.getItem('products'))

        productlist.forEach(item => {
            item.Count = value
        });

        localStorage.setItem('products', JSON.stringify(list))
        window.location.reload()
    }
    
}