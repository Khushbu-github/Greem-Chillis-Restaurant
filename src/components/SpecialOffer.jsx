import React from "react";
import offerImage from "../assets/Offer.jpeg";

const SpecialOffer = () => {
    return (
        <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 bg-[var(--color-primary-green)] text-[var(--color-primary-yellow)] overflow-hidden font-sans">
            {/* Subtle golden gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-primary-green)]/20 via-transparent to-transparent"></div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
                    {/* Left: Image */}
                    <div className="relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-[var(--color-primary-yellow)] to-green-600 rounded-2xl blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-[var(--color-primary-yellow)]/30">
                            <img
                                src={offerImage}
                                alt="Unlimited Full Meals Offer"
                                className="w-full h-full object-cover transform transition duration-500 group-hover:scale-105"
                            />
                        </div>
                    </div>

                    {/* Right: Content */}
                    <div className="text-center lg:text-left space-y-6">
                        <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white">
                            <span className="block text-[var(--color-primary-yellow)] mb-2">LIMITED TIME</span>
                            SPECIAL OFFER
                        </h2>

                        <div className="space-y-4">
                            <h3 className="text-2xl sm:text-4xl font-semibold text-gray-200">
                                Unlimited Full Meals
                            </h3>
                            <div className="flex items-center justify-center lg:justify-start gap-4">
                                <span className="text-xl text-gray-400 line-through">₹250</span>
                                <span className="text-4xl sm:text-6xl font-extrabold text-[#ef4444]">
                                    ₹190
                                    <span className="text-lg sm:text-2xl ml-2 font-medium text-gray-300">only</span>
                                </span>
                            </div>
                        </div>

                        <p className="text-lg text-gray-300 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                            Experience the authentic taste of Andhra with our unlimited full meals.
                            Savor every bite of our generous spread, crafted with traditional spices and love.
                            Valid for dine-in customers only.
                        </p>

                        <div className="pt-4">
                            <a
                                href="#contact"
                                className="inline-block px-8 py-4 bg-[var(--color-primary-yellow)] text-black font-bold text-lg rounded-full shadow-lg hover:bg-yellow-400 transform hover:-translate-y-1 transition-all duration-300"
                            >
                                Claim Offer Now
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SpecialOffer;
