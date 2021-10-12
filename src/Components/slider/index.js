import React,{useEffect,useState,useRef} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import {SliderSection,SliderWrapper,
    HeroSlide,HeroSlider,HeroImage,HeroContent,
    SliderButton,PrevArrow,NextArrow,SliderButtonPrev,
    SliderButtonNext,AboutSvg} from './Styles'

const Slider = ({slides}) => {
    const [current,setCurrent]=useState(0);
    const length=slides.length;
    const timeout=useRef(null);
    useEffect(()=>{
        const nextSlide=()=>{
        setCurrent(current=== length-1? 0 : current+1)};
        timeout.current = setTimeout(nextSlide,10000);
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

    AOS.init({duration:2000});
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
                                     <h3>{slide.title}</h3>
                                     <h2>{slide.jingle}</h2>
                                     <h1 data-aos="fade-right">{slide.departement}</h1>
                                     <p>{slide.comment}</p>
                                 </HeroContent>
                             </HeroSlider>
                             )}    
                         </HeroSlide>
                     )
                 })}
                 <SliderButton>
                    <SliderButtonPrev>
                        <PrevArrow onClick={prevSlide} />
                     </SliderButtonPrev>
                     <SliderButtonNext>
                        <NextArrow onClick={nextSlide} />
                     </SliderButtonNext>
                 </SliderButton>
            </SliderWrapper>
            <AboutSvg>
                <svg width="100%" height="100%" id="svg" viewBox="0 0 1440 400" 
                xmlns="http://www.w3.org/2000/svg" class="transition duration-300 ease-in-out delay-150">
                    <path d="M 0,400 C 0,400 0,200 0,200 C 157.33333333333331,167.33333333333331 
                    314.66666666666663,134.66666666666666 454,153 C 593.3333333333334,171.33333333333334 
                    714.6666666666667,240.66666666666669 876,257 C 1037.3333333333333,273.3333333333333 
                    1238.6666666666665,236.66666666666666 1440,200 C 1440,200 1440,400 1440,400 Z" 
                    stroke="none" stroke-width="0" fill="#000000ff" class="transition-all duration-300 
                    ease-in-out delay-150 path-0" transform="rotate(-180 720 200)"></path></svg>
            </AboutSvg>
        </SliderSection>

    )
}

export default Slider
