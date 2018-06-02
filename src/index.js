// JavaScript source code
import React from "react"
import ReactDOM from "react-dom"

class App extends React.Component {
    render() {
        return <ComponentListContainer/>
    }
}


class ComponentListContainer_es5 extends React.Component {
    constructor(props) {
        super(props);
        this.state = { comments: [] };
    }

    componentDidMount() {
        var cs = fetchComments_es5();
        this.setState({ comments: cs });
    }

    render() {
        return <CommentList commentList={this.state.comments} />
    }

}

class ComponentListContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = { comments: [] };
        this.handleFetch = this.handleFetch.bind(this);
    }

    handleFetch(cs) {
        this.setState({ comments: cs });
    }

    handleFetch2(cs) {
        this.setState({ comments: cs });
    }

    handleFetch1 = (cs) => {
        this.setState({ comments: cs });
    };

    componentDidMount() {
        //fetchComments1(this.handleFetch1);
        //fetchComments1(this.handleFetch);
        //fetchComments1(cs => this.handleFetch2(cs));
        fetchComments(cs => this.setState({comments:cs}));
    }

    render() {
        return <CommentList commentList={this.state.comments} />
    }

}


class CommentList extends React.Component {
    render() {
        return (
            <ul>
                {this.props.commentList.map(c => (
                    <li>{c.body} - {c.author} </li>
                    )
                )}
            </ul>
        );
    }
}

/*
  
 */
const fetchComments_es5 = function () {
    var comments = ([{ author: "Chan", body: "You look nice today." },
        { author: "You", body: "I know, right?!" }]);
    return comments;
};

const fetchComments = handler => handler(
    [
        { author: "Chan", body: "You look nice today." },
        { author: "You", body: "I know, right?!" }
    ]
);

const fetchComments1 = function (handler) {
    return handler(
        [
            { author: "Chan", body: "You look nice today." },
            { author: "You", body: "I know, right?!" }
        ]
    );
}




ReactDOM.render(<App />, document.getElementById("content"));