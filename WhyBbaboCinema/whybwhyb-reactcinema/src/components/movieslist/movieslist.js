import React, { Component } from "react";
// import React, { Component } from "react";
import { connect } from "react-redux";
// import "./main.css";
// import { Carousel } from "antd";
import { getMoivesdataAsync } from "../../store/mainmoviedata/actions";
import { Pagination } from "antd";
import "./movieslist.css";
class movieslist extends Component {
  componentDidMount() {
    this.props.dispatch(getMoivesdataAsync());
  }
  state = {
    current: 3,
    _id:""
  };

  onChange = (page) => {
    console.log(page);
    this.setState({
      current: page,
    });
  };
  onShowSizeChange = (current, pageSize) => {
    console.log(current, pageSize);
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
    this.props.history.push("/moviesdetail/"+_id)


    // this.props.history.push({pathname:'/demo',state:{id:12,name:'dahuang'}})
  };
  ordermovies = (_id) => {};

  //   详情页面点击事件

  render() {
    const { MoviesData } = this.props;
    console.log('====================================');
    console.log({MoviesData});
    console.log('====================================');
    return (
      <>
        <div className="container">
          <div className="moviesmenu">
            <div className="row"></div>
          </div>

          <div className="movieslist">
            <div className="row">
              <div className="col-sm-12">
                <div style={{ textAlign: "center" }}>
                  <Pagination
                    total={50}
                    defaultCurrent={1}
                    defaultPageSize={5}
                    showSizeChanger
                    showQuickJumper
                    onShowSizeChange={this.onShowSizeChange}
                    current={this.state.current}
                    onChange={this.onChange}
                    showTotal={(total) => `Total ${total} items`}
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
                            onClick={()=>{
                                this.ordermovies(item._id)
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
                        <p>
                         {item.DetailInfor}
                        </p>
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
