const list_of_destination = 
[{
    name: 'Palumara', 
    img: 'image/culinary/palumara.jpg',
    type: 'culinary',
},
{
    name: 'Pallubasa',
    img:'image/culinary/pallubasa.jpg',
    type: 'culinary',
},
{
    name: 'Pisang Ijo',
    img:'image/culinary/pisang ijo.jpg',
    type: 'culinary',
},
{
    name: 'Konro',
    img:'image/culinary/konro.jpg',
    type: 'culinary',
},
{
    name: 'Kapurung',
    img:'image/culinary/kapurung.jpg',
    type: 'culinary',
},
{
    name: 'Songkolo',
    img:'image/culinary/songkolo.jpg',
    type: 'culinary',
},
{
    name: 'Balla Lompoa',
    img:'image/heritage/balla-lompoa.jpg',
    type: 'heritage',
    loc: 'Gowa'
},
{
    name: 'Kain Tenun',
    img:'image/heritage/kain-tenun.jpg',
    type: 'heritage',
    loc: 'Sengkang'
},
{
    name: 'Kapal Phinisi',
    img:'image/heritage/kapal-phinisi.jpg',
    type: 'heritage',
    loc: 'Gowa'
},
{
    name: 'Sastra Kuno Lagaligo',
    img:'image/heritage/lagaligo.jpg',
    type: 'heritage',
    loc: 'Makassar'
},
{
    name: 'Manene',
    img:'image/heritage/manene.jpg',
    type: 'heritage',
    loc: 'Toraja'
},
{
    name: 'Rumah Tongkonan',
    img:'image/heritage/toraja.jpg',
    type: 'heritage',
    loc: 'Toraja'
},
{
    name: 'Air Terjun Laliako',
    img:'image/nature/air-terjun-laliako.jpeg',
    type: 'nature',
    loc: 'Sinjai'
},
{
    name: 'Air Terjun Takapala',
    img:'image/nature/air-terjun-takapala.jpg',
    type: 'nature',
    loc: 'Gowa'
},
{
    name: 'Bantimurung',
    img:'image/nature/bantimurung.jpg',
    type: 'nature',
    loc: 'Maros'
},
{
    name:'Leang-leang',
    img:'image/nature/leang-leang.jpg',
    type: 'nature',
    loc:'Maros'
},
{
    name: 'Pulau Samalona',
    img:'image/nature/pulau-samalona.jpg',
    type: 'nature',
    loc: 'Barru'
}, 
{
    name:'Rammang-rammang',
    img:'image/nature/rammang-rammang.png',
    type: 'nature',
    loc:'Maros'
}
]

const menu = document.querySelector('.menu');
const list_menu = document.querySelector('ul#nav');
menu.addEventListener('click', function(e){
    e.preventDefault();
    list_menu.classList.toggle('visible');
})


document.addEventListener('scroll', function(e){
    const scrollTop = window.scrollY;
    if(scrollTop > 100){
        document.querySelector('header').classList.add('scroll');
    }else{
        document.querySelector('header').classList.remove('scroll');
    }
})

// const load = document.querySelector('#loader');
// load.style.display = 'none';


const renderData = () =>{
    const list_destination = document.querySelector('.sub-content');
    list_destination.innerHTML = '';
    data.forEach(function(item){
        const list_item = document.createElement('figure');
        const loc = item.hasOwnProperty('loc') ? item.loc : '';
        list_item.classList.add('sub-fig');
        list_item.innerHTML = `
        <img class="sub-img" src="${item.img}"></img>
        <figcaption class="sub-cap">${item.name}<br/>${loc}</figcaption>`
        list_destination.appendChild(list_item);
        
    })
}


const renderLoading = (state) =>{
    const loading = document.querySelector('#loader');
    // const line = document.querySelector('#line');

    if(state){
        loading.style.display = 'block';
        // line.style.display = 'none';
        const list_destination = document.querySelector('.sub-content');
        list_destination.innerHTML = ''
    }else{
        loading.style.display = 'none';
    }
}
renderLoading(false)

const culinary_button = document.querySelector('#culinary');
const heritage_button = document.querySelector('#heritage');
const nature_button = document.querySelector('#nature');
let data = list_of_destination;

culinary_button.addEventListener('click', function(e){
    e.preventDefault();
    document.querySelector('#culinary').classList.add('active');
    document.querySelector('#heritage').classList.remove('active');
    document.querySelector('#nature').classList.remove('active');
    data = list_of_destination.filter(function(item){
        return item.type === 'culinary';
    })
    renderLoading(true);
    setTimeout(() => {
        renderLoading(false);
        renderData();
    }, 1500);
})



heritage_button.addEventListener('click', function(e){
    e.preventDefault();
    document.querySelector('#culinary').classList.remove('active');
    document.querySelector('#heritage').classList.add('active');
    document.querySelector('#nature').classList.remove('active');
    data = list_of_destination.filter(function(item){
        return item.type === 'heritage';
    })
    renderLoading(true);
    setTimeout(() => {
        renderLoading(false);
        renderData();
    }, 1500);
})

nature_button.addEventListener('click', function(e){
    e.preventDefault();
    document.querySelector('#culinary').classList.remove('active');
    document.querySelector('#heritage').classList.remove('active');
    document.querySelector('#nature').classList.add('active');
    data = list_of_destination.filter(function(item){
        return item.type === 'nature';
    })
    renderLoading(true);
    setTimeout(() => {
        renderLoading(false);
        renderData();
    }, 1500);
})

