export type NavLink = { label: string; href: string };
export type HeaderNavLink = NavLink & { children?: NavLink[] };

export const nav: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Eye Care Services", href: "/eye-care-services" },
  { label: "Eyeglasses & Contacts", href: "/eyeglasses-contacts" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export const eyeCareSectionTabs: NavLink[] = [
  { label: "Comprehensive Eye Exams", href: "#exams" },
  { label: "Medical Eye Care", href: "#medical" },
  { label: "Same-Day Eye Care", href: "#same-day" },
  { label: "Pre & Post-Op Care", href: "#surgery" },
];

export const contactSectionTabs: NavLink[] = [
  { label: "Locations & Hours", href: "#locations" },
  { label: "Schedule an Appointment", href: "#book" },
  { label: "Insurance", href: "#insurance" },
  { label: "Patient Forms", href: "#forms" },
];

export const headerNav: HeaderNavLink[] = [
  { label: "Home", href: "/" },
  {
    label: "About Us",
    href: "/about",
    children: [
      { label: "Our Story", href: "/about#about" },
      { label: "Why Choose Us", href: "/about#why" },
      { label: "Our Doctors", href: "/about#doctors" },
      { label: "Careers", href: "/about#careers" },
      { label: "Insurance", href: "/about#insurance" },
    ],
  },
  {
    label: "Eye Care Services",
    href: "/eye-care-services",
    children: eyeCareSectionTabs.map((link) => ({ ...link, href: `/eye-care-services${link.href}` })),
  },
  {
    label: "Eyeglasses & Contacts",
    href: "/eyeglasses-contacts",
    children: [
      { label: "Designer Frames", href: "/eyeglasses-contacts#brands" },
      { label: "Lenses", href: "/eyeglasses-contacts#lenses" },
      { label: "Contact Lenses", href: "/eyeglasses-contacts#contacts" },
      { label: "Myopia Control", href: "/eyeglasses-contacts#myopia" },
      { label: "Value Packages", href: "/eyeglasses-contacts#value" },
    ],
  },
  {
    label: "FAQ",
    href: "/faq",
    children: [
      { label: "Appointments & Visits", href: "/faq#appointments" },
      { label: "Eye Exams", href: "/faq#exams" },
      { label: "Medical Eye Care", href: "/faq#medical" },
      { label: "Glasses & Contacts", href: "/faq#eyewear" },
    ],
  },
  {
    label: "Contact Us",
    href: "/contact",
    children: contactSectionTabs.map((link) => ({ ...link, href: `/contact${link.href}` })),
  },
];

export const offices = ["La Crosse", "Holmen"];

export const mapLinks = {
  laCrosse: "https://maps.app.goo.gl/qxho7bt1oqfD9qzb6",
  holmen: "https://maps.app.goo.gl/NLYNV2SmeXfHooATA",
};

export type ImageContent = { photo: string; src?: string };

export const aboutPhoto: ImageContent & { alt: string } = {
  photo: "Photo: optometrist examining a patient at the slit lamp",
  src: "/images/home-about-eye-exam.jpg",
  alt: "Smiling optometrist in a white coat talking with a patient seated at the slit lamp",
};

export const aboutPagePhoto: ImageContent & { alt: string } = {
  photo: "Photo: optometrist examining a patient at the slit lamp",
  src: "/images/about-page-eye-exam.jpg",
  alt: "Optometrist looking through a slit lamp to examine a patient's eyes",
};

export const services: (ImageContent & { title: string; body: string; cta: string; href?: string; alt?: string; position?: string })[] = [
  {
    photo: "Photo: comprehensive eye exam in progress, doctor at the slit lamp with patient",
    src: "/images/home-comprehensive-eye-exam.jpg",
    alt: "Smiling woman resting her chin on a slit lamp while the optometrist examines her eyes",
    title: "Comprehensive Eye Exams",
    body: "A thorough look at your vision and eye health for adults and children, with your doctor explaining what they find.",
    cta: "What to expect at your exam",
    href: "/eye-care-services#exams",
  },
  {
    photo: "Photo: doctor examining a patient with diagnostic equipment",
    src: "/images/service-medical-eye-care.jpg",
    alt: "Optometrist adjusting a phoropter in front of an older patient during an eye test",
    title: "Medical Eye Care",
    body: "Care for dry eye, glaucoma, cataracts, pink eye and sudden pain or vision changes, with same-day appointments when you need them.",
    cta: "Explore medical eye care",
    href: "/eye-care-services#medical",
  },
  {
    photo: "Photo: close-up of a contact lens being placed on the eye",
    src: "/images/service-contact-lenses.jpg",
    alt: "Close-up of a person placing a soft contact lens on their fingertip toward their eye",
    title: "Contact Lenses & Eyewear",
    body: "Contact lens exams and fittings, plus designer frames from Gucci, YSL, Coach, Nike and more.",
    cta: "Browse contacts and frames",
    href: "/eyeglasses-contacts",
  },
];

export const whyPhoto: ImageContent = { photo: "Photo: doctor seated at eye level with an older patient, listening" };

export const why = [
  { title: "Time to Listen", body: "Our optometrists spend more time with each patient than most clinics, so there's always room for your questions." },
  { title: "Relationships That Last", body: "Many patients have seen us for decades and now bring their children and grandchildren." },
  { title: "Care Under One Roof", body: "Exams, contact lenses, eyewear, and management of dry eye, glaucoma and other conditions." },
  { title: "Part of the Community", body: "Locally owned since 1962, with doctors who volunteer through Lions Club, Rotary and other local groups." },
];

export const historyPhotos: (ImageContent & { caption: string })[] = [
  { photo: "Archival photo from the practice's early years (client to supply)", caption: "Downtown La Crosse, early years" },
  { photo: "Current photo: the full team today", caption: "Our team today" },
];

export const medical: (ImageContent & { title: string; body: string; link: string })[] = [
  {
    title: "Dry Eye",
    photo: "Photo: doctor examining a patient for dry eye",
    body: "Dry eye can cause burning, redness, blurred vision and discomfort that gets in the way of reading or screen work. We look for the underlying cause and build a treatment plan around it.",
    link: "About dry eye care",
  },
  {
    title: "Glaucoma",
    photo: "Photo: diagnostic imaging or pressure test",
    body: "Glaucoma often has no early symptoms. Regular testing helps us detect it and track changes, so it can be managed before it affects your sight.",
    link: "About glaucoma care",
  },
  {
    title: "Cataract Care",
    photo: "Photo: doctor reviewing results with an older patient",
    body: "We monitor cataracts as they develop, help you understand your options, coordinate with surgeons, and provide care before and after surgery.",
    link: "About cataract care",
  },
  {
    title: "Myopia Control",
    photo: "Photo: child during an eye exam",
    body: "For children whose nearsightedness is getting worse, we offer options to slow progression and follow their progress over time.",
    link: "About myopia control",
  },
];

export const myopiaPhoto: ImageContent & { alt: string } = {
  photo: "Photo: school-age child trying on glasses with a parent nearby, relaxed and smiling",
  src: "/opticalfashion/7.jpeg",
  alt: "Young girl adjusting her black glasses in front of a blurred eye chart",
};

export const familiesPhoto: ImageContent & { alt: string } = {
  photo: "Photo: child wearing glasses in front of an eye chart",
  src: "/images/home-children-families.jpg",
  alt: "Young girl adjusting her black glasses in front of a blurred eye chart",
};

export const designerBrands = [
  { name: "Carolina Herrera", src: "/images/brands/carolina-herrera.png" },
  { name: "Oakley", src: "/images/brands/oakley.png" },
  { name: "Gucci", src: "/images/brands/gucci.gif" },
  { name: "Coach", src: "/images/brands/coach.gif" },
  { name: "Hugo Boss", src: "/images/brands/hugo-boss.png" },
  { name: "Etnia Barcelona", src: "/images/brands/etnia-barcelona.png" },
  { name: "Betsey Johnson", src: "/images/brands/betsey-johnson.png" },
  { name: "Nike Eyewear", src: "/images/brands/nike.gif" },
  { name: "Ray-Ban", src: "/images/brands/ray-ban.png" },
  { name: "Outspoken", src: "/images/brands/outspoken.png" },
  { name: "OGI Eyewear", src: "/images/brands/ogi.png" },
  { name: "Seraphin", src: "/images/brands/seraphin.gif" },
  { name: "Yves Saint Laurent", src: "/images/brands/yves-saint-laurent.png" },
  { name: "Vera Bradley", src: "/images/brands/vera-bradley.png" },
];

const featuredBrandNames = ["Gucci", "Yves Saint Laurent", "Coach", "Carolina Herrera", "Nike Eyewear"];
export const featuredBrands = featuredBrandNames.map((n) => designerBrands.find((b) => b.name === n)!);

export const lensOptions = [
  { title: "Single Vision", body: "One prescription across the whole lens, for clear sight up close or at a distance." },
  { title: "Progressives & Bifocals", body: "Near, middle and far vision in one pair, so you're not switching glasses throughout the day." },
  { title: "Lens Coatings", body: "Anti-reflective coatings that cut glare." },
  { title: "Sun & Light-Adapting Lenses", body: "Prescription sunglasses and lenses that darken outdoors, for comfort in bright light." },
];

export const contactLensTypes = [
  "Daily, weekly, two-week and monthly lenses",
  "Lenses for astigmatism",
  "Multifocal contacts",
  "Help for first-time wearers",
];

export const eyewearPhotos: (ImageContent & { alt?: string })[] = [
  {
    photo: "Photo: patient trying on designer frames at the mirror with an optician",
    src: "/images/eyewear/home-frame-try-on.jpg",
    alt: "Smiling woman trying on round metal glasses in front of a wall of frames",
  },
  {
    photo: "Photo: frames on display",
    src: "/images/eyewear/home-frames-rack.jpg",
    alt: "Hand picking a pair of black eyeglass frames from a display rack",
  },
  {
    photo: "Photo: frame detail, hinge or temple",
    src: "/images/eyewear/home-frame-handoff.jpg",
    alt: "Optician handing a pair of tortoiseshell glasses to a patient across a table",
  },
];

export const doctors: (ImageContent & { name: string; bio: string[] })[] = [
  {
    name: "Dr. Holly Fisher",
    src: "/images/doctors/holly.webp",
    bio: [
      "Dr. Fisher is a graduate of Sparta High School. She completed her Bachelor of Science degree at the University of Wisconsin-Eau Claire and obtained her Doctorate of Optometry degree from the University of Missouri, in St. Louis in 1998. She won the Young Optometrist of the Year award in 2006 for the state of Wisconsin. Dr. Fisher became a Diplomate of the American Board of Optometry in 2013. She has enjoyed being a member of La Crosse Valley View Rotary since 2004.",
      "Dr. Fisher and her husband Clay have enjoyed watching their son and daughter become young adults as they pursue their futures in college and beyond. Their free time is spent enjoying nature boating, hiking, biking, and traveling.",
    ],
  },
  {
    name: "Dr. Brenda Wedig",
    src: "/images/doctors/brenda.webp",
    bio: [
      "Dr. Wedig received her Bachelor of Science degree from the University of Wisconsin-La Crosse in 2004. During this time, she was introduced to the world of optometry by working at Optical Fashions. She then obtained her Doctorate of Optometry degree from the Pennsylvania College of Optometry in Philadelphia, Pennsylvania in 2008. Dr. Wedig became a Diplomate of the American Board of Optometry in 2014. She also participates in the West Salem Lions Club.",
      "Dr. Wedig enjoys spending time with her husband, Matt and their four elementary school aged children. When she isn’t busy with her kids’ activities she likes to read, camp, travel and spend times with family and friends.",
    ],
  },
  {
    name: "Dr. Kendra Garbrecht",
    src: "/images/doctors/kendra.webp",
    bio: [
      "Dr. Garbrecht is originally from north central Wisconsin. She gained valuable clinical experience in Iowa and Minnesota before calling the La Crosse region home and spending a few years caring for military service members at Fort McCoy. She received her Bachelor of Science degree from the University of Wisconsin-Eau Claire in 2000 and earned her Doctor of Optometry degree, cum laude, from the Illinois College of Optometry in Chicago in 2005. Dr. Garbrecht became a Diplomate of the American Board of Optometry in 2014. She served as Secretary of the Onalaska Rotary Club for a number of years and was awarded Rotarian of the Year in 2019.",
      "Dr. Garbrecht has a special interest in ocular disease and the important connection between eye health and overall systemic health. She is particularly passionate about understanding how autoimmune diseases can affect the eyes. Dr. Garbrecht enjoys building long-term relationships with patients and providing comprehensive care for all ages since joining Optical Fashions Eye Care Clinic in 2012.",
      "Outside of the office, Dr. Garbrecht values spending time with family and friends and tending to her ever-growing collection of houseplants. She and her husband stay active with their three sons and rescue dog.",
    ],
  },
  {
    name: "Dr. Robin Theye",
    src: "/images/doctors/robin.webp",
    bio: [
      "Dr. Theye grew up in southeastern Minnesota and has spent most of her life in the driftless region. Dr. Theye graduated from the University of Wisconsin-La Crosse in 2004. She received her Doctorate of Optometry from the Illinois College of Optometry in 2008. After graduation, she practiced in Onalaska for several years and has been practicing in Winona since 2015. Dr. Theye has been society president for both the Wisconsin Optometric Association and Minnesota Optometric Association. Dr. Theye brings years of experience and has a passion for dry eye and patient education. Dr. Theye enjoys working with patients of all ages and is proud to provide the highest level of eye care in our area.",
      "Dr. Theye is married and has a son that she enjoys spending her free time with. She has lived in Galesville for the last ten years. With her husband Mike, they lead the Galesville Cub Scouts. She considers herself a foodie and always wants to try new places. Traveling to the Caribbean and Door County are her favorite destinations.",
    ],
  },
  {
    name: "Dr. Jack Latham",
    src: "/images/doctors/jack.png",
    bio: [
      "Dr. Jack Latham, OD, joined Optical Fashions after graduating from the Illinois College of Optometry in May 2026. Growing up on a large dairy farm in Boscobel, WI, Dr. Latham developed an interest in optometry after an eye exam with his optometrist in high school. He went on to attend UW-Eau Claire, graduating in 2022, before earning his Doctor of Optometry degree from the Illinois College of Optometry.",
      "Dr. Latham has a strong interest in ocular disease, specialty contact lenses, myopia control, and primary eye care. He is passionate about providing individual-based eye care to patients of all ages and is excited to begin his career in the La Crosse community. Dr. Latham is a member of both the Wisconsin Optometric Association and the American Optometric Association.",
      "Outside of work, Dr. Latham enjoys fly fishing in the driftless area, camping at local and national parks, and trying new restaurants with his wife.",
    ],
  },
].map((d) => ({ ...d, photo: `Portrait of ${d.name}` }));

export const careerRoles = [
  {
    title: "Patient Service Coordinator",
    summary: "Our Patient Service Coordinators greet our patients and are the first part of our patient experience!",
    duties: [
      "Scheduling appointments",
      "Checking patients in/out for their exam",
      "Collecting correct demographics and insurance information",
      "Verifying some insurance plans and explaining coverage",
      "Summarizing charges at the end of the exam",
      "Other administrative duties",
    ],
  },
  {
    title: "Doctor's Assistant",
    summary: "Our Doctor's Assistants help assist the doctors and are usually the second part of our patient experience!",
    duties: [
      "Pre-screening patients",
      "Collecting health history data",
      "Reviewing patient charts to ensure completeness and accuracy",
      "Perform contact lens classes",
      "Other administrative duties",
    ],
  },
  {
    title: "Optician",
    summary: "Our Opticians are the glasses experts!",
    duties: [
      "Assessing patient eyewear needs",
      "Assisting in frame selections",
      "Recommending specific lenses and lens treatments to meet patient needs",
      "Accurately and professionally ordering and dispensing eyeglasses",
      "Performing adjustments and repairs",
    ],
  },
];

export const careerSkills = [
  "Excellent customer service skills",
  "Excellent communication skills",
  "Detail oriented",
  "Problem-solving skills",
  "Multitasking skills",
  "Computer skills",
];

export const careerBenefits = [
  "Health insurance",
  "Dental insurance",
  "Paid time off",
  "401(k)",
  "401(k) matching up to 6%",
  "Flexible spending account",
  "Disability insurance",
  "Life insurance",
  "Employee discount",
];

export type Review = { title: string; text: string; name: string; when: string; stars: number };

export const googleReviewLocations: { id: string; label: string; rating: string; count: string; url: string; reviews: Review[] }[] = [
  {
    id: "la-crosse",
    label: "La Crosse",
    rating: "4.9",
    count: "1,542",
    url: "https://www.google.com/search?q=Optical+Fashions+Eye+Care+Clinic+La+Crosse+reviews",
    reviews: [
      {
        title: "",
        text: "From the time I checked in for my 7:30 am appointment to the time I left the clinic, the staff was welcoming and professional. My experience at the clinic was very positive. Dr. Garbrecht was a delight. She patiently answered my questions, and swiftly and thoroughly moved through my examination!",
        name: "Jeff Buikema",
        when: "2 months ago",
        stars: 5,
      },
      {
        title: "",
        text: "The young lady that helped me first was great made me feel comfortable. the doctor asked about my health and was straight forward with my eye health. Very informative. The young man was very helpful with picking out my glasses.",
        name: "Keith Engem",
        when: "3 months ago",
        stars: 5,
      },
      {
        title: "",
        text: "First time meeting with Dr. Theye. I would highly recommend her. She was very thorough with my exam and took alot of time explaining my results and recommendations. I felt she was very personal to my specific needs.",
        name: "Juanita Meyer",
        when: "3 months ago",
        stars: 5,
      },
      {
        title: "",
        text: "Optical Fashions just feels right when you walk in. The staff are always kind, always helpful, moving with good energy like they really enjoy what they do.",
        name: "Quartell Roberson",
        when: "5 months ago",
        stars: 5,
      },
      {
        title: "",
        text: "We were waited on right away. The people at Optical Fashions were all very helpful and kind and professional. They took good care of me. I would encourage everyone to go there.",
        name: "Carol Helgerson",
        when: "5 months ago",
        stars: 5,
      },
    ],
  },
  {
    id: "holmen",
    label: "Holmen",
    rating: "4.9",
    count: "203",
    url: "https://www.google.com/search?q=Optical+Fashions+Eye+Care+Clinic+Holmen+reviews",
    reviews: [
      {
        title: "",
        text: "Friendly, knowledgeable and willing to help make your experience a very pleasurable time. Always have time to address any of your questions. Never get the feeling you are being hurried to get in and get out.",
        name: "Tom Wibes",
        when: "3 months ago",
        stars: 5,
      },
      {
        title: "",
        text: "Excellent staff all around. Dr. Fisher is an absolute gem!",
        name: "Bauer Family",
        when: "3 months ago",
        stars: 5,
      },
      {
        title: "",
        text: "Dr. Holly Fisher is patient and kind. She really listened to my concerns and together we put together a game plan. I look forward to working with her and her staff for my eye care needs.",
        name: "Michelle Prieur",
        when: "6 months ago",
        stars: 5,
      },
      {
        title: "",
        text: "Friendly, professional, helpful staff. Appointment scheduling easy and low wait time.",
        name: "Kirsten La Mere",
        when: "4 months ago",
        stars: 5,
      },
      {
        title: "",
        text: "Just had my 70 year old eyes examined by Dr. Fisher this week. I’ve been seeing Dr. Fisher for 15 years or more. It’s nice to have someone who has historical context with your vision and overall health progression.",
        name: "Robert Gates",
        when: "10 months ago",
        stars: 5,
      },
    ],
  },
];

const patientPortals = [
  { location: "La Crosse", href: "https://revolutionehr.com/patient-portal/login/opticalfashionslax/" },
  { location: "Holmen", href: "https://revolutionehr.com/patient-portal/login/opticalfashionshlm/" },
];

export const patientLinks = {
  portal: patientPortals[0].href,
  portals: patientPortals,
  contactLenses: "https://yourstore.wewillship.com/?account_id=1024",
};

export const socialLinks = [
  { name: "Facebook", href: "https://www.facebook.com/OpticalFashionsEyeCare/" },
  { name: "Yelp", href: "https://www.yelp.com/biz/optical-fashions-eye-care-clinic-la-crosse" },
  { name: "Instagram", href: "https://www.instagram.com/opticalfashionslax" },
] as const;

// Each link's text must appear verbatim in the answer, in the same order.
export type Faq = { q: string; a: string; links?: { text: string; href: string }[] };

export const faqGroups: { id: string; title: string; items: Faq[] }[] = [
  {
    id: "appointments",
    title: "Appointments & Visits",
    items: [
      {
        q: "How do I schedule an appointment?",
        a: "Schedule online in our patient portal, or call us at (608) 782-7127. Our front desk can help you find a time at the office that suits you best.",
        links: [{ text: "patient portal", href: patientLinks.portal }],
      },
      {
        q: "Which office should I visit?",
        a: "Whichever is easier for you. We have offices in La Crosse at 2104 WI-16 and in Holmen at 814 S. Main Street, and you can choose either office when you schedule.",
        links: [
          { text: "2104 WI-16", href: mapLinks.laCrosse },
          { text: "814 S. Main Street", href: mapLinks.holmen },
        ],
      },
      {
        q: "What should I bring to my appointment?",
        a: "Bring your current glasses and contact lenses, a list of any medications you take, and your vision and medical insurance cards.",
      },
      {
        q: "Do you accept my insurance?",
        a: "We accept Blue View Vision, EyeMed and VSP vision plans, plus many medical plans including Medicare, Blue Cross Blue Shield, Humana, Quartz and UnitedHealthcare. You'll find the full list on our About page. If you don't see your plan, call us at (608) 782-7127 and we'll help you check your coverage.",
      },
      {
        q: "What should I do if I have an urgent eye concern?",
        a: "Call the office as soon as possible at (608) 782-7127. We offer same-day urgent eye care. For a severe injury, seek emergency care.",
      },
    ],
  },
  {
    id: "exams",
    title: "Eye Exams",
    items: [
      { q: "How often should I have an eye exam?", a: "It depends on your age, eye health and risk factors. Your doctor will recommend a schedule that fits you." },
      {
        q: "When should children have eye exams?",
        a: "The American Optometric Association recommends a child's first eye exam between 6 and 12 months of age, at least one exam between ages 3 and 5, another before first grade, and then once a year. Our doctors will suggest a schedule that fits your child's needs.",
      },
      {
        q: "What's the difference between a routine and a medical eye exam?",
        a: "A routine eye exam checks your vision and overall eye health and updates your glasses or contact lens prescription. A medical eye exam focuses on a specific concern or condition, such as dry eye, an eye infection, glaucoma or a sudden change in vision.",
      },
      {
        q: "Can I see my records online?",
        a: "Yes. Our patient portal lets you view your records, manage your information, and schedule appointments securely.",
        links: [{ text: "patient portal", href: patientLinks.portal }],
      },
    ],
  },
  {
    id: "medical",
    title: "Medical Eye Care",
    items: [
      {
        q: "What eye conditions do you treat?",
        a: "Our doctors diagnose and manage dry eye, glaucoma, cataracts, pink eye, and sudden eye pain or vision changes. We also offer myopia control for children and teens.",
      },
      {
        q: "Do you offer same-day appointments?",
        a: "Yes. For urgent concerns like pink eye, eye pain or a sudden change in vision, call us at (608) 782-7127 and we'll do our best to see you the same day.",
      },
      {
        q: "What is myopia control?",
        a: "Myopia control is a plan to monitor a child's nearsightedness and slow its progression. One option we offer is Stellest lenses, the first FDA-approved glasses for slowing myopia in kids and teens.",
      },
      {
        q: "Do you provide LASIK co-management?",
        a: "Yes. We provide evaluation before surgery and follow-up care afterward, close to home. We also offer pre- and post-operative care for other eye surgeries.",
      },
    ],
  },
  {
    id: "eyewear",
    title: "Glasses & Contacts",
    items: [
      {
        q: "What frame brands do you carry?",
        a: "We carry designer frames from brands like Gucci, YSL, Coach, Carolina Herrera, Nike, Ray-Ban, Oakley and OGI, along with a wide range of other styles. Our opticians will help you find a pair that fits your face and your prescription.",
      },
      { q: "Do you provide contact lens fittings?", a: "Yes. Our doctors fit contact lenses, and you can order or reorder them online and have them shipped to you." },
      { q: "How do I order or reorder contact lenses?", a: "Order or reorder contact lenses online anytime and have them shipped to you." },
      {
        q: "Do you have options for patients without vision insurance?",
        a: "Yes. If you don't have vision insurance, you'll save 25% on your eye exam and 20% on glasses when you pay on the day of your visit. We also offer value packages and promotions on glasses, and special deals on a year's supply of contact lenses.",
      },
    ],
  },
];

const allFaqs = faqGroups.flatMap((g) => g.items);
const homeFaqQuestions = [
  "How often should I have an eye exam?",
  "When should children have eye exams?",
  "What is myopia control?",
  "Do you provide contact lens fittings?",
  "Do you provide LASIK co-management?",
  "What should I do if I have an urgent eye concern?",
];

export const faqs = homeFaqQuestions.map((q) => allFaqs.find((f) => f.q === q)!);

export const contact = {
  businessName: "Optical Fashions Eye Care Clinic",
  phone: "(608) 782-7127",
  phoneHref: "tel:+16087827127",
  fax: "(608) 782-7124",
  email: "frontdesk@opticalfashionseyecare.com",
};

export const [emailUser, emailDomain] = contact.email.split("@");

export const locations: {
  name: string;
  street: string;
  city: string;
  dir: string;
  photo: string;
  photoAlt: string;
  photoPosition?: string;
  note?: string[];
  hours: { days: string; time: string }[];
}[] = [
  {
    name: "La Crosse",
    street: "2104 WI-16",
    city: "La Crosse, WI 54601",
    dir: mapLinks.laCrosse,
    photo: "/images/la-crosse-office.png",
    photoAlt: "Front of the Optical Fashions La Crosse office, a two-story building with a red roof and glass entrance",
    hours: [
      { days: "Mon–Thu", time: "7:30 AM – 5:30 PM" },
      { days: "Friday", time: "7:30 AM – 2:00 PM" },
      { days: "Sat–Sun", time: "Closed" },
    ],
  },
  {
    name: "Holmen",
    street: "814 S. Main Street",
    city: "Holmen, WI 54636",
    dir: mapLinks.holmen,
    photo: "/images/holmen-office.jpg",
    photoAlt: "Brick entrance of the Optical Fashions Eye Care Clinic in Holmen with its sign above the glass doors",
    photoPosition: "center 32%",
    note: ["Located adjacent to the fire department in Holmen.", "Look for the eyeglass bicycle rack."],
    hours: [
      { days: "Mon–Thu", time: "7:30 AM – 5:30 PM" },
      { days: "Friday", time: "Closed" },
      { days: "Sat–Sun", time: "Closed" },
    ],
  },
];

export type InsurancePlan = { name: string; src: string; width: number; height: number };

// Logos come from the clinic's current insurance page, unaltered.
export const visionPlans: InsurancePlan[] = [
  { name: "Blue View Vision", src: "/images/insurance/blue-view-vision.png", width: 133, height: 76 },
  { name: "EyeMed Vision Care", src: "/images/insurance/eyemed.png", width: 133, height: 110 },
  { name: "VSP", src: "/images/insurance/vsp.png", width: 133, height: 110 },
];

export const medicalPlans: InsurancePlan[] = [
  { name: "Aetna", src: "/images/insurance/aetna.png", width: 133, height: 110 },
  { name: "Allegiance", src: "/images/insurance/allegiance.png", width: 133, height: 110 },
  { name: "Auxiant", src: "/images/insurance/auxiant.png", width: 133, height: 110 },
  { name: "Blue Cross Blue Shield", src: "/images/insurance/blue-cross-blue-shield.png", width: 532, height: 440 },
  { name: "BPA Benefit Plan Administrators", src: "/images/insurance/bpa.png", width: 133, height: 110 },
  { name: "ForwardHealth", src: "/images/insurance/forwardhealth.png", width: 133, height: 110 },
  { name: "HealthPartners", src: "/images/insurance/healthpartners.png", width: 133, height: 110 },
  { name: "Humana", src: "/images/insurance/humana.png", width: 133, height: 110 },
  { name: "Medicare", src: "/images/insurance/medicare.png", width: 133, height: 110 },
  { name: "Quartz", src: "/images/insurance/quartz.png", width: 133, height: 110 },
  { name: "Tricare", src: "/images/insurance/tricare.png", width: 133, height: 110 },
  { name: "UMR", src: "/images/insurance/umr.png", width: 133, height: 110 },
  { name: "UnitedHealthcare", src: "/images/insurance/unitedhealthcare.png", width: 133, height: 110 },
  { name: "WPS Health Insurance", src: "/images/insurance/wps.png", width: 133, height: 110 },
];

// These online forms live on the clinic's current website. Re-host them before the domain moves to this site.
export const patientForms: { title: string; body: string; href?: string }[] = [
  {
    title: "New Patient Form",
    body: "For your first visit. Covers your contact details, insurance, previous eye doctor, medications and allergies.",
    href: "https://forms.gle/enw6rEEZe6Z9qyz68",
  },
  {
    title: "Release of Health Information",
    body: "Authorize us to send or receive copies of your eye care records, for example to or from another doctor.",
    href: "https://forms.gle/h3vCV8uuXPXMPhGx8",
  },
];

export const careServices: NavLink[] = [
  { label: "Comprehensive Eye Exams", href: "/eye-care-services#exams" },
  { label: "Medical Eye Care", href: "/eye-care-services#medical" },
  { label: "Dry Eye Care", href: "/eye-care-services#dry-eye" },
  { label: "Cataract & Glaucoma Care", href: "/eye-care-services#cataracts" },
  { label: "Myopia Control", href: "/eyeglasses-contacts#myopia" },
  { label: "Contact Lenses & Eyewear", href: "/eyeglasses-contacts" },
  { label: "Pre-/Post-Operative Care", href: "/eye-care-services#surgery" },
  { label: "Same-Day Medical Eye Care", href: "/eye-care-services#same-day" },
];

export const footerServices = careServices;

export const examPhoto: ImageContent & { alt: string; position?: string } = {
  photo: "Photo: doctor at the slit lamp with a patient during a comprehensive exam",
  src: "/images/comprehensive-exam-eye-drops.jpg",
  alt: "Doctor in blue gloves applying eye drops for an older woman during an eye exam",
};

export const examAges: { label: string; text: string }[] = [
  { label: "Children", text: "Growing eyes and myopia care" },
  { label: "Adults", text: "Prescriptions and eye health" },
  { label: "Seniors", text: "Cataract and glaucoma checks" },
];

export const medicalConditions: { id: string; title: string; body: string; sameDay?: boolean }[] = [
  {
    id: "medical-exams",
    title: "Medical Eye Exams",
    body: "Visits focused on a specific eye problem or an ongoing condition, rather than a routine vision check. Your doctor examines the concern, explains what's happening and recommends next steps.",
  },
  {
    id: "dry-eye",
    title: "Dry Eye",
    body: "Burning, gritty, watery or tired eyes that make reading and screen time uncomfortable. We look for the underlying cause and build a treatment plan around it.",
  },
  {
    id: "cataracts",
    title: "Cataracts",
    body: "Clouding of the eye's lens that can make vision blurry or glare worse. We monitor cataracts as they develop, talk through your options, and coordinate with a surgeon when it's time.",
  },
  {
    id: "glaucoma",
    title: "Glaucoma",
    body: "A condition that can damage the optic nerve, often with no early symptoms. Regular testing helps us detect it and track changes so it can be managed over time.",
  },
  {
    id: "myopia-control",
    title: "Myopia Control",
    body: "For children whose nearsightedness is getting worse. We monitor progression and offer options, including Stellest lenses, aimed at slowing it.",
  },
  {
    id: "pink-eye",
    title: "Pink Eye",
    body: "Red, itchy or irritated eyes, sometimes with discharge. We find out whether the cause is viral, bacterial or allergic, and treat it accordingly.",
    sameDay: true,
  },
  {
    id: "sudden-changes",
    title: "Sudden Eye Pain or Vision Changes",
    body: "New flashes or floaters, sudden blurry vision, or eye pain should be checked promptly. Call us right away so we can see you as soon as possible.",
    sameDay: true,
  },
];

export const surgeryCare: (ImageContent & { title: string; body: string; includes: string[]; alt: string; position?: string })[] = [
  {
    title: "LASIK Co-Management",
    body: "We help you decide whether LASIK is a good option, then provide your pre-op evaluation and post-op follow-up care here in La Crosse or Holmen.",
    includes: ["Candidacy evaluation", "Pre-op exam", "Post-op follow-up"],
    photo: "Photo: adult patient in a LASIK consultation",
    src: "/images/lasik-procedure.jpg",
    alt: "Close-up of a laser beam directed at a patient's eye during a LASIK procedure",
  },
  {
    title: "Cataract Surgery Care",
    body: "When a cataract affects your daily life, we refer you to a surgeon and provide care before and after your procedure.",
    includes: ["Surgeon referral", "Pre-op care", "Post-op follow-up"],
    photo: "Photo: older patient reviewing results with the doctor",
    src: "/images/about-doctor-patient.jpg",
    alt: "Smiling doctor shaking hands with an older patient during a consultation",
    position: "center 30%",
  },
  {
    title: "Other Surgical Care",
    body: "For other eye surgeries, we coordinate with your surgeon and provide follow-up visits so you can recover with doctors who know you.",
    includes: ["Surgeon coordination", "Post-op follow-up"],
    photo: "Photo: doctor checking in with a patient at a follow-up visit",
    src: "/images/other-surgical-care.jpg",
    alt: "Surgical team in scrubs operating an eye surgery laser system on a patient",
  },
];
