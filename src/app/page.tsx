import { desc } from "drizzle-orm";
import Head from "next/head";
import Image from "next/image";

import CategorySelector from "@/components/common/category-selector";
import Footer from "@/components/common/footer";
import { Header } from "@/components/common/header";
import ProductList from "@/components/common/product-list";
import { db } from "@/db";
import { productTable } from "@/db/schema";

const Home = async () => {
  const products = await db.query.productTable.findMany({
    with: {
      variants: true,
    },
  });
  const newlyCreatedProducts = await db.query.productTable.findMany({
    orderBy: [desc(productTable.createdAt)],
    with: {
      variants: true,
    },
  });
  const categories = await db.query.categoryTable.findMany({});

  return (
    <>
      <Head>
        <title>DEV-WEAR</title>
        <meta name="description" content="Dev-Wear" />
      </Head>
      <Header />
      <div className="mx-auto max-w-screen-xl px-3 md:px-4">
        <div className="space-y-6">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="w-full overflow-hidden rounded-lg md:h-96 lg:h-[28rem]">
              <Image
                src="/banner-01.png"
                alt="Leve uma vida com estilo"
                height={0}
                width={0}
                sizes="(min-width: 768px) 50vw, 100vw"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="w-full overflow-hidden rounded-lg md:h-96 lg:h-[28rem]">
              <Image
                src="/banner-02.png"
                alt="Leve uma vida com estilo"
                height={0}
                width={0}
                sizes="(min-width: 768px) 50vw, 100vw"
                className="w-full h-full object-contain"
              />
            </div>
          </div>

        <div>
          <CategorySelector categories={categories} />
        </div>

        <ProductList products={products} title="Mais vendidos" />

        

        <ProductList products={newlyCreatedProducts} title="Novos produtos" />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
