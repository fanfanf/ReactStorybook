import React from 'react'
export default class StaffDetail extends React.Component {
  handlerClose(evt) {
    this.props.closeDetail();
  }
  handlerEdit(evt) {
    let item = {};
    let editTabel = React.findDOMNode(this.refs.editTabel);
    let sex = editTabel.querySelector('#staffEditSex');
    let id = editTabel.querySelector('#staffEditId');
    item.name = editTabel.querySelector('#staffEditName').value.trim();
    item.age = editTabel.querySelector('#staffEditAge').value.trim();
    item.sex = sex.options[sex.selectedIndex].value;
    item.id = id.options[id.selectedIndex].value;
    item.key = this.props.staffDetail.key
    this.props.editDetail(item);
  }
  render() {
    let staffDetail = this.props.staffDetail;
    if (!staffDetail)
      return null;
    return (
      <div className="overLay">
        <h4 style={{ 'text-align': 'center' }}>点击'完成'保存修改,点击'关闭'放弃未保存修改并退出.</h4><hr />
        <form ref="editTabel" className="addForm">
          <label for="staffAddName">姓名</label>
          <input ref='addName' id="staffAddName" type="text" placeholder='姓名' defaultValue={staffDetail.info.name} />
          <label for="staffAddAge" >年龄</label>
          <input ref='addAge' id="staffAddAge" type="text" placeholder='年龄' defaultValue={staffDetail.info.age} />
          <label for="staffAddSex">性别</label>
          <select ref='addSex' id='staffAddSex' defaultValue={staffDetail.info.sex}>
            <option value='男'>男</option>
            <option value='女'>女</option>
          </select>
          <label for='staffAddId'>身份</label>
          <select ref='addId' id='staffAddId' defaultValue={staffDetail.info.id}>
            <option value='主任'>主任</option>
            <option value='老师'>老师</option>
            <option value='学生'>学生</option>
          </select>
          <button onClick={this.handlerEdit.bind(this)}>完成</button>
          <button onClick={this.handlerClose.bind(this)}>关闭</button>
        </form>
      </div>
    )
  }
}