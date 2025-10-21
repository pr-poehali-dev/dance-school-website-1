import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [selectedClass, setSelectedClass] = useState<string | null>(null);

  const danceStyles = [
    { name: "Хип-хоп", icon: "Mic2", color: "bg-primary" },
    { name: "Современные танцы", icon: "Sparkles", color: "bg-secondary" },
    { name: "Балет", icon: "Music", color: "bg-accent" },
    { name: "Латина", icon: "Flame", color: "bg-primary" },
  ];

  const schedule = [
    { time: "10:00", day: "Понедельник", style: "Хип-хоп", level: "Начинающие", instructor: "Мария Петрова" },
    { time: "12:00", day: "Понедельник", style: "Балет", level: "Средний", instructor: "Анна Иванова" },
    { time: "18:00", day: "Понедельник", style: "Современные танцы", level: "Продвинутые", instructor: "Дмитрий Соколов" },
    { time: "10:00", day: "Среда", style: "Латина", level: "Начинающие", instructor: "Карлос Гарсия" },
    { time: "14:00", day: "Среда", style: "Хип-хоп", level: "Средний", instructor: "Мария Петрова" },
    { time: "19:00", day: "Среда", style: "Балет", level: "Продвинутые", instructor: "Анна Иванова" },
    { time: "11:00", day: "Пятница", style: "Современные танцы", level: "Начинающие", instructor: "Дмитрий Соколов" },
    { time: "16:00", day: "Пятница", style: "Латина", level: "Средний", instructor: "Карлос Гарсия" },
  ];

  const instructors = [
    { name: "Мария Петрова", specialty: "Хип-хоп", experience: "8 лет" },
    { name: "Анна Иванова", specialty: "Балет", experience: "12 лет" },
    { name: "Дмитрий Соколов", specialty: "Современные танцы", experience: "10 лет" },
    { name: "Карлос Гарсия", specialty: "Латина", experience: "15 лет" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Music2" className="text-primary" size={32} />
            <span className="text-2xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              DanceFlow
            </span>
          </div>
          <div className="hidden md:flex gap-6">
            <a href="#home" className="text-foreground hover:text-primary transition-colors">Главная</a>
            <a href="#styles" className="text-foreground hover:text-primary transition-colors">Направления</a>
            <a href="#schedule" className="text-foreground hover:text-primary transition-colors">Расписание</a>
            <a href="#instructors" className="text-foreground hover:text-primary transition-colors">Преподаватели</a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">Контакты</a>
          </div>
          <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90">
            Записаться
          </Button>
        </div>
      </nav>

      <section id="home" className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Танцуй
              </span>
              <br />
              свою мечту
            </h1>
            <p className="text-xl text-muted-foreground">
              Профессиональная школа танцев для всех возрастов и уровней подготовки. 
              Начни свой путь в мире танца уже сегодня!
            </p>
            <div className="flex gap-4">
              <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                <Icon name="Calendar" className="mr-2" size={20} />
                Пробное занятие
              </Button>
              <Button size="lg" variant="outline">
                <Icon name="Play" className="mr-2" size={20} />
                Смотреть видео
              </Button>
            </div>
          </div>
          <div className="relative animate-scale-in">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur-3xl"></div>
            <img 
              src="https://cdn.poehali.dev/projects/7cd9c9fe-85e6-423c-966e-06e27420090b/files/3ae20cc4-9052-4385-80cc-af4291d7eb16.jpg"
              alt="Танцы"
              className="relative rounded-3xl shadow-2xl w-full h-[500px] object-cover"
            />
          </div>
        </div>
      </section>

      <section id="styles" className="py-20 bg-white/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Наши направления
              </span>
            </h2>
            <p className="text-xl text-muted-foreground">Выбери свой стиль и начни танцевать</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {danceStyles.map((style, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer border-2 hover:border-primary"
              >
                <CardContent className="p-6 text-center space-y-4">
                  <div className={`${style.color} w-16 h-16 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform`}>
                    <Icon name={style.icon as any} className="text-white" size={32} />
                  </div>
                  <h3 className="text-xl font-bold">{style.name}</h3>
                  <p className="text-muted-foreground">Занятия для всех уровней подготовки</p>
                  <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground">
                    Подробнее
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="schedule" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
                Расписание занятий
              </span>
            </h2>
            <p className="text-xl text-muted-foreground">Выбери удобное время и запишись онлайн</p>
          </div>

          <Tabs defaultValue="Понедельник" className="max-w-6xl mx-auto">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="Понедельник">Понедельник</TabsTrigger>
              <TabsTrigger value="Среда">Среда</TabsTrigger>
              <TabsTrigger value="Пятница">Пятница</TabsTrigger>
            </TabsList>
            
            {["Понедельник", "Среда", "Пятница"].map((day) => (
              <TabsContent key={day} value={day} className="space-y-4">
                {schedule.filter(item => item.day === day).map((item, index) => (
                  <Card 
                    key={index}
                    className={`transition-all hover:shadow-lg cursor-pointer ${
                      selectedClass === `${day}-${index}` ? 'border-2 border-primary' : ''
                    }`}
                    onClick={() => setSelectedClass(`${day}-${index}`)}
                  >
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div className="flex items-center gap-4">
                          <div className="bg-gradient-to-r from-primary to-secondary text-white px-4 py-3 rounded-xl text-center min-w-[80px]">
                            <div className="text-2xl font-bold">{item.time}</div>
                          </div>
                          <div>
                            <h3 className="text-xl font-bold mb-1">{item.style}</h3>
                            <p className="text-muted-foreground">
                              {item.level} • {item.instructor}
                            </p>
                          </div>
                        </div>
                        <Button 
                          className="bg-gradient-to-r from-primary to-secondary hover:opacity-90"
                          onClick={(e) => {
                            e.stopPropagation();
                            alert(`Запись на ${item.style} в ${item.time}`);
                          }}
                        >
                          <Icon name="UserPlus" className="mr-2" size={18} />
                          Записаться
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      <section id="instructors" className="py-20 bg-white/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                Наши преподаватели
              </span>
            </h2>
            <p className="text-xl text-muted-foreground">Профессионалы с международным опытом</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {instructors.map((instructor, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all hover:-translate-y-2">
                <CardContent className="p-6 text-center space-y-4">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-r from-primary to-secondary mx-auto flex items-center justify-center text-white text-3xl font-bold">
                    {instructor.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">{instructor.name}</h3>
                    <p className="text-primary font-semibold">{instructor.specialty}</p>
                    <p className="text-muted-foreground text-sm">Опыт: {instructor.experience}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                  Свяжитесь с нами
                </span>
              </h2>
              <p className="text-xl text-muted-foreground">Запишитесь на пробное занятие прямо сейчас</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="p-8 space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="bg-primary/10 p-3 rounded-lg">
                        <Icon name="MapPin" className="text-primary" size={24} />
                      </div>
                      <div>
                        <p className="font-semibold">Адрес</p>
                        <p className="text-muted-foreground">ул. Танцевальная, 15</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="bg-secondary/10 p-3 rounded-lg">
                        <Icon name="Phone" className="text-secondary" size={24} />
                      </div>
                      <div>
                        <p className="font-semibold">Телефон</p>
                        <p className="text-muted-foreground">+7 (999) 123-45-67</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="bg-accent/10 p-3 rounded-lg">
                        <Icon name="Mail" className="text-accent" size={24} />
                      </div>
                      <div>
                        <p className="font-semibold">Email</p>
                        <p className="text-muted-foreground">info@danceflow.ru</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8">
                  <form className="space-y-4">
                    <div>
                      <Label htmlFor="name">Имя</Label>
                      <Input id="name" placeholder="Ваше имя" />
                    </div>
                    <div>
                      <Label htmlFor="phone">Телефон</Label>
                      <Input id="phone" type="tel" placeholder="+7 (___) ___-__-__" />
                    </div>
                    <div>
                      <Label htmlFor="style">Направление</Label>
                      <select 
                        id="style" 
                        className="w-full px-3 py-2 border border-input rounded-md bg-background"
                      >
                        <option>Выберите направление</option>
                        {danceStyles.map((style, i) => (
                          <option key={i}>{style.name}</option>
                        ))}
                      </select>
                    </div>
                    <Button className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                      Отправить заявку
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-background py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Music2" size={28} />
                <span className="text-2xl font-bold">DanceFlow</span>
              </div>
              <p className="text-background/70">
                Профессиональная школа танцев с 2010 года
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-4">Быстрые ссылки</h3>
              <div className="space-y-2 text-background/70">
                <div><a href="#home" className="hover:text-background transition-colors">Главная</a></div>
                <div><a href="#styles" className="hover:text-background transition-colors">Направления</a></div>
                <div><a href="#schedule" className="hover:text-background transition-colors">Расписание</a></div>
              </div>
            </div>
            <div>
              <h3 className="font-bold mb-4">Социальные сети</h3>
              <div className="flex gap-4">
                <Button size="icon" variant="outline" className="border-background/20 hover:bg-background/10">
                  <Icon name="Instagram" size={20} />
                </Button>
                <Button size="icon" variant="outline" className="border-background/20 hover:bg-background/10">
                  <Icon name="Youtube" size={20} />
                </Button>
                <Button size="icon" variant="outline" className="border-background/20 hover:bg-background/10">
                  <Icon name="Facebook" size={20} />
                </Button>
              </div>
            </div>
          </div>
          <div className="border-t border-background/20 pt-8 text-center text-background/70">
            <p>&copy; 2024 DanceFlow. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
