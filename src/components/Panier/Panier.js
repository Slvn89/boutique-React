import { useContext } from "react"
import "./Panier.css"
import { BoutiqueContext } from "../../BoutiqueContext"
import { MenuContext } from "../../MenuContext"
const Panier = (props) => {
    const boutiqueContext = useContext(BoutiqueContext);
    const menuContext = useContext(MenuContext);
    const paniertmp = [];
    if (boutiqueContext.tabPanier.length > 0) {
        const tabPanier = boutiqueContext.tabPanier.sort();
        let i = 0;
        tabPanier.map((valeur, index) => {
            i++
            if (valeur !== tabPanier[index + 1]) {
                paniertmp.push([valeur, i])
                i = 0
            }
        })
    }
    let totalPanier = 0;
    paniertmp.map((valeur) => {
        const article = boutiqueContext.articles[valeur[0]];
        totalPanier += article.price * valeur[1];
    });


    return (
        <div className="backPanier">
            <div className="panier">

                <div className="close" onClick={
                    () => {
                        menuContext.fonctDisplayPanier(menuContext.displayPanier)

                    }

                }>  <span class="icon"><i class="fas fa-times"></i></span> 
                </div>
                <h2 className="title, animate__animated animate__bounce animate__swing	">
                    Votre panier
                </h2>
                <h3>

                    {
                        boutiqueContext.tabPanier.length > 0 ?
                            <div>Total des achats : {totalPanier} <i class="fas fa-euro-sign"></i></div>
                            :
                            <div>rien à afficher</div>
                    }
                </h3>

                {
                    /*je boucle sur le tableau tabPanier qui contient les id de mes articles achetés*/

                    boutiqueContext.tabPanier.length > 0 ?
                        paniertmp.map((valeur, index,) => {
                            let name = boutiqueContext.articles[valeur[0]].name;
                            let priceU = boutiqueContext.articles[valeur[0]].price;
                            let priceT = boutiqueContext.articles[valeur[0]].price * valeur[1];
                            let qteA = valeur[1];
                            let url = boutiqueContext.articles[valeur[0]].url;
                            //sur le modèle de mon bouton .js je surveille la qté disponibme
                            //piur rendre mon bouton actif ou inactif
                            let isActivePlus = boutiqueContext.articles[valeur[0]].qte === 0 ? true : false;


                            return (
                                <div key={index}>
                                    <div>


                                    </div>


                                    <img src={url} alt={name} max-width="20px" />

                                    <h2>
                                        {name}
                                    </h2>

                                    <div>
                                        <button className="button-menu" disabled={isActivePlus}
                                            onClick={() => {
                                                //depuis le onClick sur ce bouton j'appelle la fonction decrtementeQte liée
                                                // à mpn stateArticles (et donc mon boutiqueContext) dans App.js
                                                boutiqueContext.decrementeQte(valeur[0])
                                            }}
                                        >
                                            <span class="icon"><i class="fa fa-plus"></i></span>
                                        </button>
                                        <button className="button-menu" onClick={() => {
                                            boutiqueContext.incrementeQte(valeur[0])
                                        }}>
                                            <span class="icon"><i class="fa fa-minus"></i></span>
                                        </button>
                                    </div>
                                    <div class="panier-details">
                                    <div>
                                        <span>quantité : {qteA}, prix :  {priceU}</span> <i class="fas fa-euro-sign"></i><span>/ unité</span>
                                    </div>

                                    <div>
                                        Total pour cet article : {priceT} <i class="fas fa-euro-sign"></i>
                                    </div>

                                    <div>
                                        <br></br>
                                    </div>
                                    </div>


                                </div>
                            )
                        })
                        :
                        <div>Votre panier est actuellement vide.</div>
                }

            </div>

        </div>
    )
}
export { Panier }