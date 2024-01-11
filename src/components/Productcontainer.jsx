import React from 'react'
import Product from './Product'
import "./Productcontainer.css"

import lapi2 from '../lapi2.jpeg'
import lapi3 from '../lapi3.jpeg'
import lapi4 from '../lapi4.jpeg'
import lapi6 from '../lapi6.jpeg'

function Productcontainer() {
  return (
    <div className='main-container' style={{ display: "flex", flexWrap: "wrap", }}>
      <Product
        image={lapi2}
        price="7500"
        desc="Acer Laptop"
        loc="Deccan"
        date="Today"

      />
      
     
      <Product
        image={lapi3}
        price="5894"
        desc="HP Laptop"
        loc="Dhayri"
        date="Yesterday"

      />
      <Product
        image={lapi4}
        price="9999"
        desc="Lenovo Laptop"
        loc="Pimpri"
        date="2/12/23"

      />

      <Product
        image={lapi6}
        price="12545"
        desc="Asus Laptop"
        loc="Kothrud"
        date="14/4/23"

      />
      <Product
        image={lapi4}
        price="9999"
        desc="Lenovo Laptop"
        loc="Pimpri"
        date="2/12/23"

      />

      <Product
        image={lapi6}
        price="12545"
        desc="Asus Laptop"
        loc="Kothrud"
        date="14/4/23"

      /><Product
      image={lapi4}
      price="9999"
      desc="Lenovo Laptop"
      loc="Pimpri"
      date="2/12/23"

    />

    <Product
      image={lapi6}
      price="12545"
      desc="Asus Laptop"
      loc="Kothrud"
      date="14/4/23"

    />
    

    </div>
  )
}

export default Productcontainer
