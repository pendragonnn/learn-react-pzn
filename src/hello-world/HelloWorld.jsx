// COMPONENT
/*
  - Reaact Component mendukung semua elemen HTML dan SVG
  - jadi kita tidak perlu khawatir ketika membuat Component, karena semua element pasti didukung
*/

import JsxExample from "./JsxExample"

export default function HelloWorld() {
  return (
    <div>
      <HeaderHelloWorld />
      <ParagraphHelloWorld />
      <JsxExample />
    </div>
  )
}

// MULTIPLE COMPONENT
/*
  - Sebelumnya kita membuat satu file JSX untuk satu Component
  - Walaupun itu adalah praktek yang baik, tapi bukan berarti itu wajib dilakukan
  - Componenet sebenarnya hanyalah sebuah function yang mengembalikan React Element, oleh karena itu jika kita ingin membuat Component, kita hanya cukup membuat function yang mengembalikan React Element
*/

function HeaderHelloWorld() {
  return (
    <h1>Hello World</h1>
  )
}

function ParagraphHelloWorld() {
  return (
    <p>Selamat Belajar ReactJS bro</p>
  )
}
