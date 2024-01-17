import React, {Component} from 'react'
import Gelato from './Gelato'

class Menu extends Component {

    constructor(props) {
        super(props);
        this.state = {
          isLoading: false,
          isError: false,
          products: [],
          filteredProducts: [],
          selected: 0,
          categories: []
        };
      }

      filtraProdotti = (category, index) => {
        this.setState({selected: index});

        if (category === 'Tutti') {
            this.setState({filteredProducts: this.state.products})
        } else {
            const prodottiFiltrati = this.state.products.filter((el) => el.categoria === category ? el : "")
            this.setState({filteredProducts: prodottiFiltrati})
        }
      }

      fetchData = async () => {
        this.setState({isLoading: true, isError: false});

        try {
            const url = "https://react--course-api.herokuapp.com/api/v1/data/gelateria";
            const resp = await fetch(url)
            const prod = await resp.json()
            
            const categories = Array.from(
                new Set(prod.data.map((pr) => pr.categoria))
            );
            categories.unshift("Tutti")

            this.setState({
                products: prod.data,
                filteredProducts: prod.data,
                categories: categories,
                isLoading: false
            })
        } catch (error) {
            console.log(error);
            this.setState({isLoading: false, isError: true});
        }
      }

      componentDidMount() {
        this.fetchData();
      }


    render() {

        const {isLoading, isError, categories, filteredProducts, selected} = this.state;

        return (
            <div className="container">
                <h4 style={{  textAlign: "center", textTransform: "uppercase" }}>
                    Le Nostre Scelte
                </h4>
                {!isLoading && !isError ? (
                    <>
                        <div className="lista-categorie">
                            {categories.map((category, index) => 
                            <button 
                                key={index}
                                className={`btn btn-selector ${selected === index && "active"}`}
                                onClick={() => this.filtraProdotti(category, index)}>
                                    {category}
                                </button>
                            )}
                        </div>
                        <hr />
                        <div className="vetrina">
                            {filteredProducts.map((product) => 
                                <Gelato key={product.id} {...product} />
                            )}
                        </div>
                    </>
                ) : !isLoading && isError ? (
                    <h4 style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                    }}
                    >
                        Errore...
                    </h4>
                ) : ( 
                    <h4
                    style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                    }}
                    >Caricamento...</h4>
                )
            }
            </div>
        )
    }

}

export default Menu