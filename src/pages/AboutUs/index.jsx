import React from 'react'
import Banner from '../../components/Banner'
import bannerAboutUsImage from '../../assets/bannerAboutUs.png'
import Collapse from '../../components/Collapse'
function AboutUs() {
  return (
    <div className="about-us">
      <Banner bannerImage={bannerAboutUsImage} bannerText="" />

      <div className="about-us__collapse-component">
        <Collapse
          title={'Fiabilité'}
          content={
            'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.'
          }
          className={'about-us__collapse'}
        />
        <Collapse
          title={'Respect'}
          content={
            'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.'
          }
          className={'about-us__collapse'}
        />
        <Collapse
          title={'Service'}
          content={
            "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
          }
          className={'about-us__collapse'}
        />
        <Collapse
          title={'Sécurité'}
          content={
            "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
          }
          className={'about-us__collapse'}
        />
      </div>
    </div>
  )
}

export default AboutUs
