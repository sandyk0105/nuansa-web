"use client"
import { useState } from "react"

export default function GeneralForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");

    const formSubmitKey = process.env.NEXT_PUBLIC_FORMSUBMIT_KEY;
    const formSubmitSuccessUrl = process.env.NEXT_PUBLIC_FORMSUBMIT_URL + "?success=true";

    return (
        <div className="w-full flex flex-col gap-y-4">
            <div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl text-orange-a font-bold">General Inquiry</h2>
                <p className="text-md sm:text-lg my-4">Have a question or need assistance? We&apos;re here to help! Feel free to reach out to us with any inquiries!</p>
            </div>
            <form action={`https://formsubmit.co/${formSubmitKey}`} method="POST" className="w-full">
                <input type="hidden" name="_next" value={formSubmitSuccessUrl}></input>
                <div className="grid grid-cols-2 gap-x-8 gap-y-6">
                    <div className="col-span-2">
                        <label htmlFor="name" className="text-md sm:text-lg">Name</label>
                        <input type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} required
                               className="block w-full rounded-md border-0 px-2 sm:px-3.5 py-1.5 sm:py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-b sm:text-sm sm:leading-6 focus:outline-none"/>
                    </div>
                    <div className="col-span-2">
                        <label htmlFor="email" className="text-md sm:text-lg">Email</label>
                        <input type="text" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required
                               className="block w-full rounded-md border-0 px-2 sm:px-3.5 py-1.5 sm:py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-b sm:text-sm sm:leading-6 focus:outline-none"/>
                    </div>
                    <div className="col-span-2">
                        <label htmlFor="phone-number" className="text-md sm:text-lg">Phone Number</label>
                        <input type="text" id="phone-number" name="phone-number" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} required
                               className="block w-full rounded-md border-0 px-2 sm:px-3.5 py-1.5 sm:py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-b sm:text-sm sm:leading-6 focus:outline-none"/>
                    </div>
                    <div className="col-span-2">
                        <label htmlFor="subject" className="text-md sm:text-lg">Subject</label>
                        <input type="text" id="subject" name="subject" value={subject} onChange={(e) => setSubject(e.target.value)} required
                               className="block w-full rounded-md border-0 px-2 sm:px-3.5 py-1.5 sm:py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-b sm:text-sm sm:leading-6 focus:outline-none"/>
                    </div>
                    <div className="col-span-2">
                        <label htmlFor="message" className="text-md sm:text-lg">Message</label>
                        <div>
                            <textarea name="message" id="message" value={message} onChange={(e) => setMessage(e.target.value)} className="resize-none block w-full rounded-md h-40 border-0 px-2 sm:px-3.5 py-1.5 sm:py-2 text-xs sm:text-base text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-green-b focus:outline-none"></textarea>
                        </div>
                    </div>
                </div>
                <div className="mt-10">
                    <button
                        className="block w-full sm:w-48 rounded-md bg-orange-a px-3.5 py-2.5 text-center text-sm font-semibold text-green-a shadow-sm hover:bg-orange-a/75">Send Email
                    </button>
                </div>
            </form>
        </div>
    )
}