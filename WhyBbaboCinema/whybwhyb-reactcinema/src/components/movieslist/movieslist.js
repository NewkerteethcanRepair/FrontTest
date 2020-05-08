import React, { Component } from "react";
// import React, { Component } from "react";
import { connect } from "react-redux";
// import "./main.css";
// import { Carousel } from "antd";
import { getMoivesdataAsync } from "../../store/mainmoviedata/actions";
import { Pagination, BackTop } from "antd";
import "./movieslist.css";
import axios from "axios";
class movieslist extends Component {
  state = {
    current: 1,
    _id: "",
    pageSize: 10,
    total: "",
  };
  handleScroll(){
    // console.log(window.scrollY)
    // if(window.scrollY!=0){
    //   window.scrollY=0
    // }
  }
  componentDidMount() {

    console.log( document.body.scrollTop );
    
   
    // console.log(document.body.scrollTop);
    
    // if(document.scrollTop!=0)
    // {
    //   document.scrollTop=0;
    // }
    //   console.log(document.documentElement.scrollTop);

    //  if (document.documentElement.scrollTop!=0){
    //   document.documentElement.scrollTop=0
    //  }
    // window.addEventListener("scroll", this.handleScroll);

   
    axios
      .post("/Moviesinfor/getall")
      .then((res) => {
        console.log(res.data);
        this.setState(
          {
            total: res.data.length,
          },
          () => {
            this.props.dispatch(
              getMoivesdataAsync({
                pageSize: this.state.pageSize,
                current: this.state.current,
              })
            );
          }
        );
        // document.body.scrollTop=0
      })
      .catch((err) => {
        console.error(err);
      });
    // this.props.dispatch(getMoivesdataAsync({pageSize:this.state.pageSize,current:this.state.current}));
  }

  onChange = (page) => {
    // console.log(page);

    this.setState(
      {
        current: page,
        pageSize: this.state.pageSize,
      },
      () => {
        this.props.dispatch(
          getMoivesdataAsync({
            pageSize: this.state.pageSize,
            current: this.state.current,
          })
        );
      }
    );
  };
  onShowSizeChange = (current, pageSize) => {
    console.log(current, pageSize);
    // this.props.dispatch(getMoivesdataAsync({pageSize:this.state.pageSize,current:this.state.current}));
  };
  moviesdetail = (_id) => {
    console.log("sad1");
    // 刷新参数会消失

    // this.setState({
    //     _id:_id
    // },()=>{
    //     this.props.history.push({pathname:"/moviesdetail",state:{_id:_id}})
    // })
    // this.props.history.push({pathname:"/moviesdetail",state:{_id}})

    // 方法2
    this.props.history.push("/main/moviesdetail/" + _id);

    // this.props.history.push({pathname:'/demo',state:{id:12,name:'dahuang'}})
  };
  ordermovies = (_id) => {};

  //   详情页面点击事件

  render() {
    const { MoviesData } = this.props;
    console.log("====================================");
    console.log({ MoviesData });
    console.log("====================================");
    const style = {
      height: 40,
      width: 40,
      lineHeight: "40px",
      borderRadius: 4,
      backgroundColor: "#1088e9",
      color: "#fff",
      textAlign: "center",
      fontSize: 14,
    };
    return (
      <>
        <BackTop>
          <div style={style}>UP</div>
        </BackTop>
        <div className="container">
          <div className="moviesmenu">
            <div className="row"></div>
          </div>

          <div className="movieslist">
            <div className="row">
              <div className="col-sm-12">
                <div style={{ textAlign: "center" }}>
                  <Pagination
                    total={this.state.total}
                    defaultCurrent={1}
                    defaultPageSize={this.state.pageSize}
                    showSizeChanger
                    showQuickJumper
                    // pageSize={10}
                    onShowSizeChange={this.onShowSizeChange}
                    current={this.state.current}
                    onChange={this.onChange}
                    showTotal={(total) => `总计 ${this.state.total} 条`}
                  />
                </div>
              </div>
            </div>

            {/* //真正的列表渲染 */}
            <div className="row">
              {MoviesData.map((item, index) => {
                return (
                  <div className="col-sm-12" key={item._id}>
                    {/* // ['form-control',this.state.isdisplay==1?'is-valid':"is-invalid"].join(' ') */}
                    <div
                      className={
                        (index + 1) % 2 == 0
                          ? "changeColor this-movieslist"
                          : "this-movieslist"
                      }
                    >
                      <div className="this-imglist">
                        <img
                          src={require("../../../images/" +
                            item.Movieimg +
                            ".jpg")}
                          alt=""
                        ></img>
                        <div className="this-button">
                          <button
                            className="btn btn-dark"
                            onClick={() => {
                              this.moviesdetail(item._id);
                            }}
                          >
                            查看详情
                          </button>
                          <button
                            className="btn btn-dark"
                            onClick={() => {
                              this.ordermovies(item._id);
                            }}
                          >
                            立即购票
                          </button>
                        </div>
                      </div>
                      <div className="this-infor">
                        <h4>{item.MoviesName}</h4>
                        <p>种类：{item.Type}</p>
                        <p>编剧：{item.Director}</p>
                        <p>
                          明星：
                          {item.Starring.map((item, index) => {
                            return item + "  ";
                          })}
                        </p>
                        <p>其他名称：无</p>
                        <p>上映时间：{item.Time}</p>
                        <p>{item.DetailInfor}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </>
    );
  }
}
const mapStateToProps = (state) => {
  return { MoviesData: state.MoviesData };
};

export default connect(mapStateToProps)(movieslist);
