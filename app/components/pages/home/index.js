import React from 'react';

import SnappVideoSlider from '../../snappVideoSlider';

const slider1 = {
	loop: false,
	margin: 15,
	nav: false,
	dots: true,
	autoplay:true,
	type: 'single',
	itemSize: '100%'
}
const slider2 = {
	loop: false,
	dots: false,
	adaptive:true,
	sliderTitle:"آموزش",
	showMoreLink:"home",
	multi: true,
	type: 'multiCard',
	itemSize:"240px"
}

class HomePage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {

		}
	}

	componentDidMount(){
		console.log(this.props.data)
	}


	render() {
		return (
			<React.Fragment>
				{!this.state.loading ?
					<div className="home">
						<div className="main-slider topP15 bottomP15 bg-grey-240">
							<div className="container">
								<div className="row">
									<div className="col-12">
										<SnappVideoSlider {...slider1} uniName='main-slider' data={this.props.mockMainSlider} />
									</div>
								</div>
							</div>
						</div>
						<div className="container">
							<div className="row topM20">
								<div className="col-12 leftP">
									<SnappVideoSlider {...slider2} uniName='slider2' data={this.props.data} />
								</div>
							</div>
						</div>
					</div> :
					<div className="center hFull">
						<Loading />
					</div>
				}
			</React.Fragment>
		);
	}
}

export default HomePage;
