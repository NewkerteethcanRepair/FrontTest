import React, { Component } from 'react'
// import React, { Component } from "react";
import { connect } from "react-redux";
// import {getCinemadataAsync} from "../../"
import { getCinemadataAsync } from "../../store/cinemadata/actions";
import  "./cinema.css"
import { Tag } from 'antd';

class cinema extends Component {
    componentDidMount(){
     this.props.dispatch(getCinemadataAsync())
    }
    // 点击事件
    selectCinema=(_id)=>{
        this.props.history.push("/main/Cinemadetailandorder/"+_id)
    }
    render() {
        // const {CinemaData}=this.props;
        // console.log(CinemaData);
        
        return (
            <>
             <div className="container">
                 <div className="row">
                     <div className="col-sm-12">
                         <div className="cinema-list">
                             <h4>
                                 影院列表
                             </h4>

                             {

                                this.props.CinemaData.map((item,index)=>{
                                return(
                              <div className="this-cinema" key={item._id}>  
                              
                              <p>{item.CinemaName}</p>
                              <p><span>地址: {item.address}</span></p>
                              
                              <div className="cinematag">
                                {item.feature.map((tagname,tagindex)=>{

                               return(<Tag color="processing" key={tagindex}>{tagname}</Tag>)
                                })}
                              <button className="btn btn-outline-dark select-seat-buy float-right" onClick={()=>{
                                  this.selectCinema(item._id)
                              }}>选座购票</button>
                              </div>

                              </div>
                             
                             )
                             })

                             }
                            
                         </div>
                     </div>
                 </div>
             </div>
            </>
        )
    }
}
const mapStateToProps = (state) => (
    { CinemaData: state.CinemaData }
);

  export default connect(mapStateToProps)(cinema);