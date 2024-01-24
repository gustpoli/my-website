import Link from 'next/link'
import Button from '@/components/Button/button'
import ProjectCard from '@/components/ProjectCard/projectCard'
import TechCard from '@/components/TechCard/techCard'

export default function Home() {
  return (
    <main className=" min-h-[100vh]">
      <section id="hero" className="flex flex-col items-center min-h-screen ">
        <div className="relative flex flex-col justify-center items-center flex-1 w-full">
          <div className="w-full lg:container flex flex-col items-center lg:items-start p-3 lg:ps-[160px]">
            <div className="flex flex-col">
              <span
                className="text-5xl sm:text-7xl md:text-7xl lg:text-8xl 2xl:text-8xl"
                style={{ color: `var(--md-sys-color-on-background)` }}
              >
                Hi, I&apos;m Gustavo
              </span>
              <span
                className="text-2xl sm:text-5xl md:text-5xl lg:text-6xl 2xl:text-7xl"
                style={{ color: `var(--md-sys-color-primary)` }}
              >
                A fullstack web developer
              </span>
              <div className="flex gap-3 mt-4">
                <Button
                  type="filled"
                  colors={{
                    background: 'var(--md-sys-color-primary)',
                    color: 'var(--md-sys-color-on-primary)'
                  }}
                  classes="text-md sm:text-lg md:text-2xl lg:text-3xl"
                  styles={
                    {
                      /* seus estilos adicionais aqui */
                    }
                  }
                  text="See Work"
                  href="#projects"
                />
                <Button
                  type="outlined"
                  colors={{
                    background: 'var(--md-sys-color-primary)',
                    color: 'var(--md-sys-color-primary)'
                  }}
                  classes="text-md sm:text-lg md:text-2xl lg:text-3xl"
                  styles={{}}
                  text="Contact"
                  href="#contact"
                />
              </div>
            </div>
          </div>
          <Link href={'#about'} scroll={true} className="absolute bottom-[10%]">
            <span
              className="material-symbols-outlined text-xl"
              style={{ color: `var(--md-sys-color-on-background)` }}
            >
              arrow_circle_down
            </span>
          </Link>
        </div>
      </section>
      <section
        id="about"
        className="flex flex-col justify-center items-center min-h-screen lg:px-[160px]"
      >
        <div className="w-full lg:container flex flex-col items-center gap-y-16 p-3">
          <div className="flex flex-col items-center">
            <span
              className="text-4xl md:text-5xl"
              style={{ color: 'var(--md-sys-color-on-background)' }}
            >
              A little{' '}
              <span style={{ color: 'var(--md-sys-color-primary)' }}>
                about me
              </span>
            </span>
            <span
              className="text-xl md:text-2xl"
              style={{ color: 'var(--md-sys-color-secondary)' }}
            >
              Click{' '}
              <Link href="/About">
                <u>here</u>
              </Link>{' '}
              to know more!
            </span>
          </div>
          <div className="flex-1 w-full flex flex-col gap-16 items-center md:flex-row">
            <div className="flex-1 flex justify-center w-full">
              <div
                className=" rounded w-full aspect-square"
                style={{ backgroundColor: 'var(--md-sys-color-surface)' }}
              ></div>
            </div>
            <div className="flex-1 w-full flex justify-center items-center">
              <div className="flex flex-col gap-2 w-full md:w-full">
                <p
                  className=" text-lg md:text-sm lg:text-xl text-pretty"
                  style={{ color: 'var(--md-sys-color-on-background)' }}
                >
                  Hello! I&apos;m{' '}
                  <span style={{ color: 'var(--md-sys-color-primary)' }}>
                    Gustavo Policarpo R. Schuaste
                  </span>
                  , a{' '}
                  <span style={{ color: 'var(--md-sys-color-primary)' }}>
                    full stack web developer
                  </span>
                  . Whether you&apos;re here to explore my work, discuss
                  potential collaborations, or simply connect, I&apos;m thrilled
                  to engage in a meaningful chat.
                </p>
                <div></div>
                <Button
                  type="filled"
                  colors={{
                    background: 'var(--md-sys-color-primary)',
                    color: 'var(--md-sys-color-on-primary)'
                  }}
                  classes="w-fit text-md sm:text-lg md:text-md lg:text-lg 2xl:text-lg"
                  styles={
                    {
                      /* seus estilos adicionais aqui */
                    }
                  }
                  text="My Curriculum"
                  href="/"
                />{' '}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        id="projects"
        className="flex flex-col justify-center items-center min-h-screen lg:px-[160px]"
      >
        <div className="lg:container flex flex-col items-center w-full gap-y-16 p-3">
          <div className="flex flex-col items-center">
            {' '}
            <span
              className="text-4xl md:text-5xl"
              style={{ color: 'var(--md-sys-color-on-background)' }}
            >
              Some of my{' '}
              <span style={{ color: 'var(--md-sys-color-primary)' }}>work</span>
            </span>
            <span
              className="text-xl md:text-2xl"
              style={{ color: 'var(--md-sys-color-secondary)' }}
            >
              <span style={{ color: 'var(--md-sys-color-primary)' }}>
                Hover
              </span>{' '}
              for more information!
            </span>
          </div>
          <div className="flex flex-col md:flex-row justify-center gap-5 w-full">
            <ProjectCard
              img={{
                src: '/assets/images/siteImobiliario.png',
                alt: 'Foto de um projeto que consiste em um site imobiliário configuravel e editavel através de um painel'
              }}
              project={{
                name: 'Site Imobiliário editável por painel',
                techs: ['HTML', 'CSS', 'Bootstrap', 'JS', 'PHP']
              }}
              customClassName="flex-1 aspect-[16/10]"
            ></ProjectCard>
            <div className="flex-1  flex flex-col gap-5">
              <ProjectCard customClassName=" flex-1 aspect-[16/10]"></ProjectCard>
              <ProjectCard customClassName="  flex-1 aspect-[16/10]"></ProjectCard>
            </div>
          </div>
          <Link
            href="/Portfolio"
            className=" text-center text-lg"
            style={{ color: 'var(--md-sys-color-on-background)' }}
          >
            Click <u>here</u> too see more!
          </Link>
        </div>
      </section>
      <section
        id="skills"
        className="flex flex-col justify-center items-center min-h-[50vh] lg:px-[160px]"
      >
        <div className="lg:container flex flex-col items-center w-full gap-y-16 p-3">
          <div className="flex flex-col items-center text-center">
            <span
              className="text-4xl md:text-5xl"
              style={{ color: 'var(--md-sys-color-on-background)' }}
            >
              My{' '}
              <span style={{ color: 'var(--md-sys-color-primary)' }}>
                tech skill
              </span>{' '}
              set
            </span>
            <span
              className="text-xl md:text-2xl"
              style={{ color: 'var(--md-sys-color-secondary)' }}
            >
              Overview of some of my knowlegde
            </span>
          </div>
          <div className="flex justify-center flex-wrap gap-4 w-full">
            <TechCard
              img={{
                src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/512px-HTML5_Badge.svg.png?20110131171049',
                width: 85,
                height: 100
              }}
              text="HTML"
              customClassName=" max-w-[125px] max-h-[175px] min-w-[125px] min-h-[175px]"
            ></TechCard>
            <TechCard
              img={{
                src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/512px-CSS3_logo.svg.png?20210705212817',
                width: 85,
                height: 100
              }}
              text="CSS"
              customClassName=" max-w-[125px] max-h-[175px] min-w-[125px] min-h-[175px]"
            ></TechCard>
            <TechCard
              img={{
                src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/512px-Unofficial_JavaScript_logo_2.svg.png?20141107110902',
                width: 85,
                height: 100
              }}
              text="JavaScript"
              customClassName=" max-w-[125px] max-h-[175px] min-w-[125px] min-h-[175px]"
            ></TechCard>
            <TechCard
              img={{
                src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Antu_php.svg/512px-Antu_php.svg.png?20160706125045',
                width: 85,
                height: 100
              }}
              text="PHP"
              customClassName=" max-w-[125px] max-h-[175px] min-w-[125px] min-h-[175px]"
            ></TechCard>
            <TechCard
              img={{
                src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Antu_mysql-workbench.svg/640px-Antu_mysql-workbench.svg.png',
                width: 85,
                height: 100
              }}
              text="MySQL"
              customClassName=" max-w-[125px] max-h-[175px] min-w-[125px] min-h-[175px]"
            ></TechCard>
            <TechCard
              img={{
                src: 'https://cdn.icon-icons.com/icons2/2429/PNG/512/figma_logo_icon_147289.png',
                width: 85,
                height: 100
              }}
              text="Figma"
              customClassName=" max-w-[125px] max-h-[175px] min-w-[125px] min-h-[175px]"
            ></TechCard>
          </div>
        </div>
      </section>
      <section
        id="contact"
        className="flex flex-col justify-center items-center min-h-[50vh]"
      >
        <div className="lg:container flex flex-col justify-center items-center gap-y-16 p-3 w-full">
          <div
            className="flex flex-col sm:flex-row gap-12 rounded-md p-8 sm:p-16 aspect-[10/5]"
            style={{
              width: 'min(750px, 100%)',
              backgroundColor: 'var(--md-sys-color-primary-container)'
            }}
          >
            <div className=" flex-1 flex flex-col justify-center gap-4">
              <span
                className=" font-medium text-3xl"
                style={{
                  color: 'var(--md-sys-color-on-primary-container)'
                }}
              >
                Fell free to get in touch!
              </span>
              <p
                className=" leading-tight	 font-light"
                style={{
                  color: 'var(--md-sys-color-on-primary-container)'
                }}
              >
                Interested in reaching out? Whether you&apos;re here to discuss
                potential collaborations, explore my portfolio, or just say hi,
                feel free to send me a message. I&apos;m always open to new
                conversations and opportunities.
              </p>
              <Button
                type="filled"
                colors={{
                  background: 'var(--md-sys-color-primary)',
                  color: 'var(--md-sys-color-on-primary)'
                }}
                classes="max-w-fit font-medium text-lg"
                styles={
                  {
                    /* seus estilos adicionais aqui */
                  }
                }
                text="Message me"
                href="/Contacts"
              />
            </div>
            <div
              className="flex justify-start sm:flex-col sm:justify-center gap-6 h-100"
              style={{
                color: 'var(--md-sys-color-on-primary-container)'
              }}
            >
              <a
                href="https://api.whatsapp.com/send?phone=5551981205461"
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_63_334)">
                    <path
                      d="M19.932 4.02234C17.9145 2.00484 15.1275 0.756836 12.0488 0.756836C5.89202 0.756836 0.900024 5.74809 0.900024 11.9056C0.900024 13.9546 1.45277 15.8738 2.41652 17.5238L2.38802 17.4713L0.806274 23.2478L6.71552 21.6976C8.25378 22.5518 10.089 23.0543 12.042 23.0543H12.0465C18.2033 23.0521 23.193 18.0601 23.193 11.9033C23.193 8.82609 21.9465 6.04059 19.9313 4.02309L19.932 4.02234ZM12.0465 21.1711H12.0428C10.3035 21.1711 8.67527 20.6911 7.28552 19.8563L7.32753 19.8796L6.98927 19.6793L3.48302 20.5996L4.41827 17.1803L4.19777 16.8301C3.30902 15.4336 2.78102 13.7318 2.78102 11.9063C2.78102 6.78984 6.92928 2.64159 12.0458 2.64159C17.1623 2.64159 21.3105 6.78984 21.3105 11.9063C21.3105 17.0228 17.1638 21.1711 12.0465 21.1711ZM17.1285 14.2328C16.8503 14.0933 15.4808 13.4206 15.2258 13.3268C14.97 13.2338 14.784 13.1881 14.598 13.4671C14.4135 13.7453 13.8795 14.3723 13.7168 14.5583C13.5548 14.7451 13.3913 14.7676 13.113 14.6288C12.2505 14.2793 11.5095 13.8136 10.8653 13.2398L10.8728 13.2466C10.2735 12.6916 9.75977 12.0563 9.34502 11.3558L9.32402 11.3168C9.16202 11.0386 9.30677 10.8878 9.44552 10.7491C9.57077 10.6246 9.72452 10.4236 9.86327 10.2616C9.97277 10.1273 10.0665 9.97359 10.1378 9.80859L10.1423 9.79584C10.1745 9.73059 10.1933 9.65484 10.1933 9.57384C10.1933 9.47559 10.1655 9.38409 10.1175 9.30609L10.119 9.30834C10.0485 9.16884 9.49202 7.79784 9.26027 7.23984C9.03377 6.69684 8.80352 6.77109 8.63327 6.76209C8.47127 6.75459 8.28527 6.75309 8.09927 6.75309C7.80302 6.76059 7.53977 6.89409 7.35827 7.10034L7.35752 7.10184C6.75602 7.67259 6.38252 8.47734 6.38252 9.36909C6.38252 9.38859 6.38252 9.40884 6.38327 9.42834V9.42534C6.48152 10.5256 6.89402 11.5133 7.52852 12.3181L7.51952 12.3068C8.72252 14.0911 10.326 15.5183 12.2078 16.4798L12.2783 16.5121C12.6893 16.6981 13.2158 16.8968 13.7543 17.0671L13.866 17.0978C14.1975 17.2028 14.5793 17.2636 14.9753 17.2636C15.2025 17.2636 15.426 17.2433 15.642 17.2051L15.6188 17.2081C16.4205 17.0408 17.0858 16.5571 17.4915 15.8963L17.4983 15.8836C17.622 15.6091 17.694 15.2888 17.694 14.9521C17.694 14.8133 17.682 14.6776 17.6588 14.5456L17.661 14.5598C17.592 14.4436 17.406 14.3746 17.127 14.2343L17.1285 14.2328Z"
                      fill="#B2CBD2"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_63_334">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </a>
              <a
                href="https://www.instagram.com/gustpoli/"
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17 2H7C4.23858 2 2 4.23858 2 7V17C2 19.7614 4.23858 22 7 22H17C19.7614 22 22 19.7614 22 17V7C22 4.23858 19.7614 2 17 2Z"
                    stroke="#B2CBD2"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M16 11.3701C16.1234 12.2023 15.9813 13.0523 15.5938 13.7991C15.2063 14.5459 14.5932 15.1515 13.8416 15.5297C13.0901 15.908 12.2385 16.0397 11.4078 15.906C10.5771 15.7723 9.80977 15.3801 9.21485 14.7852C8.61993 14.1903 8.22774 13.4229 8.09408 12.5923C7.96042 11.7616 8.09208 10.91 8.47034 10.1584C8.8486 9.40691 9.4542 8.7938 10.201 8.4063C10.9478 8.0188 11.7978 7.87665 12.63 8.00006C13.4789 8.12594 14.2649 8.52152 14.8717 9.12836C15.4785 9.73521 15.8741 10.5211 16 11.3701Z"
                    stroke="#B2CBD2"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M17.5 6.5H17.51"
                    stroke="#B2CBD2"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
              <a
                href="mailto:gustavopolicarporsch@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z"
                    stroke="#B2CBD2"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M22 6L12 13L2 6"
                    stroke="#B2CBD2"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
              <a
                href="https://github.com/gustpoli"
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_60_245)">
                    <path
                      d="M9 18.9999C4 20.4999 4 16.4999 2 15.9999M16 21.9999V18.1299C16.0375 17.6531 15.9731 17.1737 15.811 16.7237C15.6489 16.2737 15.3929 15.8634 15.06 15.5199C18.2 15.1699 21.5 13.9799 21.5 8.51994C21.4997 7.12376 20.9627 5.78114 20 4.76994C20.4559 3.54844 20.4236 2.19829 19.91 0.999938C19.91 0.999938 18.73 0.649938 16 2.47994C13.708 1.85876 11.292 1.85876 9 2.47994C6.27 0.649938 5.09 0.999938 5.09 0.999938C4.57638 2.19829 4.54414 3.54844 5 4.76994C4.03013 5.78864 3.49252 7.1434 3.5 8.54994C3.5 13.9699 6.8 15.1599 9.94 15.5499C9.611 15.8899 9.35726 16.2953 9.19531 16.7399C9.03335 17.1844 8.96681 17.658 9 18.1299V21.9999"
                      stroke="#B2CBD2"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_60_245">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/gustavo-policarpo-ricardo-schuaste-6a365b239"
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8Z"
                    stroke="#B2CBD2"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M6 9H2V21H6V9Z"
                    stroke="#B2CBD2"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z"
                    stroke="#B2CBD2"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
