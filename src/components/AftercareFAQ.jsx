import React from 'react';
import AftercareQ from '../components/AftercareQ';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

function AftercareFAQ({ bgColor }) {
    return (
        <div className={bgColor}>
            <div className="py-4 mx-auto w-full px-4 max-w-4xl">
                <motion.h2 
                variants={fadeIn('right')}
                initial='hidden'
                whileInView={'show'}
                viewport={{ once: false, amount: 0.6 }}
                className="h2 max-w-full lg:mb-10">
                Your Guide to Tattoo Aftercare
                </motion.h2>
                <p className="text-left mb-8">
                     Thanks so much for choosing to get a tattoo with me! Here are some tips to help your tattoo heal perfectly. If you have any questions, don’t hesitate to reach out!
                </p>
                <br className="border-b border-gray-100" />
                <div className="space-y-4">
                    <AftercareQ
                        question="How long should I keep the foil on my new tattoo?"
                        answer="You can remove the foil after 3-4 hours. If you have second-skin, it can be removed after 1-3 days, but make sure not to leave it on for more than 3 days."
                    />
                    <AftercareQ
                        question="What is the best way to remove the foil or second-skin?"
                        answer="Remove the foil or second-skin with clean hands. For second-skin, it's best to remove it with water to avoid any discomfort."
                    />
                    <AftercareQ
                        question="How should I clean my new tattoo?"
                        answer="Gently wash your tattoo with water or fragrance-free soap. Ensure that all vaseline, blood, and excess ink are cleaned off. Do not apply new foil after cleaning."
                    />
                    <AftercareQ
                        question="What should I use to dry my tattoo?"
                        answer="Gently pat your tattoo dry with a paper towel or a clean cotton towel. Avoid rubbing or scratching the tattoo."
                    />
                    <AftercareQ
                        question="How often should I apply tattoo cream?"
                        answer="Apply a very thin layer of tattoo cream (such as panthenol or a similar product) 3-5 times a day."
                    />
                    <AftercareQ
                        question="Can I expose my new tattoo to sunlight?"
                        answer="Do not expose your new tattoo to direct sunlight or sun/tanning beds for the first 3 weeks."
                    />
                    <AftercareQ
                        question="When can I start using sunscreen on my tattoo?"
                        answer="Do not use sunscreen until your tattoo is fully healed."
                    />
                    <AftercareQ
                        question="Is it safe to swim after getting a new tattoo?"
                        answer="Avoid swimming in pools or ocean water for the first 3 weeks after getting your tattoo."
                    />
                    <AftercareQ
                        question="What type of clothing should I wear after getting a tattoo?"
                        answer="Wear soft cotton clothes and allow your tattoo to breathe as much as possible. Avoid wearing tight clothing until your tattoo is completely healed."
                    />
                    <AftercareQ
                        question="Can I scratch or pick at my new tattoo?"
                        answer="Do not scratch or pick at your tattoo. This can cause infection and damage the tattoo."
                    />
                    <AftercareQ
                        question="Should I let others touch my new tattoo?"
                        answer="Do not let other people touch your tattoo while it is healing, and avoid contact with dirty objects or surfaces."
                    />
                    <AftercareQ
                        question="What precautions should I take if I have pets?"
                        answer="Keep pets away from your tattoo while it is healing to avoid any risk of infection."
                    />
                    <AftercareQ
                        question="How much water should I drink after getting a tattoo?"
                        answer="Drink 2-3 liters of water a day for the first 4-5 days to help speed up the healing process."
                    />
                    <AftercareQ
                        question="Can I exercise after getting a new tattoo?"
                        answer="Exercise with great caution. Avoid contact sports and activities that may stretch the skin too much or cause excessive sweating. If you must train, ensure you clean your tattoo well afterward."
                    />
                </div>
            </div>
        </div>
    )
}

export default AftercareFAQ;
