import React from 'react';
import AftercareQ from '../components/AftercareQ'; // Component for individual FAQ items
import { motion } from 'framer-motion'; // Animation library
import { fadeIn } from '../variants'; // Custom animation variants
import { useTranslation } from 'react-i18next'; // Translation hook

// Paths to the icons
import q1 from '../img/icons/q1.png';
import q2 from '../img/icons/q2.png';
import q3 from '../img/icons/q3.png';
import q4 from '../img/icons/q4.png';
import q5 from '../img/icons/q5.png';
import q6 from '../img/icons/q6.png';
import q7 from '../img/icons/q7.png';
import q8 from '../img/icons/q8.png';
import q9 from '../img/icons/q9.png';
import q10 from '../img/icons/q10.png';
import q11 from '../img/icons/q11.png';
import q12 from '../img/icons/q12.png';
import q13 from '../img/icons/q13.png';
import q14 from '../img/icons/q14.png';


function AftercareFAQ({ bgColor }) {
    const { t } = useTranslation(); // Translation function

    return (
        <div className={bgColor}>
            <div className="py-4 mx-auto w-full px-4 max-w-4xl">
                {/* Animated heading */}
                <motion.h2 
                    variants={fadeIn('right')}
                    initial='hidden'
                    whileInView={'show'}
                    viewport={{ once: true, amount: 0.6 }}
                    className="h2 max-w-full lg:mb-10">
                    {t('heading5')}
                </motion.h2>
                <p className="text-left mb-8">
                    {t('aftercaredescription')}
                </p>
                <br className="border-b border-gray-100" />
                <div className="space-y-5">
                    {/* FAQ items using AftercareQ component */}
                    <AftercareQ
                        question={t('aftercare.q1')}
                        answer={t('aftercare.a1')}
                        icon={q1}
                    />
                    <AftercareQ
                        question={t('aftercare.q2')}
                        answer={t('aftercare.a2')}
                        icon={q2}
                    />
                    <AftercareQ
                        question={t('aftercare.q3')}
                        answer={t('aftercare.a3')}
                        icon={q3}
                    />
                    <AftercareQ
                        question={t('aftercare.q4')}
                        answer={t('aftercare.a4')}
                        icon={q4}
                    />
                    <AftercareQ
                        question={t('aftercare.q5')}
                        answer={t('aftercare.a5')}
                        icon={q5}
                    />
                    <AftercareQ
                        question={t('aftercare.q6')}
                        answer={t('aftercare.a6')}
                        icon={q6}
                    />
                    <AftercareQ
                        question={t('aftercare.q7')}
                        answer={t('aftercare.a7')}
                        icon={q7}
                    />
                    <AftercareQ
                        question={t('aftercare.q8')}
                        answer={t('aftercare.a8')}
                        icon={q8}
                    />
                    <AftercareQ
                        question={t('aftercare.q9')}
                        answer={t('aftercare.a9')}
                        icon={q9}
                    />
                    <AftercareQ
                        question={t('aftercare.q10')}
                        answer={t('aftercare.a10')}
                        icon={q10}
                    />
                    <AftercareQ
                        question={t('aftercare.q11')}
                        answer={t('aftercare.a11')}
                        icon={q11}
                    />
                    <AftercareQ
                        question={t('aftercare.q12')}
                        answer={t('aftercare.a12')}
                        icon={q12}
                    />
                    <AftercareQ
                        question={t('aftercare.q13')}
                        answer={t('aftercare.a13')}
                        icon={q13}
                    />
                    <AftercareQ
                        question={t('aftercare.q14')}
                        answer={t('aftercare.a14')}
                        icon={q14}
                    />
                </div>
            </div>
        </div>
    );
}

export default AftercareFAQ;
