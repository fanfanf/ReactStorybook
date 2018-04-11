import React from 'react';
export default class StaffItem extends React.Component {
  handlerDelete(evt) {
    this.props.removeStaffItem(this.props.item.key)
  }
  handlerDetail(evt) {
    this.props.detailStaffItem(this.props.item.key)
  }
  render() {
    return (
      <tr style={{ 'cursor': 'pointer' }}>
        <td className="itemId">{this.props.item.info.name}</td>
        <td className="itemId">{this.props.item.info.age}</td>
        <td className="itemId">{this.props.item.info.id}</td>
        <td className="itemId">{this.props.item.info.sex}</td>
        <td className="itemId"><a className="itemBtn" onClick={this.handlerDelete.bind(this)}>删除</a><a className="itemBtn" onClick={this.handlerDetail.bind(this)}>详情</a></td>
      </tr>
    )
  }
}