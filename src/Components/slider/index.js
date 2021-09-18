import React from 'react'
import {SliderSection,SliderWrapper,HeroSlide,HeroSlider,HeroImage,HeroContent,SliderButton,PrevArrow,NextArrow} from './Styles'

const Slider = ({slides}) => {
    return (
        <SliderSection>
            <SliderWrapper>
                 {slides.map((slide,index)=>{
                     return(
                         <HeroSlide key={index}>
                             <HeroSlider>
                                 <HeroImage src={slide.image} alt={slide.alt} />
                                 <HeroContent>
                                     <h1>{slide.title}</h1>
                                     <p>{slide.comment}</p>
                                 </HeroContent>
                             </HeroSlider>
                         </HeroSlide>
                     )
                 })}
                 <SliderButton>
                     <PrevArrow />
                     <NextArrow />
                 </SliderButton>
            </SliderWrapper>
        </SliderSection>
    )
}

export default Slider
