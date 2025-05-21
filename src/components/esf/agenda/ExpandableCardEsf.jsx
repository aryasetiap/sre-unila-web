import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ExpandableCardEsf = ({ dayTitle, date, summary, location, agendaList }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    // Cek apakah ada data kolom "Meeting Room"
    const hasMeetingRoom = agendaList.some(item => item.length === 3);

    return (
        <motion.div
            layout
            className="w-full max-w-4xl mx-auto my-6 bg-[#EAF4E6] text-[#1D6935] rounded-3xl shadow-md hover:shadow-lg cursor-pointer transition-shadow duration-300"
            onClick={() => setIsExpanded(!isExpanded)}
            initial={{ borderRadius: 24 }}
            whileHover={{ boxShadow: "0 10px 20px rgba(76, 183, 72, 0.3)" }}
        >
            <motion.div className="p-6 md:p-8" layout>
                <motion.div
                    className="relative flex justify-center items-center"
                    layout
                >
                    <motion.h2
                        className="text-3xl md:text-4xl font-bold"
                        layout
                        initial={false}
                    >
                        {dayTitle}
                    </motion.h2>
                    <motion.span
                        className={`absolute right-4 text-[#1D6935] text-3xl`}
                        animate={{ rotate: isExpanded ? 45 : 0 }}
                        transition={{ duration: 0.3 }}
                        layout
                    >
                        +
                    </motion.span>
                </motion.div>

                <motion.div
                    className="mt-2 text-base md:text-lg text-center space-y-1"
                    layout
                >
                    <p className="font-medium">{date}</p>
                    <p>{summary}</p>
                    <p className="italic">{location}</p>
                </motion.div>

                <AnimatePresence initial={false}>
                    {isExpanded && (
                        <motion.div
                            className="mt-6 bg-[#FBFCF7] p-6 md:p-8 rounded-3xl shadow-inner overflow-x-auto"
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.4, ease: "easeInOut" }}
                            layout
                        >
                            <table className="w-full border-collapse border border-[#4CB748] text-black text-sm md:text-base">
                                <thead className="bg-[#4CB748] text-white">
                                    <tr>
                                        <th className="border border-[#4CB748] px-3 py-2 w-[20%]">TIME</th>
                                        <th className="border border-[#4CB748] px-3 py-2">AGENDA</th>
                                        {hasMeetingRoom && (
                                            <th className="border border-[#4CB748] px-3 py-2 w-[30%]">MEETING ROOM</th>
                                        )}
                                    </tr>
                                </thead>
                                <tbody>
                                    {agendaList.map(([time, agenda, room = "-"], index) => (
                                        <tr key={index} className="odd:bg-[#DFF2D8] even:bg-white">
                                            <td className="border border-[#4CB748] px-3 py-2 align-top">{time}</td>
                                            <td className="border border-[#4CB748] px-3 py-2">{agenda}</td>
                                            {hasMeetingRoom && (
                                                <td className="border border-[#4CB748] px-3 py-2">{room}</td>
                                            )}
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>
        </motion.div>
    );
};

export default ExpandableCardEsf;
