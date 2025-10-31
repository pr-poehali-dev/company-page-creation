import { Button } from "@/components/ui/button";

const About = () => {
  const stats = [
    { number: "10+", label: "лет роста и побед" },
    { number: "8000+", label: "штат компании" },
    { number: "70%+", label: "инженеров" },
    { number: "74+", label: "млрд ₽ инвестиций" },
    { number: "1M", label: "устройств в год" },
    { number: "9.2/10", label: "удовлетворенность" },
  ];

  const solutions = [
    {
      title: "ИНФРАСТРУКТУРА ЦОД",
      items: [
        "Высокопроизводительные серверы",
        "Системы хранения данных",
        "Сетевые решения",
      ],
    },
    {
      title: "ТЕЛЕКОМ-РЕШЕНИЯ",
      items: ["Оборудование операторского класса"],
    },
    {
      title: "ПОЛУПРОВОДНИКИ",
      items: ["Процессоры и IP"],
    },
    {
      title: "ПЕРСОНАЛЬНЫЕ УСТРОЙСТВА",
      items: ["Сервисы для бизнеса"],
    },
    {
      title: "ПО, СИСТЕМНОЕ ПО, ИИ",
      items: ["Программное обеспечение"],
    },
  ];

  const expertise = [
    {
      title: "Собственное производство",
      description:
        "Полный контроль над качеством, высокая скорость производства и стабильность поставок",
    },
    {
      title: "Инженеры мирового уровня",
      description:
        "5 R&D-центров в России и СНГ работают над технологиями будущего",
    },
    {
      title: "Поддержка 24/7/365",
      description:
        "SLA на уровне 99.2%. 87 000 серверов и 150 000 клиентских устройств",
    },
  ];

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <section className="min-h-screen flex items-center justify-center px-6 md:px-12">
        <div className="max-w-7xl w-full">
          <div className="space-y-12 animate-fade-in">
            <div className="space-y-6">
              <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground">
                Технологическое лидерство
              </p>
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight leading-[0.9] overflow-hidden">
                Инженерная
                <br />
                культура.
                <br />
                <span className="block mt-4">YADRO</span>
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl leading-relaxed">
              Российская технологическая компания полного цикла. От разработки
              архитектур до создания масштабных ИТ-систем.
            </p>
            <div className="flex flex-wrap gap-4 pt-8">
              <Button
                size="lg"
                className="text-base px-8 py-6 bg-foreground text-background hover:bg-foreground/90 transition-all"
              >
                Обсудить ваш проект
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-base px-8 py-6 border-2 hover:bg-muted transition-all"
              >
                Презентация компании
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 px-6 md:px-12 border-t">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="lg:sticky lg:top-32">
              <h2 className="text-5xl md:text-6xl font-bold leading-tight overflow-hidden">
                Инженерные
                <br />
                решения для
                <br />
                будущего
              </h2>
            </div>
            <div className="space-y-8">
              <p className="text-xl text-muted-foreground leading-relaxed">
                YADRO — крупнейший производитель вычислительной техники в России,
                объединяющий направления разработки и производства вычислительных
                платформ, систем обработки и хранения данных, телекоммуникационного
                и сетевого оборудования и персональных устройств.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 px-6 md:px-12 border-t">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="lg:sticky lg:top-32 h-fit">
              <h2 className="text-5xl md:text-6xl font-bold leading-tight overflow-hidden">
                Наша
                <br />
                философия
              </h2>
            </div>
            <div className="space-y-8">
              <p className="text-xl text-muted-foreground leading-relaxed">
                Наши продукты вдохновлены наследием Татлина и Вегмана, основателей
                конструктивизма — архитектурного направления, которое существенно
                повлияло на глобальную архитектуру с момента своего зарождения в
                России в 1920-х годах.
              </p>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Принципы конструктивизма близки сердцам и умам наших инженеров.
                Каждый раз, когда мы оптимизируем существующие продукты или
                разрабатываем инновационные решения YADRO, назначение и
                функциональность каждого продукта полностью определяют его
                архитектуру и визуальный облик.
              </p>
              <button className="text-lg font-medium border-b-2 border-foreground pb-1 hover:opacity-60 transition-opacity">
                Подробнее
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 px-6 md:px-12 border-t">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold mb-24 overflow-hidden">YADRO в цифрах</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-16">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="space-y-2 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <p className="text-5xl md:text-6xl font-bold overflow-hidden">{stat.number}</p>
                <p className="text-sm md:text-base text-muted-foreground uppercase tracking-wider">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 px-6 md:px-12 border-t bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold mb-24 overflow-hidden">
            Решения для любых задач
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-16">
            {solutions.map((solution, index) => (
              <div
                key={index}
                className="space-y-6 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <h3 className="text-xl font-bold tracking-tight">
                  {solution.title}
                </h3>
                <ul className="space-y-3">
                  {solution.items.map((item, i) => (
                    <li key={i} className="text-muted-foreground">
                      — {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 px-6 md:px-12 border-t">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 mb-24">
            <h2 className="text-5xl md:text-6xl font-bold leading-tight overflow-hidden">
              Экспертиза
              <br />
              мирового
              <br />
              уровня
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed lg:pt-8">
              Наше лидерство основано на высокой степени вертикальной интеграции.
              Мы контролируем весь цикл — от разработки и производства до
              внедрения и поддержки готовых решений.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-16">
            {expertise.map((item, index) => (
              <div
                key={index}
                className="space-y-4 pb-8 border-b border-border animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <h3 className="text-2xl font-bold">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 px-6 md:px-12 border-t bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-24">
            <div className="space-y-8">
              <h2 className="text-5xl md:text-6xl font-bold leading-tight overflow-hidden">
                550+
              </h2>
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">
                  Корпоративных клиентов доверяют YADRO
                </h3>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Лидеры банковского сектора, промышленности, ритейла, телекома и
                  государственных корпораций выбирают наши решения для критически
                  важных задач
                </p>
              </div>
            </div>
            <div className="space-y-8 lg:pt-16">
              <h2 className="text-5xl md:text-6xl font-bold leading-tight overflow-hidden">16</h2>
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">
                  Развиваем инженерную культуру страны
                </h3>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Инвестируем в образование: инженерный центр для детей,
                  сотрудничество с ведущими вузами, стажировки и портал «Истовый
                  инженер»
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-40 px-6 md:px-12 border-t">
        <div className="max-w-5xl mx-auto text-center space-y-12">
          <h2 className="text-5xl md:text-7xl font-bold leading-tight overflow-hidden">
            Технологические решения
            <br />
            для вашего бизнеса
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Свяжитесь с нашими экспертами, чтобы обсудить, как YADRO может стать
            основой для вашего роста
          </p>
          <div className="flex flex-wrap gap-4 justify-center pt-8">
            <Button
              size="lg"
              className="text-base px-8 py-6 bg-foreground text-background hover:bg-foreground/90 transition-all"
            >
              Обсудить ваш проект
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-base px-8 py-6 border-2 hover:bg-muted transition-all"
            >
              Презентация компании
            </Button>
          </div>
        </div>
      </section>

      <footer className="py-12 px-6 md:px-12 border-t">
        <div className="max-w-7xl mx-auto">
          <p className="text-sm text-muted-foreground">
            © 2024 YADRO. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default About;
