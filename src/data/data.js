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
            "/h9.webp",
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
                size: "482.6 × 88.1 × 252.8 mm",
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
    }
]