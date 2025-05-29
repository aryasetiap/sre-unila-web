import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ExpandableCardEsf = ({ dayTitle, date, summary, location, agendaList }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    // Cek apakah ada data kolom "Meeting Room"
    const hasMeetingRoom = agendaList.some(item => item.length === 3);

    return (
        <motion.div
            layout
            className="w-full max-w-4xl mx-auto my-6 rounded-3xl shadow-md hover:shadow-lg cursor-pointer transition-shadow duration-300"
            style={{
                background: isExpanded
                    ? "rgba(76,183,72,0.10)"
                    : "linear-gradient(90deg, #0B461E 0%, #51C877 100%)"
            }}
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
                        className={`text-3xl md:text-4xl font-bold ${isExpanded ? "text-[#1D6935]" : "text-white"}`}
                        layout
                        initial={false}
                    >
                        {dayTitle}
                    </motion.h2>
                    <motion.span
                        className={`absolute right-4 text-3xl ${isExpanded ? "text-[#1D6935]" : "text-white"}`}
                        animate={{ rotate: isExpanded ? 45 : 0 }}
                        transition={{ duration: 0.3 }}
                        layout
                    >
                        +
                    </motion.span>
                </motion.div>

                <motion.div
                    className={`mt-2 text-base md:text-lg text-center space-y-1 ${isExpanded ? "text-[#1D6935]" : "text-white"}`}
                    layout
                >
                    <p className="font-medium">{date}</p>
                    <p>{summary}</p>
                    <p className="italic">{location}</p>
                </motion.div>

                <AnimatePresence initial={false}>
                    {isExpanded && (
                        <motion.div
                            className="bg-[#FBFCF7] mt-6 p-6 md:p-8 rounded-3xl shadow-inner overflow-x-auto"
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.4, ease: "easeInOut" }}
                            layout
                        >
                            <table className="w-full text-left text-black text-sm md:text-base">
                                <thead>
                                    <tr>
                                        <th className="px-3 py-2 w-[20%] text-[#1D6935] font-bold text-xl md:text-2xl bg-transparent border-none">TIME</th>
                                        <th className="px-3 py-2 text-[#1D6935] font-bold text-xl md:text-2xl bg-transparent border-none">AGENDA</th>
                                        {hasMeetingRoom && (
                                            <th className="px-3 py-2 w-[30%] text-[#1D6935] font-bold text-xl md:text-2xl bg-transparent border-none">MEETING ROOM</th>
                                        )}
                                    </tr>
                                </thead>
                                <tbody>
                                    {agendaList.map(([time, agenda, room = "-"], index) => (
                                        <tr key={index} className="">
                                            <td className="px-3 py-2 align-top border-b border-[#4CB748] bg-transparent">{time}</td>
                                            <td className="px-3 py-2 border-b border-[#4CB748] bg-transparent">{agenda}</td>
                                            {hasMeetingRoom && (
                                                <td className="px-3 py-2 border-b border-[#4CB748] bg-transparent">{room}</td>
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
