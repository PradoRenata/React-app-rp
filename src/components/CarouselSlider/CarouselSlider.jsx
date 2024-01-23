import Carousel from "../Carousel/Carousel"

const CarouselSlider = () => {

    const slides = [
        'https://lh3.googleusercontent.com/pw/ABLVV873gvBGeXYLUQ7AGFnLfsQQSgCj4ubQ6h7j-RSJsSm3q9VS5nNqt0mfPM3txidGfR2FA1i04KLmYqdHvCQiN5QvtJLL0qkrRXOkwl0u5STRdnCQXPj3DLvNWZB_2t4JMvt54T-frIvWBw6ygz--5WA=w1490-h335-s-no-gm?authuser=0',
        'https://lh3.googleusercontent.com/pw/ABLVV873gvBGeXYLUQ7AGFnLfsQQSgCj4ubQ6h7j-RSJsSm3q9VS5nNqt0mfPM3txidGfR2FA1i04KLmYqdHvCQiN5QvtJLL0qkrRXOkwl0u5STRdnCQXPj3DLvNWZB_2t4JMvt54T-frIvWBw6ygz--5WA=w1490-h335-s-no-gm?authuser=0',
        'https://lh3.googleusercontent.com/pw/ABLVV873gvBGeXYLUQ7AGFnLfsQQSgCj4ubQ6h7j-RSJsSm3q9VS5nNqt0mfPM3txidGfR2FA1i04KLmYqdHvCQiN5QvtJLL0qkrRXOkwl0u5STRdnCQXPj3DLvNWZB_2t4JMvt54T-frIvWBw6ygz--5WA=w1490-h335-s-no-gm?authuser=0',
        'https://lh3.googleusercontent.com/pw/ABLVV873gvBGeXYLUQ7AGFnLfsQQSgCj4ubQ6h7j-RSJsSm3q9VS5nNqt0mfPM3txidGfR2FA1i04KLmYqdHvCQiN5QvtJLL0qkrRXOkwl0u5STRdnCQXPj3DLvNWZB_2t4JMvt54T-frIvWBw6ygz--5WA=w1490-h335-s-no-gm?authuser=0',
      ];

    return (
        <div className="w-full m-auto">
        <Carousel slides={slides} />
        </div>
    )
}

export default CarouselSlider