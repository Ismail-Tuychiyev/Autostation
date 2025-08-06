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
            "IMG_0295 2.PNG",
            "IMG_0296.PNG",
            "IMG_0299 2.PNG",
            "IMG_0306.jpg",
          ],
          price: "$150",
          date: "2 soat",
          video: "IMG_7242.MOV"
        },
        {
          name: " GLOBLE ATEL",
          images: [
            "IMG_0295 2.PNG",
            "IMG_0296.PNG",
            "IMG_0299 2.PNG",
            "IMG_0306.jpg",
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
           "IMG_0301.PNG",
            "IMG_0302.PNG",
            "IMG_0304 2.PNG",
            "IMG_0305.PNG",
          ],
          price: "40$",
          date: "2 soat",
          video: "IMG_7242.MOV"
        },
      ],
     "Broni plyonka": [
    {
      name: "Material/Option",
      images: [
        "IMG_0338.jpg",
        "IMG_0339.jpg",
        "IMG_0340.jpg",
        "IMG_0341.jpg",
      ],
      price: "$___",
      date: "___",
      video: "VIDEO.MOV"
    },
  ],
      "Shumka": [
        {
          name: "Noisoff BEE STandart",
          images: [
            "IMG_9276 2.jpg",
            "IMG_9275 2.PNG",
            "IMG_9278 2.PNG",
            "IMG_9278 2.PNG",
          ],
          price: "400$",
          date: "10 soat",
          video: "IMG_7242.MOV"
        },
        {
          name: "Noisoff BEE FULL",
          images: [
            "IMG_9275 2.PNG",
            "IMG_9276 2.jpg",
            "IMG_9278 2.PNG",
            "IMG_9277 2.jpg",
          ],
          price: "500$",
          date: "2 soat",
          video: "IMG_7242.MOV"
        },
        {
          name: "Airo sell 600 Standart",
          images: [
           "IMG_0309.JPG",
            "IMG_0308.jpg",
            "IMG_1303.jpg",
            "IMG_1304.jpg",
            
            
          ],
          price: "400$",
          date: "2 soat",
          video: "IMG_7242.MOV"
        },
        {
          name: "Airo sell 600 Full",
          images: [
            "IMG_0307.PNG",
            "IMG_0309.JPG",
            "IMG_1303.jpg",
            "IMG_0311.jpg",
          ],
          price: "400$",
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
          name: "Standard Keramika",
          images: [
            "IMG_0314.jpg",
            "IMG_0312.jpg",
            "IMG_0315.jpg",
            "IMG_0313.jpg"
          ],
          price: "$130",
          date: "2 kun",
          video: "5video.mp4"
        },
        
      
      ],
    
      "Polirofka": [
        {
          name: "Standard Keramika",
          images: [
            "IMG_0314.jpg",
            "IMG_0312.jpg",
            "IMG_0315.jpg",
            "IMG_0313.jpg"
          ],
          price: "$130",
          date: "2 kun",
          video: "5video.mp4" 
        },
        
      
      ],
      "Tonirovka": [
        {
          name: " GLOBLE AIRIX",
          images: [
            "IMG_0315 2.jpg",
            "IMG_0318.jpg",
            "IMG_0318.jpg",
            "IMG_0317.jpg",
          ],
          price: "$150",
          date: "2 soat",
          video: "IMG_7242.MOV"
        },
        {
          name: " GLOBLE ATEL",
          images: [
            "IMG_0315 2.jpg",
            "IMG_0318.jpg",
            "IMG_0318.jpg",
            "IMG_0317.jpg",
          ],
          price: "$100",
          date: "2 soat",
          video: "IMG_7242.MOV"
        },
        
      ],
      
      "Broni plyonka": [
    {
      name: "Material/Option",
      images: [
        "IMG_0338.jpg",
        "IMG_0339.jpg",
        "IMG_0340.jpg",
        "IMG_0341.jpg",
      ],
      price: "$___",
      date: "___",
      video: "VIDEO.MOV"
    },
  ],
      
      "Shumka":  [
        {
          name: "Noisoff BEE STandart",
          images: [
            "IMG_9276 2.jpg",
            "IMG_9275 2.PNG",
            "IMG_9278 2.PNG",
            "IMG_9278 2.PNG",
          ],
          price: "400$",
          date: "10 soat",
          video: "IMG_7242.MOV"
        },
        {
          name: "Noisoff BEE FULL",
          images: [
            "IMG_9275 2.PNG",
            "IMG_9276 2.jpg",
            "IMG_9278 2.PNG",
            "IMG_9277 2.jpg",
          ],
          price: "500$",
          date: "2 soat",
          video: "IMG_7242.MOV"
        },
        {
          name: "Airo sell 600 Standart",
          images: [
           "IMG_0309.JPG",
            "IMG_0308.jpg",
            "IMG_1303.jpg",
            "IMG_1304.jpg",
            
            
          ],
          price: "40$",
          date: "2 soat",
          video: "IMG_7242.MOV"
        },
        {
          name: "Airo sell 600 Full",
          images: [
            "IMG_0307.PNG",
            "IMG_0309.JPG",
            "IMG_1303.jpg",
            "IMG_0311.jpg",
          ],
          price: "40$",
          date: "2 soat",
          video: "IMG_7242.MOV"
        },
      ],
    },

    "Tracker": {
        "Broni plyonka": [
    {
      name: "Material/Option",
      images: [
        "IMG_0338.jpg",
        "IMG_0339.jpg",
        "IMG_0340.jpg",
        "IMG_0341.jpg",
      ],
      price: "$___",
      date: "___",
      video: "VIDEO.MOV"
    },
  ],
      "Shumka":  [
        {
          name: "Noisoff BEE STandart",
          images: [
            "IMG_9276 2.jpg",
            "IMG_9275 2.PNG",
            "IMG_9278 2.PNG",
            "IMG_9278 2.PNG",
          ],
          price: "400$",
          date: "10 soat",
          video: "IMG_7242.MOV"
        },
        {
          name: "Noisoff BEE FULL",
          images: [
            "IMG_9275 2.PNG",
            "IMG_9276 2.jpg",
            "IMG_9278 2.PNG",
            "IMG_9277 2.jpg",
          ],
          price: "500$",
          date: "2 soat",
          video: "IMG_7242.MOV"
        },
        {
          name: "Airo sell 600 Standart",
          images: [
           "IMG_0309.JPG",
            "IMG_0308.jpg",
            "IMG_1303.jpg",
            "IMG_1304.jpg",
            
            
          ],
          price: "40$",
          date: "2 soat",
          video: "IMG_7242.MOV"
        },
        {
          name: "Airo sell 600 Full",
          images: [
            "IMG_0307.PNG",
            "IMG_0309.JPG",
            "IMG_1303.jpg",
            "IMG_0311.jpg",
          ],
          price: "40$",
          date: "2 soat",
          video: "IMG_7242.MOV"
        },
      ],
    
        
      "Keramika": [
        {
          name: "Keramika",
          images: [
            "IMG_7529.jpg",
            "IMG_7530.PNG",
            "IMG_7532.jpg",
            "IMG_7533.jpg",
          ],
          price: "$130",
          date: "2 kun",
          video: "IMG_7242.MOV"
        },
      ],
      "Polirofka": [
      {
        name: "Polirovka",
        images: [
          "IMG_7529.jpg",
            "IMG_7530.PNG",
            "IMG_7532.jpg",
            "IMG_7533.jpg",
        ],
        price: "$100",
        date: "1 kun",
        video: "polirovka_video.mp4"
      },
     
    ],
    
      
    },
    
"TAHOE": {
  "Keramika": [
    {
      name: "Keramika",
      images: [
        "IMG_0331.jpg",
        "IMG_0330.jpg",
        "IMG_0329.jpg",
        "IMG_0327.jpg",
      ],
      price: "$300",
      date: "2 soat",
      video: "VIDEO.MOV"
    },
  ],

  "Polirofka": [
    {
      name: "Polirofka",
      images: [
        "IMG_0331.jpg",
        "IMG_0330.jpg",
        "IMG_0329.jpg",
        "IMG_0327.jpg",
      ],
      price: "$___",
      date: "___",
      video: "VIDEO.MOV"
    },
  ],

  "Tonirovka": [
    {
      name: "GLOBLE AIRIX",
      images: [
        "IMG_0333.jpg",
        "IMG_0334.jpg",
        "IMG_0332.jpg",
        "IMG_0330.jpg",
      ],
      price: "$100",
      date: "1 soat",
      video: "VIDEO.MOV"
    },
    {
      name: "GLOBLE ATEL",
      images: [
        "IMG_0333.jpg",
        "IMG_0334.jpg",
        "IMG_0332.jpg",
        "IMG_0330.jpg",
      ],
      price: "$150",
      date: "1 soat",
      video: "VIDEO.MOV"
    },
  ],

  "Salon laminatsiya": [
    {
      name: "Material/Option",
      images: [
        "IMG_0337.jpg",
        "IMG_0336.jpg",
        "IMG_0335.jpg",
        
      ],
      price: "$___",
      date: "___",
      video: "VIDEO.MOV"
    },
  ],

  "Broni plyonka": [
    {
      name: "Material/Option",
      images: [
        "IMG_0338.jpg",
        "IMG_0339.jpg",
        "IMG_0340.jpg",
        "IMG_0341.jpg",
      ],
      price: "$___",
      date: "___",
      video: "VIDEO.MOV"
    },
  ],

  "Shumka":  [
    {
      name: "Noisoff BEE STandart",
      images: [
        "IMG_9276 2.jpg",
        "IMG_9275 2.PNG",
        "IMG_9278 2.PNG",
        "IMG_9278 2.PNG",
      ],
      price: "400$",
      date: "10 soat",
      video: "IMG_7242.MOV"
    },
    {
      name: "Noisoff BEE FULL",
      images: [
        "IMG_9275 2.PNG",
        "IMG_9276 2.jpg",
        "IMG_9278 2.PNG",
        "IMG_9277 2.jpg",
      ],
      price: "500$",
      date: "2 soat",
      video: "IMG_7242.MOV"
    },
    {
      name: "Airo sell 600 Standart",
      images: [
       "IMG_0309.JPG",
        "IMG_0308.jpg",
        "IMG_1303.jpg",
        "IMG_1304.jpg",
        
        
      ],
      price: "40$",
      date: "2 soat",
      video: "IMG_7242.MOV"
    },
    {
      name: "Airo sell 600 Full",
      images: [
        "IMG_0307.PNG",
        "IMG_0309.JPG",
        "IMG_1303.jpg",
        "IMG_0311.jpg",
      ],
      price: "40$",
      date: "2 soat",
      video: "IMG_7242.MOV"
    },
  ],


  "Ximchistka": [
    {
      name: "Type 1",
      images: [
        "IMG_XXXX.jpg",
        "IMG_XXXX.jpg",
        "IMG_XXXX.jpg",
      ],
      price: "$___",
      date: "___",
      video: "VIDEO.MOV"
    },
  ],
},






"Monza": {
  "Keramika": [
    {
      name: "Keramika",
      images: [
        "IMG_XXXX.jpg",
        "IMG_XXXX.jpg",
        "IMG_XXXX.jpg",
        "IMG_XXXX.jpg",
      ],
      price: "$___",
      date: "___",
      video: "VIDEO.MOV"
    },
  ],

  "Polirofka": [
    {
      name: "Polirofka",
      images: [
        "IMG_XXXX.jpg",
        "IMG_XXXX.jpg",
        "IMG_XXXX.jpg",
        "IMG_XXXX.jpg",
      ],
      price: "$___",
      date: "___",
      video: "VIDEO.MOV"
    },
  ],

  "Tonirofka": [
    {
      name: "Option 1",
      images: [
        "IMG_XXXX.jpg",
        "IMG_XXXX.jpg",
        "IMG_XXXX.jpg",
        "IMG_XXXX.jpg",
      ],
      price: "$___",
      date: "___",
      video: "VIDEO.MOV"
    },
    {
      name: "Option 2",
      images: [
        "IMG_XXXX.jpg",
        "IMG_XXXX.jpg",
        "IMG_XXXX.jpg",
        "IMG_XXXX.jpg",
      ],
      price: "$___",
      date: "___",
      video: "VIDEO.MOV"
    },
  ],

  "Salon laminatsiya": [
    {
      name: "Material/Option",
      images: [
        "IMG_XXXX.jpg",
        "IMG_XXXX.jpg",
        "IMG_XXXX.jpg",
        "IMG_XXXX.jpg",
      ],
      price: "$___",
      date: "___",
      video: "VIDEO.MOV"
    },
  ],

  "Broni plyonka": [
    {
      name: "Material/Option",
      images: [
        "IMG_0338.jpg",
        "IMG_0339.jpg",
        "IMG_0340.jpg",
        "IMG_0341.jpg",
      ],
      price: "$___",
      date: "___",
      video: "VIDEO.MOV"
    },
  ],

 "Shumka":  [
    {
      name: "Noisoff BEE STandart",
      images: [
        "IMG_9276 2.jpg",
        "IMG_9275 2.PNG",
        "IMG_9278 2.PNG",
        "IMG_9278 2.PNG",
      ],
      price: "400$",
      date: "10 soat",
      video: "IMG_7242.MOV"
    },
    {
      name: "Noisoff BEE FULL",
      images: [
        "IMG_9275 2.PNG",
        "IMG_9276 2.jpg",
        "IMG_9278 2.PNG",
        "IMG_9277 2.jpg",
      ],
      price: "500$",
      date: "2 soat",
      video: "IMG_7242.MOV"
    },
    {
      name: "Airo sell 600 Standart",
      images: [
       "IMG_0309.JPG",
        "IMG_0308.jpg",
        "IMG_1303.jpg",
        "IMG_1304.jpg",
        
        
      ],
      price: "40$",
      date: "2 soat",
      video: "IMG_7242.MOV"
    },
    {
      name: "Airo sell 600 Full",
      images: [
        "IMG_0307.PNG",
        "IMG_0309.JPG",
        "IMG_1303.jpg",
        "IMG_0311.jpg",
      ],
      price: "40$",
      date: "2 soat",
      video: "IMG_7242.MOV"
    },
  ],


  "Ximchistka": [
    {
      name: "Type 1",
      images: [
        "IMG_XXXX.jpg",
        "IMG_XXXX.jpg",
        "IMG_XXXX.jpg",
      ],
      price: "$___",
      date: "___",
      video: "VIDEO.MOV"
    },
  ],


  "Ximchistka": [
    {
      name: "Type 1",
      images: [
        "IMG_XXXX.jpg",
        "IMG_XXXX.jpg",
        "IMG_XXXX.jpg",
      ],
      price: "$___",
      date: "___",
      video: "VIDEO.MOV"
    },
  ],
},
"Equinox": {
  "Keramika": [
    {
      name: "Keramika",
      images: [
        "IMG_7522.jpg",
        "IMG_7524.jpg",
        "IMG_7525.jpg",
        "IMG_7527.jpg",
      ],
      price: "$___",
      date: "___",
      video: "VIDEO.MOV"
    },
  ],

  "Polirofka": [
    {
      name: "Polirofka",
      images: [
       "IMG_7522.jpg",
        "IMG_7524.jpg",
        "IMG_7525.jpg",
        "IMG_7527.jpg",
      ],
      price: "$___",
      date: "___",
      video: "VIDEO.MOV"
    },
  ],

  "Tonirovka": [
    {
      name: "Option 1",
      images: [
        "IMG_7525.jpg",
        "IMG_7534.jpg",
        "IMG_7535.jpg",
        "IMG_7536.jpg",
      ],
      price: "$___",
      date: "___",
      video: "VIDEO.MOV"
    },
    {
      name: "Option 2",
      images: [
        "IMG_7525.jpg",
        "IMG_7534.jpg",
        "IMG_7535.jpg",
        "IMG_7536.jpg",
      ],
      price: "$___",
      date: "___",
      video: "VIDEO.MOV"
    },
  ],

  "Salon laminatsiya": [
    {
      name: "Material/Option",
      images: [
        "IMG_XXXX.jpg",
        "IMG_XXXX.jpg",
        "IMG_XXXX.jpg",
        "IMG_XXXX.jpg",
      ],
      price: "$___",
      date: "___",
      video: "VIDEO.MOV"
    },
  ],

 "Broni plyonka": [
    {
      name: "Material/Option",
      images: [
        "IMG_0338.jpg",
        "IMG_0339.jpg",
        "IMG_0340.jpg",
        "IMG_0341.jpg",
      ],
      price: "$___",
      date: "___",
      video: "VIDEO.MOV"
    },
  ],

  "Shumka": [
    {
      name: "Noisoff BEE STandart",
      images: [
        "IMG_9276 2.jpg",
        "IMG_9275 2.PNG",
        "IMG_9278 2.PNG",
        "IMG_9278 2.PNG",
      ],
      price: "400$",
      date: "10 soat",
      video: "IMG_7242.MOV"
    },
    {
      name: "Noisoff BEE FULL",
      images: [
        "IMG_9275 2.PNG",
        "IMG_9276 2.jpg",
        "IMG_9278 2.PNG",
        "IMG_9277 2.jpg",
      ],
      price: "500$",
      date: "2 soat",
      video: "IMG_7242.MOV"
    },
    {
      name: "Airo sell 600 Standart",
      images: [
        "IMG_0309.JPG",
        "IMG_0308.jpg",
        "IMG_1303.jpg",
        "IMG_1304.jpg",
      ],
      price: "40$",
      date: "2 soat",
      video: "IMG_7242.MOV"
    },
    {
      name: "Airo sell 600 Full",
      images: [
        "IMG_0307.PNG",
        "IMG_0309.JPG",
        "IMG_1303.jpg",
        "IMG_0311.jpg",
      ],
      price: "40$",
      date: "2 soat",
      video: "IMG_7242.MOV"
    },
  ],

  "Ximchistka": [
    {
      name: "Type 1",
      images: [
        "IMG_XXXX.jpg",
        "IMG_XXXX.jpg",
        "IMG_XXXX.jpg",
      ],
      price: "$___",
      date: "___",
      video: "VIDEO.MOV"
    },
  ],
},
"Nexia 3": {
  "Keramika": [
    {
      name: "Keramika",
      images: [
        "IMG_XXXX.jpg",
        "IMG_XXXX.jpg",
        "IMG_XXXX.jpg",
        "IMG_XXXX.jpg",
      ],
      price: "$___",
      date: "___",
      video: "VIDEO.MOV"
    },
  ],

  "Polirofka": [
    {
      name: "Polirofka",
      images: [
        "IMG_XXXX.jpg",
        "IMG_XXXX.jpg",
        "IMG_XXXX.jpg",
        "IMG_XXXX.jpg",
      ],
      price: "$___",
      date: "___",
      video: "VIDEO.MOV"
    },
  ],

  "Tonirovka": [
    {
      name: "Option 1",
      images: [
        "IMG_XXXX.jpg",
        "IMG_XXXX.jpg",
        "IMG_XXXX.jpg",
        "IMG_XXXX.jpg",
      ],
      price: "$___",
      date: "___",
      video: "VIDEO.MOV"
    },
    {
      name: "Option 2",
      images: [
        "IMG_XXXX.jpg",
        "IMG_XXXX.jpg",
        "IMG_XXXX.jpg",
        "IMG_XXXX.jpg",
      ],
      price: "$___",
      date: "___",
      video: "VIDEO.MOV"
    },
  ],

  "Salon laminatsiya": [
    {
      name: "Material/Option",
      images: [
        "IMG_XXXX.jpg",
        "IMG_XXXX.jpg",
        "IMG_XXXX.jpg",
        "IMG_XXXX.jpg",
      ],
      price: "$___",
      date: "___",
      video: "VIDEO.MOV"
    },
  ],

  "Broni plyonka": [
    {
      name: "Material/Option",
      images: [
        "IMG_0338.jpg",
        "IMG_0339.jpg",
        "IMG_0340.jpg",
        "IMG_0341.jpg",
      ],
      price: "$___",
      date: "___",
      video: "VIDEO.MOV"
    },
  ],

  "Shumka": [
    {
      name: "Noisoff BEE STandart",
      images: [
        "IMG_9276 2.jpg",
        "IMG_9275 2.PNG",
        "IMG_9278 2.PNG",
        "IMG_9278 2.PNG",
      ],
      price: "400$",
      date: "10 soat",
      video: "IMG_7242.MOV"
    },
    {
      name: "Noisoff BEE FULL",
      images: [
        "IMG_9275 2.PNG",
        "IMG_9276 2.jpg",
        "IMG_9278 2.PNG",
        "IMG_9277 2.jpg",
      ],
      price: "500$",
      date: "2 soat",
      video: "IMG_7242.MOV"
    },
    {
      name: "Airo sell 600 Standart",
      images: [
        "IMG_0309.JPG",
        "IMG_0308.jpg",
        "IMG_1303.jpg",
        "IMG_1304.jpg",
      ],
      price: "40$",
      date: "2 soat",
      video: "IMG_7242.MOV"
    },
    {
      name: "Airo sell 600 Full",
      images: [
        "IMG_0307.PNG",
        "IMG_0309.JPG",
        "IMG_1303.jpg",
        "IMG_0311.jpg",
      ],
      price: "40$",
      date: "2 soat",
      video: "IMG_7242.MOV"
    },
  ],

  "Ximchistka": [
    {
      name: "Type 1",
      images: [
        "IMG_XXXX.jpg",
        "IMG_XXXX.jpg",
        "IMG_XXXX.jpg",
      ],
      price: "$___",
      date: "___",
      video: "VIDEO.MOV"
    },
  ],
},"Onix": {
  "Keramika": [
    {
      name: "Keramika",
      images: [
        "IMG_XXXX.jpg",
        "IMG_XXXX.jpg",
        "IMG_XXXX.jpg",
        "IMG_XXXX.jpg",
      ],
      price: "$___",
      date: "___",
      video: "VIDEO.MOV"
    },
  ],

  "Polirofka": [
    {
      name: "Polirofka",
      images: [
        "IMG_XXXX.jpg",
        "IMG_XXXX.jpg",
        "IMG_XXXX.jpg",
        "IMG_XXXX.jpg",
      ],
      price: "$___",
      date: "___",
      video: "VIDEO.MOV"
    },
  ],

  "Tonirovka": [
    {
      name: "Option 1",
      images: [
        "IMG_XXXX.jpg",
        "IMG_XXXX.jpg",
        "IMG_XXXX.jpg",
        "IMG_XXXX.jpg",
      ],
      price: "$___",
      date: "___",
      video: "VIDEO.MOV"
    },
    {
      name: "Option 2",
      images: [
        "IMG_XXXX.jpg",
        "IMG_XXXX.jpg",
        "IMG_XXXX.jpg",
        "IMG_XXXX.jpg",
      ],
      price: "$___",
      date: "___",
      video: "VIDEO.MOV"
    },
  ],

  "Salon laminatsiya": [
    {
      name: "Material/Option",
      images: [
        "IMG_XXXX.jpg",
        "IMG_XXXX.jpg",
        "IMG_XXXX.jpg",
        "IMG_XXXX.jpg",
      ],
      price: "$___",
      date: "___",
      video: "VIDEO.MOV"
    },
  ],

  "Broni plyonka": [
    {
      name: "Material/Option",
      images: [
        "IMG_0338.jpg",
        "IMG_0339.jpg",
        "IMG_0340.jpg",
        "IMG_0341.jpg",
      ],
      price: "$___",
      date: "___",
      video: "VIDEO.MOV"
    },
  ],

  "Shumka": [
    {
      name: "Noisoff BEE STandart",
      images: [
        "IMG_9276 2.jpg",
        "IMG_9275 2.PNG",
        "IMG_9278 2.PNG",
        "IMG_9278 2.PNG",
      ],
      price: "400$",
      date: "10 soat",
      video: "IMG_7242.MOV"
    },
    {
      name: "Noisoff BEE FULL",
      images: [
        "IMG_9275 2.PNG",
        "IMG_9276 2.jpg",
        "IMG_9278 2.PNG",
        "IMG_9277 2.jpg",
      ],
      price: "500$",
      date: "2 soat",
      video: "IMG_7242.MOV"
    },
    {
      name: "Airo sell 600 Standart",
      images: [
        "IMG_0309.JPG",
        "IMG_0308.jpg",
        "IMG_1303.jpg",
        "IMG_1304.jpg",
      ],
      price: "40$",
      date: "2 soat",
      video: "IMG_7242.MOV"
    },
    {
      name: "Airo sell 600 Full",
      images: [
        "IMG_0307.PNG",
        "IMG_0309.JPG",
        "IMG_1303.jpg",
        "IMG_0311.jpg",
      ],
      price: "40$",
      date: "2 soat",
      video: "IMG_7242.MOV"
    },
  ],

  "Ximchistka": [
    {
      name: "Type 1",
      images: [
        "IMG_XXXX.jpg",
        "IMG_XXXX.jpg",
        "IMG_XXXX.jpg",
      ],
      price: "$___",
      date: "___",
      video: "VIDEO.MOV"
    },
  ],
},







"Malibu 2": {
  "Keramika": [
    {
      name: "Keramika",
      images: [
        "IMG_7547.jpg",
        "IMG_7548.jpg",
        "IMG_7550.jpg",
        "IMG_7555.jpg",
      ],
      price: "$___",
      date: "___",
      video: "VIDEO.MOV"
    },
  ],

  "Polirofka": [
    {
      name: "Polirofka",
      images: [
        "IMG_7547.jpg",
        "IMG_7548.jpg",
        "IMG_7550.jpg",
        "IMG_7555.jpg",
      ],
      price: "$___",
      date: "___",
      video: "VIDEO.MOV"
    },
  ],

  "Tonirovka": [
    {
      name: " GLOBLE AIRIX",
      images: [
        "IMG_0372.jpg",
        "IMG_7556.jpg",
        "IMG_7555.jpg",
        "IMG_7551.jpg",
      ],
      price: "$___",
      date: "___",
      video: "VIDEO.MOV"
    },
    {
      name: " GLOBLE ATEL",
      images: [
        "IMG_0372.jpg",
        "IMG_7556.jpg",
        "IMG_7555.jpg",
        "IMG_7551.jpg",
      ],
      price: "$___",
      date: "___",
      video: "VIDEO.MOV"
    },
  ],

  "Salon laminatsiya": [
    {
      name: "Material/Option",
      images: [
        "IMG_0370.jpg",
        "IMG_XXXX.jpg",
        "IMG_XXXX.jpg",
        "IMG_XXXX.jpg",
      ],
      price: "$___",
      date: "___",
      video: "VIDEO.MOV"
    },
  ],

  "Broni plyonka": [
    {
      name: "Material/Option",
      images: [
        "IMG_0338.jpg",
        "IMG_0339.jpg",
        "IMG_0340.jpg",
        "IMG_0341.jpg",
      ],
      price: "$___",
      date: "___",
      video: "VIDEO.MOV"
    },
  ],

  "Shumka": [
    {
      name: "Noisoff BEE STandart",
      images: [
        "IMG_9276 2.jpg",
        "IMG_9275 2.PNG",
        "IMG_9278 2.PNG",
        "IMG_9278 2.PNG",
      ],
      price: "400$",
      date: "10 soat",
      video: "IMG_7242.MOV"
    },
    {
      name: "Noisoff BEE FULL",
      images: [
        "IMG_9275 2.PNG",
        "IMG_9276 2.jpg",
        "IMG_9278 2.PNG",
        "IMG_9277 2.jpg",
      ],
      price: "500$",
      date: "2 soat",
      video: "IMG_7242.MOV"
    },
    {
      name: "Airo sell 600 Standart",
      images: [
        "IMG_0309.JPG",
        "IMG_0308.jpg",
        "IMG_1303.jpg",
        "IMG_1304.jpg",
      ],
      price: "40$",
      date: "2 soat",
      video: "IMG_7242.MOV"
    },
    {
      name: "Airo sell 600 Full",
      images: [
        "IMG_0307.PNG",
        "IMG_0309.JPG",
        "IMG_1303.jpg",
        "IMG_0311.jpg",
      ],
      price: "40$",
      date: "2 soat",
      video: "IMG_7242.MOV"
    },
  ],

  "Ximchistka": [
    {
      name: "Type 1",
      images: [
        "IMG_XXXX.jpg",
        "IMG_XXXX.jpg",
        "IMG_XXXX.jpg",
      ],
      price: "$___",
      date: "___",
      video: "VIDEO.MOV"
    },
  ],
},





"Travers": {
  "Keramika": [
    {
      name: "Keramika",
      images: [
        "IMG_7562.jpg",
        "IMG_7561.jpg",
        "IMG_7559.jpg",
        "IMG_7558.jpg",
      ],
      price: "$300",
      date: "2 soat",
      video: "VIDEO.MOV"
    },
  ],

  "Polirofka": [
    {
      name: "Polirofka",
      images: [
        "IMG_7562.jpg",
        "IMG_7561.jpg",
        "IMG_7559.jpg",
        "IMG_7558.jpg",
      ],
      price: "$___",
      date: "___",
      video: "VIDEO.MOV"
    },
  ],

  "Tonirovka": [
    {
      name: "GLOBLE AIRIX",
      images: [
        "IMG_0333.jpg",
        "IMG_0334.jpg",
        "IMG_7561.jpg",
        "IMG_7562.jpg",
      ],
      price: "$100",
      date: "1 soat",
      video: "VIDEO.MOV"
    },
    {
      name: "GLOBLE ATEL",
      images: [
       "IMG_0333.jpg",
        "IMG_0334.jpg",
        "IMG_7561.jpg",
        "IMG_7562.jpg",
      ],
      price: "$150",
      date: "1 soat",
      video: "VIDEO.MOV"
    },
  ],

  "Salon laminatsiya": [
    {
      name: "Material/Option",
      images: [
        "IMG_0337.jpg",
        "IMG_0336.jpg",
        "IMG_0335.jpg",
        
      ],
      price: "$___",
      date: "___",
      video: "VIDEO.MOV"
    },
  ],

  "Broni plyonka": [
    {
      name: "Material/Option",
      images: [
        "IMG_0338.jpg",
        "IMG_0339.jpg",
        "IMG_0340.jpg",
        "IMG_0341.jpg",
      ],
      price: "$___",
      date: "___",
      video: "VIDEO.MOV"
    },
  ],

  "Shumka":  [
    {
      name: "Noisoff BEE STandart",
      images: [
        "IMG_9276 2.jpg",
        "IMG_9275 2.PNG",
        "IMG_9278 2.PNG",
        "IMG_9278 2.PNG",
      ],
      price: "400$",
      date: "10 soat",
      video: "IMG_7242.MOV"
    },
    {
      name: "Noisoff BEE FULL",
      images: [
        "IMG_9275 2.PNG",
        "IMG_9276 2.jpg",
        "IMG_9278 2.PNG",
        "IMG_9277 2.jpg",
      ],
      price: "500$",
      date: "2 soat",
      video: "IMG_7242.MOV"
    },
    {
      name: "Airo sell 600 Standart",
      images: [
       "IMG_0309.JPG",
        "IMG_0308.jpg",
        "IMG_1303.jpg",
        "IMG_1304.jpg",
        
        
      ],
      price: "40$",
      date: "2 soat",
      video: "IMG_7242.MOV"
    },
    {
      name: "Airo sell 600 Full",
      images: [
        "IMG_0307.PNG",
        "IMG_0309.JPG",
        "IMG_1303.jpg",
        "IMG_0311.jpg",
      ],
      price: "40$",
      date: "2 soat",
      video: "IMG_7242.MOV"
    },
  ],


  "Ximchistka": [
    {
      name: "Type 1",
      images: [
        "IMG_XXXX.jpg",
        "IMG_XXXX.jpg",
        "IMG_XXXX.jpg",
      ],
      price: "$___",
      date: "___",
      video: "VIDEO.MOV"
    },
  ],
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
   
    <p>Bajarilish muddati: ${opt.date}</p>
    ${videoHTML}
  `;

  container.appendChild(card);
});