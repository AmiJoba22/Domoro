export default function Home() {
    return (
    
 
    <section 
      className="relative min-h-[85vh] md:min-h-screen w-full flex items-center justify-center bg-gray-900 bg-cover bg-center bg-no-repeat px-4 overflow-hidden"
      style={{
        backgroundImage: "url('/assets/domoro.imgs/benechin.jpeg')",
      }}
    >
     
      <div className="absolute inset-0 bg-black/65 backdrop-blur-[2px]"></div>

      
      <div className="relative z-10 max-w-2xl text-center flex flex-col items-center justify-center text-white">
        
    
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl mb-6 max-w-xl leading-tight">
          Delicious Local Flavors
        </h1>

        
        <p className="text-base sm:text-lg text-gray-200 mb-8 max-w-md leading-relaxed font-medium">
          Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
        </p>

        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-sm sm:max-w-none">
          
          <button className="w-full sm:w-auto bg-orange-600 hover:bg-orange-500 text-white font-bold py-3.5 px-8 rounded-lg shadow-lg transform transition active:scale-95 duration-200">
            Order Now
          </button>
          
          <button className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white font-bold py-3.5 px-8 rounded-lg border border-white/30 backdrop-blur-sm transform transition active:scale-95 duration-200">
            See Menu
          </button>

        </div>

      </div>
    </section>
  );
}


    
