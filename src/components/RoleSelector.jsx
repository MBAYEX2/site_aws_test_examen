import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export default function RoleSelector() {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  // Pour fermer la popup avec Échap
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setShowModal(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const goToPractitionner = () => {
    // Redirige vers la page TestPersonaliser (la route "/" contient TestPersonaliser dans ton App.jsx)
    navigate("/TestPersonaliser");
  };

  const openAssociateModal = () => {
    setShowModal(true);
  };

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 py-8">
        <div className="w-full max-w-xl space-y-6">
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8 flex flex-col items-center">
            <h2 className="text-2xl font-semibold mb-4">Choisis ton accès</h2>

            <div className="flex gap-4 w-full justify-center">
              <button
                onClick={goToPractitionner}
                className="flex-1 max-w-xs px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium"
                aria-label="Pratiquer le quiz"
              >
                Practitionner
              </button>

              <button
                onClick={openAssociateModal}
                className="flex-1 max-w-xs px-6 py-3 rounded-lg bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium"
                aria-label="Associate (en développement)"
              >
                Associate
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal simple */}
      {showModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center"
          role="dialog"
          aria-modal="true"
        >
          {/* fond semi-transparent */}
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setShowModal(false)}
            aria-hidden="true"
          />

          {/* boite de dialogue */}
          <div className="relative bg-white rounded-xl shadow-lg max-w-md w-full p-6 mx-4 z-10">
            <h3 className="text-lg font-semibold mb-2">Section en développement</h3>
            <p className="text-sm text-gray-600 mb-4">
              La partie <strong>Associate</strong> est actuellement en cours de développement. Nous travaillons dessus — revient bientôt !
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
    </>
  );
}

