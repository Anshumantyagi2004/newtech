export const categories = [
    { title: "Accessories & Controllers", img: "/aura-1.jpg", id: "accessories-and-controllers" },
    { title: "Indoor Advertising LED Displays", img: "/optima-2.jpg", id: "indoor-advertising-led-displays" },
    { title: "Outdoor Advertising LED Displays", img: "/rental-cabinet-1.jpg", id: "outdoor-advertising-led-displays" },
    { title: "Advertising LED Display", img: "/optima-2 (1).jpg", id: "advertising-led-display" },
    { title: "LED Video Wall Display", img: "/luxe-2-banner.jpg", id: "led-video-wall-display" },
    { title: "LED Display Boards", img: "/vivid-2.jpg", id: "led-display-boards" },
];

export const products = [
    {
        name: "H Series",
        id: "h-series",
        catId: "accessories-and-controllers",
        catName: "Accessories & Controllers",
        img: "/H20.webp",

        images: [
            "/h2.png",
            "/H20.webp",
            "/H9.webp",
        ],

        overview: [
            "H Series LED Display is a high-performance advertising LED display screen designed to deliver exceptional visual clarity with smooth image output and precise color accuracy for professional indoor environments",
            "Engineered for seamless LED video wall display applications, it ensures consistent brightness, uniform color reproduction, and stable long-term performance",
            "Ideal for corporate offices, control rooms, retail environments, and digital signage installations where reliability and visual precision are essential",
            "Features a sleek and modern cabinet design that integrates effortlessly into contemporary interior spaces while maintaining durability ",
            "Built for efficiency and continuous operation, making it a dependable solution for mission-critical and high-usage display applications "
        ],

        features: [
            "Delivers high-resolution visuals with smooth image rendering and accurate color reproduction for professional-grade display performance",
            "Designed for stable and reliable operation, ensuring consistent output during long hours of continuous use",
            "Sleek and durable cabinet construction enhances aesthetics while providing structural strength and efficient heat management",
            "Seamless panel alignment ensures a smooth and gapless LED video wall display experience across large screen setups",
            "Energy-efficient design optimizes power consumption while maintaining high brightness and performance"
        ],

        whyUs: [
            "Expertise in delivering reliable and high-quality advertising LED display solutions for professional indoor applications",
            "Advanced engineering in LED video wall displays ensures seamless performance, precision, and long-term durability",
            "Proven capability in designing customized LED wall display systems tailored to corporate, retail, and control room environments",
            "Strong focus on quality, efficiency, and consistent performance across all LED display solutions",
            "End-to-end support including consultation, installation, and after-sales service for a smooth and professional experience"
        ],

        specs: {
            H2: {
                chassis: "2U",
                inputCards: 1,
                inputChannels: 16,
                outputCards: 2,
                loading: "26M px",
                layers: 32,
                power: "210W",
                size: "482.6×88.1×252.8 mm",
                weight: "15.5 kg"
            },
            H5: {
                chassis: "5U",
                inputCards: 5,
                inputChannels: 40,
                outputCards: 4,
                loading: "39M px",
                layers: 48,
                power: "400W",
                size: "482.6 × 222.8 × 252.8 mm",
                weight: "26 kg"
            },
            H9: {
                chassis: "9U",
                inputCards: 10,
                inputChannels: 60,
                outputCards: 8,
                loading: "65M px",
                layers: 80,
                power: "450W",
                size: "482.6 × 405.8 × 533.0 mm",
                weight: "35 kg"
            },
            H15: {
                chassis: "15U",
                inputCards: 15,
                inputChannels: 120,
                outputCards: 16,
                loading: "130M px",
                layers: 160,
                power: "900W",
                size: "482.6 × 633.0 × 533.0 mm",
                weight: "48 kg"
            }
        }
    },
    {
        name: "Controllers",
        id: "controller",
        catId: "accessories-and-controllers",
        catName: "Accessories & Controllers",
        img: "/download.jfif",

        images: [
            "/download.jfif",
            "/con-1.jpg",
        ],

        overview: [
            "LED Display Controllers are the core processing units behind every advertising LED display screen, managing, optimizing, and distributing visual content with precision and stability",
            "Designed to support seamless LED video wall display performance, they ensure synchronized playback across multiple panels and large-scale display systems",
            "Ideal for events, digital signage, control rooms, and complex multi-screen environments requiring accurate and reliable content management",
            "Enable smooth communication between input sources and display systems, ensuring consistent image quality and real-time content delivery",
            "Built to handle both simple and advanced display setups, making them essential for achieving high-performance LED wall display operations"
        ],

        features: [
            "Advanced Signal Processing ensures smooth video playback, accurate color reproduction, and high-quality image output across all connected displays",
            "Seamless Synchronization between panels enables flawless LED video wall display performance without lag or visual distortion",
            "Supports multiple input sources and flexible configurations for both small-scale and large, complex display systems",
            "Designed for stable and reliable operation, ensuring uninterrupted performance during continuous usage and live events",
            "User-friendly control interfaces allow easy setup, monitoring, and real-time adjustments for efficient display management"
        ],

        whyUs: [
            "Expertise in delivering complete advertising LED display solutions including high-performance control systems",
            "Advanced technology integration ensures optimized performance for LED video wall displays and multi-screen environments",
            "Proven capability in handling complex LED wall display systems with seamless synchronization and control",
            "Strong focus on reliability, precision, and performance across all display components and solutions",
            "End-to-end support including system configuration, installation assistance, and technical support for smooth operation"
        ],

        specs: {
            dimensions: "178 mm × 102.5 mm × 28.5 mm",
            weight: "380.1 g",
            inputVoltage: "5 V DC",
            powerConsumption: "10 W",
            operatingTemperature: "-40°C – 75°C",
            operatingHumidity: "0% RH – 80% RH",
            storageTemperature: "0°C – 50°C",
            storageHumidity: "0% RH – 80% RH",
            memory: "1 GB",
            internalStorage: "8 GB",
            dimensions: "335 mm × 190 mm × 62 mm",
        },
    },
]