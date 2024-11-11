import React from 'react'
import { AsideLeft } from '../components/AsideLeft'

const Explore = () => {
  return (
<>
    <div>
          {/* <MobileNavBar /> */}

          <div className="flex justify-center px-5 sm:px-32 md:mt-4">
              <div className="flex h-screen w-screen">

                  <AsideLeft />

                  <main className="md:mx-4 w-full sm:basis-2/3">

                    EXPLOOORE

                  </main>
                </div>
            </div>
    </div>
</>
  )
}

export default Explore