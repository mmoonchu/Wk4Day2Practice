// 1.
const cat1 = {
    name: 'Poppy',
    breed: 'British Shorthair',
    age: 9
}
console.log(cat1.age);
console.log(cat1.breed);

// 2.
const cat2 = {
    name: 'Viktor',
    breed: 'Siamese',
    age: 21
}

// 3.
const combineCats = function(mama, papa) {
    // console.log(mama, papa);
    const cat3 = {
        name: `${mama.name}${papa.name}`,
        age: 1,
        breed: `${mama.breed}-${papa.breed}`,
    }
    return cat3;
}
combineCats(cat1, cat2);
console.log(combineCats(cat1, cat2));

// 4.
console.log(combineCats(combineCats(combineCats(cat1, cat2), combineCats(cat1, cat2)), combineCats(combineCats(cat1, cat2), combineCats(cat1, cat2))));