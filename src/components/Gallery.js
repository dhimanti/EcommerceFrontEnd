import React, { useEffect } from 'react';
import $ from 'jquery';
import 'velocity-animate';
import 'velocity-animate/velocity.ui';
import './css/gallery.css';
const data = {
  gallery: [
    { title: "Ella me quiso, a veces yo también la quería", img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/953/murra.jpg", alt: "lorem" },
    { title: "Puedo escribir los versos más tristes esta noche", img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/953/g1.jpg", alt: "lorem" },
    { title: "Mi voz buscaba el viento para tocar su oído", img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/953/g2.jpg", alt: "lorem" },
    { title: "Mi alma no se contenta con haberla perdido", img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/953/g3.jpg", alt: "lorem" },
    { title: "El viento de la noche gira en el cielo y canta", img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/953/g4.jpg", alt: "lorem" },
    { title: "La noche está estrellada, y tiritan, azules, los astros, a lo lejos", img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/953/g5.jpg", alt: "lorem" },
    { title: "Cómo no haber amado sus grandes ojos fijos", img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/953/g6.jpg", alt: "lorem" },
    { title: "De otro. Será de otro. Como antes de mis besos.", img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/953/g7.jpg", alt: "lorem" }
  ]
};



const Gallery = () => {
  useEffect(() => {
    const $items = $('.item');

    $items.on({
      mousemove: function (e) {
        const $item = $(this);
        const $image = $item.closest('.overflow').find('img');

        // Log the selected element for debugging
        console.log($image); // Check if it's the correct element

        if ($image.length) { // Check if it's a valid jQuery object
          $image.velocity({
            translateZ: 0,
            translateX: Math.floor((e.pageX - $item.offset().left) - ($item.width() / 2)),
            translateY: Math.floor((e.pageY - $item.offset().top) - ($item.height() / 2)),
            scale: '2'
          }, {
            duration: 400,
            easing: 'linear',
            queue: false
          });
        } else {
          console.error("Selected element is not a valid jQuery object");
        }
      },
      mouseleave: function (e) {
        const $item = $(this);
        const $image = $item.closest('.overflow').find('img');

        if ($image.length) {
          $image.velocity({
            translateZ: 0,
            translateX: 0,
            translateY: 0,
            scale: '1'
          }, {
            duration: 1000,
            easing: 'easeOutSine',
            queue: false
          });
        }
      }
    });
  }, []);

  return (
    <div className="container-fluid">
      <div className="row gallery-grid"> {/* Add 'gallery-grid' class */}
        {data.gallery.map((item, index) => (
          <div key={index} className="col-md-4 col-lg-3 col-xs-6 item nopadding">
            <div className="overflow">
              <div className="content-art">
                <h4>{item.title}</h4>
              </div>
              <img src={item.img} alt={item.alt} className="img-responsive" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;


// import React, { useEffect } from 'react';
// import $ from 'jquery';
// import 'velocity-animate';
// import 'velocity-animate/velocity.ui';
// import Handlebars from 'handlebars';
// import './css/grid.css';

// const Gallery = () => {
//   useEffect(() => {
//     window.$.velocity = require('velocity-animate'); // Ensure Velocity is attached to jQuery object

//     const data = {
//       gallery: [
//         { title: "Ella me quiso, a veces yo también la quería", img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/953/murra.jpg", alt: "lorem" },
//         { title: "Puedo escribir los versos más tristes esta noche", img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/953/g1.jpg", alt: "lorem" },
//         { title: "Mi voz buscaba el viento para tocar su oído", img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/953/g2.jpg", alt: "lorem" },
//         { title: "Mi alma no se contenta con haberla perdido", img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/953/g3.jpg", alt: "lorem" },
//         { title: "El viento de la noche gira en el cielo y canta", img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/953/g4.jpg", alt: "lorem" },
//         { title: "La noche está estrellada, y tiritan, azules, los astros, a lo lejos", img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/953/g5.jpg", alt: "lorem" },
//         { title: "Cómo no haber amado sus grandes ojos fijos", img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/953/g6.jpg", alt: "lorem" },
//         { title: "De otro. Será de otro. Como antes de mis besos.", img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/953/g7.jpg", alt: "lorem" }
//       ]
//     };

//     const templateSource = `
//       {{#each gallery}}
//         <div class="col-md-4 col-lg-3 col-xs-6 item nopadding">
//           <div class="overflow">
//             <div class="content-art">
//               <h4>{{title}}</h4>
//             </div>
//             <img src="{{img}}" alt="{{alt}}" class="img-responsive"/>
//           </div>
//         </div>
//       {{/each}}
//     `;
    
//     const template = Handlebars.compile(templateSource);
//     $('#content').html(template(data));

//     const $items = $('.item');
//     $items.on({
//       mousemove: function(e) {
//         const $that = $(this);
//         $that.find('.overflow > img').velocity({
//           translateZ: 0,
//           translateX: Math.floor((e.pageX - $that.offset().left) - ($that.width() / 2)),
//           translateY: Math.floor((e.pageY - $that.offset().top) - ($that.height() / 2)),
//           scale: '2'
//         }, {
//           duration: 400,
//           easing: 'linear',
//           queue: false
//         });
//       },
//       mouseleave: function() {
//         $(this).find('.overflow > img').velocity({
//           translateZ: 0,
//           translateX: 0,
//           translateY: 0,
//           scale: '1'
//         }, {
//           duration: 1000,
//           easing: 'easeOutSine',
//           queue: false
//         });
//       }
//     });
//   }, []);

//   return (
//     <div className="container-fluid">
//       <div id="content" className="row"></div>
//     </div>
//   );
// };

// export default Gallery;




// import React, { useEffect } from 'react';
// import $ from 'jquery';
// import 'velocity-animate';
// import 'velocity-animate/velocity.ui';
// import Handlebars from 'handlebars';
// import './css/grid.css';

// const Gallery = () => {
//   useEffect(() => {
//     window.$.velocity = require('velocity-animate'); // Ensure Velocity is attached to jQuery object

//     const data = {
//       gallery: [
//         { title: "Ella me quiso, a veces yo también la quería", img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/953/murra.jpg", alt: "lorem" },
//         { title: "Puedo escribir los versos más tristes esta noche", img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/953/g1.jpg", alt: "lorem" },
//         { title: "Mi voz buscaba el viento para tocar su oído", img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/953/g2.jpg", alt: "lorem" },
//         { title: "Mi alma no se contenta con haberla perdido", img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/953/g3.jpg", alt: "lorem" },
//         { title: "El viento de la noche gira en el cielo y canta", img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/953/g4.jpg", alt: "lorem" },
//         { title: "La noche está estrellada, y tiritan, azules, los astros, a lo lejos", img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/953/g5.jpg", alt: "lorem" },
//         { title: "Cómo no haber amado sus grandes ojos fijos", img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/953/g6.jpg", alt: "lorem" },
//         { title: "De otro. Será de otro. Como antes de mis besos.", img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/953/g7.jpg", alt: "lorem" }
//       ]
//     };

//     const templateSource = `
//       {{#each gallery}}
//         <div class="col-md-4 col-lg-3 col-xs-6 item nopadding">
//           <div class="overflow">
//             <div class="content-art">
//               <h4>{{title}}</h4>
//             </div>
//             <img src="{{img}}" alt="{{alt}}" class="img-responsive"/>
//           </div>
//         </div>
//       {{/each}}
//     `;
    
//     const template = Handlebars.compile(templateSource);
//     $('#content').html(template(data));

//     const $items = $('.item');
//     $items.on({
//       mousemove: function(e) {
//         const $that = $(this);
//         $that.find('.overflow > img').velocity({
//           translateZ: 0,
//           translateX: Math.floor((e.pageX - $that.offset().left) - ($that.width() / 2)),
//           translateY: Math.floor((e.pageY - $that.offset().top) - ($that.height() / 2)),
//           scale: '2'
//         }, {
//           duration: 400,
//           easing: 'linear',
//           queue: false
//         });
//       },
//       mouseleave: function() {
//         $(this).find('.overflow > img').velocity({
//           translateZ: 0,
//           translateX: 0,
//           translateY: 0,
//           scale: '1'
//         }, {
//           duration: 1000,
//           easing: 'easeOutSine',
//           queue: false
//         });
//       }
//     });
//   }, []);

//   return (
//     <div className="container-fluid">
//       <div id="content" className="row"></div>
//     </div>
//   );
// };

// export default Gallery;
