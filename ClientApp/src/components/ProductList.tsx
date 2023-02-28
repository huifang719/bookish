import React from 'react';
import { Container, Image, Row } from 'react-bootstrap';
import "../App.css"
import { TrendingBooks, classicBooks } from './Products';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';

const ProductList: React.FC = () => {

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 9,
        slidesToScroll: 1,
        pauseOnHover: true,
        centerPadding: "10px",
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: 'linear',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: false,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <Container className="pt-1">
            <Row>
                <h6 style={{ textAlign: 'center' }}>Trending Books</h6>
                <Slider {...settings} >
                    {TrendingBooks.map((product: { OLID: string, imageUrl: string, author: string, price: number, name: string, description: string }, index: number) => (
                        <Container key={index} style={{ width: "5rem", height: "auto" }} >
                            <Link to={`/details/${product.OLID}`}>
                                <Image fluid
                                    src={product.imageUrl}
                                    height={200}
                                />
                            </Link>
                        </Container>
                    ))}
                </Slider>
            </Row>
            <Row>
                <h6 style={{ textAlign: 'center' }}>Classic</h6>
                <Slider {...settings} >
                    {classicBooks.map((product, index) => (
                        <Container key={index} style={{ width: "5rem", height: "auto" }} >
                            <Link to={`/details/${product.OLID}`}>
                                <Image fluid
                                    src={product.imageUrl}
                                    height={120}
                                />
                            </Link>
                        </Container>
                    ))}
                </Slider>
            </Row>
        </Container>
    );
};

export default ProductList;



