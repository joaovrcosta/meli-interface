import Image from "next/image";
import Link from "next/link";
import { Item } from "../components/Item";

export default function Home() {
  return (
    <>
      <header className="bg-[#fff159] flex flex-col justify-center items-center border-b border-gray-300">
        <div className="max-w-[1250px]">
          <div className="bg-[#fff159] w-[1220px] flex  items-center pt-2 pb-2 justify-between">
            <img
              src="./logo-pt__large_plus.png"
              alt=""
              className="cursor-pointer"
            />
            <input
              className="py-2 ps-5 pr-14 w-[36.25rem] mr-6 text-opacity-70 bg-white shadow shadow-bottom"
              type="text"
              placeholder="Buscar produtos, marcas e muito mais..."
            />
            <img
              src="./D_NQ_618580-MLA52432822706_112022-OO.png"
              alt=""
              className="h-10 w-[340px] cursor-pointer"
            />
          </div>
          <div className="max-w-[1250px] bg-[#fff159] w-[1220px] flex pt-2 pb-2  justify-between m">
            <div className="text-black text-sm">
              <Link href="" legacyBehavior>
                <a href="">São Paulo 03572000</a>
              </Link>
            </div>
            <div className="flex gap-5 text-sm text-black opacity-60  mr-20 font-light">
              <select className="form-select block bg-transparent">
                <option>Categorias</option>
                <option>Opção 2</option>
                <option>Opção 3</option>
              </select>
              <Link href="" legacyBehavior>
                <a href="">Ofertas do dia</a>
              </Link>
              <Link href="" legacyBehavior>
                <a href="">Histórico</a>
              </Link>
              <Link href="" legacyBehavior>
                <a href="">Supermercado</a>
              </Link>
              <Link href="" legacyBehavior>
                <a href="">Moda</a>
              </Link>
              <Link href="" legacyBehavior>
                <a href="">Vender</a>
              </Link>
              <Link href="" legacyBehavior>
                <a href="">Contato</a>
              </Link>
            </div>
            <div className="flex gap-5 text-sm text-black font-light">
              <Link href="" legacyBehavior>
                <a href="">Crie a sua conta</a>
              </Link>
              <Link href="" legacyBehavior>
                <a href="">Entre</a>
              </Link>
              <Link href="" legacyBehavior>
                <a href="">Compras</a>
              </Link>
            </div>
          </div>
        </div>
      </header>
      <main className="flex justify-center items-center">
        <div className="" id="carrossel"></div>
        <div className="max-w-[1250px]">
          <div className="pt-11 pb-6">
            <div className="flex">
              <h2 className="text-base tracking-widest mb-4 text-[#666]">
                COMPRE OS PRODUTOS QUE VIU NA TV 🔥
              </h2>
              <a href="" className="text-[#3485f9] ml-4">
                Ver mais
              </a>
            </div>
            <section className="flex gap-3">
              <Item
                oldPrice="R$450,00"
                price="R$300,00"
                descont="40"
                description="Fritadeira Sem Óleo Air Fryer Afn40-bft 4l 1500w Mondial "
                image="./air-freier.png"
                location="http://localhost:3000/product/1"
              />
              <Item
                oldPrice="R$900,00"
                price="R$760,00"
                descont="30"
                description="Jogo De Panelas Tramontina Turim Antiaderente 10 Peças "
                image="./panelas.jpg"
              />
              <Item
                oldPrice="R$450,00"
                price="R$300,00"
                descont="40"
                description="Fritadeira Sem Óleo Air Fryer Afn40-bft 4l 1500w Mondial "
                image="./item-1.jpg"
              />
              <Item
                oldPrice="R$900,00"
                price="R$760,00"
                descont="30"
                description="Jogo De Panelas Tramontina Turim Antiaderente 10 Peças "
                image="./item-2.jpg"
              />
              <Item
                oldPrice="R$450,00"
                price="R$300,00"
                descont="40"
                description="Fritadeira Sem Óleo Air Fryer Afn40-bft 4l 1500w Mondial "
                image="./air-freier.png"
              />
            </section>
          </div>
          <section>
            <div className="flex max-w-[1250px] justify-between">
              <section className="pt-2 pb-2 cursor-pointer">
                <img
                  src="./propaganda-1.jpg"
                  alt=""
                  className="h-[165px] w-[615px] rounded-md"
                />
              </section>
              <section className="rounded-md pt-2 cursor-pointer">
                <img
                  src="./propaganda-2.jpg"
                  alt=""
                  className="h-[165px] w-[615px] rounded-md"
                />
              </section>
            </div>
          </section>
          <section>
            <div className="pt-5 pb-1 text-[#4a4a4a] text-base">
              <h2>MELHORES OFERTAS COM CUPOM 💛</h2>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
