import React from "react";

class TableComponent extends React.Component {
  render() {
    return (
      <div className="box_container">
        <div className="box_container_inner">
          <div className="top_container">
            <div className="inner_box2">
              <textarea cols="40" rows="2" className="input_field"></textarea>
            </div>
            <div className="inner_box2">
              <textarea cols="40" rows="2" className="input_field"></textarea>
            </div>
            <div className="inner_box2">
              <textarea cols="40" rows="2" className="input_field"></textarea>
            </div>
            <div className="inner_box2">
              <textarea cols="40" rows="2" className="input_field"></textarea>
            </div>
          </div>
          <div className="middle1_container">
            <div className="inner_box2">
              <textarea cols="40" rows="2" className="input_field"></textarea>
            </div>
            <div
              className="inner_box2"
              style={{ border: "none", width: "100px" }}
            >
              <textarea cols="40" rows="2" className="input_field"></textarea>
            </div>
            <div className="inner_box2">
              <textarea cols="40" rows="2" className="input_field"></textarea>
            </div>
          </div>
          <div className="middle1_container">
            <div className="inner_box2">
              <textarea cols="40" rows="2" className="input_field"></textarea>
            </div>
            <div className="inner_box2">
              <textarea cols="40" rows="2" className="input_field"></textarea>
            </div>
          </div>
          <div className="top_container">
            <div className="inner_box2">
              <textarea cols="40" rows="2" className="input_field"></textarea>
            </div>
            <div className="inner_box2">
              <textarea cols="40" rows="2" className="input_field"></textarea>
            </div>
            <div className="inner_box2">
              <textarea cols="40" rows="2" className="input_field"></textarea>
            </div>
            <div className="inner_box2">
              <textarea cols="40" rows="2" className="input_field"></textarea>
            </div>
          </div>
        </div>
        <textarea
          rows="10"
          className="input_field"
          style={{ width: "200px", height: "200px", marginTop: "10px" }}
        ></textarea>
      </div>
    );
  }
}

export default TableComponent;
