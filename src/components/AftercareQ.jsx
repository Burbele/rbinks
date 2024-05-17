import { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

function AftercareQ({ question, answer }) {
    const [expand, setExpand] = useState(false);
    const expandClass = expand ? 'block' : 'hidden';
    const ansClass = `${expandClass} p-4 text-base xl:text-xl`;

    return (
        <div className='shadow rounded border border-gray-100 border-t-0 bg-white'>
            <div 
                className='p-4 text-base xl:text-xl relative font-medium cursor-pointer'
                onClick={() => setExpand(!expand)}
            >
                <div className='w-5/6'>
                    {question}
                </div>
                <div className='text-base xl:text-xl absolute top-0 right-0 p-4'>
                    {expand ?
                        <FaChevronUp className='w-5' />
                        :
                        <FaChevronDown className='w-5' />
                    }
                </div>
            </div>
            <div className={ansClass}>
                {answer}
            </div>
        </div>
    );
}

export default AftercareQ;
