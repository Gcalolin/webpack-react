
import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import './style.scss'


export default class FooterBar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            activeIndex: 1
        }
    }
    chooseTab(index) {
        this.setState({
            activeIndex: index
        })
    }
    render() {
        const activeIndex = this.state.activeIndex
        return (
            <div className="footer-container-wrapper">
                <div className={['item', activeIndex===1?'active':null].join(' ')}
                    onClick={this.chooseTab.bind(this, 1)}>
                    <Link to="/home" >
                        <i className={['cicon', activeIndex===1?'icon-tast-list-checked':'icon-tast-list-uncheck'].join(' ')}></i>
                        <span>抢单列表</span>    
                    </Link>
                </div>
                <div className={['item', activeIndex===2?'active':null].join(' ')}
                    onClick={this.chooseTab.bind(this, 2)}>
                    <Link to="/taskCenter">
                        <i className={['cicon', activeIndex===2?'icon-task-center-checked':'icon-task-center-uncheck'].join(' ')}></i>
                        <span>任务列表</span>    
                    </Link>
                </div>
                <div className={['item', activeIndex===3?'active':null].join(' ')}
                    onClick={this.chooseTab.bind(this, 3)}>
                    <Link to="/my">
                        <i className={['cicon', activeIndex===3?'icon-person-center-checked':'icon-person-center-uncheck'].join(' ')}></i>
                        <span>个人中心</span>    
                    </Link>
                </div>
            </div>
        )
    }
}