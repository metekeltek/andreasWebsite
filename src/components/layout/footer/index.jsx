import React from 'react';
import { Link } from "gatsby"
import socialMedia from "../../../data/socialMedia.json";
import data from "./../../../data/data";
import { FooterStyle, FooterBody, SubRight, CopyRight, MediaLink, FooterSocialMedia } from './style'
import {ContainerLayout, ButtonDefault} from '../../common'
import { FaInstagram } from 'react-icons/fa';


const Footer = () => {
	return (
		<>
			<FooterStyle>
				<ContainerLayout>
					<FooterBody>
						<div>
							<p className="text-primary quote"> DU HAST INTERESSE? </p>
							<ButtonDefault style={{marginRight:50}} href={`mailto:${data.SiteContact.email}`}> E-mail </ButtonDefault>
							<ButtonDefault href="https://www.instagram.com/babymassagemitherz/" target="_blank" > <FaInstagram/> Instagram </ButtonDefault>

						</div>
					</FooterBody>
					
					<div className="box">
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