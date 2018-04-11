import React from 'react';
import StaffHeader from './StaffHeader.js'
import Staff from './STAFF.js'
import StaffitemPanel from './StaffitemPanel.js'
import StaffFooter from './StaffFooter.js'
import StaffDetail from './StaffDetail'
class App extends React.Component {
	constructor() {
		super();
		this.state = {
			staff: new Staff,
			staffDetail: null
		}
	}
	// 搜索
	search(word) {
		this.setState({
			staff: this.state.staff.searchStaff(word)
		})
	}
	// 筛选
	filt(filtType) {
		this.setState({
			staff: this.state.staff.filtStaff(filtType)
		})
	}
	// 排序
	sort(sortType) {
		this.setState({
			staff: this.state.staff.sortStaff(sortType)
		})
	}
	// 删除
	removeStaffItem(key) {
		this.setState({
			staff: this.state.staff.removeStaffItem(key)
		})
	}
	// 详情
	// 打开
	detailStaffItem(key) {
		console.log('详情')
		this.setState({
			staffDetail: this.state.staff.staff.filter(item => {
				return item.key == key;
			})[0]
		});
	}
	// 编辑
	editDetail(item) {
		this.setState({
			staff: this.state.staff.editStaffItem(item)
		})
	}
	// 添加
	addStaffItem(item) {
		this.setState({
			staff: this.state.staff.addStaffItem(item)
		})
	}
	// 关闭
	closeDetail() {
		this.setState({
			staffDetail: null
		});
	}
	render() {
		return (
			<div>
				<StaffHeader searchStaff={this.search.bind(this)} filtStaff={this.filt.bind(this)} sortStaff={this.sort.bind(this)} />
				<StaffitemPanel items={this.state.staff.staff}
					removeStaffItem={this.removeStaffItem.bind(this)} detailStaffItem={this.detailStaffItem.bind(this)} />
				<StaffFooter addStaffItem={this.addStaffItem.bind(this)} />
				<StaffDetail staffDetail={this.state.staffDetail} editDetail={this.editDetail.bind(this)} closeDetail={this.closeDetail.bind(this)} />
			</div>
		)
	}
}
React.render(<App />, document.getElementById('app'))