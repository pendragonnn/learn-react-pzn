// JavaScript di JSX

/*
  - kadang-kadang, kita ada kasus di mana kita ingin mengakses kode JavaScript di JSX
  - pada kasus ini, kita bisa menggunakan kurung kurawal untuk mengakses kode JavaScript di JSX
*/

// Kurung Kurawal di JSX

/*
  - penggunaan kurung kurawal di JSX hanya bisa dilakukan pada dua lokasi
  - sebagai teks, seprti pada contoh di bawah
  - sebagai nilai atribut pada tag element, misal <img src={location} />
*/

export default function JavascriptInJSX() {
  const text = "Ini disimpan dalam variabel"

  return (
    <>
      {text.toUpperCase()}
      <TextStyleSample />
      <StyleInVariable />
    </>
  )
}

// Kurung Kurawal Double pada JSX

/*
  - pada beberapa attribute, contohnya style. kita bisa menggunakan JavaScript Object sebagai parameter
  - oleh karena itu, kadang sekilas terlihat seperti kurung kurawal double, padahal sebenarnya hanya satu kurung kurawal, dan datanya adalah javascript object
*/

function TextStyleSample() {
  return (
    <h1
      style={{
        color: "green",
        backgroundColor: "blueviolet",
      }}
    >Halo teman-teman</h1>
  )
}

function StyleInVariable() {
  const text = "Blocking Time Rules"
  const style = {
    color: "aqua",
    backgroundColor: "green",
    padding: "12px",
    marginTop: "8px",
    display: "inline",
    borderRadius: "12px",
    position: "absolute",
    top: "0px",
    right: "12px",
    cursor: "pointer",
  }

  return <p style={style}>{text.toUpperCase()}</p>
}
