
import { motion } from 'framer-motion';
import catagorey1 from "../../assets/assets/home/slide1.jpg";
import catagorey2 from "../../assets/assets/home/slide2.jpg";
import catagorey3 from "../../assets/assets/home/slide3.jpg";
import catagorey4 from "../../assets/assets/home/slide4.jpg";
import catagorey5 from "../../assets/assets/home/slide5.jpg";
// import SectionTittle from '../../SectionTittle/SectionTittle';

const Category = () => {
    const images = [catagorey1, catagorey2, catagorey3, catagorey4, catagorey5, catagorey1, catagorey2, catagorey3];

    return (
        <section>
           
                
           <h1 className='text-4xl font-serif  text-yellow-500 text-center  '>order online</h1>
           <p className='text-xl font-serif border-y-4 py-4  text-center mt-2 '>from 11.00am to 10.00pm</p>

            <div className="my-8 overflow-hidden whitespace-nowrap bg-gray-100 py-4">
                <motion.div
                    className="flex gap-10"
                    animate={{
                        x: [0, -1000], 
                    }}
                    transition={{
                        x: {
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 20, 
                            ease: "linear",
                        },
                    }}
                    style={{ width: "fit-content" }}
                >
                    
                    {[...images, ...images].map((img, index) => (
                        <div key={index} className="w-64 h-80 flex-shrink-0">
                            <img 
                                src={img} 
                                alt={`category-${index}`} 
                                className="w-full h-full object-cover rounded-lg shadow-md"
                            />
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Category;