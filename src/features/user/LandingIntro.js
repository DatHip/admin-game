import TemplatePointers from "./components/TemplatePointers"



function LandingIntro(){

    return(
        <div className="min-h-full hero rounded-l-xl bg-base-200">
            <div className="py-12 hero-content">
              <div className="max-w-md">

              <h1 className='text-3xl font-bold text-center '><img src="/logoMeepo.png" className="inline-block w-12 mr-2 mask mask-circle" alt="Meepo-logo" />Meepo Admin</h1>

                <div className="mt-12 text-center"><img src="./intro.png" alt="Meepo Admin Template" className="inline-block w-48"></img></div>
              
              {/* Importing pointers component */}
              <TemplatePointers />
              
              </div>

            </div>
          </div>
    )
      
  }
  
  export default LandingIntro