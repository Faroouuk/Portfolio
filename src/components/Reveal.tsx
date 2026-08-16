"use client";
import { motion, useReducedMotion } from "motion/react";
export default function Reveal({children,className=""}:{children:React.ReactNode;className?:string}) { const reduced=useReducedMotion(); return <motion.div className={className} initial={reduced?false:{opacity:0,y:24}} whileInView={reduced?{}:{opacity:1,y:0}} viewport={{once:true,amount:.15}} transition={{duration:.55,ease:[.22,1,.36,1]}}>{children}</motion.div>; }
