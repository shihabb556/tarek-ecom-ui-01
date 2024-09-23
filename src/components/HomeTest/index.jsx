
import Features from "./Features";
import Footer from "./Footer";
import Hero from "./Hero";
import ProductCategory from "./ProductCategory";
import ProductSlider from "./ProductSection";
import ReviewSection from "./ReviewSection";


const HomeTest = ()=>{

    return(
         <div>
             <Hero />
             <Features/>
             <ProductSlider/>
             <ProductCategory/>
             <ReviewSection/>
             <Footer/>
         </div>
    );
}

export default HomeTest;