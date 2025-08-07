import { useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import awsBackground from "../assets/aws_orange.png";
import practImage from "../assets/pract2.webp"; // ✅ Image Practitionner
import associateImage from "../assets/ac1.webp"; // ✅ Image Associate

export default function RoleSelector() {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const modalRef = useRef(null);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setShowModal(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

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

  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.25,
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

  const overlayVariant = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.25 } },
    exit: { opacity: 0, transition: { duration: 0.2 } },
  };

  const modalVariant = {
    hidden: { opacity: 0, scale: 0.96, y: 10 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.35, ease: "easeOut" } },
    exit: { opacity: 0, scale: 0.96, y: 10, transition: { duration: 0.2, ease: "easeIn" } },
  };

  return (
    <div
      className="min-h-screen flex items-end justify-center bg-cover bg-center relative"
      style={{ backgroundImage: `url(${awsBackground})` }}
    >
      <div className="relative z-10 w-full max-w-2xl px-6 py-10">
        <div className="bg-white/80 backdrop-blur-sm rounded-xl border border-gray-200 shadow-lg p-6 flex flex-col items-center">
          <motion.h2
            className="text-2xl font-semibold mb-6 text-gray-900"
            variants={titleVariant}
            initial="hidden"
            animate="show"
          >
            Choisis ton accès
          </motion.h2>

          <motion.div
            className="flex gap-6 w-full justify-center flex-col md:flex-row"
            variants={containerVariants}
            initial="hidden"
            animate="show"
          >
            {/* Practitionner Card */}
            <motion.div
              className="flex-1 max-w-xs bg-white rounded-xl shadow-md p-4 flex flex-col items-center border"
              variants={cardLeftVariant}
            >
              {/* ✅ Image Practitionner */}
              <img src={practImage} alt="Practitionner" className="w-32 h-24 object-contain mb-3" />

              <div className="w-40 h-6 text-center text-gray-700 font-medium">Practitionner</div>

              <button
                onClick={goToPractitionner}
                className="mt-4 w-full px-6 py-3 rounded-lg bg-orange-500 text-black font-medium transform transition duration-200 hover:scale-[1.03] hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-orange-200"
                aria-label="Commencer le test Practitionner"
              >
                Commencer
              </button>
            </motion.div>

            {/* Associate Card */}
            <motion.div
              className="flex-1 max-w-xs bg-white rounded-xl shadow-md p-4 flex flex-col items-center border"
              variants={cardRightVariant}
            >
              {/* ✅ Image Associate */}
              <img src={associateImage} alt="Associate" className="w-32 h-24 object-contain mb-3" />

              <div className="w-40 h-6 text-center text-gray-700 font-medium">Associate</div>

              <button
                onClick={openAssociateModal}
                className="mt-4 w-full px-6 py-3 rounded-lg bg-gray-200 text-gray-800 font-medium transform transition duration-200 hover:scale-[1.03] hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-gray-200"
              >
                Commencer
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center px-4"
            role="dialog"
            aria-modal="true"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={overlayVariant}
          >
            <motion.div
              className="absolute inset-0 bg-black/40"
              variants={overlayVariant}
              aria-hidden="true"
            />
            <motion.div
              ref={modalRef}
              className="relative bg-white rounded-xl shadow-lg max-w-md w-full p-6 mx-4 z-10"
              variants={modalVariant}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <h3 className="text-lg font-semibold mb-2">Section en développement</h3>
              <p className="text-sm text-gray-600 mb-4">
                La partie <strong>Associate</strong> est en cours de développement. Reviens bientôt !
              </p>
              <div className="flex justify-end gap-2">
                <button
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 rounded-md bg-gray-200 hover:bg-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-gray-300"
                >
                  Fermer
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
