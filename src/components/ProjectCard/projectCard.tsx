import './projectCard.css'

import { Url } from 'next/dist/shared/lib/router/router'
import Link from 'next/link'

type img = {
  src: string
  srcset?: string
  sizes?: string
  alt?: string
}

type project = {
  name?: string
  techs?: Array<string>
}

type props = {
  href?: Url
  customClassName?: string
  img?: img
  project?: project
}

export default function projectCard(props: props) {
  const classes = `projectCard relative flex flex-col rounded-md overflow-hidden ${props.customClassName}`
  const img = props.img
  const project = props.project

  return (
    <div
      className={classes}
      style={{ backgroundColor: 'var(--md-sys-color-surface-dim)' }}
    >
      {project && (
        <div className="projectCard-infos absolute flex flex-col justify-between p-1 pt-7 sm:p-3 sm:pt-10 w-full h-full text-xs sm:text-sm text-white">
          {project.name && (
            <span
              className=" rounded-2xl p-2 px-3 w-fit text-center"
              style={{ backgroundColor: 'var(--color-surface-transparent)' }}
            >
              {project.name}
            </span>
          )}
          {project.techs && (
            <div className="flex gap-1 sm:gap-2">
              {project.techs.map((tech) => {
                return (
                  <span
                    className=" rounded-2xl p-2 px-3 w-fit text-center"
                    style={{
                      backgroundColor: 'var(--color-surface-transparent)'
                    }}
                    key={tech}
                  >
                    {tech}
                  </span>
                )
              })}
            </div>
          )}
        </div>
      )}
      {props.href ? (
        <Link href={props.href || ''}>
          <div
            className="flex items-center gap-1 p-2 w-full h-[24px]"
            style={{ backgroundColor: 'var(--md-sys-color-surface-container)' }}
          >
            <div
              className=" w-2 h-2 rounded-full"
              style={{ backgroundColor: 'var(--md-sys-color-surface-bright)' }}
            ></div>
            <div
              className=" w-2 h-2 rounded-full"
              style={{ backgroundColor: 'var(--md-sys-color-surface-bright)' }}
            ></div>{' '}
            <div
              className=" w-2 h-2 rounded-full"
              style={{ backgroundColor: 'var(--md-sys-color-surface-bright)' }}
            ></div>
          </div>
          <div
            className="max-w-full max-h-full"
            style={{ backgroundColor: 'var(--md-sys-color-surface-dim)' }}
          >
            {img && (
              <img
                className="w-full h-full object-cover object-left-top"
                {...img}
              />
            )}
          </div>
        </Link>
      ) : (
        <>
          <div
            className="flex items-center gap-1 p-2 w-full h-[24px]"
            style={{ backgroundColor: 'var(--md-sys-color-surface-container)' }}
          >
            <div
              className=" w-2 h-2 rounded-full"
              style={{ backgroundColor: 'var(--md-sys-color-surface-bright)' }}
            ></div>
            <div
              className=" w-2 h-2 rounded-full"
              style={{ backgroundColor: 'var(--md-sys-color-surface-bright)' }}
            ></div>{' '}
            <div
              className=" w-2 h-2 rounded-full"
              style={{ backgroundColor: 'var(--md-sys-color-surface-bright)' }}
            ></div>
          </div>
          <div
            className=" max-w-full max-h-full"
            style={{ backgroundColor: 'var(--md-sys-color-surface-dim)' }}
          >
            {img && (
              <img
                className="w-full h-full object-cover object-left-top"
                {...img}
              />
            )}
          </div>
        </>
      )}
    </div>
  )
}
