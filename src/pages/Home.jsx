// import { Products } from "../data/Product";
// import ProductCard from "../component/ProductCard";
// export default function Home() {
//   return (
//     <div className="flex gap-4 bg-green-500 w-full h-[100vh] overflow-x-auto">
//       {/* {Products.map((item) => {
//         return <ProductCard key={item.id} item={item} />;
//       })} */}
//       <div className="">1</div>
//       <div className="bg-red-700 border-2 border-amber-200 rounded-lg h-fit w-fit px-10 py-2">
//         Vaishavisafwefasdfasdf
//       </div>
//       <div className="bg-red-700 border-2 border-amber-200 rounded-lg h-fit w-fit px-10 py-2">
//         3
//       </div>
//       <div>4</div>
//       <div>5</div>
//       <div>6</div>
//       <div>7</div>
//       <div>3</div>
//       <div>4</div>
//       <div>5</div>
//       <div>6</div>
//       <div>7</div>
//       <div>3</div>
//       <div>4</div>
//       <div>5</div>
//       <div>6</div>
//       <div>7</div>
//       <div>3</div>
//       <div>4</div>
//       <div>5</div>
//       <div>6</div>
//       <div>7</div>
//       <div>3</div>
//       <div>4</div>
//       <div>5</div>
//       <div>6</div>
//       <div>7</div>
//       <div>3</div>
//       <div>4</div>
//       <div>5</div>
//       <div>6</div>
//       <div>7</div>
//       <div>3</div>
//       <div>4</div>
//       <div>5</div>
//       <div>6</div>
//       <div>7</div>
//       <div>3</div>
//       <div>4</div>
//       <div>5</div>
//       <div>6</div>
//       <div>7</div>
//       <div>3</div>
//       <div>4</div>
//       <div>5</div>
//       <div>6</div>
//       <div>7</div>
//       <div>3</div>
//       <div>4</div>
//       <div>5</div>
//       <div>6</div>
//       <div>7</div>
//       <div>3</div>
//       <div>4</div>
//       <div>5</div>
//       <div>6</div>
//       <div>7</div>
//       <div>3</div>
//       <div>4</div>
//       <div>5</div>
//       <div>6</div>
//       <div>7</div>
//       <div>3</div>
//       <div>4</div>
//       <div>5</div>
//       <div>6</div>
//       <div>7</div>
//       <div>3</div>
//       <div>4</div>
//       <div>5</div>
//       <div>6</div>
//       <div>7</div>
//       <div>3</div>
//       <div>4</div>
//       <div>5</div>
//       <div>6</div>
//       <div>7</div>
//     </div>
//   );
// }
{
  /*We import { products } in home.jsx because the home page needs that data to display the cards.*/
}
import { Products } from "../data/Product";
import ProductCard from "../component/ProductCard";
export default function Home() {
  return (
    <div className="flex gap-3">
      {Products.map((item) => {
        return <ProductCard key={item.id} item={item} />;
      })}
    </div>
  );
}
