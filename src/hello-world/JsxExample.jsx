// KENAPA JSX?

/*
  - Web dibuat menggunakan HTML, CSS, dan Javascript. Biasanya kita akan menyimpan konten di HTML, desain di CSS dan logika aplikasi di JavaScript. Dan biasanya kita akan simpan di file-file yang terpisah.
  - Tapi saat ini, Web sudah lebih interaktif, seringnya konten HTML ditampilkan berdasarkan logika aplikasi di JavaScript
  - Oleh karena itu, React melakukan logika aplikasi dan membuat konten di satu tempat yang sama yaitu JSX
*/

export default function JsxExample() {
  return (
    <>
      <div className="awesome" style={{ border: "1px solid red" }}>
        <label htmlFor="name">Enter your name:</label>
        <input type="text" id="name" />
      </div>
      <p>Enter yout HTML here</p>
    </>
  )
}

// Mengubah HTML ke JSX
/*
  - Saat mengubah kode HTML ke jSX, kita tidak bisa lakukan semudah Copy Paster kodenya
  - JSX memiliki aturan yang lebih ketat dibandingkan HTML, contohnya saat menggunakan tag element, wajib menggunakan tag tutup
  - misalnya kita tidak bisa menggunakan: <img src="">
  - kita harus gunakan tag tutup ketika menggunakan JSX: <img src=""/>
*/

// Aturan JSX

/*
  - Component hanya boleh mengembalikan satu elemnt, jika ingin mengembalikan beberapa element, kita harus bungkus dalam parent element
  - wajib menutup semua tag element
  - Attribute menggunakan camelCase. Attribute di element JSX akan dikonversi ke variable JavaScript, oleh karena itu nama attribute harus mengikuti cara pembuatan nama variable di JavaScript, yaitu tidak bisa menggunakan - (strip) karena keterbatasan ini, kebanyakan attribute di element JSX akan menggunakan camelCase, contoh className (bukan class-name)
*/

// JSX Converter

/*
  - jika misal kita sudah punya kode HTML, dan ingin mengonversi ke jSX disarankan untuk menggunakan Converter sehingga kita tidak perlu lakukan secara manual lagi: https://transform.tools/html-to-jsx
*/
