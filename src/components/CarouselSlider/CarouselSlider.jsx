import Carousel from "../Carousel/Carousel"


const CarouselSlider = () => {

    let slides = [
        "https://static.vecteezy.com/system/resources/previews/001/082/480/non_2x/abstract-orange-and-black-watercolor-banner-design-vector.jpg",
        "https://static.vecteezy.com/system/resources/previews/001/082/480/non_2x/abstract-orange-and-black-watercolor-banner-design-vector.jpg",
        "https://static.vecteezy.com/system/resources/previews/001/082/480/non_2x/abstract-orange-and-black-watercolor-banner-design-vector.jpg",
        "https://static.vecteezy.com/system/resources/previews/001/082/480/non_2x/abstract-orange-and-black-watercolor-banner-design-vector.jpg",
      ];

    return (
        <div className="w-full m-auto">
        <Carousel slides={slides} />
        </div>
    )
}

export default CarouselSlider