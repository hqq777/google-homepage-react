import React, { Component } from 'react';
import './content.scss';

class Content extends Component {
    constructor(props){
        super(props);

        this.state = {
            value: '',
            history: [],
            searchFormStyle: 'search-form',
            searchLineStyle: 'search-line',
            searchHrStyle: 'search-hr',
            searchHistoryStyle: 'search-history',
        };

        this.search_history_focus = this.search_history_focus.bind(this);
        this.search_history_blur = this.search_history_blur.bind(this);
        this.add_history_html = this.add_history_html.bind(this);
        this.input_history_logic = this.input_history_logic.bind(this);
        this.add_history_logic = this.add_history_logic.bind(this);
        this.relevant_history = this.relevant_history.bind(this);
        this.remove_history = this.remove_history.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    search_history_focus(){
        console.log("search_history_focus");
        this.props.contentStatusChange(true);

        //css change
        this.setState({searchFormStyle: 'search-form search-form-focus'});
        this.setState({searchLineStyle: 'search-line search-line-focus'});
        this.setState({searchHrStyle: 'search-hr search-hr-focus'});
        this.setState({searchHistoryStyle: 'search-history search-history-focus'});
        
        //read history
        let node =  {"h": []};
        if(localStorage.getItem("history"))
            node = JSON.parse(localStorage.getItem("history")); 
        let history_arr = node["h"];
        this.add_history_html(history_arr);
    }

    search_history_blur(){
        console.log("search_history_blur");
        this.props.contentStatusChange(false);
        this.setState({searchFormStyle: 'search-form search-form-blur'});
        this.setState({searchLineStyle: 'search-line search-line-blur'});
        this.setState({searchHrStyle: 'search-hr search-hr-blur'});
        this.setState({searchHistoryStyle: 'search-history search-history-blur'});
        // this.refs.searchLine.style.removeProperty("box-shadow"); 
        this.setState({value: ""});
    }


    // search-match

    input_history_logic(node, str){
        if(node["h"].includes(str))
            node["h"].splice(node["h"].indexOf(str), 1);
        if(str !== "" && str != null)
            node["h"].unshift(str);
    }

    add_history_logic(){
        console.log("add_history");
        let str = this.state.value;
        let node =  {"h": []};
        if(localStorage.getItem("history"))
            node = JSON.parse(localStorage.getItem("history")); 
        console.log(node);
        this.input_history_logic(node, str);
        console.log(node);
        localStorage.setItem("history",JSON.stringify(node));
        console.log(localStorage.getItem("history"));
    }

    handleChange(event) {
        this.setState(
            {
                value: event.target.value
            },
            () => this.relevant_history()
        );    
    }

    relevant_history(){
        console.log("relevant_history");
        let str = this.state.value;
        if(localStorage.getItem("history")){
            let node = JSON.parse(localStorage.getItem("history")); 
            let history_arr = node["h"];
            const regExp = new RegExp(`^${str}`);
            let r_history =  [];
            for(let idx = 0; idx < history_arr.length; idx ++){
                if(history_arr[idx].search(regExp) !== -1)
                    r_history.push(history_arr[idx]);
            }
            console.log(r_history);
            this.add_history_html(r_history);
        }
    }   
    add_history_html(history_arr){   
        console.log("add_history_html"); 
        if(history_arr.length > 10)
            history_arr.length = 10;
        this.setState({history: history_arr});  
    }

    //remove history
    remove_history(e, data){
        e.stopPropagation();//?????????????????????????????????
        let search_text = data;
        if(localStorage.getItem("history")){
            let node = JSON.parse(localStorage.getItem("history")); 
            let history_arr = node["h"];
            console.log(search_text);
            console.log(history_arr.indexOf(search_text));
            history_arr.splice(history_arr.indexOf(search_text), 1);
            localStorage.setItem("history",JSON.stringify(node));
            this.add_history_html(history_arr);
        }
    }   

    render() {
        return (
            <main>
                <img className="google-img" alt="Google" src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" />
                <form ref="searchForm" className={this.state.searchFormStyle}>
                    <div className="search-input">
                        <div ref = "searchLine" className={this.state.searchLineStyle}>
                            <svg className="svg-search" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" fill="#9AA0A6"></path>
                            </svg>
                            <input ref="searchText" type="text"  autoComplete="off"  value={this.state.value} onChange={this.handleChange} onFocus={this.search_history_focus} onBlur={this.search_history_blur}/>
                            <svg className="svg-voice" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="m12 15c1.66 0 3-1.31 3-2.97v-7.02c0-1.66-1.34-3.01-3-3.01s-3 1.34-3 3.01v7.02c0 1.66 1.34 2.97 3 2.97z" fill="#4285f4"></path>
                                <path d="m11 18.08h2v3.92h-2z" fill="#34a853"></path>
                                <path d="m7.05 16.87c-1.27-1.33-2.05-2.83-2.05-4.87h2c0 1.45 0.56 2.42 1.47 3.38v0.32l-1.15 1.18z" fill="#f4b400"></path>
                                <path d="m12 16.93a4.97 5.25 0 0 1 -3.54 -1.55l-1.41 1.49c1.26 1.34 3.02 2.13 4.95 2.13 3.87 0 6.99-2.92 6.99-7h-1.99c0 2.92-2.24 4.93-5 4.93z" fill="#ea4335"></path>
                            </svg>
                        </div>
                        <hr ref="searchHr" className={this.state.searchHrStyle} />
                        <div ref="searchHistory" className={this.state.searchHistoryStyle}>
                        {
                            this.state.history.map((historyItem) => (
                                <div className="search-history-item">
                                    <img src="https://img.icons8.com/android/24/000000/clock.png" alt="search-icon"/>
                                    <a href="# ">{historyItem}</a>
                                    <span className="remove" onMouseDown={(e)=> this.remove_history(e,historyItem)}>Remove</span>
                                </div>
                            ))
                        }
                        </div> 
                    </div>
                    <div ref="searchButtonGroup" className="search-button-group">
                        <input ref ="searchButton" value="Google Search" type="submit" onMouseDown={this.add_history_logic} />
                        <input value="I'm Feeling Lucky" type="submit" />
                    </div>
                </form>
            </main>
        )
    }
};

export default Content;