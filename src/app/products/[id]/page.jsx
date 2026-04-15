"use client"
import axios from "axios";
import toast from "react-hot-toast";
import { useParams } from "next/navigation"
import { products } from "@/data/data"
import { useState } from "react"
import { motion } from "framer-motion"
import { MessageCircle, Phone } from "lucide-react"
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Thumbs } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
export default function Page() {
    const { id } = useParams()
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
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

    const formatLabel = (key) => {
        return key
            .replace(/([A-Z])/g, " $1")   // split camelCase
            .replace(/^./, str => str.toUpperCase()) // capitalize first
    }

    return (<>
        <section className="relative w-full h-62 md:h-88 flex items-center justify-center text-white">
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage: "url('/banner.webp')", // change path
                }}
            />

            <div className="absolute inset-0 bg-black/50" />
            <div className="relative z-10 flex flex-col items-center text-center px-4">
                <div className="flex items-center gap-2 text-sm md:text-base">
                    <Link href="/" className="hover:underline">
                        Home
                    </Link>
                    <span>/</span>
                    <Link href="/products" className="hover:underline">
                        All Products
                    </Link>
                    <span>/</span>
                    <span className="text-gray-300">{product.name}</span>
                </div>

                {/* Title */}
                <h1 className="text-2xl md:text-5xl font-bold mb-2">
                    {product.name}
                </h1>
            </div>
        </section>

        <section className="bg-gray-50 text-black p-6">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10">
                <div className="md:w-1/2 md:sticky md:top-20 h-fit">
                    <Swiper
                        modules={[Navigation, Autoplay, Thumbs]}
                        navigation={true}
                        autoplay={{
                            delay: 5000,
                            disableOnInteraction: false,
                        }}
                        thumbs={{ swiper: thumbsSwiper }}
                        spaceBetween={10}
                        slidesPerView={1}
                        grabCursor={true}
                        className="rounded-xl border border-gray-900"
                    >
                        {product.images.map((img, i) => (
                            <SwiperSlide key={i}>
                                <img
                                    src={img}
                                    className="w-full h-full object-cover rounded-xl"
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* Thumbnail Slider */}
                    <Swiper
                        onSwiper={setThumbsSwiper}
                        spaceBetween={10}
                        slidesPerView={4}
                        watchSlidesProgress={true}
                        className="mt-4"
                    >
                        {product.images.map((img, i) => (
                            <SwiperSlide key={i} className="!w-20 !h-20">
                                <img
                                    src={img}
                                    className="w-20 h-20 object-cover rounded-lg cursor-pointer border border-gray-900"
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                <div className="md:w-1/2">
                    <h1 className="text-4xl font-bold mb-2">
                        {product.name}
                    </h1>

                    <span className="text-white border border-white text-sm font-medium bg-black px-4 py-2 rounded-2xl">
                        Category:  {product.catName}
                    </span>

                    <div className="flex gap-4 my-4">
                        <a href={`https://wa.me/+919810103697?text=Hi, I have seen your product on https://newtech.com and I am interested in ${product.name}`}
                            target="_blank" className="flex items-center gap-2 text-white bg-green-600 px-5 py-2 rounded-lg hover:bg-green-700">
                            <MessageCircle size={18} /> WhatsApp Now
                        </a>

                        <a href="tel:+919810103697" className="flex items-center gap-2 border bg-orange-200 border-orange-500 text-orange-600 px-5 py-2 rounded-lg hover:bg-orange-500 hover:text-white">
                            <Phone size={18} /> Enquire Now
                        </a>
                    </div>

                    <div className="mt-2">
                        <h2 className="text-2xl font-semibold mb-4">Specifications</h2>
                        <div className="flex gap-3 mb-6 flex-wrap">
                            {Object.keys(product.specs).map((tab) => (
                                <button key={tab} onClick={() => setActiveTab(tab)}
                                    className={`px-4 py-2 rounded-lg text-sm transition ${activeTab === tab
                                        ? "bg-black text-white"
                                        : "bg-gray-200 hover:bg-gray-300 border border-gray-400"
                                        }`}
                                >
                                    {tab}
                                </button>
                            ))}
                        </div>

                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                        >
                            {Object.entries(spec).map(([key, value]) => (
                                <div key={key}
                                    className="p-4 rounded-xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition"
                                >
                                    <p className="text-sm text-gray-500 mb-1">
                                        {formatLabel(key)}
                                    </p>
                                    <p className="text-lg font-semibold text-gray-900">
                                        {value}
                                    </p>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 py-8">
                <Section title="Product Overview" data={product.overview} />

                <Section title="Key Features" data={product.features} />

                <Section title="Why Choose Us" data={product.whyUs} />

                <div className="bg-white p-4 rounded-md border border-gray-200 relative">
                    {/* Background Image */}
                    <div
                        className="absolute inset-0 bg-cover bg-center rounded-2xl"
                        style={{
                            backgroundImage: "url('/optima-2 (1).jpg')",
                        }}
                    />
                    <div className="absolute inset-0 bg-black/50 rounded-2xl" />
                    <h2 className="relative text-2xl font-semibold mb-4 text-center text-white">Looking for the Right LED Display?</h2>
                    <form className="relative space-y-4" onSubmit={handleSubmit}>
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
                            className="w-full bg-white text-black font-semibold py-3 rounded-lg transition-all duration-300 hover:scale-[1.02]"
                        >
                            {loading ? "Submitting..." : "Send Message"}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    </>)
}

function Section({ title, data }) {
    return (
        <div className="p-4 rounded-2xl border border-gray-200 relative overflow-hidden">

            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center rounded-2xl"
                style={{
                    backgroundImage: "url('/optima-2 (1).jpg')",
                }}
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/50 rounded-xl" />

            {/* Content */}
            <h2 className="relative text-2xl font-semibold mb-4 text-center text-white">
                {title}
            </h2>

            <ul className="relative space-y-2 text-gray-50">
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