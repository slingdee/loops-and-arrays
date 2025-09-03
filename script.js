                // for ... of loop

   function toUpper(string){
  return string.toUpperCase()
} 
  // this functions should come before the array.
  function lCat(cat){
      return cat.startsWith("L");
  }

const cats = ["Cat", "Leopard","Jaguar", "TIger", "Caracal", "Lion", "Serval"];

for (const cat of cats){
  console.log(cat);
}

            // Array.map

const upperCats = cats.map(toUpper);
console.log(upperCats)

            // Array.filter
  
  const filteredCats = cats.filter(lCat);
  console.log(filteredCats);