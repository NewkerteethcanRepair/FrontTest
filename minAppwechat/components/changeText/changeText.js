// components/changeText/changeText.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    count:"",
  },

  /**
   * 组件的方法列表
   */
  methods: {
    myincrement(){
      //父亲传过来的方法
      this.triggerEvent("increment")
    },
    inputcount(e){
      console.log(e);
      
      this.setData({
        count:e.detail.value
      })

    },
    setcount(){
    this.triggerEvent("setcount",{count:this.data.count})
    }
  }
})
