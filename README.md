# 🛍️ Dev-Wear E-commerce

Um e-commerce moderno e completo desenvolvido com Next.js 15, focado em produtos de vestuário com sistema de autenticação, carrinho de compras e pagamentos integrados.

## ✨ Funcionalidades

### 🛒 E-commerce Core
- **Catálogo de Produtos**: Visualização de produtos com variantes (cores, tamanhos)
- **Carrinho de Compras**: Adicionar, remover e gerenciar quantidades
- **Sistema de Categorias**: Navegação por categorias de produtos
- **Busca e Filtros**: Encontrar produtos facilmente

### 👤 Autenticação e Usuários
- **Login/Registro**: Autenticação com email/senha
- **Login Social**: Integração com Google OAuth
- **Perfil do Usuário**: Gerenciamento de dados pessoais
- **Endereços de Entrega**: Múltiplos endereços salvos

### 💳 Pagamentos e Pedidos
- **Checkout Seguro**: Integração com Stripe
- **Histórico de Pedidos**: Acompanhamento de compras
- **Status de Pedidos**: Pending, Paid, Canceled
- **Confirmação de Pagamento**: Webhooks do Stripe

### 🎨 Interface e UX
- **Design Responsivo**: Otimizado para mobile e desktop
- **Componentes Modernos**: UI com Radix UI e Tailwind CSS
- **Tema Escuro/Claro**: Suporte a múltiplos temas
- **Animações Suaves**: Transições e feedback visual

## 🛠️ Stack Tecnológica

### Frontend
- **Next.js 15** - Framework React com App Router
- **React 19** - Biblioteca de interface
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Estilização utilitária
- **Radix UI** - Componentes acessíveis
- **Lucide React** - Ícones modernos

### Backend
- **Next.js API Routes** - API serverless
- **Drizzle ORM** - Query builder type-safe
- **PostgreSQL** - Banco de dados relacional
- **Better Auth** - Autenticação moderna

### Integrações
- **Stripe** - Processamento de pagamentos
- **Google OAuth** - Login social
- **React Query** - Gerenciamento de estado servidor

### Ferramentas de Desenvolvimento
- **ESLint** - Linting de código
- **Prettier** - Formatação automática
- **Drizzle Kit** - Migrações e studio do banco

## 🚀 Como Executar

### Pré-requisitos
- Node.js 18+ 
- PostgreSQL
- Conta no Stripe
- Conta no Google Cloud (para OAuth)

### 1. Clone o repositório
```bash
git clone <repository-url>
cd bewear-bootcamp
```

### 2. Instale as dependências
```bash
npm install
```

### 3. Configure as variáveis de ambiente
Crie um arquivo `.env.local` na raiz do projeto:

```env
# Database
DATABASE_URL="postgresql://username:password@localhost:5432/bewear_db"

# Authentication
BETTER_AUTH_SECRET="your-secret-key"
BETTER_AUTH_URL="http://localhost:3000"

# Google OAuth
GOOGLE_CLIENT_ID="your-google-client-id"
GOOGLE_CLIENT_SECRET="your-google-client-secret"

# Stripe
STRIPE_SECRET_KEY="sk_test_..."
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY="pk_test_..."
STRIPE_WEBHOOK_SECRET="whsec_..."

# App
NEXT_PUBLIC_APP_URL="http://localhost:3000"
```

### 4. Configure o banco de dados
```bash
# Execute as migrações
npm run drizzle

# Popule o banco com dados iniciais
npm run drizzle:seed
```

### 5. Execute o projeto
```bash
# Desenvolvimento
npm run dev

# Produção
npm run build
npm start
```

O projeto estará disponível em `http://localhost:3000`

## 📁 Estrutura do Projeto

```
src/
├── actions/           # Server Actions do Next.js
├── app/              # App Router (páginas e layouts)
│   ├── api/          # API Routes
│   ├── authentication/ # Páginas de login/registro
│   ├── cart/         # Páginas do carrinho
│   ├── checkout/     # Processo de checkout
│   └── ...
├── components/       # Componentes React
│   ├── common/       # Componentes compartilhados
│   └── ui/           # Componentes de UI base
├── db/              # Configuração do banco
├── hooks/           # Custom hooks
├── lib/             # Utilitários e configurações
└── providers/       # Context providers
```

## 🗄️ Schema do Banco

### Principais Tabelas
- **users** - Dados dos usuários
- **products** - Catálogo de produtos
- **product_variants** - Variantes (cores, tamanhos)
- **categories** - Categorias de produtos
- **carts** - Carrinhos de compra
- **cart_items** - Itens no carrinho
- **orders** - Pedidos realizados
- **order_items** - Itens dos pedidos
- **shipping_addresses** - Endereços de entrega

## 🔧 Scripts Disponíveis

```bash
npm run dev          # Servidor de desenvolvimento
npm run build        # Build de produção
npm run start        # Servidor de produção
npm run lint         # Verificação de código
npm run drizzle      # Executar migrações
npm run drizzle:studio # Interface visual do banco
npm run drizzle:seed # Popular banco com dados
```

## 🌐 Deploy

### Vercel (Recomendado)
1. Conecte seu repositório no Vercel
2. Configure as variáveis de ambiente
3. Deploy automático a cada push

### Outras Plataformas
- **Railway** - Para banco PostgreSQL
- **Supabase** - PostgreSQL + Auth
- **PlanetScale** - MySQL alternativo

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 👨‍💻 Desenvolvedor

**Leonardo Merlo**
- Desenvolvido como parte do bootcamp Dev-Wear
- E-commerce completo com foco em boas práticas e performance

---

⭐ Se este projeto te ajudou, considere dar uma estrela!