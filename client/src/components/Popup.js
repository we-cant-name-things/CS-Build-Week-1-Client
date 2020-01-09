import React from "react";
import {connect} from "react-redux";
import {MAP_HEIGHT} from "../constants";
import styled from "styled-components";

const PopupStyles = styled.div`
  font-size: 14px;
  padding: 16px 12px;
  position: absolute;
  bottom: 160px;
  left: 400px;
  height: 240px;
  background: rgba(3, 3, 3, 0.85);
  border: 3px solid #888;

  p {
    margin-bottom: 24px;
  }
`;

const OptionStyles = styled.div`
  margin: 12px 0 24px;

  button {
    height: 40px;
    background-color: #6f1eff;
    color: white;
    padding: 8px 16px;
    border-radius: 4px;
  }
`;

const cost = {
  food: 2,
  water: 3
};

const nextDestination = {
  option1: "Los Angeles",
  option2: "San Francisco"
};

const Popup = ({player}) => {
  // console.log(props.player);
  return (
    <PopupStyles>
      <p>Choose your next destination:</p>
      {/* 
      Whichever user chooses,
      send state to backend
      [ ] GET request next destination
      [ ] Redux action to handle axios POST

      Cost: random int between -1 and -4
      */}
      <div>
        {player.left && (
          <OptionStyles>
            <button>{player.left}</button>
            {/* {` Food -${cost.food}, Water -${cost.water}`} */}
          </OptionStyles>
        )}
        {player.right && (
          <OptionStyles>
            <button>{player.right}</button>
            {/* {` Food -${cost.food}, Water -${cost.water}`} */}
          </OptionStyles>
        )}
        <p style={{color: "red"}}>Walk down to stay here.</p>
      </div>
    </PopupStyles>
  );
};

const mapStateToProps = state => {
  return {
    ...state
  };
};

export default connect(mapStateToProps)(Popup);
