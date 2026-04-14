"use client"
import axios from "axios";
import toast from "react-hot-toast";
import { useParams } from "next/navigation"
import { products } from "@/data/data"
import { useState } from "react"
import { motion } from "framer-motion"
import { MessageCircle, Phone } from "lucide-react"

export default function Page() {
    const { id } = useParams()
    const product = products.find((p) => p.id === id)
    const [activeTab, setActiveTab] = useState("H2")
    const [activeImage, setActiveImage] = useState(product?.img)
    if (!product) return <div className="text-white">Not found</div>

    const spec = product.specs[activeTab]
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = {
            platform: "Newtech Contact Form",
            platformEmail: "director@nvsledwall.com",
            name: formData.get("contactPerson"),
            email: formData.get("email"),
            company: 'NA',
            phone: formData.get("phone"),
            product: "NA",
            place: "Delhi",
            message: formData.get("message"),
        };
        if (!data.phone || data.phone.length < 10)
            return toast.error("Enter Valid Phone Number");

        try {
            setLoading(true);
            const res = await axios.post("https://brandbnalo.com/api/form/add", data,
                { validateStatus: (status) => status >= 200 && status < 500 }
            );
            if (res.status >= 200 && res.status < 300) {
                toast(
                    "Your enquiry has been submitted ✔.\n\n Our team will contact you shortly..",
                    {
                        duration: 6000,
                    }
                );
                setTimeout(() => {
                    e.target.reset();      // reset after UI change
                }, 100);
            }
        } catch (err) {
            console.log("ERROR:", err?.response || err.message);
            toast.error("Something went wrong");
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="bg-gray-50 text-black p-6">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10">
                <div className="md:w-1/2 md:sticky md:top-20 h-fit">
                    <motion.img
                        src={activeImage}
                        className="w-full rounded-xl border border-gray-900"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                    />

                    <div className="flex gap-3 mt-4">
                        {product.images.map((img, i) => (
                            <img
                                key={i}
                                src={img}
                                onClick={() => setActiveImage(img)}
                                className={`w-20 h-20 object-cover rounded-lg cursor-pointer border ${activeImage === img
                                    ? "border-gray-600 showdow-lg"
                                    : "border-gray-900"
                                    }`}
                            />
                        ))}
                    </div>
                </div>

                <div className="md:w-1/2">
                    <h1 className="text-4xl font-bold mb-2">
                        {product.name}
                    </h1>

                    <span className="text-white text-sm font-medium bg-black px-4 py-2 rounded-2xl">
                        Category:  {product.catName}
                    </span>

                    <div className="flex gap-4 my-4">
                        <button className="flex items-center gap-2 text-white bg-green-600 px-5 py-2 rounded-lg hover:bg-green-700">
                            <MessageCircle size={18} /> WhatsApp Now
                        </button>

                        <button className="flex items-center gap-2 border bg-orange-100 border-orange-500 text-orange-400 px-5 py-2 rounded-lg hover:bg-orange-500 hover:text-white">
                            <Phone size={18} /> Enquire Now
                        </button>
                    </div>

                    <div className="mt-2">
                        <h2 className="text-xl font-semibold mb-2">Specifications</h2>
                        <div className="flex gap-3 mb-5 flex-wrap">
                            {Object.keys(product.specs).map((tab) => (
                                <button
                                    key={tab}
                                    onClick={() => setActiveTab(tab)}
                                    className={`px-4 py-2 rounded-lg text-sm ${activeTab === tab
                                        ? "bg-black text-white"
                                        : "bg-white border border-gray-700"
                                        }`}
                                >
                                    {tab}
                                </button>
                            ))}
                        </div>


                        <motion.div key={activeTab} initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                            className="border border-gray-500 rounded-xl overflow-hidden">
                            <table className="w-full">
                                <tbody>
                                    <Row label="Chassis Size" value={spec.chassis} />
                                    <Row label="Max Input Cards" value={spec.inputCards} />
                                    <Row label="Max Input Channels" value={spec.inputChannels} />
                                    <Row label="Max Output Cards" value={spec.outputCards} />
                                    <Row label="Max Loading Capacity" value={spec.loading} />
                                    <Row label="Max Layers" value={spec.layers} />
                                    <Row label="Power Consumption" value={spec.power} />
                                    <Row label="Dimensions" value={spec.size} />
                                    <Row label="Net Weight" value={spec.weight} />
                                </tbody>
                            </table>
                        </motion.div>
                    </div>

                </div>
            </div>

            <div className="max-w-7xl mx-auto grid grid-cols-2 gap-5 py-8">
                <Section title="Product Overview" data={product.overview} />

                <Section title="Key Features" data={product.features} />

                <Section title="Why Choose Us" data={product.whyUs} />

                <div className="bg-white p-4 rounded-md border border-gray-200">
                    <h2 className="text-2xl font-semibold mb-4 text-center">Looking for the Right LED Display?</h2>
                    <form className="space-y-4" onSubmit={handleSubmit}>
                       <div className="flex gap-4">
                        <input
                            name="contactPerson"
                            type="text"
                            placeholder="Your Name"
                            className="w-full p-3 rounded-lg bg-white border border-black/20 focus:outline-none focus:border-black transition"
                        />

                        {/* Email */}
                        <input
                            name="email"
                            type="email"
                            placeholder="Your Email"
                            className="w-full p-3 rounded-lg bg-white border border-black/20 focus:outline-none focus:border-black transition"
                        />
                       </div>

                        {/* Phone */}
                        <input
                            name="phone"
                            type="tel"
                            placeholder="Phone Number"
                            className="w-full p-3 rounded-lg bg-white border border-black/20 focus:outline-none focus:border-black transition"
                        />

                        {/* Message */}
                        <textarea
                            rows="2"
                            name="message"
                            placeholder="Your Message"
                            className="w-full p-3 rounded-lg bg-white border border-black/20 focus:outline-none focus:border-black transition"
                        ></textarea>

                        {/* Button */}
                        <button disabled={loading} type="submit"
                            className="w-full bg-black text-white font-semibold py-3 rounded-lg transition-all duration-300 hover:scale-[1.02]"
                        >
                            {loading ? "Submitting..." : "Send Message"}
                        </button>
                    </form>

                </div>
            </div>
        </section>
    )
}

/* REUSABLE SECTION */
function Section({ title, data }) {
    return (
        <div className="bg-white p-4 rounded-md border border-gray-200">
            <h2 className="text-2xl font-semibold mb-4 text-center">{title}</h2>
            <ul className="space-y-2 text-gray-700">
                {data.map((item, i) => (
                    <li key={i}>● {item}</li>
                ))}
            </ul>
        </div>
    )
}

/* TABLE ROW */
function Row({ label, value }) {
    return (
        <tr className="border-b border-gray-500">
            <td className="p-3 bg-black text-white w-1/2">{label}</td>
            <td className="p-3">{value}</td>
        </tr>
    )
}