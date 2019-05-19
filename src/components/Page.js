// Root container for a page

/* Imports */
/* Stylesheets etc. */
import "../css/global-styles.css"
import React, { Component } from "react"
import styled from "styled-components"
import Theme from "./Theme"
import NavigationBar from "./NavigationBar"
import MyLink from "./MyLink"
import MyHelmet from "./MyHelmet"
import LoadingScreen from "./Loading"

// Styles for component
const StyledPage = styled.div`
  //  Overwrite bootstrap for containers

  background-color: ${Theme.page.backgroundColor};

  display: flex;
  flex-direction: row;
  padding: ${Theme.page.padding};

  // Mobile styles
  @media (max-width: ${Theme.mobile.size}px) {
    flex-direction: column;
    padding: ${Theme.mobile.padding};
  }
`

/* Navigation links, which are passed to navbar.js */
let navigationLinks = [
  new MyLink("Home", "/"),
  new MyLink("About", "/about"),
  new MyLink("Music", "/music"),
  new MyLink("Projects", "/projects"),
]

// Main Page component
class WebPage extends Component {
  componentWillMount() {
    // Loading screen
    var div = document.createElement("div")
    // Style for inserted element
    div.classList.add("loadingPage")

    const styles = `
         <style type="text/css">
            /* Styles for loading page */
            .loadingPage {
                width:100%; 
                height:100%; 
                background-color: ${Theme.page.backgroundColor}; 
                position: fixed; 
                z-index: 100; 
                top:0;
                display: flex;
                justify-content: center;
                align-items: center;
            }
            .hidden {
                display: none!important
            }

            /* Styles for spinner */
            .spinner::before {
                font-size: 7em;
            }
         </style>
    `
    div.innerHTML = `${styles}<i class="spinner fas fa-circle-notch"></i>`
    div.classList.add("loadingScreen")
    document.body.appendChild(div)
  }
  render() {
    return (
      <div>
        <MyHelmet /> {/* SEO Stuff */}
        <div>
          <NavigationBar pages={navigationLinks} />
          <div style={this.props.style}>
            <StyledPage style={this.props.style}>
              {this.props.children}
            </StyledPage>
          </div>
        </div>
      </div>
    )
  }
  componentDidMount() {
    // Hide loading screeen
    // Loading screen defined in index.html
    document.getElementsByClassName("loadingScreen")[0].classList.add("hidden")
  }
}

export default WebPage
