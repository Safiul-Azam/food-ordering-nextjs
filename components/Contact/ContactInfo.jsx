import {BsPhone} from 'react-icons/bs'
import {RiMapPinAddLine} from 'react-icons/ri'
import {HiOutlineMail} from 'react-icons/hi'
function ContactInfo() {
    return (
        <div className='grid grid-cols-3 py-16 text-gray-500 container mx-auto'>
            <div className=''>
                <BsPhone className="text-secondary text-5xl"/>
                <h3 className='text-2xl text-black font-bold mt-8 mb-5'>Phone:</h3>
                <p>+ 44 123 456 78 90</p>
                <p>+ 844 123 444 77 88</p>
            </div>
            <div>
                <RiMapPinAddLine className="text-secondary text-5xl"/>
                <h3 className='text-2xl text-black font-bold mt-8 mb-5'>Address</h3>
                <p>Box 565, Pinney &apos;s Beach, Charlestown</p>
                <p>Nevis, West Indies, Caribbean</p>
            </div>
            <div>
                <HiOutlineMail className="text-secondary text-5xl"/>
                <h3 className='text-2xl text-black font-bold mt-8 mb-5'>E-Mail</h3>
                <p>contact@example.com</p>
                <p>info@example.com</p>
            </div>
        </div>
    );
}

export default ContactInfo;