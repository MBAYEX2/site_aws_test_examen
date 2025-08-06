import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import pract2 from "../assets/pract2.webp"; // Image Practitionner
import ac1 from "../assets/ac1.webp"; // Image Associate
import awsOrange from "../assets/aws_orange.png"; // Image de fond

export default function RoleSelector() {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  // Fermer la popup avec Échap
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setShowModal(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const goToPractitionner = () => navigate("/TestPersonaliser");
  const openAssociateModal = () => setShowModal(true);

  return (
    <>
      {/* Fond fixe / parallax : div positionnée en fixed derrière tout */}
      <div
        className="fixed inset-0 -z-10 bg-center bg-cover"
        style={{
          backgroundImage: `url(${awsOrange})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          willChange: "transform",
        }}
        aria-hidden="true"
      />

      {/* Optionnel : overlay sombre pour meilleure lisibilité */}
      <div className="fixed inset-0 -z-9 bg-black/35" aria-hidden="true" />

      {/* Contenu principal (au-dessus du fond) */}
      <div className="min-h-screen flex items-end justify-center px-6 py-9">
        <div className="w-full max-w-2xl space-y-6">
          <div className="bg-white/40 backdrop-blur-sm rounded-2x1 border border-gray-200 shadow-lg p-6 flex flex-col items-center">
            <h2 className="text-2xl font-semibold mb-6 text-gray-900">Choisis ton accès</h2>

            <div className="flex gap-6 w-full justify-center">
              {/* Bloc Practitionner */}
              <div className="flex-1 max-w-xs bg-gray-50 rounded-xl shadow-md p-4 flex flex-col items-center border">
                <button
                  onClick={goToPractitionner}
                  className="w-full px-6 py-3 rounded-lg bg-gray-200 text-gray-800 font-medium transform transition-all duration-200 hover:bg-gray-300 hover:scale-105 hover:shadow-lg"
                >
                  Practitionner
                </button>
                <img src={pract2} alt="Practitionner" className="mt-4 w-32 h-24 object-cover rounded-md shadow-sm" />
              </div>

              {/* Bloc Associate */}
              <div className="flex-1 max-w-xs bg-gray-50 rounded-xl shadow-md p-4 flex flex-col items-center border">
                <button
                  onClick={openAssociateModal}
                  className="w-full px-6 py-3 rounded-lg bg-gray-200 text-gray-800 font-medium transform transition-all duration-200 hover:bg-gray-300 hover:scale-105 hover:shadow-lg"
                >
                  Associate
                </button>
                <img src={ac1} alt="Associate" className="mt-4 w-32 h-24 object-cover rounded-md shadow-sm" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center" role="dialog" aria-modal="true">
          <div className="absolute inset-0 bg-black/40" onClick={() => setShowModal(false)} aria-hidden="true" />
          <div className="relative bg-white rounded-xl shadow-lg max-w-md w-full p-6 mx-4 z-10">
            <h3 className="text-lg font-semibold mb-2">Section en développement</h3>
            <p className="text-sm text-gray-600 mb-4">
              La partie <strong>Associate</strong> est en cours de développement. Reviens bientôt !
            </p>

            <div className="flex justify-end gap-2">
              <button onClick={() => setShowModal(false)} className="px-4 py-2 rounded-md bg-gray-200 hover:bg-gray-300 text-sm">
                Fermer
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
