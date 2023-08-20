import React from "react";
import { NavLink } from "react-router-dom";
import Header from "../../components/layout/header/Header";
import SlideIn from "../../components/slideIn/SlideIn";
import { Fade } from "react-awesome-reveal";
import Footer from "../../components/layout/footer/Footer";

const Home: React.FC = () => {
    return (
        <div className="customScroll">
            <Header />
            <section
                style={{ backgroundImage: "url('/bg/layers-white.jpg')" }}
                className="bg-local bg-center bg-no-repeat bg-cover relative"
            >
                <div className="container py-6 flex mx-auto items-center text-center justify-center min-h-screen customScroll">
                    <div className="flex flex-col items-center relative -top-20">
                        <h1 className="text-6xl font-bold flex mt-56 mb-8">
                            <SlideIn delay={0}>
                                <span>Welcome&nbsp;</span>
                                <span>to&nbsp;</span>
                                <span>CAI&nbsp;</span>
                            </SlideIn>
                        </h1>
                        <p className="max-w-4xl mb-16 text-xl mt-4">
                            <SlideIn delay={400}>
                                <span>
                                At CAI, our perspective revolves around the notion that fashion encompasses more than mere garments – it constitutes a reflection of your individuality and a platform to display your distinct flair. Our application is meticulously crafted to grant you the authority of staying abreast with the most current fashion trends, AI-fueled recommendations for outfits, and an assorted assemblage of premium apparel, embellishments, and footwear that's been thoughtfully curated.
                                </span>
                            </SlideIn>
                        </p>

                        <SlideIn delay={800}>
                            <NavLink
                                to={"/chat"}
                                className="px-8 py-4 font-semibold border-2 border-black hover:border-black hover:bg-black ease-in-out duration-300  hover:text-white text-black rounded-xl text-xl cursor-pointer drop-shadow-xl"
                            >
                                <span>Start</span>
                            </NavLink>
                        </SlideIn>
                    </div>
                </div>
            </section>

            <section className="bg-white py-12">
                <div className="container py-6 mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="md:order-1 mb-4">
                        </div>
                        <div className="md:order-2 mb-4 flex items-center">
                            <div className="max-w-lg mx-auto">
                                <SlideIn
                                    delay={300}
                                    duration={800}
                                    damping={0.5}
                                >
                                    <h2 className="text-6xl  font-black mb-8 text-black">
                                        AI-Powered Style Assistant
                                    </h2>
                                    <p className="text-gray-700 mb-4 text-xl text-justify">
                                    Our chatbot, driven by AI, goes beyond the role of a typical virtual assistant – it transforms into your dedicated personal stylist, accessible round the clock. Whether you're in pursuit of insights into the most recent trends, devising an ensemble for an occasion, or exploring novel appearances, our chatbot is here to offer its expertise and steer you in the right direction.
                                    </p>
                                </SlideIn>
                            </div>
                        </div>
                        <div className="md:order-4 mb-4">
                        </div>
                        <div className="md:order-3 mb-4 flex items-center">
                            <div className="max-w-lg mx-auto">
                                <SlideIn
                                    delay={300}
                                    duration={800}
                                    damping={0.5}
                                >
                                    <h2 className="text-6xl  font-black mb-8 text-black">
                                        Curated Fashion Catalog
                                    </h2>
                                    <p className="text-gray-700 mb-4 text-xl text-justify">
                                    Embark on a journey into the realm of fashion through our meticulously selected fashion catalog. We've collaborated with acclaimed designers and well-known brands to present you with an eclectic array of clothing and accessories, thoughtfully tailored to suit a wide range of preferences and occasions.
                                    </p>
                                </SlideIn>
                            </div>
                        </div>
                        <div className="md:order-5 mb-4">
                        </div>
                        <div className="md:order-6 mb-4 flex items-center">
                            <div className="max-w-lg mx-auto">
                                <SlideIn
                                    delay={300}
                                    duration={800}
                                    damping={0.5}
                                >
                                    <h2 className="text-6xl  font-black mb-8 text-black">
                                        Unleash Your Creativity
                                    </h2>
                                    <p className="text-gray-700 mb-4 text-xl text-justify">
                                    Fashion revolves around articulating your distinct personality, and our mission is to facilitate the liberation of your creativity. With our AI-driven outfit generator, the ambiguity surrounding styling choices dissipates, enabling you to boldly explore a plethora of combinations and appearances.
                                    </p>
                                </SlideIn>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-12 mb-12">
                <div className="container max-w-6xl rounded-xl py-6 px-12 mx-auto flex items-center justify-center gap-4">
                    <div className="my-6 flex flex-col justify-end items-center">
                        <h1 className="font-bold text-6xl">
                            Ready to elevate your style?
                        </h1>
                        <NavLink
                            to="/chat"
                            className="px-8 py-4 mt-12 font-semibold border-2 border-black ease-in-out duration-300 bg-black text-white rounded-full text-xl cursor-pointer drop-shadow-xl block w-fit"
                        >
                            <span>Start the Conversation</span>
                        </NavLink>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default Home;
