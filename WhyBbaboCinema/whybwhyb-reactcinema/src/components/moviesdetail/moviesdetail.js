import React, { Component } from "react";
import { connect } from "react-redux";
import { getMoivesdataAsync } from "../../store/mainmoviedata/actions";
import "./moviesdetail.css";
import biginforimg from "../../img/detailBigimg.jpg";
import Zmage from "react-zmage";
import { Tabs } from "antd";
const { TabPane } = Tabs;
class moviesdetail extends Component {
 
  componentDidMount() {
    // console.log("====================================");
    // if(window.scorllTop!=0){
    //   console.log('====================================');
    //   console.log(window.scorllTop);
    //   console.log('====================================');
    //   window.scorllTop=0
    // }
    // 、state传参( 刷新页面后参数要消失，state传的参数是加密的，
    // 比query传参好用)
    // console.log(this.props.location.state._id);

    // 方法2
    // params传参(刷新页面后参数不消失，参数会在地址栏显示)
    // console.log(this.props.match.params._id);

    this.props.dispatch(getMoivesdataAsync({pageSize:1000,current:1}));
  }
  state = {
    _id: "",
    size: "large",
  };

  callback(key) {
    console.log(key);
  }
  // 电影推荐跳转
  moviesrecommend(_id){

    this.props.history.push("/main/moviesdetail/"+_id)
  }
  render() {
    const { MoviesData } = this.props;
    const { size } = this.state;
    return (
      <>
        {MoviesData.map((item, index) => {
          if (item._id == this.props.match.params._id) {
            return (
              <div className="container" key={item._id}>
                <div className="row this-detail">
                  {/* 左边aside */}
                  <div className="col-sm-3">
                    <div className="aside-detail">
                      <div className="img-detail">
                        <img
                          src={require("../../../images/" +
                            item.Movieimg +
                            ".jpg")}
                          alt=""
                          width="100%"
                        ></img>
                      </div>
                      <div className="infor-detail">
                        <h5 style={{ color: "#888899" }}>基础信息:</h5>
                        <ul className="block-infor">
                          <li>
                            地区: <span>{item.Country}</span>
                          </li>
                          <li>
                            动画种类: <span>{item.Type}</span>
                          </li>
                          <li>
                            名称：<span>{item.MoviesName}</span>
                          </li>
                          <li>
                            导演: <span>{item.Director}</span>
                          </li>
                          <li>
                            首映时间: <span>{item.Time}</span>
                          </li>
                          {/* <li></li> */}
                        </ul>
                      </div>
                    </div>
                  </div>
                  {/* 右边article */}

                  <div className="col-sm-9">
                    <div className="article-detail">
                      <h4 style={{ color: "#d0e0f0" }}>
                        <strong> {item.MoviesName}</strong>
                      </h4>
                      <div className="article-infor">
                        <span>{item.DetailInfor}</span>
                      </div>
                      <div className="detail-handle">
                        <h5 style={{ color: "#d0e0f0", marginBottom: "20px" }}>
                          详情操作:
                        </h5>
                        <div>
                          <button className="btn btn-outline-dark">
                            预告片
                          </button>

                          <button className="btn btn-outline-dark">
                            立即购票
                          </button>
                        </div>
                        <div className="bigimg">
                          <h5>部分剧照</h5>
                          {/* <Zmage
                            src={biginforimg}
                            alt="放大图片并并滑动预览"
                          ></Zmage> */}
                        </div>
                      </div>
                    </div>
                    {/* //tab标签 评论和推荐 */}
                    <div className="row">
                      <div className="col-sm-12 tab-control">
                        <Tabs
                          alue={size}
                          defaultActiveKey="1"
                          onChange={this.callback}
                        >
                          <TabPane tab="相关推荐" key="1">
                            <div className="movies-recommendlist">
                              {MoviesData.map((item, index) => {
                                if (index <= 3) {
                                  return (
                                    <div
                                      className="movies-recommend"
                                      key={item._id}
                                      onClick={()=>{
                                      
                                        this.moviesrecommend(item._id)
                                      }}
                                    >
                                      <img
                                        src={require("../../../images/" +
                                          item.Movieimg +
                                          ".jpg")}
                                        alt=""
                                      ></img>
                                      <span>{item.MoviesName}</span>
                                    </div>
                                  );
                                }
                              })}
                            </div>
                          </TabPane>
                          <TabPane tab="评论" key="2"></TabPane>
                        </Tabs>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          }
        })}
      </>
    );
  }
}
const mapStateToProps = (state) => {
  return { MoviesData: state.MoviesData };
};

export default connect(mapStateToProps)(moviesdetail);
