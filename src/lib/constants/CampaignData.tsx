interface InnerOption {
  name: string;
  IAB: string;
  icon: React.ReactNode;
}

interface IABOption {
  name: string;
  IAB: string;
  icon: React.ReactNode;
  innerOptions: InnerOption[];
}

type IABOptionsType = IABOption[];

export const IABOptions2: IABOptionsType = [
  {
    name: "Arts & Entertainment",
    IAB: "IAB1",
    icon: <i className="fa-solid fa-palette"></i>,
    innerOptions: [
      {
        name: "Books & Literature",
        IAB: "IAB1-1",
        icon: <i className="fa-solid fa-book"></i>,
      },
      {
        name: "Celebrity Fan/Gossip",
        IAB: "IAB1-2",
        icon: <i className="fa-solid fa-people-arrows"></i>,
      },
      {
        name: "Fine Art",
        IAB: "IAB1-3",
        icon: <i className="fa-solid fa-paintbrush"></i>,
      },
      {
        name: "Humor",
        IAB: "IAB1-4",
        icon: <i className="fa-solid fa-hammer"></i>,
      },
      {
        name: "Movies",
        IAB: "IAB1-5",
        icon: <i className="fa-solid fa-clapperboard"></i>,
      },
      {
        name: "Music",
        IAB: "IAB1-6",
        icon: <i className="fa-solid fa-music"></i>,
      },
      {
        name: "Television",
        IAB: "IAB1-7",
        icon: <i className="fa-solid fa-tv"></i>,
      },
    ],
  },
  {
    name: "Automotive",
    IAB: "IAB2",
    icon: <i className="fa-solid fa-car"></i>,
    innerOptions: [
      {
        name: "Auto Parts",
        IAB: "IAB2-1",
        icon: <i className="fa-solid fa-spray-can-sparkles"></i>,
      },
      {
        name: "Auto Repair",
        IAB: "IAB2-2",
        icon: <i className="fa-solid fa-screwdriver-wrench"></i>,
      },
      {
        name: "Buying/Selling Cars",
        IAB: "IAB2-3",
        icon: <i className="fa-solid fa-cart-shopping"></i>,
      },
      {
        name: "Car Culture",
        IAB: "IAB2-4",
        icon: <i className="fa-solid fa-car-on"></i>,
      },
      {
        name: "Certified Pre-Owned",
        IAB: "IAB2-5",
        icon: <i className="fa-solid fa-money-bill"></i>,
      },
      {
        name: "Convertible",
        IAB: "IAB2-6",
        icon: <i className="fa-solid fa-gears"></i>,
      },
      {
        name: "Coupe",
        IAB: "IAB2-7",
        icon: <i className="fa-solid fa-car-rear"></i>,
      },
      {
        name: "Crossover",
        IAB: "IAB2-8",
        icon: <i className="fa-solid fa-shuffle"></i>,
      },
      {
        name: "Diesel",
        IAB: "IAB2-9",
        icon: <i className="fa-solid fa-gas-pump"></i>,
      },
      {
        name: "Electric Vehicle",
        IAB: "IAB2-10",
        icon: <i className="fa-solid fa-plug-circle-bolt"></i>,
      },
      {
        name: "Hatchback",
        IAB: "IAB2-11",
        icon: <i className="fa-solid fa-car-side"></i>,
      },
      { name: "Hybrid", IAB: "IAB2-12", icon: <></> },
      { name: "Luxury", IAB: "IAB2-13", icon: <></> },
      {
        name: "MiniVan",
        IAB: "IAB2-14",
        icon: <i className="fa-solid fa-van-shuttle"></i>,
      },
      {
        name: "Mororcycles",
        IAB: "IAB2-15",
        icon: <i className="fa-solid fa-motorcycle"></i>,
      },
      {
        name: "Off-Road Vehicles",
        IAB: "IAB2-16",
        icon: <i className="fa-solid fa-truck-monster"></i>,
      },
      {
        name: "Performance Vehicles	",
        IAB: "IAB2-17",
        icon: <i className="fa-solid fa-car"></i>,
      },
      {
        name: "Pickup",
        IAB: "IAB2-18",
        icon: <i className="fa-solid fa-truck-pickup"></i>,
      },
      {
        name: "Road-Side Assistance",
        IAB: "IAB2-19",
        icon: <i className="fa-solid fa-road-circle-check"></i>,
      },
      {
        name: "Sedan",
        IAB: "IAB2-20",
        icon: <i className="fa-solid fa-car-side"></i>,
      },
      {
        name: "Trucks & Accessories",
        IAB: "IAB2-21",
        icon: <i className="fa-solid fa-truck-fast"></i>,
      },
      {
        name: "Vintage Cars",
        IAB: "IAB2-22",
        icon: <i className="fa-solid fa-car-rear"></i>,
      },
      {
        name: "Wagon",
        IAB: "IAB2-23",
        icon: <i className="fa-solid fa-trailer"></i>,
      },
    ],
  },
  {
    name: "Business",
    IAB: "IAB3",
    icon: <i className="fa-solid fa-business-time"></i>,
    innerOptions: [
      {
        name: "Advertising",
        IAB: "IAB3-1",
        icon: <i className="fa-solid fa-film"></i>,
      },
      {
        name: "Agriculture",
        IAB: "IAB3-2",
        icon: <i className="fa-solid fa-wheat-awn"></i>,
      },
      {
        name: "Biotech/Biomedical",
        IAB: "IAB3-3",
        icon: <i className="fa-solid fa-biohazard"></i>,
      },
      {
        name: "Business Software",
        IAB: "IAB3-4",
        icon: <i className="fa-solid fa-business-time"></i>,
      },
      {
        name: "Construction",
        IAB: "IAB3-5",
        icon: <i className="fa-solid fa-person-digging"></i>,
      },
      {
        name: "Forestry",
        IAB: "IAB3-6",
        icon: <i className="fa-solid fa-tree"></i>,
      },
      {
        name: "Government",
        IAB: "IAB3-7",
        icon: <i className="fa-solid fa-landmark-flag"></i>,
      },
      {
        name: "Green Solutions",
        IAB: "IAB3-8",
        icon: <i className="fa-solid fa-handshake"></i>,
      },
      {
        name: "Human Resources",
        IAB: "IAB3-9",
        icon: <i className="fa-solid fa-users-gear"></i>,
      },
      {
        name: "Logistics",
        IAB: "IAB3-10",
        icon: <i className="fa-solid fa-truck-fast"></i>,
      },
      {
        name: "Marketing",
        IAB: "IAB3-11",
        icon: <i className="fa-solid fa-bullhorn"></i>,
      },
      {
        name: "Metals",
        IAB: "IAB3-12",
        icon: <i className="fa-solid fa-magnet"></i>,
      },
    ],
  },
  {
    name: "Careers",
    IAB: "IAB4",
    icon: <i className="fa-solid fa-envelope"></i>,
    innerOptions: [
      {
        name: "Career Planning",
        IAB: "IAB4-1",
        icon: <i className="fa-solid fa-layer-group"></i>,
      },
      {
        name: "College",
        IAB: "IAB4-2",
        icon: <i className="fa-solid fa-building-columns"></i>,
      },
      {
        name: "Financial Aid",
        IAB: "IAB4-3",
        icon: <i className="fa-solid fa-coins"></i>,
      },
      {
        name: "Job Fairs",
        IAB: "IAB4-4",
        icon: <i className="fa-solid fa-cart-flatbed-suitcase"></i>,
      },
      {
        name: "Job Search",
        IAB: "IAB4-5",
        icon: <i className="fa-solid fa-magnifying-glass-dollar"></i>,
      },
      {
        name: "Resume Writing/Advice",
        IAB: "IAB4-6",
        icon: <i className="fa-solid fa-pen-to-square"></i>,
      },
      {
        name: "Nursing",
        IAB: "IAB4-7",
        icon: <i className="fa-solid fa-user-nurse"></i>,
      },
      {
        name: "Scholarships",
        IAB: "IAB4-8",
        icon: <i className="fa-solid fa-hand-holding-dollar"></i>,
      },
      {
        name: "Telecommuting",
        IAB: "IAB4-9",
        icon: <i className="fa-solid fa-phone"></i>,
      },
      {
        name: "U.S. Military",
        IAB: "IAB4-10",
        icon: <i className="fa-solid fa-person-military-rifle"></i>,
      },
      {
        name: "Career Advice",
        IAB: "IAB4-11",
        icon: <i className="fa-solid fa-ticket"></i>,
      },
    ],
  },
  {
    name: "Education",
    IAB: "IAB5",
    icon: <i className="fa-solid fa-book-open-reader"></i>,
    innerOptions: [
      {
        name: "7-12 Education",
        IAB: "IAB5-1",
        icon: <i className="fa-solid fa-school"></i>,
      },
      {
        name: "Adult Education",
        IAB: "IAB5-2",
        icon: <i className="fa-solid fa-building-columns"></i>,
      },
      {
        name: "Art History",
        IAB: "IAB5-3",
        icon: <i className="fa-solid fa-timeline"></i>,
      },
      {
        name: "College Administration",
        IAB: "IAB5-4",
        icon: <i className="fa-solid fa-building-circle-check"></i>,
      },
      {
        name: "College Life",
        IAB: "IAB5-5",
        icon: <i className="fa-solid fa-hands-holding"></i>,
      },
      {
        name: "Distance Learning",
        IAB: "IAB5-6",
        icon: <i className="fa-solid fa-chalkboard-user"></i>,
      },
      {
        name: "English as a 2nd Language",
        IAB: "IAB5-7",
        icon: <i className="fa-solid fa-language"></i>,
      },
      {
        name: "Language Learning",
        IAB: "IAB5-8",
        icon: <i className="fa-solid fa-person-chalkboard"></i>,
      },
      {
        name: "Graduate School",
        IAB: "IAB5-9",
        icon: <i className="fa-solid fa-graduation-cap"></i>,
      },
      {
        name: "Homeschooling",
        IAB: "IAB5-10",
        icon: <i className="fa-solid fa-house-laptop"></i>,
      },
      {
        name: "Homework/Study Tips",
        IAB: "IAB5-11",
        icon: <i className="fa-solid fa-lightbulb"></i>,
      },
      {
        name: "K-6 Educators",
        IAB: "IAB5-12",
        icon: <i className="fa-solid fa-chalkboard-user"></i>,
      },
      {
        name: "Private School",
        IAB: "IAB5-13",
        icon: <i className="fa-solid fa-school-lock"></i>,
      },
      {
        name: "Special Education",
        IAB: "IAB5-14",
        icon: <i className="fa-solid fa-book-open"></i>,
      },
      {
        name: "Studying Business",
        IAB: "IAB5-15",
        icon: <i className="fa-solid fa-business-time"></i>,
      },
    ],
  },
  {
    name: "Family & Parenting",
    IAB: "IAB6",
    icon: <i className="fa-solid fa-people-roof"></i>,
    innerOptions: [
      {
        name: "Adoption",
        IAB: "IAB6-1",
        icon: <i className="fa-solid fa-hand-holding-droplet"></i>,
      },
      {
        name: "Babies & Toddlers",
        IAB: "IAB6-2",
        icon: <i className="fa-solid fa-baby"></i>,
      },
      {
        name: "Daycare/Pre School",
        IAB: "IAB6-3",
        icon: <i className="fa-solid fa-school"></i>,
      },
      {
        name: "Family Internet",
        IAB: "IAB6-4",
        icon: <i className="fa-solid fa-house-signal"></i>,
      },
      {
        name: "Parenting - K-6 Kids",
        IAB: "IAB6-5",
        icon: <i className="fa-solid fa-hands-holding-child"></i>,
      },
      {
        name: "Parenting teens",
        IAB: "IAB6-6",
        icon: <i className="fa-solid fa-hands-asl-interpreting"></i>,
      },
      {
        name: "Pregnancy",
        IAB: "IAB6-7",
        icon: <i className="fa-solid fa-person-pregnant"></i>,
      },
      {
        name: "Special Needs Kids",
        IAB: "IAB6-8",
        icon: <i className="fa-solid fa-child-reaching"></i>,
      },
      {
        name: "Eldercare",
        IAB: "IAB6-9",
        icon: <i className="fa-solid fa-person-shelter"></i>,
      },
    ],
  },
  {
    name: "Health & Fitness",
    IAB: "IAB7",
    icon: <i className="fa-solid fa-notes-medical"></i>,
    innerOptions: [
      {
        name: "Exercise",
        IAB: "IAB7-1",
        icon: <i className="fa-solid fa-dumbbell"></i>,
      },
      {
        name: "A.D.D.",
        IAB: "IAB7-2",
        icon: <i className="fa-solid fa-hands"></i>,
      },
      {
        name: "AIDS/HIV",
        IAB: "IAB7-3",
        icon: <i className="fa-solid fa-ribbon"></i>,
      },
      {
        name: "Allergies",
        IAB: "IAB7-4",
        icon: <i className="fa-solid fa-hand-dots"></i>,
      },
      {
        name: "Alternative Medicine",
        IAB: "IAB7-5",
        icon: <i className="fa-solid fa-pills"></i>,
      },
      {
        name: "Arthritis",
        IAB: "IAB7-6",
        icon: <i className="fa-solid fa-hand-back-fist"></i>,
      },
      {
        name: "Asthma",
        IAB: "IAB7-7",
        icon: <i className="fa-solid fa-lungs"></i>,
      },
      {
        name: "Autism/PDD",
        IAB: "IAB7-8",
        icon: <i className="fa-solid fa-virus-slash"></i>,
      },
      {
        name: "Bipolar Disorder",
        IAB: "IAB7-9",
        icon: <i className="fa-solid fa-disease"></i>,
      },
      {
        name: "Brain Tumor",
        IAB: "IAB7-10",
        icon: <i className="fa-solid fa-brain"></i>,
      },
      {
        name: "Cancer",
        IAB: "IAB7-11",
        icon: <i className="fa-solid fa-lungs-virus"></i>,
      },
      {
        name: "Cholesterol",
        IAB: "IAB7-12",
        icon: <i className="fa-solid fa-heart-crack"></i>,
      },
      {
        name: "Chronic Fatigue Syndrome",
        IAB: "IAB7-13",
        icon: <i className="fa-solid fa-viruses"></i>,
      },
      {
        name: "Chronic Pain",
        IAB: "IAB7-14",
        icon: <i className="fa-solid fa-vial-virus"></i>,
      },
      {
        name: "Cold & Flu",
        IAB: "IAB7-15",
        icon: <i className="fa-solid fa-square-virus"></i>,
      },
      {
        name: "Deafness",
        IAB: "IAB7-16",
        icon: <i className="fa-solid fa-ear-deaf"></i>,
      },
      {
        name: "Dental Care",
        IAB: "IAB7-17",
        icon: <i className="fa-solid fa-tooth"></i>,
      },
      {
        name: "Depression",
        IAB: "IAB7-18",
        icon: <i className="fa-solid fa-head-side-virus"></i>,
      },
      {
        name: "Dermatology",
        IAB: "IAB7-19",
        icon: <i className="fa-solid fa-hand-dots"></i>,
      },
      {
        name: "Diabetes",
        IAB: "IAB7-20",
        icon: <i className="fa-solid fa-droplet"></i>,
      },
      {
        name: "Epilepsy",
        IAB: "IAB7-21",
        icon: <i className="fa-solid fa-brain"></i>,
      },
      {
        name: "GERD/Acid Reflux",
        IAB: "IAB7-22",
        icon: <i className="fa-solid fa-head-side-cough"></i>,
      },
      {
        name: "Headaches/Migraines",
        IAB: "IAB7-23",
        icon: <i className="fa-solid fa-head-side-virus"></i>,
      },
      {
        name: "Heart Disease",
        IAB: "IAB7-24",
        icon: <i className="fa-solid fa-heart-pulse"></i>,
      },
      {
        name: "Herbs for Health",
        IAB: "IAB7-25",
        icon: <i className="fa-solid fa-feather-pointed"></i>,
      },
      {
        name: "Holistic Healing",
        IAB: "IAB7-26",
        icon: <i className="fa-solid fa-person-dots-from-line"></i>,
      },
      {
        name: "IBS/Crohn’s Disease",
        IAB: "IAB7-27",
        icon: <i className="fa-solid fa-bacteria"></i>,
      },
      {
        name: "Incest/Abuse Support",
        IAB: "IAB7-28",
        icon: <i className="fa-solid fa-briefcase-medical"></i>,
      },
      {
        name: "Incontinence",
        IAB: "IAB7-29",
        icon: <i className="fa-solid fa-vials"></i>,
      },
      {
        name: "Infertility",
        IAB: "IAB7-30",
        icon: <i className="fa-solid fa-staff-snake"></i>,
      },
      {
        name: "Men’s Health",
        IAB: "IAB7-31",
        icon: <i className="fa-solid fa-comment-medical"></i>,
      },
      {
        name: "Nutrition",
        IAB: "IAB7-32",
        icon: <i className="fa-solid fa-cloud-meatball"></i>,
      },
      {
        name: "Orthopedics",
        IAB: "IAB7-33",
        icon: <i className="fa-solid fa-bone"></i>,
      },
      {
        name: "Panic/Anxiety Disorders",
        IAB: "IAB7-34",
        icon: <i className="fa-solid fa-prescription-bottle-medical"></i>,
      },
      {
        name: "Pediatrics",
        IAB: "IAB7-35",
        icon: <i className="fa-solid fa-hand-holding-medical"></i>,
      },
      {
        name: "Physical Therapy",
        IAB: "IAB7-36",
        icon: <i className="fa-solid fa-wheelchair"></i>,
      },
      {
        name: "Psychology/Psychiatry",
        IAB: "IAB7-37",
        icon: <i className="fa-solid fa-book-skull"></i>,
      },
      {
        name: "Senior Health",
        IAB: "IAB7-38",
        icon: <i className="fa-solid fa-user-doctor"></i>,
      },
      {
        name: "Sexuality",
        IAB: "IAB7-39",
        icon: <i className="fa-solid fa-venus-mars"></i>,
      },
      {
        name: "Sleep Disorders",
        IAB: "IAB7-40",
        icon: <i className="fa-solid fa-bed"></i>,
      },
      {
        name: " Smoking Cessation",
        IAB: "IAB7-41",
        icon: <i className="fa-solid fa-smoking"></i>,
      },
      {
        name: "Substance Abuse",
        IAB: "IAB7-42",
        icon: <i className="fa-solid fa-person-harassing"></i>,
      },
      {
        name: "Weight Loss",
        IAB: "IAB7-43",
        icon: <i className="fa-solid fa-weight-scale"></i>,
      },
      {
        name: "Women’s Health",
        IAB: "IAB7-44",
        icon: <i className="fa-solid fa-person-dress"></i>,
      },
    ],
  },
  {
    name: "Food & Drink",
    IAB: "IAB8",
    icon: <i className="fa-solid fa-burger"></i>,
    innerOptions: [
      {
        name: "American Cuisine",
        IAB: "IAB8-1",
        icon: <i className="fa-solid fa-hotdog"></i>,
      },
      {
        name: " Barbecues & Grilling",
        IAB: "IAB8-2",
        icon: <i className="fa-solid fa-ferry"></i>,
      },
      {
        name: "Cajun/Creole",
        IAB: "IAB8-3",
        icon: <i className="fa-solid fa-shrimp"></i>,
      },
      {
        name: "Chinese Cuisine",
        IAB: "IAB8-4",
        icon: <i className="fa-solid fa-bowl-food"></i>,
      },
      {
        name: "Cocktails/Beer",
        IAB: "IAB8-5",
        icon: <i className="fa-solid fa-martini-glass-citrus"></i>,
      },
      {
        name: "Coffee/Tea",
        IAB: "IAB8-6",
        icon: <i className="fa-solid fa-mug-hot"></i>,
      },
      {
        name: "Cuisine-Specific",
        IAB: "IAB8-7",
        icon: <i className="fa-solid fa-pizza-slice"></i>,
      },
      {
        name: "Desserts & Baking",
        IAB: "IAB8-8",
        icon: <i className="fa-solid fa-ice-cream"></i>,
      },
      {
        name: "Dining Out",
        IAB: "IAB8-9",
        icon: <i className="fa-solid fa-utensils"></i>,
      },
      {
        name: "Food Allergies",
        IAB: "IAB8-10",
        icon: <i className="fa-solid fa-person-dots-from-line"></i>,
      },
      {
        name: " French Cuisine",
        IAB: "IAB8-11",
        icon: <i className="fa-solid fa-drumstick-bite"></i>,
      },
      {
        name: "Health/Lowfat Cooking",
        IAB: "IAB8-12",
        icon: <i className="fa-solid fa-fire-burner"></i>,
      },
      {
        name: " Italian Cuisine",
        IAB: "IAB8-13",
        icon: <i className="fa-solid fa-fish-fins"></i>,
      },
      {
        name: " Japanese Cuisine",
        IAB: "IAB8-14",
        icon: <i className="fa-solid fa-bowl-rice"></i>,
      },
      {
        name: "Mexican Cuisine",
        IAB: "IAB8-15",
        icon: <i className="fa-solid fa-cloud-meatball"></i>,
      },
      {
        name: "Vegan",
        IAB: "IAB8-16",
        icon: <i className="fa-solid fa-leaf"></i>,
      },
      {
        name: "Vegetarian",
        IAB: "IAB8-17",
        icon: <i className="fa-solid fa-carrot"></i>,
      },
      {
        name: "Wine",
        IAB: "IAB8-18",
        icon: <i className="fa-solid fa-wine-bottle"></i>,
      },
    ],
  },
  {
    name: "Hobbies & Interests",
    IAB: "IAB9",
    icon: <i className="fa-solid fa-fire-flame-curved"></i>,
    innerOptions: [
      {
        name: "Art/Technology",
        IAB: "IAB9-1",
        icon: <i className="fa-solid fa-microchip"></i>,
      },
      {
        name: "Arts & Crafts",
        IAB: "IAB9-2",
        icon: <i className="fa-sharp fa-solid fa-pencil"></i>,
      },
      {
        name: "Beadwork",
        IAB: "IAB9-3",
        icon: <i className="fa-solid fa-house-user"></i>,
      },
      {
        name: "Birdwatching",
        IAB: "IAB9-4",
        icon: <i className="fa-solid fa-dove"></i>,
      },
      {
        name: "Board Games/Puzzles",
        IAB: "IAB9-5",
        icon: <i className="fa-solid fa-puzzle"></i>,
      },
      {
        name: "Candle & Soap Making",
        IAB: "IAB9-6",
        icon: <i className="fa-solid fa-candle-holder"></i>,
      },
      {
        name: "Card Games",
        IAB: "IAB9-7",
        icon: <i className="fa-sharp fa-solid fa-club"></i>,
      },
      {
        name: "Chess",
        IAB: "IAB9-8",
        icon: <i className="fa-sharp fa-solid fa-chess-board"></i>,
      },
      {
        name: "Cigars",
        IAB: "IAB9-9",
        icon: <i className="fa-sharp fa-solid fa-smoking"></i>,
      },
      {
        name: "Collecting",
        IAB: "IAB9-10",
        icon: <i className="fa-solid fa-album-collection-circle-user"></i>,
      },
      {
        name: "Comic Books",
        IAB: "IAB9-11",
        icon: <i className="fa-solid fa-book"></i>,
      },
      {
        name: "Drawing/Sketching",
        IAB: "IAB9-12",
        icon: <i className="fa-solid fa-person-drowning"></i>,
      },
      {
        name: "Freelance Writing",
        IAB: "IAB9-13",
        icon: <i className="fa-solid fa-pencil"></i>,
      },
      {
        name: "Genealogy",
        IAB: "IAB9-14",
        icon: <i className="fa-solid fa-dna"></i>,
      },
      {
        name: "Getting Published",
        IAB: "IAB9-15",
        icon: <i className="fa-solid fa-upload"></i>,
      },
      {
        name: "Guitar",
        IAB: "IAB9-16",
        icon: <i className="fa-solid fa-guitar"></i>,
      },
      {
        name: "Home Recording",
        IAB: "IAB9-17",
        icon: <i className="fa-solid fa-record-vinyl"></i>,
      },
      {
        name: "Investors & Patents",
        IAB: "IAB9-18",
        icon: <i className="fa-solid fa-users-medical"></i>,
      },
      {
        name: "Jewelry Making	",
        IAB: "IAB9-19",
        icon: <i className="fa-solid fa-gem"></i>,
      },
      {
        name: "Magic & Illusion	",
        IAB: "IAB9-20",
        icon: <i className="fa-solid fa-wand-magic-sparkles"></i>,
      },
      {
        name: "Needlework	",
        IAB: "IAB9-21",
        icon: <i className="fa-solid fa-syringe"></i>,
      },
      {
        name: "Painting",
        IAB: "IAB9-22",
        icon: <i className="fa-solid fa-paintbrush"></i>,
      },
      {
        name: "Photography	",
        IAB: "IAB9-23",
        icon: <i className="fa-solid fa-camera"></i>,
      },
      {
        name: "Radio",
        IAB: "IAB9-24",
        icon: <i className="fa-solid fa-radio"></i>,
      },
      {
        name: "Roleplaying Games	",
        IAB: "IAB9-25",
        icon: <i className="fa-solid fa-dice"></i>,
      },
      {
        name: "Sci-Fi & Fantasy	",
        IAB: "IAB9-26",
        icon: <i className="fa-solid fa-dragon"></i>,
      },
      {
        name: "Scrapbooking	",
        IAB: "IAB9-27",
        icon: <i className="fa-solid fa-dumpster-fire"></i>,
      },
      {
        name: "Screenwriting",
        IAB: "IAB9-28",
        icon: <i className="fa-solid fa-pen-to-square"></i>,
      },
      {
        name: "Stamps & Coins",
        IAB: "IAB9-29",
        icon: <i className="fa-solid fa-stamp"></i>,
      },
      {
        name: "Video & Computer Games",
        IAB: "IAB9-30",
        icon: <i className="fa-solid fa-video"></i>,
      },
      {
        name: "Woodworking",
        IAB: "IAB9-31",
        icon: <i className="fa-solid fa-chair"></i>,
      },
    ],
  },
  {
    name: "Home & Garden",
    IAB: "IAB10",
    icon: <i className="fa-sharp fa-solid fa-house-tree"></i>,
    innerOptions: [
      {
        name: "Appliances",
        IAB: "IAB10-1",
        icon: <i className="fa-sharp fa-solid fa-washing-machine"></i>,
      },
      {
        name: "Entertaining",
        IAB: "IAB10-2",
        icon: <i className="fa-solid fa-tv-retro"></i>,
      },
      {
        name: "Environmental Safety",
        IAB: "IAB10-3",
        icon: <i className="fa-solid fa-seedling"></i>,
      },
      {
        name: "Gardening",
        IAB: "IAB10-4",
        icon: <i className="fa-solid fa-plant-wilt"></i>,
      },
      {
        name: "Home Repair",
        IAB: "IAB10-5",
        icon: <i className="fa-solid fa-screwdriver-wrench"></i>,
      },
      {
        name: "Home Theater",
        IAB: "IAB10-6",
        icon: <i className="fa-solid fa-camera-movie"></i>,
      },
      {
        name: " Interior Decorating ",
        IAB: "IAB10-7",
        icon: <i className="fa-sharp fa-solid fa-tree-decorated"></i>,
      },
      {
        name: " Landscaping ",
        IAB: "IAB10-8",
        icon: <i className="fa-solid fa-image-landscape"></i>,
      },
      {
        name: "Remodeling & Construction",
        IAB: "IAB10-9",
        icon: <i className="fa-solid fa-building"></i>,
      },
    ],
  },
  {
    name: "Law, Gov’t & Politics",
    IAB: "IAB11",
    icon: <i className="fa-solid fa-scale-balanced"></i>,
    innerOptions: [
      {
        name: "Immigration",
        IAB: "IAB11-1",
        icon: <i className="fa-solid fa-passport"></i>,
      },
      {
        name: "Legal Issues ",
        IAB: "IAB11-2",
        icon: <i className="fa-solid fa-scale-balanced"></i>,
      },
      {
        name: "U.S. Government Resources",
        IAB: "IAB11-3",
        icon: <i className="fa-solid fa-flag-usa"></i>,
      },
      {
        name: "Politics",
        IAB: "IAB11-4",
        icon: <i className="fa-solid fa-landmark-dome"></i>,
      },
      {
        name: "Commentary",
        IAB: "IAB11-5",
        icon: <i className="fa-solid fa-comments-dollar"></i>,
      },
    ],
  },
  {
    name: "News",
    IAB: "IAB12",
    icon: <i className="fa-solid fa-newspaper"></i>,
    innerOptions: [
      {
        name: "International News",
        IAB: "IAB12-1",
        icon: <i className="fa-solid fa-globe"></i>,
      },
      {
        name: "National News",
        IAB: "IAB12-2",
        icon: <i className="fa-solid fa-flag"></i>,
      },
      {
        name: " Local News",
        IAB: "IAB12-3",
        icon: <i className="fa-solid fa-location-dot"></i>,
      },
    ],
  },
  {
    name: "Personal Finance",
    IAB: "IAB13",
    icon: <i className="fa-solid fa-hand-holding-dollar"></i>,
    innerOptions: [
      {
        name: "Beginning Investing",
        IAB: "IAB13-1",
        icon: <i className="fa-solid fa-money-bill-wheat"></i>,
      },
      {
        name: "Credit/Debt & Loans",
        IAB: "IAB13-2",
        icon: <i className="fa-solid fa-credit-card"></i>,
      },
      {
        name: "Financial News",
        IAB: "IAB13-3",
        icon: <i className="fa-solid fa-comments-dollar"></i>,
      },
      {
        name: "Financial Planning",
        IAB: "IAB13-4",
        icon: <i className="fa-solid fa-money-bill-trend-up"></i>,
      },
      {
        name: "Hedge Fund",
        IAB: "IAB13-5",
        icon: <i className="fa-solid fa-filter-circle-dollar"></i>,
      },
      {
        name: " Insurance ",
        IAB: "IAB13-6",
        icon: <i className="fa-solid fa-car-burst"></i>,
      },
      {
        name: " Investing ",
        IAB: "IAB13-7",
        icon: <i className="fa-solid fa-money-bill-transfer"></i>,
      },
      {
        name: "Mutual Funds",
        IAB: "IAB13-8",
        icon: <i className="fa-solid fa-hand-holding-dollar"></i>,
      },
      {
        name: "Options",
        IAB: "IAB13-9",
        icon: <i className="fa-solid fa-coins"></i>,
      },
      {
        name: "Retirement Planning",
        IAB: "IAB13-10",
        icon: <i className="fa-solid fa-money-check"></i>,
      },
      {
        name: " Stocks",
        IAB: "IAB13-11",
        icon: <i className="fa-solid fa-arrow-trend-up"></i>,
      },
      {
        name: "Tax Planning ",
        IAB: "IAB13-12",
        icon: <i className="fa-solid fa-file-invoice-dollar"></i>,
      },
    ],
  },
  {
    name: " Society",
    IAB: "IAB14",
    icon: <i className="fa-solid fa-landmark"></i>,
    innerOptions: [
      {
        name: "Dating",
        IAB: "IAB14-1",
        icon: <i className="fa-solid fa-heart-circle-plus"></i>,
      },
      {
        name: "Divorce Support",
        IAB: "IAB14-2",
        icon: <i className="fa-solid fa-gavel"></i>,
      },
      {
        name: "Gay Life",
        IAB: "IAB14-3",
        icon: <i className="fa-solid fa-mars-double"></i>,
      },
      {
        name: "Marriage",
        IAB: "IAB14-4",
        icon: <i className="fa-solid fa-ring"></i>,
      },
      {
        name: "Senior Living",
        IAB: "IAB14-5",
        icon: <i className="fa-solid fa-person-cane"></i>,
      },
      {
        name: "Teens",
        IAB: "IAB14-6",
        icon: <i className="fa-solid fa-children"></i>,
      },
      {
        name: " Weddings",
        IAB: "IAB14-7",
        icon: <i className="fa-solid fa-people-pulling"></i>,
      },
      {
        name: "Ethnic Specific",
        IAB: "IAB14-8",
        icon: <i className="fa-solid fa-shirt"></i>,
      },
    ],
  },
  {
    name: "Science",
    IAB: "IAB15",
    icon: <i className="fa-solid fa-flask"></i>,
    innerOptions: [
      {
        name: "Astrology",
        IAB: "IAB15-1",
        icon: <i className="fa-solid fa-cloud-moon-rain"></i>,
      },
      {
        name: "Biology",
        IAB: "IAB15-2",
        icon: <i className="fa-solid fa-dna"></i>,
      },
      {
        name: "Chemistry",
        IAB: "IAB15-3",
        icon: <i className="fa-solid fa-flask-vial"></i>,
      },
      {
        name: "Geology",
        IAB: "IAB15-4",
        icon: <i className="fa-solid fa-earth-oceania"></i>,
      },
      {
        name: "Paranormal Phenomena",
        IAB: "IAB15-5",
        icon: <i className="fa-solid fa-ghost"></i>,
      },
      {
        name: "Physics",
        IAB: "IAB15-6",
        icon: <i className="fa-solid fa-book-journal-whills"></i>,
      },
      {
        name: "Space/Astronomy",
        IAB: "IAB15-7",
        icon: <i className="fa-brands fa-space-awesome"></i>,
      },
      {
        name: "Geography",
        IAB: "IAB15-8",
        icon: <i className="fa-solid fa-globe"></i>,
      },
      {
        name: "Botany",
        IAB: "IAB15-9",
        icon: <i className="fa-solid fa-seedling"></i>,
      },
      {
        name: "Weather",
        IAB: "IAB15-10",
        icon: <i className="fa-solid fa-cloud"></i>,
      },
    ],
  },
  {
    name: "Pets",
    IAB: "IAB16",
    icon: <i className="fa-solid fa-paw"></i>,
    innerOptions: [
      {
        name: "Aquariums",
        IAB: "IAB16-1",
        icon: <i className="fa-solid fa-fish-fins"></i>,
      },
      {
        name: "Birds",
        IAB: "IAB16-2",
        icon: <i className="fa-solid fa-kiwi-bird"></i>,
      },
      {
        name: "Cats",
        IAB: "IAB16-3",
        icon: <i className="fa-solid fa-cat"></i>,
      },
      {
        name: "Dogs",
        IAB: "IAB16-4",
        icon: <i className="fa-solid fa-dog"></i>,
      },
      {
        name: "Large Animals",
        IAB: "IAB16-5",
        icon: <i className="fa-solid fa-hippo"></i>,
      },
      {
        name: "Reptiles",
        IAB: "IAB16-6",
        icon: <i className="fa-solid fa-staff-snake"></i>,
      },
      {
        name: "Veterinary Medicine",
        IAB: "IAB16-7",
        icon: <i className="fa-solid fa-stethoscope"></i>,
      },
    ],
  },
  {
    name: "Sports ",
    IAB: "IAB17",
    icon: <i className="fa-solid fa-volleyball"></i>,
    innerOptions: [
      {
        name: "Auto Racing",
        IAB: "IAB17-1",
        icon: <i className="fa-solid fa-motorcycle"></i>,
      },
      {
        name: "Baseball",
        IAB: "IAB17-2",
        icon: <i className="fa-solid fa-baseball"></i>,
      },
      {
        name: "Bicycling",
        IAB: "IAB17-3",
        icon: <i className="fa-solid fa-bicycle"></i>,
      },
      {
        name: "Bodybuilding",
        IAB: "IAB17-4",
        icon: <i className="fa-solid fa-building"></i>,
      },
      {
        name: "Boxing",
        IAB: "IAB1-5",
        icon: <i className="fa-solid fa-weight-hanging"></i>,
      },
      {
        name: "Canoeing/Kayaking",
        IAB: "IAB17-6",
        icon: <i className="fa-solid fa-sailboat"></i>,
      },
      {
        name: "Cheerleading",
        IAB: "IAB17-7",
        icon: <i className="fa-solid fa-face-laugh-beam"></i>,
      },
      {
        name: "Climbing",
        IAB: "IAB17-8",
        icon: <i className="fa-solid fa-wrench"></i>,
      },
      {
        name: "Cricket",
        IAB: "IAB17-9",
        icon: <i className="fa-solid fa-heart"></i>,
      },
      {
        name: "Figure Skating",
        IAB: "IAB17-10",
        icon: <i className="fa-solid fa-person-skating"></i>,
      },
      {
        name: "Fly Fishing",
        IAB: "IAB17-11",
        icon: <i className="fa-solid fa-otter"></i>,
      },
      {
        name: "Football",
        IAB: "IAB1-12",
        icon: <i className="fa-solid fa-football"></i>,
      },
      {
        name: "Freshwater Fishing",
        IAB: "IAB17-13",
        icon: <i className="fa-solid fa-water"></i>,
      },
      {
        name: "Game & Fish",
        IAB: "IAB17-14",
        icon: <i className="fa-solid fa-fish"></i>,
      },
      {
        name: "Golf",
        IAB: "IAB17-15",
        icon: <i className="fa-solid fa-golf-ball-tee"></i>,
      },
      {
        name: "Horse Racing",
        IAB: "IAB17-16",
        icon: <i className="fa-solid fa-horse"></i>,
      },
      {
        name: "Horses",
        IAB: "IAB17-17",
        icon: <i className="fa-solid fa-horse-head"></i>,
      },
      {
        name: "Hunting/Shooting",
        IAB: "IAB17-18",
        icon: <i className="fa-solid fa-meteor"></i>,
      },
      {
        name: "Inline Skating",
        IAB: "IAB1-19",
        icon: <i className="fa-solid fa-person-skating"></i>,
      },
      {
        name: "Martial Arts",
        IAB: "IAB17-20",
        icon: <i className="fa-solid fa-fire-flame-curved"></i>,
      },
      {
        name: "Mountain Biking",
        IAB: "IAB17-21",
        icon: <i className="fa-solid fa-mountain"></i>,
      },
      {
        name: "NASCAR Racing",
        IAB: "IAB17-22",
        icon: <i className="fa-solid fa-person-running"></i>,
      },
      {
        name: "Olympics",
        IAB: "IAB17-23",
        icon: <i className="fa-solid fa-person-snowboarding"></i>,
      },
      {
        name: "Paintball",
        IAB: "IAB17-24",
        icon: <i className="fa-solid fa-gun"></i>,
      },
      {
        name: "Power & Motorcycles",
        IAB: "IAB17-25",
        icon: <i className="fa-solid fa-power-off"></i>,
      },
      {
        name: "Pro Basketball",
        IAB: "IAB1-26",
        icon: <i className="fa-solid fa-basketball"></i>,
      },
      {
        name: "Pro Ice Hockey",
        IAB: "IAB17-27",
        icon: <i className="fa-solid fa-hockey-puck"></i>,
      },
      {
        name: "Rodeo",
        IAB: "IAB17-28",
        icon: <i className="fa-solid fa-hat-cowboy"></i>,
      },
      {
        name: "Rugby",
        IAB: "IAB17-29",
        icon: <i className="fa-solid fa-football"></i>,
      },
      {
        name: "Running/Jogging",
        IAB: "IAB17-30",
        icon: <i className="fa-solid fa-person-running"></i>,
      },
      {
        name: "Sailing",
        IAB: "IAB17-31",
        icon: <i className="fa-solid fa-sailboat"></i>,
      },
      {
        name: "Saltwater Fishing",
        IAB: "IAB17-32",
        icon: <i className="fa-solid fa-fish"></i>,
      },
      {
        name: "Scuba Diving",
        IAB: "IAB1-33",
        icon: <i className="fa-solid fa-water"></i>,
      },
      {
        name: "Skateboarding",
        IAB: "IAB17-34",
        icon: <i className="fa-solid fa-person-skating"></i>,
      },
      {
        name: "Skiing",
        IAB: "IAB17-35",
        icon: <i className="fa-solid fa-person-skiing"></i>,
      },
      {
        name: "Snowboarding",
        IAB: "IAB17-36",
        icon: <i className="fa-solid fa-person-snowboarding"></i>,
      },
      {
        name: "Surfing/Bodyboarding",
        IAB: "IAB17-37",
        icon: <i className="fa-solid fa-person-swimming"></i>,
      },
      {
        name: "Swimming",
        IAB: "IAB17-38",
        icon: <i className="fa-solid fa-person-swimming"></i>,
      },
      {
        name: "Table Tennis/Ping-Pong",
        IAB: "IAB17-39",
        icon: <i className="fa-solid fa-table-tennis-paddle-ball"></i>,
      },
      {
        name: "Tennis",
        IAB: "IAB1-40",
        icon: <i className="fa-solid fa-table-tennis-paddle-ball"></i>,
      },
      {
        name: "Volleyball",
        IAB: "IAB17-41",
        icon: <i className="fa-solid fa-volleyball"></i>,
      },
      {
        name: "Walking",
        IAB: "IAB17-42",
        icon: <i className="fa-solid fa-person-walking"></i>,
      },
      {
        name: "Waterski/Wakeboard",
        IAB: "IAB17-43",
        icon: <i className="fa-solid fa-person-snowboarding"></i>,
      },
      {
        name: "World Soccer",
        IAB: "IAB17-44",
        icon: <i className="fa-solid fa-globe"></i>,
      },
    ],
  },

  {
    name: "Style & Fashion",
    IAB: "IAB18",
    icon: <i className="fa-solid fa-shirt"></i>,
    innerOptions: [
      {
        name: "Beauty",
        IAB: "IAB18-1",
        icon: <i className="fa-solid fa-crown"></i>,
      },
      {
        name: "Body Art",
        IAB: "IAB18-2",
        icon: <i className="fa-solid fa-child"></i>,
      },
      {
        name: "Fashion",
        IAB: "IAB18-3",
        icon: <i className="fa-solid fa-vest-patches"></i>,
      },
      {
        name: "Jewelry",
        IAB: "IAB18-4",
        icon: <i className="fa-solid fa-gem"></i>,
      },
      {
        name: "Clothing",
        IAB: "IAB18-5",
        icon: <i className="fa-solid fa-shirt"></i>,
      },
      {
        name: "Accessories",
        IAB: "IAB18-6",
        icon: <i className="fa-solid fa-keyboard"></i>,
      },
    ],
  },

  {
    name: "Technology & Computing",
    IAB: "IAB19",
    icon: <i className="fa-solid fa-computer"></i>,
    innerOptions: [
      {
        name: "3-D Graphics",
        IAB: "IAB19-1",
        icon: <i className="fa-solid fa-vr-cardboard"></i>,
      },
      {
        name: "Animation",
        IAB: "IAB19-2",
        icon: <i className="fa-solid fa-dragon"></i>,
      },
      {
        name: "Antivirus Software",
        IAB: "IAB19-3",
        icon: <i className="fa-solid fa-file-shield"></i>,
      },
      {
        name: "C/C++",
        IAB: "IAB19-4",
        icon: <i className="fa-solid fa-c"></i>,
      },
      {
        name: "Cameras & Camcorders",
        IAB: "IAB19-5",
        icon: <i className="fa-solid fa-camera"></i>,
      },
      {
        name: "Cell Phones",
        IAB: "IAB19-6",
        icon: <i className="fa-solid fa-phone"></i>,
      },
      {
        name: "Computer Certification",
        IAB: "IAB19-7",
        icon: <i className="fa-solid fa-computer"></i>,
      },
      {
        name: "Computer Networking",
        IAB: "IAB19-8",
        icon: <i className="fa-solid fa-network-wired"></i>,
      },
      {
        name: "Computer Peripherals",
        IAB: "IAB19-9",
        icon: <i className="fa-solid fa-computer-mouse"></i>,
      },
      {
        name: "Computer Reviews",
        IAB: "IAB19-10",
        icon: <i className="fa-solid fa-file-waveform"></i>,
      },
      {
        name: "Data Centers",
        IAB: "IAB19-11",
        icon: <i className="fa-solid fa-server"></i>,
      },
      {
        name: "Databases",
        IAB: "IAB19-12",
        icon: <i className="fa-solid fa-database"></i>,
      },
      {
        name: "Desktop Publishing",
        IAB: "IAB19-13",
        icon: <i className="fa-solid fa-desktop"></i>,
      },
      {
        name: "Desktop Video",
        IAB: "IAB19-14",
        icon: <i className="fa-solid fa-video"></i>,
      },
      {
        name: "Email",
        IAB: "IAB19-15",
        icon: <i className="fa-solid fa-envelope"></i>,
      },
      {
        name: "Graphics Software",
        IAB: "IAB19-16",
        icon: <i className="fa-solid fa-laptop-code"></i>,
      },
      {
        name: "Home Video/DVD",
        IAB: "IAB19-17",
        icon: <i className="fa-solid fa-house"></i>,
      },
      {
        name: "Internet Technology",
        IAB: "IAB19-18",
        icon: <i className="fa-solid fa-wifi"></i>,
      },
      {
        name: "Java",
        IAB: "IAB19-19",
        icon: <i className="fa-solid fa-mug-hot"></i>,
      },
      {
        name: "JavaScript",
        IAB: "IAB19-20",
        icon: <i className="fa-solid fa-scroll"></i>,
      },
      {
        name: "Mac Support",
        IAB: "IAB19-21",
        icon: <i className="fa-solid fa-laptop"></i>,
      },
      {
        name: "MP3/MIDI",
        IAB: "IAB19-22",
        icon: <i className="fa-solid fa-music"></i>,
      },
      {
        name: "Net Conferencing",
        IAB: "IAB19-23",
        icon: <i className="fa-solid fa-network-wired"></i>,
      },
      {
        name: "Net for Beginners",
        IAB: "IAB19-24",
        icon: <i className="fa-solid fa-wifi"></i>,
      },
      {
        name: "Network Security",
        IAB: "IAB19-25",
        icon: <i className="fa-solid fa-ethernet"></i>,
      },
      {
        name: "Palmtops/PDAs",
        IAB: "IAB19-26",
        icon: <i className="fa-solid fa-tablet-screen-button"></i>,
      },
      {
        name: "PC Support",
        IAB: "IAB19-27",
        icon: <i className="fa-solid fa-desktop"></i>,
      },
      {
        name: "Portable",
        IAB: "IAB19-28",
        icon: <i className="fa-solid fa-display"></i>,
      },
      {
        name: "Entertainment",
        IAB: "IAB19-29",
        icon: <i className="fa-solid fa-face-laugh-beam"></i>,
      },
      {
        name: "Shareware/Freeware",
        IAB: "IAB19-30",
        icon: <i className="fa-solid fa-road-circle-check"></i>,
      },
      {
        name: "Unix",
        IAB: "IAB19-31",
        icon: <i className="fa-solid fa-universal-access"></i>,
      },
      {
        name: "Visual Basic",
        IAB: "IAB19-32",
        icon: <i className="fa-solid fa-infinity"></i>,
      },
      {
        name: "Web Clip Art",
        IAB: "IAB19-33",
        icon: <i className="fa-solid fa-id-card-clip"></i>,
      },
      {
        name: "Web Design/HTML",
        IAB: "IAB19-34",
        icon: <i className="fa-solid fa-code"></i>,
      },
      {
        name: "Web Search",
        IAB: "IAB19-35",
        icon: <i className="fa-solid fa-magnifying-glass"></i>,
      },
      {
        name: "Windows",
        IAB: "IAB19-36",
        icon: <i className="fa-solid fa-table-cells-large"></i>,
      },
    ],
  },

  {
    name: "Travel",
    IAB: "IAB20",
    icon: <i className="fa-solid fa-plane-departure"></i>,
    innerOptions: [
      {
        name: "Adventure Travel",
        IAB: "IAB20-1",
        icon: <i className="fa-solid fa-route"></i>,
      },
      {
        name: "Africa",
        IAB: "IAB20-2",
        icon: <i className="fa-solid fa-earth-africa"></i>,
      },
      {
        name: "Air Travel",
        IAB: "IAB20-3",
        icon: <i className="fa-solid fa-plane"></i>,
      },
      {
        name: "Australia & New Zealand",
        IAB: "IAB20-4",
        icon: <i className="fa-solid fa-earth-oceania"></i>,
      },
      {
        name: "Bed & Breakfasts",
        IAB: "IAB20-5",
        icon: <i className="fa-solid fa-bed"></i>,
      },
      {
        name: "Budget Travel",
        IAB: "IAB20-6",
        icon: <i className="fa-solid fa-money-bill-transfer"></i>,
      },
      {
        name: "Business Travel",
        IAB: "IAB20-7",
        icon: <i className="fa-solid fa-bus"></i>,
      },
      {
        name: "By US Locale",
        IAB: "IAB20-8",
        icon: <i className="fa-solid fa-location-dot"></i>,
      },
      {
        name: "Camping",
        IAB: "IAB20-9",
        icon: <i className="fa-solid fa-campground"></i>,
      },
      {
        name: "Canada",
        IAB: "IAB20-10",
        icon: <i className="fa-solid fa-earth-americas"></i>,
      },
      {
        name: "Caribbean",
        IAB: "IAB20-11",
        icon: <i className="fa-solid fa-earth-africa"></i>,
      },
      {
        name: "Cruises",
        IAB: "IAB20-12",
        icon: <i className="fa-solid fa-ferry"></i>,
      },
      {
        name: "Eastern Europe",
        IAB: "IAB20-13",
        icon: <i className="fa-solid fa-earth-europe"></i>,
      },
      {
        name: "Europe",
        IAB: "IAB20-14",
        icon: <i className="fa-solid fa-earth-europe"></i>,
      },
      {
        name: "France",
        IAB: "IAB20-15",
        icon: <i className="fa-solid fa-location-arrow"></i>,
      },
      {
        name: "Greece",
        IAB: "IAB20-16",
        icon: <i className="fa-solid fa-location-pin"></i>,
      },
      {
        name: "Honeymoons/Getaways",
        IAB: "IAB20-17",
        icon: <i className="fa-solid fa-parachute-box"></i>,
      },
      {
        name: "Hotels",
        IAB: "IAB20-18",
        icon: <i className="fa-solid fa-hotel"></i>,
      },
      {
        name: "Italy",
        IAB: "IAB20-19",
        icon: <i className="fa-solid fa-square-h"></i>,
      },
      {
        name: "Japan",
        IAB: "IAB20-20",
        icon: <i className="fa-solid fa-door-open"></i>,
      },
      {
        name: "Mexico & Central America",
        IAB: "IAB20-21",
        icon: <i className="fa-solid fa-umbrella-beach"></i>,
      },
      {
        name: "National Parks",
        IAB: "IAB20-22",
        icon: <i className="fa-solid fa-tree-city"></i>,
      },
      {
        name: "South America",
        IAB: "IAB20-23",
        icon: <i className="fa-solid fa-bed"></i>,
      },
      {
        name: "Spas",
        IAB: "IAB20-24",
        icon: <i className="fa-solid fa-spa"></i>,
      },
      {
        name: "Theme Parks",
        IAB: "IAB20-25",
        icon: <i className="fa-solid fa-water-ladder"></i>,
      },
      {
        name: "Traveling with Kids",
        IAB: "IAB20-26",
        icon: <i className="fa-solid fa-people-roof"></i>,
      },
      {
        name: "United Kingdom",
        IAB: "IAB20-27",
        icon: <i className="fa-solid fa-flag-usa"></i>,
      },
    ],
  },

  {
    name: "Real Estate",
    IAB: "IAB21",
    icon: <i className="fa-solid fa-sign-hanging"></i>,
    innerOptions: [
      {
        name: "Apartments",
        IAB: "IAB21-1",
        icon: <i className="fa-solid fa-building"></i>,
      },
      {
        name: "Architects",
        IAB: "IAB21-2",
        icon: <i className="fa-solid fa-city"></i>,
      },
      {
        name: "Buying/Selling Homes",
        IAB: "IAB21-3",
        icon: <i className="fa-solid fa-building-circle-arrow-right"></i>,
      },
    ],
  },

  {
    name: "Shopping",
    IAB: "IAB22",
    icon: <i className="fa-solid fa-cart-shopping"></i>,
    innerOptions: [
      {
        name: "Contests & Freebies",
        IAB: "IAB22-1",
        icon: <i className="fa-solid fa-trophy"></i>,
      },
      {
        name: "Couponing",
        IAB: "IAB22-2",
        icon: <i className="fa-solid fa-ticket"></i>,
      },
      {
        name: "Comparison",
        IAB: "IAB22-3",
        icon: <i className="fa-solid fa-code-compare"></i>,
      },
      {
        name: "Engines",
        IAB: "IAB22-4",
        icon: <i className="fa-solid fa-car-battery"></i>,
      },
    ],
  },
  {
    name: "Religion & Spirituality",
    IAB: "IAB23",
    icon: <i className="fa-solid fa-hands-praying"></i>,
    innerOptions: [
      {
        name: "Alternative Religions",
        IAB: "IAB23-1",
        icon: <i className="fa-solid fa-book-atlas"></i>,
      },
      {
        name: "Atheism/Agnosticism",
        IAB: "IAB23-2",
        icon: <i className="fa-solid fa-atom"></i>,
      },
      {
        name: "Buddhism",
        IAB: "IAB23-3",
        icon: <i className="fa-solid fa-vihara"></i>,
      },
      {
        name: "Catholicism",
        IAB: "IAB23-4",
        icon: <i className="fa-solid fa-cross"></i>,
      },
      {
        name: "Christianity",
        IAB: "IAB23-5",
        icon: <i className="fa-solid fa-cross"></i>,
      },
      {
        name: "Hinduism",
        IAB: "IAB23-6",
        icon: <i className="fa-solid fa-om"></i>,
      },
      {
        name: "Islam",
        IAB: "IAB23-7",
        icon: <i className="fa-solid fa-star-and-crescent"></i>,
      },
      {
        name: "Judaism",
        IAB: "IAB23-8",
        icon: <i className="fa-solid fa-synagogue"></i>,
      },
      {
        name: "Latter-Day Saints",
        IAB: "IAB23-9",
        icon: <i className="fa-solid fa-dharmachakra"></i>,
      },
      {
        name: "Pagan/Wiccan",
        IAB: "IAB23-10",
        icon: <i className="fa-solid fa-star-of-david"></i>,
      },
    ],
  },
  {
    name: "Uncategorized",
    IAB: "IAB24",
    icon: <i className="fa-solid fa-table-list"></i>,
    innerOptions: [],
  },
  {
    name: "Non-Standard Content",
    IAB: "IAB25",
    icon: <i className="fa-solid fa-layer-group"></i>,
    innerOptions: [
      {
        name: "Unmoderated UGC",
        IAB: "IAB25-1",
        icon: <i className="fa-solid fa-user-tag"></i>,
      },
      {
        name: "Extreme Graphic/Explicit Violence",
        IAB: "IAB25-2",
        icon: <i className="fa-solid fa-chart-simple"></i>,
      },
      {
        name: "Pornography",
        IAB: "IAB25-3",
        icon: <i className="fa-solid fa-square-xmark"></i>,
      },
      {
        name: "Profane Content",
        IAB: "IAB25-4",
        icon: <i className="fa-solid fa-person-harassing"></i>,
      },
      {
        name: "Hate Content",
        IAB: "IAB25-5",
        icon: <i className="fa-solid fa-heart-crack"></i>,
      },
      {
        name: "Under Construction",
        IAB: "IAB25-6",
        icon: <i className="fa-solid fa-trowel-bricks"></i>,
      },
      {
        name: "Incentivized",
        IAB: "IAB25-7",
        icon: <i className="fa-solid fa-hand-holding-dollar"></i>,
      },
    ],
  },

  {
    name: "Illegal Content",
    IAB: "IAB26",
    icon: <i className="fa-solid fa-scale-unbalanced"></i>,
    innerOptions: [
      {
        name: "Illegal Content",
        IAB: "IAB26-1",
        icon: <i className="fa-solid fa-scale-unbalanced-flip"></i>,
      },
      {
        name: "Warez",
        IAB: "IAB26-2",
        icon: <i className="fa-solid fa-users-rays"></i>,
      },
      {
        name: "Spyware/Malware",
        IAB: "IAB26-3",
        icon: <i className="fa-solid fa-user-secret"></i>,
      },
      {
        name: "Copyright Infringement",
        IAB: "IAB26-4",
        icon: <i className="fa-solid fa-copyright"></i>,
      },
    ],
  },
];

export const IABOptions: IABOptionsType = [
  {
    name: "Arts & Entertainment",
    IAB: "IAB1",
    icon: <i className="fa-solid fa-palette"></i>,
    innerOptions: [
      {
        name: "Books & Literature",
        IAB: "IAB1-1",
        icon: <i className="fa-solid fa-book"></i>,
      },
      { name: "Celebrity Fan/Gossip", IAB: "IAB1-2", icon: <i></i> },
      {
        name: "Fine Art",
        IAB: "IAB1-3",
        icon: <i className="fa-solid fa-paintbrush"></i>,
      },
      {
        name: "Humor",
        IAB: "IAB1-4",
        icon: <i className="fa-solid fa-hammer"></i>,
      },
      {
        name: "Movies",
        IAB: "IAB1-5",
        icon: <i className="fa-solid fa-clapperboard"></i>,
      },
      {
        name: "Music",
        IAB: "IAB1-6",
        icon: <i className="fa-solid fa-music"></i>,
      },
      {
        name: "Television",
        IAB: "IAB1-7",
        icon: <i className="fa-solid fa-tv"></i>,
      },
    ],
  },
  {
    name: "Automotive",
    IAB: "IAB2",
    icon: <i></i>,
    innerOptions: [
      { name: "Auto Parts", IAB: "IAB2-1", icon: <i></i> },
      { name: "Auto Repair", IAB: "IAB2-2", icon: <i></i> },
      { name: "Buying/Selling Cars", IAB: "IAB2-3", icon: <i></i> },
      {
        name: "Car Culture",
        IAB: "IAB2-4",
        icon: <i className="fa-solid fa-car"></i>,
      },
      { name: "Certified Pre-Owned", IAB: "IAB2-5", icon: <i></i> },
      { name: "Convertible", IAB: "IAB2-6", icon: <i></i> },
      { name: "Coupe", IAB: "IAB2-7", icon: <i></i> },
      {
        name: "Crossover",
        IAB: "IAB2-8",
        icon: <i className="fa-solid fa-shuffle"></i>,
      },
      {
        name: "Diesel",
        IAB: "IAB2-9",
        icon: <i className="fa-solid fa-gas-pump"></i>,
      },
      { name: "Electric Vehicle", IAB: "IAB2-10", icon: <i></i> },
      { name: "Hatchback", IAB: "IAB2-11", icon: <i></i> },
      { name: "Hybrid", IAB: "IAB2-12", icon: <i></i> },
      { name: "Luxury", IAB: "IAB2-13", icon: <i></i> },
      {
        name: "MiniVan",
        IAB: "IAB2-14",
        icon: <i className="fa-solid fa-van-shuttle"></i>,
      },
      {
        name: "Mororcycles",
        IAB: "IAB2-15",
        icon: <i className="fa-solid fa-motorcycle"></i>,
      },
      {
        name: "Off-Road Vehicles",
        IAB: "IAB2-16",
        icon: <i className="fa-solid fa-truck-monster"></i>,
      },
      {
        name: "Performance Vehicles	",
        IAB: "IAB2-17",
        icon: <i className="fa-solid fa-car"></i>,
      },
      { name: "Pickup", IAB: "IAB2-18", icon: <i></i> },
      { name: "Road-Side Assistance", IAB: "IAB2-19", icon: <i></i> },
      { name: "Sedan", IAB: "IAB2-20", icon: <i></i> },
      { name: "Trucks & Accessories", IAB: "IAB2-21", icon: <i></i> },
      { name: "Vintage Cars", IAB: "IAB2-22", icon: <i></i> },
      { name: "Wagon", IAB: "IAB2-23", icon: <i></i> },
    ],
  },
  {
    name: "Business",
    IAB: "IAB3",
    icon: <i></i>,
    innerOptions: [
      {
        name: "Advertising",
        IAB: "IAB3-1",
        icon: <i className="fa-solid fa-film"></i>,
      },
      {
        name: "Agriculture",
        IAB: "IAB3-2",
        icon: <i className="fa-solid fa-wheat-awn"></i>,
      },
      { name: "Biotech/Biomedical", IAB: "IAB3-3", icon: <i></i> },
      {
        name: "Business Software",
        IAB: "IAB3-4",
        icon: <i className="fa-solid fa-business-time"></i>,
      },
      { name: "Construction", IAB: "IAB3-5", icon: <i></i> },
      { name: "Forestry", IAB: "IAB3-6", icon: <i></i> },
      { name: "Government", IAB: "IAB3-7", icon: <i></i> },
      { name: "Green Solutions", IAB: "IAB3-8", icon: <i></i> },
      { name: "Human Resources", IAB: "IAB3-9", icon: <i></i> },
      {
        name: "Logistics",
        IAB: "IAB3-10",
        icon: <i className="fa-solid fa-truck-fast"></i>,
      },
      { name: "Marketing", IAB: "IAB3-11", icon: <i></i> },
      { name: "Metals", IAB: "IAB3-12", icon: <i></i> },
    ],
  },
  {
    name: "Careers",
    IAB: "IAB4",
    icon: <i></i>,
    innerOptions: [
      { name: "Career Planning", IAB: "IAB4-1", icon: <i></i> },
      {
        name: "College",
        IAB: "IAB4-2",
        icon: <i className="fa-solid fa-building-columns"></i>,
      },
      {
        name: "Financial Aid",
        IAB: "IAB4-3",
        icon: <i className="fa-solid fa-coins"></i>,
      },
      { name: "Job Fairs", IAB: "IAB4-4", icon: <i></i> },
      { name: "Job Search", IAB: "IAB4-5", icon: <i></i> },
      {
        name: "Resume Writing/Advice",
        IAB: "IAB4-6",
        icon: <i className="fa-solid fa-pen-to-square"></i>,
      },
      {
        name: "Nursing",
        IAB: "IAB4-7",
        icon: <i className="fa-solid fa-user-nurse"></i>,
      },
      { name: "Scholarships", IAB: "IAB4-8", icon: <i></i> },
      {
        name: "Telecommuting",
        IAB: "IAB4-9",
        icon: <i className="fa-solid fa-phone"></i>,
      },
      {
        name: "U.S. Military",
        IAB: "IAB4-10",
        icon: <i className="fa-solid fa-person-military-rifle"></i>,
      },
      { name: "Career Advice", IAB: "IAB4-11", icon: <i></i> },
    ],
  },
  {
    name: "Education",
    IAB: "IAB5",
    icon: <i></i>,
    innerOptions: [
      {
        name: "7-12 Education",
        IAB: "IAB5-1",
        icon: <i className="fa-solid fa-school"></i>,
      },
      {
        name: "Adult Education",
        IAB: "IAB5-2",
        icon: <i className="fa-solid fa-building-columns"></i>,
      },
      { name: "Art History", IAB: "IAB5-3", icon: <i></i> },
      { name: "College Administration", IAB: "IAB5-4", icon: <i></i> },
      { name: "College Life", IAB: "IAB5-5", icon: <i></i> },
      { name: "Distance Learning", IAB: "IAB5-6", icon: <i></i> },
      { name: "English as a 2nd Language", IAB: "IAB5-7", icon: <i></i> },
      { name: "Language Learning", IAB: "IAB5-8", icon: <i></i> },
      {
        name: "Graduate School",
        IAB: "IAB5-9",
        icon: <i className="fa-solid fa-graduation-cap"></i>,
      },
      { name: "Homeschooling", IAB: "IAB5-10", icon: <i></i> },
      { name: "Homework/Study Tips", IAB: "IAB5-11", icon: <i></i> },
      { name: "K-6 Educators", IAB: "IAB5-12", icon: <i></i> },
      { name: "Private School", IAB: "IAB5-13", icon: <i></i> },
      { name: "Special Education", IAB: "IAB5-14", icon: <i></i> },
      { name: "Studying Business", IAB: "IAB5-15", icon: <i></i> },
    ],
  },
  {
    name: "Family & Parenting",
    IAB: "IAB6",
    icon: <i></i>,
    innerOptions: [
      { name: "Adoption", IAB: "IAB6-1", icon: <i></i> },
      {
        name: "Babies & Toddlers",
        IAB: "IAB6-2",
        icon: <i className="fa-solid fa-baby"></i>,
      },
      { name: "Daycare/Pre School", IAB: "IAB6-3", icon: <i></i> },
      { name: "Family Internet", IAB: "IAB6-4", icon: <i></i> },
      { name: "Parenting - K-6 Kids", IAB: "IAB6-5", icon: <i></i> },
      { name: "Parenting teens", IAB: "IAB6-6", icon: <i></i> },
      {
        name: "Pregnancy",
        IAB: "IAB6-7",
        icon: <i className="fa-solid fa-person-pregnant"></i>,
      },
      { name: "Special Needs Kids", IAB: "IAB6-8", icon: <i></i> },
      { name: "Eldercare", IAB: "IAB6-9", icon: <i></i> },
    ],
  },
  {
    name: "Health & Fitness",
    IAB: "IAB7",
    icon: <i className="fa-solid fa-notes-medical"></i>,
    innerOptions: [
      {
        name: "Exercise",
        IAB: "IAB7-1",
        icon: <i className="fa-solid fa-dumbbell"></i>,
      },
      { name: "A.D.D.", IAB: "IAB7-2", icon: <i></i> },
      {
        name: "AIDS/HIV",
        IAB: "IAB7-3",
        icon: <i className="fa-solid fa-ribbon"></i>,
      },
      {
        name: "Allergies",
        IAB: "IAB7-4",
        icon: <i className="fa-solid fa-hand-dots"></i>,
      },
      { name: "Alternative Medicine", IAB: "IAB7-5", icon: <i></i> },
      { name: "Arthritis", IAB: "IAB7-6", icon: <i></i> },
      { name: "Asthma", IAB: "IAB7-7", icon: <i></i> },
      { name: "Autism/PDD", IAB: "IAB7-8", icon: <i></i> },
      { name: "Bipolar Disorder", IAB: "IAB7-9", icon: <i></i> },
      { name: "Brain Tumor", IAB: "IAB7-10", icon: <i></i> },
      { name: "Cancer", IAB: "IAB7-11", icon: <i></i> },
      { name: "Cholesterol", IAB: "IAB7-12", icon: <i></i> },
      { name: "Chronic Fatigue Syndrome", IAB: "IAB7-13", icon: <i></i> },
      { name: "Chronic Pain", IAB: "IAB7-14", icon: <i></i> },
      { name: "Cold & Flu", IAB: "IAB7-15", icon: <i></i> },
      {
        name: "Deafness",
        IAB: "IAB7-16",
        icon: <i className="fa-solid fa-ear-deaf"></i>,
      },
      {
        name: "Dental Care",
        IAB: "IAB7-17",
        icon: <i className="fa-solid fa-tooth"></i>,
      },
      { name: "Depression", IAB: "IAB7-18", icon: <i></i> },
      { name: "Dermatology", IAB: "IAB7-19", icon: <i></i> },
      { name: "Diabetes", IAB: "IAB7-20", icon: <i></i> },
      { name: "Epilepsy", IAB: "IAB7-21", icon: <i></i> },
      { name: "GERD/Acid Reflux", IAB: "IAB7-22", icon: <i></i> },
      { name: "Headaches/Migraines", IAB: "IAB7-23", icon: <i></i> },
      {
        name: "Heart Disease",
        IAB: "IAB7-24",
        icon: <i className="fa-solid fa-heart-pulse"></i>,
      },
      { name: "Herbs for Health", IAB: "IAB7-25", icon: <i></i> },
      { name: "Holistic Healing", IAB: "IAB7-26", icon: <i></i> },
      { name: "IBS/Crohn’s Disease", IAB: "IAB7-27", icon: <i></i> },
      { name: "Incest/Abuse Support", IAB: "IAB7-28", icon: <i></i> },
      { name: "Incontinence", IAB: "IAB7-29", icon: <i></i> },
      { name: "Infertility", IAB: "IAB7-30", icon: <i></i> },
      {
        name: "Men’s Health",
        IAB: "IAB7-31",
        icon: <i className="fa-solid fa-comment-medical"></i>,
      },
      { name: "Nutrition", IAB: "IAB7-32", icon: <i></i> },
      { name: "Orthopedics", IAB: "IAB7-33", icon: <i></i> },
      { name: "Panic/Anxiety Disorders", IAB: "IAB7-34", icon: <i></i> },
      { name: "Pediatrics", IAB: "IAB7-35", icon: <i></i> },
      { name: "Physical Therapy", IAB: "IAB7-36", icon: <i></i> },
      { name: "Psychology/Psychiatry", IAB: "IAB7-37", icon: <i></i> },
      { name: "Senior Health", IAB: "IAB7-38", icon: <i></i> },
      { name: "Sexuality", IAB: "IAB7-39", icon: <i></i> },
      { name: "Sleep Disorders", IAB: "IAB7-40", icon: <i></i> },
      { name: " Smoking Cessation", IAB: "IAB7-41", icon: <i></i> },
      { name: "Substance Abuse", IAB: "IAB7-42", icon: <i></i> },
      {
        name: "Weight Loss",
        IAB: "IAB7-43",
        icon: <i className="fa-solid fa-weight-scale"></i>,
      },
      { name: "Women’s Health", IAB: "IAB7-44", icon: <i></i> },
    ],
  },
  {
    name: "Food & Drink",
    IAB: "IAB8",
    icon: <i></i>,
    innerOptions: [
      { name: "American Cuisine", IAB: "IAB8-1", icon: <i></i> },
      { name: " Barbecues & Grilling", IAB: "IAB8-2", icon: <i></i> },
      { name: "Cajun/Creole", IAB: "IAB8-3", icon: <i></i> },
      { name: "Chinese Cuisine", IAB: "IAB8-4", icon: <i></i> },
      {
        name: "Cocktails/Beer",
        IAB: "IAB8-5",
        icon: <i className="fa-solid fa-martini-glass-citrus"></i>,
      },
      {
        name: "Coffee/Tea",
        IAB: "IAB8-6",
        icon: <i className="fa-solid fa-mug-hot"></i>,
      },
      { name: "Cuisine-Specific", IAB: "IAB8-7", icon: <i></i> },
      { name: "Desserts & Baking", IAB: "IAB8-8", icon: <i></i> },
      { name: "Dining Out", IAB: "IAB8-9", icon: <i></i> },
      { name: "Food Allergies", IAB: "IAB8-10", icon: <i></i> },
      { name: " French Cuisine", IAB: "IAB8-11", icon: <i></i> },
      { name: "Health/Lowfat Cooking", IAB: "IAB8-12", icon: <i></i> },
      { name: " Italian Cuisine", IAB: "IAB8-13", icon: <i></i> },
      { name: " Japanese Cuisine", IAB: "IAB8-14", icon: <i></i> },
      { name: "Mexican Cuisine", IAB: "IAB8-15", icon: <i></i> },
      {
        name: "Vegan",
        IAB: "IAB8-16",
        icon: <i className="fa-solid fa-leaf"></i>,
      },
      { name: "Vegetarian", IAB: "IAB8-17", icon: <i></i> },
      {
        name: "Wine",
        IAB: "IAB8-18",
        icon: <i className="fa-solid fa-wine-bottle"></i>,
      },
    ],
  },
  {
    name: "Hobbies & Interests",
    IAB: "IAB9",
    icon: <i></i>,
    innerOptions: [
      {
        name: "Art/Technology",
        IAB: "IAB9-1",
        icon: <i className="fa-solid fa-microchip"></i>,
      },
      {
        name: "Arts & Crafts",
        IAB: "IAB9-2",
        icon: <i className="fa-sharp fa-solid fa-pencil"></i>,
      },
      { name: "Beadwork", IAB: "IAB9-3", icon: <i></i> },
      {
        name: "Birdwatching",
        IAB: "IAB9-4",
        icon: <i></i>,
      },
      {
        name: "Board Games/Puzzles",
        IAB: "IAB9-5",
        icon: <i className="fa-solid fa-puzzle"></i>,
      },
      {
        name: "Candle & Soap Making",
        IAB: "IAB9-6",
        icon: <i className="fa-solid fa-candle-holder"></i>,
      },
      {
        name: "Card Games",
        IAB: "IAB9-7",
        icon: <i className="fa-sharp fa-solid fa-club"></i>,
      },
      {
        name: "Chess",
        IAB: "IAB9-8",
        icon: <i className="fa-sharp fa-solid fa-chess-board"></i>,
      },
      {
        name: "Cigars",
        IAB: "IAB9-9",
        icon: <i className="fa-sharp fa-solid fa-smoking"></i>,
      },
      {
        name: "Collecting",
        IAB: "IAB9-10",
        icon: <i className="fa-solid fa-album-collection-circle-user"></i>,
      },
      {
        name: "Comic Books",
        IAB: "IAB9-11",
        icon: <i className="fa-solid fa-book"></i>,
      },
      {
        name: "Drawing/Sketching",
        IAB: "IAB9-12",
        icon: <i className="fa-solid fa-person-drowning"></i>,
      },
      {
        name: "Freelance Writing",
        IAB: "IAB9-13",
        icon: <i className="fa-solid fa-pencil"></i>,
      },
      { name: "Genealogy", IAB: "IAB9-14", icon: <i></i> },
      { name: "Getting Published", IAB: "IAB9-15", icon: <i></i> },
      {
        name: "Guitar",
        IAB: "IAB9-16",
        icon: <i className="fa-solid fa-guitar"></i>,
      },
      { name: "Home Recording", IAB: "IAB9-17", icon: <i></i> },
      {
        name: "Investors & Patents",
        IAB: "IAB9-18",
        icon: <i className="fa-solid fa-users-medical"></i>,
      },
      { name: "Jewelry Making	", IAB: "IAB9-19", icon: <i></i> },
      {
        name: "Magic & Illusion	",
        IAB: "IAB9-20",
        icon: <i className="fa-solid fa-wand-magic-sparkles"></i>,
      },
      {
        name: "Needlework	",
        IAB: "IAB9-21",
        icon: <i className="fa-solid fa-syringe"></i>,
      },
      {
        name: "Painting",
        IAB: "IAB9-22",
        icon: <i className="fa-solid fa-paintbrush"></i>,
      },
      {
        name: "Photography	",
        IAB: "IAB9-23",
        icon: <i className="fa-solid fa-camera"></i>,
      },
      {
        name: "Radio",
        IAB: "IAB9-24",
        icon: <i className="fa-solid fa-radio"></i>,
      },
      { name: "Roleplaying Games	", IAB: "IAB9-25", icon: <i></i> },
      { name: "Sci-Fi & Fantasy	", IAB: "IAB9-26", icon: <i></i> },
      { name: "Scrapbooking	", IAB: "IAB9-27", icon: <i></i> },
      { name: "Screenwriting", IAB: "IAB9-28", icon: <i></i> },
      {
        name: "Stamps & Coins",
        IAB: "IAB9-29",
        icon: <i className="fa-solid fa-stamp"></i>,
      },
      {
        name: "Video & Computer Games",
        IAB: "IAB9-30",
        icon: <i className="fa-solid fa-video"></i>,
      },
      { name: "Woodworking", IAB: "IAB9-31", icon: <i></i> },
    ],
  },
  {
    name: "Home & Garden",
    IAB: "IAB10",
    icon: <i className="fa-sharp fa-solid fa-house-tree"></i>,
    innerOptions: [
      {
        name: "Appliances",
        IAB: "IAB10-1",
        icon: <i className="fa-sharp fa-solid fa-washing-machine"></i>,
      },
      {
        name: "Entertaining",
        IAB: "IAB10-2",
        icon: <i className="fa-solid fa-tv-retro"></i>,
      },
      {
        name: "Environmental Safety",
        IAB: "IAB10-3",
        icon: <i className="fa-solid fa-seedling"></i>,
      },
      { name: "Gardenin", IAB: "IAB10-4", icon: <i></i> },
      { name: "Home Repair", IAB: "IAB10-5", icon: <i></i> },
      {
        name: "Home Theater",
        IAB: "IAB10-6",
        icon: <i className="fa-solid fa-camera-movie"></i>,
      },
      {
        name: " Interior Decorating ",
        IAB: "IAB10-7",
        icon: <i className="fa-sharp fa-solid fa-tree-decorated"></i>,
      },
      {
        name: " Landscaping ",
        IAB: "IAB10-8",
        icon: <i className="fa-solid fa-image-landscape"></i>,
      },
      {
        name: "Remodeling & Construction",
        IAB: "IAB10-9",
        icon: <i className="fa-solid fa-building"></i>,
      },
    ],
  },
  {
    name: "Law, Gov’t & Politics",
    IAB: "IAB11",
    icon: <i className="fa-solid fa-scale-balanced"></i>,
    innerOptions: [
      { name: "Immigration", IAB: "IAB11-1", icon: <i></i> },
      { name: "Legal Issues ", IAB: "IAB11-2", icon: <i></i> },
      { name: "U.S. Government Resources", IAB: "IAB11-3", icon: <i></i> },
      { name: "Politics", IAB: "IAB11-4", icon: <i></i> },
      { name: "Commentary", IAB: "IAB11-5", icon: <i></i> },
    ],
  },
  {
    name: "News",
    IAB: "IAB12",
    icon: <i className="fa-solid fa-newspaper"></i>,
    innerOptions: [
      { name: "International News", IAB: "IAB12-1", icon: <i></i> },
      { name: "National News", IAB: "IAB12-2", icon: <i></i> },
      { name: " Local News", IAB: "IAB12-3", icon: <i></i> },
    ],
  },
  {
    name: "Personal Finance",
    IAB: "IAB13",
    icon: <i></i>,
    innerOptions: [
      { name: "Beginning Investing", IAB: "IAB13-1", icon: <i></i> },
      {
        name: "Credit/Debt & Loans",
        IAB: "IAB13-2",
        icon: <i className="fa-solid fa-credit-card"></i>,
      },
      { name: "Financial News", IAB: "IAB13-3", icon: <i></i> },
      { name: "Financial Planning", IAB: "IAB13-4", icon: <i></i> },
      { name: "Hedge Fund", IAB: "IAB13-5", icon: <i></i> },
      { name: " Insurance ", IAB: "IAB13-6", icon: <i></i> },
      { name: " Investing ", IAB: "IAB13-7", icon: <i></i> },
      { name: "Mutual Funds", IAB: "IAB13-8", icon: <i></i> },
      { name: "Options", IAB: "IAB13-9", icon: <i></i> },
      { name: "Retirement Planning", IAB: "IAB13-10", icon: <i></i> },
      { name: " Stocks", IAB: "IAB13-11", icon: <i></i> },
      { name: "Tax Planning ", IAB: "IAB13-12", icon: <i></i> },
    ],
  },
  {
    name: " Society",
    IAB: "IAB14",
    icon: <i></i>,
    innerOptions: [
      { name: "Dating", IAB: "IAB14-1", icon: <i></i> },
      { name: "Divorce Support", IAB: "IAB14-2", icon: <i></i> },
      { name: "Gay Life", IAB: "IAB14-3", icon: <i></i> },
      {
        name: "Marriage",
        IAB: "IAB14-4",
        icon: <i></i>,
      },
      { name: "Senior Living", IAB: "IAB14-5", icon: <i></i> },
      { name: "Teens", IAB: "IAB14-6", icon: <i></i> },
      {
        name: " Weddings",
        IAB: "IAB14-7",
        icon: <i className="fa-solid fa-rings-wedding"></i>,
      },
      { name: "Ethnic Specific", IAB: "IAB14-8", icon: <i></i> },
    ],
  },
  {
    name: "Science",
    IAB: "IAB15",
    icon: <i className="fa-solid fa-flask"></i>,
    innerOptions: [
      { name: "Astrology", IAB: "IAB15-1", icon: <i></i> },
      { name: "Biology", IAB: "IAB15-2", icon: <i></i> },
      {
        name: "Chemistry",
        IAB: "IAB15-3",
        icon: <i className="fa-solid fa-flask-vial"></i>,
      },
      { name: "Geology", IAB: "IAB15-4", icon: <i></i> },
      { name: "Paranormal Phenomena", IAB: "IAB15-5", icon: <i></i> },
      { name: "Physics", IAB: "IAB15-6", icon: <i></i> },
      {
        name: "Space/Astronomy",
        IAB: "IAB15-7",
        icon: <i className="fa-brands fa-space-awesome"></i>,
      },
      { name: "Geography", IAB: "IAB15-8", icon: <i></i> },
      { name: "Botany", IAB: "IAB15-9", icon: <i></i> },
      {
        name: "Weather",
        IAB: "IAB15-10",
        icon: <i className="fa-solid fa-cloud"></i>,
      },
    ],
  },
  {
    name: "Pets",
    IAB: "IAB16",
    icon: <i className="fa-solid fa-paw"></i>,
    innerOptions: [
      {
        name: "Aquariums",
        IAB: "IAB16-1",
        icon: <i className="fa-solid fa-fish-fins"></i>,
      },
      {
        name: "Birds",
        IAB: "IAB16-2",
        icon: <i className="fa-solid fa-kiwi-bird"></i>,
      },
      {
        name: "Cats",
        IAB: "IAB16-3",
        icon: <i className="fa-solid fa-cat"></i>,
      },
      {
        name: "Dogs",
        IAB: "IAB16-4",
        icon: <i className="fa-solid fa-dog"></i>,
      },
      {
        name: "Large Animals",
        IAB: "IAB16-5",
        icon: <i className="fa-solid fa-hippo"></i>,
      },
      { name: "Reptiles", IAB: "IAB16-6", icon: <i></i> },
      {
        name: "Veterinary Medicine",
        IAB: "IAB16-7",
        icon: <i className="fa-solid fa-stethoscope"></i>,
      },
    ],
  },
  {
    name: "Sports ",
    IAB: "IAB17",
    icon: <i className="fa-solid fa-volleyball"></i>,
    innerOptions: [
      {
        name: "Auto Racing",
        IAB: "IAB17-1",
        icon: <i className="fa-solid fa-motorcycle"></i>,
      },
      {
        name: "Baseball",
        IAB: "IAB17-2",
        icon: <i className="fa-solid fa-baseball"></i>,
      },
      { name: "Bicycling", IAB: "IAB17-3", icon: <i></i> },
      {
        name: "Bodybuilding",
        IAB: "IAB17-4",
        icon: <i className="fa-solid fa-building"></i>,
      },
      { name: "Boxing", IAB: "IAB1-5", icon: <i></i> },
      { name: "Canoeing/Kayaking", IAB: "IAB17-6", icon: <i></i> },
      { name: "Cheerleading", IAB: "IAB17-7", icon: <i></i> },
      {
        name: "Climbing",
        IAB: "IAB17-8",
        icon: <i className="fa-solid fa-wrench"></i>,
      },
      { name: "Cricket", IAB: "IAB17-9", icon: <i></i> },
      {
        name: "Figure Skating",
        IAB: "IAB17-10",
        icon: <i className="fa-solid fa-person-skating"></i>,
      },
      {
        name: "Fly Fishing",
        IAB: "IAB17-11",
        icon: <i className="fa-solid fa-otter"></i>,
      },
      {
        name: "Football",
        IAB: "IAB1-12",
        icon: <i className="fa-solid fa-football"></i>,
      },
      {
        name: "Freshwater Fishing",
        IAB: "IAB17-13",
        icon: <i className="fa-solid fa-water"></i>,
      },
      {
        name: "Game & Fish",
        IAB: "IAB17-14",
        icon: <i className="fa-solid fa-fish"></i>,
      },
      {
        name: "Golf",
        IAB: "IAB17-15",
        icon: <i className="fa-solid fa-golf-ball-tee"></i>,
      },
      {
        name: "Horse Racing",
        IAB: "IAB17-16",
        icon: <i className="fa-solid fa-horse"></i>,
      },
      {
        name: "Horses",
        IAB: "IAB17-17",
        icon: <i className="fa-solid fa-horse-head"></i>,
      },
      {
        name: "Hunting/Shooting",
        IAB: "IAB17-18",
        icon: <i className="fa-solid fa-meteor"></i>,
      },
      {
        name: "Inline Skating",
        IAB: "IAB1-19",
        icon: <i className="fa-solid fa-person-skating"></i>,
      },
      { name: "Martial Arts", IAB: "IAB17-20", icon: <i></i> },
      {
        name: "Mountain Biking",
        IAB: "IAB17-21",
        icon: <i className="fa-solid fa-mountain"></i>,
      },
      { name: "NASCAR Racing", IAB: "IAB17-22", icon: <i></i> },
      {
        name: "Olympics",
        IAB: "IAB17-23",
        icon: <i className="fa-solid fa-person-snowboarding"></i>,
      },
      { name: "Paintball", IAB: "IAB17-24", icon: <i></i> },
      {
        name: "Power & Motorcycles",
        IAB: "IAB17-25",
        icon: <i className="fa-solid fa-power-off"></i>,
      },
      {
        name: "Pro Basketball",
        IAB: "IAB1-26",
        icon: <i className="fa-solid fa-basketball"></i>,
      },
      {
        name: "Pro Ice Hockey",
        IAB: "IAB17-27",
        icon: <i className="fa-solid fa-hockey-puck"></i>,
      },
      { name: "Rodeo", IAB: "IAB17-28", icon: <i></i> },
      { name: "Rugby", IAB: "IAB17-29", icon: <i></i> },
      {
        name: "Running/Jogging",
        IAB: "IAB17-30",
        icon: <i className="fa-solid fa-person-running"></i>,
      },
      {
        name: "Sailing",
        IAB: "IAB17-31",
        icon: <i className="fa-solid fa-sailboat"></i>,
      },
      { name: "Saltwater Fishing", IAB: "IAB17-32", icon: <i></i> },
      { name: "Scuba Diving", IAB: "IAB1-33", icon: <i></i> },
      {
        name: "Skateboarding",
        IAB: "IAB17-34",
        icon: <i className="fa-solid fa-person-skating"></i>,
      },
      {
        name: "Skiing",
        IAB: "IAB17-35",
        icon: <i className="fa-solid fa-person-skiing"></i>,
      },
      {
        name: "Snowboarding",
        IAB: "IAB17-36",
        icon: <i className="fa-solid fa-person-snowboarding"></i>,
      },
      { name: "Surfing/Bodyboarding", IAB: "IAB17-37", icon: <i></i> },
      {
        name: "Swimming",
        IAB: "IAB17-38",
        icon: <i className="fa-solid fa-person-swimming"></i>,
      },
      {
        name: "Table Tennis/Ping-Pong",
        IAB: "IAB17-39",
        icon: <i className="fa-solid fa-table-tennis-paddle-ball"></i>,
      },
      { name: "Tennis", IAB: "IAB1-40", icon: <i></i> },
      {
        name: "Volleyball",
        IAB: "IAB17-41",
        icon: <i className="fa-solid fa-volleyball"></i>,
      },
      {
        name: "Walking",
        IAB: "IAB17-42",
        icon: <i className="fa-solid fa-person-walking"></i>,
      },
      { name: "Waterski/Wakeboard", IAB: "IAB17-43", icon: <i></i> },
      {
        name: "World Soccer",
        IAB: "IAB17-44",
        icon: <i className="fa-solid fa-globe"></i>,
      },
    ],
  },

  {
    name: "Style & Fashion",
    IAB: "IAB18",
    icon: <i className="fa-solid fa-shirt"></i>,
    innerOptions: [
      { name: "Beauty", IAB: "IAB18-1", icon: <i></i> },
      {
        name: "Body Art",
        IAB: "IAB18-2",
        icon: <i className="fa-solid fa-child"></i>,
      },
      {
        name: "Fashion",
        IAB: "IAB18-3",
        icon: <i className="fa-solid fa-vest-patches"></i>,
      },
      { name: "Jewelry", IAB: "IAB18-4", icon: <i></i> },
      { name: "Clothing", IAB: "IAB18-5", icon: <i></i> },
      {
        name: "Accessories",
        IAB: "IAB18-6",
        icon: <i className="fa-solid fa-keyboard"></i>,
      },
    ],
  },

  {
    name: "Technology & Computing",
    IAB: "IAB19",
    icon: <i></i>,
    innerOptions: [
      { name: "3-D Graphics", IAB: "IAB19-1", icon: <i></i> },
      { name: "Animation", IAB: "IAB19-2", icon: <i></i> },
      {
        name: "Antivirus Software",
        IAB: "IAB19-3",
        icon: <i className="fa-solid fa-file-shield"></i>,
      },
      { name: "C/C++", IAB: "IAB19-4", icon: <i></i> },
      {
        name: "Cameras & Camcorders",
        IAB: "IAB19-5",
        icon: <i className="fa-solid fa-camera"></i>,
      },
      {
        name: "Cell Phones",
        IAB: "IAB19-6",
        icon: <i className="fa-solid fa-phone"></i>,
      },
      {
        name: "Computer Certification",
        IAB: "IAB19-7",
        icon: <i className="fa-solid fa-computer"></i>,
      },
      {
        name: "Computer Networking",
        IAB: "IAB19-8",
        icon: <i className="fa-solid fa-network-wired"></i>,
      },
      {
        name: "Computer Peripherals",
        IAB: "IAB19-9",
        icon: <i className="fa-solid fa-computer-mouse"></i>,
      },
      { name: "Computer Reviews", IAB: "IAB19-10", icon: <i></i> },
      {
        name: "Data Centers",
        IAB: "IAB19-11",
        icon: <i></i>,
      },
      {
        name: "Databases",
        IAB: "IAB19-12",
        icon: <i className="fa-solid fa-database"></i>,
      },
      {
        name: "Desktop Publishing",
        IAB: "IAB19-13",
        icon: <i className="fa-solid fa-desktop"></i>,
      },
      {
        name: "Desktop Video",
        IAB: "IAB19-14",
        icon: <i className="fa-solid fa-video"></i>,
      },
      {
        name: "Email",
        IAB: "IAB19-15",
        icon: <i className="fa-solid fa-envelope"></i>,
      },
      { name: "Graphics Software", IAB: "IAB19-16", icon: <i></i> },
      {
        name: "Home Video/DVD",
        IAB: "IAB19-17",
        icon: <i className="fa-solid fa-house"></i>,
      },
      {
        name: "Internet Technology",
        IAB: "IAB19-18",
        icon: <i className="fa-solid fa-wifi"></i>,
      },
      { name: "Java", IAB: "IAB19-19", icon: <i></i> },
      { name: "JavaScript", IAB: "IAB19-20", icon: <i></i> },
      { name: "Mac Support", IAB: "IAB19-21", icon: <i></i> },
      { name: "MP3/MIDI", IAB: "IAB19-22", icon: <i></i> },
      { name: "Net Conferencing", IAB: "IAB19-23", icon: <></> },
      { name: "Net for Beginners", IAB: "IAB19-24", icon: <i></i> },
      { name: "Network Security", IAB: "IAB19-25", icon: <i></i> },
      { name: "Palmtops/PDAs", IAB: "IAB19-26", icon: <i></i> },
      { name: "PC Support", IAB: "IAB19-27", icon: <i></i> },
      { name: "Portable", IAB: "IAB19-28", icon: <i></i> },
      { name: "Entertainment", IAB: "IAB19-29", icon: <i></i> },
      { name: "Shareware/Freeware", IAB: "IAB19-30", icon: <i></i> },
      {
        name: "Unix",
        IAB: "IAB19-31",
        icon: <i className="fa-solid fa-universal-access"></i>,
      },
      { name: "Visual Basic", IAB: "IAB19-32", icon: <i></i> },
      { name: "Web Clip Art", IAB: "IAB19-33", icon: <i></i> },
      { name: "Web Design/HTML", IAB: "IAB19-34", icon: <i></i> },
      { name: "Web Search", IAB: "IAB19-35", icon: <i></i> },
      { name: "Windows", IAB: "IAB19-36", icon: <i></i> },
    ],
  },

  {
    name: "Travel",
    IAB: "IAB20",
    icon: <i></i>,
    innerOptions: [
      { name: "Adventure Travel", IAB: "IAB20-1", icon: <i></i> },
      { name: "Africa", IAB: "IAB20-2", icon: <i></i> },
      { name: "Air Travel", IAB: "IAB20-3", icon: <></> },
      { name: "Australia & New Zealand", IAB: "IAB20-4", icon: <></> },
      {
        name: "Bed & Breakfasts",
        IAB: "IAB20-5",
        icon: <i className="fa-solid fa-bed"></i>,
      },
      { name: "Budget Travel", IAB: "IAB20-6", icon: <i></i> },
      {
        name: "Business Travel",
        IAB: "IAB20-7",
        icon: <i className="fa-solid fa-bus"></i>,
      },
      { name: "By US Locale", IAB: "IAB20-8", icon: <i></i> },
      { name: "Camping", IAB: "IAB20-9", icon: <i></i> },
      { name: "Canada", IAB: "IAB20-10", icon: <i></i> },
      { name: "Caribbean", IAB: "IAB20-11", icon: <i></i> },
      { name: "Cruises", IAB: "IAB20-12", icon: <i></i> },
      { name: "Eastern Europe", IAB: "IAB20-13", icon: <i></i> },
      { name: "Europe", IAB: "IAB20-14", icon: <i></i> },
      { name: "France", IAB: "IAB20-15", icon: <i></i> },
      { name: "Greece", IAB: "IAB20-16", icon: <i></i> },
      { name: "Honeymoons/Getaways", IAB: "IAB20-17", icon: <i></i> },
      {
        name: "Hotels",
        IAB: "IAB20-18",
        icon: <i className="fa-solid fa-hotel"></i>,
      },
      { name: "Italy", IAB: "IAB20-19", icon: <i></i> },
      { name: "Japan", IAB: "IAB20-20", icon: <i></i> },
      { name: "Mexico & Central America", IAB: "IAB20-21", icon: <></> },
      { name: "National Parks", IAB: "IAB20-22", icon: <i></i> },
      { name: "South America", IAB: "IAB20-23", icon: <i></i> },
      {
        name: "Spas",
        IAB: "IAB20-24",
        icon: <i className="fa-solid fa-spa"></i>,
      },
      { name: "Theme Parks", IAB: "IAB20-25", icon: <i></i> },
      { name: "Traveling with Kids", IAB: "IAB20-26", icon: <i></i> },
      {
        name: "United Kingdom",
        IAB: "IAB20-27",
        icon: <i className="fa-solid fa-flag-usa"></i>,
      },
    ],
  },

  {
    name: "Real Estate",
    IAB: "IAB21",
    icon: <i></i>,
    innerOptions: [
      {
        name: "Apartments",
        IAB: "IAB21-1",
        icon: <i className="fa-solid fa-building"></i>,
      },
      { name: "Architects", IAB: "IAB21-2", icon: <i></i> },
      { name: "Buying/Selling Homes", IAB: "IAB21-3", icon: <i></i> },
    ],
  },

  {
    name: "Shopping",
    IAB: "IAB22",
    icon: <i className="fa-solid fa-cart-shopping"></i>,
    innerOptions: [
      { name: "Contests & Freebies", IAB: "IAB22-1", icon: <i></i> },
      {
        name: "Couponing",
        IAB: "IAB22-2",
        icon: <i className="fa-solid fa-ticket"></i>,
      },
      {
        name: "Comparison",
        IAB: "IAB22-3",
        icon: <i className="fa-solid fa-code-compare"></i>,
      },
      { name: "Engines", IAB: "IAB22-4", icon: <i></i> },
    ],
  },
  {
    name: "Religion & Spirituality",
    IAB: "IAB23",
    icon: <i></i>,
    innerOptions: [
      { name: "Alternative Religions", IAB: "IAB23-1", icon: <i></i> },
      { name: "Atheism/Agnosticism", IAB: "IAB23-2", icon: <i></i> },
      {
        name: "Buddhism",
        IAB: "IAB23-3",
        icon: <i className="fa-solid fa-vihara"></i>,
      },
      {
        name: "Catholicism",
        IAB: "IAB23-4",
        icon: <i className="fa-solid fa-cross"></i>,
      },
      {
        name: "Christianity",
        IAB: "IAB23-5",
        icon: <i className="fa-solid fa-cross"></i>,
      },
      {
        name: "Hinduism",
        IAB: "IAB23-6",
        icon: <i className="fa-solid fa-om"></i>,
      },
      {
        name: "Islam",
        IAB: "IAB23-7",
        icon: <i className="fa-solid fa-star-and-crescent"></i>,
      },
      {
        name: "Judaism",
        IAB: "IAB23-8",
        icon: <i className="fa-solid fa-synagogue"></i>,
      },
      { name: "Latter-Day Saints", IAB: "IAB23-9", icon: <i></i> },
      { name: "Pagan/Wiccan", IAB: "IAB23-10", icon: <i></i> },
    ],
  },
  {
    name: "Uncategorized",
    IAB: "IAB24",
    icon: <i></i>,
    innerOptions: [],
  },
  {
    name: "Non-Standard Content",
    IAB: "IAB25",
    icon: <i></i>,
    innerOptions: [
      { name: "Unmoderated UGC", IAB: "IAB25-1", icon: <i></i> },
      {
        name: "Extreme Graphic/Explicit Violence",
        IAB: "IAB25-2",
        icon: <i className="fa-solid fa-chart-simple"></i>,
      },
      { name: "Pornography", IAB: "IAB25-3", icon: <i></i> },
      { name: "Profane Content", IAB: "IAB25-4", icon: <i></i> },
      { name: "Hate Content", IAB: "IAB25-5", icon: <i></i> },
      { name: "Under Construction", IAB: "IAB25-6", icon: <i></i> },
      { name: "Incentivized", IAB: "IAB25-7", icon: <i></i> },
    ],
  },

  {
    name: "Illegal Content",
    IAB: "IAB26",
    icon: <i></i>,
    innerOptions: [
      { name: "Illegal Content", IAB: "IAB26-1", icon: <i></i> },
      { name: "Warez", IAB: "IAB26-2", icon: <i></i> },
      { name: "Spyware/Malware", IAB: "IAB26-3", icon: <i></i> },
      { name: "Copyright Infringement", IAB: "IAB26-4", icon: <i></i> },
    ],
  },
];

export const IABOptionsLatest: IABOptionsType = [
  {
    name: "Arts & Entertainment",
    IAB: "IAB1",
    icon: <i className="fa-solid fa-palette"></i>,
    innerOptions: [
      {
        name: "Books & Literature",
        IAB: "IAB1-1",
        icon: <i className="fa-solid fa-book"></i>,
      },
      {
        name: "Celebrity Fan/Gossip",
        IAB: "IAB1-2",
        icon: <i className="fa-solid fa-people-arrows"></i>,
      },
      {
        name: "Fine Art",
        IAB: "IAB1-3",
        icon: <i className="fa-solid fa-paintbrush"></i>,
      },
      {
        name: "Humor",
        IAB: "IAB1-4",
        icon: <i className="fa-solid fa-hammer"></i>,
      },
      {
        name: "Movies",
        IAB: "IAB1-5",
        icon: <i className="fa-solid fa-clapperboard"></i>,
      },
      {
        name: "Music",
        IAB: "IAB1-6",
        icon: <i className="fa-solid fa-music"></i>,
      },
      {
        name: "Television",
        IAB: "IAB1-7",
        icon: <i className="fa-solid fa-tv"></i>,
      },
    ],
  },
  {
    name: "Automotive",
    IAB: "IAB2",
    icon: <i className="fa-solid fa-car"></i>,
    innerOptions: [
      {
        name: "Auto Parts",
        IAB: "IAB2-1",
        icon: <i className="fa-solid fa-spray-can-sparkles"></i>,
      },
      {
        name: "Auto Repair",
        IAB: "IAB2-2",
        icon: <i className="fa-solid fa-screwdriver-wrench"></i>,
      },
      {
        name: "Buying/Selling Cars",
        IAB: "IAB2-3",
        icon: <i className="fa-solid fa-cart-shopping"></i>,
      },
      {
        name: "Car Culture",
        IAB: "IAB2-4",
        icon: <i className="fa-solid fa-car-on"></i>,
      },
      {
        name: "Certified Pre-Owned",
        IAB: "IAB2-5",
        icon: <i className="fa-solid fa-money-bill"></i>,
      },
      {
        name: "Convertible",
        IAB: "IAB2-6",
        icon: <i className="fa-solid fa-gears"></i>,
      },
      {
        name: "Coupe",
        IAB: "IAB2-7",
        icon: <i className="fa-solid fa-car-rear"></i>,
      },
      {
        name: "Crossover",
        IAB: "IAB2-8",
        icon: <i className="fa-solid fa-shuffle"></i>,
      },
      {
        name: "Diesel",
        IAB: "IAB2-9",
        icon: <i className="fa-solid fa-gas-pump"></i>,
      },
      {
        name: "Electric Vehicle",
        IAB: "IAB2-10",
        icon: <i className="fa-solid fa-plug-circle-bolt"></i>,
      },
      {
        name: "Hatchback",
        IAB: "IAB2-11",
        icon: <i className="fa-solid fa-car-side"></i>,
      },
      {
        name: "Hybrid",
        IAB: "IAB2-12",
        icon: <i className="fa-solid fa-car-on"></i>,
      },
      {
        name: "Luxury",
        IAB: "IAB2-13",
        icon: <i className="fa-solid fa-sack-dollar"></i>,
      },
      {
        name: "MiniVan",
        IAB: "IAB2-14",
        icon: <i className="fa-solid fa-van-shuttle"></i>,
      },
      {
        name: "Mororcycles",
        IAB: "IAB2-15",
        icon: <i className="fa-solid fa-motorcycle"></i>,
      },
      {
        name: "Off-Road Vehicles",
        IAB: "IAB2-16",
        icon: <i className="fa-solid fa-truck-monster"></i>,
      },
      {
        name: "Performance Vehicles	",
        IAB: "IAB2-17",
        icon: <i className="fa-solid fa-car"></i>,
      },
      {
        name: "Pickup",
        IAB: "IAB2-18",
        icon: <i className="fa-solid fa-truck-pickup"></i>,
      },
      {
        name: "Road-Side Assistance",
        IAB: "IAB2-19",
        icon: <i className="fa-solid fa-road-circle-check"></i>,
      },
      {
        name: "Sedan",
        IAB: "IAB2-20",
        icon: <i className="fa-solid fa-car-side"></i>,
      },
      {
        name: "Trucks & Accessories",
        IAB: "IAB2-21",
        icon: <i className="fa-solid fa-truck-fast"></i>,
      },
      {
        name: "Vintage Cars",
        IAB: "IAB2-22",
        icon: <i className="fa-solid fa-car-rear"></i>,
      },
      {
        name: "Wagon",
        IAB: "IAB2-23",
        icon: <i className="fa-solid fa-trailer"></i>,
      },
    ],
  },
  {
    name: "Business",
    IAB: "IAB3",
    icon: <i className="fa-solid fa-business-time"></i>,
    innerOptions: [
      {
        name: "Advertising",
        IAB: "IAB3-1",
        icon: <i className="fa-solid fa-film"></i>,
      },
      {
        name: "Agriculture",
        IAB: "IAB3-2",
        icon: <i className="fa-solid fa-wheat-awn"></i>,
      },
      {
        name: "Biotech/Biomedical",
        IAB: "IAB3-3",
        icon: <i className="fa-solid fa-biohazard"></i>,
      },
      {
        name: "Business Software",
        IAB: "IAB3-4",
        icon: <i className="fa-solid fa-business-time"></i>,
      },
      {
        name: "Construction",
        IAB: "IAB3-5",
        icon: <i className="fa-solid fa-person-digging"></i>,
      },
      {
        name: "Forestry",
        IAB: "IAB3-6",
        icon: <i className="fa-solid fa-tree"></i>,
      },
      {
        name: "Government",
        IAB: "IAB3-7",
        icon: <i className="fa-solid fa-landmark-flag"></i>,
      },
      {
        name: "Green Solutions",
        IAB: "IAB3-8",
        icon: <i className="fa-solid fa-handshake"></i>,
      },
      {
        name: "Human Resources",
        IAB: "IAB3-9",
        icon: <i className="fa-solid fa-users-gear"></i>,
      },
      {
        name: "Logistics",
        IAB: "IAB3-10",
        icon: <i className="fa-solid fa-truck-fast"></i>,
      },
      {
        name: "Marketing",
        IAB: "IAB3-11",
        icon: <i className="fa-solid fa-bullhorn"></i>,
      },
      {
        name: "Metals",
        IAB: "IAB3-12",
        icon: <i className="fa-solid fa-magnet"></i>,
      },
    ],
  },
  {
    name: "Careers",
    IAB: "IAB4",
    icon: <i className="fa-solid fa-envelope"></i>,
    innerOptions: [
      {
        name: "Career Planning",
        IAB: "IAB4-1",
        icon: <i className="fa-solid fa-layer-group"></i>,
      },
      {
        name: "College",
        IAB: "IAB4-2",
        icon: <i className="fa-solid fa-building-columns"></i>,
      },
      {
        name: "Financial Aid",
        IAB: "IAB4-3",
        icon: <i className="fa-solid fa-coins"></i>,
      },
      {
        name: "Job Fairs",
        IAB: "IAB4-4",
        icon: <i className="fa-solid fa-cart-flatbed-suitcase"></i>,
      },
      {
        name: "Job Search",
        IAB: "IAB4-5",
        icon: <i className="fa-solid fa-magnifying-glass-dollar"></i>,
      },
      {
        name: "Resume Writing/Advice",
        IAB: "IAB4-6",
        icon: <i className="fa-solid fa-pen-to-square"></i>,
      },
      {
        name: "Nursing",
        IAB: "IAB4-7",
        icon: <i className="fa-solid fa-user-nurse"></i>,
      },
      {
        name: "Scholarships",
        IAB: "IAB4-8",
        icon: <i className="fa-solid fa-hand-holding-dollar"></i>,
      },
      {
        name: "Telecommuting",
        IAB: "IAB4-9",
        icon: <i className="fa-solid fa-phone"></i>,
      },
      {
        name: "U.S. Military",
        IAB: "IAB4-10",
        icon: <i className="fa-solid fa-person-military-rifle"></i>,
      },
      {
        name: "Career Advice",
        IAB: "IAB4-11",
        icon: <i className="fa-solid fa-ticket"></i>,
      },
    ],
  },
  {
    name: "Education",
    IAB: "IAB5",
    icon: <i className="fa-solid fa-book-open-reader"></i>,
    innerOptions: [
      {
        name: "7-12 Education",
        IAB: "IAB5-1",
        icon: <i className="fa-solid fa-school"></i>,
      },
      {
        name: "Adult Education",
        IAB: "IAB5-2",
        icon: <i className="fa-solid fa-building-columns"></i>,
      },
      {
        name: "Art History",
        IAB: "IAB5-3",
        icon: <i className="fa-solid fa-timeline"></i>,
      },
      {
        name: "College Administration",
        IAB: "IAB5-4",
        icon: <i className="fa-solid fa-building-circle-check"></i>,
      },
      {
        name: "College Life",
        IAB: "IAB5-5",
        icon: <i className="fa-solid fa-hands-holding"></i>,
      },
      {
        name: "Distance Learning",
        IAB: "IAB5-6",
        icon: <i className="fa-solid fa-chalkboard-user"></i>,
      },
      {
        name: "English as a 2nd Language",
        IAB: "IAB5-7",
        icon: <i className="fa-solid fa-language"></i>,
      },
      {
        name: "Language Learning",
        IAB: "IAB5-8",
        icon: <i className="fa-solid fa-person-chalkboard"></i>,
      },
      {
        name: "Graduate School",
        IAB: "IAB5-9",
        icon: <i className="fa-solid fa-graduation-cap"></i>,
      },
      {
        name: "Homeschooling",
        IAB: "IAB5-10",
        icon: <i className="fa-solid fa-house-laptop"></i>,
      },
      {
        name: "Homework/Study Tips",
        IAB: "IAB5-11",
        icon: <i className="fa-solid fa-lightbulb"></i>,
      },
      {
        name: "K-6 Educators",
        IAB: "IAB5-12",
        icon: <i className="fa-solid fa-chalkboard-user"></i>,
      },
      {
        name: "Private School",
        IAB: "IAB5-13",
        icon: <i className="fa-solid fa-school-lock"></i>,
      },
      {
        name: "Special Education",
        IAB: "IAB5-14",
        icon: <i className="fa-solid fa-book-open"></i>,
      },
      {
        name: "Studying Business",
        IAB: "IAB5-15",
        icon: <i className="fa-solid fa-business-time"></i>,
      },
    ],
  },
  {
    name: "Family & Parenting",
    IAB: "IAB6",
    icon: <i className="fa-solid fa-people-roof"></i>,
    innerOptions: [
      {
        name: "Adoption",
        IAB: "IAB6-1",
        icon: <i className="fa-solid fa-hand-holding-droplet"></i>,
      },
      {
        name: "Babies & Toddlers",
        IAB: "IAB6-2",
        icon: <i className="fa-solid fa-baby"></i>,
      },
      {
        name: "Daycare/Pre School",
        IAB: "IAB6-3",
        icon: <i className="fa-solid fa-school"></i>,
      },
      {
        name: "Family Internet",
        IAB: "IAB6-4",
        icon: <i className="fa-solid fa-house-signal"></i>,
      },
      {
        name: "Parenting - K-6 Kids",
        IAB: "IAB6-5",
        icon: <i className="fa-solid fa-hands-holding-child"></i>,
      },
      {
        name: "Parenting teens",
        IAB: "IAB6-6",
        icon: <i className="fa-solid fa-hands-asl-interpreting"></i>,
      },
      {
        name: "Pregnancy",
        IAB: "IAB6-7",
        icon: <i className="fa-solid fa-person-pregnant"></i>,
      },
      {
        name: "Special Needs Kids",
        IAB: "IAB6-8",
        icon: <i className="fa-solid fa-child-reaching"></i>,
      },
      {
        name: "Eldercare",
        IAB: "IAB6-9",
        icon: <i className="fa-solid fa-person-shelter"></i>,
      },
    ],
  },
  {
    name: "Health & Fitness",
    IAB: "IAB7",
    icon: <i className="fa-solid fa-notes-medical"></i>,
    innerOptions: [
      {
        name: "Exercise",
        IAB: "IAB7-1",
        icon: <i className="fa-solid fa-dumbbell"></i>,
      },
      {
        name: "A.D.D.",
        IAB: "IAB7-2",
        icon: <i className="fa-solid fa-hands"></i>,
      },
      {
        name: "AIDS/HIV",
        IAB: "IAB7-3",
        icon: <i className="fa-solid fa-ribbon"></i>,
      },
      {
        name: "Allergies",
        IAB: "IAB7-4",
        icon: <i className="fa-solid fa-hand-dots"></i>,
      },
      {
        name: "Alternative Medicine",
        IAB: "IAB7-5",
        icon: <i className="fa-solid fa-pills"></i>,
      },
      {
        name: "Arthritis",
        IAB: "IAB7-6",
        icon: <i className="fa-solid fa-hand-back-fist"></i>,
      },
      {
        name: "Asthma",
        IAB: "IAB7-7",
        icon: <i className="fa-solid fa-lungs"></i>,
      },
      {
        name: "Autism/PDD",
        IAB: "IAB7-8",
        icon: <i className="fa-solid fa-virus-slash"></i>,
      },
      {
        name: "Bipolar Disorder",
        IAB: "IAB7-9",
        icon: <i className="fa-solid fa-disease"></i>,
      },
      {
        name: "Brain Tumor",
        IAB: "IAB7-10",
        icon: <i className="fa-solid fa-brain"></i>,
      },
      {
        name: "Cancer",
        IAB: "IAB7-11",
        icon: <i className="fa-solid fa-lungs-virus"></i>,
      },
      {
        name: "Cholesterol",
        IAB: "IAB7-12",
        icon: <i className="fa-solid fa-heart-crack"></i>,
      },
      {
        name: "Chronic Fatigue Syndrome",
        IAB: "IAB7-13",
        icon: <i className="fa-solid fa-viruses"></i>,
      },
      {
        name: "Chronic Pain",
        IAB: "IAB7-14",
        icon: <i className="fa-solid fa-vial-virus"></i>,
      },
      {
        name: "Cold & Flu",
        IAB: "IAB7-15",
        icon: <i className="fa-solid fa-square-virus"></i>,
      },
      {
        name: "Deafness",
        IAB: "IAB7-16",
        icon: <i className="fa-solid fa-ear-deaf"></i>,
      },
      {
        name: "Dental Care",
        IAB: "IAB7-17",
        icon: <i className="fa-solid fa-tooth"></i>,
      },
      {
        name: "Depression",
        IAB: "IAB7-18",
        icon: <i className="fa-solid fa-head-side-virus"></i>,
      },
      {
        name: "Dermatology",
        IAB: "IAB7-19",
        icon: <i className="fa-solid fa-hand-dots"></i>,
      },
      {
        name: "Diabetes",
        IAB: "IAB7-20",
        icon: <i className="fa-solid fa-droplet"></i>,
      },
      {
        name: "Epilepsy",
        IAB: "IAB7-21",
        icon: <i className="fa-solid fa-brain"></i>,
      },
      {
        name: "GERD/Acid Reflux",
        IAB: "IAB7-22",
        icon: <i className="fa-solid fa-head-side-cough"></i>,
      },
      {
        name: "Headaches/Migraines",
        IAB: "IAB7-23",
        icon: <i className="fa-solid fa-head-side-virus"></i>,
      },
      {
        name: "Heart Disease",
        IAB: "IAB7-24",
        icon: <i className="fa-solid fa-heart-pulse"></i>,
      },
      {
        name: "Herbs for Health",
        IAB: "IAB7-25",
        icon: <i className="fa-solid fa-feather-pointed"></i>,
      },
      {
        name: "Holistic Healing",
        IAB: "IAB7-26",
        icon: <i className="fa-solid fa-person-dots-from-line"></i>,
      },
      {
        name: "IBS/Crohn’s Disease",
        IAB: "IAB7-27",
        icon: <i className="fa-solid fa-bacteria"></i>,
      },
      {
        name: "Incest/Abuse Support",
        IAB: "IAB7-28",
        icon: <i className="fa-solid fa-briefcase-medical"></i>,
      },
      {
        name: "Incontinence",
        IAB: "IAB7-29",
        icon: <i className="fa-solid fa-vials"></i>,
      },
      {
        name: "Infertility",
        IAB: "IAB7-30",
        icon: <i className="fa-solid fa-staff-snake"></i>,
      },
      {
        name: "Men’s Health",
        IAB: "IAB7-31",
        icon: <i className="fa-solid fa-comment-medical"></i>,
      },
      {
        name: "Nutrition",
        IAB: "IAB7-32",
        icon: <i className="fa-solid fa-cloud-meatball"></i>,
      },
      {
        name: "Orthopedics",
        IAB: "IAB7-33",
        icon: <i className="fa-solid fa-bone"></i>,
      },
      {
        name: "Panic/Anxiety Disorders",
        IAB: "IAB7-34",
        icon: <i className="fa-solid fa-prescription-bottle-medical"></i>,
      },
      {
        name: "Pediatrics",
        IAB: "IAB7-35",
        icon: <i className="fa-solid fa-hand-holding-medical"></i>,
      },
      {
        name: "Physical Therapy",
        IAB: "IAB7-36",
        icon: <i className="fa-solid fa-wheelchair"></i>,
      },
      {
        name: "Psychology/Psychiatry",
        IAB: "IAB7-37",
        icon: <i className="fa-solid fa-book-skull"></i>,
      },
      {
        name: "Senior Health",
        IAB: "IAB7-38",
        icon: <i className="fa-solid fa-user-doctor"></i>,
      },
      {
        name: "Sexuality",
        IAB: "IAB7-39",
        icon: <i className="fa-solid fa-venus-mars"></i>,
      },
      {
        name: "Sleep Disorders",
        IAB: "IAB7-40",
        icon: <i className="fa-solid fa-bed"></i>,
      },
      {
        name: " Smoking Cessation",
        IAB: "IAB7-41",
        icon: <i className="fa-solid fa-smoking"></i>,
      },
      {
        name: "Substance Abuse",
        IAB: "IAB7-42",
        icon: <i className="fa-solid fa-person-harassing"></i>,
      },
      {
        name: "Weight Loss",
        IAB: "IAB7-43",
        icon: <i className="fa-solid fa-weight-scale"></i>,
      },
      {
        name: "Women’s Health",
        IAB: "IAB7-44",
        icon: <i className="fa-solid fa-person-dress"></i>,
      },
    ],
  },
  {
    name: "Food & Drink",
    IAB: "IAB8",
    icon: <i className="fa-solid fa-burger"></i>,
    innerOptions: [
      {
        name: "American Cuisine",
        IAB: "IAB8-1",
        icon: <i className="fa-solid fa-hotdog"></i>,
      },
      {
        name: " Barbecues & Grilling",
        IAB: "IAB8-2",
        icon: <i className="fa-solid fa-ferry"></i>,
      },
      {
        name: "Cajun/Creole",
        IAB: "IAB8-3",
        icon: <i className="fa-solid fa-shrimp"></i>,
      },
      {
        name: "Chinese Cuisine",
        IAB: "IAB8-4",
        icon: <i className="fa-solid fa-bowl-food"></i>,
      },
      {
        name: "Cocktails/Beer",
        IAB: "IAB8-5",
        icon: <i className="fa-solid fa-martini-glass-citrus"></i>,
      },
      {
        name: "Coffee/Tea",
        IAB: "IAB8-6",
        icon: <i className="fa-solid fa-mug-hot"></i>,
      },
      {
        name: "Cuisine-Specific",
        IAB: "IAB8-7",
        icon: <i className="fa-solid fa-pizza-slice"></i>,
      },
      {
        name: "Desserts & Baking",
        IAB: "IAB8-8",
        icon: <i className="fa-solid fa-ice-cream"></i>,
      },
      {
        name: "Dining Out",
        IAB: "IAB8-9",
        icon: <i className="fa-solid fa-utensils"></i>,
      },
      {
        name: "Food Allergies",
        IAB: "IAB8-10",
        icon: <i className="fa-solid fa-person-dots-from-line"></i>,
      },
      {
        name: " French Cuisine",
        IAB: "IAB8-11",
        icon: <i className="fa-solid fa-drumstick-bite"></i>,
      },
      {
        name: "Health/Lowfat Cooking",
        IAB: "IAB8-12",
        icon: <i className="fa-solid fa-fire-burner"></i>,
      },
      {
        name: " Italian Cuisine",
        IAB: "IAB8-13",
        icon: <i className="fa-solid fa-fish-fins"></i>,
      },
      {
        name: " Japanese Cuisine",
        IAB: "IAB8-14",
        icon: <i className="fa-solid fa-bowl-rice"></i>,
      },
      {
        name: "Mexican Cuisine",
        IAB: "IAB8-15",
        icon: <i className="fa-solid fa-cloud-meatball"></i>,
      },
      {
        name: "Vegan",
        IAB: "IAB8-16",
        icon: <i className="fa-solid fa-leaf"></i>,
      },
      {
        name: "Vegetarian",
        IAB: "IAB8-17",
        icon: <i className="fa-solid fa-carrot"></i>,
      },
      {
        name: "Wine",
        IAB: "IAB8-18",
        icon: <i className="fa-solid fa-wine-bottle"></i>,
      },
    ],
  },
  {
    name: "Hobbies & Interests",
    IAB: "IAB9",
    icon: <i className="fa-solid fa-fire-flame-curved"></i>,
    innerOptions: [
      {
        name: "Art/Technology",
        IAB: "IAB9-1",
        icon: <i className="fa-solid fa-microchip"></i>,
      },
      {
        name: "Arts & Crafts",
        IAB: "IAB9-2",
        icon: <i className="fa-sharp fa-solid fa-pencil"></i>,
      },
      {
        name: "Beadwork",
        IAB: "IAB9-3",
        icon: <i className="fa-solid fa-house-user"></i>,
      },
      {
        name: "Birdwatching",
        IAB: "IAB9-4",
        icon: <i className="fa-solid fa-dove"></i>,
      },
      {
        name: "Board Games/Puzzles",
        IAB: "IAB9-5",
        icon: <i className="fa-solid fa-puzzle-piece"></i>,
      },
      {
        name: "Candle & Soap Making",
        IAB: "IAB9-6",
        icon: <i className="fa-solid fa-hanukiah"></i>,
      },
      {
        name: "Card Games",
        IAB: "IAB9-7",
        icon: <i className="fa-solid fa-dice-d20"></i>,
      },
      {
        name: "Chess",
        IAB: "IAB9-8",
        icon: <i className="fa-sharp fa-solid fa-chess-board"></i>,
      },
      {
        name: "Cigars",
        IAB: "IAB9-9",
        icon: <i className="fa-sharp fa-solid fa-smoking"></i>,
      },
      {
        name: "Collecting",
        IAB: "IAB9-10",
        icon: <i className="fa-solid fa-circle-nodes"></i>,
      },
      {
        name: "Comic Books",
        IAB: "IAB9-11",
        icon: <i className="fa-solid fa-book"></i>,
      },
      {
        name: "Drawing/Sketching",
        IAB: "IAB9-12",
        icon: <i className="fa-solid fa-person-drowning"></i>,
      },
      {
        name: "Freelance Writing",
        IAB: "IAB9-13",
        icon: <i className="fa-solid fa-pencil"></i>,
      },
      {
        name: "Genealogy",
        IAB: "IAB9-14",
        icon: <i className="fa-solid fa-dna"></i>,
      },
      {
        name: "Getting Published",
        IAB: "IAB9-15",
        icon: <i className="fa-solid fa-upload"></i>,
      },
      {
        name: "Guitar",
        IAB: "IAB9-16",
        icon: <i className="fa-solid fa-guitar"></i>,
      },
      {
        name: "Home Recording",
        IAB: "IAB9-17",
        icon: <i className="fa-solid fa-record-vinyl"></i>,
      },
      {
        name: "Investors & Patents",
        IAB: "IAB9-18",
        icon: <i className="fa-solid fa-money-bill-wheat"></i>,
      },
      {
        name: "Jewelry Making	",
        IAB: "IAB9-19",
        icon: <i className="fa-solid fa-gem"></i>,
      },
      {
        name: "Magic & Illusion	",
        IAB: "IAB9-20",
        icon: <i className="fa-solid fa-wand-magic-sparkles"></i>,
      },
      {
        name: "Needlework	",
        IAB: "IAB9-21",
        icon: <i className="fa-solid fa-syringe"></i>,
      },
      {
        name: "Painting",
        IAB: "IAB9-22",
        icon: <i className="fa-solid fa-paintbrush"></i>,
      },
      {
        name: "Photography	",
        IAB: "IAB9-23",
        icon: <i className="fa-solid fa-camera"></i>,
      },
      {
        name: "Radio",
        IAB: "IAB9-24",
        icon: <i className="fa-solid fa-radio"></i>,
      },
      {
        name: "Roleplaying Games	",
        IAB: "IAB9-25",
        icon: <i className="fa-solid fa-dice"></i>,
      },
      {
        name: "Sci-Fi & Fantasy	",
        IAB: "IAB9-26",
        icon: <i className="fa-solid fa-dragon"></i>,
      },
      {
        name: "Scrapbooking	",
        IAB: "IAB9-27",
        icon: <i className="fa-solid fa-dumpster-fire"></i>,
      },
      {
        name: "Screenwriting",
        IAB: "IAB9-28",
        icon: <i className="fa-solid fa-pen-to-square"></i>,
      },
      {
        name: "Stamps & Coins",
        IAB: "IAB9-29",
        icon: <i className="fa-solid fa-stamp"></i>,
      },
      {
        name: "Video & Computer Games",
        IAB: "IAB9-30",
        icon: <i className="fa-solid fa-video"></i>,
      },
      {
        name: "Woodworking",
        IAB: "IAB9-31",
        icon: <i className="fa-solid fa-chair"></i>,
      },
    ],
  },
  {
    name: "Home & Garden",
    IAB: "IAB10",
    icon: <i className="fa-solid fa-house-chimney"></i>,
    innerOptions: [
      {
        name: "Appliances",
        IAB: "IAB10-1",
        icon: <i className="fa-solid fa-blender"></i>,
      },
      {
        name: "Entertaining",
        IAB: "IAB10-2",
        icon: <i className="fa-solid fa-tv"></i>,
      },
      {
        name: "Environmental Safety",
        IAB: "IAB10-3",
        icon: <i className="fa-solid fa-seedling"></i>,
      },
      {
        name: "Gardening",
        IAB: "IAB10-4",
        icon: <i className="fa-solid fa-plant-wilt"></i>,
      },
      {
        name: "Home Repair",
        IAB: "IAB10-5",
        icon: <i className="fa-solid fa-screwdriver-wrench"></i>,
      },
      {
        name: "Home Theater",
        IAB: "IAB10-6",
        icon: <i className="fa-solid fa-film"></i>,
      },
      {
        name: " Interior Decorating ",
        IAB: "IAB10-7",
        icon: <i className="fa-solid fa-holly-berry"></i>,
      },
      {
        name: " Landscaping ",
        IAB: "IAB10-8",
        icon: <i className="fa-solid fa-ruler-combined"></i>,
      },
      {
        name: "Remodeling & Construction",
        IAB: "IAB10-9",
        icon: <i className="fa-solid fa-building"></i>,
      },
    ],
  },
  {
    name: "Law, Gov’t & Politics",
    IAB: "IAB11",
    icon: <i className="fa-solid fa-scale-balanced"></i>,
    innerOptions: [
      {
        name: "Immigration",
        IAB: "IAB11-1",
        icon: <i className="fa-solid fa-passport"></i>,
      },
      {
        name: "Legal Issues ",
        IAB: "IAB11-2",
        icon: <i className="fa-solid fa-scale-balanced"></i>,
      },
      {
        name: "U.S. Government Resources",
        IAB: "IAB11-3",
        icon: <i className="fa-solid fa-flag-usa"></i>,
      },
      {
        name: "Politics",
        IAB: "IAB11-4",
        icon: <i className="fa-solid fa-landmark-dome"></i>,
      },
      {
        name: "Commentary",
        IAB: "IAB11-5",
        icon: <i className="fa-solid fa-comments-dollar"></i>,
      },
    ],
  },
  {
    name: "News",
    IAB: "IAB12",
    icon: <i className="fa-solid fa-newspaper"></i>,
    innerOptions: [
      {
        name: "International News",
        IAB: "IAB12-1",
        icon: <i className="fa-solid fa-globe"></i>,
      },
      {
        name: "National News",
        IAB: "IAB12-2",
        icon: <i className="fa-solid fa-flag"></i>,
      },
      {
        name: " Local News",
        IAB: "IAB12-3",
        icon: <i className="fa-solid fa-location-dot"></i>,
      },
    ],
  },
  {
    name: "Personal Finance",
    IAB: "IAB13",
    icon: <i className="fa-solid fa-hand-holding-dollar"></i>,
    innerOptions: [
      {
        name: "Beginning Investing",
        IAB: "IAB13-1",
        icon: <i className="fa-solid fa-money-bill-wheat"></i>,
      },
      {
        name: "Credit/Debt & Loans",
        IAB: "IAB13-2",
        icon: <i className="fa-solid fa-credit-card"></i>,
      },
      {
        name: "Financial News",
        IAB: "IAB13-3",
        icon: <i className="fa-solid fa-comments-dollar"></i>,
      },
      {
        name: "Financial Planning",
        IAB: "IAB13-4",
        icon: <i className="fa-solid fa-money-bill-trend-up"></i>,
      },
      {
        name: "Hedge Fund",
        IAB: "IAB13-5",
        icon: <i className="fa-solid fa-filter-circle-dollar"></i>,
      },
      {
        name: " Insurance ",
        IAB: "IAB13-6",
        icon: <i className="fa-solid fa-car-burst"></i>,
      },
      {
        name: " Investing ",
        IAB: "IAB13-7",
        icon: <i className="fa-solid fa-money-bill-transfer"></i>,
      },
      {
        name: "Mutual Funds",
        IAB: "IAB13-8",
        icon: <i className="fa-solid fa-hand-holding-dollar"></i>,
      },
      {
        name: "Options",
        IAB: "IAB13-9",
        icon: <i className="fa-solid fa-coins"></i>,
      },
      {
        name: "Retirement Planning",
        IAB: "IAB13-10",
        icon: <i className="fa-solid fa-money-check"></i>,
      },
      {
        name: " Stocks",
        IAB: "IAB13-11",
        icon: <i className="fa-solid fa-arrow-trend-up"></i>,
      },
      {
        name: "Tax Planning ",
        IAB: "IAB13-12",
        icon: <i className="fa-solid fa-file-invoice-dollar"></i>,
      },
    ],
  },
  {
    name: " Society",
    IAB: "IAB14",
    icon: <i className="fa-solid fa-landmark"></i>,
    innerOptions: [
      {
        name: "Dating",
        IAB: "IAB14-1",
        icon: <i className="fa-solid fa-heart-circle-plus"></i>,
      },
      {
        name: "Divorce Support",
        IAB: "IAB14-2",
        icon: <i className="fa-solid fa-gavel"></i>,
      },
      {
        name: "Gay Life",
        IAB: "IAB14-3",
        icon: <i className="fa-solid fa-mars-double"></i>,
      },
      {
        name: "Marriage",
        IAB: "IAB14-4",
        icon: <i className="fa-solid fa-ring"></i>,
      },
      {
        name: "Senior Living",
        IAB: "IAB14-5",
        icon: <i className="fa-solid fa-person-cane"></i>,
      },
      {
        name: "Teens",
        IAB: "IAB14-6",
        icon: <i className="fa-solid fa-children"></i>,
      },
      {
        name: " Weddings",
        IAB: "IAB14-7",
        icon: <i className="fa-solid fa-people-pulling"></i>,
      },
      {
        name: "Ethnic Specific",
        IAB: "IAB14-8",
        icon: <i className="fa-solid fa-shirt"></i>,
      },
    ],
  },
  {
    name: "Science",
    IAB: "IAB15",
    icon: <i className="fa-solid fa-flask"></i>,
    innerOptions: [
      {
        name: "Astrology",
        IAB: "IAB15-1",
        icon: <i className="fa-solid fa-cloud-moon-rain"></i>,
      },
      {
        name: "Biology",
        IAB: "IAB15-2",
        icon: <i className="fa-solid fa-dna"></i>,
      },
      {
        name: "Chemistry",
        IAB: "IAB15-3",
        icon: <i className="fa-solid fa-flask-vial"></i>,
      },
      {
        name: "Geology",
        IAB: "IAB15-4",
        icon: <i className="fa-solid fa-earth-oceania"></i>,
      },
      {
        name: "Paranormal Phenomena",
        IAB: "IAB15-5",
        icon: <i className="fa-solid fa-ghost"></i>,
      },
      {
        name: "Physics",
        IAB: "IAB15-6",
        icon: <i className="fa-solid fa-book-journal-whills"></i>,
      },
      {
        name: "Space/Astronomy",
        IAB: "IAB15-7",
        icon: <i className="fa-brands fa-space-awesome"></i>,
      },
      {
        name: "Geography",
        IAB: "IAB15-8",
        icon: <i className="fa-solid fa-globe"></i>,
      },
      {
        name: "Botany",
        IAB: "IAB15-9",
        icon: <i className="fa-solid fa-seedling"></i>,
      },
      {
        name: "Weather",
        IAB: "IAB15-10",
        icon: <i className="fa-solid fa-cloud"></i>,
      },
    ],
  },
  {
    name: "Pets",
    IAB: "IAB16",
    icon: <i className="fa-solid fa-paw"></i>,
    innerOptions: [
      {
        name: "Aquariums",
        IAB: "IAB16-1",
        icon: <i className="fa-solid fa-fish-fins"></i>,
      },
      {
        name: "Birds",
        IAB: "IAB16-2",
        icon: <i className="fa-solid fa-kiwi-bird"></i>,
      },
      {
        name: "Cats",
        IAB: "IAB16-3",
        icon: <i className="fa-solid fa-cat"></i>,
      },
      {
        name: "Dogs",
        IAB: "IAB16-4",
        icon: <i className="fa-solid fa-dog"></i>,
      },
      {
        name: "Large Animals",
        IAB: "IAB16-5",
        icon: <i className="fa-solid fa-hippo"></i>,
      },
      {
        name: "Reptiles",
        IAB: "IAB16-6",
        icon: <i className="fa-solid fa-staff-snake"></i>,
      },
      {
        name: "Veterinary Medicine",
        IAB: "IAB16-7",
        icon: <i className="fa-solid fa-stethoscope"></i>,
      },
    ],
  },
  {
    name: "Sports ",
    IAB: "IAB17",
    icon: <i className="fa-solid fa-volleyball"></i>,
    innerOptions: [
      {
        name: "Auto Racing",
        IAB: "IAB17-1",
        icon: <i className="fa-solid fa-motorcycle"></i>,
      },
      {
        name: "Baseball",
        IAB: "IAB17-2",
        icon: <i className="fa-solid fa-baseball"></i>,
      },
      {
        name: "Bicycling",
        IAB: "IAB17-3",
        icon: <i className="fa-solid fa-bicycle"></i>,
      },
      {
        name: "Bodybuilding",
        IAB: "IAB17-4",
        icon: <i className="fa-solid fa-building"></i>,
      },
      {
        name: "Boxing",
        IAB: "IAB1-5",
        icon: <i className="fa-solid fa-weight-hanging"></i>,
      },
      {
        name: "Canoeing/Kayaking",
        IAB: "IAB17-6",
        icon: <i className="fa-solid fa-sailboat"></i>,
      },
      {
        name: "Cheerleading",
        IAB: "IAB17-7",
        icon: <i className="fa-solid fa-face-laugh-beam"></i>,
      },
      {
        name: "Climbing",
        IAB: "IAB17-8",
        icon: <i className="fa-solid fa-wrench"></i>,
      },
      {
        name: "Cricket",
        IAB: "IAB17-9",
        icon: <i className="fa-solid fa-heart"></i>,
      },
      {
        name: "Figure Skating",
        IAB: "IAB17-10",
        icon: <i className="fa-solid fa-person-skating"></i>,
      },
      {
        name: "Fly Fishing",
        IAB: "IAB17-11",
        icon: <i className="fa-solid fa-otter"></i>,
      },
      {
        name: "Football",
        IAB: "IAB1-12",
        icon: <i className="fa-solid fa-football"></i>,
      },
      {
        name: "Freshwater Fishing",
        IAB: "IAB17-13",
        icon: <i className="fa-solid fa-water"></i>,
      },
      {
        name: "Game & Fish",
        IAB: "IAB17-14",
        icon: <i className="fa-solid fa-fish"></i>,
      },
      {
        name: "Golf",
        IAB: "IAB17-15",
        icon: <i className="fa-solid fa-golf-ball-tee"></i>,
      },
      {
        name: "Horse Racing",
        IAB: "IAB17-16",
        icon: <i className="fa-solid fa-horse"></i>,
      },
      {
        name: "Horses",
        IAB: "IAB17-17",
        icon: <i className="fa-solid fa-horse-head"></i>,
      },
      {
        name: "Hunting/Shooting",
        IAB: "IAB17-18",
        icon: <i className="fa-solid fa-meteor"></i>,
      },
      {
        name: "Inline Skating",
        IAB: "IAB1-19",
        icon: <i className="fa-solid fa-person-skating"></i>,
      },
      {
        name: "Martial Arts",
        IAB: "IAB17-20",
        icon: <i className="fa-solid fa-fire-flame-curved"></i>,
      },
      {
        name: "Mountain Biking",
        IAB: "IAB17-21",
        icon: <i className="fa-solid fa-mountain"></i>,
      },
      {
        name: "NASCAR Racing",
        IAB: "IAB17-22",
        icon: <i className="fa-solid fa-person-running"></i>,
      },
      {
        name: "Olympics",
        IAB: "IAB17-23",
        icon: <i className="fa-solid fa-person-snowboarding"></i>,
      },
      {
        name: "Paintball",
        IAB: "IAB17-24",
        icon: <i className="fa-solid fa-gun"></i>,
      },
      {
        name: "Power & Motorcycles",
        IAB: "IAB17-25",
        icon: <i className="fa-solid fa-power-off"></i>,
      },
      {
        name: "Pro Basketball",
        IAB: "IAB1-26",
        icon: <i className="fa-solid fa-basketball"></i>,
      },
      {
        name: "Pro Ice Hockey",
        IAB: "IAB17-27",
        icon: <i className="fa-solid fa-hockey-puck"></i>,
      },
      {
        name: "Rodeo",
        IAB: "IAB17-28",
        icon: <i className="fa-solid fa-hat-cowboy"></i>,
      },
      {
        name: "Rugby",
        IAB: "IAB17-29",
        icon: <i className="fa-solid fa-football"></i>,
      },
      {
        name: "Running/Jogging",
        IAB: "IAB17-30",
        icon: <i className="fa-solid fa-person-running"></i>,
      },
      {
        name: "Sailing",
        IAB: "IAB17-31",
        icon: <i className="fa-solid fa-sailboat"></i>,
      },
      {
        name: "Saltwater Fishing",
        IAB: "IAB17-32",
        icon: <i className="fa-solid fa-fish"></i>,
      },
      {
        name: "Scuba Diving",
        IAB: "IAB1-33",
        icon: <i className="fa-solid fa-water"></i>,
      },
      {
        name: "Skateboarding",
        IAB: "IAB17-34",
        icon: <i className="fa-solid fa-person-skating"></i>,
      },
      {
        name: "Skiing",
        IAB: "IAB17-35",
        icon: <i className="fa-solid fa-person-skiing"></i>,
      },
      {
        name: "Snowboarding",
        IAB: "IAB17-36",
        icon: <i className="fa-solid fa-person-snowboarding"></i>,
      },
      {
        name: "Surfing/Bodyboarding",
        IAB: "IAB17-37",
        icon: <i className="fa-solid fa-person-swimming"></i>,
      },
      {
        name: "Swimming",
        IAB: "IAB17-38",
        icon: <i className="fa-solid fa-person-swimming"></i>,
      },
      {
        name: "Table Tennis/Ping-Pong",
        IAB: "IAB17-39",
        icon: <i className="fa-solid fa-table-tennis-paddle-ball"></i>,
      },
      {
        name: "Tennis",
        IAB: "IAB1-40",
        icon: <i className="fa-solid fa-table-tennis-paddle-ball"></i>,
      },
      {
        name: "Volleyball",
        IAB: "IAB17-41",
        icon: <i className="fa-solid fa-volleyball"></i>,
      },
      {
        name: "Walking",
        IAB: "IAB17-42",
        icon: <i className="fa-solid fa-person-walking"></i>,
      },
      {
        name: "Waterski/Wakeboard",
        IAB: "IAB17-43",
        icon: <i className="fa-solid fa-person-snowboarding"></i>,
      },
      {
        name: "World Soccer",
        IAB: "IAB17-44",
        icon: <i className="fa-solid fa-globe"></i>,
      },
    ],
  },

  {
    name: "Style & Fashion",
    IAB: "IAB18",
    icon: <i className="fa-solid fa-shirt"></i>,
    innerOptions: [
      {
        name: "Beauty",
        IAB: "IAB18-1",
        icon: <i className="fa-solid fa-crown"></i>,
      },
      {
        name: "Body Art",
        IAB: "IAB18-2",
        icon: <i className="fa-solid fa-child"></i>,
      },
      {
        name: "Fashion",
        IAB: "IAB18-3",
        icon: <i className="fa-solid fa-vest-patches"></i>,
      },
      {
        name: "Jewelry",
        IAB: "IAB18-4",
        icon: <i className="fa-solid fa-gem"></i>,
      },
      {
        name: "Clothing",
        IAB: "IAB18-5",
        icon: <i className="fa-solid fa-shirt"></i>,
      },
      {
        name: "Accessories",
        IAB: "IAB18-6",
        icon: <i className="fa-solid fa-keyboard"></i>,
      },
    ],
  },

  {
    name: "Technology & Computing",
    IAB: "IAB19",
    icon: <i className="fa-solid fa-computer"></i>,
    innerOptions: [
      {
        name: "3-D Graphics",
        IAB: "IAB19-1",
        icon: <i className="fa-solid fa-vr-cardboard"></i>,
      },
      {
        name: "Animation",
        IAB: "IAB19-2",
        icon: <i className="fa-solid fa-dragon"></i>,
      },
      {
        name: "Antivirus Software",
        IAB: "IAB19-3",
        icon: <i className="fa-solid fa-file-shield"></i>,
      },
      {
        name: "C/C++",
        IAB: "IAB19-4",
        icon: <i className="fa-solid fa-c"></i>,
      },
      {
        name: "Cameras & Camcorders",
        IAB: "IAB19-5",
        icon: <i className="fa-solid fa-camera"></i>,
      },
      {
        name: "Cell Phones",
        IAB: "IAB19-6",
        icon: <i className="fa-solid fa-phone"></i>,
      },
      {
        name: "Computer Certification",
        IAB: "IAB19-7",
        icon: <i className="fa-solid fa-computer"></i>,
      },
      {
        name: "Computer Networking",
        IAB: "IAB19-8",
        icon: <i className="fa-solid fa-network-wired"></i>,
      },
      {
        name: "Computer Peripherals",
        IAB: "IAB19-9",
        icon: <i className="fa-solid fa-computer-mouse"></i>,
      },
      {
        name: "Computer Reviews",
        IAB: "IAB19-10",
        icon: <i className="fa-solid fa-file-waveform"></i>,
      },
      {
        name: "Data Centers",
        IAB: "IAB19-11",
        icon: <i className="fa-solid fa-server"></i>,
      },
      {
        name: "Databases",
        IAB: "IAB19-12",
        icon: <i className="fa-solid fa-database"></i>,
      },
      {
        name: "Desktop Publishing",
        IAB: "IAB19-13",
        icon: <i className="fa-solid fa-desktop"></i>,
      },
      {
        name: "Desktop Video",
        IAB: "IAB19-14",
        icon: <i className="fa-solid fa-video"></i>,
      },
      {
        name: "Email",
        IAB: "IAB19-15",
        icon: <i className="fa-solid fa-envelope"></i>,
      },
      {
        name: "Graphics Software",
        IAB: "IAB19-16",
        icon: <i className="fa-solid fa-laptop-code"></i>,
      },
      {
        name: "Home Video/DVD",
        IAB: "IAB19-17",
        icon: <i className="fa-solid fa-house"></i>,
      },
      {
        name: "Internet Technology",
        IAB: "IAB19-18",
        icon: <i className="fa-solid fa-wifi"></i>,
      },
      {
        name: "Java",
        IAB: "IAB19-19",
        icon: <i className="fa-solid fa-mug-hot"></i>,
      },
      {
        name: "JavaScript",
        IAB: "IAB19-20",
        icon: <i className="fa-solid fa-scroll"></i>,
      },
      {
        name: "Mac Support",
        IAB: "IAB19-21",
        icon: <i className="fa-solid fa-laptop"></i>,
      },
      {
        name: "MP3/MIDI",
        IAB: "IAB19-22",
        icon: <i className="fa-solid fa-music"></i>,
      },
      {
        name: "Net Conferencing",
        IAB: "IAB19-23",
        icon: <i className="fa-solid fa-network-wired"></i>,
      },
      {
        name: "Net for Beginners",
        IAB: "IAB19-24",
        icon: <i className="fa-solid fa-wifi"></i>,
      },
      {
        name: "Network Security",
        IAB: "IAB19-25",
        icon: <i className="fa-solid fa-ethernet"></i>,
      },
      {
        name: "Palmtops/PDAs",
        IAB: "IAB19-26",
        icon: <i className="fa-solid fa-tablet-screen-button"></i>,
      },
      {
        name: "PC Support",
        IAB: "IAB19-27",
        icon: <i className="fa-solid fa-desktop"></i>,
      },
      {
        name: "Portable",
        IAB: "IAB19-28",
        icon: <i className="fa-solid fa-display"></i>,
      },
      {
        name: "Entertainment",
        IAB: "IAB19-29",
        icon: <i className="fa-solid fa-face-laugh-beam"></i>,
      },
      {
        name: "Shareware/Freeware",
        IAB: "IAB19-30",
        icon: <i className="fa-solid fa-road-circle-check"></i>,
      },
      {
        name: "Unix",
        IAB: "IAB19-31",
        icon: <i className="fa-solid fa-universal-access"></i>,
      },
      {
        name: "Visual Basic",
        IAB: "IAB19-32",
        icon: <i className="fa-solid fa-infinity"></i>,
      },
      {
        name: "Web Clip Art",
        IAB: "IAB19-33",
        icon: <i className="fa-solid fa-id-card-clip"></i>,
      },
      {
        name: "Web Design/HTML",
        IAB: "IAB19-34",
        icon: <i className="fa-solid fa-code"></i>,
      },
      {
        name: "Web Search",
        IAB: "IAB19-35",
        icon: <i className="fa-solid fa-magnifying-glass"></i>,
      },
      {
        name: "Windows",
        IAB: "IAB19-36",
        icon: <i className="fa-solid fa-table-cells-large"></i>,
      },
    ],
  },

  {
    name: "Travel",
    IAB: "IAB20",
    icon: <i className="fa-solid fa-plane-departure"></i>,
    innerOptions: [
      {
        name: "Adventure Travel",
        IAB: "IAB20-1",
        icon: <i className="fa-solid fa-route"></i>,
      },
      {
        name: "Africa",
        IAB: "IAB20-2",
        icon: <i className="fa-solid fa-earth-africa"></i>,
      },
      {
        name: "Air Travel",
        IAB: "IAB20-3",
        icon: <i className="fa-solid fa-plane"></i>,
      },
      {
        name: "Australia & New Zealand",
        IAB: "IAB20-4",
        icon: <i className="fa-solid fa-earth-oceania"></i>,
      },
      {
        name: "Bed & Breakfasts",
        IAB: "IAB20-5",
        icon: <i className="fa-solid fa-bed"></i>,
      },
      {
        name: "Budget Travel",
        IAB: "IAB20-6",
        icon: <i className="fa-solid fa-money-bill-transfer"></i>,
      },
      {
        name: "Business Travel",
        IAB: "IAB20-7",
        icon: <i className="fa-solid fa-bus"></i>,
      },
      {
        name: "By US Locale",
        IAB: "IAB20-8",
        icon: <i className="fa-solid fa-location-dot"></i>,
      },
      {
        name: "Camping",
        IAB: "IAB20-9",
        icon: <i className="fa-solid fa-campground"></i>,
      },
      {
        name: "Canada",
        IAB: "IAB20-10",
        icon: <i className="fa-solid fa-earth-americas"></i>,
      },
      {
        name: "Caribbean",
        IAB: "IAB20-11",
        icon: <i className="fa-solid fa-earth-africa"></i>,
      },
      {
        name: "Cruises",
        IAB: "IAB20-12",
        icon: <i className="fa-solid fa-ferry"></i>,
      },
      {
        name: "Eastern Europe",
        IAB: "IAB20-13",
        icon: <i className="fa-solid fa-earth-europe"></i>,
      },
      {
        name: "Europe",
        IAB: "IAB20-14",
        icon: <i className="fa-solid fa-earth-europe"></i>,
      },
      {
        name: "France",
        IAB: "IAB20-15",
        icon: <i className="fa-solid fa-location-arrow"></i>,
      },
      {
        name: "Greece",
        IAB: "IAB20-16",
        icon: <i className="fa-solid fa-location-pin"></i>,
      },
      {
        name: "Honeymoons/Getaways",
        IAB: "IAB20-17",
        icon: <i className="fa-solid fa-parachute-box"></i>,
      },
      {
        name: "Hotels",
        IAB: "IAB20-18",
        icon: <i className="fa-solid fa-hotel"></i>,
      },
      {
        name: "Italy",
        IAB: "IAB20-19",
        icon: <i className="fa-solid fa-square-h"></i>,
      },
      {
        name: "Japan",
        IAB: "IAB20-20",
        icon: <i className="fa-solid fa-door-open"></i>,
      },
      {
        name: "Mexico & Central America",
        IAB: "IAB20-21",
        icon: <i className="fa-solid fa-umbrella-beach"></i>,
      },
      {
        name: "National Parks",
        IAB: "IAB20-22",
        icon: <i className="fa-solid fa-tree-city"></i>,
      },
      {
        name: "South America",
        IAB: "IAB20-23",
        icon: <i className="fa-solid fa-bed"></i>,
      },
      {
        name: "Spas",
        IAB: "IAB20-24",
        icon: <i className="fa-solid fa-spa"></i>,
      },
      {
        name: "Theme Parks",
        IAB: "IAB20-25",
        icon: <i className="fa-solid fa-water-ladder"></i>,
      },
      {
        name: "Traveling with Kids",
        IAB: "IAB20-26",
        icon: <i className="fa-solid fa-people-roof"></i>,
      },
      {
        name: "United Kingdom",
        IAB: "IAB20-27",
        icon: <i className="fa-solid fa-flag-usa"></i>,
      },
    ],
  },

  {
    name: "Real Estate",
    IAB: "IAB21",
    icon: <i className="fa-solid fa-sign-hanging"></i>,
    innerOptions: [
      {
        name: "Apartments",
        IAB: "IAB21-1",
        icon: <i className="fa-solid fa-building"></i>,
      },
      {
        name: "Architects",
        IAB: "IAB21-2",
        icon: <i className="fa-solid fa-city"></i>,
      },
      {
        name: "Buying/Selling Homes",
        IAB: "IAB21-3",
        icon: <i className="fa-solid fa-building-circle-arrow-right"></i>,
      },
    ],
  },

  {
    name: "Shopping",
    IAB: "IAB22",
    icon: <i className="fa-solid fa-cart-shopping"></i>,
    innerOptions: [
      {
        name: "Contests & Freebies",
        IAB: "IAB22-1",
        icon: <i className="fa-solid fa-trophy"></i>,
      },
      {
        name: "Couponing",
        IAB: "IAB22-2",
        icon: <i className="fa-solid fa-ticket"></i>,
      },
      {
        name: "Comparison",
        IAB: "IAB22-3",
        icon: <i className="fa-solid fa-code-compare"></i>,
      },
      {
        name: "Engines",
        IAB: "IAB22-4",
        icon: <i className="fa-solid fa-car-battery"></i>,
      },
    ],
  },
  {
    name: "Religion & Spirituality",
    IAB: "IAB23",
    icon: <i className="fa-solid fa-hands-praying"></i>,
    innerOptions: [
      {
        name: "Alternative Religions",
        IAB: "IAB23-1",
        icon: <i className="fa-solid fa-book-atlas"></i>,
      },
      {
        name: "Atheism/Agnosticism",
        IAB: "IAB23-2",
        icon: <i className="fa-solid fa-atom"></i>,
      },
      {
        name: "Buddhism",
        IAB: "IAB23-3",
        icon: <i className="fa-solid fa-vihara"></i>,
      },
      {
        name: "Catholicism",
        IAB: "IAB23-4",
        icon: <i className="fa-solid fa-church"></i>,
      },
      {
        name: "Christianity",
        IAB: "IAB23-5",
        icon: <i className="fa-solid fa-cross"></i>,
      },
      {
        name: "Hinduism",
        IAB: "IAB23-6",
        icon: <i className="fa-solid fa-om"></i>,
      },
      {
        name: "Islam",
        IAB: "IAB23-7",
        icon: <i className="fa-solid fa-star-and-crescent"></i>,
      },
      {
        name: "Judaism",
        IAB: "IAB23-8",
        icon: <i className="fa-solid fa-synagogue"></i>,
      },
      {
        name: "Latter-Day Saints",
        IAB: "IAB23-9",
        icon: <i className="fa-solid fa-dharmachakra"></i>,
      },
      {
        name: "Pagan/Wiccan",
        IAB: "IAB23-10",
        icon: <i className="fa-solid fa-star-of-david"></i>,
      },
    ],
  },
  {
    name: "Uncategorized",
    IAB: "IAB24",
    icon: <i className="fa-solid fa-table-list"></i>,
    innerOptions: [],
  },
  {
    name: "Non-Standard Content",
    IAB: "IAB25",
    icon: <i className="fa-solid fa-layer-group"></i>,
    innerOptions: [
      {
        name: "Unmoderated UGC",
        IAB: "IAB25-1",
        icon: <i className="fa-solid fa-user-tag"></i>,
      },
      {
        name: "Extreme Graphic/Explicit Violence",
        IAB: "IAB25-2",
        icon: <i className="fa-solid fa-chart-simple"></i>,
      },
      {
        name: "Pornography",
        IAB: "IAB25-3",
        icon: <i className="fa-solid fa-square-xmark"></i>,
      },
      {
        name: "Profane Content",
        IAB: "IAB25-4",
        icon: <i className="fa-solid fa-person-harassing"></i>,
      },
      {
        name: "Hate Content",
        IAB: "IAB25-5",
        icon: <i className="fa-solid fa-heart-crack"></i>,
      },
      {
        name: "Under Construction",
        IAB: "IAB25-6",
        icon: <i className="fa-solid fa-trowel-bricks"></i>,
      },
      {
        name: "Incentivized",
        IAB: "IAB25-7",
        icon: <i className="fa-solid fa-hand-holding-dollar"></i>,
      },
    ],
  },

  {
    name: "Illegal Content",
    IAB: "IAB26",
    icon: <i className="fa-solid fa-scale-unbalanced"></i>,
    innerOptions: [
      {
        name: "Illegal Content",
        IAB: "IAB26-1",
        icon: <i className="fa-solid fa-scale-unbalanced-flip"></i>,
      },
      {
        name: "Warez",
        IAB: "IAB26-2",
        icon: <i className="fa-solid fa-users-rays"></i>,
      },
      {
        name: "Spyware/Malware",
        IAB: "IAB26-3",
        icon: <i className="fa-solid fa-user-secret"></i>,
      },
      {
        name: "Copyright Infringement",
        IAB: "IAB26-4",
        icon: <i className="fa-solid fa-copyright"></i>,
      },
    ],
  },
];

