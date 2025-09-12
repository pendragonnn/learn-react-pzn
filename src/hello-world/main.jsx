import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import HelloWorld from "./HelloWorld";

// untuk menampilkan component, diperlukan instance dari React Root
// kita bisa membuat React Root menggunakan createRoot(element)
createRoot(document.getElementById("root")).
// selanjutnya untuk menampilkan component di React Root, kita bisa gunakan method render (component)  
  render(
    <StrictMode>
      {/* untuk membantu mencari masalah saat development, React menyediakan component StrictMode */}
      {/* kita bisa mengunakan StrictMode untuk menampilkan komponen di Root */}
      <HelloWorld />
    </StrictMode>
  )