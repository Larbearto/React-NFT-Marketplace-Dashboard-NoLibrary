import React from 'react'
import './MainContainer.css'
import Banner from '../Assets/1.jpeg'
import CardMain from '../Components/CardMain'
import Card1 from '../Assets/card1.jpeg'
import Card2 from '../Assets/card2.jpeg'
import Card3 from '../Assets/card3.jpeg'
import Card4 from '../Assets/card4.jpeg'
import Card5 from '../Assets/card5.jpeg'
import Card6 from '../Assets/card6.jpeg'
import MainRightTop from './MainRightTop'
import MainRightBottom from './MainRightBottom'

function MainContainer() {
	return (
		<div className='mainContainer'>
			<div className='left'>
				<div
					className='banner'
					style={{
						background: `url(${Banner})`,
						backgroundRepeat: 'no-repeat',
						backgroundPosition: 'center',
						backgroundSize: 'cover'
					}}
				>
					<div className='textContainer'>
						<h1>Round Hall</h1>
						<h2>1.5 ETH</h2>
						<p>Uploaded by Cod3Brew</p>
						<div className='bid'>
							<a href='#' className='button1'>
								Bid Now
							</a>
							<p>
								Ending In <span>2d:15h:20m</span>
							</p>
						</div>
					</div>
				</div>

				<div className='cards'>
					<div className='filters'>
						<div className='popular'>
							<h2>Feed</h2>
							<a href='#' className='button2'>
								Popular
							</a>
						</div>
						<div className='filter_buttons'>
							<a href='#' className='button1'>
								All
							</a>
							<a href='#' className='button2'>
								Illustration
							</a>
							<a href='#' className='button2'>
								Art
							</a>
							<a href='#' className='button2'>
								Games
							</a>
						</div>
					</div>

					<main>
						<CardMain imgSrc={Card1} title={'Cubic Thunder'} hearts={'65'} />
						<CardMain imgSrc={Card2} title={'Pokemon Ball'} hearts={'45'} />
						<CardMain imgSrc={Card3} title={'Pyramid God'} hearts={'55'} />
						<CardMain imgSrc={Card4} title={'Stunning Cube'} hearts={'75'} />
						<CardMain imgSrc={Card5} title={'Start Crystal'} hearts={'35'} />
						<CardMain imgSrc={Card6} title={'Crystal Bird'} hearts={'85'} />
					</main>
				</div>
			</div>
			<div className='right'>
				<MainRightTop />
				<MainRightBottom />
			</div>
		</div>
	)
}

export default MainContainer
