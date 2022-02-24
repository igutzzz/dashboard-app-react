import React from "react";
import { ReactDOM } from "react";
import '../styles/Sales.css'



export const Sales = () => {
    return(
        <section className="Sales">
            <h1>Vendas</h1>
            <div className="SalesInput">
                <label>
                    Produto
                    <input type="text" name="Venda" id="venda" />
                    </label>
                <label>
                    Preço
                    <input type="number" name="Preço" id="preço" />
                    </label>           
                <label>
                    Data
                    <input type="date" name="Data" id="data" />
                    </label>
                
                
                
            </div>

        </section>
    )
}