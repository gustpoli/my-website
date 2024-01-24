import './techCard.css'

type CustomImgProps = {
  src?: string
  alt?: string
  width?: number
  height?: number
}

type props = {
  img?: CustomImgProps
  text?: string
  customClassName?: string
}

export default function TechCard(props: props) {
  return (
    <div
      className={`techCard relative flex flex-col justify-between items-center rounded-md p-4 cursor-pointer ${
        props.customClassName ? props.customClassName : ''
      }`}
      style={{ backgroundColor: 'var(--md-sys-color-surface)' }}
    >
      {props.img && <img {...props.img}></img>}
      {props.text && (
        <span
          className="w-full text-center text-md"
          style={{ color: 'var(--md-sys-color-on-surface)' }}
        >
          {props.text}
        </span>
      )}
    </div>
  )
}
