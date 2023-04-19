import Link from "next/link";

export function Item({
  oldPrice,
  price,
  descont,
  description,
  image,
  location,
}: any) {
  return (
    <>
      <Link href="" legacyBehavior>
        <a href={location}>
          <div className="w-240px bg-white max-w-[240px] cursor-pointer border border-gray-300 shadow-md transition duration-300 ease-in-out transform hover:shadow-xl rounded-md border-t-0">
            <header>
              <img src={image} className="h-214 w-214" alt="" />
            </header>
            <footer className="p-[14px] pb-9 border-t border-gray-100">
              <span className="text-decoration: line-through text-[11px] text-[#666]">
                {oldPrice}
              </span>
              <div className="flex items-center gp-4">
                <h2 className="text-2xl text-[#333] font-helvetica">{price}</h2>
                <span className="text-xs text-[#00a650] ml-2">
                  {descont}% OFF
                </span>
              </div>
              <p className="text-[#00a650] text-sm pt-1">
                10x R$34,99 sem juros
              </p>
              <div className="flex items-center pt-1">
                <p className="text-[#00a650] text-sm font-medium">
                  Frete grátis{" "}
                </p>
                <img
                  src="./full-meli.png"
                  alt=""
                  className="w-[38px] h-[12px] mt-1 ml-2"
                />
              </div>
              <p className="mt-1 text-sm text-[#272727]">{description}</p>
            </footer>
          </div>
        </a>
      </Link>
    </>
  );
}
