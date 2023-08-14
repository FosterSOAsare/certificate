import * as React from 'react'

interface StarRatingProps {
  rating: number
  over: number
  containerClassName?: string
  starClassName?: string
}

const StarRating = (props: StarRatingProps) => {
  const fullStars = Math.floor(props.rating)
  const halfStars = String(props.rating).includes('.') ? 1 : 0
  const noStars = props.over - (fullStars + halfStars);

  return (
    <div className={`flex gap-1 items-center ${props.containerClassName}`}>
      {Array(fullStars)
        .fill(0)
        .map((_, index) => (
          <svg
            className={props.starClassName}
            key={index}
            width="12"
            height="11"
            viewBox="0 0 12 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.04894 0.927049C5.3483 0.00573826 6.6517 0.00573993 6.95106 0.927051L7.5716 2.83688C7.70547 3.2489 8.08943 3.52786 8.52265 3.52786H10.5308C11.4995 3.52786 11.9023 4.76748 11.1186 5.33688L9.49395 6.51722C9.14347 6.77187 8.99681 7.22323 9.13068 7.63525L9.75122 9.54508C10.0506 10.4664 8.9961 11.2325 8.21238 10.6631L6.58778 9.48278C6.2373 9.22813 5.7627 9.22814 5.41221 9.48278L3.78761 10.6631C3.0039 11.2325 1.94942 10.4664 2.24878 9.54508L2.86932 7.63526C3.00319 7.22323 2.85653 6.77186 2.50604 6.51722L0.881445 5.33688C0.0977311 4.76748 0.500508 3.52786 1.46923 3.52786H3.47735C3.91057 3.52786 4.29453 3.2489 4.4284 2.83688L5.04894 0.927049Z"
              fill="#E8C302"
            />
          </svg>
        ))}
      {Array(halfStars)
        .fill(0)
        .map((_, index) => (
          <svg
            className={props.starClassName}
            key={index}
            width="12"
            height="11"
            viewBox="0 0 12 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.04894 0.927049C5.3483 0.0057382 6.6517 0.00573985 6.95106 0.92705L7.5716 2.83688C7.70547 3.2489 8.08943 3.52786 8.52265 3.52786H10.5308C11.4995 3.52786 11.9023 4.76748 11.1186 5.33688L9.49395 6.51722C9.14347 6.77187 8.99681 7.22323 9.13068 7.63526L9.75122 9.54508C10.0506 10.4664 8.9961 11.2325 8.21238 10.6631L6.58778 9.48278C6.2373 9.22813 5.7627 9.22813 5.41221 9.48278L3.78761 10.6631C3.0039 11.2325 1.94942 10.4664 2.24877 9.54508L2.86932 7.63526C3.00319 7.22323 2.85653 6.77186 2.50604 6.51722L0.881445 5.33688C0.0977311 4.76748 0.500508 3.52786 1.46923 3.52786H3.47735C3.91057 3.52786 4.29453 3.2489 4.4284 2.83688L5.04894 0.927049Z"
              fill="#D1CFDB"
            />
            <path
              d="M4.0002 3.50017C4.17957 1.45202 5.13434 -0.314522 6.00024 0.500513L6.0002 9.00017C4.43521 10.5345 3.17095 11.3078 2.50024 10.5005C2.00024 10.0005 2.03884 9.77743 3.0002 7.00017C1.13421 5.6023 0.116407 5.01182 0.500236 4.00049C0.965066 3.32755 1.52861 3.4961 4.0002 3.50017Z"
              fill="#E8C302"
            />
          </svg>
        ))}
      {Array(noStars)
        .fill(0)
        .map((_, index) => (
          <svg
            className={props.starClassName}
            key={index}
            width="12"
            height="11"
            viewBox="0 0 12 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.04894 0.927049C5.3483 0.00573826 6.6517 0.00573993 6.95106 0.927051L7.5716 2.83688C7.70547 3.2489 8.08943 3.52786 8.52265 3.52786H10.5308C11.4995 3.52786 11.9023 4.76748 11.1186 5.33688L9.49395 6.51722C9.14347 6.77187 8.99681 7.22323 9.13068 7.63525L9.75122 9.54508C10.0506 10.4664 8.9961 11.2325 8.21238 10.6631L6.58778 9.48278C6.2373 9.22813 5.7627 9.22814 5.41221 9.48278L3.78761 10.6631C3.0039 11.2325 1.94942 10.4664 2.24878 9.54508L2.86932 7.63526C3.00319 7.22323 2.85653 6.77186 2.50604 6.51722L0.881445 5.33688C0.0977311 4.76748 0.500508 3.52786 1.46923 3.52786H3.47735C3.91057 3.52786 4.29453 3.2489 4.4284 2.83688L5.04894 0.927049Z"
              fill="#D1CFDB"
            />
          </svg>
        ))}
    </div>
  )
}

export default StarRating
