import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { BookUser, Boxes, BrainCircuit, Gem, Network, PencilRuler } from 'lucide-react'
import Link from "next/link"

const ENROLL_LINK = "https://www.udemy.com/course/opanovuemo-react/?couponCode=350BAEC300A5D4680059"

export default function LandingPage() {
  return (
    <>
      <header className="sticky top-0 px-4 lg:px-6 h-14 flex items-center bg-gray-900 shadow-md">
        <Link href="/" className="text-white font-bold text-lg">
          🇺🇦 Опановуємо React
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium text-white hover:underline underline-offset-4" href={ENROLL_LINK}>
            Купити Курс
          </Link>
        </nav>
      </header>

      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-orange-400 via-orange-300 to-amber-200">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-gray-900">
                  Опануйте всі тонкощі розробки на React
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-800 md:text-xl">
                  Ексклюзивний всеохоплюючий Udemy курс українською!
                </p>
              </div>
              <div className="space-x-4">
                <Button asChild size="lg" className="text-lg">
                  <Link href={ENROLL_LINK}>Купити зі знижкою!</Link>
                </Button>
                <Button variant="outline" asChild size="lg" className="text-lg">
                  <Link href="#features">Дізнатися більше</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6 mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
              Чому саме цей курс?
            </h2>
            <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3 justify-items-center">
              <Card>
                <CardContent className="flex flex-col items-center space-y-2 p-6">
                  <Gem strokeWidth={1} className="h-14 w-14" />
                  <h3 className="text-xl font-bold">Ексклюзивний Контент</h3>
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

        <section id="tech-stack" className="w-full py-12 md:py-24 lg:py-32 dark:bg-gray-800">
          <div className="container px-4 md:px-6 mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
              Стек технологій
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="col-span-1 md:col-span-3">
                <Card className="bg-gradient-to-b from-blue-500 to-blue-200">
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-bold text-white text-center">Core Technologies</h3>
                    <div className="flex justify-center gap-2 mt-4">
                      <Badge className="text-sm">TypeScript</Badge>
                      <Badge className="text-sm">React</Badge>
                      <Badge className="text-sm">Vite</Badge>
                    </div>
                  </CardContent>
                </Card>
              </div>
              <Card className="bg-gradient-to-b from-purple-500 to-purple-200">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-white mb-4">State Management</h3>
                  <div className="flex flex-col gap-2">
                    <div><Badge className="text-sm">React.Context + useReducer</Badge></div>
                    <div><Badge className="text-sm">Redux + Rematch</Badge></div>
                    <div><Badge className="text-sm">Zustand</Badge></div>
                    <div><Badge className="text-sm">Recoil</Badge></div>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-b from-green-500 to-green-200">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-white mb-4">Data Fetching</h3>
                  <div className="space-y-2">
                    <div><Badge className="text-sm">fetch</Badge></div>
                    <div><Badge className="text-sm">Axios</Badge></div>
                    <div><Badge className="text-sm">TanStack Query / React Query</Badge></div>
                    <div><Badge className="text-sm">SWR</Badge></div>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-b from-orange-500 to-orange-200">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-white mb-4">Testing</h3>
                  <div className="space-y-2">
                    <div><Badge className="text-sm">Jest</Badge></div>
                    <div><Badge className="text-sm">Vitest</Badge></div>
                    <div><Badge className="text-sm">React Testing Library</Badge></div>
                    <div><Badge className="text-sm">Storybook</Badge></div>
                  </div>
                </CardContent>
              </Card>
              <div className="col-span-1 md:col-span-3">
                <Card className="bg-gradient-to-b from-yellow-500 to-yellow-200">
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-bold text-white text-center">Tools</h3>
                    <div className="flex justify-center gap-2 mt-4">
                      <Badge className="text-sm">VSCode</Badge>
                      <Badge className="text-sm">ESLint</Badge>
                      <Badge className="text-sm">Prettier</Badge>
                      <Badge className="text-sm">Husky</Badge>
                      <Badge className="text-sm">Thunder Client</Badge>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section id="enroll" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Чи готові ви Опанувати React?
                </h2>
                <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                  Купіть курс за <strong>найменшою можливою ціною</strong> на Udemy і почніть свій шлях React розробника!
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <Button size="lg" asChild className="text-lg">
                  <Link href={ENROLL_LINK} target="_blank" rel="noopener noreferrer">
                    Купити на Udemy
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t justify-center">
        <p className="text-xs text-gray-500 dark:text-gray-400 text-center">© {new Date().getFullYear()} Опановуємо React. Всі права захищені.</p>
      </footer>
    </>
  )
}

