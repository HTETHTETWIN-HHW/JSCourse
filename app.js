document.addEventListener("DOMContentLoaded", () => {
  console.log("Hello");
  const h1TextDesign = document.querySelector("#h1_text");
  const LightDarkBtn = document.querySelector("#button");
  const ldBtn = document.querySelector("#ldbtn");
  const bodyBackground = document.querySelector("#body");
  const loading = document.querySelector('.loading');


  ldBtn.addEventListener("click", function () {
    bodyBackground.classList.toggle("bg-gray-800");
    if (ldBtn.innerHTML === "Light Mode") {
      ldBtn.innerHTML = "Dark Mode";
    } else {
      ldBtn.innerHTML = "Light Mode";
    }
  })

  // LightDarkBtn.addEventListener("click",function(){
  //     h1TextDesign.classList.toggle("text-yellow-400")
  // })

  const productListContainer = document.querySelector('.container');
  setTimeout(() => {
    loading.classList.add('hidden');
    productListContainer.classList.remove('hidden');
  }, 300);

  const showProducts = document.querySelector('.showProducts');

  fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then((data) => {
      console.log(data[0]);
      data.forEach((product) => {
        const list = document.createElement("div");
        list.innerHTML = `<div class="product-root p-5 border-3 border-blue-500 rounded-lg hover:shadow-2xl hover:translate-y-4 duration-500" style="cursor:pointer;"> 
        <p class="product-id" data-id=${product.id}>${product.id}</p>
        <p>${product.title}</p> <br>
        <img src = ${product.image}  class ="w-50 h-50"> <br>
        <p>${product.price}</p>
        <div class="flex justify-end">
        <button class=" viewDetail bg-blue-300 p-2 ">View Detail</button></div>
        </div>
        `;
        productListContainer.appendChild(list);
      })
    }
    ).then(() => {
      const viewDetailBtn = document.querySelectorAll('.viewDetail');
      viewDetailBtn.forEach((btn) => {
        btn.addEventListener('click', () => {
          console.log(btn.closest(".product-root").querySelector(".product-id").getAttribute("data-id"));
        });
      });
    });


});
