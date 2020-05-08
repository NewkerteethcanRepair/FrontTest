import React, { Component } from "react";
import { connect } from "react-redux";
import "./main.css";
import { Carousel } from "antd";
import { getMoivesdataAsync } from "../../store/mainmoviedata/actions";
import lunbo1 from "../../img/lunbo (1).jpg";
import lunbo2 from "../../img/lunbo (2).jpg";
import lunbo3 from "../../img/lunbo (3).jpg";
import lunbo4 from "../../img/lunbo (4).jpg";
import lunbo5 from "../../img/lunbo (5).jpg";
// const imgRelative = "../../../images/moviesimg (11).jpg"
let lunbo = [lunbo1, lunbo2, lunbo3, lunbo4, lunbo5];
class Main extends Component {
  componentDidMount() {
    this.props.dispatch(getMoivesdataAsync({pageSize:1000,current:1}));
  }
  onChange = () => {};
  moviesdetail=(_id)=>{
    this.props.history.push("/main/moviesdetail/"+_id)
  }
  render() {
    const { MoviesData } = this.props;

    // console.log(typeof MoviesData);
    // console.log(MoviesData);

    // console.log('====================================');
    // console.log( this.props);
    // console.log('====================================');
  
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <Carousel effect="fade" autoplay afterChange={this.onChange}>
                {lunbo.map((item, index) => {
                  return (
                    <div key={index}>
                      <img src={item} width="100%" />
                    </div>
                  );
                })}
              </Carousel>
            </div>
          </div>
          {/* //下面电影近期推荐 */}
          <div className="row">
            <div className="col-lg-8">
              <h3 style={{ color: "white" }}>近期热门</h3>
              <div className="movieslist-hot">
                <div className="row">
                  {MoviesData.map((item, index) => {
                    return (
                      <div className="col-lg-3" key={item._id} >
                        <div key={item._id} className="this-movie " onClick={()=>[
                          this.moviesdetail(item._id)
                        ]}>
                          {/* {item.Movieimg} */}
                          <img
                            src={require("../../../images/" +
                              item.Movieimg +
                              ".jpg")}
                            alt=""
                          />
                          <p className="overflow-textcontorl">
                           
                            <strong >{item.MoviesName}</strong>
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            {/* //右边时间表 */}
            <div className="col-sm-4">
              <h4 style={{ color: "white" }}>近期电影</h4>
            
                {/* <div className="col-sm-12"> */}
                <div className="movies-recent">
                  {MoviesData.map((item, index) => {
                    if (index <= 5) {
                      return (
                        <div className="col-sm-12" key={item._id}>
                        
                            <div className="this-recent clearfix" >
                              <img
                                src={require("../../../images/" +
                                  item.Movieimg +
                                  ".jpg")}
                                alt=""
                                // width="100%"
                              />
                              <span><strong>{item.MoviesName}</strong></span>
                              {/* <span>类型:{item.Type}</span> */}
                              <span className="float-right">{item.Time}</span>
                            </div>
                       
                        </div>
                      );
                    }
                  })}
                  {/* </div> */}
              
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return { MoviesData: state.MoviesData };
};

export default connect(mapStateToProps)(Main);
