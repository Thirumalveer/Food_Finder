import React from 'react'

const Products = ({data}) => {
    console.log(data)
    return (
        <div>
            <div className="row">
                {data.map(data =>  
                <div className="col-md-4">
                    <div class="card" style={{"width": "18rem"}}>
                    <img class="card-img-top" src={data.image} alt="Card image cap" />
                    <div class="card-body">
                    <center>
                        <h5 class="card-title">{data.name}</h5>
                        <p class="card-text">Total Amount Of Calories : {Math.round(data.caloriesPerServing)}</p>
                        <h6 class="card-title">Rating:{data.rating}</h6>
                        <a href="#" class="btn btn-primary">Buy</a>

                        </center>
                    </div>
                    </div>
                </div>
                )}
            </div>
        </div>
    )
}

export default Products
