import React, { Component } from "react";
import { connect } from "react-redux";
import "./cinemaDetailandOrder.css";
import cinemaimg from "../../img/cinemaimg.png";
import { Tag,Table } from "antd";
import BMap from "BMap";
// import { Table } from 'antd';
// import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { getCinemadataAsync } from "../../store/cinemadata/actions";
import { getMoivesdataAsync } from "../../store/mainmoviedata/actions";


// tabledata

const dataSource = [
  {
    key: '1',
    time: '13:45',
    language: "中文",
    room: '3号厅',
    prices:"36",
  },
  {
    key: '2',
    time: '15:45',
    language: "中文",
    room: '2号厅',
    prices:"36",
  },
  {
    key: '3',
    time: '17:45',
    language: "中文",
    room: '4号厅',
    prices:"42",
  },
  {
    key: '4',
    time: '19:45',
    language: "中文",
    room: '5号厅',
    prices:"46",
  },
];

const columns = [
  {
    title: '放映时间',
    dataIndex: 'time',
    key: 'time',
  },
  {
    title: '语言版本',
    dataIndex: 'language',
    key: 'language',
  },
  {
    title: '放映厅',
    dataIndex: 'room',
    key: 'room',
  },
  {
    title: '价格',
    dataIndex: 'prices',
    key: 'prices',
  },
  {
    title:"操作",
    key:"action",
    render:()=>{
     return( <span>
        <button className="btn btn-outline-dark">立即购票</button>
      </span>)
    },
  },
];
class cinemaDetailandOrder extends Component {
  state={
    isclickmovies:0,
    movies_id:"",
  
    isclick:0,
    datetime:[

      {date:"",},
      {date:"",},
      {date:"",},
    ]
    
    
    
  }
  
  componentDidMount() {
    this.props.dispatch(getCinemadataAsync());
    this.props.dispatch(getMoivesdataAsync());
    console.log(this.props.match.params._id);
    let ponit = this.props.CinemaData.map((item, index) => {
      if ((this.props.match.params._id = item._id));
      {
        return { longitude: [item.longitude], latitude: [item.latitude] };
      }
    });

    
    // 进来第一次选择第一个电影
    this.props.MoviesData.map((item,index)=>{
      if(index===0){

        this.setState({
          movies_id:item._id
        })
      }
    })

    // 时间获取
    // let day1 = new Date();
    // day1.setDate(day1.getDate() );
    // day1=day1.toLocaleDateString()
    
    // let day2 = new Date();
    // day2.setDate(day1.getDate() + 1);

    // let day3 = new Date();
    // day3.setDate(day1.getDate() + 2);

    this.setState({
     
      datetime:[
        {date:this.getDay(0,"-")},
        {date:this.getDay(1,"-")},
        {date:this.getDay(2,"-")},
      ]
    },()=>{
      // console.log(this.state.datetime[0].date);
      
    })

    //百度地图
    // var map = new BMap.Map("allmap");
    // var point = new BMap.Point(ponit.longitude, ponit.latitude);
    // var marker = new BMap.Marker(point); // 创建标注
    // map.addOverlay(marker); // 将标注添加到地图中
    // // // marker.setAnimation(BMAP_ANIMATION_BOUNCE); //跳动的动画

    // map.centerAndZoom(new BMap.Point(ponit.longitude, ponit.latitude), 8);
    // setTimeout(function () {
    //   map.setZoom(14);
    // }, 2000); //2秒后放大到14级
    // map.enableScrollWheelZoom(true);
    // map.centerAndZoom(point, 12);

  }

  //列表 电影点击
  clickmovies=(_id,index)=>{
    console.log("123");
    
    this.setState({
      movies_id:_id,
      isclickmovies:index

    })
  }

  //排片
  firmSchedule=()=>{

  }
  // 时间
  //day +1 后天 -1前天
  getDay=(num,str)=>{
 
    var today = new Date();
    var nowTime = today.getTime();
    var ms = 24*3600*1000*num;
    today.setTime(parseInt(nowTime + ms));
    var oYear = today.getFullYear();
    var oMoth = (today.getMonth() + 1).toString();
    if (oMoth.length <= 1) oMoth = '0' + oMoth;
    var oDay = today.getDate().toString();
    if (oDay.length <= 1) oDay = '0' + oDay;
    return oYear + str + oMoth + str + oDay;

  }

  // 排片日期
  datecontrol=(getindex)=>{
    console.log("sda");
    
    this.state.datetime.map((item,index)=>{
      if(index===getindex){
        this.setState({
            ...this.state,
            isclick:index
          
        })
      }
    })
  

  }
  render() {


    // const settings = {
    //   dots: true,
    //   infinite: true,
    //   speed: 500,
    //   slidesToShow: 1,
    //   slidesToScroll: 1
    // };
    const { MoviesData } = this.props;
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
                        <div>
                          {" "}
                          <img src={cinemaimg} alt=""></img>
                        </div>
                        <div>
                          <h4>{item.CinemaName}</h4>
                          <p>地址：{item.address}</p>
                          <p>联系电话{item.Telephone}</p>
                          <p className="cinemaserve">
                            影院服务————————————————————
                          </p>
                          <div>
                            {item.feature.map((tagname, tagindex) => {
                              return (
                                <Tag color="processing" key={tagindex}>
                                  {tagname}
                                </Tag>
                              );
                            })}
                          </div>
                        </div>
                        {/* <div id="allmap"></div> */}
                      </div>
                    );
                  }
                })}
              </div>
            </div>
          </div>
          {/* //影片列表 */}
          <div className="row">
            <div className="col-sm-12">
            {/* <Table scroll={{ x: 1300 }} /> */}
              <div className="movieslist-list">
           
                {MoviesData.map((item, index) => {
                  if (index < 6) {
                    return (
                 <div className={`this-list ${this.state.movies_id===item._id?'this-list-active':null}`}  key={item._id} onClick={()=>{
                   this.clickmovies(item._id,index)
                 }}>
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
                {/* <h3>12</h3> */}
               
                {/* <div>dsa</div> */}
              </div>
              
        
            </div>
            {/* <div ></div> */}
          </div>
          {/* 影片排片 */}
          <div className="row">

          <div className="col-sm-12">
              <div className={()=>{
                this.firmSchedule()
              }}>
                {
                  this.props.MoviesData.map((item,index)=>{
                    if( item._id===this.state.movies_id){
                      return(
                      <div key={item._id}>
                          <h5>
                            {item.MoviesName}
                          </h5>
                        <div className="firmSchedule-span">
                            <span>时长:123分钟</span>
                            <span>类型:{item.Type}</span>
                            <span>主演:{item.Starring.map((item,index)=>{
                              return (" "+item)
                            })}</span>

                        </div>

                        <div className="firmSchedule-date">
                            <span>观影时间: </span>
                            {this.state.datetime.map((item,index)=>{
                              {/* {`this-list ${this.state.movies_id===item._id?'this-list-active':null}`}  */}
                            return  (  <span  onClick={()=>{
                              this.datecontrol(index)
                            }}><strong className={` ${this.state.isclick===index? "strong-active" : ""}`}>{item.date}</strong></span>)
                            })}
                            {/* <span><strong>{this.state.date1}</strong></span>
                            <span><strong>{this.state.date2}</strong></span>
                            <span><strong>{this.state.date3}</strong></span> */}
                        </div>

                        <div>

                        <Table dataSource={dataSource} columns={columns} tableLayout="fixed"  />
                        </div>
                      </div>

                      )
                    }
                  })
                }
              </div>
          </div>
          </div>
        </div>
      </>
    );
  }
}
const mapStateToProps = (state) => ({
  CinemaData: state.CinemaData,
  MoviesData: state.MoviesData,
});

export default connect(mapStateToProps)(cinemaDetailandOrder);
