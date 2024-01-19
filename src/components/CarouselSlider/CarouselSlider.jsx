import Carousel from "../Carousel/Carousel"


const CarouselSlider = () => {

    let slides = [
        "https://mir-s3-cdn-cf.behance.net/54194af8a7dcc921906cd5e1d9d6de8c/fa2f4574-877a-4ead-accb-e724b9356ff9_rwc_134x0x2933x410x3200.png?h=0571eb988d6856ac7c4104c39b1766c6",
        "https://mir-s3-cdn-cf.behance.net/54194af8a7dcc921906cd5e1d9d6de8c/fa2f4574-877a-4ead-accb-e724b9356ff9_rwc_134x0x2933x410x3200.png?h=0571eb988d6856ac7c4104c39b1766c6",
        "https://mir-s3-cdn-cf.behance.net/54194af8a7dcc921906cd5e1d9d6de8c/fa2f4574-877a-4ead-accb-e724b9356ff9_rwc_134x0x2933x410x3200.png?h=0571eb988d6856ac7c4104c39b1766c6",
        "https://mir-s3-cdn-cf.behance.net/54194af8a7dcc921906cd5e1d9d6de8c/fa2f4574-877a-4ead-accb-e724b9356ff9_rwc_134x0x2933x410x3200.png?h=0571eb988d6856ac7c4104c39b1766c6",
      ];

    return (
        <div className="w-full m-auto">
        <Carousel slides={slides} />
        </div>
    )
}

export default CarouselSlider