const ShoeCard = ({ shoe, changeBigShoeImage, bigShoeImg }) => {

 const handleClick = () => {
   if (bigShoeImg !== shoe.bigShoe) {
     changeBigShoeImage(shoe.bigShoe);
   }
 };

 return (
   <div
     className={`border-2 rounded-xl flex  ${
       bigShoeImg === shoe.bigShoe
         ? "border-coral-red"
         : "border-transparent"
     } cursor-pointer max-sm:flex-1`}
     onClick={handleClick}
     >

     <div className='flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4 '>
       <img
         src={shoe.thumbnail}
         alt='shoe colletion'
         width={127}
         height={103.34}
         className='object-contain '
       />
     </div>
     
   </div>
 );
};

export default ShoeCard;