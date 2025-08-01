const url = new URLSearchParams(window.location.search);
const car = url.get('car');
const service = url.get('service');

const serviceData = {
    "Cobalt": {
      "Keramika": [
        {
          name: "Keramika",
          images: [
            "IMG_1194.jpg",
            "IMG_1195.jpg",
            "IMG_1196.jpg",
            "IMG_1197.jpg",
          ],
          price: "$300",
          date: "5 soat",
          video: "IMG_7026.MOV"
        },
        

      ],
      "Polirofka": [
        {
          name: "Polirofka",
          images: [
            "IMG_1194.jpg",
            "IMG_1195.jpg",
            "IMG_1196.jpg",
            "IMG_1197.jpg",
          ],
          price: "$300",
          date: "5 soat",
          video: "IMG_7026.MOV"
        },
        
      ], "Tonirovka": [
        {
          name: " GLOBLE AIRIX",
          images: [
            "IMG_1205.",
            "https://www.seat.ps/content/dam/public/seat-website/seat-cars/car-maintenance/article-single-image-maintenance/seat-services-and-repair-maintenance.jpg",
            "https://www.seat.ps/content/dam/public/seat-website/seat-cars/car-maintenance/article-single-image-maintenance/seat-services-and-repair-maintenance.jpg"
          ],
          price: "$150",
          date: "2 soat",
          video: "IMG_7242.MOV"
        },
        {
          name: " GLOBLE ATEL",
          images: [
            "https://www.seat.ps/content/dam/public/seat-website/seat-cars/car-maintenance/article-single-image-maintenance/seat-services-and-repair-maintenance.jpg",
            "https://www.seat.ps/content/dam/public/seat-website/seat-cars/car-maintenance/article-single-image-maintenance/seat-services-and-repair-maintenance.jpg",
            "https://www.seat.ps/content/dam/public/seat-website/seat-cars/car-maintenance/article-single-image-maintenance/seat-services-and-repair-maintenance.jpg"
          ],
          price: "$100",
          date: "2 soat",
          video: "IMG_7242.MOV"
        },
        
      ],
      "Salon laminatsiya": [
        {
          name: " Mativiy kareysky plyonka",
          images: [
            "https://www.seat.ps/content/dam/public/seat-website/seat-cars/car-maintenance/article-single-image-maintenance/seat-services-and-repair-maintenance.jpg",
            "https://www.seat.ps/content/dam/public/seat-website/seat-cars/car-maintenance/article-single-image-maintenance/seat-services-and-repair-maintenance.jpg",
            "https://www.seat.ps/content/dam/public/seat-website/seat-cars/car-maintenance/article-single-image-maintenance/seat-services-and-repair-maintenance.jpg"
          ],
          price: "40$",
          date: "2 soat",
          video: "IMG_7242.MOV"
        },
      ],
      "Broni plyonka": [
        {
          name: " Mativiy kareysky plyonka",
          images: [
            "https://www.seat.ps/content/dam/public/seat-website/seat-cars/car-maintenance/article-single-image-maintenance/seat-services-and-repair-maintenance.jpg",
            "https://www.seat.ps/content/dam/public/seat-website/seat-cars/car-maintenance/article-single-image-maintenance/seat-services-and-repair-maintenance.jpg",
            "https://www.seat.ps/content/dam/public/seat-website/seat-cars/car-maintenance/article-single-image-maintenance/seat-services-and-repair-maintenance.jpg"
          ],
          price: "40$",
          date: "2 soat",
          video: "IMG_7242.MOV"
        },
      ],
      "Shumka": [
        {
          name: "Noisoff BEE STandart",
          images: [
            "IMG_9276 2.jpg",
            "https://www.seat.ps/content/dam/public/seat-website/seat-cars/car-maintenance/article-single-image-maintenance/seat-services-and-repair-maintenance.jpg",
            "https://www.seat.ps/content/dam/public/seat-website/seat-cars/car-maintenance/article-single-image-maintenance/seat-services-and-repair-maintenance.jpg"
          ],
          price: "40$",
          date: "2 soat",
          video: "IMG_7242.MOV"
        },
        {
          name: "Noisoff BEE FULL",
          images: [
            "https://www.seat.ps/content/dam/public/seat-website/seat-cars/car-maintenance/article-single-image-maintenance/seat-services-and-repair-maintenance.jpg",
            "https://www.seat.ps/content/dam/public/seat-website/seat-cars/car-maintenance/article-single-image-maintenance/seat-services-and-repair-maintenance.jpg",
            "https://www.seat.ps/content/dam/public/seat-website/seat-cars/car-maintenance/article-single-image-maintenance/seat-services-and-repair-maintenance.jpg"
          ],
          price: "40$",
          date: "2 soat",
          video: "IMG_7242.MOV"
        },
        {
          name: "Airo sell 600 Standart",
          images: [
            "https://www.seat.ps/content/dam/public/seat-website/seat-cars/car-maintenance/article-single-image-maintenance/seat-services-and-repair-maintenance.jpg",
            "https://www.seat.ps/content/dam/public/seat-website/seat-cars/car-maintenance/article-single-image-maintenance/seat-services-and-repair-maintenance.jpg",
            "https://www.seat.ps/content/dam/public/seat-website/seat-cars/car-maintenance/article-single-image-maintenance/seat-services-and-repair-maintenance.jpg"
          ],
          price: "40$",
          date: "2 soat",
          video: "IMG_7242.MOV"
        },
        {
          name: "Airo sell 600 Full",
          images: [
            "https://www.seat.ps/content/dam/public/seat-website/seat-cars/car-maintenance/article-single-image-maintenance/seat-services-and-repair-maintenance.jpg",
            "https://www.seat.ps/content/dam/public/seat-website/seat-cars/car-maintenance/article-single-image-maintenance/seat-services-and-repair-maintenance.jpg",
            "https://www.seat.ps/content/dam/public/seat-website/seat-cars/car-maintenance/article-single-image-maintenance/seat-services-and-repair-maintenance.jpg"
          ],
          price: "40$",
          date: "2 soat",
          video: "IMG_7242.MOV"
        },
      ],
      "Ximchistka": [
        {
          name: " Noisoff BEE Full",
          images: [
            "https://www.seat.ps/content/dam/public/seat-website/seat-cars/car-maintenance/article-single-image-maintenance/seat-services-and-repair-maintenance.jpg",
            "https://www.seat.ps/content/dam/public/seat-website/seat-cars/car-maintenance/article-single-image-maintenance/seat-services-and-repair-maintenance.jpg",
            "https://www.seat.ps/content/dam/public/seat-website/seat-cars/car-maintenance/article-single-image-maintenance/seat-services-and-repair-maintenance.jpg"
          ],
          price: "40$",
          date: "2 soat",
          video: "IMG_7242.MOV"
        },
      ],
    },
  
    "Gentra": {
      "Keramika": [
        
       
        {
          name: "Premium Keramika",
          images: [
            "https://www.seat.ps/content/dam/public/seat-website/seat-cars/car-maintenance/article-single-image-maintenance/seat-services-and-repair-maintenance.jpg",
            "https://www.seat.ps/content/dam/public/seat-website/seat-cars/car-maintenance/article-single-image-maintenance/seat-services-and-repair-maintenance.jpg",
            "https://www.seat.ps/content/dam/public/seat-website/seat-cars/car-maintenance/article-single-image-maintenance/seat-services-and-repair-maintenance.jpg"
          ],
          price: "$180",
          date: "3 kun",
          video: "IMG_7242.mp4"
        },
        {
          name: "Premium Keramika",
          images: [
            "https://www.seat.ps/content/dam/public/seat-website/seat-cars/car-maintenance/article-single-image-maintenance/seat-services-and-repair-maintenance.jpg",
            "https://www.seat.ps/content/dam/public/seat-website/seat-cars/car-maintenance/article-single-image-maintenance/seat-services-and-repair-maintenance.jpg",
            "https://www.seat.ps/content/dam/public/seat-website/seat-cars/car-maintenance/article-single-image-maintenance/seat-services-and-repair-maintenance.jpg",
            "https://www.seat.ps/content/dam/public/seat-website/seat-cars/car-maintenance/article-single-image-maintenance/seat-services-and-repair-maintenance.jpg"
          ],
          price: "$180",
          date: "3 kun",
          video: "IMG_7242.mp4"
        }
      ],
      "Polirofka": [
        {
          name: "Standard Keramika",
          images: [
            "https://www.seat.ps/content/dam/public/seat-website/seat-cars/car-maintenance/article-single-image-maintenance/seat-services-and-repair-maintenance.jpg",
            "https://www.seat.ps/content/dam/public/seat-website/seat-cars/car-maintenance/article-single-image-maintenance/seat-services-and-repair-maintenance.jpg",
            "https://www.seat.ps/content/dam/public/seat-website/seat-cars/car-maintenance/article-single-image-maintenance/seat-services-and-repair-maintenance.jpg"
          ],
          price: "$130",
          date: "2 kun",
          video: "IMG_7242.MOV"
        },
        {
          name: "Premium Keramika",
          images: [
            "https://www.seat.ps/content/dam/public/seat-website/seat-cars/car-maintenance/article-single-image-maintenance/seat-services-and-repair-maintenance.jpg",
            "https://www.seat.ps/content/dam/public/seat-website/seat-cars/car-maintenance/article-single-image-maintenance/seat-services-and-repair-maintenance.jpg",
            "https://www.seat.ps/content/dam/public/seat-website/seat-cars/car-maintenance/article-single-image-maintenance/seat-services-and-repair-maintenance.jpg"
          ],
          price: "$180",
          date: "3 kun",
          video: "IMG_7242.mp4"
        },
        {
          name: "Premium Keramika",
          images: [
            "https://www.seat.ps/content/dam/public/seat-website/seat-cars/car-maintenance/article-single-image-maintenance/seat-services-and-repair-maintenance.jpg",
            "https://www.seat.ps/content/dam/public/seat-website/seat-cars/car-maintenance/article-single-image-maintenance/seat-services-and-repair-maintenance.jpg",
            "https://www.seat.ps/content/dam/public/seat-website/seat-cars/car-maintenance/article-single-image-maintenance/seat-services-and-repair-maintenance.jpg"
          ],
          price: "$180",
          date: "3 kun",
          video: "IMG_7242.mp4"
        },
        {
          name: "Premium Keramika",
          images: [
            "https://www.seat.ps/content/dam/public/seat-website/seat-cars/car-maintenance/article-single-image-maintenance/seat-services-and-repair-maintenance.jpg",
            "https://www.seat.ps/content/dam/public/seat-website/seat-cars/car-maintenance/article-single-image-maintenance/seat-services-and-repair-maintenance.jpg",
            "https://www.seat.ps/content/dam/public/seat-website/seat-cars/car-maintenance/article-single-image-maintenance/seat-services-and-repair-maintenance.jpg",
            "https://www.seat.ps/content/dam/public/seat-website/seat-cars/car-maintenance/article-single-image-maintenance/seat-services-and-repair-maintenance.jpg"
          ],
          price: "$180",
          date: "3 kun",
          video: "IMG_7242.mp4"
        }
      ],
      "Salon laminatsia": [
        {
          name: "Standard Keramika",
          images: [
            "https://www.seat.ps/content/dam/public/seat-website/seat-cars/car-maintenance/article-single-image-maintenance/seat-services-and-repair-maintenance.jpg",
            "https://www.seat.ps/content/dam/public/seat-website/seat-cars/car-maintenance/article-single-image-maintenance/seat-services-and-repair-maintenance.jpg",
            "https://www.seat.ps/content/dam/public/seat-website/seat-cars/car-maintenance/article-single-image-maintenance/seat-services-and-repair-maintenance.jpg"
          ],
          price: "$130",
          date: "2 kun",
          video: "IMG_7242.MOV"
        },
        {
          name: "Premium Keramika",
          images: [
            "https://www.seat.ps/content/dam/public/seat-website/seat-cars/car-maintenance/article-single-image-maintenance/seat-services-and-repair-maintenance.jpg",
            "https://www.seat.ps/content/dam/public/seat-website/seat-cars/car-maintenance/article-single-image-maintenance/seat-services-and-repair-maintenance.jpg",
            "https://www.seat.ps/content/dam/public/seat-website/seat-cars/car-maintenance/article-single-image-maintenance/seat-services-and-repair-maintenance.jpg"
          ],
          price: "$180",
          date: "3 kun",
          video: "IMG_7242.mp4"
        },
        {
          name: "Premium Keramika",
          images: [
            "https://www.seat.ps/content/dam/public/seat-website/seat-cars/car-maintenance/article-single-image-maintenance/seat-services-and-repair-maintenance.jpg",
            "https://www.seat.ps/content/dam/public/seat-website/seat-cars/car-maintenance/article-single-image-maintenance/seat-services-and-repair-maintenance.jpg",
            "https://www.seat.ps/content/dam/public/seat-website/seat-cars/car-maintenance/article-single-image-maintenance/seat-services-and-repair-maintenance.jpg"
          ],
          price: "$180",
          date: "3 kun",
          video: "IMG_7242.mp4"
        },
        {
          name: "Premium Keramika",
          images: [
            "https://www.seat.ps/content/dam/public/seat-website/seat-cars/car-maintenance/article-single-image-maintenance/seat-services-and-repair-maintenance.jpg",
            "https://www.seat.ps/content/dam/public/seat-website/seat-cars/car-maintenance/article-single-image-maintenance/seat-services-and-repair-maintenance.jpg",
            "https://www.seat.ps/content/dam/public/seat-website/seat-cars/car-maintenance/article-single-image-maintenance/seat-services-and-repair-maintenance.jpg",
            "https://www.seat.ps/content/dam/public/seat-website/seat-cars/car-maintenance/article-single-image-maintenance/seat-services-and-repair-maintenance.jpg"
          ],
          price: "$180",
          date: "3 kun",
          video: "IMG_7242.mp4"
        }
      ],
      "Keramika": [
        {
          name: "Standard Keramika",
          images: [
            "https://www.seat.ps/content/dam/public/seat-website/seat-cars/car-maintenance/article-single-image-maintenance/seat-services-and-repair-maintenance.jpg",
            "https://www.seat.ps/content/dam/public/seat-website/seat-cars/car-maintenance/article-single-image-maintenance/seat-services-and-repair-maintenance.jpg",
            "https://www.seat.ps/content/dam/public/seat-website/seat-cars/car-maintenance/article-single-image-maintenance/seat-services-and-repair-maintenance.jpg"
          ],
          price: "$130",
          date: "2 kun",
          video: "IMG_7242.MOV"
        },
        {
          name: "Premium Keramika",
          images: [
            "https://www.seat.ps/content/dam/public/seat-website/seat-cars/car-maintenance/article-single-image-maintenance/seat-services-and-repair-maintenance.jpg",
            "https://www.seat.ps/content/dam/public/seat-website/seat-cars/car-maintenance/article-single-image-maintenance/seat-services-and-repair-maintenance.jpg",
            "https://www.seat.ps/content/dam/public/seat-website/seat-cars/car-maintenance/article-single-image-maintenance/seat-services-and-repair-maintenance.jpg"
          ],
          price: "$180",
          date: "3 kun",
          video: "IMG_7242.mp4"
        },
        {
          name: "Premium Keramika",
          images: [
            "https://www.seat.ps/content/dam/public/seat-website/seat-cars/car-maintenance/article-single-image-maintenance/seat-services-and-repair-maintenance.jpg",
            "https://www.seat.ps/content/dam/public/seat-website/seat-cars/car-maintenance/article-single-image-maintenance/seat-services-and-repair-maintenance.jpg",
            "https://www.seat.ps/content/dam/public/seat-website/seat-cars/car-maintenance/article-single-image-maintenance/seat-services-and-repair-maintenance.jpg"
          ],
          price: "$180",
          date: "3 kun",
          video: "IMG_7242.mp4"
        },
        {
          name: "Premium Keramika",
          images: [
            "https://www.seat.ps/content/dam/public/seat-website/seat-cars/car-maintenance/article-single-image-maintenance/seat-services-and-repair-maintenance.jpg",
            "https://www.seat.ps/content/dam/public/seat-website/seat-cars/car-maintenance/article-single-image-maintenance/seat-services-and-repair-maintenance.jpg",
            "https://www.seat.ps/content/dam/public/seat-website/seat-cars/car-maintenance/article-single-image-maintenance/seat-services-and-repair-maintenance.jpg",
            "https://www.seat.ps/content/dam/public/seat-website/seat-cars/car-maintenance/article-single-image-maintenance/seat-services-and-repair-maintenance.jpg"
          ],
          price: "$180",
          date: "3 kun",
          video: "IMG_7242.mp4"
        }
      ],
      "Broni plyonka": [
        {
          name: "Standard Keramika",
          images: [
            "https://www.seat.ps/content/dam/public/seat-website/seat-cars/car-maintenance/article-single-image-maintenance/seat-services-and-repair-maintenance.jpg",
            "https://www.seat.ps/content/dam/public/seat-website/seat-cars/car-maintenance/article-single-image-maintenance/seat-services-and-repair-maintenance.jpg",
            "https://www.seat.ps/content/dam/public/seat-website/seat-cars/car-maintenance/article-single-image-maintenance/seat-services-and-repair-maintenance.jpg"
          ],
          price: "$130",
          date: "2 kun",
          video: "IMG_7242.MOV"
        },
        {
          name: "Premium Keramika",
          images: [
            "https://www.seat.ps/content/dam/public/seat-website/seat-cars/car-maintenance/article-single-image-maintenance/seat-services-and-repair-maintenance.jpg",
            "https://www.seat.ps/content/dam/public/seat-website/seat-cars/car-maintenance/article-single-image-maintenance/seat-services-and-repair-maintenance.jpg",
            "https://www.seat.ps/content/dam/public/seat-website/seat-cars/car-maintenance/article-single-image-maintenance/seat-services-and-repair-maintenance.jpg"
          ],
          price: "$180",
          date: "3 kun",
          video: "IMG_7242.mp4"
        },
        {
          name: "Premium Keramika",
          images: [
            "https://www.seat.ps/content/dam/public/seat-website/seat-cars/car-maintenance/article-single-image-maintenance/seat-services-and-repair-maintenance.jpg",
            "https://www.seat.ps/content/dam/public/seat-website/seat-cars/car-maintenance/article-single-image-maintenance/seat-services-and-repair-maintenance.jpg",
            "https://www.seat.ps/content/dam/public/seat-website/seat-cars/car-maintenance/article-single-image-maintenance/seat-services-and-repair-maintenance.jpg"
          ],
          price: "$180",
          date: "3 kun",
          video: "IMG_7242.mp4"
        },
        {
          name: "Premium Keramika",
          images: [
            "https://www.seat.ps/content/dam/public/seat-website/seat-cars/car-maintenance/article-single-image-maintenance/seat-services-and-repair-maintenance.jpg",
            "https://www.seat.ps/content/dam/public/seat-website/seat-cars/car-maintenance/article-single-image-maintenance/seat-services-and-repair-maintenance.jpg",
            "https://www.seat.ps/content/dam/public/seat-website/seat-cars/car-maintenance/article-single-image-maintenance/seat-services-and-repair-maintenance.jpg",
            "https://www.seat.ps/content/dam/public/seat-website/seat-cars/car-maintenance/article-single-image-maintenance/seat-services-and-repair-maintenance.jpg"
          ],
          price: "$180",
          date: "3 kun",
          video: "IMG_7242.mp4"
        }
      ],
      "Shumka": [
        {
          name: "Standard Keramika",
          images: [
            "https://www.seat.ps/content/dam/public/seat-website/seat-cars/car-maintenance/article-single-image-maintenance/seat-services-and-repair-maintenance.jpg",
            "https://www.seat.ps/content/dam/public/seat-website/seat-cars/car-maintenance/article-single-image-maintenance/seat-services-and-repair-maintenance.jpg",
            "https://www.seat.ps/content/dam/public/seat-website/seat-cars/car-maintenance/article-single-image-maintenance/seat-services-and-repair-maintenance.jpg"
          ],
          price: "$130",
          date: "2 kun",
          video: "IMG_7242.MOV"
        },
        {
          name: "Premium Keramika",
          images: [
            "https://www.seat.ps/content/dam/public/seat-website/seat-cars/car-maintenance/article-single-image-maintenance/seat-services-and-repair-maintenance.jpg",
            "https://www.seat.ps/content/dam/public/seat-website/seat-cars/car-maintenance/article-single-image-maintenance/seat-services-and-repair-maintenance.jpg",
            "https://www.seat.ps/content/dam/public/seat-website/seat-cars/car-maintenance/article-single-image-maintenance/seat-services-and-repair-maintenance.jpg"
          ],
          price: "$180",
          date: "3 kun",
          video: "IMG_7242.mp4"
        },
        {
          name: "Premium Keramika",
          images: [
            "https://www.seat.ps/content/dam/public/seat-website/seat-cars/car-maintenance/article-single-image-maintenance/seat-services-and-repair-maintenance.jpg",
            "https://www.seat.ps/content/dam/public/seat-website/seat-cars/car-maintenance/article-single-image-maintenance/seat-services-and-repair-maintenance.jpg",
            "https://www.seat.ps/content/dam/public/seat-website/seat-cars/car-maintenance/article-single-image-maintenance/seat-services-and-repair-maintenance.jpg"
          ],
          price: "$180",
          date: "3 kun",
          video: "IMG_7242.mp4"
        },
        {
          name: "Premium Keramika",
          images: [
            "https://www.seat.ps/content/dam/public/seat-website/seat-cars/car-maintenance/article-single-image-maintenance/seat-services-and-repair-maintenance.jpg",
            "https://www.seat.ps/content/dam/public/seat-website/seat-cars/car-maintenance/article-single-image-maintenance/seat-services-and-repair-maintenance.jpg",
            "https://www.seat.ps/content/dam/public/seat-website/seat-cars/car-maintenance/article-single-image-maintenance/seat-services-and-repair-maintenance.jpg",
            "https://www.seat.ps/content/dam/public/seat-website/seat-cars/car-maintenance/article-single-image-maintenance/seat-services-and-repair-maintenance.jpg"
          ],
          price: "$180",
          date: "3 kun",
          video: "IMG_7242.mp4"
        }
      ],
      "Ximchistka": [
        {
          name: "Standard Keramika",
          images: [
            "https://www.seat.ps/content/dam/public/seat-website/seat-cars/car-maintenance/article-single-image-maintenance/seat-services-and-repair-maintenance.jpg",
            "https://www.seat.ps/content/dam/public/seat-website/seat-cars/car-maintenance/article-single-image-maintenance/seat-services-and-repair-maintenance.jpg",
            "https://www.seat.ps/content/dam/public/seat-website/seat-cars/car-maintenance/article-single-image-maintenance/seat-services-and-repair-maintenance.jpg"
          ],
          price: "$130",
          date: "2 kun",
          video: "IMG_7242.MOV"
        },
        {
          name: "Premium Keramika",
          images: [
            "https://www.seat.ps/content/dam/public/seat-website/seat-cars/car-maintenance/article-single-image-maintenance/seat-services-and-repair-maintenance.jpg",
            "https://www.seat.ps/content/dam/public/seat-website/seat-cars/car-maintenance/article-single-image-maintenance/seat-services-and-repair-maintenance.jpg",
            "https://www.seat.ps/content/dam/public/seat-website/seat-cars/car-maintenance/article-single-image-maintenance/seat-services-and-repair-maintenance.jpg"
          ],
          price: "$180",
          date: "3 kun",
          video: "IMG_7242.mp4"
        },
        {
          name: "Premium Keramika",
          images: [
            "https://www.seat.ps/content/dam/public/seat-website/seat-cars/car-maintenance/article-single-image-maintenance/seat-services-and-repair-maintenance.jpg",
            "https://www.seat.ps/content/dam/public/seat-website/seat-cars/car-maintenance/article-single-image-maintenance/seat-services-and-repair-maintenance.jpg",
            "https://www.seat.ps/content/dam/public/seat-website/seat-cars/car-maintenance/article-single-image-maintenance/seat-services-and-repair-maintenance.jpg"
          ],
          price: "$180",
          date: "3 kun",
          video: "IMG_7242.mp4"
        },
        {
          name: "Premium Keramika",
          images: [
            "https://www.seat.ps/content/dam/public/seat-website/seat-cars/car-maintenance/article-single-image-maintenance/seat-services-and-repair-maintenance.jpg",
            "https://www.seat.ps/content/dam/public/seat-website/seat-cars/car-maintenance/article-single-image-maintenance/seat-services-and-repair-maintenance.jpg",
            "https://www.seat.ps/content/dam/public/seat-website/seat-cars/car-maintenance/article-single-image-maintenance/seat-services-and-repair-maintenance.jpg",
            "https://www.seat.ps/content/dam/public/seat-website/seat-cars/car-maintenance/article-single-image-maintenance/seat-services-and-repair-maintenance.jpg"
          ],
          price: "$180",
          date: "3 kun",
          video: "IMG_7242.mp4"
        }
      ]
    },

    "Tracker": {
        
        
      "Keramika": [
        {
          name: "Standard Keramika",
          images: [
            "https://www.seat.ps/content/dam/public/seat-website/seat-cars/car-maintenance/article-single-image-maintenance/seat-services-and-repair-maintenance.jpg",
            "https://www.seat.ps/content/dam/public/seat-website/seat-cars/car-maintenance/article-single-image-maintenance/seat-services-and-repair-maintenance.jpg",
            "https://www.seat.ps/content/dam/public/seat-website/seat-cars/car-maintenance/article-single-image-maintenance/seat-services-and-repair-maintenance.jpg"
          ],
          price: "$130",
          date: "2 kun",
          video: "IMG_7242.MOV"
        },
        {
          name: "Premium Keramika",
          images: [
            "https://www.seat.ps/content/dam/public/seat-website/seat-cars/car-maintenance/article-single-image-maintenance/seat-services-and-repair-maintenance.jpg",
            "https://www.seat.ps/content/dam/public/seat-website/seat-cars/car-maintenance/article-single-image-maintenance/seat-services-and-repair-maintenance.jpg",
            "https://www.seat.ps/content/dam/public/seat-website/seat-cars/car-maintenance/article-single-image-maintenance/seat-services-and-repair-maintenance.jpg"
          ],
          price: "$180",
          date: "3 kun",
          video: "IMG_7242.mp4"
        },
        {
          name: "Premium Keramika",
          images: [
            "https://www.seat.ps/content/dam/public/seat-website/seat-cars/car-maintenance/article-single-image-maintenance/seat-services-and-repair-maintenance.jpg",
            "https://www.seat.ps/content/dam/public/seat-website/seat-cars/car-maintenance/article-single-image-maintenance/seat-services-and-repair-maintenance.jpg",
            "https://www.seat.ps/content/dam/public/seat-website/seat-cars/car-maintenance/article-single-image-maintenance/seat-services-and-repair-maintenance.jpg"
          ],
          price: "$180",
          date: "3 kun",
          video: "IMG_7242.mp4"
        },
        {
          name: "Premium Keramika",
          images: [
            "https://www.seat.ps/content/dam/public/seat-website/seat-cars/car-maintenance/article-single-image-maintenance/seat-services-and-repair-maintenance.jpg",
            "https://www.seat.ps/content/dam/public/seat-website/seat-cars/car-maintenance/article-single-image-maintenance/seat-services-and-repair-maintenance.jpg",
            "https://www.seat.ps/content/dam/public/seat-website/seat-cars/car-maintenance/article-single-image-maintenance/seat-services-and-repair-maintenance.jpg",
            "https://www.seat.ps/content/dam/public/seat-website/seat-cars/car-maintenance/article-single-image-maintenance/seat-services-and-repair-maintenance.jpg"
          ],
          price: "$180",
          date: "3 kun",
          video: "IMG_7242.mp4"
        }
      ],
      "Polirovka": [
      {
        name: "Standard Polirovka",
        images: [
          "https://example.com/image1.jpg",
          "https://example.com/image2.jpg",
          "https://example.com/image3.jpg"
        ],
        price: "$100",
        date: "1 kun",
        video: "polirovka_video.mp4"
      },
      {
        name: "Premium Polirovka",
        images: [
          "https://example.com/image4.jpg",
          "https://example.com/image5.jpg",
          "https://example.com/image6.jpg"
        ],
        price: "$150",
        date: "2 kun",
        video: "polirovka_premium.mp4"
      }
    ]
      
    },
    


  };
  

document.getElementById('service-name').textContent = service;
const container = document.getElementById('service-container');
const options = serviceData[car][service];

options.forEach(opt => {
  const card = document.createElement('div');
  card.className = 'service-card';

  let imageHTML = '';
  opt.images.forEach(img => {
    imageHTML += `<img src="${img}" alt="${opt.name} rasmi">`;
  });

  const videoHTML = opt.video ? `
    <video controls width="100%" style="border-radius: 8px; margin-top: 10px;">
      <source src="${opt.video}" type="video/mp4">
      Sizning brauzeringiz video formatini qo‘llab-quvvatlamaydi.
    </video>` : '';

  card.innerHTML = `
    <div class="image-gallery">${imageHTML}</div>
    <h3>${opt.name}</h3>
    <p>Narxi: ${opt.price}</p>
    <p>Bajarilish muddati: ${opt.date}</p>
    ${videoHTML}
  `;

  container.appendChild(card);
});