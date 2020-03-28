import React from "react";
export default function studentadd(props) {
  // let element = createRef();
  let istrue = false;
  let d = new Map();
  function onInputChange(e) {
    // e.target.name
    console.log(e.target.name);

    d.set(e.target.name, e.target.value);
    console.log(d);
  }
  // let element = createRef();
  // const element = createRef();
  return (
    <div>
      <h1>添加</h1>
      <table className="layui-table" lay-skin="row">
        <thead>
          <tr>
            <th>学生</th>
            <th>年龄</th>
            <th>性别</th>
            <th>班级</th>
            <th>操作</th>
          </tr>
        </thead>

        <tbody>
          <tr key={props.id}>
            <td>
              <input
                type="text"
                name="name"
                onChange={e => {
                  onInputChange(e);
                }}
                className="layui-input"
              />
            </td>
            <td>
              <input
                type="text"
                name="age"
                onChange={e => {
                  onInputChange(e);
                }}
                className="layui-input"
              />
            </td>
            <td>
              {/* <input type="text" name="sex"     onChange={e=>{
                      onInputChange(e)
                  }}  className="layui-input"/> */}
              {/* <form class="layui-form layui-form-pane" action="">
  内部结构都一样，值得注意的是 复选框/开关/单选框 这些组合在该风格下需要额外添加 pane属性（否则会看起来比较别扭），如：
  <div class="layui-form-item" pane>
    <label class="layui-form-label">单选框</label>
    <div class="layui-input-block">
      <input type="radio" name="sex" value="男" title="男"/>
      <input type="radio" name="sex" value="女" title="女" />
    </div>
  </div>
</form> */}
{/* 
              <form className="layui-form" action="">
                <div className="layui-form-item">
                  <label className="layui-form-label">单选框</label>
                  <div className="layui-input-block">
                    <input type="radio" name="sex" value="男" title="男" />
                    <input type="radio" name="sex" value="女" title="女" />
                  </div>
                </div>
              </form> */}

              <input type="radio" name="sex" value="男" titie="男" onChange={(e)=>{
                                onInputChange(e)
                          }} />     
                           <label htmlFor="">男</label>
                          <input type="radio" name="sex"  value="女"  titie="女"   onChange={(e)=>{
                                onInputChange(e)
                          }} />
                          <label htmlFor="">女</label> 
            </td>

            <td>
              <input
                type="text"
                name="class"
                onChange={e => {
                  onInputChange(e);
                }}
                className="layui-input"
              />
            </td>
            <td>
              <button
                className="layui-btn"
                onClick={() => {
                  props.studentadd(d);
                  d.clear();
                  // element.current.value = '';
                }}
              >
                {" "}
                添加
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
