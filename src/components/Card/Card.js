import React, { useContext } from 'react';
import Bouton from '../Bouton/Bouton.js';
import styles from './Card.module.css';
import { BoutiqueContext } from '../../BoutiqueContext.js';

const Card = (props) => {
  const boutiqueContext = useContext(BoutiqueContext);
  return (
    <div className={styles.Card}>

      <img src={props.article.url} alt="" />
        {
          props.article.promo ? <p className={styles.promo} >PROMO</p> : <></>
        }
      <div className={styles.cardDetails}>

        <div><h2 className={styles.name}>{props.article.name}</h2></div>
        <div><strong className={styles.price}>{props.article.price} <i class="fas fa-euro-sign"></i></strong></div>


        <p className={styles.description}>{props.article.description}</p>
      </div>
      <div className={styles.Asaisir} >
        <p >A saisir : <i className={styles.qte}> {boutiqueContext.articles[props.article.id].qte}</i> exemplaires</p>
        <Bouton id={props.article.id} action={false} label={props.article.qte} />
      </div>

    </div>
  );
}

//function Card(props){
//  return (<div className={styles.Card}>
//  Card Component
//</div>)
// }

Card.propTypes = {};

Card.defaultProps = {};

export default Card;
