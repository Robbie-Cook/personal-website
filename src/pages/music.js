import React, { Component, PureComponent } from "react"

/* Imports */
/* Stylesheets etc. */
import { Heading, Text } from "../components/Typography"
import WebPage from "../components/Page"
import { Container } from "../components/Wrappers"
import { Col, Row, LayoutWrapper } from "../components/Layout"
import styled from "styled-components"
import PropTypes from "prop-types"
import Globals from "../components/Globals"

import Song from "../components/Song"

/** Media */
import meOnGuitar from "../photos/music/meOnGuitar.png"

/**
 *  A bordered box.
 *  Should be put into its own component eventually
 */
class BorderBox extends Component {
  render() {
    const Box = styled.div`
      border: 4px solid ${Globals.textColor};
      padding: 20px;
      display: flex;
      flex-direction: column;
      ${this.props.width ? `width: ${this.props.width}` : ``};
      ${this.props.height ? `height: ${this.props.height}` : ``};
    `
    return <Box>{this.props.children}</Box>
  }
}
BorderBox.propTypes = {
  width: PropTypes.string, // Should be like "50px"
  height: PropTypes.string,
  // Whether to scroll horizontally or vertically. Defaults to horizontal.
  horizontalScroll: PropTypes.bool,
}

// Main Page component
class MusicPage extends Component {
  render() {
    return (
      <WebPage>
        <LayoutWrapper>
          <Heading>Music</Heading>
          <Row>
            <Col width="100%">
              <Text>
                I love music. I'm always listening to something. I have put a
                bunch of my favourite songs below.
              </Text>
              <Text>
                I play a little piano and guitar myself in my spare time.
              </Text>
            </Col>
          </Row>
          <Heading type="h2">Favourite Songs</Heading>
          <Row>
            <Col width="50%">
              <Song
                name="Diplomat's Son"
                artist="Vampire Weekend"
                spotifySongId="6h4lC9aNr6NuQzZkbw5Lqm"
              />

              <Song
                name="Was It Something I Said?"
                artist="The Killers"
                spotifySongId="30QDlhm7KPJIgQIvptJcsg"
              />

              <Song
                name="You Shook Me All Night Long"
                artist="AC/DC"
                spotifySongId="30QDlhm7KPJIgQIvptJcsg"
              />

              <Song
                name="Just Another Girl"
                artist="The Killers"
                spotifySongId="3aVyHFxRkf8lSjhWdJ68AW"
              />
            </Col>
            <Col width="50%">
              <Song
                name="Tidal Wave"
                artist="The Killers"
                spotifySongId="2SiXAy7TuUkycRVbbWDEpo"
              />

              <Song
                name="Mr. Jones"
                artist="Counting Crows"
                spotifySongId="7n3REqDfZBpkd0bEpGu2H3"
              />

              <Song
                name="Diane Young"
                artist="Vampire Weekend"
                spotifySongId="104pmtTQOlmW8Zt2BipGKH"
              />
            </Col>
          </Row>

          <Heading type="h2">Playlists</Heading>
          <Row>
            <Col width="100%">
              <BorderBox width="100%">
                {/* TODO: put this in a separate component - Playlist */}
                <BorderBox style={{maxWidth: "550px"}}>
                  <Heading type="h3" style={{ marginTop: "-10px" }}>
                    Very important and very pretentious
                  </Heading>
                  <Song
                    name="Diane Young"
                    artist="Vampire Weekend"
                    spotifySongId="104pmtTQOlmW8Zt2BipGKH"
                  />
                </BorderBox>
              </BorderBox>
            </Col>
          </Row>

          <Heading type="h2">My Music</Heading>
          <Row>
            <Col width="50%">
              <iframe
                width="100%"
                height="450"
                scrolling="yes"
                frameborder="no"
                allow="autoplay"
                src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/39548578&color=%23222121&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=false"
              />
            </Col>
            <Col width="50%">
              {/* Photo of me */}
              <img
                src={meOnGuitar}
                style={{ width: "100%", alignItems: "flex-start" }}
                alt="Photo of me playing guitar"
              />
            </Col>
          </Row>
        </LayoutWrapper>
      </WebPage>
    )
  }
}

export default MusicPage
