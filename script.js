const cars = {
    "TAHOE": {
      img: "https://www.autooutlet.cz/wp-content/uploads/2024/12/web.png",
      services: {
        "Keramika": "$100",
        "Polirofka": "$90",
        "Tonirovka": "",
        "Salon laminatsiya": "",
        "Broni plyonka": "",
        "Shumka": "",
        "Ximchistka": ""
        
      }
    },
    "Gentra": {
      img: "https://fergana.media/siteapi/media/images/b502e6a6-1db1-4f80-a9ab-a51b703a42c2.png",
      services: {
        "Keramika": "$100",
        "Polirofka": "$90",
        "Tonirovka": "",
        "Salon laminatsiya": "",
        "Broni plyonka": "",
        "Shumka": "",
        "Ximchistka": ""
  
      }
    },
    "Cobalt": {
      img: "https://test.chevrolet.uz/assets/images/cobalt/colours/1.png",
      services: {
        "Keramika": "$100",
        "Polirofka": "$90",
        "Tonirovka": "",
        "Salon laminatsiya": "",
        "Broni plyonka": "",
        "Shumka": "",
        "Ximchistka": ""
      }
    },
    "Nexia 3": {
      img: "https://avtotexxizmat.uz/uploads/car-color/KK/KK/KA/1635147517.png",
      services: {
        "Keramika": "$100",
        "Polirofka": "$90",
        "Tonirovka": "",
        "Salon laminatsiya": "",
        "Broni plyonka": "",
        "Shumka": "",
        "Ximchistka": ""
      }
    },
    "Tracker": {
      img: "https://chevrolet.com.ph/wp-content/uploads/2022/08/tracker-Satin-Steel-Gray-Metallic-min.png",
      services: {
        "Keramika": "$100",
        "Polirofka": "$90",
        "Tonirovka": "",
        "Salon laminatsiya": "",
        "Broni plyonka": "",
        "Shumka": "",
        "Ximchistka": ""
  
      }
    },
    "Onix": {
      img: "https://chevrolet.uz/assets/images/onix/colors/01/2.png",
      services: {
        "Keramika": "$100",
        "Polirofka": "$90",
        "Tonirovka": "",
        "Salon laminatsiya": "",
        "Broni plyonka": "",
        "Shumka": "",
        "Ximchistka": ""
      }
    },
    "Travers": {
      img: "https://test.chevrolet.uz/assets/images/traverse/colors/1.png",
      services: {
        "Keramika": "$100",
        "Polirofka": "$90",
        "Tonirovka": "",
        "Salon laminatsiya": "",
        "Broni plyonka": "",
        "Shumka": "",
        "Ximchistka": ""
      },
      
    },

    "Malibu 2": {
        img: "https://di-uploads-pod2.dealerinspire.com/tonkinhillsborochevrolet/uploads/2024/08/mlp-img-top-2025-malibu.png",
        services: {
          "Keramika": "$100",
          "Polirofka": "$90",
          "Tonirovka": "",
          "Salon laminatsiya": "",
          "Broni plyonka": "",
          "Shumka": "",
          "Ximchistka": ""
        }
      },
    // ➕ Add more cars if you want
  };
  
  const carList = document.getElementById('car-list');
  const serviceDetails = document.getElementById('service-details');
  const carTitle = document.getElementById('car-title');
  const serviceList = document.getElementById('service-list');
  const carImage = document.getElementById('car-image');
  
  function showServices(carName) {
    const car = cars[carName];
    carTitle.textContent = carName;
    carImage.src = car.img;
    carImage.alt = carName;
  
    serviceList.innerHTML = '';
    for (let service in car.services) {
      const li = document.createElement('li');
      li.innerHTML = `
        <a href="service.html?car=${encodeURIComponent(carName)}&service=${encodeURIComponent(service)}" class="service-link">
          ${service} – ${car.services[service]}
        </a>
      `;
      serviceList.appendChild(li);
    }
  
    carList.style.display = 'none';
    serviceDetails.style.display = 'block';
  }
  
  function goBack() {
    serviceDetails.style.display = 'none';
    carList.style.display = 'flex';
  }
  
  // Render car cards
  for (let car in cars) {
    const card = document.createElement('div');
    card.className = 'car-card';
    card.innerHTML = `
      <img src="${cars[car].img}" alt="${car}" />
      <h3>${car}</h3>
    `;
    card.onclick = () => showServices(car);
    carList.appendChild(card);
  }
   