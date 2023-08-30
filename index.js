const handleCatagory = async () => {
    const res = await fetch("https://openapi.programming-hero.com/api/news/categories")
    const data = await res.json()
    

    const tabContainer = document.getElementById('tab-container')
    const news = data.data.news_category.slice(0,3);
    console.log(news);

    news.forEach((catagory) => {
        const div = document.createElement('div')
        div.innerHTML = `
        <a onclick = "handleShowNews('${catagory.category_id}')" class="tab">${catagory.category_name}</a>
        `
        tabContainer.appendChild(div)
    })
    
}
const handleShowNews = async (id) => {
    const res = await fetch(` https://openapi.programming-hero.com/api/news/category/${id}`);
    const data = await res.json();

    const cardContainer = document.getElementById('card-container')
    cardContainer.innerHTML = ''

    data?.data.forEach((newss) => {
        console.log(newss);
    const div = document.createElement('div')
    div.innerHTML = `
    <div class="card  bg-base-100 shadow-xl">
          <figure>
            <img
              src="${newss?.image_url
              }"
            />
          </figure>
          <div class="card-body">
            <h2 class="card-title">
             ${newss?.title.slice(0,40)}
              <div class="badge badge-secondary p-5">${newss?.rating?.badge}</div>
            </h2>
            <p>
            ${newss?.details.slice(0,50)}
            </p>
            <div class="card-footer flex justify-between mt-8">
              <div class="flex">
                <div>
                  <div class="avatar online">
                    <div class="w-14 rounded-full">
                      <img
                        src=${newss?.author?.img
                        }
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <h6>${newss?.author?.name
                  }</h6>
                  <small>2022-08-24 17:27:34</small>
                </div>
              </div>
              <div class="card-detaild-btn">
                <button
                  class="inline-block cursor-pointer rounded-md bg-gray-800 px-4 py-3 text-center text-sm font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-gray-900"
                >
                  Details
                </button>
              </div>
            </div>
          </div>
        </div>
        </div>
    `
    cardContainer.appendChild(div)

    })
   
}

const handleModal =



handleCatagory ()
handleShowNews('01')


