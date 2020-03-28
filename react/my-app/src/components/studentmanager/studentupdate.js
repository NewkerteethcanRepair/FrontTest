import React  ,{createRef} from "react";

export default function studentupdate(props) {
  let { updatedata } = props;
  let nameElement  = createRef();
  let ageElement   = createRef();
  let sexElement   = createRef();
  let classElement   = createRef();
  // let nameElement="";
  // let ageElement="";
  // let sexElement="";
  // let classElement="";
  // let nameElement = useRef(null);
  // let ageElement = useRef(null);
  // let sexElement = useRef(null);
  // let classElement = useRef(null);

  let d = new Map();
  function onInputChange(e) {
    // e.target.name
    console.log(d);
    console.log(e.target.name);

    d.set(e.target.name, e.target.defaultValue);
  }
  //   console.log(props.);

  return (
    <div>
      <h1>修改</h1>

      <div>
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
            <tr key={updatedata.id}>
              <td>
                <input
                  type="text"
                  name="name"
                  defaultValue={props.updatedata.name}
                  //   onChange={e => {
                  //     onInputChange(e);
                  //   }}
                  // ref={nameElement => (value = nameElement)}
                  ref={nameElement}
                  className="layui-input"
                />
              </td>
              <td>
                <input
                  type="text"
                  name="age"
                  defaultValue={props.updatedata.age}
                  //   onChange={e => {
                  //     onInputChange(e);
                  //   }}
                  // ref={ageElement => (value = ageElement)}
                  ref={ageElement}
                  className="layui-input"
                />
              </td>
              <td>
                {/* <input
                  type="text"
                  name="sex"
                  defaultValue={props.updatedata.sex}
                //   onChange={e => {
                //     onInputChange(e);
                //   }}
                  className="layui-input"
                /> */}

                <input
                  type="radio"
                  name="sex"
                  // ref={sexElement => (value = sexElement)}
                  ref={sexElement}
                  titie="男"
                  checked="props.updatedata.sex === '男'"
                  onChange={e => {
                    onInputChange(e);
                  }}
                />
                <label htmlFor="">男</label>
                <input
                  type="radio"
                  name="sex"
                  titie="女"
                  checked="props.updatedata.sex === '女'"
                  onChange={e => {
                    onInputChange(e);
                  }}
                />
                <label htmlFor="">女</label>
              </td>
              <td>
                <input
                  type="text"
                  name="class"
                  defaultValue={props.updatedata.class}
                  //   onChange={e => {
                  //     onInputChange(e);
                  //   }}
                  ref={classElement}
                  className="layui-input"
                />
              </td>
              <td>
                <button
                  className="layui-btn"
                  onClick={() => {
                    props.studentupdate({
                      id: updatedata.id,
                      name: nameElement.current.value,
                      age: ageElement.current.value,
                      sex: sexElement.current.checked ? "男" : "女",
                      class:classElement.current.value
                    });
                    // d.clear();

                    // element.current.defaultValue = '';
                  }}
                >
                  确定修改
                </button>
                <button
                  className="layui-btn layui-btn-danger"
                  onClick={() => {
                    props.studentupdate(d);
                    d.clear();
                    // element.current.defaultValue = '';
                  }}
                >
                  取消
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
