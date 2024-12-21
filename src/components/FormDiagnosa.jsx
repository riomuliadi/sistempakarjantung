
import { colors } from "@mui/material";
import { blue } from "@mui/material/colors";
      
      import React, { useState } from "react";
      
      const FormDiagnosa = () => {
        // Daftar item diagnosa
        const [checkedItems, setCheckedItems] = useState({});
      
        const items = [
          { id: 1, label: "Demam" },
          { id: 2, label: "Batuk" },
          { id: 3, label: "Sakit Kepala" },
          { id: 4, label: "Mual" },
          { id: 5, label: "Nyeri Otot" },
          { id: 6, label: "Pusing" },
          { id: 7, label: "Sesak Napas" },
          { id: 8, label: "Kehilangan Indra Penciuman" },
          { id: 9, label: "Sakit Perut" },
          { id: 10, label: "Kelelahan" },
          { id: 11, label: "Demam" },
          { id: 12, label: "Batuk" },
          { id: 13, label: "Sakit Kepala" },
          { id: 14, label: "Mual" },
          { id: 15, label: "Nyeri Otot" },
          { id: 16, label: "Pusing" },
          { id: 17, label: "Sesak Napas" },
          { id: 18, label: "Kehilangan Indra Penciuman" },
          { id: 19, label: "Sakit Perut" },
          { id: 20, label: "Kelelahan" },{ id: 1, label: "Demam" },
          { id: 21, label: "Batuk" },
          { id: 22, label: "Sakit Kepala" },
          { id: 23, label: "Mual" },
          { id: 24, label: "Nyeri Otot" },
          { id: 25, label: "Pusing" },
          { id: 26, label: "Sesak Napas" },
          { id: 27, label: "Kehilangan Indra Penciuman" },
          { id: 28, label: "Sakit Perut" },
          { id: 29, label: "Kelelahan" },{ id: 1, label: "Demam" },
          { id: 30, label: "Batuk" },
        ];
      
        const handleCheckboxChange = (id) => {
          setCheckedItems((prev) => ({
            ...prev,
            [id]: !prev[id],
          }));
        };
      
        const handleSubmit = () => {
          // Menampilkan hasil diagnosa berdasarkan checkbox yang dipilih
          const selectedItems = items.filter((item) => checkedItems[item.id]);
          alert(`Gejala yang dipilih: ${selectedItems.map((item) => item.label).join(", ")}`);
        };
      
        return (
          <div className="diagnosa-container" 
          style={{ padding: "20px",
          }}>
            <div
              className="checkbox-grid"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, minmax(200px, 1fr))",
                gap: "10px",
              }}
            >
              {items.map((item) => (
                <div key={item.id} className="checkbox-item">
                  <input
                    type="checkbox"
                    id={`checkbox-${item.id}`}
                    checked={checkedItems[item.id] || false}
                    onChange={() => handleCheckboxChange(item.id)}
                    style={{ marginRight: "10px" }}
                  />
                  <label
                    htmlFor={`checkbox-${item.id}`}
                    style={{ color: "black" }}
                  >
                    {item.label}
                  </label>
                </div>
              ))}
            </div>
            <button
        type="submit"
        style={{
          width: '275px', // Menentukan lebar tombol
          margin: '30px auto', // Memastikan tombol berada di tengah secara horizontal
          display: 'block', // Dibutuhkan untuk properti margin auto
          padding: '10px 20px',
          backgroundColor: 'green',
          color: 'white',
          border: 'none',
          cursor: 'pointer',
          fontSize: '16px',
          borderRadius: '5px',
        }}
      >
        SUBMIT
      </button>
      
          
            {/* <button onClick={handleSubmit} style={{ marginTop: "20px" }}>
              Diagnosa
            </button> */}
          </div>
        );
      };
      
      export default FormDiagnosa;
      