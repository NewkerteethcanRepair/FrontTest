import React, { Component } from "react";
import { connect } from "react-redux";
import "./cinemaDetailandOrder.css";
import cinemaimg from "../../img/cinemaimg.png";
import { Tag } from 'antd';
import { getCinemadataAsync } from "../../store/cinemadata/actions";
class cinemaDetailandOrder extends Component {
  componentDidMount() {
    this.props.dispatch(getCinemadataAsync())
    console.log(this.props.match.params._id);
    let ponit=this.props.CinemaData.map((item,index)=>{
        if(this.props.match.params._id=item._id);
        {
            return {longitude:[item.longitude],latitude:[item.latitude]}
        }
    })

    //百度地图
  var map = new BMap.Map("allmap");
  var point = new BMap.Point(ponit.longitude, ponit.latitude);
  var marker = new BMap.Marker(point); // 创建标注
  map.addOverlay(marker); // 将标注添加到地图中
  marker.setAnimation(BMAP_ANIMATION_BOUNCE); //跳动的动画

  map.centerAndZoom(new BMap.Point(ponit.longitude, ponit.latitude), 8);
  setTimeout(function () {
    map.setZoom(14);
  }, 2000); //2秒后放大到14级
  map.enableScrollWheelZoom(true);
  map.centerAndZoom(point, 12);
  }
  render() {
    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="img-cinema">
                {this.props.CinemaData.map((item, index) => {
                  if (item._id == this.props.match.params._id) {
                    return (
                      <div className="cinema-header-list" key={item._id}>
                        <div> <img src={cinemaimg} alt=""></img></div>
                        <div>
                          <h4>{item.CinemaName}</h4>
                          <p>地址：{item.address}</p>
                          <p>联系电话{item.Telephone}</p>
                          <p className="cinemaserve">影院服务————————————————————</p>
                          <div>
                            {item.feature.map((tagname, tagindex) => {
                              return <Tag color="processing" key={tagindex}>{tagname}</Tag>;
                            })}
                          </div>
                        </div>
                        
                      </div>
                    );
                  }
                })}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
const mapStateToProps = (state) => ({ CinemaData: state.CinemaData });

export default connect(mapStateToProps)(cinemaDetailandOrder);
