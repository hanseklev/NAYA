import React, { useState } from "react"
const ColorPicker = ({ colors, updateCurrentVariation }) => {
  //console.log(colors)

  const { options } = colors.nodes[0]
  const [color, setColor] = useState()

  const buttonStyle = {
    border: "none",
    padding: "0",
    marginRight: "5px",
    backgroundColor: "transparent",
    cursor: "pointer",
  }

  function handleColorChange() {
    updateCurrentVariation(color)
  }

  return (
    <div>
      <p>Velg en farge</p>
      <p>{color}</p>
      {options.map(colorName => (
        <button
          style={buttonStyle}
          key={colorName}
          title={colorName}
          onClick={() => handleColorChange()}
          onMouseOver={() => setColor(colorName)}
          onfocus={() => console.log("hei")}
        >
          <div
            style={{
              width: "48px",
              height: "48px",
              backgroundColor: colorName,
            }}
          ></div>
        </button>
      ))}
    </div>
  )
}

export default ColorPicker
