/*
 * @Description: 
 * @Author: @[caohefei]
 * @Date: 2020-03-31 16:10:07
 * @LastEditors: @[caohefei]
 * @LastEditTime: 2020-05-11 10:08:07
 */

import React from 'react';

import './index.less'
import './index.less'
import   faceBook from './face-book.png'
import   twitter from './twitter.png'
import   linkedin from './linkedin.png'
import   logo from './logo.png'

function Footer () {
  return (
    <div className="footer">
	<div className="publicblock">
		<div className="f1">
			<div className="logo"><a href="###"><img src={logo} /></a></div>
			<div className="text1">HIBLIM</div>
			<div className="text1">info@hiblim.com</div>
			<ul>
				<li><a href="https://www.facebook.com/login/" className="iconfont">
					<img src={faceBook}  /></a>
				</li>
				<li><a href="https://twitter.com" className="iconfont" style={{lineHheight:'40px'}}>
					<img src={twitter}  /></a></li>
				<li><a href="https://www.linkedin.com/" className="iconfont" style={{lineHheight:'30px'}}>
					<img src={linkedin} />
				</a></li>
			</ul>
		</div>
		<div className="f2">
			<dl>
				<dt>Services</dt>
				<dd>
					<a href="incorporation.html">Company Incorporation</a>
					<a href="secretary.html">Company Secretary</a>
					<a href="accounting.html">Accounting & Auditing</a>
				</dd>
			</dl>
			<dl>
				<dt>Company</dt>
				<dd>
					<a href="about-us.html">About Us</a>
					<a href="contact-us.html">Contact Us</a>
				</dd>
			</dl>
		</div>
	</div>
	<div className="publicblock f3">
		<span className="s1">Copyright © 2020 STRINT LIMITED | 135 Bonham, Strand Trade Centre, 135 Bonham Strand, Sheung Wan, Hong Kong | +852 57011656</span>
	</div>
    {/* <div className="totop" onclick="func.totop()"></div> */}
    </div>);
}

export default Footer;
