import Header from '../components/Header/header'
import Button from '@/components/Button/button'

export default function Home() {
  return (
    <main>
      <section className="flex flex-col items-center h-screen">
        <Header></Header>
        <div className="flex flex-col justify-center items-center flex-1 w-screen">
          <div className="w-full lg:container flex flex-col items-center lg:items-start">
            <div className="flex flex-col">
              <span
                className="text-3xl sm:text-6xl md:text-7xl lg:text-8xl 2xl:text-9xl"
                style={{ color: `var(--md-sys-color-on-background)` }}
              >
                Hi, I&apos;m Gustavo
              </span>
              <span
                className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl 2xl:text-8xl"
                style={{ color: `var(--md-sys-color-primary)` }}
              >
                A fullstack web developer
              </span>
              <div className="flex gap-3 md:gap-8 mt-4 md:mt-10">
                <Button
                  type="filled"
                  colors={{
                    background: 'var(--md-sys-color-primary)',
                    color: 'var(--md-sys-color-on-primary)'
                  }}
                  classes="text-sm sm:text-lg md:text-2xl lg:text-3xl 2xl:text-5xl"
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
                  classes="text-sm sm:text-lg md:text-2xl lg:text-3xl 2xl:text-5xl"
                  styles={
                    {
                      /* seus estilos adicionais aqui */
                    }
                  }
                  text="Contact"
                  href="#contact"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
