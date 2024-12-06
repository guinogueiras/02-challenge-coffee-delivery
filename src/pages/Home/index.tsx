import { Coffee, Package, ShoppingCart, Timer } from '@phosphor-icons/react';

import { Card } from './components/Card';

import {
  BannerContainer,
  BannerBox,
  BannerHead,
  BannerInfo,
  ContentBox,
  HomeContainer,
  ContentContainer,
  CoffeeBox,
  ContentTitle,
} from './styles';

export interface Coffee {
  id: string;
  imageSrc: string;
  tags: string[];
  title: string;
  description: string;
  price: number;
}

export function Home() {

  function createId() {
    return String(Math.random() * (new Date().getTime() - 1) + 1);
  }

  const coffeeList: Coffee[] = [
    {
      id: createId(),
      imageSrc: '/images/coffees/expresso.png',
      tags: ['Tradicional'],
      title: 'Expresso Tradicional',
      description: 'O tradicional café feito com água quente e grãos moídos',
      price: 9.90
    },
    {
      id: createId(),
      imageSrc: '/images/coffees/americano.png',
      tags: ['Tradicional'],
      title: 'Expresso Americano',
      description: 'Expresso diluído, menos intenso que o tradicional',
      price: 9.90
    },
    {
      id: createId(),
      imageSrc: '/images/coffees/expresso-cremoso.png',
      tags: ['Tradicional'],
      title: 'Expresso Cremoso',
      description: 'Café expresso tradicional com espuma cremosa',
      price: 9.90
    },
    {
      id: createId(),
      imageSrc: '/images/coffees/cafe-gelado.png',
      tags: ['Tradicional',  'Gelado'],
      title: 'Expresso Gelado',
      description: 'Bebida preparada com café expresso e cubos de gelo',
      price: 9.90
    },
    {
      id: createId(),
      imageSrc: '/images/coffees/cafe-com-leite.png',
      tags: ['Tradicional', 'Com Leite'],
      title: 'Café com Leite',
      description: 'Meio a meio de expresso tradicional com leite vaporizado',
      price: 9.90
    },
    {
      id: createId(),
      imageSrc: '/images/coffees/latte.png',
      tags: ['Tradicional', 'Com Leite'],
      title: 'Latte',
      description: 'Uma dose de café expresso com o dobro de leite e espuma cremosa',
      price: 9.90
    },
    {
      id: createId(),
      imageSrc: '/images/coffees/capuccino.png',
      tags: ['Tradicional', 'Com Leite'],
      title: 'Capuccino',
      description: 'Bebida com canela feita de doses iguais de café, leite e espuma',
      price: 9.90
    },
    {
      id: createId(),
      imageSrc: '/images/coffees/macchiato.png',
      tags: ['Tradicional', 'Com Leite'],
      title: 'Macchiato',
      description: 'Café expresso misturado com um pouco de leite quente e espuma',
      price: 9.90
    },
    {
      id: createId(),
      imageSrc: '/images/coffees/mocaccino.png',
      tags: ['Tradicional', 'Com Leite'],
      title: 'Mocaccino',
      description: 'Café expresso com calda de chocolate, pouco leite e espuma',
      price: 9.90
    },
    {
      id: createId(),
      imageSrc: '/images/coffees/chocolate-quente.png',
      tags: ['Especial', 'Com Leite'],
      title: 'Chocolate Quente',
      description: 'Bebida feita com chocolate dissolvido no leite quente e café',
      price: 9.90
    },
    {
      id: createId(),
      imageSrc: '/images/coffees/cubano.png',
      tags: ['Especial', 'Alcoólico', 'Gelado'],
      title: 'Cubano',
      description: 'Drink gelado de café expresso com rum, creme de leite e hortelã',
      price: 9.90
    },
    {
      id: createId(),
      imageSrc: '/images/coffees/havaiano.png',
      tags: ['Especial'],
      title: 'Havaiano',
      description: 'Bebida adocicada preparada com café e leite de coco',
      price: 9.90
    },
    {
      id: createId(),
      imageSrc: '/images/coffees/arabe.png',
      tags: ['Especial'],
      title: 'Árabe',
      description: 'Bebida preparada com grãos de café árabe e especiarias',
      price: 9.90
    },
    {
      id: createId(),
      imageSrc: '/images/coffees/irlandes.png',
      tags: ['Especial', 'Alcoólico'],
      title: 'Irlandês',
      description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
      price: 9.90
    },
  ];

  return (
    <HomeContainer>
      <BannerContainer>
        <BannerBox>
          <div>
            <BannerHead>
              <h1>Encontre o café perfeito para qualquer hora do dia</h1>

              <span>
                Com o Coffee Delivery você recebe seu café onde estiver, a
                qualquer hora
              </span>
            </BannerHead>

            <BannerInfo>
              <div>
                <ShoppingCart
                  size={32}
                  weight="fill"
                  className='yellow-dark'
                />
                <span>Compra simples e segura</span>
              </div>

              <div>
                <Package
                  size={32}
                  weight="fill"
                  className='gray'
                />
                <span>Embalagem mantém o café intacto</span>
              </div>

              <div>
                <Timer
                  size={32}
                  weight="fill"
                  className='yellow'
                />
                <span>Entrega rápida e rastreada</span>
              </div>

              <div>
                <Coffee
                  size={32}
                  weight="fill"
                  className='purple'
                />
                <span>O café chega fresquinho até você</span>
              </div>
            </BannerInfo>
          </div>

          <img src="/images/banner.svg" alt="Café do Coffee Delivery" />
        </BannerBox>
      </BannerContainer>

      <ContentContainer>
        <ContentBox>
          <ContentTitle>
            <h2>Nossos Cafés</h2>
          </ContentTitle>
          
          <CoffeeBox>
            {coffeeList.map(coffee => 
              <Card key={coffee.id} coffee={coffee} />
            )}
          </CoffeeBox>
        </ContentBox>
      </ContentContainer>
    </HomeContainer>
  )
}
