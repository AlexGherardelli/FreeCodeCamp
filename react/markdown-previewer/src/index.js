import React from 'react';
import ReactDOM from 'react-dom';
import marked from 'marked';
// import './reset.css';
import './index.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        const markdown_text = `# Learning web development

![alt text](https://softwareengineeringdaily.com/wp-content/uploads/2017/01/freecodecamp.jpeg "FreeCodeCamp Header")

If you want to learn to **web development** you should head to [FreeCodeCamp](http://www.freecodecamp.org). On FreeCodeCamp you can learn:
- HTML
- CSS
- JavaScript
- many popular JavaScript libraries such as jQuery and React


## Why learn to code

> Talk is cheap. Show me the code! (Linus Torvalds)

\`\`\`javascript
      if (sad) {
            sad.stop();
            beAwesome();
        }

\`\`\` `
        this.state = {
            value: markdown_text,
        }
        this.onTextChange = this.onTextChange.bind(this);
    }
    onTextChange(text) {
        this.setState({ value: text });
    }

    render(){
        return (
            <div className="container">
                <div className="row header">
                    <Header />
                </div>
                <div className="row">
                    <Text value={this.state.value} onTextChange={this.onTextChange} />
                    <Preview value={this.state.value} />
                </div>
                <div className="row">
                    <Footer />
                </div>
            </div>
        )
    }
}

class Text extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        // this.setState({value: event.target.value});
        this.props.onTextChange(event.target.value);
    }
    render(){
        return (
            <div className="col">
                <textarea name="editor" id="editor"
                    value={this.props.value}
                onChange={this.handleChange}
                >
                    
            </textarea>
            </div>
        )
    }
}

class Preview extends React.Component{
    getMarkdownText() {
        let rawMarkup = marked(this.props.value, { sanitize: true });
        return { __html: rawMarkup };
    }

    render(){
        return (
            <div className="col preview"
                dangerouslySetInnerHTML={this.getMarkdownText()} id="preview" >
            </div>
        )
    }

}

const Header = () => {
    return(
        <div className="col">
            <h1 id="title"> **Markdown** </h1>
        </div>
    )
}

const Footer = () => {
    return (
        <div className="col center">
            < p className="font_small">Made with love by <a className="font_small" href="http : //github.com/alexgherardelli">Gherds</a></p>
        </div>
    )

}





ReactDOM.render(<App />, document.getElementById('root'));

