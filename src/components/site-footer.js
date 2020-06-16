import React, {Component} from "react";
import {Link} from "react-router-dom";
import redirectURL from "../utils/redirectURL";
import content_policy from "../content-policy";
import privacy_policy from "../privacy-policy";
import about_company from "../about-company";
import app_config from "../conf/config";

class SiteFooter extends Component{
	constructor(props){
		super(props);

		this.state = {
			showedModal: false,
			title: '',
			content: '',
		};
	}

	showModalTermsConditions = () => {
		this.setState({showedModal: true, title: 'Content and Posting Policy', content: content_policy});
	};

	showModalPrivacyPolicy = () => {
		this.setState({showedModal: true, title: 'Privacy Policy', content: privacy_policy});
	};

	showModalAboutCompany = () => {
		this.setState({showedModal: true, title: 'About Us', content: about_company});
	};

	hideModal = () => {
		this.setState({showedModal: false});
	};

	render(){
		return (
			<footer className="footer-div" style={{filter: this.props.overlayed ? "blur(4px)" : "none"}}>
				<div className={"w3-modal modal-terms-conditions"}
						 style={{display: this.state.showedModal ? "block" : "none"}}>
					<div className={"w3-modal-content w3-card-4 w3-animate-zoom"}>
						<header className={"w3-container w3-border-bottom"}>
							<span onClick={this.hideModal} className={"close-button w3-button w3-xxlarge w3-display-topright w3-hover-text-white"}>&times;</span>
							<div className={"terms-title"}>{this.state.title}</div>
						</header>
						<div className={"w3-container terms-conditions-content"}
								 dangerouslySetInnerHTML={{__html: this.state.content}}>
						</div>
					</div>
				</div>
				<div className={"footer-link"}>
					<Link to="#"
						  onClick={() => redirectURL(`mailto:${app_config.SUPPORT_TEAM_LINK}`)}>
						Support
					</Link>
				</div>
				<div className={"footer-link"}>
					<Link to="#"
						  onClick={() => redirectURL("mailto:hello@everydaybelievers.com")}>
						Get in Touch
					</Link>
				</div>
				<div className={"footer-link"}>
					<Link to="#" onClick={this.showModalPrivacyPolicy}>
						Privacy Policy
					</Link>
				</div>
				<div className={"footer-link"}>
					<Link to="#" onClick={this.showModalTermsConditions}>
						Content Policy
					</Link>
				</div>
				<div className={"footer-logo"}>
					&copy; <Link to="#" onClick={this.showModalAboutCompany}>everydaybelievers.com {new Date().getFullYear()}</Link>
				</div>
			</footer>
		);
	}
}

export default SiteFooter;
