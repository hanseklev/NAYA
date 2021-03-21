import React from "react"
import styled from "styled-components"
import { primaryColor } from "../../styles/theme"
import { LeftArrow } from "../left-arrow"

export default function Button({
  primary,
  goBack,
  basket,
  label,
  vipps,
  type,
  color,
  ...props
}) {
  if (primary) return <Primary {...props}>{label}</Primary>

  if (goBack)
    return (
      <GoBackButton {...props}>
        <LeftArrow />
        <span>{label}</span>
      </GoBackButton>
    )

  if (vipps)
    return (
      <button type={type} {...props}>
        <svg
          fill="none"
          height="44"
          viewBox="0 0 210 44"
          width="210"
          xmlns="http://www.w3.org/2000/svg"
          aria-label="Betal med Vipps"
          role="img"
        >
          <path
            d="m0 22c0-12.15026 9.84974-22 22-22h166c12.15 0 22 9.84974 22 22 0 12.1503-9.85 22-22 22h-166c-12.15026 0-22-9.8497-22-22z"
            fill="#ff5b24"
          />
          <g fill="#fff">
            <path d="m32.7131 28.25c2.7822 0 4.4805-1.4092 4.4805-3.7036 0-1.6983-1.2105-2.9629-2.9629-3.1255v-.1626c1.3098-.2078 2.3215-1.4182 2.3215-2.7913 0-2.0053-1.4905-3.2519-3.9656-3.2519h-5.447v13.0349zm-3.2429-11.2192h2.5473c1.4092 0 2.2312.6775 2.2312 1.8427 0 1.1924-.8762 1.8338-2.5293 1.8338h-2.2492zm0 9.4035v-4.0739h2.6196c1.7795 0 2.719.6955 2.719 2.0234 0 1.3369-.9124 2.0505-2.6287 2.0505zm16.2675-.8852c-.3252.7407-1.093 1.1562-2.2041 1.1562-1.4724 0-2.4209-1.0478-2.4751-2.719v-.1174h6.9014v-.7136c0-3.0984-1.6892-4.9683-4.5076-4.9683-2.8635 0-4.6431 1.9963-4.6431 5.167 0 3.1616 1.7525 5.0947 4.6612 5.0947 2.3305 0 3.9836-1.1201 4.3901-2.8996zm-2.2944-5.6187c1.3459 0 2.2312.9485 2.2763 2.448h-4.6521c.0994-1.4814 1.0388-2.448 2.3758-2.448zm7.2795-3.9746v2.4841h-1.5628v1.7434h1.5628v5.4471c0 1.906.9033 2.6648 3.1706 2.6648.4336 0 .8491-.0362 1.1743-.0994v-1.7163c-.271.0271-.4426.0452-.7588.0452-.9394 0-1.3549-.4427-1.3549-1.4273v-4.9141h2.1137v-1.7434h-2.1137v-2.4841zm9.1042 12.4568c1.2917 0 2.3757-.5601 2.9267-1.5176h.1536v1.355h2.1589v-6.7478c0-2.0867-1.4272-3.3152-3.9656-3.3152-2.3486 0-3.9836 1.1021-4.1643 2.8274h2.1138c.2078-.6775.9124-1.0478 1.9421-1.0478 1.2105 0 1.8609.551 1.8609 1.5356v.8491l-2.5474.1536c-2.4028.1355-3.7488 1.1743-3.7488 2.9448 0 1.8066 1.364 2.9629 3.2701 2.9629zm.6594-1.7253c-.9937 0-1.7073-.4969-1.7073-1.346 0-.822.5872-1.2827 1.8428-1.364l2.2312-.1536v.804c0 1.1743-1.0117 2.0596-2.3667 2.0596zm7.1711 1.5627h2.2402v-13.6943h-2.2402zm9.6088 0h2.2402v-6.0071c0-1.2285.822-2.1589 1.9331-2.1589 1.102 0 1.7886.6684 1.7886 1.7615v6.4045h2.177v-6.1697c0-1.1291.7678-1.9963 1.9331-1.9963 1.2014 0 1.8066.6413 1.8066 1.9241v6.2419h2.2312v-6.793c0-2.0505-1.1924-3.27-3.1706-3.27-1.3731 0-2.5113.7046-2.9991 1.7796h-.1535c-.4155-1.0931-1.364-1.7796-2.728-1.7796-1.3099 0-2.3216.6685-2.7461 1.7796h-.1536v-1.5899h-2.1589zm23.0067-2.7009c-.3256.7407-1.0935 1.1562-2.2045 1.1562-1.4725 0-2.4209-1.0478-2.4751-2.719v-.1174h6.9016v-.7136c0-3.0984-1.689-4.9683-4.5078-4.9683-2.8636 0-4.6431 1.9963-4.6431 5.167 0 3.1616 1.7524 5.0947 4.6611 5.0947 2.3308 0 3.9838-1.1201 4.3898-2.8996zm-2.2949-5.6187c1.346 0 2.2309.9485 2.2759 2.448h-4.6516c.0994-1.4814 1.0388-2.448 2.3757-2.448zm10.1429 8.4822c1.373 0 2.511-.6414 3.071-1.7253h.154v1.5627h2.168v-13.6943h-2.24v5.3928h-.154c-.524-1.084-1.644-1.7344-2.999-1.7344-2.493 0-4.065 1.9692-4.065 5.0947 0 3.1346 1.563 5.1038 4.065 5.1038zm.696-8.3286c1.535 0 2.484 1.2375 2.484 3.2339 0 2.0053-.94 3.2339-2.484 3.2339-1.536 0-2.466-1.2105-2.466-3.2339 0-2.0144.939-3.2339 2.466-3.2339z" />
            <path
              clipRule="evenodd"
              d="m184.75 20.0884c-.72-2.7477-2.469-3.8384-4.855-3.8384-1.934 0-4.361 1.0907-4.361 3.7172 0 1.6968 1.173 3.0304 3.085 3.374l1.811.323c1.234.2221 1.584.6869 1.584 1.3132 0 .7071-.761 1.111-1.893 1.111-1.481 0-2.406-.5252-2.551-2.0001l-2.612.4042c.411 2.8483 2.962 4.0204 5.266 4.0204 2.181 0 4.505-1.2528 4.505-3.778 0-1.7174-1.049-2.9696-3.003-3.3337l-1.996-.3633c-1.111-.202-1.481-.7475-1.481-1.2727 0-.6668.72-1.0907 1.708-1.0907 1.255 0 2.139.4239 2.18 1.8179zm-58.075 4.3229 2.715-7.8584h3.188l-4.731 11.6565h-2.366l-4.731-11.6563h3.188zm16.683-4.5249c0 .9292-.74 1.5756-1.604 1.5756s-1.605-.6464-1.605-1.5756c0-.9294.741-1.5756 1.605-1.5756s1.605.6462 1.605 1.5756zm.494 4.1213c-1.07 1.3734-2.201 2.3229-4.197 2.323-2.036 0-3.62-1.2121-4.854-2.9897-.494-.7275-1.255-.889-1.811-.5051-.514.3637-.637 1.1314-.164 1.7982 1.707 2.5656 4.073 4.0602 6.829 4.0602 2.531 0 4.506-1.2119 6.048-3.2322.576-.7473.556-1.515 0-1.9393-.514-.4044-1.275-.2624-1.851.4849zm7.098-1.6568c0 2.384 1.399 3.6367 2.962 3.6367 1.481 0 3.004-1.1719 3.004-3.6367 0-2.4244-1.523-3.5959-2.983-3.5959-1.584 0-2.983 1.1111-2.983 3.5959zm0-4.1815v-1.5964h-2.9v15.677h2.9v-5.576c.967 1.2932 2.222 1.8389 3.641 1.8389 2.654 0 5.246-2.0608 5.246-6.3031 0-4.061-2.695-5.9596-4.999-5.9596-1.831 0-3.086.8281-3.888 1.9192zm13.928 4.1815c0 2.384 1.398 3.6367 2.962 3.6367 1.481 0 3.003-1.1719 3.003-3.6367 0-2.4244-1.522-3.5959-2.983-3.5959-1.584 0-2.983 1.1111-2.983 3.5959zm0-4.1815v-1.5964h-.001-2.9v15.677h2.9v-5.576c.967 1.2932 2.222 1.8389 3.641 1.8389 2.654 0 5.246-2.0608 5.246-6.3031 0-4.061-2.695-5.9596-4.999-5.9596-1.831 0-3.085.8281-3.887 1.9192z"
              fillRule="evenodd"
            />
          </g>
        </svg>
      </button>
    )

  if (basket)
    return (
      <button
        {...props}
        style={{ display: "flex", alignItems: "center", cursor: "pointer" }}
      >
        <svg viewBox="0 0 16 16" width="24px" fill={primaryColor}>
          <title> {"Basket"} </title>{" "}
          <path d="M16 16H0V5h3v1H1v9h14V6h-2V5h3v11z" />
          <path d="M12 9h-1V1H5v8H4V0h8v9z" />
          <path d="M6 5h4v1H6z" />
        </svg>
        {props.quantity && (
          <span
            style={{
              paddingTop: "8px",
              marginLeft: "5px",
              color: primaryColor,
            }}
          >
            {props.quantity}
          </span>
        )}
      </button>
    )
}

const Primary = styled.button`
  background-color: var(--bg-secondary);
  border: solid 1px var(--bg-secondary);
  color: var(--color-text);
  width: 100%;
  padding: 0px 20px;
  height: 48px;
  margin-bottom: 5px;
  font-family: var(--font-primary);
  line-spacing: 1.5;
  font-weight: 500;
  font-size: 16px;
  text-transform: uppercase;
  transition: all 300ms ease;

  ${props => props.bold && "font-weight: bold;"}

  &:hover {
    background-color: var(--color-text);
    color: var(--bg-secondary);
    ${props =>
    props.dark &&
    "background-color: var(--bg-secondary); color: var(--color-text);"}
  }

  &:disabled {
    background-color: lightgrey;
    color: var(--color-text);
  }

  ${props =>
    props.dark &&
    "background-color: var(--color-text); color: var(--bg-secondary); border: solid var(--color-text);"}
`

const GoBackButton = styled.button`
  display: flex;
  justify-content: start;
  align-items: center;
  cursor: pointer;
  transition: all 0.4 ease;

  &:hover {
    font-weight: 800;
  }

  &:focus  {
    outline: dashed 0.5px;
  }
`
