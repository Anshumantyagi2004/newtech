export const categories = [
    { title: "Accessories & Controllers", img: "/aura-1.jpg", id: "accessories-and-controllers" },
    { title: "Indoor Advertising LED Displays", img: "/optima-2.jpg", id: "indoor-advertising-led-displays" },
    { title: "Outdoor Advertising LED Displays", img: "/rental-cabinet-1.jpg", id: "outdoor-advertising-led-displays" },
    { title: "Advertising LED Display", img: "/optima-2 (1).jpg", id: "advertising-led-display" },
    { title: "LED Video Wall Display", img: "/luxe-2-banner.jpg", id: "led-video-wall-display" },
    { title: "LED Display Boards", img: "/vivid-2.jpg", id: "led-display-boards" },
];

export const products = [
    // Accessories & Controllers
    {
        name: "H Series LED Display",
        id: "h-series-led-display",
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
        name: "Controllers Indoor LED Display",
        id: "controller-indoor-led-display",
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
    {
        name: "Processor LED Wall Display System",
        id: "processor-led-wall-display-system",
        catId: "accessories-and-controllers",
        catName: "Accessories & Controllers",
        img: "/download.jfif",

        images: [
            "/download.jfif",
            "/con-1.jpg",
        ],

        overview: [
            "LED Display Processor is the central engine behind every advertising LED display screen, responsible for managing image processing, signal conversion, and real-time content optimization",
            "Designed to enhance LED video wall display performance, it ensures sharp visuals, smooth playback, and accurate color calibration across all connected panels",
            "Ideal for professional installations, events, control rooms, and large-scale display systems requiring precision and reliability",
            "Supports complex display configurations, enabling seamless integration across multiple screens and high-resolution output setups",
            "Plays a critical role in maintaining visual consistency, synchronization, and performance in advanced LED wall display environments"
        ],

        features: [
            "Advanced Image Processing Technology ensures sharp visuals, enhanced contrast, and accurate color reproduction for high-quality display output",
            "Real-Time Signal Conversion & Scaling allows seamless compatibility with multiple input sources and resolutions",
            "Seamless Synchronization across panels ensures smooth and unified LED video wall display performance without lag or distortion",
            "Supports high-resolution outputs and complex multi-screen configurations for large-scale and professional display setups",
            "Designed for stable, continuous operation, ensuring reliable performance during long hours and live events"
        ],

        whyUs: [
            "Expertise in delivering complete advertising LED display solutions including advanced processing systems",
            "Integration of high-performance processors to optimize LED video wall displays for superior visual output",
            "Proven capability in handling complex LED wall display systems with precision and seamless synchronization",
            "Strong focus on performance, reliability, and cutting-edge display technology across all solutions",
            "End-to-end support including system configuration, technical guidance, and after-sales service for smooth operation"
        ],

        specs: {
            powerConnector: "100–240V~, 1.5A, 50/60Hz",
            powerConsumption: "28 W",
            operatingTemperature: "-10°C to +60°C",
            operatingHumidity: "20% RH to 90% RH, non-condensing",
            storageTemperature: "-20°C to +70°C",
            storageHumidity: "10% RH to 95% RH, non-condensing",
            dimensions: "483.6 mm × 351.2 mm × 50.1 mm",
            weight: "4 kg",
            noiseLevel: "45 dB (A)",
            size: "521.0 mm × 102.0 mm × 517.0 mm",
            weight: "10.4 kg"
        },
    },
    {
        name: "VX1 Advertising LED Display Screen",
        id: "vx1-advertising-led-display-screen",
        catId: "accessories-and-controllers",
        catName: "Accessories & Controllers",
        img: "/download.jfif",

        images: [
            "/download.jfif",
            "/con-1.jpg",
        ],

        overview: [
            "VX1 Processor is a high-performance control unit designed to manage and optimize advertising LED display screen operations with precision and stability",
            "Acts as the central processing engine in LED video wall display systems, handling data input, validation, and real-time content rendering",
            "Ensures smooth communication between input sources, controllers, and display panels for consistent and reliable performance",
            "Ideal for small to mid-scale LED setups, events, and digital signage applications requiring efficient and streamlined processing",
            "Designed to maintain clean and organized system flow by managing core operations, ensuring stable and high-quality display output"
        ],

        features: [
            "Efficient Data Processing & Management ensures smooth handling of content, signal input, and output for uninterrupted display performance",
            "Real-Time Content Control enables seamless playback and quick updates across connected LED video wall display systems",
            "Integrated System Coordination acts as a bridge between input sources and display units, ensuring synchronized operation",
            "Supports multiple input formats and resolutions for flexible content management and compatibility",
            "Compact and reliable design ensures stable performance with minimal latency during continuous usage",
            "Wide variety of ports including DVI, HDMI, VGA, USB, and CVBS for enhanced connectivity flexibility",
            "Dual Ethernet output with support for up to 1.3 million pixels and maximum width of 3840",
            "Simple operation with web control and smart configuration support for easy setup and adjustments",
            "User-friendly features like fade-in/fade-out effects, operational status indicators, and 6 user presets"
        ],

        whyUs: [
            "Expertise in delivering complete advertising LED display ecosystems including processors and control systems",
            "Advanced integration capabilities for seamless LED video wall display performance across different setups",
            "Proven experience in configuring efficient and reliable LED wall display systems for various applications",
            "Focus on delivering stable, high-performance processing solutions tailored to business needs",
            "End-to-end support including system setup, configuration, and technical assistance for smooth operation"
        ],

        specs: {
            inputs: "DVI ×1, HDMI ×1, VGA ×1, USB ×1, CVBS ×1",
            ethernetOutput: "Dual Ethernet",
            loadingCapacity: "1.3 million pixels",
            maxWidth: "3840 px",
            control: "Web control, Smart Configuration support",
            presets: "6 user presets",
            effects: "Fade-in / Fade-out switching",
            indicators: "Operational status lights"
        }
    },
    {
        name: "DSP400 Controller LED Wall Display",
        id: "dsp400-controller-led-wall-display",
        catId: "accessories-and-controllers",
        catName: "Accessories & Controllers",
        img: "/download.jfif",

        images: [
            "/download.jfif",
            "/con-1.jpg",
        ],

        overview: [
            "DSP400 is an advanced all-in-one advertising LED display screen controller that seamlessly integrates video processing and control functions into a single powerful unit",
            "Designed for high-performance LED video wall display systems, it supports ultra-wide and ultra-high-resolution screens with exceptional clarity and stability",
            "Capable of driving up to 2.6 million pixels, making it ideal for medium to high-end rental setups, stage productions, and fine-pitch LED displays",
            "Supports multiple working modes including video controller, fiber converter, and bypass, offering flexibility for different installation requirements",
            "Engineered for professional environments, delivering low latency, smooth playback, and precise image control for demanding applications"
        ],

        features: [
            "All-in-One Design combines video processing and control in a single device, reducing system complexity and improving operational efficiency",
            "High Load Capacity (up to 2.6 million pixels) supports large-scale LED video wall display setups with maximum width up to 10,240 pixels and height up to 8192 pixels",
            "Multiple Working Modes including controller, fiber conversion, and bypass provide flexibility for various system configurations",
            "Advanced Image Processing with stepless scaling, low latency, and pixel-level brightness and chroma calibration ensures superior visual quality",
            "Smart Control Software Compatibility with LCT and V-Can enables easy screen configuration, layer management, preset control, and firmware updates"
        ],

        whyUs: [
            "Expertise in delivering high-end advertising LED display solutions with advanced processing and control systems",
            "Integration of powerful controllers like DSP400 to optimize LED video wall displays for large-scale and professional applications",
            "Proven capability in handling complex and high-resolution LED wall display systems with precision and reliability",
            "Strong focus on performance, scalability, and cutting-edge technology across all display solutions",
            "End-to-end support including system design, configuration, installation, and technical assistance for seamless operation"
        ],

        specs: {
            powerConnector: "100~240V~, 1.5A, 50/60Hz",
            powerConsumption: "28 W",
            operatingTemperature: "0°C to 45°C",
            operatingHumidity: "20% RH to 90% RH, non-condensing",
            storageTemperature: "−20°C to +70°C",
            storageHumidity: "10% RH to 95% RH, non-condensing",
            dimensions: "483.6 mm × 301.2 mm × 50.1 mm",
            weight: "4 kg",
            noiseLevel: "45 dB (A)",
            size: "550.0 mm × 175.0 mm × 400.0 mm",
            weight: "6.8 kg",
        },
    },
    {
        name: "DSP400 Pro LED Display Screen Accessories",
        id: "dsp400-pro-led-display-screen-accessories",
        catId: "accessories-and-controllers",
        catName: "Accessories & Controllers",
        img: "/download.jfif",

        images: [
            "/download.jfif",
            "/con-1.jpg",
        ],

        overview: [
            "DSP400 Pro is a powerful all-in-one advertising LED display screen controller that combines advanced video processing and control functionalities into a single, efficient device",
            "Designed for high-end LED video wall display systems, it supports ultra-wide and ultra-high-resolution outputs with exceptional clarity and stability",
            "Capable of managing up to 2.6 million pixels, making it ideal for medium to high-end rental, stage productions, and fine-pitch LED installations",
            "Supports multiple working modes including video controller, fiber converter, and bypass, offering flexibility for diverse system configurations",
            "Built with an industrial-grade design to ensure reliable performance in complex and demanding operational environments"
        ],

        features: [
            "4K@60Hz Video Input Support enables high-resolution signal processing for superior image clarity and smooth playback",
            "All-in-One Processing & Control reduces system complexity while enhancing performance and operational efficiency",
            "Multi-Layer Display (up to 6 layers) allows advanced content management and creative visual layouts for LED video wall display setups",
            "Advanced Image Optimization with output scaling, low latency, and pixel-level brightness and chroma calibration ensures premium visual quality",
            "Multiple Control Options including front panel knob, NovaLCT, Unico web interface, and VICP app for flexible and user-friendly operation"
        ],

        whyUs: [
            "Expertise in delivering advanced advertising LED display solutions with high-performance controllers and processors",
            "Integration of cutting-edge technology to optimize LED video wall displays for large-scale and professional applications",
            "Proven capability in handling complex LED wall display systems with precision, scalability, and reliability",
            "Strong focus on performance, innovation, and durability across all display and control solutions",
            "End-to-end support including system design, configuration, installation, and technical assistance for seamless execution"
        ],

        specs: {
            powerConnector: "100~240V~, 50/60Hz",
            powerConsumption: "41 W",
            operatingTemperature: "0°C to 50°C",
            operatingHumidity: "5% RH to 85% RH, non-condensing",
            storageTemperature: "−10°C to +60°C",
            storageHumidity: "5% RH to 95% RH, non-condensing",
            dimensions: "482.6 mm × 302.2 mm × 50.1 mm",
            weight: "3.8 kg",
            totalWeight: "6.4 kg",
            noiseLevel: "45 dB (A)",
            carryingCaseSize: "545 mm × 425 mm × 145 mm",
            boxSize: "565 mm × 450 mm × 175 mm",
        },
    },
    {
        name: "DSP600 LED Controller and Display Accessories",
        id: "dsp600-led-controller-and-display-accessories",
        catId: "accessories-and-controllers",
        catName: "Accessories & Controllers",
        img: "/download.jfif",

        images: [
            "/download.jfif",
            "/con-1.jpg",
        ],

        overview: [
            "DSP600 Pro is a high-capacity all-in-one advertising LED display screen controller that integrates advanced video processing and control into a single powerful unit",
            "Designed for large-scale LED video wall display systems, it supports ultra-wide and ultra-high-resolution outputs with superior clarity and stability",
            "Capable of managing up to 3.9 million pixels, making it ideal for complex rental setups, stage productions, and fine-pitch LED installations",
            "Equipped with 6 Ethernet ports to handle higher data loads and larger display configurations efficiently",
            "Built with an industrial-grade design to ensure reliable and stable performance in demanding and mission-critical environments"
        ],

        features: [
            "High Load Capacity (up to 3.9 million pixels) enables seamless control of large and complex LED video wall display systems",
            "4K@60Hz Video Input Support ensures high-resolution signal processing with smooth and detailed visual output",
            "All-in-One Processing & Control simplifies system architecture while improving performance and operational efficiency",
            "Multi-Layer Display (up to 6 layers) allows advanced content management and creative display configurations",
            "Advanced Image Optimization including output scaling, low latency, and pixel-level brightness and chroma calibration for superior image quality"
        ],

        whyUs: [
            "Expertise in delivering high-performance advertising LED display solutions with advanced controllers and processors",
            "Integration of powerful systems like DSP600 Pro to optimize large-scale LED video wall displays",
            "Proven capability in managing complex and high-resolution LED wall display systems with precision and reliability",
            "Strong focus on innovation, scalability, and durability across all display and control technologies",
            "End-to-end support including consultation, configuration, installation, and technical assistance for seamless project execution"
        ],

        specs: {
            powerConnector: "100~240V~, 1.5A, 50/60Hz",
            powerConsumption: "28 W",
            operatingTemperature: "−10°C to 45°C",
            operatingHumidity: "20% RH to 90% RH, non-condensing",
            storageTemperature: "−20°C to +70°C",
            storageHumidity: "10% RH to 95% RH, non-condensing",
            dimensions: "483.6 mm × 351.2 mm × 50.1 mm",
            weight: "4 kg",
            noiseLevel: "45 dB (A)",
            size: "521.0 mm × 102.0 mm × 517.0 mm",
            weight: "10.4 kg"
        },
    },
    {
        name: "DSP600 Pro LED Display Accessories",
        id: "dsp600-pro-led-display-accessories",
        catId: "accessories-and-controllers",
        catName: "Accessories & Controllers",
        img: "/download.jfif",

        images: [
            "/download.jfif",
            "/con-1.jpg",
        ],

        overview: [
            "DSP600 Pro is a high-capacity all-in-one advertising LED display screen controller that integrates advanced video processing and control into a single powerful unit",
            "Designed for large-scale LED video wall display systems, it supports ultra-wide and ultra-high-resolution outputs with superior clarity and stability",
            "Capable of managing up to 3.9 million pixels, making it ideal for complex rental setups, stage productions, and fine-pitch LED installations",
            "Equipped with 6 Ethernet ports to handle higher data loads and larger display configurations efficiently",
            "Built with an industrial-grade design to ensure reliable and stable performance in demanding and mission-critical environments"
        ],

        features: [
            "High Load Capacity (up to 3.9 million pixels) enables seamless control of large and complex LED video wall display systems",
            "4K@60Hz Video Input Support ensures high-resolution signal processing with smooth and detailed visual output",
            "All-in-One Processing & Control simplifies system architecture while improving performance and operational efficiency",
            "Multi-Layer Display (up to 6 layers) allows advanced content management and creative display configurations",
            "Advanced Image Optimization including output scaling, low latency, and pixel-level brightness and chroma calibration for superior image quality"
        ],

        whyUs: [
            "Expertise in delivering high-performance advertising LED display solutions with advanced controllers and processors",
            "Integration of powerful systems like DSP600 Pro to optimize large-scale LED video wall displays",
            "Proven capability in managing complex and high-resolution LED wall display systems with precision and reliability",
            "Strong focus on innovation, scalability, and durability across all display and control technologies",
            "End-to-end support including consultation, configuration, installation, and technical assistance for seamless project execution"
        ],

        specs: {
            powerConnector: "100~240V~, 50/60Hz",
            powerConsumption: "41 W",
            operatingTemperature: "0°C to 50°C",
            operatingHumidity: "5% RH to 85% RH, non-condensing",
            storageTemperature: "−10°C to +60°C",
            storageHumidity: "5% RH to 95% RH, non-condensing",
            dimensions: "482.6 mm × 302.2 mm × 50.1 mm",
            weight: "3.9 kg",
            noiseLevel: "45 dB (A)",
            size: "521.0 mm × 102.0 mm × 517.0 mm",
            weight: "10.4 kg"
        },
    },
    {
        "name": "DSP1000 Pro LED Display Accessories",
        "id": "dsp1000-pro-led-display-accessories",
        "catId": "accessories-and-controllers",
        "catName": "Accessories & Controllers",
        img: "/download.jfif",

        images: [
            "/download.jfif",
            "/con-1.jpg",
        ],

        "overview": [
            "DSP1000 Pro is a flagship all-in-one advertising LED display screen controller that combines advanced video processing and control capabilities into a single high-performance device",
            "Designed for ultra-large and complex LED video wall display systems, it delivers exceptional clarity, synchronization, and stability across massive screen setups",
            "Capable of handling up to 6.5 million pixels, making it ideal for high-end rental, large-scale events, broadcast environments, and fine-pitch LED installations",
            "Equipped with 10 Ethernet ports to support extensive data transmission and manage highly demanding display configurations efficiently",
            "Built with a robust industrial-grade design to ensure reliable, continuous performance in mission-critical and high-load environments"
        ],

        "features": [
            "Ultra-High Load Capacity (up to 6.5 million pixels) enables seamless control of very large and complex LED video wall display systems",
            "4K@60Hz Video Input Support ensures superior image quality with smooth motion, sharp detail, and high-resolution signal processing",
            "10 Ethernet Ports for Maximum Connectivity provide enhanced data handling and support for expansive and high-density display setups",
            "Multi-Layer Display (up to 6 layers) allows advanced content management, creative layouts, and flexible screen control",
            "Advanced Image Processing Technology with output scaling, low latency, and pixel-level brightness and chroma calibration ensures outstanding visual performance"
        ],

        "whyUs": [
            "Expertise in delivering enterprise-level advertising LED display solutions with top-tier controllers and processing systems",
            "Integration of cutting-edge technology to optimize large-scale LED video wall displays for superior performance and reliability",
            "Proven capability in managing highly complex and high-resolution LED wall display systems across industries",
            "Strong focus on innovation, scalability, and durability across all display and control solutions",
            "End-to-end support including consultation, system design, configuration, installation, and technical assistance for seamless execution"
        ],

        "specs": {
            "powerConnector": "100-240V~, 50/60Hz",
            "powerConsumption": "43 W",
            "operatingTemperature": "0°C to 50°C",
            "operatingHumidity": "5% RH to 85% RH, non-condensing",
            "storageTemperature": "−10°C to +60°C",
            "storageHumidity": "5% RH to 95% RH, non-condensing",
            "dimensions": "482.6 mm × 302.2 mm × 50.1 mm",
            "netWeight": "3.9 kg",
            "grossWeight": "6.5 kg",
            "carryingCaseSize": "545 mm × 425 mm × 145 mm",
            "packingBoxSize": "565 mm × 450 mm × 175 mm",
            "noiseLevel": "45 dB (A)"
        }
    },
    {
        "name": "4K Prime Pro Controller for LED Display System",
        "id": "4k-prime-pro-controller-for-led-display-system",
        "catId": "accessories-and-controllers",
        "catName": "Accessories & Controllers",
        img: "/download.jfif",

        images: [
            "/download.jfif",
            "/con-1.jpg",
        ],

        "overview": [
            "4K Prime Pro is a flagship all-in-one advertising LED display screen controller that integrates advanced video processing and control into a single ultra-powerful device for large-scale applications",
            "Designed for next-generation LED video wall display systems, it delivers exceptional clarity, synchronization, and performance across ultra-wide and ultra-high resolution displays",
            "Capable of managing up to 13 million pixels, making it ideal for mega installations, broadcast environments, large events, and fine-pitch LED display systems",
            "Equipped with 20 Ethernet ports to support massive data transmission and handle extremely complex and high-density display configurations",
            "Built with an industrial-grade architecture to ensure stable, continuous, and reliable performance in mission-critical and high-demand environments"
        ],

        "features": [
            "Ultra-High Load Capacity (up to 13 million pixels) enables seamless control of extremely large and complex LED video wall display systems",
            "4K@60Hz Video Input Support ensures ultra-high-definition signal processing with smooth motion, sharp detail, and superior image quality",
            "20 Ethernet Ports for Maximum Data Throughput provide unmatched connectivity and support for massive display setups",
            "Advanced Multi-Layer Management (up to 12 layers) allows highly flexible content control, creative layouts, and dynamic visual presentations",
            "Professional Image Processing with output scaling, low latency, and pixel-level brightness and chroma calibration ensures top-tier visual performance"
        ],

        "whyUs": [
            "Expertise in delivering enterprise-grade advertising LED display solutions with cutting-edge controllers and processing systems",
            "Advanced integration capabilities for ultra-large LED video wall displays with seamless performance and synchronization",
            "Proven experience in executing complex, high-resolution LED wall display systems across industries and large-scale projects",
            "Strong focus on innovation, scalability, and high-performance engineering across all display technologies",
            "End-to-end support including consultation, system design, configuration, installation, and technical assistance for seamless execution"
        ],

        "specs": {
            "powerConnector": "100~240V~, 50/60Hz",
            "powerConsumption": "82 W",
            "operatingTemperature": "0°C to 50°C",
            "operatingHumidity": "5% RH to 85% RH, non-condensing",
            "storageTemperature": "−10°C to +60°C",
            "storageHumidity": "5% RH to 95% RH, non-condensing",
            "dimensions": "482.6 mm × 409.0 mm × 94.6 mm",
            "netWeight": "7 kg",
            "grossWeight": "10 kg",
            "carryingCaseSize": "625 mm × 560 mm × 195 mm",
            "packingBoxSize": "645 mm × 580 mm × 215 mm",
            "noiseLevel": "45 dB (A)"
        }
    },
    {
        "name": "TB20 Plus LED Display and Video Wall Screen System",
        "id": "tb20-plus-led-display-and-video-wall-screen-system",
        "catId": "accessories-and-controllers",
        "catName": "Accessories & Controllers",
        img: "/download.jfif",

        images: [
            "/download.jfif",
            "/con-1.jpg",
        ],

        "overview": [
            "TB20 Plus is a next-generation multimedia player designed to power advertising LED display screen systems with seamless content playback and control capabilities",
            "Combines playback and sending functions into a single device, making it an efficient solution for managing LED video wall display and digital signage applications",
            "Supports both synchronous and asynchronous modes, offering flexibility for real-time and scheduled content management",
            "Ideal for commercial applications such as retail stores, digital signage, smart city displays, and advertising networks",
            "Enables remote control and content publishing through cloud-based platforms, allowing users to manage displays anytime and anywhere"
        ],

        "features": [
            "All-in-One Playback & Sending Solution simplifies system setup by combining media playback and control in a single device",
            "Cloud-Based Control & Monitoring allows remote management of LED display board systems via computer, mobile, or tablet",
            "Supports Synchronous & Asynchronous Modes for flexible content scheduling and real-time display control",
            "Multiple Input Options Including USB Playback provide easy and versatile content uploading and playback",
            "Advanced Security Features including terminal authentication and player verification ensure safe and secure content operation"
        ],

        "whyUs": [
            "Expertise in delivering complete advertising LED display ecosystems including smart multimedia players and control systems",
            "Advanced integration with LED video wall displays for seamless content management and performance optimization",
            "Proven capability in deploying scalable LED display board solutions for retail, smart city, and commercial applications",
            "Strong focus on innovation, ease of use, and reliable performance across all display technologies",
            "End-to-end support including setup, configuration, and technical assistance for smooth and efficient operations"
        ],

        "specs": {
            "inputVoltage": "DC 5 V to 12 V",
            "powerConsumption": "15 W",
            "ram": "2 GB",
            "internalStorage": "32 GB",
            "operatingTemperature": "−20°C to +60°C",
            "operatingHumidity": "5% RH to 85% RH, non-condensing",
            "storageTemperature": "−40°C to +80°C",
            "storageHumidity": "5% RH to 95% RH, non-condensing",
            "dimensions": "141.2 mm × 120.0 mm × 33.5 mm",
            "netWeight": "470.3 g",
            "grossWeight": "776.1 g",
            "packingSize": "333.0 mm × 196.0 mm × 70.0 mm",
            "ipRating": "IP20",
            "systemSoftware": "Android 10.0 OS, Android terminal application software, FPGA program"
        }
    },
    {
        "name": "TB40 LED Wall Screen",
        "id": "tb40-led-wall-screen",
        "catId": "accessories-and-controllers",
        "catName": "Accessories & Controllers",
        img: "/download.jfif",

        images: [
            "/download.jfif",
            "/con-1.jpg",
        ],

        "overview": [
            "TB40 is an advanced multimedia player designed to power advertising LED display screen systems with seamless content playback and intelligent control",
            "Combines playback and sending capabilities in a single device, making it ideal for efficient LED video wall display and digital signage management",
            "Supports both synchronous and asynchronous modes, enabling flexible real-time and scheduled content delivery",
            "Designed for multi-screen environments, allowing synchronized playback across multiple displays for consistent visual output",
            "Perfect for commercial and smart city applications including retail stores, chain outlets, digital signage networks, and public information displays"
        ],

        "features": [
            "All-in-One Playback & Control System simplifies setup by integrating media playback and display control into a single device",
            "Multi-Screen Synchronous Playback ensures consistent and synchronized content across multiple LED display board installations",
            "Cloud-Based Management Platform allows remote control, monitoring, and content publishing from any internet-connected device",
            "Supports Synchronous & Asynchronous Modes for real-time streaming as well as scheduled content playback",
            "Reliable & Intelligent Operation ensures stable performance, ease of use, and efficient display management for long-term applications"
        ],

        "whyUs": [
            "Expertise in delivering complete advertising LED display ecosystems including advanced multimedia players and control solutions",
            "Seamless integration with LED video wall displays for synchronized and high-performance content delivery",
            "Proven capability in deploying scalable LED display board solutions for retail, commercial, and smart city applications",
            "Strong focus on innovation, reliability, and user-friendly technology across all display solutions",
            "End-to-end support including setup, configuration, and technical assistance for smooth and efficient operation"
        ],

        "specs": {
            "inputPower": "DC 12 V, 2 A",
            "powerConsumption": "18 W",
            "ram": "1 GB",
            "internalStorage": "16 GB",
            "operatingTemperature": "−20°C to +60°C",
            "operatingHumidity": "0% RH to 80% RH, non-condensing",
            "storageTemperature": "−40°C to +80°C",
            "storageHumidity": "0% RH to 80% RH, non-condensing",
            "dimensions": "238.8 mm × 140.5 mm × 32.0 mm",
            "netWeight": "430.0 g",
            "packingSize": "385.0 mm × 280.0 mm × 75.0 mm",
            "ipRating": "IP20",
            "systemSoftware": "Android 11.0 OS, Android terminal application software, FPGA program",
            "note": "Third-party applications are not supported"
        },
    },
    {
        "name": "TB60 Video Wall Display",
        "id": "tb60-video-wall-display",
        "catId": "accessories-and-controllers",
        "catName": "Accessories & Controllers",
        img: "/download.jfif",

        images: [
            "/download.jfif",
            "/con-1.jpg",
        ],

        "overview": [
            "TB60 is a high-performance multimedia player designed to power advanced advertising LED display screen systems with seamless playback and intelligent control",
            "Built for efficient LED video wall display and digital signage management, combining content playback and sending capabilities in a single device",
            "Supports both synchronous and asynchronous modes, enabling flexible real-time broadcasting and scheduled content playback",
            "Designed for multi-screen environments, allowing synchronized playback across multiple displays for consistent and impactful visual communication",
            "Ideal for commercial and smart city applications including retail chains, public displays, advertising networks, and digital signage systems"
        ],

        "features": [
            "Multi-Screen Synchronous Playback ensures consistent and synchronized content delivery across multiple LED display board systems",
            "Supports Synchronous & Asynchronous Modes provides flexibility for live streaming as well as scheduled and offline content playback",
            "Advanced Cloud-Based Control enables remote content publishing, monitoring, and management from any internet-connected device",
            "High Stability & Reliable Performance ensures smooth and uninterrupted operation for long-term and continuous usage",
            "User-Friendly Operation allows easy control via computer, mobile, or tablet for efficient display management"
        ],

        "whyUs": [
            "Expertise in delivering complete advertising LED display solutions including advanced multimedia players and control systems",
            "Seamless integration with LED video wall displays for high-performance and synchronized content delivery",
            "Proven capability in deploying scalable LED display board solutions for commercial, retail, and smart city applications",
            "Strong focus on reliability, innovation, and ease of use across all display technologies",
            "End-to-end support including consultation, setup, configuration, and technical assistance for smooth operations"
        ],

        "specs": {
            "inputPower": "100-240V~, 50/60Hz, 0.6A",
            "powerConsumption": "18 W",
            "ram": "1 GB",
            "internalStorage": "32 GB",
            "operatingTemperature": "−20°C to +60°C",
            "operatingHumidity": "0% RH to 80% RH, non-condensing",
            "storageTemperature": "−40°C to +80°C",
            "storageHumidity": "0% RH to 80% RH, non-condensing",
            "dimensions": "274.3 mm × 139.0 mm × 40.0 mm",
            "netWeight": "1230.4 g",
            "grossWeight": "1650.0 g",
            "packingSize": "385.0 mm × 280.0 mm × 75.0 mm",
            "ipRating": "IP20",
            "systemSoftware": "Android 11.0 OS, Android terminal application software, FPGA program",
            "note": "Total weight includes product, accessories, and packaging. Third-party applications are not supported"
        }
    },
    {
        "name": "SMP4 Pro LED Controller for Video Wall Screen",
        "id": "smp4-pro-led-controller-for-video-wall-screen",
        "catId": "accessories-and-controllers",
        "catName": "Accessories & Controllers",
        img: "/download.jfif",

        images: [
            "/download.jfif",
            "/con-1.jpg",
        ],

        "overview": [
            "SMP4 Pro is an advanced playback control processor designed for indoor advertising LED display screen applications, combining powerful media playback, control, and processing capabilities in a single device",
            "Built on an integrated Android system, it enables seamless operation and supports third-party applications for enhanced flexibility and functionality",
            "Designed for efficient LED video wall display control in single-screen environments such as meeting rooms, corporate spaces, and exhibition halls",
            "Supports wireless screen mirroring from Windows, macOS, iOS, and Android devices, enabling effortless content sharing and collaboration",
            "Ideal for professional indoor environments including corporate presentations, education spaces, hospitality, and telemedicine setups"
        ],

        "features": [
            "Integrated Android System allows installation of third-party apps, providing enhanced flexibility and interactive capabilities",
            "Wireless Screen Mirroring Support enables seamless casting from multiple devices including laptops, smartphones, and tablets",
            "Multiple Display Modes optimized for presentations, video playback, and remote meetings to ensure best visual performance",
            "Remote Control Operation allows easy and convenient management of the LED display board without complex setup",
            "Easy Installation & Setup with no need for structural changes, supporting wall mounting or tabletop placement for quick deployment"
        ],

        "whyUs": [
            "Expertise in delivering smart and integrated advertising LED display solutions with advanced control and playback systems",
            "Seamless integration with LED video wall displays for professional indoor environments and single-screen applications",
            "Proven capability in deploying user-friendly and scalable LED display board solutions across corporate and institutional sectors",
            "Strong focus on innovation, ease of use, and performance across all display technologies",
            "End-to-end support including consultation, configuration, installation, and technical assistance for smooth and efficient operations"
        ],

        "specs": {
            "inputVoltage": "DC 12V 3A (Negative Outside, Positive Inside)",
            "powerConsumption": "21 W",
            "ram": "4 GB",
            "internalStorage": "32 GB",
            "operatingTemperature": "−20°C to +60°C",
            "operatingHumidity": "0% RH to 80% RH, non-condensing",
            "storageTemperature": "−40°C to +80°C",
            "storageHumidity": "0% RH to 95% RH, non-condensing",
            "dimensions": "211.7 mm × 185.0 mm × 50.6 mm",
            "netWeight": "1.12 kg",
            "grossWeight": "2.9 kg",
            "packingSize": "387 mm × 359 mm × 173 mm",
            "note": "Total weight includes product, accessories, and packaging"
        }
    },

    ///
]