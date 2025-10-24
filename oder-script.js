
//Displaying menu items in the body of the online-order form 

document.addEventListener('DOMContentLoaded', () =>{
    fetchMenuItems()
})

async function fetchMenuItems() {
    try{
        const response = await fetch("menu.json");
        const menu = await response.json()
   
        displayMenu(menu) 
    }
    catch{
         document.getElementById('menu-container').innerHTML = `
            <p class="text-red-500 text-center col-span-full">
            Failed to load menu. Please try again later.
            </p>
             `
        console.error("Error fetching menu", error)
    }
}




 function displayMenu(items){
    const menuContainer = document.getElementById("menu-container") 
    for(let i=0; i<items.length; i++){
        const item = items[i]; 
        const muenuDiv = document.createElement('div');
            muenuDiv.className = "bg-stone-300 rounded-lg shadow-md overflow-hidden"
            muenuDiv.innerHTML = `
                <div class="p-3">
                    <h3 class="font-bold text-xl mb-2">${item.name}</h3>
                    <p class="text-gray-700 mb-2">${item.description}</p>
                    <p class="text-amber-700 font-bold">$${item.price.toFixed(2)}</p>
                </div>
            `
           
            menuContainer.appendChild(muenuDiv)
        }
}
