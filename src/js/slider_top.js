!function() {
    const arrows = document.querySelectorAll('.gallery-amazing__arrows__left, .gallery-amazing__arrows__right');
    const container = document.querySelector('.gallery-amazing__slider');
    const img_tags = container.querySelectorAll('img');
    const costs = container.querySelectorAll('.price');
    const tours = container.querySelectorAll('.name-tour');



    const images_link = ['img/big_island.png', 'img/monk.png', 'img/islands.png'];
    const prices = ['$340', '$640', '$560'];
    const name_tour = ['Something, Somewhere', 'Kathmandu, Nepal', 'Raja Ampat, Indonesia'];

    setImages(img_tags, images_link);
    setPrice(costs, prices);
    setText(tours, name_tour);

    for (let arrow of arrows) {
        arrow.addEventListener('click', function() {

            if (this.className.baseVal == 'gallery-amazing__arrows__left') {

                images_link.push(images_link.shift());
                prices.push(prices.shift());
                name_tour.push(name_tour.shift());
                
                setImages(img_tags, images_link);
                setPrice(costs, prices);
                setText(tours, name_tour);

            } else {

                images_link.unshift(images_link.pop());
                prices.unshift(prices.pop());
                name_tour.unshift(name_tour.pop());
                
                setImages(img_tags, images_link);
                setPrice(costs, prices);
                setText(tours, name_tour);

            }
        });
    }

    function setImages(elements, images) {
        for (let i = 0; i < images.length; i++) {

            elements[i].setAttribute('src', images[i]);
            elements[i].setAttribute('data-number', i);
    
        }
    }

    function setPrice(elements, prices) {
        for (let i = 0; i < prices.length; i++) {

            elements[i].innerHTML = prices[i];
    
        }
    }

    function setText(elements, text) {
        for (let i = 0; i < text.length; i++) {

            elements[i].innerHTML = text[i];
    
        }
    }
}();