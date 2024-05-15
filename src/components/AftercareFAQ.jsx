import React from 'react';
import AftercareQ from '../components/AftercareQ';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import { useTranslation } from 'react-i18next';

function AftercareFAQ({ bgColor }) {
    const { t } = useTranslation();

    return (
        <div className={bgColor}>
            <div className="py-4 mx-auto w-full px-4 max-w-4xl">
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
                <div className="space-y-4">
                    <AftercareQ
                        question={t('aftercare.q1')}
                        answer={t('aftercare.a1')}
                    />
                    <AftercareQ
                        question={t('aftercare.q2')}
                        answer={t('aftercare.a2')}
                    />
                    <AftercareQ
                        question={t('aftercare.q3')}
                        answer={t('aftercare.a3')}
                    />
                    <AftercareQ
                        question={t('aftercare.q4')}
                        answer={t('aftercare.a4')}
                    />
                    <AftercareQ
                        question={t('aftercare.q5')}
                        answer={t('aftercare.a5')}
                    />
                    <AftercareQ
                        question={t('aftercare.q6')}
                        answer={t('aftercare.a6')}
                    />
                    <AftercareQ
                        question={t('aftercare.q7')}
                        answer={t('aftercare.a7')}
                    />
                    <AftercareQ
                        question={t('aftercare.q8')}
                        answer={t('aftercare.a8')}
                    />
                    <AftercareQ
                        question={t('aftercare.q9')}
                        answer={t('aftercare.a9')}
                    />
                    <AftercareQ
                        question={t('aftercare.q10')}
                        answer={t('aftercare.a10')}
                    />
                    <AftercareQ
                        question={t('aftercare.q11')}
                        answer={t('aftercare.a11')}
                    />
                    <AftercareQ
                        question={t('aftercare.q12')}
                        answer={t('aftercare.a12')}
                    />
                    <AftercareQ
                        question={t('aftercare.q13')}
                        answer={t('aftercare.a13')}
                    />
                    <AftercareQ
                        question={t('aftercare.q14')}
                        answer={t('aftercare.a14')}
                    />
                </div>
            </div>
        </div>
    );
}

export default AftercareFAQ;
