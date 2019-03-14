import React, { Component } from "react";
import Navbar from "../layout/Navbar";

import EnvPick from "./EnvPick";
import HistorySearch from "./HistorySearch";
import HistoryMain from "./HistoryMain";
import HistoryAna from "./HistoryAna";

import styled from "styled-components";

const Section = styled.div`
  height: 80vh;
`;

const Row = styled.div`
  width: 95%;
`;

const Container = styled.div`
  border-radius: 6px;
  height: 100%;
  position: relative;
  box-shadow: 5px 3px 6px rgba(0, 0, 0, 0.3);
`;

const SearchContainer = styled(Container)`
  color: white;
  background: #454545;
  padding: 0 5px;
`;

const AnalyticContainer = SearchContainer;

const MainContainer = styled(Container)`
  display: table;
  background: #bcdaf2;
  width: 100%;
  padding: 15px 9px;
`;

export default class History extends Component {
  render() {
    return (
      <React.Fragment>
        <Row className="row">
          <Navbar active="history" logo={true} />
        </Row>
        <Row className="row">
          <Section className="col s12 m3">
            <SearchContainer className="history-search">
              <EnvPick />
              <HistorySearch />
            </SearchContainer>
          </Section>
          <Section className="col s12 m6">
            <MainContainer className="history-main">
              <HistoryMain />
            </MainContainer>
          </Section>
          <Section className=" col s12 m3 ">
            <AnalyticContainer className="history-analytic">
              <HistoryAna />
            </AnalyticContainer>
          </Section>
        </Row>
      </React.Fragment>
    );
  }
}
