import React,{useEffect,useState,useRef} from 'react'
import {SliderSection,SliderWrapper,HeroSlide,HeroSlider,HeroImage,HeroContent,SliderButton,PrevArrow,NextArrow} from './Styles'

const Slider = ({slides}) => {
    const [current,setCurrent]=useState(0);
    const length=slides.length;
    const timeout=useRef(null);
    useEffect(()=>{
        const nextSlide=()=>{
        setCurrent(current=== length-1? 0 : current+1)};
        timeout.current = setTimeout(nextSlide,5000);
        return function(){
            if(timeout.current){
                clearTimeout(timeout.current);
            }
        }
    },[current,length])
    const nextSlide=()=>{
        if(timeout.current){
            clearTimeout(timeout.current);
        }
        setCurrent(current=== length-1? 0 : current+1);
        console.log(current);
    }
    const prevSlide=()=>{
        if(timeout.current){
            clearTimeout(timeout.current);
        }
        setCurrent(current=== 0? length-1 : current-1);
        console.log(current);
    }
    if(!Array.isArray(slides) || slides.length<=0){
        return null
    }
    return (
        <SliderSection>
            <SliderWrapper>
                 {slides.map((slide,index)=>{
                     return(
                         <HeroSlide key={index}>
                             {index===current && (
                                <HeroSlider>
                                 <HeroImage src={slide.image} alt={slide.alt} />
                                 <HeroContent>
                                     <h1>{slide.title}</h1>
                                     <p>{slide.comment}</p>
                                 </HeroContent>
                             </HeroSlider>
                             )}    
                         </HeroSlide>
                     )
                 })}
                 <SliderButton>
                     <PrevArrow onClick={prevSlide} />
                     <NextArrow onClick={nextSlide} />
                 </SliderButton>
            </SliderWrapper>
        </SliderSection>
    )
}

export default Slider