import Card from "../Card/Card";
import "./Boutique.css";
import { useState } from "react";
function Boutique(props) {

    return (
        <section className="boutique">
            {
                props?.articles.map((value, index) => {
                    return (
                        <Card
                            article={value}
                            key={index}
                        ></Card>
                    )
                })
            }

        </section>
    )
}

export default Boutique;