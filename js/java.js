// fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
//       .then(res => res.json())
//       .then(data => displayData(data))


// function displayData(post) {
//       for (const AllData in post) {
//             console.log(AllData);
//             }
// };

const loadPhone = async (searchPhone) => {
      const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchPhone}`);
      const data = await res.json();
      // console.log(data);
      displayPhones(data.data);

};
const displayPhones = phones => {
      const phoneContainer = document.getElementById('phone-container');
      phoneContainer.innerText = '';
      phones.forEach(phone =>{
            console.log(phone);
            //Create a div
            const phoneCard = document.createElement('div');
            phoneCard.classList = `card w-full bg-base-100 shadow-xl`
            phoneCard.innerHTML =
                  `
                   <figure class="px-10 pt-10">
                                    <img src="${phone.image}" alt="Shoes" class="rounded-xl " />
                              </figure>
                              <div class="card-body items-center text-center">
                                    <h2 class="card-title">${phone.phone_name}</h2>
                                    <p>If a dog chews shoes whose shoes does he choose?</p>
                                    <div class="card-actions">
                                          <button class="btn btn-primary">Buy Now</button>
                                    </div>
                              </div>
                  `;
            phoneContainer.appendChild(phoneCard);

            

      })
}

const buttonSearch = () => {
      const searchField = document.getElementById('search-field');
      const searchText = searchField.value;
      loadPhone(searchText);
};


loadPhone('iphone');
