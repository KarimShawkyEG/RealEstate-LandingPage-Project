import React from 'react'
import { toast } from 'react-toastify';
import { motion } from 'framer-motion'


const Contact = () => {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "5c6b5ba7-b529-4ced-900c-c389a51c3304");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("");
            toast.success("Message Sent");
            event.target.reset();
        } else {
            console.log("Error", data);
            toast.error(data.message);
            setResult(data.message);
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, x: -50 }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, x: 0 }}
            className='text-center p-6 py-20 lg:px-32 w-full overflow-hidden' id='Contact'>
            <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>Contact <span className='underline underline-offset-4 decoration-1 under font-light'>Our Team</span></h1>
            <p className='text-center text-gray-500 mb-12 max-w-80 mx-auto'>Your Feedback Matters to Us the Most</p>

            <form onSubmit={onSubmit} className='max-w-4xl mx-auto text-gray-600 pt-8'>
                <div className='flex flex-wrap'>
                    <div className='w-full md:w-1/2 text-left'>
                        <div>Name</div>
                        <input type='text' placeholder='Full Name' required className='w-full border border-gray-300 rounded py-3 px-4 mt-2' name='Name' />
                    </div>
                    <div className='w-full md:w-1/2 text-left md:pl-4'>
                        <div>Email</div>
                        <input type='email' placeholder='Email' required className='w-full border border-gray-300 rounded py-3 px-4 mt-2' name='Email' />
                    </div>
                </div>
                <div className='my-6 text-left'>
                    Message
                    <textarea name='Message' placeholder='Message' required className='w-full border border-gray-300 rounded py-3 px-4 mt-2 h-48 resize-none'></textarea>
                </div>
                <button className='bg-blue-600 text-white py-2 px-12 mb-10 rounded cursor-pointer'>
                    {result ? result : "Submit"}
                </button>
            </form>

        </motion.div>
    )
}

export default Contact