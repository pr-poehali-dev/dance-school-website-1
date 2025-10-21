import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

interface DanceClass {
  id: number;
  name: string;
  instructor: string;
  time: string;
  day: string;
  level: string;
  duration: string;
}

const Index = () => {
  const { toast } = useToast();
  const [selectedClass, setSelectedClass] = useState<DanceClass | null>(null);
  const [formData, setFormData] = useState({ name: '', phone: '', email: '' });

  const danceClasses: DanceClass[] = [
    { id: 1, name: 'Хип-хоп для начинающих', instructor: 'Мария Волкова', time: '18:00', day: 'Понедельник', level: 'Начинающий', duration: '60 мин' },
    { id: 2, name: 'Современные танцы', instructor: 'Анна Смирнова', time: '19:30', day: 'Понедельник', level: 'Средний', duration: '90 мин' },
    { id: 3, name: 'Бачата', instructor: 'Карлос Гарсия', time: '20:00', day: 'Вторник', level: 'Начинающий', duration: '60 мин' },
    { id: 4, name: 'Брейк-данс', instructor: 'Дмитрий Козлов', time: '17:00', day: 'Среда', level: 'Продвинутый', duration: '90 мин' },
    { id: 5, name: 'Сальса', instructor: 'Елена Петрова', time: '19:00', day: 'Четверг', level: 'Средний', duration: '60 мин' },
    { id: 6, name: 'Контемпорари', instructor: 'Ольга Иванова', time: '18:30', day: 'Пятница', level: 'Все уровни', duration: '75 мин' },
  ];

  const handleBooking = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!selectedClass) return;
    
    try {
      const response = await fetch('https://functions.poehali.dev/36db0ca6-9907-468d-9357-61cdfb8e0027', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          danceStyle: selectedClass.name,
          classDay: selectedClass.day,
          classTime: selectedClass.time,
          level: selectedClass.level,
          instructor: selectedClass.instructor,
        }),
      });
      
      const data = await response.json();
      
      if (response.ok) {
        toast({
          title: "Запись успешно отправлена!",
          description: data.message || `Вы записаны на ${selectedClass.name}. Мы свяжемся с вами в ближайшее время.`,
        });
        setFormData({ name: '', phone: '', email: '' });
        setSelectedClass(null);
      } else {
        toast({
          title: "Ошибка",
          description: data.error || "Не удалось отправить заявку. Попробуйте позже.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Ошибка",
        description: "Не удалось отправить заявку. Проверьте подключение к интернету.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Music" className="text-primary" size={32} />
            <span className="text-2xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              DanceFlow
            </span>
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="#home" className="text-sm font-medium hover:text-primary transition-colors">Главная</a>
            <a href="#schedule" className="text-sm font-medium hover:text-primary transition-colors">Расписание</a>
            <a href="#about" className="text-sm font-medium hover:text-primary transition-colors">О нас</a>
            <a href="#contact" className="text-sm font-medium hover:text-primary transition-colors">Контакты</a>
          </nav>
          <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90">
            Записаться
          </Button>
        </div>
      </header>

      <section id="home" className="relative overflow-hidden py-20 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10" />
        <div className="container relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h1 className="md:text-7xl font-bold leading-tight text-4xl">
                Танцуй с
                <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent"> энергией</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Присоединяйся к нашей танцевальной семье и открой для себя мир движения, ритма и самовыражения
              </p>
              <div className="flex gap-4">
                <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                  <Icon name="Calendar" className="mr-2" size={20} />
                  Выбрать занятие
                </Button>
                <Button size="lg" variant="outline">
                  <Icon name="Play" className="mr-2" size={20} />
                  Смотреть видео
                </Button>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary via-secondary to-accent rounded-3xl blur-2xl opacity-30 animate-pulse" />
              <img
                src="https://cdn.poehali.dev/projects/7cd9c9fe-85e6-423c-966e-06e27420090b/files/55a1d6ed-0032-4f02-95cd-f8be62950a02.jpg"
                alt="Танцы"
                className="relative rounded-3xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="schedule" className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Расписание занятий
            </h2>
            <p className="text-xl text-muted-foreground">
              Выбери направление и запишись на пробное занятие
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {danceClasses.map((danceClass, index) => (
              <Card
                key={danceClass.id}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/50"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors">
                        {danceClass.name}
                      </CardTitle>
                      <CardDescription className="flex items-center gap-2">
                        <Icon name="User" size={16} />
                        {danceClass.instructor}
                      </CardDescription>
                    </div>
                    <div className="bg-gradient-to-br from-primary to-secondary p-2 rounded-lg">
                      <Icon name="Music2" size={24} className="text-white" />
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center gap-2 text-sm">
                    <Icon name="Calendar" size={16} className="text-primary" />
                    <span>{danceClass.day}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Icon name="Clock" size={16} className="text-secondary" />
                    <span>{danceClass.time} ({danceClass.duration})</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Icon name="Award" size={16} className="text-accent" />
                    <span>{danceClass.level}</span>
                  </div>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button
                        className="w-full mt-4 bg-gradient-to-r from-primary to-secondary hover:opacity-90"
                        onClick={() => setSelectedClass(danceClass)}
                      >
                        <Icon name="CalendarCheck" className="mr-2" size={18} />
                        Записаться
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-md">
                      <DialogHeader>
                        <DialogTitle>Запись на занятие</DialogTitle>
                        <DialogDescription>
                          {selectedClass?.name} • {selectedClass?.day} в {selectedClass?.time}
                        </DialogDescription>
                      </DialogHeader>
                      <form onSubmit={handleBooking} className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">Ваше имя</Label>
                          <Input
                            id="name"
                            placeholder="Введите ваше имя"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone">Телефон</Label>
                          <Input
                            id="phone"
                            type="tel"
                            placeholder="+7 (999) 123-45-67"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email</Label>
                          <Input
                            id="email"
                            type="email"
                            placeholder="your@email.com"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            required
                          />
                        </div>
                        <Button type="submit" className="w-full bg-gradient-to-r from-primary to-secondary">
                          Отправить заявку
                        </Button>
                      </form>
                    </DialogContent>
                  </Dialog>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src="https://cdn.poehali.dev/projects/7cd9c9fe-85e6-423c-966e-06e27420090b/files/3e3e7d3c-5044-4947-a9f2-647b2ef6b4ce.jpg"
                alt="О школе"
                className="rounded-3xl shadow-2xl"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold">
                Танцевальная школа
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"> DanceFlow</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Мы создали пространство, где каждый может раскрыть свой танцевальный потенциал. Наши опытные преподаватели помогут вам освоить различные стили танца в дружелюбной атмосфере.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="bg-primary/10 p-2 rounded-lg">
                      <Icon name="Users" className="text-primary" size={24} />
                    </div>
                    <span className="text-3xl font-bold">500+</span>
                  </div>
                  <p className="text-muted-foreground">Учеников</p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="bg-secondary/10 p-2 rounded-lg">
                      <Icon name="Award" className="text-secondary" size={24} />
                    </div>
                    <span className="text-3xl font-bold">15+</span>
                  </div>
                  <p className="text-muted-foreground">Направлений</p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="bg-accent/10 p-2 rounded-lg">
                      <Icon name="Star" className="text-accent" size={24} />
                    </div>
                    <span className="text-3xl font-bold">10+</span>
                  </div>
                  <p className="text-muted-foreground">Лет опыта</p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="bg-primary/10 p-2 rounded-lg">
                      <Icon name="Trophy" className="text-primary" size={24} />
                    </div>
                    <span className="text-3xl font-bold">50+</span>
                  </div>
                  <p className="text-muted-foreground">Наград</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold">
              Готов начать танцевать?
            </h2>
            <p className="text-xl text-muted-foreground">
              Запишись на бесплатное пробное занятие и почувствуй энергию танца
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <div className="flex items-center gap-3 bg-background/80 backdrop-blur px-6 py-4 rounded-xl">
                <Icon name="Phone" className="text-primary" size={24} />
                <div className="text-left">
                  <p className="text-sm text-muted-foreground">Телефон</p>
                  <p className="font-semibold">+7 (999) 123-45-67</p>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-background/80 backdrop-blur px-6 py-4 rounded-xl">
                <Icon name="Mail" className="text-secondary" size={24} />
                <div className="text-left">
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-semibold">info@danceflow.ru</p>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-background/80 backdrop-blur px-6 py-4 rounded-xl">
                <Icon name="MapPin" className="text-accent" size={24} />
                <div className="text-left">
                  <p className="text-sm text-muted-foreground">Адрес</p>
                  <p className="font-semibold">ул. Танцевальная, 15</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t py-8 bg-background">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <Icon name="Music" className="text-primary" size={28} />
              <span className="text-xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                DanceFlow
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2025 DanceFlow. Все права защищены
            </p>
            <div className="flex gap-4">
              <Button variant="ghost" size="icon">
                <Icon name="Instagram" size={20} />
              </Button>
              <Button variant="ghost" size="icon">
                <Icon name="Youtube" size={20} />
              </Button>
              <Button variant="ghost" size="icon">
                <Icon name="Send" size={20} />
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;