import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const About = () => {
  const stats = [
    { label: "10+ лет роста и побед", icon: "TrendingUp" },
    { label: "8000+ штат компании", icon: "Users" },
    { label: "70%+ инженеров", icon: "Cpu" },
    { label: "74+ млрд ₽ инвестиций", icon: "DollarSign" },
    { label: "до 1 млн устройств в год", icon: "Factory" },
    { label: "9.2 из 10 удовлетворенность", icon: "Star" },
  ];

  const solutions = [
    {
      title: "ИНФРАСТРУКТУРА ЦОД",
      items: [
        "Высокопроизводительные серверы",
        "Системы хранения данных",
        "Сетевые решения",
      ],
      icon: "Server",
    },
    {
      title: "ТЕЛЕКОМ-РЕШЕНИЯ",
      items: ["Оборудование операторского класса"],
      icon: "Radio",
    },
    {
      title: "ПОЛУПРОВОДНИКИ",
      items: ["Процессоры и IP"],
      icon: "Chip",
    },
    {
      title: "ПЕРСОНАЛЬНЫЕ УСТРОЙСТВА",
      items: ["Сервисы для бизнеса"],
      icon: "Laptop",
    },
    {
      title: "ПРОГРАММНОЕ ОБЕСПЕЧЕНИЕ",
      items: ["Системное ПО, ИИ"],
      icon: "Code",
    },
  ];

  const expertise = [
    {
      title: "Собственное производство",
      description:
        "Полный контроль над качеством, высокая скорость производства и стабильность поставок",
      icon: "Factory",
    },
    {
      title: "Инженеры мирового уровня",
      description:
        "5 R&D-центров в России и СНГ работают над технологиями будущего",
      icon: "Award",
    },
    {
      title: "Поддержка 24/7/365",
      description:
        "SLA на уровне 99.2%. 87 000 серверов и 150 000 клиентских устройств под контролем",
      icon: "HeadphonesIcon",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-muted/20">
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-secondary/20 animate-glow" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.1),transparent_50%)]" />
        
        <div className="container relative z-10 px-4 md:px-6 text-center animate-fade-in">
          <div className="max-w-4xl mx-auto space-y-8">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight">
              Технологическое лидерство.
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                Инженерная культура.
              </span>
              <br />
              YADRO
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
              Российская технологическая компания полного цикла. От разработки
              архитектур до создания масштабных ИТ-систем.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <Button
                size="lg"
                className="text-lg px-8 py-6 bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity"
              >
                <Icon name="MessageSquare" className="mr-2" />
                Обсудить ваш проект
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-6 border-2 border-primary/50 hover:bg-primary/10"
              >
                <Icon name="FileDown" className="mr-2" />
                Презентация компании
              </Button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <Icon name="ChevronDown" size={32} className="text-muted-foreground" />
        </div>
      </section>

      <section className="py-24 px-4 md:px-6 container">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
            Инженерные решения для технологической инфраструктуры будущего
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            YADRO — крупнейший производитель вычислительной техники в России,
            объединяющий направления разработки и производства вычислительных
            платформ, систем обработки и хранения данных, телекоммуникационного и
            сетевого оборудования и персональных устройств.
          </p>
        </div>
      </section>

      <section className="py-24 px-4 md:px-6 bg-gradient-to-br from-muted/50 to-muted/20">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 animate-fade-in">
                <h2 className="text-4xl md:text-5xl font-bold">Наша философия</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Наши продукты вдохновлены наследием Татлина и Вегмана, основателей
                  конструктивизма — архитектурного направления, которое существенно
                  повлияло на глобальную архитектуру и способствовало появлению
                  множества архитектурных шедевров по всему миру с момента своего
                  зарождения в России в 1920-х годах.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Принципы конструктивизма близки сердцам и умам наших инженеров.
                  Каждый раз, когда мы оптимизируем существующие продукты или
                  разрабатываем инновационные решения YADRO, назначение и
                  функциональность каждого продукта полностью определяют его
                  архитектуру и визуальный облик.
                </p>
                <Button variant="link" className="text-primary p-0 text-lg">
                  Подробнее →
                </Button>
              </div>
              <div className="relative h-96 rounded-xl overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                <Icon name="Shapes" size={120} className="text-primary/30" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 md:px-6 container">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
            YADRO в цифрах
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {stats.map((stat, index) => (
              <Card
                key={index}
                className="p-8 bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/50 transition-all duration-300 hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="p-4 rounded-full bg-primary/10">
                    <Icon name={stat.icon as any} size={32} className="text-primary" />
                  </div>
                  <p className="text-lg font-semibold">{stat.label}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-4 md:px-6 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
              Решения для любых задач
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {solutions.map((solution, index) => (
                <Card
                  key={index}
                  className="p-8 bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary transition-all duration-300 group cursor-pointer animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="space-y-4">
                    <div className="p-3 rounded-lg bg-primary/10 w-fit group-hover:bg-primary/20 transition-colors">
                      <Icon
                        name={solution.icon as any}
                        size={28}
                        className="text-primary"
                      />
                    </div>
                    <h3 className="text-xl font-bold">{solution.title}</h3>
                    <ul className="space-y-2">
                      {solution.items.map((item, i) => (
                        <li
                          key={i}
                          className="text-muted-foreground flex items-start gap-2"
                        >
                          <Icon
                            name="Check"
                            size={20}
                            className="text-secondary mt-0.5 flex-shrink-0"
                          />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 md:px-6 container">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">
            Экспертиза мирового уровня и гарантированная поддержка
          </h2>
          <p className="text-lg text-muted-foreground text-center mb-16 max-w-3xl mx-auto">
            Наше лидерство основано на высокой степени вертикальной интеграции. Мы
            контролируем весь цикл — от разработки и производства до внедрения и
            поддержки готовых, слаженно работающих инфраструктурных решений
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {expertise.map((item, index) => (
              <Card
                key={index}
                className="p-8 bg-gradient-to-br from-card to-card/50 border-primary/20 hover:border-primary/50 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="space-y-4">
                  <div className="p-4 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 w-fit">
                    <Icon
                      name={item.icon as any}
                      size={32}
                      className="text-primary"
                    />
                  </div>
                  <h3 className="text-2xl font-bold">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-4 md:px-6 bg-gradient-to-br from-muted/50 to-muted/20">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold">
              Клиенты и будущее
            </h2>
            <div className="space-y-6">
              <div className="p-8 bg-card/50 backdrop-blur-sm rounded-xl border border-primary/20">
                <h3 className="text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                  550+ корпоративных клиентов доверяют YADRO
                </h3>
                <p className="text-lg text-muted-foreground">
                  Лидеры банковского сектора, промышленности, ритейла, телекома и
                  государственных корпораций выбирают наши решения для критически
                  важных задач своего бизнеса
                </p>
              </div>
              <div className="p-8 bg-card/50 backdrop-blur-sm rounded-xl border border-secondary/20">
                <h3 className="text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-secondary to-primary">
                  Развиваем инженерную культуру страны
                </h3>
                <p className="text-lg text-muted-foreground">
                  Мы инвестируем в образовательные программы для будущего поколения:
                  инженерный центр для детей, сотрудничество с 16 ведущими вузами
                  страны, стажировки в YADRO и портал «Истовый инженер» для
                  профессионального развития
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 px-4 md:px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10" />
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold">
              Технологические решения для вашего бизнеса
            </h2>
            <p className="text-xl text-muted-foreground">
              Свяжитесь с нашими экспертами, чтобы обсудить, как YADRO может стать
              основой для вашего роста.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button
                size="lg"
                className="text-lg px-8 py-6 bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity"
              >
                <Icon name="MessageSquare" className="mr-2" />
                Обсудить ваш проект
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-6 border-2 border-primary/50 hover:bg-primary/10"
              >
                <Icon name="FileDown" className="mr-2" />
                Презентация компании
              </Button>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 px-4 md:px-6 border-t border-primary/20 bg-card/30">
        <div className="container">
          <div className="text-center text-muted-foreground">
            <p>© 2024 YADRO. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default About;
