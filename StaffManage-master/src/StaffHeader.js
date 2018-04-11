import React from 'react';
export default class StaffHeader extends React.Component {
	// 搜索
	handleSearch() {
		let bar = React.findDOMNode(this.refs.searchBar)
		let value = bar.value
		// 子组件的值改变时触发此事件将值实时的传给父组件
		this.props.searchStaff(value)
	}
	// 筛选
	handleIdChange() {
		let sel = React.findDOMNode(this.refs.selId)
		let selValue = sel.options[sel.selectedIndex].value
		this.props.filtStaff(selValue)
	}
	// 排序
	handleOrderChange() {
		let sel = React.findDOMNode(this.refs.selOrder)
		let selValue = sel.options[sel.selectedIndex].value
		this.props.sortStaff(selValue)
	}
	render() {
		return (
			<div>
				<h3 style={{ 'text-align': 'center' }}>人员管理系统 </h3>
				<table className="optHeader">
					<tr>
						<td className="headerTd">
							<input type="text" placeholder="搜索"
								ref="searchBar" onChange={this.handleSearch.bind(this)} />
						</td>
						<td className="headerTd">
							<label for="idSelect">人员筛选</label>
							<select id="idSelect" ref="selId" onChange={this.handleIdChange.bind(this)}>
								<option value="0">全部</option>
								<option value="1">主任</option>
								<option value="2">老师</option>
								<option value="3">学生</option>
							</select>
						</td>
						<td>
							<label for='orderSelect'>排列方式</label>
							<select id='orderSelect' ref="selOrder" onChange={this.handleOrderChange.bind(this)}>
								<option value='0'>身份</option>
								<option value='1'>年龄升</option>
								<option value='2'>年龄降</option>
							</select>
						</td>
					</tr>
				</table>
			</div>
		)
	}
}