import Icon from '@/components/ui/icon';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground font-montserrat">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold text-primary animate-glow">
              &lt;Dev/&gt;
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="hover:text-primary transition-colors">Главная</a>
              <a href="#about" className="hover:text-primary transition-colors">Обо мне</a>
              <a href="#skills" className="hover:text-primary transition-colors">Навыки</a>
              <a href="#contact" className="hover:text-primary transition-colors">Контакты</a>
            </div>
            <div className="md:hidden">
              <Icon name="Menu" size={24} className="text-primary" />
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Background Grid */}
        <div className="absolute inset-0 opacity-20">
          <div className="grid grid-cols-12 gap-4 h-full">
            {Array.from({ length: 96 }).map((_, i) => (
              <div key={i} className="border border-primary/10"></div>
            ))}
          </div>
        </div>
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="text-foreground">Привет, я </span>
              <span className="text-primary animate-glow">&lt;Frontend Developer/&gt;</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Создаю современные веб-приложения с использованием React, TypeScript и других передовых технологий
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all duration-300 animate-glow font-semibold">
              Посмотреть работы
            </button>
            <button className="px-8 py-3 border border-primary text-primary rounded-lg hover:bg-primary/10 transition-all duration-300 font-semibold">
              Скачать CV
            </button>
          </div>

          {/* Floating Tech Icons */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-md mx-auto">
            <div className="bg-card border border-border rounded-lg p-4 animate-float hover:border-primary transition-colors">
              <Icon name="Code2" size={32} className="text-primary mx-auto" />
              <p className="text-sm mt-2">HTML/CSS</p>
            </div>
            <div className="bg-card border border-border rounded-lg p-4 animate-float hover:border-secondary transition-colors" style={{animationDelay: '0.5s'}}>
              <Icon name="Zap" size={32} className="text-secondary mx-auto" />
              <p className="text-sm mt-2">JavaScript</p>
            </div>
            <div className="bg-card border border-border rounded-lg p-4 animate-float hover:border-accent transition-colors" style={{animationDelay: '1s'}}>
              <Icon name="Component" size={32} className="text-accent mx-auto" />
              <p className="text-sm mt-2">React</p>
            </div>
            <div className="bg-card border border-border rounded-lg p-4 animate-float hover:border-primary transition-colors" style={{animationDelay: '1.5s'}}>
              <Icon name="Settings" size={32} className="text-primary mx-auto" />
              <p className="text-sm mt-2">TypeScript</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-card/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              <span className="text-primary">&lt;</span>
              Обо мне
              <span className="text-primary">/&gt;</span>
            </h2>
            <p className="text-muted-foreground">Узнайте больше о моем пути в разработке</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-primary">Frontend Developer</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Я увлеченный frontend-разработчик с опытом создания современных веб-приложений. 
                Специализируюсь на React, TypeScript и создании отзывчивых пользовательских интерфейсов.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Моя цель — создавать интуитивно понятные и визуально привлекательные интерфейсы, 
                которые обеспечивают отличный пользовательский опыт.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm border border-primary/30">
                  Аналитическое мышление
                </span>
                <span className="px-3 py-1 bg-secondary/20 text-secondary rounded-full text-sm border border-secondary/30">
                  Внимание к деталям
                </span>
                <span className="px-3 py-1 bg-accent/20 text-accent rounded-full text-sm border border-accent/30">
                  Командная работа
                </span>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg p-8 border border-border">
                <div className="grid grid-cols-2 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-bold text-primary mb-2">2+</div>
                    <div className="text-muted-foreground">Года опыта</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-secondary mb-2">50+</div>
                    <div className="text-muted-foreground">Проектов</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-accent mb-2">10+</div>
                    <div className="text-muted-foreground">Технологий</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary mb-2">100%</div>
                    <div className="text-muted-foreground">Качество</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              <span className="text-primary">&lt;</span>
              Навыки
              <span className="text-primary">/&gt;</span>
            </h2>
            <p className="text-muted-foreground">Технологии, которыми я владею</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* HTML/CSS */}
            <div className="bg-card border border-border rounded-lg p-6 hover:border-primary transition-all duration-300 group">
              <div className="text-center">
                <Icon name="Code2" size={48} className="text-primary mx-auto mb-4 group-hover:animate-glow" />
                <h3 className="text-xl font-semibold mb-2">HTML/CSS</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Семантический HTML5, CSS3, Flexbox, Grid, анимации
                </p>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full" style={{width: '95%'}}></div>
                </div>
                <span className="text-xs text-muted-foreground mt-1 block">95%</span>
              </div>
            </div>

            {/* JavaScript */}
            <div className="bg-card border border-border rounded-lg p-6 hover:border-secondary transition-all duration-300 group">
              <div className="text-center">
                <Icon name="Zap" size={48} className="text-secondary mx-auto mb-4 group-hover:animate-glow" />
                <h3 className="text-xl font-semibold mb-2">JavaScript</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  ES6+, DOM, Event Handling, Async/Await, API Integration
                </p>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-secondary h-2 rounded-full" style={{width: '90%'}}></div>
                </div>
                <span className="text-xs text-muted-foreground mt-1 block">90%</span>
              </div>
            </div>

            {/* React */}
            <div className="bg-card border border-border rounded-lg p-6 hover:border-accent transition-all duration-300 group">
              <div className="text-center">
                <Icon name="Component" size={48} className="text-accent mx-auto mb-4 group-hover:animate-glow" />
                <h3 className="text-xl font-semibold mb-2">React</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Hooks, Context API, Component Design, State Management
                </p>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-accent h-2 rounded-full" style={{width: '88%'}}></div>
                </div>
                <span className="text-xs text-muted-foreground mt-1 block">88%</span>
              </div>
            </div>

            {/* TypeScript */}
            <div className="bg-card border border-border rounded-lg p-6 hover:border-primary transition-all duration-300 group">
              <div className="text-center">
                <Icon name="Settings" size={48} className="text-primary mx-auto mb-4 group-hover:animate-glow" />
                <h3 className="text-xl font-semibold mb-2">TypeScript</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Type Safety, Interfaces, Generics, Advanced Types
                </p>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full" style={{width: '85%'}}></div>
                </div>
                <span className="text-xs text-muted-foreground mt-1 block">85%</span>
              </div>
            </div>
          </div>

          {/* Additional Skills */}
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <div className="bg-card border border-border rounded-lg p-6 text-center">
              <Icon name="Palette" size={32} className="text-primary mx-auto mb-3" />
              <h4 className="font-semibold mb-2">UI/UX Design</h4>
              <p className="text-sm text-muted-foreground">Figma, Adobe XD, Принципы дизайна</p>
            </div>
            <div className="bg-card border border-border rounded-lg p-6 text-center">
              <Icon name="GitBranch" size={32} className="text-secondary mx-auto mb-3" />
              <h4 className="font-semibold mb-2">Version Control</h4>
              <p className="text-sm text-muted-foreground">Git, GitHub, Командная разработка</p>
            </div>
            <div className="bg-card border border-border rounded-lg p-6 text-center">
              <Icon name="Smartphone" size={32} className="text-accent mx-auto mb-3" />
              <h4 className="font-semibold mb-2">Responsive Design</h4>
              <p className="text-sm text-muted-foreground">Mobile-first, Адаптивная верстка</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-card/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              <span className="text-primary">&lt;</span>
              Контакты
              <span className="text-primary">/&gt;</span>
            </h2>
            <p className="text-muted-foreground">Давайте обсудим ваш проект</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-primary">Связаться со мной</h3>
              <p className="text-muted-foreground mb-8">
                Готов к новым вызовам и интересным проектам. 
                Обращайтесь, если нужен опытный frontend-разработчик!
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="bg-primary/20 p-3 rounded-lg border border-primary/30">
                    <Icon name="Mail" size={20} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-muted-foreground">developer@example.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="bg-secondary/20 p-3 rounded-lg border border-secondary/30">
                    <Icon name="Phone" size={20} className="text-secondary" />
                  </div>
                  <div>
                    <p className="font-semibold">Телефон</p>
                    <p className="text-muted-foreground">+7 (999) 123-45-67</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="bg-accent/20 p-3 rounded-lg border border-accent/30">
                    <Icon name="Github" size={20} className="text-accent" />
                  </div>
                  <div>
                    <p className="font-semibold">GitHub</p>
                    <p className="text-muted-foreground">github.com/developer</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Имя</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                    placeholder="Ваше имя"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Сообщение</label>
                  <textarea 
                    rows={4}
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors resize-none"
                    placeholder="Расскажите о вашем проекте..."
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all duration-300 animate-glow font-semibold"
                >
                  Отправить сообщение
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <div className="container mx-auto px-6 text-center">
          <p className="text-muted-foreground">
            © 2024 Frontend Developer Portfolio. 
            <span className="text-primary ml-2">&lt;/Coded with ❤️&gt;</span>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;