import React from 'react';
import { Link } from "gatsby"
import socialMedia from "../../../data/socialMedia.json";
import data from "./../../../data/data";
import { FooterStyle, FooterBody, SubRight, CopyRight, MediaLink, FooterSocialMedia } from './style'
import {ContainerLayout, ButtonDefault} from '../../common'

const Footer = () => {
	return (
		<>
			<FooterStyle>
				<ContainerLayout>
					<FooterBody>
						<FooterSocialMedia>
							{socialMedia.map(({ id, name, url }) => (
								<li key={id}> 
									<MediaLink className="lined-link" href={url} target="_blank" rel="noopener noreferrer" aria-label={`follow us on ${name}`}>
										{name}
									</MediaLink> 
								</li>
							))}
						</FooterSocialMedia>
						<div>
							<p className="text-primary quote"> Sie haben Interesse? </p>
							<ButtonDefault href={`mailto:${data.SiteContact.email}`}> Kontakt </ButtonDefault>
						</div>
					</FooterBody>
					<div className="box">
						<SubRight> Good design doesn't date. Bad design does. </SubRight>
						<Link to="/impressum"><a>Impressum </a> -</Link>
						<Link to="/datenschutz"><a> Datenschutz</a></Link>

						
						<CopyRight className="text-dark">
							© 
							<span> {new Date().getFullYear() } </span> 
							 {data.SiteAuthor} </CopyRight>
					</div>
				</ContainerLayout>
			</FooterStyle>
		</>
	)
}

export default Footer;