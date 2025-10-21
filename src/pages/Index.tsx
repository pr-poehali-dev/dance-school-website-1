import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [selectedClass, setSelectedClass] = useState<string | null>(null);

  const danceClasses = [
    {
      id: 'hip-hop',
      title: 'Hip-Hop',
      level: 'Начинающие',
      schedule: 'Пн, Ср, Пт 18:00-19:30',
      price: '3500 ₽/мес',
      image: 'https://cdn.poehali.dev/projects/7cd9c9fe-85e6-423c-966e-06e27420090b/files/9faf53d7-8269-4d4b-a3cc-04c2ce85c360.jpg',
    },
    {
      id: 'contemporary',
      title: 'Современная хореография',
      level: 'Продвинутые',
      schedule: 'Вт, Чт 19:00-20:30',
      price: '4000 ₽/мес',
      image: 'https://cdn.poehali.dev/projects/7cd9c9fe-85e6-423c-966e-06e27420090b/files/2ca18a50-2686-47ea-87b1-e26336c88648.jpg',
    },
    {
      id: 'latin',
      title: 'Латина',
      level: 'Средний',
      schedule: 'Сб, Вс 15:00-16:30',
      price: '3800 ₽/мес',
      image: 'https://cdn.poehali.dev/projects/7cd9c9fe-85e6-423c-966e-06e27420090b/files/6eb88835-a8d7-4786-a919-8eb02a923fb3.jpg',
    },
  ];

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Music" className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Dance Flow
            </span>
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="#home" className="text-sm font-medium hover:text-primary transition-colors">
              Главная
            </a>
            <a href="#classes" className="text-sm font-medium hover:text-primary transition-colors">
              Классы
            </a>
            <a href="#schedule" className="text-sm font-medium hover:text-primary transition-colors">
              Расписание
            </a>
            <a href="#contact" className="text-sm font-medium hover:text-primary transition-colors">
              Контакты
            </a>
          </nav>
          <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90">
            Записаться
          </Button>
        </div>
      </header>

      <section id="home" className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 py-20">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Почувствуй
                <span className="block bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                  ритм жизни
                </span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Танцуй с лучшими инструкторами города. Современные направления, профессиональные залы и вдохновляющая атмосфера
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                  <Icon name="Play" className="mr-2 h-5 w-5" />
                  Начать сейчас
                </Button>
                <Button size="lg" variant="outline">
                  <Icon name="Calendar" className="mr-2 h-5 w-5" />
                  Пробное занятие
                </Button>
              </div>
              <div className="flex gap-8 pt-4">
                <div>
                  <div className="text-3xl font-bold text-primary">500+</div>
                  <div className="text-sm text-muted-foreground">Учеников</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-secondary">15</div>
                  <div className="text-sm text-muted-foreground">Направлений</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-accent">8</div>
                  <div className="text-sm text-muted-foreground">Лет опыта</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://cdn.poehali.dev/projects/7cd9c9fe-85e6-423c-966e-06e27420090b/files/9faf53d7-8269-4d4b-a3cc-04c2ce85c360.jpg"
                alt="Dance"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-gradient-to-r from-primary to-secondary p-6 rounded-xl text-white shadow-xl">
                <Icon name="Award" className="h-8 w-8 mb-2" />
                <div className="font-bold">Лучшая школа</div>
                <div className="text-sm opacity-90">2024 года</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="classes" className="py-20">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Наши направления</h2>
            <p className="text-xl text-muted-foreground">Выбери свой стиль и начни двигаться</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {danceClasses.map((danceClass) => (
              <Card
                key={danceClass.id}
                className="overflow-hidden cursor-pointer transition-all hover:scale-105 hover:shadow-xl"
                onClick={() => setSelectedClass(danceClass.id)}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={danceClass.image}
                    alt={danceClass.title}
                    className="w-full h-full object-cover transition-transform hover:scale-110"
                  />
                  <Badge className="absolute top-4 right-4 bg-primary">{danceClass.level}</Badge>
                </div>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="Music2" className="h-5 w-5 text-primary" />
                    {danceClass.title}
                  </CardTitle>
                  <CardDescription>{danceClass.schedule}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary">{danceClass.price}</span>
                    <Button size="sm" className="bg-gradient-to-r from-primary to-secondary">
                      Записаться
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="schedule" className="py-20 bg-muted/50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Расписание занятий</h2>
            <p className="text-xl text-muted-foreground">Выбирай удобное время для тренировок</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'].map((day) => (
              <Card key={day}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="Calendar" className="h-5 w-5 text-primary" />
                    {day}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-primary/10 rounded-lg">
                    <div>
                      <div className="font-semibold">18:00 - 19:30</div>
                      <div className="text-sm text-muted-foreground">Hip-Hop</div>
                    </div>
                    <Button size="sm" variant="outline">
                      <Icon name="Plus" className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-secondary/10 rounded-lg">
                    <div>
                      <div className="font-semibold">19:30 - 21:00</div>
                      <div className="text-sm text-muted-foreground">Contemporary</div>
                    </div>
                    <Button size="sm" variant="outline">
                      <Icon name="Plus" className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-primary via-secondary to-accent text-white">
        <div className="container text-center">
          <Icon name="Sparkles" className="h-16 w-16 mx-auto mb-6" />
          <h2 className="text-4xl font-bold mb-4">Готов начать танцевать?</h2>
          <p className="text-xl mb-8 opacity-90">Первое занятие бесплатно для новых учеников</p>
          <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
            <Icon name="Rocket" className="mr-2 h-5 w-5" />
            Записаться на пробное занятие
          </Button>
        </div>
      </section>

      <section id="contact" className="py-20">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold">Свяжитесь с нами</h2>
              <p className="text-xl text-muted-foreground">
                Остались вопросы? Мы с радостью на них ответим
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon name="MapPin" className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold">Адрес</div>
                    <div className="text-muted-foreground">ул. Танцевальная, 15</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-full bg-secondary/10 flex items-center justify-center">
                    <Icon name="Phone" className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <div className="font-semibold">Телефон</div>
                    <div className="text-muted-foreground">+7 (999) 123-45-67</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center">
                    <Icon name="Mail" className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <div className="font-semibold">Email</div>
                    <div className="text-muted-foreground">info@danceflow.ru</div>
                  </div>
                </div>
              </div>
            </div>
            <Card>
              <CardHeader>
                <CardTitle>Форма обратной связи</CardTitle>
                <CardDescription>Заполните форму и мы свяжемся с вами</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Имя</label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Ваше имя"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Телефон</label>
                  <input
                    type="tel"
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="+7 (999) 123-45-67"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Сообщение</label>
                  <textarea
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary min-h-[100px]"
                    placeholder="Ваше сообщение"
                  />
                </div>
                <Button className="w-full bg-gradient-to-r from-primary to-secondary">
                  <Icon name="Send" className="mr-2 h-4 w-4" />
                  Отправить
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="border-t py-8">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <Icon name="Music" className="h-6 w-6 text-primary" />
              <span className="font-bold">Dance Flow</span>
            </div>
            <div className="text-sm text-muted-foreground">
              © 2024 Dance Flow. Все права защищены.
            </div>
            <div className="flex gap-4">
              <Button variant="ghost" size="icon">
                <Icon name="Instagram" className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Icon name="Youtube" className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Icon name="Facebook" className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
