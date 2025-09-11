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

---

⭐ Se este projeto te ajudou, considere dar uma estrela!
