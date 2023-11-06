const ad = document.getElementById('ad')

fetch('https://northwind.vercel.app/api/customers')
.then(res => res.json())
.then(data => {
    data.forEach( item =>  {
        const p = document.createElement('p')
        p.textContent = `${item.contactName}`
        ad.appendChild(p)
    })
})





const bttn = document.getElementById('bttn')

bttn.addEventListener('click',function(){
    fetch('https://northwind.vercel.app/api/customers',{
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify({
                    Kompaniyaadi: kmpnyadi.value,
                    Kontaktadi: kntktadi.value,
                    Kontaktbasligi: kntktbslq.value
                   }),
                })
                  .then((res) => res.json())
                  .then((data) => {
                    console.log("customer created" + data);
                  });
        })





bttn.addEventListener('click',function(){

    const Kompaniyaadi = document.getElementById('Kompaniyaadi').value;
    let url = `https://northwind.vercel.app/api/customers${Kompaniyaadi}`;

        fetch(url, {
          method: "DELETE",
        }).then((res) => console.log(res))
})
fetch('https://northwind.vercel.app/api/customers', {
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({ 

    })
})
axios.get("https://northwind.vercel.app/api/customers")
.then((res) => {
      console.log(res.data);
    });






bttn.addEventListener('click',function(){
    axios.post("https://northwind.vercel.app/api/customers", {
            Kompaniyaadi: kmpnyadi.value,
            Kontaktbasligi: kntktbslq.value
        }).then(res => {
                console.log(res);
            })
})
bttn.addEventListener('click',function(){
    axios.delete(`https://northwind.vercel.app/api/customers${kmpnyadi.value}`)
})
