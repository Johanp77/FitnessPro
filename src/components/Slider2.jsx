import React, { Component } from "react";
import Slider from "react-slick";
import styles from "./styles/store.module.css";

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const turtles = [
  {
      name: "Leonardo",
      nickName: "Leo",
      weapon: "Katana",
      imgUrl: "https://upload.wikimedia.org/wikipedia/en/e/ed/Leonardo_%28Teenage_Mutant_Ninja_Turtles%29.jpg"
  },
  {
      name: "Donatello",
      nickName: "Don",
      weapon: "Bo staff",
      imgUrl: "https://upload.wikimedia.org/wikipedia/en/5/5a/Donatello_%28Teenage_Mutant_Ninja_Turtles%29.jpg"
  },
  {
      name: "Michelangelo",
      nickName: "Mikey",
      weapon: "Nunchucks",
      imgUrl: "https://upload.wikimedia.org/wikipedia/en/f/f3/Michelangelo_%28Teenage_Mutant_Ninja_Turtles%29.jpg"
  },
  {
      name: "Raphael",
      nickName: "Raph",
      weapon: "Sai",
      imgUrl: "https://upload.wikimedia.org/wikipedia/en/7/72/Raphael_%28Teenage_Mutant_Ninja_Tutles%29.jpg"
  }
]

export default class PauseOnHover extends Component {
    render() {
      var settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        className: "slides",
        responsive: [
          {
              breakpoint: 1024,
              settings: {
                  slidesToShow: 4,
                  slidesToScroll: 3,
                  infinite: true,
                  dots: true
              }
          },
          {
              breakpoint: 600,
              settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2,
                  initialSlide: 2
              }
          },
          {
              breakpoint: 480,
              settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
              }
          }
      ]
      };
      return (
        <div className="SlideSize">
          <h2>Ganadores de peso</h2>
          <Slider {...settings}>
              {turtles.map((turtle, index) => {
                return <div key={index}>
                    {<Card sx={{ maxWidth: 345 }}>
                      <CardMedia
                        component="img"
                        height="150"
                        image={turtle.imgUrl}
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          {turtle.name}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" >
                          {turtle.nickName}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" >
                          {turtle.weapon}
                        </Typography>
                      </CardContent>
                    </Card>}
                  </div>
              }
              )}

          </Slider>
        </div>
      );
    }
  }

