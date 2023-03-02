import React from 'react'
import Banner from '../../components/Banner'
import bannerHomeImage from '../../assets/bannerHome.png'
import Card from '../../components/Card'
function Home() {
  const bannerHomeText = 'Chez vous, partout et ailleurs'
  return (
    <div className="home">
      <Banner bannerImage={bannerHomeImage} bannerText={bannerHomeText} />
      <Card />
    </div>
  )
}

export default Home
