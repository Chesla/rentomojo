import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Tree from './tree';

class App extends Component {

    constructor(){
        super();
        this.state = {
            tree: Tree
        }
    }
    render() {
        let {tree} = this.state;
        return (
          <div className="App">
            <div className="App-intro">
                {
                    Object.values(tree).map((el,i)=>{
                        return (
                            <SmallTeam
                                key={`${el.emp_name}-${i}`} 
                                name={el.emp_name}
                                emp_id={el.id}
                                designation={el.role}
                                team={el.team_info}
                                showChildren={el.showChildren}
                                callFromChild={(emp_id)=>{
                                    // console.log(37,'call from child',el,emp_id);
                                    if(el.id === emp_id){
                                        el.showChildren = !el.showChildren;
                                    } else {
                                        let temp_teams = el.team_info.teams;
                                        for(let i_team in temp_teams){
                                            temp_teams[i_team].showChildren = 
                                                i_team === emp_id ? !temp_teams[i_team].showChildren : false;
                                        }
                                    }
                                    this.setState({tree});
                                }}
                            />
                        );
                    })
                }
            </div>
          </div>
        );
    }
}

class SmallTeam extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            teamChange:true,
            team: props.team
        }
    }
    changeShowChildren(emp_id){
        // console.log(58,emp_id);
        this.props.callFromChild(emp_id);
    }
    render(){
        let {name,designation,showChildren,emp_id} = this.props;
        let {team} = this.state;
        if(!team.team_status)
            return (
                <div>Disabled</div>
            )
        return (
            <div>
                <div className="team-cnt">
                    <div className="teamName">
                        {team.team_name}
                    </div>
                    <div className="empDet">
                        <div className="empName">
                            {name}
                        </div>
                        <div  className="empDes">
                            {designation}
                        </div>
                    </div>
                    <div className="cmpDet">
                        <div className="empName">
                            {Object.keys(team.teams).length}
                        </div>
                        <div  className="empDes">
                            No of employee: Not known
                        </div>
                        
                            {Object.keys(team.teams).length ? 
                                <div onClick={this.changeShowChildren.bind(this,emp_id)}>
                                    {showChildren ?
                                        '-' : '+'
                                    }
                                </div>
                                : null
                            }
                    </div>
                </div>
                
                    {
                        Object.keys(team.teams).length && 
                            showChildren ?
                            <div style={{display:'flex'}}>
                                {
                                    Object.values(team.teams).map((el,i)=>{
                                        return (
                                            <SmallTeam
                                                key={`${el.emp_name}-${i}`} 
                                                name={el.emp_name}
                                                emp_id={el.id}
                                                designation={el.role}
                                                team={el.team_info}
                                                showChildren={el.showChildren}
                                                callFromChild={(emp_id)=>{
                                                    console.log(119,'call from inner child',emp_id,el.team_info.teams);
                                                    if(el.team_info.teams && el.team_info.teams.hasOwnProperty(emp_id)){
                                                        // console.log('match found',el.id,team.teams[el.id].team_info.teams);
                                                        let temp_teams = team.teams[el.id].team_info.teams;
                                                        for(let i_team in temp_teams){
                                                            temp_teams[i_team].showChildren = 
                                                                i_team === emp_id ? !temp_teams[i_team].showChildren : false;
                                                        }
                                                        this.setState({team});

                                                    } else {
                                                        this.props.callFromChild(emp_id);
                                                    }
                                                }}
                                            />
                                        );
                                    })
                                }
                            </div>
                            :null
                    }
                

            </div>
        );
    }
}

export default App;
