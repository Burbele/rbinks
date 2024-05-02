import React from 'react';
import AftercareQ from '../components/AftercareQ';

function AftercareFAQ({ bgColor }) {
    return (
        <div className={bgColor}>
            <div className="py-16 mx-auto w-full px-4 max-w-4xl">
                <h3 className="mb-12 text-3xl text-center leading-8 font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">Everything you need to know after getting a tattoo</h3>
                <br className="border-b border-gray-100" />
                <AftercareQ
                    question="Are you a cat?"
                    answer="I am not a cat."
                />
                <AftercareQ
                    question="Are you a cat?"
                    answer="I am not a cat."
                />
                   <AftercareQ
                    question="Are you a cat?"
                    answer="I am not a cat.I am not a cat.I am not a cat.I am not a cat.I am not a cat.I am not a cat.I am not a cat.I am not a cat."
                />
                <AftercareQ
                    question="Are you a cat?"
                    answer="I am not a cat."
                />
            </div>
        </div>
    )
}

export default AftercareFAQ;
