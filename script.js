                // for ... of loop

  function toUpper(string){
    return string.toUpperCase()
  } 

const cats = ["Cat", "Leopard","Jaguar", "TIger", "Caracal", "Lion", "Serval"];

  for (const cat of cats){
   console.log(cat);
  }
  // both above and below loops work in the same way, iterate the cats array

  for(let i = 0; i < cats.length; i++ ){
    console.log(cats[i]);
  }


            // Array.map
/* Creates a new array with the changed items. */

const upperCats = cats.map(toUpper); // map() calls the cats.map() function once for each item in the array.
console.log(upperCats)

            // Array.filter
  /* tests each item in an array and creates a new collection containing only items that match. */

  function lCat(cat){
      return cat.startsWith("L");
  }
  
  const filteredCats = cats.filter(lCat);
  console.log(filteredCats);

  const results = document.querySelector("#results");

  function calculate(){
    for(let i = 1; i < 10; i++){
      const newResult = `${i} x ${i} = ${i * i} `;
      results.textContent += `${newResult}\n`;
    }
    results.textContent += "\nFinished!\n\n";
  }
   const calculateBtn = document.querySelector("#calculateBtn");
   const clearBtn = document.querySelector("#clear")

   calculateBtn.addEventListener("click", calculate);
   clearBtn.addEventListener("click", () => (results.textContent = ""));

   
  
   const contacts = [
    "Chris:2232322",
    "Sarah:3453456",
    "Bill:7654322",
    "Mary:9998769",
    "Dianne:9384975",
  ];

  const para = document.querySelector("#phonePara");
  const input = document.querySelector("#searchInput");
  const btn = document.querySelector("#searchBtn");

  btn.addEventListener("click", () => {
    const searchName = input.value.toLowerCase();
    input.value = "";
    input.focus();
    para.textContent = "";
    for (const contact of contacts){
      const splitContact = contact.split(":");
      if(splitContact[0].toLowerCase()=== searchName){
        para.textContent = `${splitContact[0]}'s number is ${splitContact[1]}`;
        break
      }
    }
     if(para.textContent === ""){
        para.textContent = "Contact not found"
     }
  });


