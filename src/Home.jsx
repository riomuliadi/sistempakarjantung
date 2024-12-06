import { useState } from "react";
import FormDiagnosa from "./components/FormDiagnosa";
import HasilDiagnosa from "./components/HasilDiagnosa";

function Home() {
  const [hasilDiagnosa, setHasilDiagnosa] = useState(null);

  const diagnosaPenyakit = (gejala) => {
    // Logika diagnosa sederhana berdasarkan gejala
    const gejalaPositif = Object.values(gejala).filter(Boolean).length;
    const hasil = gejalaPositif >= 3 ? "positif" : "negatif";
    setHasilDiagnosa(hasil);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      {hasilDiagnosa ? (
        <HasilDiagnosa hasil={hasilDiagnosa} />
      ) : (
        <FormDiagnosa onDiagnose={diagnosaPenyakit} />
      )}
    </div>
  );
}

export default Home;