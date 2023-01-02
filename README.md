# fake-ecommerce-store-api

This is free REST api that provides users with real time ecommerce data in json format.If you don't want to run any server side code,
you can use this free api.The api is good for learning, teaching and testing purposes only.
Enjoy it and feel free to contribute and alert incase of any errors

### Resources

products: url to be posted soon
auth: url to be posted soon

### Usage

You can fetch datausing any methods you know ie fetch, axios etc

### get all products

```js
fetch("") //url to be posted soon
  .then((res) => res.json())
  .then((json) => console.log(json));
```

### get a single product

```js
fetch("") //url to be posted soon
  .then((res) => res.json())
  .then((json) => console.log(json));
```

### Upload a product

```js
fetch("", {
  //url to be posted soon
  method: "POST",
  body: JSON.stringify({
    name: "new product",
    price: 10,
    description: "product desription",
    image: "img url",
    category: "electronics",
  }),
})
  .then((res) => res.json())
  .then((json) => console.log(json));

/* response
{
    "price": 25,
    "name": "accent chair",
    "image": "img url",
    "description": "Comfy chair for you living room",
    "category": "electronics",
}
*/
```

### delete a product

```js
fetch("", {
  //url to be posted
  method: "DELETE",
});

/*
the response

{
    "price": 25,
    "name": "accent chair",
    "image": "img url",
    "description": "deleted product description",
    "category": "home"
}

*/
```

### update a product

```js
fetch("", {
  //url to be posted

  method: "PUT",
  body: JSON.stringify({
    title: "updated product",
    price: 30,
    description: "updated product description",
    image: "img url",
    category: "electronics",
  }),
})
  .then((res) => res.json())
  .then((json) => console.log(json));

/* response
{

    "price": 30,
    "name": "updated product",
    "image": "img url",
    "description": "updated product description",
    "category": "electrinics",

}
*/
```
