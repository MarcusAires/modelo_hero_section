import React from "react";
import { FaPlay } from "react-icons/fa";
import { motion } from "framer-motion";
import { SlideRight } from "../../utility/animation";
import HeroImg from "../../assets/heroimg.png";

const Hero = () => {
    return (
        <>
            <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[650px] items-center mx-auto">
                {/* Informação da marca */}
                <div className="flex flex-col justify-center py-14 md:pr-16 xl:pr-40 md:py-0">
                    <div className="text-center md:text-left space-y-6">
                        <motion.p
                            variants={SlideRight(0.4)}
                            initial="hidden"
                            animate="visible"
                            className="text-orange-600 uppercase font-semibold"
                        >
                            Pedidos sob demanda
                        </motion.p>

                        <motion.h1
                            variants={SlideRight(0.6)}
                            initial="hidden"
                            animate="visible"
                            className="text-5xl font-semibold lg:text-6xl !leading-tight"
                        >
                            O lar dos seus produtos{" "}
                            <span className="text-primary">naturais</span>
                        </motion.h1>
                        <motion.p
                            variants={SlideRight(0.8)}
                            initial="hidden"
                            animate="visible"
                        >
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente,
                            numquam.
                        </motion.p>
                        {/* Botão da seção */}
                        <motion.div
                            variants={SlideRight(0.8)}
                            initial="hidden"
                            animate="visible"
                            className="flex gap-8 justify-center md:justify-start mt-8 items-center"
                        >
                            <button className="primary-btn">Encomendar</button>
                            <button className="flex justify-end items-center gap-2 font-semibold">
                                <span className="w-10 h-10 bg-secondary/15 rounded-full flex justify-center items-center">
                                    <FaPlay className="text-secondary" />
                                </span>
                                Saiba mais
                            </button>
                        </motion.div>
                    </div>
                </div>
                {/* Imagem da seção Hero */}
                <div className="flex justify-end items-center">
                    <motion.img
                        initial={{ opacity: 0, x: 200 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
                        src={HeroImg}
                        alt="Imagem de sabonetes"
                        className="w-[350px] md:w-[550px] xl:w-[700px] max-w-full"
                    />
                </div>
            </div>
        </>
    );
};

export default Hero;
