// import React from 'react';

// const HasilDiagnosa = ({ hasil, setHasil }) => {
//   return (
//     <div className="bg-white p-6 rounded-lg shadow-lg w-96">
//       <h2 className="text-2xl font-bold text-center mb-4">Hasil Diagnosa</h2>
//       <p className="text-lg text-center">{hasil}</p>

//       <button
//         onClick={() => setHasil(null)}
//         className="w-full bg-gray-600 text-white p-2 rounded-md mt-4"
//       >
//         Coba Lagi
//       </button>
//     </div>
//   );
// };

// export default HasilDiagnosa;


import React from "react";

const HasilDiagnosa = ({ hasil }) => {
  return (
    <div className="max-w-md mx-auto p-4 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold text-center mb-4">Hasil Diagnosa</h1>
      <p className="text-center">
        {hasil === "positif" ? (
          <span className="text-red-600 font-bold">Kemungkinan penyakit jantung</span>
        ) : (
          <span className="text-green-600 font-bold">Tidak ada gejala penyakit jantung</span>
        )}
      </p>
    </div>
  );
};

export default HasilDiagnosa;