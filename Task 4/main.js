async function getdata(){
    try {
        const res = await fetch("data.json");
        const data = await res.json();
        for(let i=0; i< data.products.length; i++){ 
            console.log(data.products[i].name);
        }
        const instock = data.products.filter(product => product.inStock);
        console.log(`the products in stock`);
        for(let i=0; i<instock.length; i++){
            console.log(instock[i].name);
        }
        console.log(`the sum of prices = ${data.products.reduce((sum, curr) => sum + curr.price, 0)}`);
        console.log(`The expensive product is ${data.products.reduce((prev, curr) => prev.price > curr.price ? prev.name : curr.name)}`);
        
    }
    catch {
        console.error("Can not fetch the data");
    }
}
getdata();
