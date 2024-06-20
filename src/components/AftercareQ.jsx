import { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'; // Icons for expand/collapse

function AftercareQ({ question, answer, icon }) {
    const [expand, setExpand] = useState(false); // State to track expansion
    const expandClass = expand ? 'block' : 'hidden'; // CSS class for toggling visibility
    const ansClass = `${expandClass} p-6 text-sm xl:text-base`; // Combined classes for answer section

    return (
        <div className='shadow rounded border border-gray-100 border-t-0 bg-white'>
            {/* Question section, toggles expansion on click */}
            <div 
                className='px-6 py-4 text-base xl:text-lg relative font-medium cursor-pointer flex items-center justify-between' // Used flexbox for vertical alignment
                onClick={() => setExpand(!expand)}
            >
                <div className='flex items-center w-5/6'>
                    <img src={icon} alt="icon" className='w-6 h-6 mr-4' />
                    {question}
                </div>
                <div className='text-base xl:text-lg'>
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
