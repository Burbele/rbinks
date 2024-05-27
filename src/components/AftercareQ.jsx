import { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'; // Icons for expand/collapse

function AftercareQ({ question, answer }) {
    const [expand, setExpand] = useState(false); // State to track expansion
    const expandClass = expand ? 'block' : 'hidden'; // CSS class for toggling visibility
    const ansClass = `${expandClass} p-4 text-base xl:text-xl`; // Combined classes for answer section

    return (
        <div className='shadow rounded border border-gray-100 border-t-0 bg-white'>
            {/* Question section, toggles expansion on click */}
            <div 
                className='p-4 text-base xl:text-xl relative font-medium cursor-pointer'
                onClick={() => setExpand(!expand)}
            >
                <div className='w-5/6'>
                    {question}
                </div>
                <div className='text-base xl:text-xl absolute top-0 right-0 p-4'>
                    {expand ?
                        <FaChevronUp className='w-5' /> // Up arrow when expanded
                        :
                        <FaChevronDown className='w-5' /> // Down arrow when collapsed
                    }
                </div>
            </div>
            {/* Answer section, visible only if expanded */}
            <div className={ansClass}>
                {answer}
            </div>
        </div>
    );
}

export default AftercareQ;
