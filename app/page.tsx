'use client'

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { BookUser, Boxes, BrainCircuit, Gem, Network, PencilRuler } from 'lucide-react'
import Link from "next/link"
import { useCallback } from "react"
import type { Engine } from "tsparticles-engine"
import Particles from "react-tsparticles"
import { loadTrianglesPreset } from "tsparticles-preset-triangles"

const ENROLL_LINK = "https://www.udemy.com/course/opanovuemo-react/?couponCode=350BAEC300A5D4680059"

function TechBadge({ name }: { name: string }) {
  return <Badge className="text-sm">{name}</Badge>
}

export default function LandingPage() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadTrianglesPreset(engine)
  }, [])

  return (
    <>
      <header className="sticky top-0 px-4 lg:px-6 h-14 flex items-center bg-gray-900 shadow-md z-50">
        <Link href="/" className="text-white font-bold text-base sm:text-lg truncate">
          🇺🇦 Опановуємо React
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium text-white hover:underline underline-offset-4 whitespace-nowrap" href={ENROLL_LINK}>
            Купити Курс
          </Link>
        </nav>
      </header>

      <main className="flex-1">
        <section className="relative w-full py-8 sm:py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-orange-400 via-orange-300 to-amber-200">
          <div style={{ clipPath: 'inset(0)' }} className="absolute inset-0">
            <div className="relative w-full h-full">
              <Particles
                id="tsparticles"
                init={particlesInit}
                options={{
                  preset: "triangles",
                  background: {
                    opacity: 0
                  },
                  particles: {
                    color: {
                      value: "#FFFFFF"
                    },
                    opacity: {
                      value: 0.5,
                    },
                    links: {
                      opacity: 0.1,
                      color: "#FFFFFF",
                    },
                    move: {
                      enable: true,
                      speed: 0.5,
                      direction: "none",
                      random: false,
                      straight: false,
                      outModes: "bounce",
                      attract: {
                        enable: false,
                        rotateX: 600,
                        rotateY: 1200
                      }
                    },
                    number: {
                      value: 100,
                      density: {
                        enable: true,
                        value_area: 800
                      }
                    }
                  }
                }}
                className="absolute inset-0"
              />
            </div>
          </div>
          <div className="container px-4 md:px-6 mx-auto relative z-10">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-2xl sm:text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-gray-900">
                  Опануйте всі тонкощі розробки на React
                </h1>
                <p className="mx-auto max-w-[700px] text-base sm:text-lg text-gray-800 md:text-xl">
                  Ексклюзивний всеохоплюючий Udemy курс українською!
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 sm:space-x-4">
                <Button asChild size="lg" className="text-base sm:text-lg">
                  <Link href={ENROLL_LINK}>Купити зі знижкою!</Link>
                </Button>
                <Button variant="outline" asChild size="lg" className="text-base sm:text-lg">
                  <Link href="#features">Дізнатися більше</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="w-full py-8 sm:py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6 mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-6 sm:mb-8">
              Чому саме цей курс?
            </h2>
            <div className="grid gap-6 sm:gap-8 md:gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-items-center">
              <Card>
                <CardContent className="flex flex-col items-center space-y-2 p-4 sm:p-6">
                  <Gem strokeWidth={1} className="h-12 w-12 sm:h-14 sm:w-14" />
                  <h3 className="text-lg sm:text-xl font-bold">Ексклюзивний Контент</h3>
                  <p className="text-center text-gray-500 dark:text-gray-400">
                    Ви отримаєте доступ до Github репозиторію зі спеціально розробленими прикладами.
                    Весь <strong>контент курсу унікальний</strong> і оновлюється з часом.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center space-y-2 p-6">
                  <PencilRuler strokeWidth={1} className="h-14 w-14" />
                  <h3 className="text-xl font-bold">Практичний Підхід</h3>
                  <p className="text-center text-gray-500 dark:text-gray-400">
                    Від "Hello, world!" до складних концепцій - всі уроки побудовані на реальних прикладах.
                    Курс включає <strong>26 інтерактивних завдань</strong>, які можна виконувати прямо в браузері.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center space-y-2 p-6">
                  <Network strokeWidth={1} className="h-14 w-14" />
                  <h3 className="text-xl font-bold">Структуровані Уроки</h3>
                  <p className="text-center text-gray-500 dark:text-gray-400">
                    Кожна лекція і практичне завдання ретельно сплановані та структуровані, щоб ви могли легко і швидко <strong>опанувати React</strong>.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center space-y-2 p-6">
                  <BookUser strokeWidth={1} className="h-14 w-14" />
                  <h3 className="text-xl font-bold">Досвідчений Викладач</h3>
                  <p className="text-center text-gray-500 dark:text-gray-400">
                    Маючи за плечима 7+ років роботи з React, автор ділиться своїми <strong>секретами та найкращими практиками</strong>.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center space-y-2 p-6">
                  <BrainCircuit strokeWidth={1} className="h-14 w-14" />
                  <h3 className="text-xl font-bold">Глибоке Розуміння</h3>
                  <p className="text-center text-gray-500 dark:text-gray-400">
                    Ви не будете тупо запам'ятовувати синтаксис та API. Ви навчитеся <strong>думати у стилі React</strong> та будувати масштабовані системи.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center space-y-2 p-6">
                  <Boxes strokeWidth={1} className="h-14 w-14" />
                  <h3 className="text-xl font-bold">Актуальні Технології</h3>
                  <p className="text-center text-gray-500 dark:text-gray-400">
                    Курс підготує вас до роботи з <strong>найактуальнішим стеком</strong> технологій.
                    React 19, Hooks, Typescript, TanStack Query, Redux та багато іншого.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="tech-stack" className="w-full py-8 sm:py-12 md:py-24 lg:py-32 dark:bg-gray-800">
          <div className="container px-4 md:px-6 mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-6 sm:mb-8">
              Стек технологій
            </h2>
            <div className="grid gap-4 sm:gap-6 md:gap-8 grid-cols-1 md:grid-cols-3 max-w-5xl mx-auto">
              <Card className="bg-gradient-to-b from-blue-500 to-blue-100">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-white text-center">Core</h3>
                  <div className="flex flex-wrap justify-center gap-2 mt-4">
                    <TechBadge name="JavaScript" />
                    <TechBadge name="TypeScript" />
                    <TechBadge name="React" />
                    <TechBadge name="Vite" />
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-b from-purple-500 to-purple-100">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-white mb-4 text-center">State Management</h3>
                  <div className="flex flex-wrap justify-center gap-2 mt-4">
                    <TechBadge name="Context + useReducer" />
                    <TechBadge name="Redux + Rematch" />
                    <TechBadge name="Zustand" />
                    <TechBadge name="Recoil" />
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-b from-green-500 to-green-100">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-white mb-4 text-center">Data Fetching</h3>
                  <div className="flex flex-wrap justify-center gap-2 mt-4">
                    <TechBadge name="fetch" />
                    <TechBadge name="Axios" />
                    <TechBadge name="React Query" />
                    <TechBadge name="SWR" />
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-b from-orange-500 to-orange-100">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-white mb-4 text-center">Testing</h3>
                  <div className="flex flex-wrap justify-center gap-2 mt-4">
                    <TechBadge name="Jest" />
                    <TechBadge name="Vitest" />
                    <TechBadge name="React Testing Library" />
                    <TechBadge name="Storybook" />
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-b from-yellow-500 to-yellow-100">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-white text-center">Tools</h3>
                  <div className="flex flex-wrap justify-center gap-2 mt-4">
                    <TechBadge name="Git" />
                    <TechBadge name="VSCode" />
                    <TechBadge name="ESLint" />
                    <TechBadge name="Prettier" />
                    <TechBadge name="Husky" />
                    <TechBadge name="Thunder Client" />
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-b from-cyan-500 to-cyan-100">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-white text-center">And more</h3>
                  <div className="flex flex-wrap justify-center gap-2 mt-4">
                    <TechBadge name="React Hooks" />
                    <TechBadge name="Custom Hooks" />
                    <TechBadge name="React 19" />
                    <TechBadge name="..." />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="enroll" className="w-full py-8 sm:py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Чи готові ви Опанувати React?
                </h2>
                <p className="mx-auto max-w-[600px] text-base sm:text-lg md:text-xl">
                  Купіть курс за <strong>найменшою можливою ціною</strong> на Udemy і почніть свій шлях React розробника!
                </p>
              </div>
              <div className="w-full max-w-[280px] sm:max-w-sm space-y-2">
                <Button size="lg" asChild className="w-full text-base sm:text-lg">
                  <Link href={ENROLL_LINK} target="_blank" rel="noopener noreferrer">
                    Купити на Udemy
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="flex flex-col gap-2 sm:flex-row py-4 sm:py-6 w-full shrink-0 items-center px-4 md:px-6 border-t justify-center">
        <p className="text-xs text-gray-500 dark:text-gray-400 text-center">© {new Date().getFullYear()} Опановуємо React. Всі права захищені.</p>
      </footer>
    </>
  )
}

