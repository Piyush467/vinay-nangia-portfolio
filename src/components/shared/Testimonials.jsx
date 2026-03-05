import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react'; // Optional: for better looking arrows
import Heading from './Heading';

const testimonialData = [
    {
        testimony: "Prof Nangia is a distinguished academician, renowned teacher, notable researcher, and an astute administrator. An outstanding leader of management education with a clear thought, Prof Nangia is an institution in itself.",
        testimonyBy: "Prof. D P Goyal, Ph.D.",
        designation: "Director IIM Shillong"
    },
    {
        testimony: "A very dynamic and energetic leader. An excellent human being who is always ready to help others. I found him a very compassionate result oriented down to earth humanitarian leader.",
        testimonyBy: "Prof. Sunita Singh Sengupta",
        designation: "Dean Faculty of Management Studies, Delhi University, Delhi"
    },
    {
        testimony: "As Head of the Department for three consecutive terms, he laid a strong foundation of the Department. Due to his visionary leadership, the Department stands among the top 10 B-schools in the country as per NIRF within 20 years of its establishment.",
        testimonyBy: "Prof. Manoranjan Parida, Director, CBRI, New Delhi ",
        designation: "Deputy Director,Indian Institute of Technology Roorkee (IITR) Roorkee."
    },
    {
        testimony: "His one of the most important skill is \"Institutional Development\". DoMS, IIT Roorkee is one such example, where he put his visionary thinking to make it one of the top B-Schools of the country. It is an example of Level 5 leadership which Jim Collins describes in his famous book Good to Great.",
        testimonyBy: "Prof. Rajat Agrawal",
        designation: "Head, Department of Management Studies, IIT Roorkee, Roorkee"
    },
    {
        testimony: "An Intrapreneur and a Mentor at heart- A multifaceted personality, perpetually cheerful, deeply curious, uniquely knowledgeable with profound analytical skills and ever brimming energy are only some of the things that characterise Prof Nangia. Prof Nangia brings his unique talents to any project or assignment with a force and purpose few individuals can match.",
        testimonyBy: "Prof. Vijita Singh Aggarwal",
        designation: "Director of International Affairs & Professor, University School of Management Studies, GGIPU, New Delhi"
    },
    {
        testimony: "Mastery in Interviews and Academic Administration: Dr. Vinay Nangia effortlessly combines the idealism of academia with the realism of industry, a trait that he has honed over long years just as an exponent masters his art. What comes through is an uncompromisingly pragmatic, impeccably honest, multi-faceted person that one can never claim to know enough!",
        testimonyBy: "Ajay Goyal",
        designation: "Chancellor, Quantum University, Roorkee"
    },
    {
        testimony: "Highly talented and experienced individual: I met Prof. Nangia when I approached him to help one of my friends in a dire situation. That one meeting gave me the opportunity to gain mentorship from a highly talented and experienced individual. He is thoughtful, insightful, and highly supportive.",
        testimonyBy: "Vaishali Jain",
        designation: "B. Tech. (IITR) Goldman Sachs India, Graduate Student, Duke University, USA"
    },
    {
        testimony: "Teaches \"How to Think\": Prof. Nangia was one of the most influential people for me personally (and many others I know) on the IIT Roorkee campus, and I owe so much of my learnings to him. He was one of the few professors who took the pain and effort to teach students \"how to think.\"",
        testimonyBy: "Gaurav Nemade",
        designation: "B. Tech. (IITR), Product Manager, Google AI, Mountainview, California, USA"
    },
    {
        testimony: "Nurtured and Groomed me during my formative years: I had the good fortune of being Prof. Nangia's student at IIT Roorkee. He was not only my Professor but a great mentor. He nurtured me through my IIT years and shaped my perspective on various things and influenced my outlook on life as a whole. I feel very blessed that he guided me during my formative years, encouraged me to try new things, travel abroad, and go for a foreign education and value happiness.",
        testimonyBy: "Cashmira Pramanik",
        designation: "B. Arch. (IITR), M. Sc. Management, London Business School, London, UK"
    },
    {
        testimony: "Helps to make you a rounded person- sharpened my rough edges: A building wanting to stand tall needs a good foundation. This is the role Prof. Nangia has played in my professional life. I came to IIT Roorkee campus as a young and a naive 16-year-old boy with lots of dreams. Prof. Nangia sharpened my rough edges – from interpersonal communication to writing effective emails. He also taught me to think structurally, a skill that has served me well throughout my career",
        testimonyBy: "Yash Jain",
        designation: "B. Tech. (IITR), Graduate Student, Booth School, University of Chicago, Chicago, USA"
    },
    {
        testimony: "Excellent Stewardship with Intellectual Ability: When I met Prof V. K .Nangia for the first time about two decades ago, I felt here was a man who would stand out in any gathering because of his impressive personality consisting of a very pleasing appearance with sharp features, very fair Indian complexion, sweet voice, wit, wide knowledge and ability to intelligently discuss almost any subject.",
        testimonyBy: "Vinay Shankar, IAS Retd",
        designation: "Former, SECRETARY TO Government of India"
    },
    {
        testimony: "His forte, I observed is in unraveling interrelationships between seemingly different subjects and disciplines which is critical not only for policy and decision-making in government and business in a broad sense but also in academia.",
        testimonyBy: "Rangan Dutta, IAS Retd",
        designation: "Former Director General, Council for Advancement of People's Action and Rural Technology"
    },
    {
        testimony: "Incomparable Enthusiasm and Unending Energy; Dr. Vinay Nangia is a sweetheart of students who swear by him. He is always available to students of all age groups for any guidance, advice, help, support, and mentoring: be it for higher education, placements, job hunt, preparing CV or preparation for Interviews or career counselling. Students come to him for the choice of courses, programs, colleges, universities, choice of companies, career, and even for preparation for Civil Services exams conducted by UPSC-particularly Interviews.",
        testimonyBy: "Dr. Nirmaljeet Singh Kalsi, IAS (retd)",
        designation: "Former ACS Home PB, MHA GoI, Chandigarh"
    },
    {
        testimony: "Constantly inspiring and influencing personality: He owns a distinguished style, perfect attire, a charismatic personality, a compassionate heart and a sacred soul. He is simply a tender-hearted, good-natured, sweet-tempered, loving & learned human being.",
        testimonyBy: "Dr. Kapil Joshi, IFS",
        designation: "Principal Chief Conservator of Forest, Dehradun"
    },
    {
        testimony: "Totally Positive Outlook: If there is a living example of Krishna's message of total action with a totally positive outlook, it is Prof. Vinay Nangia.",
        testimonyBy: "Dr. Rajnish Kataria",
        designation: "Former Director, National Institute of Banking Studies & Corporate Management (NIBSCOM), NOIDA"
    },
    {
        testimony: "Dr Nangia can recognize talent and innate ability and a short session with him will convince you that you have those abilities you never thought you had",
        testimonyBy: "Sanjay Nagi",
        designation: "Managing Director, Marketing Insight Consultants, NOIDA"
    },
    {
        testimony: "After meeting him I have found a lifelong mentor: Prof Nangia's empathy is what makes him the best mentor you would probably meet. He can untie your thoughts within minutes and help you focus. If you are struggling to find your niche, verify a marketing plan, or just get started, you simply cannot go wrong with him. Out of words. It can be a life-changer to actually implement his advice.",
        testimonyBy: "Puneet Ahuja",
        designation: "CEO and Founder, Pata Hai Media Labs (India) Pvt Ltd, New Delhi"
    },
    {
        testimony: "Prof. Vinay is a Visionary, a man in action & full of positive energy.",
        testimonyBy: "Kunnwar Vijay Parmar",
        designation: "Founder & CEO, Wivitan Solutions India Pvt.Ltd, Gurugram"
    },
    {
        testimony: "You have been a Godfather to me and my team since 2016 from our college days. You trusted in our team when we were just random students trying to build our company. Your mentorship for last 4 years has been very crucial for us. Your precise advice, impeccable understanding of situations and enormous experience has helped us solve so many problems that came our way.",
        testimonyBy: "Pramudit Somvanshi",
        designation: "Co-Founder, Ingenium Education, New Delhi"
    },
    {
        testimony: "आपने मुझे शक्ति दी: आप जैसे गुरु का मार्गदर्शन मिलना, आशीर्वाद मिलते रहना किसी भी वरदान से कम नहीं है। आपका बहुत-बहुत धन्यवाद",
        testimonyBy: "विकास गुप्ता",
        designation: "बीटेक आईआईटी रुड़की, Founder, दिव्यांग-एक उम्मीद"
    }
];

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);
    const scrollRef = useRef(null);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }, [currentIndex]);

    const slideVariants = {
        enter: (direction) => ({
            x: direction > 0 ? 200 : -200,
            opacity: 0
        }),
        center: {
            x: 0,
            opacity: 1
        },
        exit: (direction) => ({
            x: direction < 0 ? 200 : -200,
            opacity: 0,
            transition: {
                duration: 0.2
            }
        })
    };

    const handlePrevious = () => {
        setDirection(-1);
        setCurrentIndex((prevIndex) => 
            prevIndex === 0 ? testimonialData.length - 1 : prevIndex - 1
        );
    };

    const handleNext = () => {
        setDirection(1);
        setCurrentIndex((prevIndex) => 
            prevIndex === testimonialData.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <main className='flex flex-col w-full max-w-5xl mx-auto px-2 sm:px-4 py-4 sm:py-8'>
            <div className='mx-auto w-fit mb-4 sm:mb-8'>
                <Heading title='What They’re Saying' />
            </div>

            <div className="relative">
                <div className="relative bg-white rounded-lg border border-gray-200 shadow-lg p-3 sm:p-6">
                <div className="relative min-h-[250px] sm:min-h-[200px] flex flex-col justify-between">
                    <AnimatePresence mode="popLayout">
                    <motion.div
                        key={currentIndex}
                        custom={direction}
                        variants={slideVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{
                        x: { type: "spring", stiffness: 300, damping: 30 },
                        opacity: { duration: 0.2 }
                        }}
                        className="absolute inset-0"
                    >
                        <div className="flex flex-col h-full justify-between gap-3 sm:gap-6">
                        {/* Testimony Text */}
                        <div className="prose max-w-none overflow-y-auto">
                            <p className="text-gray-800 font-medium text-sm md:text-base line-clamp-none">
                            {testimonialData[currentIndex].testimony}
                            </p>
                        </div>
                        
                        {/* Author Info */}
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1, duration: 0.5 }}
                            className="text-right border-t pt-2 sm:pt-4"
                        >
                            <h3 className="text-base sm:text-lg font-semibold text-gray-900">
                            {testimonialData[currentIndex].testimonyBy}
                            </h3>
                            <p className="text-gray-600 text-xs sm:text-sm">
                            {testimonialData[currentIndex].designation}
                            </p>
                        </motion.div>
                        </div>
                    </motion.div>
                    </AnimatePresence>
                </div>
                </div>

                {/* Navigation Buttons */}
                <div className="absolute -left-4 -right-4 top-1/2 -translate-y-1/2 hidden md:flex justify-between">
                <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handlePrevious}
                    className="p-2 bg-black text-white rounded-full hover:bg-gray-800"
                >
                    <ChevronLeft className="w-5 h-5" />
                </motion.button>
                <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleNext}
                    className="p-2 bg-black text-white rounded-full hover:bg-gray-800"
                >
                    <ChevronRight className="w-5 h-5" />
                </motion.button>
                </div>

                {/* Mobile Navigation */}
                <div className="mt-4 flex justify-center gap-2 md:hidden">
                <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handlePrevious}
                    className="p-2 bg-black text-white rounded-full hover:bg-gray-800"
                >
                    <ChevronLeft className="w-4 h-4" />
                </motion.button>
                <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleNext}
                    className="p-2 bg-black text-white rounded-full hover:bg-gray-800"
                >
                    <ChevronRight className="w-4 h-4" />
                </motion.button>
                </div>
            </div>
        </main>
    );
};

export default Testimonials;
