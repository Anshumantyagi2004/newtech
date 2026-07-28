"use client";

import {
  FaUserShield,
  FaDatabase,
  FaCookie,
  FaLock,
  FaExternalLinkAlt,
  FaExchangeAlt,
  FaChild,
  FaSync,
  FaEnvelope,
} from "react-icons/fa";

const sections = [
{
icon:<FaDatabase/>,
title:"INFORMATION WE COLLECT",
content: [
  "We may collect basic information including:",

  "Name",
  "Company Name",
  "Phone Number",
  "Email Address",
  "Project Location",
  "Enquiry Details",

  "This information is collected when users:",

  "Submit enquiry forms",
  "Contact us through the website",
  "Request quotations or support",
  "Subscribe to updates",
  "Communicate with our team",
]
},

{
icon:<FaUserShield/>,
title:"HOW WE USE YOUR INFORMATION",
content:[
"The information shared with NVS may be used to:",
"Respond to enquiries and support requests",
"Share quotations and technical information",
"Provide product and service updates",
"Improve customer experience",
"Process business communication",
"Provide after-sales support and maintenance assistance",

"NVS does not sell or misuse customer information."
]
},

{
icon:<FaCookie/>,
title:"COOKIES & WEBSITE DATA",
content:[
"Our website may use cookies and basic analytics tools to improve website functionality and user experience.",

"Users may disable cookies through browser settings if preferred."
]
},

{
icon:<FaLock/>,
title:"DATA SECURITY",
content:[
"NVS takes reasonable technical and organizational measures to protect user information from unauthorized access, misuse, or disclosure.",

"However, while we strive to maintain secure systems, no online platform or internet transmission can be guaranteed as completely secure."
]
},

{
icon:<FaExternalLinkAlt/>,
title:"THIRD-PARTY LINKS",
content:[
"Our website may contain links to third-party websites or platforms.",

"NVS is not responsible for the privacy practices, policies, or content of external websites.",

"Users are advised to review the privacy policies of third-party platforms separately."
]
},

{
icon:<FaExchangeAlt/>,
title:"INFORMATION SHARING",
content:[
"NVS may share limited information with:",

"authorized service partners",
"logistics providers",
"technical support teams",
"vendors assisting in project execution",

"Only when necessary for business operations, project execution, or support services."
]
},

{
icon:<FaChild/>,
title:"CHILDREN’S PRIVACY",
content:[
"NVS services and website are intended for business and professional use and are not directed toward individuals under 18 years of age."
]
},

{
icon:<FaSync/>,
title:"POLICY UPDATES",
content:[
"NVS reserves the right to update or modify this Privacy Policy at any time without prior notice.",

"Users are encouraged to review this page periodically for updates."
]
},

{
icon:<FaEnvelope/>,
title:"CONTACT US",
content:[
"For any questions regarding this Privacy Policy, users may contact the NVS team through the official communication channels available on the website."
]
},
];

export default function PrivacyPolicy() {
return (
<main className="bg-black text-white min-h-screen">

{/* HERO */}

<section className="relative min-h-[40vh]  md:min-h-[55vh] overflow-hidden flex items-center">

<div
className="absolute inset-0 bg-cover bg-center"
style={{
backgroundImage:"url('/bg-2.jpg')",
}}
/>

<div className="absolute inset-0 bg-black/50"/>

<div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-red-900/20"/>

<div className="relative z-10 max-w-7xl mx-auto px-6 text-center">

<div className="inline-block px-5 py-2 rounded-full border border-red-500 text-red-500 mb-8">
DATA • SECURITY • PRIVACY
</div>

<h1 className="text-3xl md:text-7xl font-black">

Privacy <span className="text-red-500 md:hidden">Policy</span>

<span className="hidden md:block text-red-500">
Policy
</span>

</h1>

<p className="max-w-3xl mx-auto mt-8 text-lg md:text-xl text-gray-300">
At NVS, we value your privacy and are committed to protecting the information shared with us.
</p>

</div>

</section>

{/* CONTENT */}

<section className="max-w-7xl mx-auto px-5 py-5 md:py-20">

<div className="grid gap-8">

{sections.map((section,index)=>(

<div
key={index}
className="
bg-[#101010]
rounded-3xl
p-5
md:p-8
border
border-zinc-800
hover:border-red-600
transition
"
>

<div className="flex items-center gap-5 mb-8">

<div
className="
w-14
h-14
rounded-xl
bg-red-500
text-black
text-xl
flex
justify-center
items-center
"
>
{section.icon}
</div>

<h2 className="text-lg md:text-3xl font-semibold">
{index+1}. {section.title}
</h2>

</div>

<div className="space-y-4">

  {section.content.map((item, i) => {
    const isHeading =
      item.includes(":");

    return (
      <div
        key={i}
        className={`
          flex gap-3
          ${
            isHeading
              ? "text-red-500 font-semibold text-lg mt-6"
              : "text-gray-300"
          }
        `}
      >
        {!isHeading && (
          <span className="text-red-500 ">
            ●
          </span>
        )}

        <p>{item}</p>
      </div>
    );
  })}

</div>

</div>

))}

</div>

</section>

</main>
);
}