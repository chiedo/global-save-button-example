import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <p>Want to know what's going on under the hood? Check out the <a href="https://github.com/chiedolabs/global-save-button-example" target="_blank">online repo</a> or view the tutorial at <a href="https://labs.chie.do/react-redux-save-button-tutorial/" target="_blank">labs.chie.do</a>.</p>
      <p className='chiedo-labs-attribution'>
        <link href='https://fonts.googleapis.com/css?family=Open+Sans:800' rel='stylesheet' type='text/css' />
        <a href='https://labs.chie.do' target='_blank' style={{textDecoration: 'none', color: 'inherit'}}>
        Mobile apps and Web Development by&nbsp;
           <svg xmlns="http://www.w3.org/2000/svg" width="70px" height="9px">
              <title>Chiedo Labs</title>
              <desc>Mobile Apps, WordPress, Django, and Ruby on Rails Web Development</desc>
              <text x="0" y="9" fontSize="10" style={{fontWeight: 800, fill: '#000000', fontFamily: 'Open Sans'}}>
                <tspan style={{fill: '#000000'}}>CHIE</tspan><tspan style={{fill: '#9E161E'}}>DO</tspan> <tspan style={{fill: '#000000'}}>LABS</tspan>
              </text>
          </svg>
        </a>
      </p>
    </footer>
  );
};

export default Footer;