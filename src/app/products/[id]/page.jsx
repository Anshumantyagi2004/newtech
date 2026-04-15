"use client"
import axios from "axios";
import toast from "react-hot-toast";
import { useParams } from "next/navigation"
import { products } from "@/data/data"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
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
    const relProduct = products.filter((p) => p.catId === product.catId)
    if (!product) return <div className="text-white">Not found</div>

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

    const isNestedSpecs = typeof Object.values(product.specs)[0] === "object";
    const defaultTab = isNestedSpecs ? Object.keys(product.specs)[0] : "Specs";
    const [activeTab, setActiveTab] = useState(defaultTab);
    const spec = isNestedSpecs ? product.specs[activeTab] : product.specs;

    const formatLabel = (key) => {
        return key
            .replace(/([A-Z])/g, " $1")   // split camelCase
            .replace(/^./, str => str.toUpperCase()) // capitalize first
    }

    const tabs = ["overview", "features", "whyUs"];

    const tabLabels = {
        overview: "Overview",
        features: "Features",
        whyUs: "Why Choose Us"
    };

    const [activeTab1, setActiveTab1] = useState("overview");
    const content = product[activeTab1];

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
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10 pb-4">
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
                        className=""
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
                        className="mt-2"
                    >
                        {product.images.map((img, i) => (
                            <SwiperSlide key={i} className="w-20! h-20!">
                                <img
                                    src={img}
                                    className="w-20 h-20 object-cover rounded-lg cursor-pointer border border-gray-400"
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                <div className="md:w-1/2">
                    <h1 className="text-4xl font-bold mb-4">
                        {product.name}
                    </h1>

                    <div className="mb-4">
                        {isNestedSpecs && (
                            <div className="flex gap-3 mb-4 flex-wrap">
                                {Object.keys(product.specs).map((tab) => (
                                    <button
                                        key={tab}
                                        onClick={() => setActiveTab(tab)}
                                        className={`px-4 py-2 rounded-lg text-sm transition ${activeTab === tab
                                            ? "bg-black text-white"
                                            : "bg-gray-200 hover:bg-gray-300 border border-gray-400"
                                            }`}
                                    >
                                        {tab}
                                    </button>
                                ))}
                            </div>
                        )}

                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="grid gap-"
                        >
                            {Object.entries(spec).map(([key, value]) => (
                                <div key={key}
                                    className="flex items-center gap-2 px-4 py-1 rounded-xl"
                                >
                                    <p className="text-lg text-gray-800 flex items-center">
                                        ● {formatLabel(key)}:
                                    </p>
                                    <p className="text-lg font-semibold text-gray-700">
                                        {value}
                                    </p>
                                </div>
                            ))}
                        </motion.div>
                    </div>

                    <span className="text-xl font-medium">
                        <span className="font-bold">Category:</span> {product.catName}
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
                </div>
            </div>

            <div className="max-w-6xl mx-auto py-10 px-4 bg-white">
                <div className="flex gap-3 mb-8 flex-wrap justify-start">
                    {tabs.map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab1(tab)}
                            className={`px-5 py-2 rounded-full text-sm font-medium transition ${activeTab1 === tab
                                    ? "bg-black text-white"
                                    : "bg-gray-200 hover:bg-gray-300 border border-gray-300"
                                }`}
                        >
                            {tabLabels[tab]}
                        </button>
                    ))}
                </div>

                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab1}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.4 }}
                        className="space-y-4"
                    >
                        <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
                            {activeTab1 === "whyUs" ? "Why Choose Us" : tabLabels[activeTab1]}
                        </h2>

                        <ul className="space-y-1">
                            {content.map((item, index) => (
                                <motion.li
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.08 }}
                                    className="flex items-start gap-3 px-4 py-2"
                                >
                                    <span className="mt-1 text-black">•</span>
                                    <span className="text-gray-700 text-sm leading-relaxed">
                                        {item}
                                    </span>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                </AnimatePresence>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.4 }}
                    className="mt-6 flex justify-center"
                >
                    <button className="px-6 py-3 rounded-full bg-black text-white text-sm font-medium hover:bg-gray-800 transition">
                        Learn More →
                    </button>
                </motion.div>
            </div>
        </section>

        <div className="py-10 max-w-7xl mx-auto bg-white">
            <h1 className="text-center font-bold text-2xl md:text-5xl mb-6 text-black">Related Products</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relProduct.filter(i => i.id != product.id).map((item, index) => (
                    <motion.div
                        key={index}
                        whileHover={{ scale: 1.03 }}
                        transition={{ duration: 0.4 }}
                        className="group relative rounded-3xl overflow-hidden"
                    >
                        {/* Image */}
                        <img
                            src={item.img}
                            alt={item.name}
                            className="w-full h-[220px] md:h-[280px] object-cover transition duration-500 group-hover:scale-110"
                        />

                        {/* Soft Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition duration-500"></div>

                        {/* Content */}
                        <div className="absolute bottom-0 p-5 text-white flex justify-between items-center w-full">
                            <h3 className="text-base md:text-lg font-medium">
                                {item.name}
                            </h3>

                            <div className="">
                                <Link href={`/products/${item?.id}`} className="text-sm font-medium border border-white px-4 py-2 rounded-full backdrop-blur-md bg-white/10 hover:bg-white hover:text-black transition">
                                    View Displays →
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    </>)
}
