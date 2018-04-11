import React from 'react'
export default class StaffFooter extends React.Component {
  handlerAddClick(evt) {
    evt.preventDefault();
    let item = {}
    let addForm = React.findDOMNode(this.refs.addForm);
    let sex = addForm.querySelector('#staffAddSex');
    let id = addForm.querySelector('#staffAddId');
    item.name = addForm.querySelector('#staffAddName').value.trim();
    item.age = addForm.querySelector('#staffAddAge').value.trim();
    item.sex = sex.options[sex.selectedIndex].value;
    item.id = id.options[id.selectedIndex].value;
    this.props.addStaffItem(item);
  }
  render() {
    return (
      <div>
        <h4 style={{ 'text-align': 'center' }}></h4><hr />
        <form ref="addForm" className="addForm">
          <label for="staffAddName" style={{ 'display': 'block' }}>姓名</label>
          <input ref='addName' id="staffAddName" type="text" placeholder='姓名' />
          <label for="staffAddAge" style={{ 'display': 'block' }}>年龄</label>
          <input ref='addAge' id="staffAddAge" type="text" placeholder='年龄' />
          <label for="staffAddSex" style={{ 'display': 'block' }}>性别</label>
          <select ref='addSex' id='staffAddSex'>
            <option value='男'>男</option>
            <option value='女'>女</option>
          </select>
          <label for='staffAddId' style={{ 'display': 'block' }}>身份</label>
          <select ref='addId' id='staffAddId'>
            <option value='主任'>主任</option>
            <option value='老师'>老师</option>
            <option value='学生'>学生</option>
          </select>
          <button onClick={this.handlerAddClick.bind(this)}>提交</button>
        </form>
      </div>
    )
  }
}