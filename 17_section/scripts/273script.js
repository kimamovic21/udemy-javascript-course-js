// 273. Top-Level await(ES2022)

import add, {cart} from './273shoppingCart.js';
add('pizzas', 2);  // 2 pizzas added to cart!
add('breads', 3);  // 2 pizza added to cart!
add('apples', 4);  // 2 pizza added to cart!
console.log(cart);  // [{…}, {…}, {…}, {…}]


// console.log(`Start fetching`);
// const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
// const data = await res.json();
// console.log(data);  // (100)
// console.log(`Something`);


const getLastPost = async function() {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
    const data = await res.json();
    // console.log(data);

    return {title: data.at(-1).title, text: data.at(-1).body};
};

const lastPost = getLastPost();
console.log(lastPost);  // Promise {<pending>}

// Not very clean
// lastPost.then(last => console.log(last));

// Top-level await
const lastPost2 = await getLastPost();
console.log(lastPost2);  // {title: '...'}
