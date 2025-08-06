// src/components/RoleSelector.jsx
import { useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import pract2 from "../assets/pract2.webp";
import ac1 from "../assets/ac1.webp";
import awsOrange from "../assets/aws_orange.png";

export default function RoleSelector() {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const modalRef = useRef(null);

  // Fermer la popup avec Échap
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setShowModal(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Fermer modal si clic à l'extérieur
  useEffect(() => {
    const onClickOutside = (e) => {
      if (showModal && modalRef.current && !modalRef.current.contains(e.target)) {
        setShowModal(false);
      }
    };
    window.addEventListener("mousedown", onClickOutside);
    return () => window.removeEventListener("mousedown", onClickOutside);
  }, [showModal]);

  const goToPractitionner = () => navigate("/test-personalise");
  const openAssociateModal = () => setShowModal(true);

  // Variants
  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.25, // délai plus long entre chaque élément
        delayChildren: 0.3,
      },
    },
  };

  const titleVariant = {
    hidden: { opacity: 0, scale: 0.9 },
    show: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const cardLeftVariant = {
    hidden: { opacity: 0, x: -60 },
    show: { opacity: 1, x: 0, transition: { duration: 0.9, ease: "easeOut" } },
  };

  const cardRightVariant = {
    hidden: { opacity: 0, x: 60 },
    show: { opacity: 1, x: 0, transition: { duration: 0.9, ease: "easeOut" } },
  };

  return (
    <div
      className="min-h-screen flex items-end justify-center bg-center bg-cover relative"
      style={{ backgroundImage: `url(${awsOrange})` }}
    >
      <div className="absolute inset-0 bg-black/50 -z-10" />

      <div className="relative z-10 w-full max-w-2xl px-6 py-10">
        <div className="bg-white/80 backdrop-blur-sm rounded-xl border border-gray-200 shadow-lg p-6 flex flex-col items-center">
          {/* Titre animé */}
          <motion.h2
            className="text-2xl font-semibold mb-6 text-gray-900"
            variants={titleVariant}
            initial="hidden"
            animate="show"
          >
            Choisis ton accès
          </motion.h2>

          {/* Cartes animées */}
          <motion.div
            className="flex gap-6 w-full justify-center flex-col md:flex-row"
            variants={containerVariants}
            initial="hidden"
            animate="show"
          >
            {/* Practitionner */}
            <motion.div
              className="flex-1 max-w-xs bg-white rounded-xl shadow-md p-4 flex flex-col items-center border"
              variants={cardLeftVariant}
            >
              <img
                src={pract2}
                alt="Practitionner"
                className="mt-2 w-40 h-28 object-cover rounded-md shadow-sm"
              />
              <button
                onClick={goToPractitionner}
                className="mt-4 w-full px-6 py-3 rounded-lg bg-orange-500 text-black font-medium transform transition duration-200 hover:scale-[1.03] hover:shadow-lg"
              >
                Practitionner
              </button>
            </motion.div>

            {/* Associate */}
            <motion.div
              className="flex-1 max-w-xs bg-white rounded-xl shadow-md p-4 flex flex-col items-center border"
              variants={cardRightVariant}
            >
              <img
                src={ac1}
                alt="Associate"
                className="mt-2 w-40 h-28 object-cover rounded-md shadow-sm"
              />
              <button
                onClick={openAssociateModal}
                className="mt-4 w-full px-6 py-3 rounded-lg bg-gray-200 text-gray-800 font-medium transform transition duration-200 hover:scale-[1.03] hover:shadow-lg"
              >
                Associate
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
          <div className="absolute inset-0 bg-black/40" />
          <div
            ref={modalRef}
            className="relative bg-white rounded-xl shadow-lg max-w-md w-full p-6 mx-4 z-10"
          >
            <h3 className="text-lg font-semibold mb-2">Section en développement</h3>
            <p className="text-sm text-gray-600 mb-4">
              La partie <strong>Associate</strong> est en cours de développement. Reviens bientôt !
            </p>
            <div className="flex justify-end gap-2">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 rounded-md bg-gray-200 hover:bg-gray-300 text-sm"
              >
                Fermer
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
