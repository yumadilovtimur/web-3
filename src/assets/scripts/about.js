import "./modules/example";

function yaMap() {
  ymaps.ready(init);
  
  const yandexMap = document.querySelector("#map");
  
  const placemarks = [
    {
      latitude: 54.765343,
      longitude: 56.052926,
      hintContent: 'респ. Башкортостан, г. Уфа, ул. Юрия Гагарина, д. 3',
      balloonContent: 'респ. Башкортостан, г. Уфа, ул. Юрия Гагарина, д. 3'
    }
  ]
  
  function init() {
    var map = new ymaps.Map(yandexMap, {
      center: [54.765343, 56.052926],
      zoom: 17,
      controls: ["zoomControl"],
      behaviors: ["drag"]
    });
  
    placemarks.forEach(function(obj) {
      var placemark = new ymaps.Placemark([obj.latitude, obj.longitude], {
        hintContent: obj.hintContent,
        balloonContent: obj.balloonContent
      },
        {
          iconLayout: 'default#image',
          iconImageHref: './assets/images/map-marker.png',
          iconImageSize: [44, 60],
          iconImageOffset: [-22, -60]
        });
  
        map.geoObjects.add(placemark);
    });  
  }
  }
  
  yaMap();